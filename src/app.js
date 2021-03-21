let today = new Date();
let day = new Date(1995, 1, 6);
let daysBetween = (today - day) / 8.64e7;
let age = daysBetween / 365;

let showAge = document.querySelector("#demo");
showAge.innerHTML = Math.floor(age);
