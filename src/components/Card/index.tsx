"use client";

import {
  type MouseEvent,
  type HTMLAttributes,
  type ReactNode,
  type FC,
  useRef,
  useEffect,
  forwardRef,
} from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  radialColor?: string;
  radialWidth?: number;
}

const CardRoot: FC<CardRootProps> = ({
  className,
  radialColor = "rgba(46, 16, 101, 0.4)",
  radialWidth = 240,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
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
  const maskImage = useMotionTemplate`radial-gradient(${radialWidth}px at ${mouseX}px ${mouseY}px, ${radialColor}, transparent)`;
  const style = { maskImage, backgroundImage: maskImage };

  useEffect(() => {
    if (ref.current) {
      const { height, width } = ref.current.getBoundingClientRect();
      mouseY.set(Math.random() * height);
      mouseX.set(Math.random() * width);
    }
  }, [mouseY, mouseX]);

  return (
    <div
      onMouseMove={onMouseMove}
      ref={ref}
      className={cn(
        "group relative h-full overflow-hidden rounded-xl border border-zinc-800 bg-black/20 duration-700 focus-within:border-violet-600 focus-within:bg-black/10 hover:border-zinc-400/50 hover:bg-black/10 md:gap-8",
        className,
      )}
      {...props}
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
      {children}
    </div>
  );
};
CardRoot.displayName = "Card.Root";

interface CardContainerProps extends HTMLAttributes<HTMLDivElement> {
  projectUrl: string;
  children?: ReactNode;
}

const CardContainer: FC<CardContainerProps> = ({
  className,
  projectUrl,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col px-4 py-6 md:p-8",
        className,
      )}
      {...props}
    >
      <Link href={projectUrl} className="absolute inset-0 z-10" />
      {children}
    </div>
  );
};
CardContainer.displayName = "Card.Container";

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h3";

    return (
      <Comp
        className={cn(
          "text-xl font-bold text-zinc-100 group-hover:text-white",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
CardTitle.displayName = "Card.Title";

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        className={cn(
          "mt-2 leading-8 text-zinc-400 duration-150 group-hover:text-zinc-300",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
CardDescription.displayName = "Card.Description";

export const Card = {
  Root: CardRoot,
  Container: CardContainer,
  Title: CardTitle,
  Description: CardDescription,
};
