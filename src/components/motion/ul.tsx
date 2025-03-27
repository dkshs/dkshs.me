"use client";

import { type HTMLMotionProps, motion } from "framer-motion";

export function MotionUl(props: HTMLMotionProps<"ul">) {
  return <motion.ul {...props} />;
}
