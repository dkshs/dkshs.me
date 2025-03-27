import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { data } from "@/data";
import { MotionDiv } from "../motion/div";
import { MotionLi } from "../motion/li";
import { MotionUl } from "../motion/ul";
import { animation } from "./animationVariants";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { name, sections } = data;

  return (
    <header className="sticky inset-x-0 top-0 z-[9999] h-16 border-b border-border/60 bg-secondary/10 backdrop-blur-md md:h-[72px]">
      <nav className="flex h-full items-center justify-between px-4 sm:px-6 md:px-12">
        <MotionDiv
          variants={animation.item}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Link
            href="/"
            className="group flex items-center space-x-2 rounded-full underline-offset-4 ring-ring duration-300 hover:underline hover:brightness-200 focus-visible:outline-none focus-visible:ring-2 active:opacity-70 md:pr-3"
          >
            <div className="relative size-10 md:size-[50px]">
              <Image
                src="/icon"
                alt={`${name} Image`}
                className="rounded-full border-2"
                fill
                quality={100}
              />
            </div>
            <span className="pr-1 text-xl font-bold duration-200">
              {name.split(" ")[0]}
            </span>
          </Link>
        </MotionDiv>
        <div className="flex items-center">
          <MotionUl
            className="hidden items-center space-x-2 uppercase md:flex"
            variants={animation.list}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {Object.entries(sections).map(([key, value], i) => (
              <MotionLi
                key={key}
                variants={animation.item}
                transition={{ duration: 0.6 }}
              >
                <Link
                  className="rounded-full p-4 underline-offset-4 ring-ring duration-200 hover:text-primary hover:underline focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 active:opacity-60"
                  href={i === 0 ? "/" : `/#${value.id}`}
                >
                  {value.id}
                </Link>
              </MotionLi>
            ))}
            <MotionLi variants={animation.item} transition={{ duration: 0.6 }}>
              <ThemeToggle />
            </MotionLi>
          </MotionUl>
          <div className="flex items-center gap-2 md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button type="button" size="icon" variant="ghost" radius="full">
                  <Menu size={24} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-border/60 bg-background/60 shadow-xl shadow-secondary/10 backdrop-blur-md dark:bg-background/80 md:w-48">
                {Object.entries(sections).map(([key, value], i) => (
                  <DropdownMenuItem
                    key={key}
                    asChild
                    className="p-2 text-base capitalize"
                  >
                    <Link href={i === 0 ? "/" : `/#${value.id}`}>
                      {value.id}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
