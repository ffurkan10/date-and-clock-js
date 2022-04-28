let userName = prompt("Adınızı Giriniz: ");
let myName = document.querySelector("#myName");
myName.innerHTML = `${myName.innerHTML} <strong>${userName}</strong>`;

function updateClock() {}
let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let dname = now.getDay();

let week = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
let ids = ["hour", "minutes", "seconds", "days"];
let values = [hour, min, sec, week[dname]];

for (let i = 0; i < ids.length; i++)
  document.getElementById(ids[i]).firstChild.nodeValue = values[i];

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}
