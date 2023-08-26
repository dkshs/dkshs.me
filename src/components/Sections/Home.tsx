import NextLink from "next/link";
import { Section } from "./components";
import { Button } from "@/components/ui/button";

export function HomeSection() {
  return (
    <Section.Root className="relative h-screen">
      <Section.Container className="absolute left-1/2 top-[35%] w-[92%] max-w-[90rem] -translate-x-1/2 -translate-y-1/2 md:top-[40%]">
        <Section.Title
          asChild
          className="text-center text-6xl font-extrabold tracking-wide"
        >
          <h1>Hey, I&apos;m DKSHS</h1>
        </Section.Title>
        <div className="mx-auto mt-10 max-w-4xl">
          <Section.Description className="mb-0 text-center text-xl tracking-wide text-inherit">
            A Web developer who creates websites and applications with a focus
            on the Frontend and a little Backend.
          </Section.Description>
        </div>
        <div className="mt-14 text-center md:mt-16">
          <Button size="xlg" asChild>
            <NextLink href="#projects">Projects</NextLink>
          </Button>
        </div>
      </Section.Container>
    </Section.Root>
  );
}
