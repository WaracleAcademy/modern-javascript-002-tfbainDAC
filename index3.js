import {render} from './renderer.js';
const things=['lemonsz','orangesz','applesz','pearsz'];

var htmlS = `<h2>changeFFF</h2>
             <ul>`;
/*
things.forEach(function (current_value) {      // uses callback function
    htmlS = htmlS + `<li>` + current_value + `</li >`;
});*/

// Retrieving data:
const text = localStorage.getItem("data");                 // read json file from local storage
const dogObj = JSON.parse(text);                                  // parse the text to a json object
/*readTextFile("./data.json", function (text) {
    var data = JSON.parse(text);
    console.log(data);
});*/
/*for (dogs in dogObj) {
   alert("hello");
    //alert(dogObj[dogs]);
   // htmlS += dogObj[dog]
}*/
for (var i = 0; i < dogObj.length; i++) {
    alert(dogObj[i].name);
}

htmlS = htmlS + `</ul> vvv`;
render(htmlS);
