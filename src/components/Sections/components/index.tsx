import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionRootProps extends HTMLAttributes<HTMLElement> {}

const SectionRoot = forwardRef<HTMLElement, SectionRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        className={cn("py-20 mdlg:py-24 xl:py-28", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
SectionRoot.displayName = "Section.Root";

interface SectionContainerProps extends HTMLAttributes<HTMLDivElement> {}

const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("m-auto w-[92%] max-w-7xl", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
SectionContainer.displayName = "Section.Container";

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        className={cn(
          "after:contents-[''] relative mb-10 block text-center text-4xl font-bold tracking-wide after:absolute after:left-1/2 after:top-[calc(100%+1rem)] after:h-[5px] after:w-12 after:-translate-x-1/2 after:rounded-md after:bg-violet-600",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
SectionTitle.displayName = "Section.Title";

interface SectionDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

const SectionDescription = forwardRef<
  HTMLParagraphElement,
  SectionDescriptionProps
>(({ className, ...props }) => {
  return (
    <p
      className={cn(
        "mx-auto mb-20 block max-w-4xl text-center text-lg font-normal text-gray-300",
        className,
      )}
      {...props}
    />
  );
});
SectionDescription.displayName = "Section.Description";

export const Section = {
  Root: SectionRoot,
  Container: SectionContainer,
  Title: SectionTitle,
  Description: SectionDescription,
};
