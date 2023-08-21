import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "./components";

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

export function AboutSection() {
  return (
    <Section.Root id="about">
      <Section.Container>
        <Section.Title>About Me</Section.Title>
        <Section.Description>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </Section.Description>
        <div className="grid gap-14 mdlg:grid-cols-2 mdlg:gap-40">
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
            <h3 className="mb-8 text-2xl font-bold tracking-wide">My Skills</h3>
            <div className="flex flex-wrap">
              {skills.map((skill, i) => (
                <div
                  className="mb-4 mr-4 rounded-md bg-white/10 px-5 py-2.5 text-gray-300"
                  key={i}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section.Container>
    </Section.Root>
  );
}
