import type { ProjectsSectionProps } from "@/utils/types";

import { Section } from "./components";
import { motion } from "framer-motion";
import { animation } from "./animationVariants";

export function ProjectsSection({
  data: { title, description, id },
}: ProjectsSectionProps) {
  return (
    <Section.Root id={id}>
      <motion.div
        variants={animation.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Section.Container>
          <Section.Title>{title}</Section.Title>
          <Section.Description>{description}</Section.Description>
          <div>{/* Content */}</div>
        </Section.Container>
      </motion.div>
    </Section.Root>
  );
}
