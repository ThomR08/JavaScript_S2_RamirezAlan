import * as name from "./functions.js";

const deckId = await name.startGame();
console.log(deckId);

const card1 = await name.drawCard(deckId)
console.log(card1["code"])
console.log(card1["image"])
console.log(card1["remaining"]);

const card2 = await name.drawCard(deckId)
console.log(card2["code"])
console.log(card2["image"])
console.log(card2["remaining"]);