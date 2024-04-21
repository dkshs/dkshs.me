import type { Metadata, ResolvingMetadata } from "next";
import "./mdx.css";

import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";

import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Mdx } from "@/components/mdx";
import { Link } from "@/components/ui/link";
import { Button } from "@/components/ui/button";

export const revalidate = 60;

type Props = {
  readonly params: { user: string; slug: string };
};

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const project = allProjects.find((project) => project.slug === params.slug);
  if (!project) {
    return notFound();
  }

  const baseUrl = (await parent).metadataBase?.toString().slice(0, -1);
  const projectUrl = `${baseUrl}${project.path}`;
  const image =
    project.image ||
    `/og?title=${project.title}&description=${project.description}&isProject=true`;
  const imageAlt = `${project.title} - ${project.description}`;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: projectUrl,
      images: { url: image, alt: imageAlt },
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: { url: image, alt: imageAlt },
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = allProjects.find((project) => project.slug === params.slug);
  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen pt-24 md:pt-28 lg:pt-32">
      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <p className="mt-4 leading-8 text-foreground/80">
            {project.description}
          </p>
        </div>
        <div className="mt-10 flex justify-center space-x-3">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2"
          >
            Github
            <ArrowUpRight
              size={20}
              className="duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
          {project.demoUrl ? (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2"
            >
              Demo
              <ArrowUpRight
                size={20}
                className="duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          ) : null}
        </div>
        <div className="mt-16 h-px w-full bg-border" />
        <div className="prose prose-invert prose-quoteless mx-auto px-4 pb-28 pt-6 sm:pt-10">
          <Mdx code={project.body.code} />
        </div>
        <div className="my-10 flex justify-center gap-2">
          <Button aria-label="Go to projects page" asChild>
            <NextLink href="/projects">Go to projects page</NextLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
