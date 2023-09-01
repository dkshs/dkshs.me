import { type MouseEvent, useRef, useEffect } from "react";

import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";

import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl: string | null;
}

export function ProjectCard({
  title,
  description,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, rgba(46, 16, 101, 0.4), transparent)`;
  const style = { maskImage, backgroundImage: maskImage };

  useEffect(() => {
    if (containerRef.current) {
      const { height, width } = containerRef.current.getBoundingClientRect();
      mouseY.set(Math.random() * height);
      mouseX.set(Math.random() * width);
    }
  }, [mouseY, mouseX]);

  return (
    <div
      onMouseMove={onMouseMove}
      ref={containerRef}
      className="group relative h-full overflow-hidden rounded-xl border border-zinc-800 bg-black/20 duration-700 focus-within:border-violet-600 focus-within:bg-black/10 hover:border-zinc-400/50 hover:bg-black/10 md:gap-8"
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br via-violet-600/30 opacity-100 transition duration-1000 group-hover:opacity-50"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>
      <div className="relative flex h-full w-full flex-col px-4 py-6 md:p-8">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
        />
        <div className="h-1/2 w-full">
          <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white">
            {title}
          </h3>
          <p className="mt-2 leading-8 text-zinc-400 duration-150 group-hover:text-zinc-300">
            {description}
          </p>
        </div>
        <div className="mt-4 flex h-1/2 items-end space-x-4">
          <Button
            className="z-20 flex items-center space-x-2"
            variant="outline"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <span>GitHub</span>
              <Github size={20} />
            </a>
          </Button>
          {demoUrl && (
            <Button className="z-20 flex items-center space-x-1" asChild>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/demo"
              >
                <span>Demo</span>
                <ArrowUpRight
                  size={20}
                  className="duration-300 group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5"
                />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
