function createNewElement(elementType, text) {
    const element = document.createElement(elementType);
    element.innerText = text;

    return element;
}

function getTotalNumberOfPlayers(){
    return document.querySelectorAll('ol li').length;
}