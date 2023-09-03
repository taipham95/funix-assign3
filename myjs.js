"use strict";
// Select query class, id...
const submitButton = document.querySelector(".btn-infor");
const userInput = document.querySelector(".input-mail");
const outputElement = document.querySelector(".output-mail-text");
const infoPerson = document.querySelector(".info");
const formInfo = document.querySelector(".form-info");

const viewmorelessButton = document.querySelectorAll(".btn-viewmoreless");
const cardJob = document.querySelectorAll(".card-body");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const errorMail = "Vui lòng kiểm tra lại định dạng email";
const inputMail = "Vui lòng nhập địa chỉ email";
const waitDisplay = "Vui lòng chờ hiển thị thông tin";
const colorWarning = "red";
const colorCorrect = "green";

// Handle Button Submit input email
const inputInforMail = () => {
  const userInputValue = userInput.value;
  if (!userInputValue) {
    outputElement.textContent = inputMail;
    outputElement.style.color = colorWarning;
  } else {
    if (regex.test(userInputValue)) {
      outputElement.textContent = waitDisplay;
      outputElement.style.color = colorCorrect;

      setTimeout(function () {
        infoPerson.classList.remove("info-hide");
        formInfo.classList.add("info-hide");
      }, 3000);

      setTimeout(function () {
        infoPerson.classList.add("info-hide");
        formInfo.classList.remove("info-hide");
        outputElement.textContent = inputMail;
        outputElement.style.color = colorWarning;
      }, 10000);
    } else {
      outputElement.textContent = errorMail;
      outputElement.style.color = colorWarning;
    }
  }
};

submitButton.addEventListener("click", inputInforMail);

// Handle Button view more , view less
for (let i = 0; i < viewmorelessButton.length; i++) {
  viewmorelessButton[i].addEventListener("click", function () {
    cardJob[i].classList.remove("j-hidden");
    viewmorelessButton[i].textContent = "▲ VIEW LESS";
    const booleanView = viewmorelessButton[i].classList.toggle("open");

    // xử lý xoá class favourite-card
    cardJob[i].classList.contains("favourite") == true
      ? cardJob[i].classList.add("favourite-card") : '';
      
    if (!booleanView) {
      viewmorelessButton[i].textContent = "▼ VIEW MORE";
      cardJob[i].classList.add("j-hidden");

      // xử lý xoá class favourite-card
      cardJob[i].classList.contains("favourite-card") == true
        ? cardJob[i].classList.remove("favourite-card") : '';
    }
  });
}
