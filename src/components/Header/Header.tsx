"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data";
import { animation } from "./animationVariants";
import { NavLink, NavMenu } from "./components";

export function Header() {
  const { name, username, github, sections } = data;

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] h-16 border-b border-border/60 bg-secondary/10 backdrop-blur-md md:h-[72px]">
      <nav className="flex h-full items-center justify-between px-4 sm:px-6 md:px-12">
        <motion.div
          variants={animation.item}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Link
            href="/"
            className="group flex items-center space-x-2 rounded-full ring-2 ring-transparent duration-200 focus:outline-none focus:ring-ring active:opacity-70 md:px-3"
          >
            <div className="relative size-10 md:size-[50px]">
              <Image
                src={`${github}.png`}
                alt={`${name} Image`}
                className="rounded-full border"
                fill
              />
            </div>
            <span className="pr-1 text-xl font-bold uppercase duration-200 group-hover:text-primary-light">
              {username}
            </span>
          </Link>
        </motion.div>
        <div className="flex items-center">
          <motion.ul
            className="hidden space-x-2 uppercase md:flex"
            variants={animation.list}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {Object.entries(sections).map(([key, value], i) => (
              <motion.li
                key={key}
                variants={animation.item}
                transition={{ duration: 0.6 }}
              >
                <NavLink href={i === 0 ? "/" : `/#${value.id}`}>
                  {value.id}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
          <NavMenu sections={sections} />
        </div>
      </nav>
    </header>
  );
}
