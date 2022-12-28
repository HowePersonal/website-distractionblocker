import './styling/styles.css';
import './styling/tab.css';
import './styling/home.css';
import './styling/download.css'
import './styling/about.css'
import loadTabs from './loadScripts/loadTabs.js';
import loadHome from './loadScripts/loadHome.js';
import loadDownload from './loadScripts/loadDownload.js';
import loadAbout from './loadScripts/loadAbout.js';

let display = document.getElementById("content");

let displayBody = document.createElement("div");
displayBody.id = "displayBody";

let homeBody = document.createElement("div");
let downloadBody = document.createElement("downloadBody");
let aboutBody = document.createElement("aboutBody");

homeBody.id = "homeBody";
downloadBody.id = "downloadBody";
aboutBody.id = "aboutBody";

const [homeTab, downloadTab, aboutTab] = loadTabs();
display.appendChild(displayBody)

loadHome(displayBody, homeBody);

homeTab.addEventListener('click', function() {
    loadHome(displayBody, homeBody);
});

downloadTab.addEventListener('click', function() {
    loadDownload(displayBody, downloadBody);
});

aboutTab.addEventListener('click', function() {
    loadAbout(displayBody, aboutBody);
});