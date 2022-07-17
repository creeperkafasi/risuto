module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    quotes: [1, "double"],
    semi: [1, "always"],
    "comma-dangle": [1, "always-multiline"],
    "space-before-function-paren": [0, "never"],
  },
};
