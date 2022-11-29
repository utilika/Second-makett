'use strict';
const menuWrapper = document.querySelector('.popup-menu');
const menuButton = document.querySelector('.popup-menu__button');
const menuList = document.querySelector('.popup-menu-list');


menuButton.addEventListener('click', showPopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();
    menuList.classList.toggle('hide')
}