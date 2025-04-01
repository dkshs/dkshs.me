"use client";

import {
  type FC,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  readonly children?: ReactNode;
  readonly radialColor?: string;
  readonly radialWidth?: number;
}

const CardRoot: FC<CardRootProps> = ({
  className,
  radialColor = "hsl(var(--primary)/0.5)",
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
      onMouseMove={(e) => onMouseMove(e)}
      ref={ref}
      className={cn(
        "group relative h-full overflow-hidden rounded-xl border border-border/60 bg-background/60 duration-700 focus-within:border-ring focus-within:bg-background/10 hover:border-ring/60 hover:bg-background/30 dark:border-border/40 md:gap-8",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br via-primary/30 opacity-70 duration-1000 group-hover:opacity-60 dark:opacity-50 dark:group-hover:opacity-40"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>
      {children}
    </div>
  );
};
CardRoot.displayName = "Card.Root";

interface CardContainerProps extends HTMLAttributes<HTMLDivElement> {
  readonly projectUrl: string;
  readonly children?: ReactNode;
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
        "relative flex size-full flex-col px-4 py-6 md:p-8",
        className,
      )}
      {...props}
    >
      <Link
        href={projectUrl}
        className="absolute inset-0 z-10"
        aria-label="View project"
      />
      {children}
    </div>
  );
};
CardContainer.displayName = "Card.Container";

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  readonly asChild?: boolean;
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h3";

    return (
      <Comp
        className={cn(
          "text-xl font-bold text-foreground/80 duration-200 group-hover:text-foreground",
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
          "mt-2 leading-8 text-foreground/60 duration-200 group-hover:text-foreground/80",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
CardDescription.displayName = "Card.Description";

export { CardContainer, CardDescription, CardRoot, CardTitle };
