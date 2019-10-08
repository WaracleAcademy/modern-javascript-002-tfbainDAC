import { render } from './renderer.js';
//import * as moment from 'moment';
import * as data from './data.json';  //  takes everything from a json file and sets it to data
console.log(data.dogs);
console.log(data.dogs[0]);

const things=['lemons','oranges','apples','pears'];
render(`
<h2>change</h2>
`);
//console.log("This is Javascript");
/*  This is the code which the render function is replacing
const mainView = document.querySelector('#primaryView');
mainView.innerHTML = `
      <h2>Text</h2>

`;
*/