// Creating a empty array called "my Links"
let myLinks = [];
// Fetching the Input Element from the DOM
const inputEl = document.getElementById("input-el");
// Fetching the Input Button from the DOM
const saveButton = document.getElementById("save-input");
// Fetching the List Element from the DOM
const listEl = document.getElementById("list-el");
// Fetching the Delete Button from the DOM
const deleteButton = document.getElementById("delete-btn");
// Fetching the Open Button from the DOM
const openAllButton = document.getElementById("open-btn");

// See if links are stored in local storage and if so, parse them
let linksFromLocalStorage = JSON.parse(localStorage.getItem("links"));
if (linksFromLocalStorage) {
    myLinks = linksFromLocalStorage
    showLinks()
}

// Show items function that shows all the items that have been stored
function showLinks() {
    let listItems = "";
    for (let i = 0 ; i < myLinks.length; i++) {
        listItems += `<li><a href = '${myLinks[i]}' target = '_blank'>${myLinks[i]}</a></li>`
    }

    listEl.innerHTML = listItems
}

// Event listener for when the save button is clicked
saveButton.addEventListener("click", saveButtonClick);
// Function for when the save button is clicked
function saveButtonClick() {
    let inputtedLink = inputEl.value
    if (inputtedLink.length > 1) {
    myLinks.push(inputtedLink)
    inputtedLink.value = ""
    localStorage.setItem("links", JSON.stringify(myLinks))
    showLinks()
    }
}

deleteButton.addEventListener("click", deleteButtonClick);
// Function for when the delete button is clicked
function deleteButtonClick() {
    localStorage.clear()
    myLinks = []
    showLinks()
}

openAllButton.addEventListener("click", openAllButtonClick);
function openAllButtonClick() {
    for (let n = 0; n < myLinks.length; n += 1) {
        window.open(myLinks[n]);
    }
}