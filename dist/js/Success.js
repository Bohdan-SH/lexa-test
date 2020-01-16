import getData from './api.js';

export default class Success {
  constructor({ element }) {
    this.element = element;
    this.render();
    // this.renderPassedCount();
  }

  // async renderPassedCount() {
  //   let data = await getData();
  //   let pass = document.querySelector('#pass');
  //   let passContent = `${data['testing-results']['@passed']}/${data['testing-results']['@total']}`;
  //   pass.innerText = passContent;
  // }

  render = async () => {
    let data = await getData();

    const content = `
    <div class="main__wrapper">
        <h2 class="main__caption">Success</h2>
        <span class="main__count" id="pass">${`${data['testing-results']['@passed']}/${data['testing-results']['@total']}`}</span>
      </div>
      <div class="main__class">
        <ul class="main__class-names">
          <li class="main__class-name green">
            <div class="main__class-block">
              <span>className</span>
              <span>100500 ms</span>
            </div>
            <ul class="main__method">
              <li class="main__method-item">Signature: fffuu</li>
              <li class="main__method-item">Status: fuu</li>
              <li class="main__method-item">Name: ffffu</li>
              <li class="main__method-item">duration-ms: ffffuuu</li>
              <li class="main__method-item">started-at: fffuu</li>
              <li class="main__method-item">finished-at: fffuu</li>
            </ul>
          </li>
          <li class="main__class-name green">
            <div class="main__class-block">
              <span>className</span>
              <span>100500 ms</span>
            </div>
            <ul class="main__method">
              <li class="main__method-item">Signature: fffuu</li>
              <li class="main__method-item">Status: fuu</li>
              <li class="main__method-item">Name: ffffu</li>
              <li class="main__method-item">duration-ms: ffffuuu</li>
              <li class="main__method-item">started-at: fffuu</li>
              <li class="main__method-item">finished-at: fffuu</li>
            </ul>
          </li>
          <li class="main__class-name green">
            <div class="main__class-block">
              <span>className</span>
              <span>100500 ms</span>
            </div>
            <ul class="main__method">
              <li class="main__method-item">Signature: fffuu</li>
              <li class="main__method-item">Status: fuu</li>
              <li class="main__method-item">Name: ffffu</li>
              <li class="main__method-item">duration-ms: ffffuuu</li>
              <li class="main__method-item">started-at: fffuu</li>
              <li class="main__method-item">finished-at: fffuu</li>
            </ul>
          </li>
        </ul>
      </div>`;

    this.element.insertAdjacentHTML('beforeend', content);
  };
}
