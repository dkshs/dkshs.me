import type { ComponentProps } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface NavLinkProps extends ComponentProps<typeof Link> {}

export function NavLink({ className, ...props }: NavLinkProps) {
  return (
    <Link
      className={cn(
        "rounded-full p-4 ring-2 ring-transparent duration-200 hover:text-primary-light focus:outline-none focus:ring-ring active:opacity-70",
        className,
      )}
      {...props}
    />
  );
}
