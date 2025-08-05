import * as name from "./functios.js";

let superHeroName = document.getElementById("superHeroName");
let find = document.getElementById("find");
let containSuperHeros = document.getElementById("containSuperHeros");

find.addEventListener("click", function(){
    superHeroFind(superHeroName.value)
});

function superHeroFind(name) {
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/1ace38f76c55f46d84faf5c319530a5d/search/${name}`;
    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)["results"];
            containSuperHeros.innerHTML = "";
            response.forEach(element => {
                const cardTag = document.createElement("div");
                cardTag.classList.add("card");
                const imgTag = document.createElement("img");
                imgTag.src = (element["image"]["url"]);
                const h1Tag = document.createElement("h1");
                h1Tag.textContent = (element["name"]);
                cardTag.appendChild(imgTag);
                cardTag.appendChild(h1Tag);
                containSuperHeros.appendChild(cardTag);
            });
        }
    }
    xhr.send();
}
