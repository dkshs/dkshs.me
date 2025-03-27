"use client";

import { type HTMLMotionProps, motion } from "framer-motion";

export function MotionLi(props: HTMLMotionProps<"li">) {
  return <motion.li {...props} />;
}
