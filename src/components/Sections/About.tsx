import type { AboutMeSectionTypes } from "@/utils/types";
import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "../motion/div";
import { MotionH3 } from "../motion/h3";
import { aboutAnimation as animation } from "./animationVariants";
import { AboutParagraph, Section } from "./components";

interface AboutSectionProps extends AboutMeSectionTypes {
  readonly btnSectionId: string;
}

export function AboutSection({
  title,
  description,
  content,
  id,
  btnSectionId,
}: AboutSectionProps) {
  const { getToKnowMe, mySkills } = content;

  return (
    <Section.Root id={id}>
      <MotionDiv
        variants={animation.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Section.Container>
          <Section.Title>{title}</Section.Title>
          <Section.Description>{description}</Section.Description>
          <MotionDiv
            variants={animation.content}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-14 mdlg:grid-cols-2 mdlg:gap-40"
          >
            <div>
              <MotionH3
                variants={animation.item}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mb-8 text-2xl font-bold tracking-wide"
              >
                {getToKnowMe.title}
              </MotionH3>
              {getToKnowMe.content.map((text, i) => (
                <MotionDiv
                  key={text}
                  variants={animation.item}
                  transition={{
                    delay: i === 0 ? 1 : i === 1 ? 1.2 : i * 0.8,
                    duration: 0.5,
                  }}
                >
                  <AboutParagraph
                    text={text}
                    i={i}
                    contentLength={getToKnowMe.content.length}
                  />
                </MotionDiv>
              ))}
              <MotionDiv
                variants={animation.item}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <Button size="xlg" asChild className="capitalize">
                  <NextLink href={`#${btnSectionId}`}>{btnSectionId}</NextLink>
                </Button>
              </MotionDiv>
            </div>
            <div>
              <MotionH3
                variants={animation.item}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mb-8 text-2xl font-bold tracking-wide"
              >
                {mySkills.title}
              </MotionH3>
              <div className="flex flex-wrap">
                {mySkills.content.map((skill, i) => (
                  <MotionDiv
                    variants={animation.item}
                    transition={{ delay: i * 0.5, duration: 0.5 }}
                    className="mb-4 mr-4 rounded-md bg-secondary/10 px-5 py-2.5 duration-200 hover:bg-secondary/15"
                    key={skill}
                  >
                    {skill}
                  </MotionDiv>
                ))}
              </div>
            </div>
          </MotionDiv>
        </Section.Container>
      </MotionDiv>
    </Section.Root>
  );
}
