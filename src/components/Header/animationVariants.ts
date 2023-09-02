const list = {
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
const item = {
  hidden: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const animation = {
  list,
  item,
};
