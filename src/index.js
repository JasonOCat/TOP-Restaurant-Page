import pageLoad from './page-load';
import menuLoad from './menu-load';
import contactLoad from './contact-load';

const menuHome = document.querySelector("#menu-home");
const menuMenu = document.querySelector("#menu-menu");
const menuContact = document.querySelector("#menu-contact");

pageLoad();

menuHome.addEventListener('click', pageLoad);
menuMenu.addEventListener('click', menuLoad);
menuContact.addEventListener('click', contactLoad);