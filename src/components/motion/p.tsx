"use client";

import { type HTMLMotionProps, motion } from "framer-motion";

export function MotionP(props: HTMLMotionProps<"p">) {
  return <motion.p {...props} />;
}
