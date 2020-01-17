export default class Success {
  constructor({ element, data, methods }) {
    this.element = element;
    this.data = data;
    this.methods = methods;
    this.render();
  }

  render = () => {
    console.log(this.methods);

    const header = `
      <div class="main__wrapper">
        <h2 class="main__caption">Success</h2>
        <span class="main__count" id="pass">${`${this.data['testing-results']['@passed']}/${this.data['testing-results']['@total']}`}</span>
      </div>
      <div class="main__class">
        <ul class="main__class-names">
          <li class="main__class-name green">
            <div class="main__class-block">
              <span>className</span>
              <span>100500 ms</span>
            </div>
            <ul class="main__method">
              <li class="main__method-item">Status: fffuu</li>
              <li class="main__method-item">Signature: fuu</li>
              <li class="main__method-item">Name: ffffu</li>
              <li class="main__method-item">duration-ms: ffffuuu</li>
              <li class="main__method-item">started-at: fffuu</li>
              <li class="main__method-item">finished-at: fffuu</li>
            </ul>
          </li>  
        </ul>
      </div>`;

    this.element.insertAdjacentHTML('afterbegin', header);
  };
}
