import { forwardRef, type AnchorHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  "inline-flex items-center justify-center font-medium ring-offset-background underline-offset-4 duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring active:opacity-70",
  {
    variants: {
      variant: {
        default: "text-primary-link",
        destructive:
          "text-destructive hover:text-destructive/90 focus-visible:ring-destructive",
        ghost:
          "px-0.5 shadow-[hsl(var(--primary))_0_-2px_0_0_inset] hover:shadow-[hsl(var(--primary))_0_-30px_0_-1px_inset] hover:no-underline focus-visible:ring-transparent focus-visible:shadow-[hsl(var(--primary))_0_-30px_0_-1px_inset]",
      },
      size: {
        sm: "text-sm",
        default: "text-base",
        lg: "text-lg",
      },
      radius: {
        sm: "rounded-sm",
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
      },
    },
    compoundVariants: [
      {
        variant: ["ghost"],
        className: "rounded-none",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  },
);

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        className={cn(linkVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Link.displayName = "Link";

export { Link, linkVariants };
