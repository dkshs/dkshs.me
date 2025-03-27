"use client";

import { type ButtonHTMLAttributes, type MouseEvent, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn, createRipple } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden font-medium ring-offset-background duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 active:[:not(:disabled)&]:scale-95 active:[:not(:disabled)&]:opacity-70",
  {
    variants: {
      variant: {
        default:
          "bg-primary/80 text-primary-foreground dark:bg-primary/60 hover:[:not(:disabled)&]:bg-primary",
        destructive:
          "bg-destructive focus-visible:ring-destructive [&>.ripple]:bg-background/20 hover:[:not(:disabled)&]:bg-destructive/90",
        outline:
          "border border-primary/80 bg-transparent hover:text-primary-foreground focus-visible:bg-primary/80 focus-visible:text-primary-foreground hover:[:not(:disabled)&]:bg-primary/80",
        secondary:
          "bg-secondary focus-visible:ring-ring [&>.ripple]:bg-white/20 hover:[:not(:disabled)&]:bg-secondary/80",
        ghost:
          "hover:[:not(:disabled)&]:bg-accent hover:[:not(:disabled)&]:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        md: "px-4 py-2",
        lg: "p-4",
        xlg: "px-8 py-4",
        icon: "size-10",
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
  readonly asChild?: boolean;
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
