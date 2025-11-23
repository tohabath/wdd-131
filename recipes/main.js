import recipes from "./recipes.mjs";


function recipeTemplate(image, name, rating, description, getEachTag, getEachRating) {
    return `<div class="recipe-image-container">
                <img class="recipe-image" src='${image}' alt="sweet potato waffles">
            </div>
            <div class="recipe-content">
                <div class="tags">
                    ${getEachTag}
                </div>
                <header class="name">
                    ${name}
                </header>
                <span
                    class="rating"
                    role="img"
                    aria-label="Rating: ${rating} out of 5 stars"
                >
                    ${getEachRating}
                </span>
                <p class="description">
                    ${description}
                </p>
            </div>`;
};

function renderRecipe(chosenRecipe) {
    function getTags(tags) {
        let tagSet = ``;
        for (let tag = 0; tag < tags.length; tag++) {
            tagSet += `<span class="tag-item">
                        ${tags[tag]}
                    </span>`
        };
        return tagSet;
    };
    function getRating(rating) {
        rating = Math.floor(rating);
        let ratingSpans = "";
        for (let i = 1; i < 6; i++) {
            if (i <= rating) {
                ratingSpans += `<span aria-hidden="true" class="icon-star">⭐</span>`;
            } else {
                ratingSpans += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
            };
        };
        return ratingSpans; 
    };

    const image = chosenRecipe.image;
    let tags;
    if (chosenRecipe.tags) {
        tags = chosenRecipe.tags;
    } else {
        tags = "";
    }
    const newPost = document.createElement('article');
    const name = chosenRecipe.name;
    const rating = chosenRecipe.rating;
    const description = chosenRecipe.description;
    const getEachTag = getTags(tags);
    const getEachRating = getRating(rating);
    newPost.className = "recipe";
    newPost.innerHTML = recipeTemplate(image, name, rating, description, getEachTag, getEachRating);
    const recipeContainer = document.getElementById('recipes-container');
    recipeContainer.append(newPost);
}

function eraseRecipes() {
    document.getElementById('recipes-container').innerHTML = "";
}

function noRecipes() {
    const recipeContainer = document.getElementById('recipes-container');
    if (recipeContainer.innerHTML === "") {
        recipeContainer.innerHTML = `<h3>Uh oh!</h3>`
    }
}

function randomRecipe() {
    function randomGet(num) {
        return Math.floor(Math.random() * num);
    };
    const chosenRecipe = recipes[randomGet(recipes.length - 1)];
    eraseRecipes();
    return renderRecipe(chosenRecipe);
};

function filter(query) {
    const filtered = recipes.filter(function(recipe){
        return recipe.name.toLowerCase().includes(query) || recipe.tags.find((item) => item.toLowerCase().includes(query)) || recipe.description.toLowerCase().includes(query)
    });
    const sorted = filtered.sort(function(a, b){return a.name > b.name});
    return sorted;
};

function searchHandler() {
	const searchUpper = document.getElementById('searchBar').value;
    const search = searchUpper.toLowerCase();
    const recipeSet = filter(search);
    eraseRecipes();
    for (let i = 0; i < recipeSet.length; i++) {
        renderRecipe(recipeSet[i]);
    };
    noRecipes();
};

function init() {
    document.getElementById('searchButton').addEventListener('click', (event) => {event.preventDefault(); searchHandler});
    randomRecipe();
};
init();

