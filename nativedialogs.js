// import * as customdialog from "./customdialog.js";

const alertbtn = document.getElementById("alertbtn");
const confirmbtn = document.getElementById("confirmbtn");
const promptbtn = document.getElementById("promptbtn");
const saferpromptbtn = document.getElementById("saferpromptbtn");
const result = document.getElementById("result");

alertbtn.addEventListener("click", () => {
  alert("1");
});

confirmbtn.addEventListener("click", () => {
  const result = confirm("Are you sure you want to continue?");
  result.textContent = `The value returned by the confirm method is : ${result}`;
});

promptbtn.addEventListener("click", () => {
  const userInput = prompt("Please enter some input:");
  if (userInput === null) {
    result.innerHTML = "User canceled the prompt.";
  } else if (userInput.trim() === "") {
    result.innerHTML = "User didn't enter anything.";
  } else {
    result.innerHTML = `User entered: ${userInput}`;
  }
});

saferpromptbtn.addEventListener("click", () => {
  const userInput = window.prompt("Please enter something:");
  if (userInput === null || userInput === "") {
    result.innerHTML = `User didn't enter anything`;
  } else {
    const sanitizedInput = DOMPurify.sanitize(userInput);
    result.innerHTML = `The sanitized value entered by the user is: ${sanitizedInput}`;
  }
});