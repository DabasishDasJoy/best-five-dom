function createNewElement(elementType, text) {
    const element = document.createElement(elementType);
    element.innerText = text;

    return element;
}
function getTotalNumberOfPlayers(){
    return document.querySelectorAll('ol li').length;
}

function getInputFieldValueById(fieldid){
    const field = document.getElementById(fieldid);
    const fieldValueString = field.value;
    field.value = "";
    return parseFloat(fieldValueString);
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;

    return parseFloat(elementValueString);
}
