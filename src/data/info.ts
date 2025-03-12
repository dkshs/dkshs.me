const GITHUB = "https://github.com/dkshs";
const TWITTER_USER = "dkshs_";

const social = {
  twitter: {
    icon: "/icons/x-logo.png", // files in the `/public` folder
    url: `https://x.com/${TWITTER_USER}`,
  },
  github: {
    icon: "/icons/github-ico.png", // files in the `/public` folder
    url: GITHUB,
  },
};

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
  "Docker",
];

export const info = {
  github: GITHUB,
  twitter: TWITTER_USER,
  social,
  skills,
};
