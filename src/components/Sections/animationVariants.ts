const container = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const content = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const animation = {
  container,
  content,
  item,
};
