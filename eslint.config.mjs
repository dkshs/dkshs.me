import { dkshs } from "@dkshs/eslint-config";

export default dkshs({
  settings: {
    tailwindcss: {
      classRegex: "^(class(Name)?|tw)$",
    },
  },
});
