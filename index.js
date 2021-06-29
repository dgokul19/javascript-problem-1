// Find each uninque value and its count;

const givenArray = ['a','e','v','s','s','c','c','a','v','e','a','v'];


// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

let result = {};

givenArray.forEach(value => {
  result[value] =  result[value] ? result[value] + 1 : 1;
});

appDiv.innerHTML = `<p>${JSON.stringify(result)}</p>`;
