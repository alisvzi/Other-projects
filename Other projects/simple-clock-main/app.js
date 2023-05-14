let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let h1 = document.querySelector(".h");
let m1 = document.querySelector(".m");
let s1 = document.querySelector(".s");
const deg = 6;

setInterval(() => {
  let date = new Date();
  let h = date.getHours() * 30;
  let m = date.getMinutes() * deg;
  let s = date.getSeconds() * deg;

  hr.style.transform = `rotateZ(${h}deg)`;
  min.style.transform = `rotateZ(${m}deg)`;
  sec.style.transform = `rotateZ(${s}deg)`;
  h1.textContent = date.getHours();
  m1.textContent = date.getMinutes();
  s1.textContent = date.getSeconds();
}, 1000);
