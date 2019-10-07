import {render} from './renderer.js';
const things=['lemonsz','orangesz','applesz','pearsz'];

var htmlS = `<h2>change</h2>
             <ul>`;
/*for (let i = 0; i < things.length; i++) {
    htmlS = htmlS+ `<li>` + things[i] + `</li >`;
}*/
// using the forEach function to iterate through the array
things.forEach(function (current_value) {      // uses callback function
    htmlS = htmlS + `<li>` + current_value + `</li >`;
});
htmlS = htmlS + `</ul>`;

render(htmlS);
