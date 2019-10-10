import {render} from './renderer.js';

var htmlS = `<h2>List of Dogs</h2>
             <ul>`;

// Retrieving data:
var dogObj = require("./data.json");   // code for node.js to automatically read the jSON file, previous way to do this before import
const dogString = JSON.stringify(dogObj);
console.log(dogString);  // displays the entire json file
console.log(dogObj.dogs[0].name);  // unable to get property zero of undefined or null reference 

dogObj.dogs.forEach(function (current_value) {      // uses callback function
    console.log(current_value.name);
    htmlS += `<li>` + current_value.name + `</li >`;
});

htmlS = htmlS + `</ul> vvv`;
render(htmlS);

/*  Alternate for which works
for (let i = 0; i < dogObj.dogs.length; i++) {
    console.log(dogObj.dogs[i].name);
    htmlS += `<li>` + dogObj.dogs[i].name + `</li >`;
}*/

/* 1. gives a null return on the object - think works without npm
const text = localStorage.getItem("data.json");  // read json file from local storage
const dogObj = JSON.parse(text);            // parse the text to a json object
const dogString = JSON.stringify(dogObj);
alert(dogString);  //  error :the site says null
*/
/* 2.  Object doesn't support property or method 'readTextFile'
readTextFile("./data.json", function (text) {
    var data = JSON.parse(text);
    console.log(data);
});
*/
// 3.  Read Synchrously  - this says buffer undefined ???
// Define JSON File
//var fs = require("fs");
//console.log("\n *STARTING* \n");
// Get content from file
//var contents = fs.readFileSync("./data.json");
// Define to JSON type
//var jsonContent = JSON.parse(contents);
// Get Value from JSON
//console.log("User Name:", jsonContent.dogs[0].name);
//console.log("Email:", jsonContent.email);
//console.log("Password:", jsonContent.password);
//log("\n *EXIT* \n");

/*  4. foreach (dog in dogObj.dogs) {   //  this does not work is not correct format, see code above using callback
    console.log(dog.dogs.Name);
   // htmlS += dogObj[dog]
}*/



