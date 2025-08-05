import * as name from "./functions.js";

const game = document.getElementById("game");
const rules = document.getElementById("rules");
const youLost = document.getElementById("youLost");
const youWon = document.getElementById("youWon");
const tie = document.getElementById("tie");
const btnPlay = document.getElementById("btnPlay");
const btnStartGame = document.getElementById("startGame");

const btnRules = document.getElementById("btnRules");
btnRules.addEventListener("click", function () {
    rules.classList.add("enter");
})

const backMenu = document.getElementById("backMenu");
backMenu.addEventListener("click", function () {
    game.classList.remove("enter");
})
const backMenu2 = document.getElementById("backMenu2");
backMenu2.addEventListener("click", function () {
    youLost.classList.remove("enter");
})
const backMenu3 = document.getElementById("backMenu3");
backMenu3.addEventListener("click", function () {
    youWon.classList.remove("enter");
})
const backMenu4 = document.getElementById("backMenu4");
backMenu4.addEventListener("click", function () {
    tie.classList.remove("enter");
})
const backMenu5 = document.getElementById("backMenu5");
backMenu5.addEventListener("click", function () {
    rules.classList.remove("enter");
})

btnPlay.addEventListener("click", function () {
    game.classList.add("enter");
})
btnStartGame.addEventListener("click", function () {
    startGame(deckId);
})


const chipsStorage = localStorage.getItem("playerChips")
let chips = 5000;
if (chipsStorage !== null) {
    chips = parseInt(chipsStorage);
}
localStorage.setItem("playerChips", chips)

const hit = document.getElementById("hit");
const stand = document.getElementById("stand")

let DOMdealerHand = document.getElementById("dealerHand");
let DOMplayerHand = document.getElementById("playerHand");

const deckId = await name.getReadyGame();
let dealerHand = [];
let playerHand = [];
let cardTemp = {};

hit.disabled = true;
stand.disabled = true;

hit.addEventListener("click", async function () {
    hit.disabled = true;
    setTimeout(function () { hit.disabled = false; }, 1000);
    cardTemp = await name.drawCard(deckId);
    playerHand.push(cardTemp);
    DOMplayerHand.appendChild(name.addCard(cardTemp));
    comprobare(playerHand, dealerHand);
})
stand.addEventListener("click", async function () {
    stand.disabled = true;
    setTimeout(function () { stand.disabled = false; }, 1000);
    turnDealer(dealerHand, playerHand)
})

async function startGame(deckId) {
    btnStartGame.disabled = true;
    backMenu.disabled = false;
    hit.disabled = false;
    stand.disabled = false;
    DOMdealerHand.innerHTML = "";
    DOMplayerHand.innerHTML = "";
    dealerHand = [];
    playerHand = [];
    cardTemp = {};
    await name.shuffleDeck(deckId)

    cardTemp = await name.drawCard(deckId);
    dealerHand.push(cardTemp);
    DOMdealerHand.appendChild(name.addCardHidden(cardTemp));
    cardTemp = await name.drawCard(deckId);
    dealerHand.push(cardTemp);
    DOMdealerHand.appendChild(name.addCard(cardTemp));

    cardTemp = await name.drawCard(deckId);
    DOMplayerHand.appendChild(name.addCard(cardTemp));
    playerHand.push(cardTemp);
    cardTemp = await name.drawCard(deckId);
    playerHand.push(cardTemp);
    DOMplayerHand.appendChild(name.addCard(cardTemp));

    comprobare(playerHand, dealerHand);
}

function sumHand(Hand) {
    let sumHand = 0;
    let AcesSumHand = 0;
    Hand.forEach(element => {
        if (element["value"] === 11) {
            AcesSumHand += 1;
        }
        sumHand += element["value"];
    });
    sumHand = AcesReduce(sumHand, AcesSumHand);
    console.log(sumHand)
    return sumHand;
}

function AcesReduce(sumHand, AcesSumHand) {
    while (sumHand > 21 && AcesSumHand > 0) {
        sumHand -= 10;
        AcesSumHand -= 1;
    }
    return sumHand;
}

function comprobare(playerHand, dealerHand) {
    if (sumHand(playerHand) == 21) {
        turnDealer(dealerHand, playerHand);
    } else if (sumHand(playerHand) > 21) {
        DOMdealerHand.firstChild.firstChild.src = dealerHand[0]["image"];
        youLost.classList.add("enter");
        endGame();
    }
}

async function turnDealer(dealerHand, playerHand) {
    DOMdealerHand.firstChild.firstChild.src = dealerHand[0]["image"];
    let dealerSum = sumHand(dealerHand);
    let playerSum = sumHand(playerHand)
    while (dealerSum < 17) {
        cardTemp = await name.drawCard(deckId);
        dealerHand.push(cardTemp);
        DOMdealerHand.appendChild(name.addCard(cardTemp));
        dealerSum = sumHand(dealerHand);
    }
    if (dealerSum > 21) {
        youWon.classList.add("enter");
        chips += (bet * 2)
        endGame();
    } else if (dealerSum > playerSum) {
        youLost.classList.add("enter");
        endGame();
    } else if (playerSum > dealerSum) {
        youWon.classList.add("enter");
        chips += (bet * 2)
        endGame();
    } else {
        tie.classList.add("enter")
        endGame();
    }
}

function endGame() {
    backMenu.disabled = true;
    hit.disabled = true;
    stand.disabled = true;
    btnStartGame.disabled = false;
    setTimeout(function () { hit.disabled = true; }, 1000);
    setTimeout(function () { hit.disabled = true; }, 1500);
    setTimeout(function () { stand.disabled = true; }, 1000);
    setTimeout(function () { stand.disabled = true; }, 1500);
}