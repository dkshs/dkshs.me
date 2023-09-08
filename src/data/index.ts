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
          slug: "video-ambilight",
          description:
            "🌈 Ambilight Effect - React - Next.js (YouTube iframe, Video).",
          githubUrl: "https://github.com/dkshs/video-ambilight",
          demoUrl: "https://dkshs.github.io/video-ambilight/",
          image: "/projects/video-ambilight.png",
          longDescription:
            "Project using YouTube iframe API in HTML and react-player with React and NextJs to make an ambient light effect. The aim of the project is to create an ambient light effect that changes color according to the video content, using the YouTube iframe API, an API that allows you to control the YouTube player using JavaScript. The API also lets you capture events such as player state, current time, and video quality.",
        },
        project2: {
          title: "Cookiecutter Django",
          slug: "cookiecutter-django",
          description: "A simple Django template with cookiecutter.",
          githubUrl: "https://github.com/dkshs/cookiecutter-django",
          demoUrl: null,
          image: null,
          longDescription:
            "A template using Django with cookiecutter to quickly launch production-ready Django projects.",
        },
        project3: {
          title: "AceEx UI",
          slug: "ace-ex-ui",
          description:
            "Construction of a design system. AceEx's design system for the web.",
          githubUrl: "https://github.com/dkshs/ace-ex-ui",
          demoUrl: "https://ace-ex-ui.vercel.app/",
          image: null,
          longDescription:
            "AceEx is a web design system that aims to make it easier to develop consistent, accessible, and responsive interfaces. The system comprises a collection of reusable, standardized and documented components that follow the brand's design principles.",
        },
        project4: {
          title: "dkshs.me",
          slug: "dkshs.me",
          description: "My personal website (The website you're looking at).",
          githubUrl: "https://github.com/dkshs/dkshs.me",
          demoUrl: "https://dkshs.me/",
          image: "/projects/dkshs.me.png",
          longDescription:
            "If you like the design, check out the Repository on GitHub.",
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
