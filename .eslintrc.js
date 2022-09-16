/*
 * @Author: thelostword
 * @Date: 2022-09-15 11:35:12
 * @LastEditors: thelostword
 * @LastEditTime: 2022-09-16 09:18:14
 * @FilePath: \moe-page1\.eslintrc.js
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
  rules: {
  },
};
