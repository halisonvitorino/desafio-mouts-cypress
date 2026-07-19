const js = require("@eslint/js");
const cypress = require("eslint-plugin-cypress");
const globals = require("globals");
const prettier = require("eslint-config-prettier");

module.exports = [
  {
    ignores: [
      "node_modules/**",
      "cypress/videos/**",
      "cypress/screenshots/**",
      "cypress/downloads/**",
      "reports/**",
      "mochawesome-report/**",
    ],
  },

  js.configs.recommended,

  {
    files: ["cypress.config.js", "eslint.config.js"],

    languageOptions: {
      sourceType: "commonjs",

      globals: {
        ...globals.node,
      },
    },
  },

  {
    files: ["cypress/**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.browser,
        ...globals.node,
        ...cypress.configs.globals.languageOptions.globals,
      },
    },

    plugins: {
      cypress,
    },

    rules: {
      ...cypress.configs.recommended.rules,

      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],

      "no-undef": "error",
      "no-console": "warn",
    },
  },

  prettier,
];
