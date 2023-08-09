import {OPTION, SINGLECART, SUBJECTNUM, QUESTION, NOQUESTION} from '/content/kiosk/common/js/utils/key.js';
const menuImg = document.querySelector(".menu-img");
const menuName = document.querySelector(".menu-name");
const menuPrice = document.querySelector(".menu-price");
const choice = document.querySelectorAll(".choice");
const questionText = document.querySelectorAll(".question");
const amount = document.querySelector(".amount-num");
const addBtn = document.querySelector(".add");
const back = document.querySelector(".back");
const questionAmount = document.querySelector(".questionAmount");

const cafeOption = JSON.parse(localStorage.getItem(OPTION));
const subjectNum = localStorage.getItem(SUBJECTNUM);

let singleCart = JSON.parse(localStorage.getItem(SINGLECART));

console

let cart = [];
let amountNum;
let count = 0;

menuImg.setAttribute("src", cafeOption[0]);
menuName.innerText = cafeOption[1];
menuPrice.innerText = cafeOption[2];

const coffeeIceArr = ["/content/kiosk/img/cafe/coffee/americano-ice.jpg", "/content/kiosk/img/cafe/coffee/cappuccino-ice.jpg", "/content/kiosk/img/cafe/coffee/caramel-macchiato-ice.jpg", "/content/kiosk/img/cafe/coffee/cafe-mocha-ice.jpg", "/content/kiosk/img/cafe/coffee/latte-ice.jpg", "/content/kiosk/img/cafe/coffee/vanilla-latte-ice.jpg"];
const coffeeNameArr = ["아메리카노", "카푸치노", "캬라멜 마키아토", "카페모카", "카페라떼", "바닐라라떼"];


if(!localStorage.getItem(NOQUESTION)){
  for(let i = 0; i < choice.length; i++){
  choice[i].addEventListener("click", () => {
    if(questionText[1].innerText == choice[i].childNodes[3].innerText || questionText[2].innerText == choice[i].childNodes[3].innerText || questionText[3].innerText == choice[i].childNodes[3].innerText){  
      if(questionText[1].innerText == "아이스"){
        if(coffeeNameArr.indexOf(questionText[0].innerText) != -1){
          cafeOption[0] = coffeeIceArr[coffeeNameArr.indexOf(questionText[0].innerText)];
          console.log(cafeOption); 
          menuImg.setAttribute("src", cafeOption[0]);
        }
      }
      // cafeOption.push(choice[i].childNodes[3].innerText);
      count++;
      console.log(count);
    }
    else{
      console.log("w");
    }
    if(count == 3){
      if(singleCart){
        singleCart.push(cafeOption);
        localStorage.setItem(SINGLECART, JSON.stringify(singleCart))
      }
      else{
        cart.push(cafeOption);
        localStorage.setItem(SINGLECART, JSON.stringify(cart));
      }
    }
  })
}
addBtn.addEventListener("click", () => {
  amountNum = amount.innerText;
  if(subjectNum == 2){
    if(localStorage.getItem(SINGLECART) && amountNum == questionAmount.innerText.replace("개", "")){
      location.href = "/content/kiosk/common/html/example/success.html";
    }
    else{
      console.log("w");
    }
  }
  else{
    if(localStorage.getItem(SINGLECART) && amountNum == questionAmount.innerText.replace("개", "")){
      localStorage.removeItem(OPTION);
      location.href = "/content/kiosk/common/html/practice-category.html";
    }
    else{
      console.log(amountNum, questionAmount.innerText.replace("개", ""));
    }
  }
})
}
else{
  for(let i = 0; i < choice.length; i++){
    choice[i].addEventListener("click", () => {
      if(choice[i].childNodes[3].innerText == "아이스"){
        if(coffeeNameArr.indexOf(cafeOption[1]) != -1){
          cafeOption[0] = coffeeIceArr[coffeeNameArr.indexOf(cafeOption[1])];
          menuImg.setAttribute("src", cafeOption[0]);
        }
      }
      count++;
      console.log(count);
      if(count == 3){
        if(singleCart){
          singleCart.push(cafeOption);
          localStorage.setItem(SINGLECART, JSON.stringify(singleCart))
        }
        else{
          cart.push(cafeOption);
          localStorage.setItem(SINGLECART, JSON.stringify(cart));
        }
      }
    })
  }
  addBtn.addEventListener("click", () => {
    amountNum = amount.innerText;
        localStorage.removeItem(OPTION);
        location.href = "/content/kiosk/common/html/practice-category.html";
  })
}