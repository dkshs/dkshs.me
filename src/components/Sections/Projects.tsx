import { Section } from "./components";

export function ProjectsSection() {
  return (
    <Section.Root id="projects">
      <Section.Container>
        <Section.Title>Projects</Section.Title>
        <Section.Description>
          Here you will find some of the personal projects I created
        </Section.Description>
        <div>{/* Content */}</div>
      </Section.Container>
    </Section.Root>
  );
}
