document.getElementById('btn-calculate').addEventListener('click', function(){
    document.getElementById('player-expenses').innerText = getInputFieldValueById('budget-per-player') * getTotalNumberOfPlayers();
});

document.getElementById('btn-')