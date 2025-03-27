"use client";

import { type HTMLMotionProps, motion } from "framer-motion";

export function MotionDiv(props: HTMLMotionProps<"div">) {
  return <motion.div {...props} />;
}
