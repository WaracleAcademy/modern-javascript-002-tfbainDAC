import { render } from './renderer.js';
//import * as moment from 'moment';
import * as data from './data.json';  // imports info from a json file and sets it to data, most modern way, to be adopted by newest browsers
console.log(data.dogs);
console.log(data.dogs[0]);

const odogs = data.dogs;
let content = '<ul>';
for (let i = 0; i < odogs.length; i++) {
    console.log(odogs[i].name);
    content += `<li>${odogs[i].name}</li>`;  // backticks allow us to add variables within the text
}
content += '</ul>'
render(content);

//console.log("This is Javascript");
/*  This is the code which the render function is replacing
const mainView = document.querySelector('#primaryView');
mainView.innerHTML = `
      <h2>Text</h2>

`;
*/