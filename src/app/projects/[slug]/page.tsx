import "./mdx.css";
import type { Metadata, ResolvingMetadata } from "next";

import { allProjects } from "contentlayer/generated";
import { ArrowUpRight } from "lucide-react";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

export const revalidate = 60;

type Props = {
  readonly params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params;
  const project = allProjects.find((project) => project.slug === params.slug);
  if (!project) {
    notFound();
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

export default async function ProjectPage(props: Props) {
  const params = await props.params;
  const project = allProjects.find((project) => project.slug === params.slug);
  if (!project) {
    notFound();
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
          {project.siteUrl ? (
            <Link
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2"
            >
              Site
              <ArrowUpRight
                size={20}
                className="duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          ) : null}
        </div>
        <div className="mt-16 h-px w-full bg-border" />
        <div className="prose prose-quoteless mx-auto px-4 pb-28 pt-6 dark:prose-invert sm:pt-10">
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
