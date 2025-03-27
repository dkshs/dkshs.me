"use client";

import { type HTMLMotionProps, motion } from "framer-motion";

export function MotionH3(props: HTMLMotionProps<"h3">) {
  return <motion.h3 {...props} />;
}
