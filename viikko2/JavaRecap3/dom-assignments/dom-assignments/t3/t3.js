'use strict'

const d = window.document.getElementById('target');

let browserName = navigator.appName;
let browserVersion = navigator.appVersion;

let OSName = "Unknown OS";
if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";


let screenWidth = window.screen.width;
let screenHeight = window.screen.height;


let availableWidth = window.screen.availWidth;
let availableHeight = window.screen.availHeight;


d.innerHTML = `
    Browser Name: ${browserName} <p>
    Browser Version: ${browserVersion} <p>
    Operating System: ${OSName} <p>
    Screen Width: ${screenWidth} <p>
    Screen Height: ${screenHeight} <p>
    Available Width: ${availableWidth} <p>
    Available Height: ${availableHeight}
`;
let now = new Date();


let options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
let formattedDate = now.toLocaleDateString('fi-FI', options);
let formattedTime = now.toLocaleTimeString('fi-FI', options);


let targetElement = document.getElementById('target');


let dateElement = document.createElement('p');
let timeElement = document.createElement('p');


dateElement.textContent = `Current Date: ${formattedDate}`;
timeElement.textContent = `Current Time: ${formattedTime}`;


targetElement.appendChild(dateElement);
targetElement.appendChild(timeElement);
