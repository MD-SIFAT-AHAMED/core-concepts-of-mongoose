import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-config-prettier";

export default defineConfig([
  // 🔹 JS & TS Config with Globals + Ignores
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,mts,cts}"],

    ignores: ["node_modules/**", "dist/**", "build/**", "coverage/**"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        process: "readonly",
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
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-console": "warn",
      "no-undef": "error",

      // ✅ conflict fixer rules
      "no-multi-spaces": "off",
      "@typescript-eslint/no-extra-semi": "off"
    },
  },

  // 🔹 Prettier Integration
  eslintPluginPrettierRecommended,
]);


// import js from "@eslint/js";
// import tseslint from "typescript-eslint";
// import globals from "globals";
// import { defineConfig } from "eslint/config";
// import eslintPluginPrettierRecommended from "eslint-config-prettier";

// export default defineConfig([
//   {
//     files: ["**/*.{js,mjs,cjs,ts,tsx,mts,cts}"],
//     ignores: ["node_modules/**", "dist/**", "build/**", "coverage/**"],
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//         ...globals.node,
//         process: "readonly"
//       }
//     },
//     ...js.configs.recommended
//   },
//   ...tseslint.configs.recommended,
//   {
//     rules: {
//       eqeqeq: "off",
//       "no-unused-vars": "error",
//       "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
//       "no-console": "warn",
//       "no-undef": "error",
//       "no-multi-spaces": "off",
//       "@typescript-eslint/no-extra-semi": "off"
//     }
//   },
//   eslintPluginPrettierRecommended
// ]);
