"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      type="button"
      className="flex items-center rounded-full p-4 underline-offset-4 opacity-70 ring-ring duration-200 hover:underline hover:opacity-100 focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 active:opacity-60"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      title="Toggle theme"
    >
      <Sun className="size-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
