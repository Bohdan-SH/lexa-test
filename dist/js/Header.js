export default class Header {
  constructor({ element, data }) {
    this.element = element;
    this.data = data;
    this.render();
  }

  render = () => {
    const content = `
    <canvas id="myChart"></canvas>
    <ul class="header__list">
      <li class="header__list-item">
        <p class="header__text">Suit name: ${this.data['testing-results']['suite']['@name']}</p>
      </li>
      <li class="header__list-item">
        <p class="header__text">Last build time: ${this.data['testing-results']['suite']['@finished-at']}</p>
      </li>
      <li class="header__list-item">
        <p class="header__text">Test executing time: ${this.data['testing-results']['suite']['@duration-ms']} ms</p>
      </li>
    </ul>`;

    this.element.insertAdjacentHTML('beforeend', content);
  };
}
