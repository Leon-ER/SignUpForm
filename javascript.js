let Password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

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
