import * as name from "./functions.js";

async function startGame(deckId) {

    cardTemp = await name.drawCard(deckId);
    dealerHand.push(cardTemp);
    DOMdealerHand.appendChild(name.addCard(cardTemp));
    cardTemp = await name.drawCard(deckId);
    dealerHand.push(cardTemp);
    DOMdealerHand.appendChild(name.addCard(cardTemp));

    cardTemp = await name.drawCard(deckId);
    DOMplayerHand.appendChild(name.addCard(cardTemp));
    playerHand.push(cardTemp);
    cardTemp = await name.drawCard(deckId);
    playerHand.push(cardTemp);
    DOMplayerHand.appendChild(name.addCard(cardTemp));


}

const game = document.getElementById("game")
const rules = document.getElementById("rules")

const btnPlay = document.getElementById("btnPlay")
btnPlay.addEventListener("click", function() {
    game.classList.add("enter")
})

const btnRules = document.getElementById("btnRules")
btnRules.addEventListener("click", function() {
    rules.classList.add("enter")
})

const backMenu = document.getElementById("backMenu")
backMenu.addEventListener("click", function() {
    game.classList.remove("enter")
})

const backMenu2 = document.getElementById("backMenu2")
backMenu2.addEventListener("click", function() {
    rules.classList.remove("enter")
})

const deckId = await name.getReadyGame();

let dealerHand = [];
let DOMdealerHand = document.getElementById("dealerHand");;
let playerHand = [];
let DOMplayerHand = document.getElementById("playerHand");
let cardTemp = {};


