const btnSelectAll = document.getElementsByClassName('player-btn-select');

for (const button of btnSelectAll) {
    button.addEventListener('click', function(event){
        const PlayerName = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        
        document.getElementById('selected-players').appendChild(createNewElement('li', PlayerName)).classList.add('mb-3');
    })
}


