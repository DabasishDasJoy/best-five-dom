document.getElementById('btn-calculate').addEventListener('click', function(){
    document.getElementById('player-expenses').innerText = getInputFieldValueById('budget-per-player') * getTotalNumberOfPlayers();
});

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const totalBudgetElement = document.getElementById('total-budget');
    
    totalBudgetElement.innerText = getElementValueById('player-expenses') + getInputFieldValueById('manager-budget') + getInputFieldValueById('coach-budget');
});