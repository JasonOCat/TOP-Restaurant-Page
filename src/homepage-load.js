import menuLoad from './menu-load';

const pageLoad = () => {

    const contentDiv = document.querySelector("#content");

    const titleH1 = document.createElement("h1");
    titleH1.textContent = "The Filipino restaurant";

    
    const paraDescription = document.createElement("p");
    paraDescription.textContent = "Traditional pinoy dishes.";

    const linkMenu = document.createElement("a");
    linkMenu.innerHTML = "<button class='menu-button'>Menu</button>"


    linkMenu.addEventListener('click', menuLoad);



    //empty the content
    contentDiv.innerHTML = "";

    contentDiv.appendChild(titleH1);
    contentDiv.appendChild(paraDescription);
    contentDiv.appendChild(linkMenu);
}


export default pageLoad;
