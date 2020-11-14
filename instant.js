/*
* Stable version 4.0 - Instant No Debugger
* A program to disable and prevent downloads in the developer console instantly.
* 2020 John Cailtyn
*/

let dk = document.createElement('div');let lo = setInterval(() => {console.log(dk);console.clear();});Object.defineProperty(dk, "id", {get: () => {clearInterval(lo);window.location = window.location.hostname+"/ban.html?url="+window.location;}});
