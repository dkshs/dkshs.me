import type { ProjectsSectionProps } from "@/utils/types";

import { Section } from "./components";

export function ProjectsSection({
  data: { title, description, id },
}: ProjectsSectionProps) {
  return (
    <Section.Root id={id}>
      <Section.Container>
        <Section.Title>{title}</Section.Title>
        <Section.Description>{description}</Section.Description>
        <div>{/* Content */}</div>
      </Section.Container>
    </Section.Root>
  );
}
