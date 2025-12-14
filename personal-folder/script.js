import softwareCards from "./module.mjs";

function softwareCardTemplate(cardName, cardID, cardImage, cardImageAlt, cardDescription, cardURL) {
    const newCard = document.createElement('article');
    const cardDescriptionTruncated = sliceString(cardDescription, 100);
    newCard.className = "catalogue-section"
    newCard.innerHTML = `<div class="catalogue-card-content">
              <img class="catalogue-card-image" src="${cardImage}" alt="${cardImageAlt}">
              <div class="catalogue-card-text">
                <h2 class="catalogue-card-name">
                  ${cardName}
                </h2>
                <p class="catalogue-card-description" id="${cardID}">
                  ${cardDescriptionTruncated}
                </p>
              </div>
            </div>`;
    newCard.addEventListener('click', function(){cardLink(cardURL)});
    return newCard;
}

function sliceString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    }
    return str;
}

function cardLink(website) {
    window.open(website, '_blank').focus()
}

function addSoftwareCards() {
    const cardContainer = document.getElementById("card_container");
    softwareCards.forEach(currentCard => {
        const newCard = softwareCardTemplate(currentCard["name"], currentCard["id"], currentCard["img"], 
        currentCard["imgAlt"], currentCard["description"], currentCard["url"]);
        cardContainer.appendChild(newCard);
        window.addEventListener("resize", function(){handleResize(newCard, currentCard["id"], currentCard["description"])});
        handleResize(newCard, currentCard["id"], currentCard["description"])
    });
}

function handleResize(newCard, newCardID, newCardDesc) {
    const newCardDescContainer = document.getElementById(newCardID);
    const newCardDescTrunc = sliceString(newCardDesc, 100);
    if (window.innerWidth <= 600) {
        newCard.style.height = "425px";
        newCardDescContainer.innerHTML = newCardDesc;
        newCard.onmouseenter = null;
        newCard.onmouseleave = null;
    } else if (window.innerWidth > 600) {
        newCard.style.height = "325px";
        newCardDescContainer.innerHTML = newCardDescTrunc;
        newCard.onmouseenter = function(){
            newCardDescContainer.innerHTML = newCardDesc;
            newCard.style.height = "425px";
        };
        newCard.onmouseleave = function(){
            newCardDescContainer.innerHTML = newCardDescTrunc;
            newCard.style.height = "325px";
        };
    };
}


addSoftwareCards();