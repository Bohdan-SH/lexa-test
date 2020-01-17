import Header from './Header.js';
import Success from './Success.js';
import Fail from './Fail.js';
import Skipp from './Skipp.js';

export default class Result {
  constructor({ element, data }) {
    this.element = element;
    this.data = data;
    this.render();
    this.filterObjects();
    this.initHeader();
    this.initSuccess();
    this.initFail();
    this.initSkip();
    this.openSection();
  }

  initHeader = () => {
    const header = new Header({
      element: document.querySelector('#header'),
      data: this.data
    });
  };

  initSuccess = () => {
    const succes = new Success({
      element: document.querySelector('#success'),
      data: this.data,
      methods: this.filterObjects()
    });
  };

  initFail = () => {
    const fail = new Fail({
      element: document.querySelector('#failed'),
      data: this.data
    });
  };

  initSkip = () => {
    const skip = new Skipp({
      element: document.querySelector('#skipped'),
      data: this.data
    });
  };

  filterObjects() {
    let firstArr = this.data['testing-results']['suite']['test'][0][
      'class'
    ].map(obj => obj['test-method']);
    let secondArr = this.data['testing-results']['suite']['test'][1][
      'class'
    ].map(obj => obj['test-method']);

    let testMethods = [...firstArr, ...secondArr].reduce(
      (acc, arr) => [...acc, ...arr],
      []
    );

    // let passedMethods = testMethods.filter(
    //   method => method['@status'] === 'PASS'
    // );
    // let failedMethods = testMethods.filter(
    //   method => method['@status'] === 'FAIL'
    // );
    // let skippedMethods = testMethods.filter(
    //   method => method['@status'] === 'SKIP'
    // );

    // console.log(passedMethods);
    // console.log(failedMethods);
    // console.log(skippedMethods);
    return testMethods;
  }

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
