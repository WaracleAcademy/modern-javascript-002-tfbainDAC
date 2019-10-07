//any file can use the render function due to the word export, has to be imported in the using file
export function render( htmlContent ) {
    const mainView = document.querySelector('#primaryView');
    mainView.innerHTML = htmlContent;
}
//render(`<h2>text</h2>`);  YOu would call render like this, at the moment called from index.js
//render(`<h1>Naahh</h1>`);
