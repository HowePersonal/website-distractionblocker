import windowsImage from '../assets/images/windowsImage.png';

export default function loadDownload(displayBody, downloadBody) {
    displayBody.innerHTML = "";
    if (downloadBody.childNodes.length === 0) {
        let homeBody = document.createElement("div");
        homeBody.id = "homeBody";

        let downloadText = document.createElement("div");
        let downloadHeader = document.createElement("h1");
        let windowsImg = document.createElement("img");
        let downloadButtonWin = document.createElement("button");

        downloadText.id = "downloadText";
        downloadHeader.id = "downloadHeader";
        windowsImg.id = "windowsImg";
        downloadButtonWin.id = "downloadButtonWin";

        downloadHeader.innerText = "Download Distraction Blocker\nfor Windows";
        windowsImg.src = windowsImage;
        downloadButtonWin.textContent = "Download"

        downloadText.appendChild(downloadHeader);

        downloadBody.appendChild(downloadText);
        downloadBody.appendChild(windowsImg);
        downloadBody.appendChild(downloadButtonWin);

        displayBody.appendChild(downloadBody);
    }
    else {
        displayBody.innerHTML = "";
        displayBody.appendChild(downloadBody);
    }
}