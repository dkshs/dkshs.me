import { Meta } from "@/components/Meta";
import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { Sections } from "@/components/Sections";

export default function HomePage() {
  return (
    <>
      <Meta description="Bridge to my projects." path="/" />
      <section className="relative h-screen">
        <div className="absolute left-1/2 top-[35%] w-[92%] max-w-[90rem] -translate-x-1/2 -translate-y-1/2 md:top-[40%]">
          <h1 className="text-center text-6xl font-extrabold tracking-wide">
            Hey, I&apos;m DKSHS
          </h1>
          <div className="mx-auto mt-10 max-w-4xl">
            <p className="text-center text-xl tracking-wide">
              A Web developer who creates websites and applications with a focus
              on the Frontend and a little Backend.
            </p>
          </div>
          <div className="mt-14 text-center md:mt-16">
            <Button size="xlg" asChild>
              <NextLink href="#projects">Projects</NextLink>
            </Button>
          </div>
        </div>
      </section>
      <Sections.About />
      <Sections.Projects />
    </>
  );
}
