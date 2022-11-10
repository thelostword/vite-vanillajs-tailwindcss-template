/*
 * @Author: thelostword
 * @Date: 2022-09-16 12:40:28
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-10 12:52:40
 * @FilePath: \moe-vanillajs-template\scripts\pages.js
 */
import { resolve } from 'path';

export function pages() {
  return {
    main: resolve(__dirname, '../src/index.html'),
    about: resolve(__dirname, '../src/about/index.html'),
  };
}

export default pages;
