import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
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
  plugins: [],
};
export default config;
