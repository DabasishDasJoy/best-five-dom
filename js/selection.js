const btnSelectButtons = document.getElementsByClassName('player-btn-select');

for (const button of btnSelectButtons) {
    button.addEventListener('click', function (event) {

        const numberOfPlayesSelected = getTotalNumberOfPlayers();
        // console.log(event.target.parentNode.parentNode.querySelector('.card-body').querySelector('.name').innerText);
        // console.log(event.target.parentNode.parentNode.querySelector('.name').innerText);

        if (numberOfPlayesSelected < 5) {
            const selectedPlayer = event.target;
            const selectedPlayers = document.getElementById('selected-players');

            // retrieving selected player's name.
            const PlayerName = event.target.parentNode.parentNode.querySelector('.name').innerText;

            // Add the player in the selected list.
            selectedPlayers.appendChild(createNewElement('li', PlayerName)).classList.add('mb-3');

            //Disable the button after selecting also change background
            selectedPlayer.classList.replace('btn-primary', 'btn-secondary');
            selectedPlayer.setAttribute('disabled', true);

        }
        else {
            alert("You cannot pick more than five players!");
        }
    });
}



