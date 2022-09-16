/*
 * @Author: thelostword
 * @Date: 2022-09-15 15:51:23
 * @LastEditors: thelostword
 * @LastEditTime: 2022-09-16 11:04:56
 * @FilePath: \moe-page1\tailwind.config.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './**/*.{js,html}',
    '!node_modules',
    '!dist',
    '!assets',
    '!public',
    '!scripts',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
