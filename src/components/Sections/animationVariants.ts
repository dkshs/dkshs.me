const aboutContainer = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const aboutContent = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const aboutItem = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const homeContainer = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const homeItem = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const projectsContainer = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const projectsItem = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const homeAnimation = {
  container: homeContainer,
  item: homeItem,
};

export const aboutAnimation = {
  container: aboutContainer,
  content: aboutContent,
  item: aboutItem,
};

export const projectsAnimation = {
  container: projectsContainer,
  item: projectsItem,
};
