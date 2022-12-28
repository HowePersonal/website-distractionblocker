import productImage from '../assets/images/blockerscreenshot.png';

export default function loadHome(displayBody, homeBody) {
    displayBody.innerHTML = "";
    if (homeBody.childNodes.length === 0) {
        let productText = document.createElement("div");
        productText.id = "productText";
    
        let textTitle = document.createElement("h1");
        let textBodyIntro = document.createElement("h5");
        let textBody = document.createElement("p");
    
        textTitle.innerText = "Control Your Limits";
        textBodyIntro.innerText = "Simply Block";
        textBody.innerText = "\nApplications\n\nWebsites";
    
        productText.appendChild(textTitle);
        productText.appendChild(textBodyIntro);
        productText.appendChild(textBody);
    
        let productImg = document.createElement("img");
        productImg.id = "productImg";
        productImg.src = productImage;
    
        homeBody.appendChild(productText);
        homeBody.appendChild(productImg);

        displayBody.appendChild(homeBody);
    }
    else {
        displayBody.appendChild(homeBody);
    }



}