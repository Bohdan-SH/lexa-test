import getData from './api.js';

export default class Fail {
  constructor({ element }) {
    this.element = element;
    this.render();
    this.renderFailedCount();
  }

  async renderFailedCount() {
    let data = await getData();
    let skipp = document.querySelector('#fail');
    let skippContent = `${data['testing-results']['@failed']}/${data['testing-results']['@total']}`;
    skipp.innerText = skippContent;
  }

  render = () => {
    const content = `
    <div class="main__wrapper">
      <h2 class="main__caption">Failed</h2>
      <span class="main__count" id="fail"></span>
    </div>
    <div class="main__class">
      <ul class="main__class-names">
        <li class="main__class-name red">
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
        <li class="main__class-name red">
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
        <li class="main__class-name red">
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
