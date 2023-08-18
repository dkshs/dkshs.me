import { ComponentProps } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface NavLinkProps extends ComponentProps<typeof Link> {}

export function NavLink({ className, ...props }: NavLinkProps) {
  return (
    <Link
      className={cn(
        "rounded-full p-2 ring-2 ring-transparent duration-200 hover:text-violet-400 focus:outline-none focus:ring-violet-600 active:opacity-70 md:p-4",
        className,
      )}
      {...props}
    />
  );
}
