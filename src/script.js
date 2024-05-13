"use strict";

import "./style.css";
import {createHomeContent} from "./home.js";
import {createMenuContent } from "./menu.js";
import {createContContent} from './contact.js';

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
createHomeContent();
createMenuContent();
createContContent();

const homeContainer = document.querySelector(".homeContainer");
const menuContainer = document.querySelector(".menuContainer");
const contContainer=document.querySelector('.contContainer');


const homeBtn = document.querySelector("#home");
const menuBtn=document.querySelector('#menu');
const contBtn=document.querySelector('#contact');
const bookBtn=document.querySelector('.bookBtn');

window.addEventListener("load", function (e) {
  homeContainer.classList.remove("hidden");
});

function handleClicks(){
    homeContainer.classList.add('hidden');
    menuContainer.classList.add('hidden');
    contContainer.classList.add('hidden');
}

homeBtn.addEventListener('click', function(){
    handleClicks();
    homeContainer.classList.remove("hidden");
})

menuBtn.addEventListener('click', function(){
  handleClicks();
  menuContainer.classList.remove("hidden");
})

bookBtn.addEventListener('click', function(){
  handleClicks();
  menuContainer.classList.remove("hidden");
})

contBtn.addEventListener('click',function(){
  handleClicks();
  contContainer.classList.remove('hidden');
})

