export default function loadTabs() {
    let display = document.getElementById("content");

    let tabDiv = document.createElement("div");
    tabDiv.id = "tabDiv";

    let productTitle = document.createElement("h1");
    productTitle.id = "productTitle";
    productTitle.innerText = "Distraction Blocker";

    let homeTab = document.createElement("button");
    let downloadTab = document.createElement("button");
    let aboutTab = document.createElement("button");

    homeTab.textContent = "Home";
    downloadTab.textContent = "Download";
    aboutTab.textContent = "About";

    homeTab.classList.add("tabButton")
    downloadTab.classList.add("tabButton")
    aboutTab.classList.add("tabButton")

    homeTab.id = "homeTab";
    downloadTab.id = "downloadTab";
    aboutTab.id = "aboutTab";

    tabDiv.appendChild(productTitle);
    tabDiv.appendChild(homeTab);
    tabDiv.appendChild(downloadTab);
    tabDiv.appendChild(aboutTab);

    display.appendChild(tabDiv);

    return [homeTab, downloadTab, aboutTab]
}
