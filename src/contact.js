' use strict'

import "./style.css";
import map1 from './assets/photos/map.png'

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
    const addressImg=document.createElement('img');
    addressImg.classList.add('addressImg');
    addressImg.src=map1;
    addressContainer.appendChild(addressImg);

    const formContainer=document.createElement('form');
    formContainer.classList.add('formContainer');

    const formTitle=document.createElement('h1');
    formTitle.textContent='Contact Us';
    formTitle.classList.add('formTitle');
    formContainer.appendChild(formTitle);

    const form = document.createElement('form');
    const nameLabel = document.createElement('label');
    nameLabel.classList.add('formLabel')
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.classList.add('formInput')
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Enter your name';
    nameLabel.appendChild(nameInput);
    form.appendChild(nameLabel);

    const emailLabel = document.createElement('label');
    emailLabel.classList.add('formLabel');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.classList.add('formInput')
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Enter your email';
    emailLabel.appendChild(emailInput);
    form.appendChild(emailLabel);

    const messageLabel = document.createElement('label');
    messageLabel.classList.add('formLabel');
    messageLabel.textContent = 'Write a Message:';
    const messageTextarea = document.createElement('textarea');
    messageTextarea.classList.add('formInput');
    messageTextarea.name = 'message';
    messageTextarea.placeholder = 'Enter your message here';
    messageTextarea.rows = 10; 
    messageLabel.appendChild(messageTextarea);
    form.appendChild(messageLabel);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('formBtn');
    submitBtn.type = 'reset';
    submitBtn.textContent = 'Submit';

    form.appendChild(submitBtn);
    formContainer.appendChild(form);
    

    contContainer.appendChild(addressContainer);
    contContainer.appendChild(formContainer);
    content.appendChild(contContainer);
}