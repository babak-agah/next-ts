module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next/core-web-vitals",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:testing-library/react",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
