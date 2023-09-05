let player = {
    name: "Ram",
    chips: 145
} 

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
//console.log(messageEl);



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


// Make this function return a random number between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1 //  {0.000 - 12.999}(1-13)
    if (randomNumber > 10 ){
        return 10
    }else if (randomNumber === 1) {
      return 11
    } else {
            return randomNumber
    }

    
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    
    renderGame()
}
function renderGame() {
    
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 21) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
       message = "Wohoo! You've got Blackjack! 🥳"
     hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭"
     isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
