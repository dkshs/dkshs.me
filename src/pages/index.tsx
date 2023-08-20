import { Meta } from "@/components/Meta";
import NextLink from "next/link";
import { Button } from "@/components/ui/button";

const aboutMe = `I'm a web developer who masters frontend technologies such as
HTML, CSS and JavaScript. I also have experience with the backend,
using language like the Python. I like to create
websites and applications that are functional, responsive and
attractive to users. I'm always looking to update myself on the
news and trends of the web market.`;

const skills = [
  "HTML",
  "CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Python",
  "Django",
  "GIT",
  "Github",
];

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
      <section id="about" className="mdlg:py-24 py-20 xl:py-0">
        <div className="m-auto w-[92%] max-w-7xl">
          <h2 className="mb-20">
            <span className="after:contents-[''] relative mb-10 block text-center text-4xl font-bold tracking-wide after:absolute after:left-1/2 after:top-[calc(100%+1rem)] after:h-[5px] after:w-12 after:-translate-x-1/2 after:rounded-md after:bg-violet-600">
              About Me
            </span>
            <span className="mx-auto block max-w-4xl text-center text-lg font-normal text-gray-300">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </span>
          </h2>
          <div className="mdlg:grid-cols-2 mdlg:gap-40 grid gap-14">
            <div>
              <h3 className="mb-8 text-2xl font-bold tracking-wide">
                Get to know me!
              </h3>
              <div>
                <p className="mb-2.5 max-w-xl text-base leading-loose text-gray-200">
                  {aboutMe}
                </p>
                <p className="mb-10 max-w-xl text-base leading-loose text-gray-200">
                  Last p
                </p>
              </div>
              <Button size="xlg" asChild>
                <NextLink href="#contact">Contact</NextLink>
              </Button>
            </div>
            <div>
              <h3 className="mb-8 text-2xl font-bold tracking-wide">
                My Skills
              </h3>
              <div className="flex flex-wrap">
                {skills.map((skill, i) => (
                  <div
                    className="mb-4 mr-4 rounded-md bg-violet-900/10 bg-gradient-to-t from-violet-900/30 to-white/20 px-5 py-2.5 text-gray-300"
                    key={i}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
