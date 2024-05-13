"use strict";
import "./style.css";

export function createHomeContent(){    
    const content = document.querySelector("#content");
    const homeContainer = document.createElement("div");
    
    homeContainer.classList.add("homeContainer", "hidden");
    
    const restName = document.createElement("div");
    restName.textContent = "Welcome!";
    restName.classList.add("restName");
    const tagline = document.createElement("div");
    tagline.textContent =
    '"Savor Every Bite: Crafted with Passion, Delivered with Flavor!"';
    tagline.classList.add("tagline");
    const bookBtn = document.createElement("button");
    bookBtn.textContent = "Book Now";
    
    homeContainer.appendChild(restName);
    homeContainer.appendChild(tagline);
    homeContainer.appendChild(bookBtn);
    
    content.appendChild(homeContainer);
}
    