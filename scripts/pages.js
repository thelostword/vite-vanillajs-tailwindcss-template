/*
 * @Author: thelostword
 * @Date: 2022-09-16 12:40:28
 * @LastEditors: thelostword
 * @LastEditTime: 2022-09-16 12:48:59
 * @FilePath: \moe-page1\scripts\pages.js
 */
import { resolve } from 'path';

export function pages() {
  return {
    main: resolve(__dirname, '../index.html'),
    about: resolve(__dirname, '../about/index.html'),
    about1: resolve(__dirname, '../about1/index.html'),
  };
}

export default pages;
