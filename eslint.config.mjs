import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,

  {
    files: ["app/api/**/*"],
    languageOptions: { globals: { ...globals.node } }
  },

  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: { globals: { ...globals.browser } }
  },

  pluginReact.configs.flat.recommended
]);
