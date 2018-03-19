'use babel';

import { colorLoader } from '../constants';

const Loader = () => {
  const element = document.createElement('div');
  element.classList.add('loader');

  element.innerHTML = `
    <svg viewBox="25 25 50 50" >
      <circle
        class="loader-path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke="${colorLoader}"
        stroke-width="2"
      />
    </svg>
  `;

  return element;
}

export default Loader;
