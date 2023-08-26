import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./components";
import data from "../../../data.json";

export function Header() {
  const { name, github, sections } = data;

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] h-16 border-b border-zinc-800/80 bg-black/20 backdrop-blur-md md:h-[72px]">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 md:px-12">
        <Link
          href="/"
          className="group flex items-center space-x-2 rounded-full ring-2 ring-transparent duration-200 hover:text-violet-400 focus:outline-none focus:ring-violet-600 active:opacity-70 md:px-3"
        >
          <div className="relative h-10 w-10 md:h-[50px] md:w-[50px]">
            <Image
              src={`${github}.png`}
              alt="DKSHS Logo Image"
              className="rounded-full"
              fill
            />
          </div>
          <span className="pr-1 text-xl font-bold uppercase text-white duration-200 group-hover:text-violet-400">
            {name}
          </span>
        </Link>
        <div className="flex items-center">
          <ul className="flex space-x-2 uppercase">
            {Object.entries(sections).map(([key, value], i) => (
              <li key={key}>
                <NavLink href={i === 0 ? "/" : `#${value.id}`}>
                  {value.id}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
