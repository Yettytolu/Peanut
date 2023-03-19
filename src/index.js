function lovePeanut() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  alert("Hi " + name + " , thanks for buying from us");
}
let orderbutton = document.querySelector("button");
orderbutton.addEventListener("click", lovePeanut);
