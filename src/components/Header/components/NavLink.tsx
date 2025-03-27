import type { ComponentProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps extends ComponentProps<typeof Link> {}

export function NavLink({ className, ...props }: NavLinkProps) {
  return (
    <Link
      className={cn(
        "rounded-full p-4 underline-offset-4 ring-ring duration-200 hover:text-primary hover:underline focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 active:opacity-60",
        className,
      )}
      {...props}
    />
  );
}
