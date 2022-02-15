"use strict";

const animeElement = document.querySelector('.anime_list');
const baseUrl = 'https://api.jikan.moe/v4';
const landing = localStorage.getItem("landing");

async function getAnime(filter) {
    const anime = await fetch(`${baseUrl}/anime`);
    const animeData = await anime.json()
        .catch(err => console.warn(err.message));

    // filter anime by newest,populartiy and ratings    
    if (filter === 'Newest') {
        animeData.data.sort((a, b) => (b.year) - (a.year));
        console.log("Newest")
    } else if (filter === 'Popular') {
        animeData.data.sort((a, b) => (b.popularity) - (a.popularity));
        console.log("Popular")
    } else if (filter === 'Ratings') {
        animeData.data.sort((a, b) => (b.score) - (a.score));
        console.log("Top Rated")
    }

    animeElement.innerHTML = animeData.data.map(anime => animeHtml(anime)).join("");
    console.log(animeData);

}
getAnime();

async function searchAnime(event) {
    // gets a query from the search bar 
    event.preventDefault();
    const form = new FormData(this);
    const query = form.get("search");
    console.log(query);

    // fetching anime api that is searched 
    const anime = await fetch(`${baseUrl}/anime?q=${query}`)
    const animeData = await anime.json()
        .catch(err => console.warn(err.message))

    animeElement.innerHTML = animeData.data.map(anime => animeHtml(anime)).join("");
    console.log(animeData);

    // if there is no content for the searched 
    if (animeData.data.length === 0 || animeData.data.length === 0) {
        animeElement.innerHTML = `<div class="not-found">
        <img src="./assets/undraw_page_not_found_re_e9o6.svg" class="not_found-img"alt="">
        <h2 class="orange_text error_msg">Sorry your search, "<span class="black_text">${query}</span>" was not found</h2>
        </div> `
        console.log('not found')
    }

}

function search() {
    const form = document.querySelector(".input_wrapper");
    form.addEventListener("submit", searchAnime);
}

window.addEventListener("load", search);

function filterAnime(event) {
    getAnime(event.target.value);
}


function animeHtml(anime) {
    return `
        <div class="anime_card" >
        <div class="anime_container">
            <figure class="anime_img-wrapper">
                <img class="anime_image" src="${anime.images.jpg.image_url}">
            </figure >
            <h3 class=" anime-title anime_eng-title">${anime.title}</h3>
            <h3 class=" anime-title anime_jap-title">${anime.title_japanese}</h3>
        </div>
        </div>`
}



function notImplement() {
    alert("This feature has not been implemented");
}

function toggleBrowse() {
    window.location.href = `${window.location.origin}/animelist.html`;
}

function toggleHome() {
    window.location.href = `${window.location.origin}/index.html`;
}

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

function toggleOpen() {
    document.body.classList += " menu-open"
}

function toggleClose() {
    document.body.classList.remove('menu-open')
}





