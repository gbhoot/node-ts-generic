module.exports = {
  env: {
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  rules: {
    "import/extensions": "off",
    "import/order": [
      "error",
      {
        "newlines between": "never",
        groups: [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
      },
    ],
    "no-console": "off",
    "prettier/prettier": "error",
    quotes: [2, "double"],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always tryo to resolve types under '<root>@types' directory even if it doesn't contain any source code, like '@types/unist'
        // Choose from one of the "oroject" configs below ro omit to use <root>/tsconfig.json by default
        // use <root>/oath/to/folder/tsconfig.json
        project: "./tsconfig.json",
      },
    },
  },
};
