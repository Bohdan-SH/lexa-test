import getData from './api.js';

export default class Header {
  constructor({ element }) {
    this.element = element;
    this.render();
  }

  render = async () => {
    let data = await getData();

    const content = `
    <canvas id="myChart"></canvas>
    <ul class="header__list">
      <li class="header__list-item">
        <p class="header__text">Suit name: ${data['testing-results']['suite']['@name']}</p>
      </li>
      <li class="header__list-item">
        <p class="header__text">Last build time: ${data['testing-results']['suite']['@finished-at']}</p>
      </li>
      <li class="header__list-item">
        <p class="header__text">Test executing time: ${data['testing-results']['suite']['@duration-ms']} ms</p>
      </li>
    </ul>`;

    this.element.insertAdjacentHTML('beforeend', content);
  };
}
