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

function randomGet(num) {
 return Math.floor(Math.random() * num);
};

function getTags(tags) {
    let tagSet = ``;
    for (let tag = 0; tag < tags.length; tag++) {
        tagSet += `<a href="" class="tag-item">
                    ${tags[tag]}
                </a>`
    };
    return tagSet;
};
function getRating(rating) {
    rating = Math.floor(rating);
    if (rating === 1) {
        return `<span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>`
    } else if (rating === 2) {
        return `<span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>`
    } else if (rating === 3) {
        return `<span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>`
    } else if (rating === 4) {
        return `<span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>`
    } else if (rating === 5) {
        return `<span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>`
    };
    
};

function renderRecipe(chosenRecipe) {
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
    recipeContainer.innerHTML = "";
    recipeContainer.append(newPost);
}

function randomRecipe() {
    const chosenRecipe = recipes[randomGet(recipes.length - 1)];
    return renderRecipe(chosenRecipe);
};

function filter(query) {
    const filtered = recipes.filter(filterFunction)
    // sort by name
    const sorted = filtered.sort(sortFunction)
        return sorted
};

function searchHandler(e) {
	e.preventDefault()
	const search = document.getElementById('searchBar').value.toLowerCase();
    filter(search);
};

function init() {
    randomRecipe();
};
init();

