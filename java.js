const same = document.getElementById("same");
const email = document.getElementById("email");
const number = document.getElementById("number");
const btn = document.getElementById("btn");
const username = document.getElementById("username");
const useremail = document.getElementById("useremail");
const usernumber = document.getElementById("usernumber");

btn.addEventListener("click", function () {
  username.innerHTML = same.value;
});

btn.addEventListener("click", function () {
  useremail.innerHTML = email.value;
});

btn.addEventListener("click", function () {
  usernumber.innerHTML = number.value;
});
