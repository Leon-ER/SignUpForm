let Password = document.getElementById("password");
let confirmPassword = document.getElementById("password");
let fName = document.getElementById("firstName");
let email = document.getElementById("email");
let passwordOut = document.getElementById("password");
let lastName = document.getElementById("lastName");
let phone = document.getElementById("phone");
let confPass = document.getElementById("confirmPassword");

function pass() {
  if (Password !== confirmPassword) {
    alert("Password not the same");
  }
}
const createAccount = document.querySelector(".createAccount");

createAccount.addEventListener("click", () => {
  pass();
  fName.value = "";
  email.value = "";
  passwordOut.value = "";
  lastName.value = "";
  phone.value = "";
  confPass.value = "";
  console.log("test");
});
