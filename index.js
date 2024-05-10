function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10){
        return 10;
    }else if(randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }
}

let firstCard, secondCard, sum, Cards = [];
let isAlive = false, hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cards = document.getElementById("cards");
let SUM = document.getElementById("sum");


function startGame(){
    isAlive = true;
    sum = 0;
    Cards = [];
    firstCard = generateRandomNumber();
    secondCard = generateRandomNumber();
    Cards.push(firstCard);
    Cards.push(secondCard);
    renderGame();
}


function renderGame(){
    let Message = "";
    for(let totalCards = 0; totalCards < Cards.length; totalCards++){
        Message += Cards[totalCards] + " ";
        sum += Cards[totalCards];
    }
    if(sum <= 20){
        message = "Do you want to pick another card!";
    }else if(sum === 21){
        message = "You've won the black jack";
        let hasBlackJack = true;
    }else{
        message = "You lose!!!";
        isAlive = false;
    }
    messageEl.textContent = message;
    cards.textContent = "Cards: " + Message;
    SUM.textContent = "Sum: " + sum; 
}


function newCard(){
    sum = 0;
    if(isAlive === true && hasBlackJack === false){
        let newCard = generateRandomNumber();
        Cards.push(newCard);
        renderGame();
    }
}