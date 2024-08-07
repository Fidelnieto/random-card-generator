let form = document.getElementsByClassName("form");
let number = document.querySelector(".number");
let button = document.getElementById("newCard");

const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const forms = ["♦", "♥", "♠", "♣"];

function changes() {
  let randomNumberForForms = Math.floor(Math.random() * forms.length);
  let randomNumberForNumbers = Math.floor(Math.random() * numbers.length);

  form[0].innerText = forms[randomNumberForForms];
  form[1].innerText = forms[randomNumberForForms];
  number.innerHTML = numbers[randomNumberForNumbers];
}

button.addEventListener("click", changes);

window.onload = changes();

setInterval(changes, 10000);
