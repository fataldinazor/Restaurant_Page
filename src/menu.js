"use strict";
import "./style.css";

const pizzaImages = [];
for (let i = 0; i < 8; i++) {
    pizzaImages.push(require(`./assets/photos/pizza${i}.jpg`));
}

export function createMenuContent(){    
    const content = document.querySelector("#content");
    const menuContainer=document.createElement('div');
    menuContainer.classList.add('menuContainer','hidden');

    const ourMenu=document.createElement('div');
    ourMenu.classList.add('ourMenu');
    ourMenu.innerHTML=`
        <h1>Our Menu</h1>
        <p>Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history</p>
    `
    const pizzaCards=document.createElement('div');
    pizzaCards.classList.add('pizzaCards');

    for(let i=0;i<8;i++){
        const pizzaCard=document.createElement('div');
        pizzaCard.classList.add('pizzaCard');
        const pizzaImg=document.createElement('img');
        pizzaImg.classList.add('pizzaImg');
        pizzaImg.src=pizzaImages[i]
        pizzaCard.appendChild(pizzaImg);
        
        const pizzaName=document.createElement('div');
        pizzaName.classList.add('pizzaName');
        pizzaName.textContent='Pizza Margherita'
        pizzaCard.appendChild(pizzaName);

        const pizzaPrice=document.createElement('div');
        pizzaPrice.classList.add('pizzaPrice');
        pizzaPrice.textContent='₹400';
        pizzaCard.appendChild(pizzaPrice);

        const pizzaDesc=document.createElement('div');
        pizzaDesc.classList.add('pizzaDesc');
        pizzaDesc.textContent='Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque'
        pizzaCard.appendChild(pizzaDesc);   
        
        const buyBtn=document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent='Add to Cart';
        pizzaCard.appendChild(buyBtn);
    
        pizzaCards.appendChild(pizzaCard);
    }

    const seeBtn=document.createElement('button');
    seeBtn.classList.add('seeBtn');
    seeBtn.textContent='See More';
    
    menuContainer.appendChild(ourMenu);
    menuContainer.appendChild(pizzaCards);
    menuContainer.appendChild(seeBtn);

    content.appendChild(menuContainer);
}