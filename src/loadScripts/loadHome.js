import productImage from '../assets/images/blockerscreenshot.png';

export default function loadHome() {
    let display = document.getElementById("content");

    let bodyContent = document.createElement("div");
    bodyContent.id = "bodyContent";

    let productText = document.createElement("div");
    productText.id = "productText";
    let textTitle = document.createElement("h1");
    let textBodyIntro = document.createElement("h5");
    let textBody = document.createElement("p");
    textTitle.innerText = "Control Your Limits";
    textBodyIntro.innerText = "Simply Block";
    textBody.innerText = "\nApplications\n\nWebsites"
    productText.appendChild(textTitle);
    productText.appendChild(textBodyIntro);
    productText.appendChild(textBody);

    let productImg = document.createElement("img");
    productImg.id = "productImg";
    productImg.src = productImage;

    bodyContent.appendChild(productText);
    bodyContent.appendChild(productImg);
    
    display.appendChild(bodyContent);

}