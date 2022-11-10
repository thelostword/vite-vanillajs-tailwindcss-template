/*
 * @Author: thelostword
 * @Date: 2022-09-15 11:35:12
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-10 11:41:19
 * @FilePath: \moe-vanillajs-template\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  plugins: ['html'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@', './src'],
      ],
    },
  },
  rules: {
    'no-console': 0,
    'no-bitwise': 0,
    'no-void': 0,
  },
};
