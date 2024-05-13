' use strict'

import "./style.css";

export function createContContent(){    
    const content = document.querySelector("#content");
    const contContainer=document.createElement('div');
    contContainer.classList.add('contContainer','hidden');
     
    const addressContainer=document.createElement('div');
    addressContainer.classList.add('addressContainer');
    const addressTitle=document.createElement('h1');
    addressTitle.textContent='Address';
    addressTitle.classList.add('addressTitle');
    addressContainer.appendChild(addressTitle);
    const addressLine=document.createElement('p');
    addressLine.classList.add('addressLine');
    addressLine.textContent='39, DLF New Town, Akshaynagar, Bannerghatta Road, Bangalore'
    addressContainer.appendChild(addressLine);

    contContainer.appendChild(addressContainer);
    content.appendChild(contContainer);
}