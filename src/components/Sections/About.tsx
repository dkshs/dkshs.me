import type { AboutMeSectionProps } from "@/utils/types";

import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { AboutParagraph, Section } from "./components";

export function AboutSection({
  data: { title, description, content, id },
}: AboutMeSectionProps) {
  const { getToKnowMe, mySkills } = content;

  return (
    <Section.Root id={id}>
      <Section.Container>
        <Section.Title>{title}</Section.Title>
        <Section.Description>{description}</Section.Description>
        <div className="grid gap-14 mdlg:grid-cols-2 mdlg:gap-40">
          <div>
            <h3 className="mb-8 text-2xl font-bold tracking-wide">
              {getToKnowMe.title}
            </h3>
            <div>
              {getToKnowMe.content.map((text, i) => (
                <AboutParagraph
                  key={i}
                  text={text}
                  i={i}
                  contentLength={getToKnowMe.content.length}
                />
              ))}
            </div>
            <Button size="xlg" asChild>
              <NextLink href="#contact">Contact</NextLink>
            </Button>
          </div>
          <div>
            <h3 className="mb-8 text-2xl font-bold tracking-wide">
              {mySkills.title}
            </h3>
            <div className="flex flex-wrap">
              {mySkills.content.map((skill, i) => (
                <div
                  className="mb-4 mr-4 rounded-md bg-white/10 px-5 py-2.5 text-gray-300"
                  key={i}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section.Container>
    </Section.Root>
  );
}
