import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-config-prettier";
export default defineConfig([
  // 🔹 JS & TS Config with Globals + Ignores
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,mts,cts}"],

    // 👉 ignores এর মাধ্যমে eslintignore এর কাজ করবে
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**"
    ],

    languageOptions: {
      globals: {
        ...globals.browser,  // Browser globals (window, document, etc.)
        ...globals.node,     // Node globals (process, __dirname, console, etc.)
        process: "readonly", // extra নিশ্চিত করার জন্য explicitly যোগ করা
      },
    },

    ...js.configs.recommended,
  },

  // 🔹 TS Recommended Rules
  ...tseslint.configs.recommended,

  // 🔹 Custom Rules
  {
    rules: {
      eqeqeq: "off", // == এবং === দুটোই allow করবে
      "no-unused-vars": "error", // unused variable থাকলে error দিবে
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-console": "warn",
      "no-undef": "error",
    },
  },

  eslintPluginPrettierRecommended

]);
