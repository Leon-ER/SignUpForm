let Password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let fName = document.getElementById("firstName");
let email = document.getElementById("email");
let passwordOut = document.getElementById("password");
let lastName = document.getElementById("lastName");
let phone = document.getElementById("phone");
let confPass = document.getElementById("confirmPassword");

function pass() {
  if (Password.value !== confirmPassword.value) {
    Password.classList.add('error');
    confirmPassword.classList.add('error');
  }
  else{
    Password.classList.remove('error');
    confirmPassword.classList.remove('error');
  }
}
const createAccount = document.querySelector(".createAccount");

createAccount.addEventListener("click", () => {
  pass();
});
