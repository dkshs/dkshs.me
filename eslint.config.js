import { dkshs } from "@dkshs/eslint-config";

export default dkshs({
  settings: {
    tailwindcss: {
      classRegex: "^(class(Name)?|tw)$",
    },
  },
  javascript: {
    overrides: {
      "node/no-unsupported-features/node-builtins": [
        "error",
        { allowExperimental: true },
      ],
    },
  },
});
