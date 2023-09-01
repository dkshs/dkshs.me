import { forwardRef, type ButtonHTMLAttributes, type MouseEvent } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, createRipple } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center relative overflow-hidden justify-center font-medium ring-offset-black duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-900 active:opacity-70 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-violet-900 hover:bg-violet-900/80",
        destructive:
          "bg-red-600 hover:bg-red-600/90 focus-visible:ring-red-600 [&>.ripple]:bg-black/20",
        outline:
          "border border-violet-900 bg-transparent hover:bg-violet-900 focus-visible:bg-violet-900",
        secondary:
          "bg-violet-400 text-violet-950 hover:bg-violet-400/80 focus-visible:ring-violet-400 [&>.ripple]:bg-white/20",
        ghost: "hover:bg-violet-900 hover:text-violet-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        md: "py-2 px-4",
        lg: "p-4",
        xlg: "px-8 py-4",
        icon: "h-10 w-10",
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
        size: ["default", "sm", "icon"],
        className: "text-sm",
      },
      {
        size: ["md", "lg"],
        className: "text-md",
      },
      {
        variant: ["default", "outline", "ghost"],
        className: "[&>.ripple]:bg-violet-600/40",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant,
    size,
    radius,
    onMouseDown,
    asChild = false,
    ...rest
  } = props;
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, radius, className }))}
      onMouseDown={(e) =>
        createRipple(e as MouseEvent<HTMLButtonElement>, onMouseDown)
      }
      ref={ref}
      {...rest}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
