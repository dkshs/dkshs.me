import type { ContactSectionTypes } from "@/utils/types";
import { MotionDiv } from "../motion/div";
import { homeAnimation } from "./animationVariants";
import { Section } from "./components";
import { ContactForm } from "./components/ContactForm";

interface ContactSectionProps extends ContactSectionTypes {}

export function ContactSection({
  title,
  description,
  id,
}: ContactSectionProps) {
  return (
    <Section.Root id={id}>
      <MotionDiv
        variants={homeAnimation.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Section.Container>
          <Section.Title>{title}</Section.Title>
          <Section.Description>{description}</Section.Description>
          <MotionDiv
            variants={homeAnimation.container}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-4xl overflow-hidden rounded-md border border-border/60 bg-background/25 p-6 shadow-xl shadow-primary/10 md:p-10"
          >
            <ContactForm />
          </MotionDiv>
        </Section.Container>
      </MotionDiv>
    </Section.Root>
  );
}
