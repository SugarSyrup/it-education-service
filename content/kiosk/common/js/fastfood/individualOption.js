import {NOQUESTION, OPTION, SETCART, SINGLECART, SINGLEAMOUNT, SUBJECTNUM, QUESTION, QUESTIONAMOUNT} from '/content/kiosk/common/js/utils/key.js';
const img = document.querySelector(".img");
const name = document.querySelector(".name");
const price = document.querySelector(".price");
const questionText = document.querySelector(".question");
const questionAmount = document.querySelector(".questionAmount");
const amount = document.querySelector(".amount-num");

const parseOption = JSON.parse(localStorage.getItem(OPTION));

img.setAttribute("src", parseOption[0]);
name.innerText = parseOption[1];
price.innerText = parseOption[2];
//----------------------------------------
const parseSet = JSON.parse(localStorage.getItem(SETCART));
const cart = document.querySelector(".add-cart");
const back = document.querySelector(".back");

const subjectNum = localStorage.getItem(SUBJECTNUM);
questionText.innerText = localStorage.getItem(QUESTION);
questionAmount.innerText = localStorage.getItem(QUESTIONAMOUNT) + "개";
// const singleAmount = JSON.parse(localStorage.getItem(SINGLEAMOUNT));
let singleCart = [];

if(!localStorage.getItem(SINGLECART)){
  localStorage.setItem(SINGLECART, JSON.stringify(singleCart));
}

let parseCart = JSON.parse(localStorage.getItem(SINGLECART));

if(!localStorage.getItem(NOQUESTION)){
  if(subjectNum != 0 || subjectNum != 1){
    cart.addEventListener("click", () => {
      if(subjectNum == 2){
        if(amount.innerText == questionAmount.innerText.replace("개", "")){
          console.log("good");
          location.href = "/content/kiosk/common/html/example/success.html";
        }
        else{
          console.log("w");
        }
      }
      else{
        if(amount.innerText == questionAmount.innerText.replace("개", "")){
          parseCart.push(parseOption);
          localStorage.setItem(SINGLECART, JSON.stringify(parseCart));
          localStorage.removeItem(OPTION);
          location.href = "/content/kiosk/common/html/practice-category.html";
        }
        else{
          console.log("w");
        }
      }
    })
  }
}
else{
  cart.addEventListener("click", () => {
    parseCart.push(parseOption);
    localStorage.setItem(SINGLECART, JSON.stringify(parseCart));
    localStorage.removeItem(OPTION);
    location.href = "/content/kiosk/common/html/practice-category.html";
  })
}
back.addEventListener("click", () => {
  localStorage.removeItem(OPTION);
  localStorage.removeItem(SINGLEAMOUNT);
  location.href = "/content/kiosk/common/practice-category.html";
})