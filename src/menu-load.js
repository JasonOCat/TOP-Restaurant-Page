
import Sinigang from './img/sinigang.jpg';
import Sisig from './img/sisig.png';
import ChickenAdobo from './img/chicken-adobo.jpg';

const menuLoad = () => {

    const contentDiv = document.querySelector("#content");

    const titleH1 = document.createElement("h1");
    titleH1.textContent = "Menu";

    const elementMenu = document.createElement("div");
    elementMenu.classList.add("menu-container");
    elementMenu.innerHTML = `
    <div class="dish">
        <div id="dish1" class="image-dish">
            
        </div>

        <div class="text-dish">
            <h2>Sinigang</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
    </div>

    <div class="dish">
        <div id="dish2" class="image-dish">
  
        </div>

        <div class="text-dish">
            <h2>Sisig</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
    </div>

    <div class="dish">
        <div id="dish3" class="image-dish">
            
        </div>

        <div class="text-dish">
            <h2>Chicken Adobo</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
    </div>

    `




    //empty the content
    contentDiv.innerHTML = "";

    //fill the main content with the new content
    contentDiv.appendChild(titleH1);
    contentDiv.appendChild(elementMenu);

    const sinigang = new Image();
    sinigang.src = Sinigang;
    sinigang.setAttribute("width","100%");
    const dish1 = document.querySelector("#dish1");
    dish1.appendChild(sinigang);

    const sisig = new Image();
    sisig.src = Sisig;
    sisig.setAttribute("width","100%");
    const dish2 = document.querySelector("#dish2");
    dish2.appendChild(sisig);

    const adobo = new Image();
    adobo.src = ChickenAdobo;
    adobo.setAttribute("width","100%");
    const dish3 = document.querySelector("#dish3");
    dish3.appendChild(adobo);

}


export default menuLoad;
