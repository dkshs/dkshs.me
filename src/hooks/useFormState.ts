import type { inferFlattenedErrors, z, ZodType } from "zod";
import { useState, useTransition } from "react";

export interface FormState<T extends ZodType> {
  success: boolean;
  data: z.infer<T> | null;
  message: string | null;
  errors: inferFlattenedErrors<T, string>["fieldErrors"] | null;
}

export type ActionResult<T extends ZodType> = Promise<FormState<T>>;

export type UseFormStateProps<T extends ZodType> = {
  schema: T;
  action: (data: z.infer<T>) => ActionResult<T>;
  onSuccess?: (message?: string | null) => void;
  onError?: (
    message?: string | null,
    errors?: FormState<z.infer<T>>["errors"],
  ) => void;
  initialState?: FormState<z.infer<T>>;
};

export function useFormState<T extends ZodType>(props: UseFormStateProps<T>) {
  const [isPending, startTransition] = useTransition();

  const [formState, setFormState] = useState(
    props.initialState ?? {
      success: false,
      message: null,
      errors: null,
      data: null,
    },
  );

  function execute(data: z.infer<T>) {
    startTransition(async () => {
      const resultData = props.schema.safeParse(data);

      if (!resultData.success) {
        setFormState({
          success: false,
          message: "Invalid data",
          errors: resultData.error.flatten().fieldErrors,
          data: null,
        });
        return;
      }

      let state: FormState<T> | null = null;
      try {
        state = await props.action(data);
      } catch (error) {
        if (error instanceof Error) {
          state = {
            success: false,
            message: error.message,
            errors: null,
            data: null,
          };
        } else {
          state = {
            success: false,
            message: "An unknown error occurred",
            errors: null,
            data: null,
          };
        }
      }

      if (state.success && props.onSuccess) {
        props.onSuccess(state.message);
      }
      if (!state.success && props.onError) {
        props.onError(state.message, state.errors);
      }

      setFormState(state);
    });
  }

  return { formState, isPending, execute };
}
