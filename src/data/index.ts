import { info } from "./info";

const name = "Nicolas Contiero";
const description =
  "Full-Stack Web Developer passionate about transforming ideas into innovative digital experiences. Experience in React, Node.js, and Python.";
export const MDX_CODE_THEME = "rose-pine"; // Theme used by `Rehype Pretty Code`. More themes: https://shiki.style/themes#bundled-themes

export const data = {
  name,
  description,
  github: info.github,
  twitter: info.twitter,
  social: info.social,
  mdxCodeTheme: MDX_CODE_THEME,
  sections: {
    home: {
      id: "home",
      title: "Hey, I'm Nicolas",
      description,
      btnSectionId: "projects",
      content: {},
    },
    about: {
      id: "about",
      title: "About Me",
      description:
        "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology",
      btnSectionId: "contact",
      content: {
        getToKnowMe: {
          title: "Get to know me!",
          content: [
            "I'm a web developer with experience in frontend technologies like React, HTML, CSS, and JavaScript. Check out some of my work in the Projects section.",
            "I have experience with backend development, using Python and Django to create robust and scalable applications.",
            "I like to create websites and applications that are functional, responsive and attractive to users. I enjoy solving problems and finding creative solutions to web development challenges. I always strive to stay updated on the latest news and trends in the web market.",
          ],
        },
        mySkills: {
          title: "My Skills",
          content: info.skills,
        },
      },
    },
    projects: {
      id: "projects",
      title: "Projects",
      description: "Here you will find some of the personal projects I created",
      tops: ["dkshs.me", "dkcutter", "dkblog", "eslint-config"],
      content: {},
    },
    contact: {
      id: "contact",
      title: "Contact",
      description:
        "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible",
      content: {},
    },
  },
};

export type DataType = typeof data;
