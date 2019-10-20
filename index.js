import { render } from './renderer.js';
import * as data from './data.json';  // imports info from a json file and sets it to data, most modern way, to be adopted by newest browsers

function getDogTemplate(dog) {
    return `<li>${dog.name} - ${dog.description} - ${dog.breed}</li>`;
}

function sortMyStuff(first,second) {  //  used to sort the data within the dog objects
    if (first.breed > second.breed){
        return -1;
    }
    else if (first.breed < second.breed){
        return 1;
    }
    else {
        return 0;
    }
}

const odogs = data.dogs.sort(sortMyStuff);  // sort returns two items first and second 
let content = '<ul>';
for (let i = 0; i < odogs.length; i++) {
    console.log(odogs[i].name);
    content += getDogTemplate(odogs[i]);  // backticks allow us to add variables within the text
}
content += '</ul>'
render(content);
