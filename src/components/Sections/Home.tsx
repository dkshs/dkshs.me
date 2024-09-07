"use client";

import type { HomeSectionTypes } from "@/utils/types";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { homeAnimation } from "./animationVariants";
import { Section } from "./components";

interface HomeSectionProps extends HomeSectionTypes {
  readonly btnSectionId: string;
}

export function HomeSection({
  title,
  description,
  btnSectionId,
}: HomeSectionProps) {
  return (
    <Section.Root className="relative h-screen">
      <motion.div
        variants={homeAnimation.container}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <Section.Container className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            variants={homeAnimation.item}
            transition={{ duration: 0.5 }}
          >
            <Section.Title
              asChild
              className="text-center text-6xl font-extrabold tracking-wide"
            >
              <h1>{title}</h1>
            </Section.Title>
          </motion.div>
          <motion.div
            variants={homeAnimation.item}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-10 max-w-4xl"
          >
            <Section.Description className="mb-0 text-center text-xl tracking-wide text-inherit">
              {description}
            </Section.Description>
          </motion.div>
          <motion.div
            variants={homeAnimation.item}
            transition={{ duration: 0.5 }}
            className="mt-14 text-center md:mt-16"
          >
            <Button size="xlg" asChild className="capitalize">
              <NextLink href={`#${btnSectionId}`}>{btnSectionId}</NextLink>
            </Button>
          </motion.div>
        </Section.Container>
      </motion.div>
    </Section.Root>
  );
}
