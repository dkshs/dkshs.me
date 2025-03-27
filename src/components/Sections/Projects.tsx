import type { ProjectsSectionTypes } from "@/utils/types";
import { type Project, allProjects } from "contentlayer/generated";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "../motion/div";
import { ProjectCard } from "../ProjectCard";
import { Button } from "../ui/button";
import { projectsAnimation } from "./animationVariants";
import { Section } from "./components";

export function ProjectsSection({
  title,
  description,
  tops,
  id,
}: ProjectsSectionTypes) {
  const projects = tops.map((top) =>
    allProjects.find((project) => project.slug === top),
  ) as Project[];

  return (
    <Section.Root id={id}>
      <MotionDiv
        variants={projectsAnimation.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Section.Container>
          <Section.Title>{title}</Section.Title>
          <Section.Description>{description}</Section.Description>
          <div className="grid gap-6 px-2 md:px-10 mdlg:grid-cols-2 mdlg:px-0">
            {projects.map((project) => (
              <MotionDiv
                key={project._id}
                variants={projectsAnimation.item}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard {...project} />
              </MotionDiv>
            ))}
          </div>
          <MotionDiv
            variants={projectsAnimation.item}
            transition={{ duration: 0.5 }}
            className="mt-10 flex items-center justify-center"
          >
            <Button asChild>
              <Link
                href="/projects"
                className="group flex items-center space-x-1"
              >
                <span>View more projects</span>
                <ArrowUpRight
                  size={20}
                  className="duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Button>
          </MotionDiv>
        </Section.Container>
      </MotionDiv>
    </Section.Root>
  );
}
