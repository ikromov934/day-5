const elinput = document.querySelector(".input");
const elbtn = document.querySelector(".btn");
const elpiyoda = document.querySelector(".n1");
const elvelosoped = document.querySelector(".n2");
const elcar = document.querySelector(".n3");
const elsamaliyot = document.querySelector(".n4");

console.log(elbtn);
elbtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  elpiyoda.innerHTML = `
 ${elinput.value / 3.6} soat `;

  elvelosoped.innerHTML = `
 ${elinput.value / 20.1} soat `;

  elcar.innerHTML = `
 ${elinput.value / 70} soat `;

  elsamaliyot.innerHTML = `
 ${elinput.value / 800} soat `;
});
