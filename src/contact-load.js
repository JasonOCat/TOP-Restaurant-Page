const contactLoad = () => {

    const contentDiv = document.querySelector("#content");

    const titleH1 = document.createElement("h1");
    titleH1.textContent = "Contact";

    const paraDescription = document.createElement("p");
    paraDescription.innerHTML = "pinoy@gmail.comn<br/>75015<br/>1 rue victor Hugo";

    const imgBanner = document.createElement("img");
    imgBanner.setAttribute("src", "../siningang.webp");


    //empty the content
    contentDiv.innerHTML = "";

    //fill the main content with the new content
    contentDiv.appendChild(titleH1);
    contentDiv.appendChild(paraDescription);
    contentDiv.appendChild(imgBanner);
}


export default contactLoad;
