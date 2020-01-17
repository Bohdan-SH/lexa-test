import Result from './Result.js';

function renderChart(passed, failed, skipped) {
  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset

    data: {
      labels: ['Success', 'Failed', 'Skip'],
      datasets: [
        {
          backgroundColor: [
            'rgb(0, 204, 58)',
            'rgb(217, 30, 24)',
            'rgb(189, 195, 199)'
          ],
          borderColor: '#fff',
          data: [passed, failed, skipped]
        }
      ]
    },

    // Configuration options go here
    options: {}
  });
  return chart;
}

fetch('../result.json')
  .then(response => response.json())
  .then(json => json)
  .then(values => {
    new Result({
      element: document.querySelector('#root'),
      data: values
    });
    renderChart(
      values['testing-results']['@passed'],
      values['testing-results']['@failed'],
      values['testing-results']['@skipped']
    );
  });
