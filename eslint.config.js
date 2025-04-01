import { ncontiero } from "@ncontiero/eslint-config";

export default ncontiero({
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
