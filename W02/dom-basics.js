const newParagraph = document.createElement('p');
const insertImage = document.createElement('img');
newParagraph.innerText = "Added with Javascript";
insertImage.setAttribute('src', 'https://picsum.photos/200')
insertImage.setAttribute('alt', 'image')
document.body.appendChild(newParagraph);

document.body.appendChild(insertImage);


// From site
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Task
const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>"
document.body.appendChild(newSection);