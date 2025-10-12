const dropdown = document.getElementById('dropdown');
const toggleDrop = document.getElementById('toggle-drop');
const body = document.querySelector('body');
const gallery = document.querySelector('.gallery');
const viewer = document.createElement('dialog');

function handleDialog(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    const theImage = event.target.closest('img').getAttribute('src');

    // I was confused by step three, so I asked
    // ChatGPT for help.
    // This block of code is the only part
    // from its explanation I'm using.
    let parts = theImage.split('-');
    let base = parts[0];
    let fullSrc = base + '-full.jpeg';
    viewer.innerHTML = `<img src="${fullSrc}" alt="img"><button class="close-viewer">X</button>`;
    document.body.appendChild(viewer);

    // Styling viewer
    viewer.style.width = "100%";
    viewer.style.height = "100%";
    viewer.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    viewer.style.zIndex = "10";
    viewer.style.textAlign = "center";

    // Styling close button
    viewer.querySelector('button').style.position = "absolute";
    viewer.querySelector('button').style.right = "5vw";
    viewer.querySelector('button').style.top = "25vh";
    viewer.querySelector('button').style.fontSize = "3vh";
    // Styling close button
    viewer.querySelector('button').style.color = "black";
    viewer.querySelector('button').style.backgroundColor = "#ebebeb";
    viewer.querySelector('button').style.borderStyle = "solid";
    viewer.querySelector('button').style.borderWidth = "1px";
    viewer.querySelector('button').style.padding = "5px 15px 5px 15px";
    // Styling viewer image
    viewer.querySelector('img').style.margin = "25vh auto";
    viewer.querySelector('img').style.maxHeight = "100%";
    viewer.querySelector('img').style.maxWidth = "90%";

    // I wanted to adjust the button position to keep it on
    // the corner of the image, but I failed. I tried several
    // different strategies to make it work, and tried asking
    // ChatGPT, but I couldn't figure it out in time.
    if (window.innerWidth > 1000) {
        viewer.querySelector('button').style.right = "18vw";
    }

    viewer.showModal();
    viewer.querySelector('button').addEventListener('click', (event) => {viewer.close();})
}

// This section of code I already had in place before Cool Pics Part 2,
// I hadn't realized I was working ahead. I just went ahead and added
// handleResize for this week.
function toggleDropdownMenu() {
    if (dropdown.style.display == "none") {
        dropdown.style.display = "flex";
    }
    else {
        dropdown.style.display = "none";
    }
}
function handleResize() {
    if (window.innerWidth > 1000 && dropdown.style.display == "none") {
        dropdown.style.display = "flex";
    }
}

toggleDrop.addEventListener('click', toggleDropdownMenu);

gallery.addEventListener('click', handleDialog);

window.addEventListener("resize", handleResize);
handleResize();

