const menuLoad = () => {

    const contentDiv = document.querySelector("#content");

    const titleH1 = document.createElement("h1");
    titleH1.textContent = "Menu";

    const elementMenu = document.createElement("div");
    elementMenu.classList.add("menu-container");
    elementMenu.innerHTML = `
    <div class="dish">
        <div id="dish1" class="image-dish">
            <img src="../src/img/sinigang.jpg" width="100%">
        </div>

        <div class="text-dish">
            <h2>Sinigang</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
    </div>

    <div class="dish">
        <div id="dish2" class="image-dish">
            <img src="../src/img/sisig.png" width="100%">
        </div>

        <div class="text-dish">
            <h2>Sisig</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
    </div>

    <div class="dish">
        <div id="dish3" class="image-dish">
            <img src="../src/img/chicken-adobo.jpg" width="100%">
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

}


export default menuLoad;
