import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/data/projects/**/*.mdx",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      keyframes: {
        ripple: {
          to: { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        ripple: "ripple 0.7s linear",
      },
      screens: {
        mdlg: "910px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
