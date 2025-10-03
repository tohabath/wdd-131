const dropdown = document.getElementById('dropdown');
const toggleDrop = document.getElementById('toggle-drop');

function toggleDropdownMenu() {
    if (dropdown.style.display == "none") {
        openDropDownMenu();
    }
    else {
        closeDropDownMenu();
    }
}
function closeDropDownMenu() {
    dropdown.style.display = "none";
}
function openDropDownMenu() {
    dropdown.style.display = "flex";
}

toggleDrop.addEventListener('click', toggleDropdownMenu);
