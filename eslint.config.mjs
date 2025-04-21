import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "plugin:prettier/recommended",
      "prettier",
    ],
  }),
  {
    rules: {
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_*$",
          argsIgnorePattern: "^_*$",
          destructuredArrayIgnorePattern: "^_*$",
        },
      ],
      eqeqeq: ["error", "always"],
    },
  },
  eslintConfigPrettier,
];

export default eslintConfig;
