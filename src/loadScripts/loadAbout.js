
export default function loadAbout(displayBody, aboutBody) {
    displayBody.innerHTML = "";
    if (aboutBody.childNodes.length === 0) {
        let aboutText = document.createElement("div");
        let aboutHeader = document.createElement("h1");
        let aboutTextContent = document.createElement("p");

        aboutText.id = "aboutText";
        aboutHeader.id = "aboutHeader";
        aboutTextContent.id = "aboutTextContent";

        aboutHeader.innerText = "About Distraction Blocker";
        aboutTextContent.innerText = "With the limitless distractions in the modern world, Distraction Blocker\naims to allow its users to redefine the limits of their computer";
        
        aboutText.appendChild(aboutHeader);
        aboutText.appendChild(aboutTextContent);

        aboutBody.appendChild(aboutText);

        displayBody.appendChild(aboutBody);
    }
    else {
        displayBody.appendChild(aboutBody);
    }
}