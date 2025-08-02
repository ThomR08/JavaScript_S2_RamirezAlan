import * as name from "./functions.js";

const deckId = await name.getReadyGame();

let dealerHand = [];
let playerHand = [];
let cardTemp = {};
let cardTag = document.createElement("div");
cardTag.innerHTML


async function startGame(deckId) {

    cardTemp = await name.drawCard();
    dealerHand.push(cardTemp)
    cardTemp = await name.drawCard();
    dealerHand.push(cardTemp)

    cardTemp = await name.drawCard();
    playerHand.push(cardTemp)
    cardTemp = await name.drawCard();
    playerHand.push(cardTemp)
}
