import 'water.css';
import { demo1, randomWordsDemo } from './demo';
import { formatResult } from './src/formatResult.js';

document.querySelector('#app').innerHTML = `
  <h1>Results</h1>
  <hr>
  <button id="button">Generate</button>
  <hr>
  <div id="result">
  </div>
`

document.querySelector('#button').addEventListener('click', async () => {


  const resultDiv = document.querySelector('#result');

  resultDiv.innerHTML = 'Загрузка...';

  let result = '';

  result += formatResult(await demo1());
  result += formatResult(await randomWordsDemo(1000));
  result += formatResult(await randomWordsDemo(10000)); // 30 страниц
  result += formatResult(await randomWordsDemo(100000)); // 300 страниц
  result += formatResult(await randomWordsDemo(1000000)); // 3000 страниц

  resultDiv.innerHTML = result;
});

