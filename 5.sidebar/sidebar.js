// const showMenuButton = document.getElementById("showButton");
// const hideMenuButton = document.getElementById("hideButton");
// const sideMenu = document.getElementById("sidemenu");
// function showSidebar() {
//     sideMenu.classList.add("show");
// }

// function hideSidebar() {
//     sideMenu.classList.remove("show");
// }

// showMenuButton.addEventListener("click", showSidebar);
// hideMenuButton.addEventListener("click", hideSidebar);


// const showMenuButton = document.getElementById("showButton");
// const hideMenuButton = document.getElementById("hideButton");
// const sideMenu = document.getElementById("sidemenu");

// function toggleSidebar() {
//     sideMenu.classList.toggle("show");
// }

// showMenuButton.addEventListener("click", toggleSidebar);
// hideMenuButton.addEventListener("click", toggleSidebar);


const showMenuButton = document.getElementById("showButton");
const hideMenuButton = document.getElementById("hideButton");
const sideMenu = document.getElementById("sidemenu");

let sidebarVisible = false;

function toggleSidebar() {
    if (sidebarVisible) {
        sideMenu.classList.remove("show");
    } else {
        sideMenu.classList.add("show");
    }
    sidebarVisible = !sidebarVisible;
}

showMenuButton.addEventListener("click", toggleSidebar);
hideMenuButton.addEventListener("click", toggleSidebar);
