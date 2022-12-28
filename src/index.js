import './styling/styles.css';
import './styling/tab.css';
import './styling/home.css'
import loadTabs from './loadScripts/loadTabs.js';
import loadHome from './loadScripts/loadHome.js';
import loadDownload from './loadScripts/loadDownload.js';

let display = document.getElementById("content");

const [homeTab, downloadTab, aboutTab] = loadTabs();
loadHome();

homeTab.addEventListener('click', loadHome);

