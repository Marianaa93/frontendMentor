const nameInput = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitBtn = document.querySelector("#claimBtn");
const form = document.querySelector("#form_section");
const errorName = document.querySelector("#error__name");
const errorLastname = document.querySelector("#error__lastname");
const errorEmail = document.querySelector("#error__email");
const errorPassword = document.querySelector("#error__password");

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

function handleBlank() {
  if (nameInput.value.length === 0) {
    errorName.textContent = " Cannot be blank!";
  } else if (lastName.value.length === 0) {
    errorLastname.textContent = " Cannot be blank!";
  } else if (email.value.length === 0) {
    errorEmail.textContent = " Cannot be blank!";
  } else if (password.value.length === 0) {
    errorPassword.textContent = " Cannot be blank!";
  }
  return;
}

nameInput.onkeyup = function () {
  let nameform = nameInput.value;
  if (nameform.length === 0) {
    errorName.textContent = "testando";
  } else {
    errorName.textContent = "";
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  handleBlank();
});
