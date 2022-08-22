document.getElementById('btn-calculate').addEventListener('click', function(){
    const budgetPerPlayer = getInputFieldValueById('budget-per-player');

    if(isNaN(budgetPerPlayer)){
        alert('Enter amount in number only and should not left empty');
    }
    else if(budgetPerPlayer < 0){
        alert('Amount should not be negative');
    }
    else{
        document.getElementById('player-expenses').innerText = budgetPerPlayer * getTotalNumberOfPlayers();
    }
    
});

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const totalBudgetElement = document.getElementById('total-budget');
    const playerExpenses = getElementValueById('player-expenses');
    const managerBudget = getInputFieldValueById('manager-budget');
    const coachBudget = getInputFieldValueById('coach-budget');
    

    if(isNaN(managerBudget) || isNaN(coachBudget) ){
        alert('Budget should not be left empty and must be amount in numbers');
    }
    else if(managerBudget < 0 || coachBudget < 0){
        alert("Budget should not be negative");
    }
    else{
        totalBudgetElement.innerText = playerExpenses + managerBudget + coachBudget;
    }
});