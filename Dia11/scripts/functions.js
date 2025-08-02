export async function startGame() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
        xhr.open("GET", url, true);
        xhr.onload = function () {
            if (xhr.status == 200) {
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
            if (xhr.status == 200) {
                const response = JSON.parse(xhr.responseText);
                const code = response["cards"][0]["code"];
                const image = response["cards"][0]["image"];
                const remaining = response["remaining"]
                const cardJSON = {
                    "code": code,
                    "image": image,
                    "remaining": remaining
                };
                resolve(cardJSON);
            }
        }
        xhr.send();
    })
}