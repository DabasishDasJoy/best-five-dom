function createNewElement(elementType, text) {
    const element = document.createElement(elementType);
    element.innerText = text;

    return element;
}