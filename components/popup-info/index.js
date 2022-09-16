/*
 * @Author: thelostword
 * @Date: 2022-09-15 15:12:08
 * @LastEditors: thelostword
 * @LastEditTime: 2022-09-15 18:31:24
 * @FilePath: \moe-page1\src\components\popup-info\index.js
 */
// Create a class for the element
import ImgAvatar from './assets/avatar.jpg';
import styleCss from './style.css';

class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Create spans
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);

    const info = document.createElement('span');
    info.setAttribute('class', 'info');

    // Take attribute content and put it inside the info span
    const text = this.getAttribute('data-text');
    info.textContent = text;

    // Insert icon
    let imgUrl;
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = ImgAvatar;
    }

    const img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent = styleCss;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
    console.log(styleCss);
  }
}

// Define the new element
customElements.define('popup-info', PopUpInfo);
