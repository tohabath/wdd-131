const themeSelector = document.getElementById('theme');
const documentBody = document.querySelector('body');
const documentSubHeading = document.querySelector('h3');
const documentImage = document.querySelector('img');

function changeTheme() {
    if (themeSelector.value == "dark") {
        console.log(themeSelector.value);
        documentBody.setAttribute("class", "dark");
        documentSubHeading.setAttribute("class", "dark");
        documentImage.setAttribute('src', 'byui-logo_white.png');
    }
    else {
        console.log(themeSelector.value);
        documentBody.setAttribute("class", "light");
        documentSubHeading.setAttribute("class", "light");
        documentImage.setAttribute('src', 'byui-logo_blue.webp');
    }
}

themeSelector.addEventListener('change', changeTheme);

changeTheme();