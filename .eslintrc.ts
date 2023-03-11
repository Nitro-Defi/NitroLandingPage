module.exports = {
  rules: {
    "react/display-name": "off",
  },
  parser: "@babel/eslint-parser",
  extends: [
    "plugin:@next/next/recommended",
    ["eslint:recommended", "next"],
    "next/core-web-vitals",
  ],

  env: {
    browser: true,
    es2021: true,
  },
};
