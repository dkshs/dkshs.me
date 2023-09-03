import type { ProjectsSectionTypes } from "@/utils/types";

import { ProjectCard, Section } from "./components";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { projectsAnimation } from "./animationVariants";

import { ArrowUpRight } from "lucide-react";

interface ProjectsSectionProps extends ProjectsSectionTypes {
  github: string;
}

export function ProjectsSection({
  title,
  description,
  id,
  content,
  github,
}: ProjectsSectionProps) {
  const projects = Object.entries(content);

  return (
    <Section.Root id={id}>
      <motion.div
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
            {projects.map(([key, value]) => (
              <motion.div
                key={key}
                variants={projectsAnimation.item}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard {...value} />
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={projectsAnimation.item}
            transition={{ duration: 0.5 }}
            className="mt-10 flex items-center justify-center"
          >
            <Button asChild>
              <a
                href={`${github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-1"
              >
                <span>View more projects</span>
                <ArrowUpRight
                  size={20}
                  className="duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Button>
          </motion.div>
        </Section.Container>
      </motion.div>
    </Section.Root>
  );
}
