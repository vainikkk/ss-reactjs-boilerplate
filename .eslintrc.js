module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      files: ["**/*.spec.js", "**/*.spec.jsx"],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      js: true,
    },
  },
  plugins: ["react"],
  ignorePatterns: ["**/*.scss"],
  rules: {
    "no-console": 0,
    "no-unused-vars": 2,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
  },
};
