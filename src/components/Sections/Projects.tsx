"use client";

import type { ProjectsSectionTypes } from "@/utils/types";

import { type Project, allProjects } from "contentlayer/generated";
import { motion } from "framer-motion";
import { Section } from "./components";
import { ProjectCard } from "../ProjectCard";
import { Button } from "../ui/button";
import Link from "next/link";
import { projectsAnimation } from "./animationVariants";

import { ArrowUpRight } from "lucide-react";

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
            {projects.map((project) => (
              <motion.div
                key={project._id}
                variants={projectsAnimation.item}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
          <motion.div
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
          </motion.div>
        </Section.Container>
      </motion.div>
    </Section.Root>
  );
}
