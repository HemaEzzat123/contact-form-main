
const form = document.querySelector("form");
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const generalEnquiry = document.querySelector("#generalEnquiry");
const supportRequest = document.querySelector("#supportRequest");
const radio = document.querySelector(".radio");

form.addEventListener("submit", (e) => {
  if (
    first.value === "" ||
    last.value === "" ||
    email.value === "" ||
    message.value === "" ||
    generalEnquiry.checked === false ||
    supportRequest.checked === false
  ) {
    e.preventDefault();
    showError("Please fill out all fields");
  }
});
