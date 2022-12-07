const nameInput = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const form = document.querySelector("#form_section");
const errorName = document.querySelector(".error__name");
const errorLastname = document.querySelector(".error__lastname");
const errorEmail = document.querySelector(".error__email");
const errorPassword = document.querySelector(".error__password");

// console.log((errorName.textContent = "nome errado"));

function handleConfirmBtn(event) {
  event.preventDefault();
  console.log(event);
  ValidateEmail();
  if (nameInput.value.length === 0) {
    errorName.textContent = "First name cannot be empty!";
  } else if (lastName.value.length === 0) {
    errorLastname.textContent = "Lastname cannot be empty!";
  } else if (password.value.length === 0) {
    errorPassword.textContent = "Password cannot be empty!";
  }
}
function ValidateEmail() {
  const rgx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  if (rgx.test(email.value)) {
    return (errorEmail.textContent = "");
  } else {
    errorEmail.textContent = "Looks like this is not an email !";
    return false;
  }
}
const submitBtn = document.querySelector(".claimBtn");
submitBtn.addEventListener("click", handleConfirmBtn);
