"use strict";

import "./style.css";
import {createHomeContent} from "./home.js";

const nav = document.querySelector("nav");
const header = document.querySelector("header");

const createHomeBtn = document.createElement("button");
createHomeBtn.id = "home";
createHomeBtn.textContent = "Home";
const createMenuBtn = document.createElement("button");
createMenuBtn.textContent = "Menu";
createMenuBtn.id = "menu";
const createContBtn = document.createElement("button");
createContBtn.id = "contact";
createContBtn.textContent = "Contact Us";

nav.classList.add("navButtons");
nav.append(createHomeBtn, createMenuBtn, createContBtn);

const titleName = document.createElement("div");
titleName.classList.add("titleName");
titleName.textContent = "Pizzeria";

header.insertBefore(titleName, nav);


//functioning 
const homeBtn = document.querySelector("#home");
const menuBtn=document.querySelector('#home');
const contBtn=document.querySelector('#cont');

window.addEventListener("load", function (e) {
  createHomeContent();
  const homeContainer = document.querySelector(".homeContainer");
  homeContainer.classList.remove("hidden");
});

function handleClicks(){
    createHomeContent();
    createMenuContent();
    createContContent();
}

homeBtn.addEventListener('click', function(){
    handleClicks();
    const homeContainer = document.querySelector(".homeContainer");
    homeContainer.classList.remove("hidden");
})

