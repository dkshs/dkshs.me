"use server";

import type { ActionResult } from "@/hooks/useFormState";
import type { ContactSchema, contactSchema } from "./schema";
import { env } from "@/env";

export async function contactAction(
  data: ContactSchema,
): ActionResult<typeof contactSchema> {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("message", data.message);

  const res = await fetch(env.FORM_SEND_URL, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Something went wrong. Please try again later.");
  }

  return {
    success: true,
    message: "Message sent successfully!",
    errors: null,
    data,
  };
}
