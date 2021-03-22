let today = new Date();
let year = today.getFullYear();
let birthday = new Date(year, 1, 6);
let showAge = document.querySelector("#age");

if (today >= birthday) {
  let age = birthday.getFullYear() - 1995;
  showAge.innerHTML = Math.floor(age);
} else {
  let age = birthday.getFullYear() - 1996;
  showAge.innerHTML = Math.floor(age);
}
