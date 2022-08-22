document.getElementById('btn-calculate').addEventListener('click', function(){
    const budgetPerPlayer = getInputFieldValueById('budget-per-player');
    const numberOfPlayers = getTotalNumberOfPlayers();

    // validation
    if(numberOfPlayers === 0){
        alert('You have to pick atleast one player to make up the team');
    }
    else if(isNaN(budgetPerPlayer)){
        alert('Enter amount in number only and should not left empty!');
    }
    else if(budgetPerPlayer < 0){
        alert('Amount should not be negative!');
    }
    // calculation
    else{
        document.getElementById('player-expenses').innerText = budgetPerPlayer * numberOfPlayers;
    }
    
});

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const totalBudgetElement = document.getElementById('total-budget');
    const playerExpenses = getElementValueById('player-expenses');
    const managerBudget = getInputFieldValueById('manager-budget');
    const coachBudget = getInputFieldValueById('coach-budget');
    
    // validation
    if(getTotalNumberOfPlayers() == 0){
        alert('You have to pick atleast one player to make up the team!');
    }
    else if(playerExpenses == 0){
        alert('calculate player expenses first!')
    }
    else if(isNaN(managerBudget) || isNaN(coachBudget) ){
        alert('Budget should not be left empty and must be amount in numbers!');
    }
    else if(managerBudget < 0 || coachBudget < 0){
        alert("Budget should not be negative!");
    }
    // if validation passes then calculate
    else{
        totalBudgetElement.innerText = playerExpenses + managerBudget + coachBudget;
    }
});