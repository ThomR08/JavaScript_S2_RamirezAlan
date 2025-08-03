export async function getReadyGame() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
        xhr.open("GET", url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const deckId = response["deck_id"];
                resolve(deckId);
            }
        }
        xhr.send();
    })
}

export async function drawCard(deckId) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
        xhr.open("GET", url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const code = response["cards"][0]["code"];
                const image = response["cards"][0]["image"];
                const suit = response["cards"][0]["suit"];
                let value;
                if (isNaN(response["cards"][0]["value"])){
                    if (response["cards"][0]["value"] === "ACE"){
                        value = 11;
                    }else{
                        value = 10;
                    }
                }else{
                    value = parseInt(response["cards"][0]["value"]);
                }
                const cardJSON = {
                    "code": code,
                    "image": image,
                    "value": value,
                    "suit": suit
                };
                resolve(cardJSON);
            }
        }
        xhr.send();
    })
}

export function addCard(cardObject) {
    const cardTag = document.createElement("div");
    cardTag.classList.add("card");
    const imgTag = document.createElement("img");
    imgTag.src = (cardObject["image"]);
    cardTag.appendChild(imgTag);
    return cardTag
}