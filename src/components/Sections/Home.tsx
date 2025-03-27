import type { HomeSectionTypes } from "@/utils/types";
import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "../motion/div";
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
      <MotionDiv
        variants={homeAnimation.container}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <Section.Container>
          <MotionDiv
            variants={homeAnimation.item}
            transition={{ duration: 0.5 }}
          >
            <Section.Title
              asChild
              className="text-center text-6xl font-extrabold tracking-wide"
            >
              <h1>{title}</h1>
            </Section.Title>
          </MotionDiv>
          <MotionDiv
            variants={homeAnimation.item}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-10 max-w-4xl"
          >
            <Section.Description className="mb-0 text-center text-xl tracking-wide text-inherit">
              {description}
            </Section.Description>
          </MotionDiv>
          <MotionDiv
            variants={homeAnimation.item}
            transition={{ duration: 0.5 }}
            className="mt-14 text-center md:mt-16"
          >
            <Button size="xlg" asChild className="capitalize">
              <NextLink href={`#${btnSectionId}`}>{btnSectionId}</NextLink>
            </Button>
          </MotionDiv>
        </Section.Container>
      </MotionDiv>
    </Section.Root>
  );
}
