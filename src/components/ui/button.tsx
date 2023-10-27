"use client";

import { forwardRef, type ButtonHTMLAttributes, type MouseEvent } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, createRipple } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center relative overflow-hidden justify-center font-medium ring-offset-background duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring active:[:not(:disabled)&]:opacity-70 active:[:not(:disabled)&]:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary hover:[:not(:disabled)&]:bg-primary/80",
        destructive:
          "bg-destructive hover:[:not(:disabled)&]:bg-destructive/90 focus-visible:ring-destructive [&>.ripple]:bg-background/20",
        outline:
          "border border-primary bg-transparent hover:[:not(:disabled)&]:bg-primary focus-visible:bg-primary",
        secondary:
          "bg-secondary hover:[:not(:disabled)&]:bg-secondary/80 focus-visible:ring-ring [&>.ripple]:bg-white/20",
        ghost:
          "hover:[:not(:disabled)&]:bg-accent hover:[:not(:disabled)&]:text-accent-foreground",
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
        className: "[&>.ripple]:bg-background/60",
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
