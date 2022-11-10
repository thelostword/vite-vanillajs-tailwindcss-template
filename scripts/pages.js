/*
 * @Author: thelostword
 * @Date: 2022-09-16 12:40:28
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-10 14:19:53
 * @FilePath: \moe-vanillajs-template\scripts\pages.js
 */
import { fileURLToPath, URL } from 'node:url';

export function pages() {
  return [
    fileURLToPath(new URL('../src/index.html', import.meta.url)),
    fileURLToPath(new URL('../src/about/index.html', import.meta.url)),
  ];
}

export default pages;
