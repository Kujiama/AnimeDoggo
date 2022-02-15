"use Strict";
// let menuOpen = false;

function notImplement() {
    alert("This feature has not been implemented");
}

function toggleBrowse() {
    window.location.href = `${window.location.origin}/animelist.html`
}

function toggleHome() {
    window.location.href = `${window.location.origin}/index.html`
}

// function toggleMenu() {
//     if (menuOpen) {
//         isModalOpen = false;
//         return document.body.classList.remove("menu-open")
//     }
//     menuOpen = true;
//     document.body.classList += " menu-open"
// }
// did not work for this project unfortunately but it is applicable to others for sooner projects

function toggleOpen() {
    document.body.classList += " menu-open"
}

function toggleClose() {
    document.body.classList.remove('menu-open')
}
