"use client";

import { type HTMLMotionProps, motion } from "framer-motion";

export function MotionH1(props: HTMLMotionProps<"h1">) {
  return <motion.h1 {...props} />;
}
