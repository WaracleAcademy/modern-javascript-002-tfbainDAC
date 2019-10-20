//any file can use the render function due to the word export, has to be imported in the using file
export function render( htmlContent ) {
    const mainView = document.querySelector('#primaryView');
    mainView.innerHTML = htmlContent;
}

