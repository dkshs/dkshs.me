import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./components";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-[9999] h-16 border-b border-zinc-800 bg-black/50 backdrop-blur-md md:h-[72px]">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 md:px-12">
        <Link
          href="/"
          className="group flex items-center space-x-2 rounded-full ring-2 ring-transparent duration-200 hover:text-violet-400 focus:outline-none focus:ring-violet-600 active:opacity-70 md:px-3"
        >
          <div className="relative h-10 w-10 md:h-[50px] md:w-[50px]">
            <Image
              src="https://github.com/ShadowsS01.png"
              alt="DKSHS Logo Image"
              className="rounded-full"
              fill
            />
          </div>
          <span className="pr-1 text-xl font-bold uppercase text-white duration-200 group-hover:text-violet-400">
            DKSHS
          </span>
        </Link>
        <div className="flex items-center">
          <ul className="flex space-x-2 uppercase">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="#about">About</NavLink>
            </li>
            <li>
              <NavLink href="/">Projects</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
