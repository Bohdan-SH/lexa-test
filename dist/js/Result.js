import Header from './Header.js';
import Success from './Success.js';
import Fail from './Fail.js';
import Skipp from './Skipp.js';

export default class Result {
  constructor({ element }) {
    this.element = element;
    this.render();
    this.initHeader();
    this.initSuccess();
    this.initFail();
    this.initSkip();
    this.openSection();
  }

  initHeader = () => {
    const header = new Header({
      element: document.querySelector('#header')
    });
  };

  initSuccess = () => {
    const succes = new Success({
      element: document.querySelector('#success')
    });
  };

  initFail = () => {
    const fail = new Fail({
      element: document.querySelector('#failed')
    });
  };

  initSkip = () => {
    const skip = new Skipp({
      element: document.querySelector('#skipped')
    });
  };

  openSection = () => {
    let allSections = [...document.querySelectorAll('section')];
    let classNames = [...document.querySelectorAll('.main__class-name')];

    for (let i = 0; i < allSections.length; i++) {
      let section = allSections[i];
      let sectionChild = section.children[1];

      section.addEventListener('click', event => {
        let target = event.target;
        if (target === section || target === section.children[0]) {
          sectionChild.classList.toggle('active');
        }

        if (sectionChild.className !== 'main__class active') {
          sectionChild.children[0].style.cssText = `opacity: 0; transition all 0.5s `;
        } else {
          sectionChild.children[0].style.cssText = `opacity: 1; transition: all 0.5s`;
        }
      });
    }

    for (let j = 0; j < classNames.length; j++) {
      let name = classNames[j];

      name.addEventListener('click', e => {
        let target = e.target;

        if (target === name || name.children[0]) {
          name.children[1].classList.toggle('active');
        }
      });
    }
  };

  render = () => {
    const content = `
      <header class="header container" id="header"></header>
      <main class="main container">
        <section class="main__section" id="success"></section>
        <section class="main__section" id="failed"></section>
        <section class="main__section" id="skipped"></section>
      </main>`;

    this.element.insertAdjacentHTML('beforeend', content);
  };
}
