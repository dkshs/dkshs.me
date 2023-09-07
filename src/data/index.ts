import { info } from "./info";

const name = "DKSHS";
const description =
  "A Web developer who creates websites and applications with a focus on the Frontend and a little Backend.";

export const data = {
  name,
  description,
  github: info.github,
  twitter: info.twitter,
  social: info.social,
  sections: {
    home: {
      id: "home",
      title: "Hey, I'm DKSHS",
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
            "I’m a web developer who masters frontend technologies such as HTML, CSS and JavaScript. Check out some of my work in the Projects section.",
            "I also have experience with backend, using the Python language. I can use it to create dynamic and secure websites that connect to databases and APIs.",
            "I like to create websites and applications that are functional, responsive and attractive to users. I enjoy solving problems and finding creative solutions to web development challenges. I always try to update myself on the news and trends of the web market.",
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
      content: {
        project1: {
          title: "Video Ambilight",
          description:
            "🌈 Ambilight Effect - React - Next.js (YouTube iframe, Video).",
          githubUrl: "https://github.com/dkshs/video-ambilight",
          demoUrl: "https://dkshs.github.io/video-ambilight/",
        },
        project2: {
          title: "Cookiecutter Django",
          description: "A simple Django template with cookiecutter.",
          githubUrl: "https://github.com/dkshs/cookiecutter-django",
          demoUrl: null,
        },
        project3: {
          title: "AceEx UI",
          description:
            "Construction of a design system. AceEx's design system for the web.",
          githubUrl: "https://github.com/dkshs/ace-ex-ui",
          demoUrl: "https://ace-ex-ui.vercel.app/",
        },
        project4: {
          title: "dkshs.me (Current site)",
          description: "Bridge to my projects.",
          githubUrl: "https://github.com/dkshs/dkshs.me",
          demoUrl: "https://dkshs.me/",
        },
      },
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
