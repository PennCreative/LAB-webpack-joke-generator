// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import jokeData from '../api/jokeData';

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const renderHTML = () => {
  const domString = `
  <h1>Joke Generator</h1>
  <button type="button" class="btn btn-outline-dark">Get Joke</button>
  <h3 id="joke"></h3>
  <h3 id="punchline"></h3>
  `;
  renderToDom('#app', domString);
};
const renderJoke = () => {
  // const joke = document.querySelector('#joke');
  // const punch = document.querySelector('#punchline');
  // jokeData.then((response) => {
  //   renderToDom(joke, response.setup);
  // });
};
const eventListeners = () => {
  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {
    if (btn.innerHTML === 'Get Joke') {
      btn.innerHTML = 'Get Punchline';
      jokeData().then(console.warn);
    } else if (btn.innerHTML === 'Get Punchline') {
      btn.innerHTML = 'Get Joke';
    }
  });
};

const init = () => {
  renderHTML();
  renderJoke();
  eventListeners();
};

init();
