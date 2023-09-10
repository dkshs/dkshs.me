import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import type { ProjectType } from "@/utils/types";

import { useCallback } from "react";
import { useRouter } from "next/router";

import { Meta } from "@/components/Meta";
import { Link } from "@/components/ui/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { data } from "@/data";

import { ArrowUpRight } from "lucide-react";

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = Object.entries(data.sections.projects.content);

  const paths = projects.map(([, project]) => ({
    params: {
      slug: project.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  project: ProjectType;
}> = ({ params }) => {
  const projects = Object.entries(data.sections.projects.content).map(
    ([, value]) => value,
  );

  const project = projects.find(
    (project) => project.slug === params?.slug,
  ) as unknown as ProjectType;

  return {
    props: {
      project,
    },
  };
};

export default function ProjectPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const goBack = useCallback(() => {
    if (router.pathname === "/projects/[slug]") {
      router.back();
    }
  }, [router]);

  return (
    <>
      <Meta
        path={`/projects/${project.slug}`}
        title={project.title}
        description={project.description}
        twitter={data.twitter}
        image={{
          src: `${
            project.image
              ? project.image
              : `/api/og?title=${project.title}&description=${project.description}&isProject=true`
          }`,
          alt: `${project.title} - ${project.description}`,
          isExternalImage: !!project.image && !project.image.startsWith("/"),
        }}
      />
      <div className="min-h-screen pt-24 md:pt-28 lg:pt-32">
        <div className="container relative mx-auto flex max-w-5xl flex-col justify-center">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight">
              {project.title}
            </h1>
            <p className="mt-4 leading-8 text-zinc-300">
              {project.description}
            </p>
          </div>
          <div className="mx-auto mt-10 flex max-w-2xl justify-center space-x-3 lg:mx-0 lg:max-w-none">
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
            {project.demoUrl && (
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
            )}
          </div>
          <div className="mt-16 h-px w-full bg-zinc-700" />
          <div className="mx-auto mb-28 mt-10 flex w-full max-w-3xl flex-col items-center justify-center px-4">
            {project.image && (
              <a
                href={project.demoUrl || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={618}
                  height={400}
                  className="aspect-video rounded-xl object-cover shadow-xl shadow-violet-950/20"
                />
              </a>
            )}
            <p className="mt-10 text-center leading-7 tracking-wide text-zinc-300">
              {project.longDescription}
            </p>
            <div className="mt-10">
              <Button
                onClick={() => goBack()}
                type="button"
                aria-label="Go back"
              >
                Go back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
