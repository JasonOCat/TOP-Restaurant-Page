import pageLoad from './homepage-load';
import menuLoad from './menu-load';
import contactLoad from './contact-load';
import './css/style.css';


const menuHome = document.querySelector("#menu-home");
const menuMenu = document.querySelector("#menu-menu");
const menuContact = document.querySelector("#menu-contact");

pageLoad();

menuHome.addEventListener('click', pageLoad);
menuMenu.addEventListener('click', menuLoad);
menuContact.addEventListener('click', contactLoad);


const obj = {a: 'alpha', b: 'beta'};
const newOjb = {...obj, c: 'charlie'};
console.log(newObj);