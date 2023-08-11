import {SETAMOUNT, SINGLEAMOUNT, SETCART, SINGLECART, SUBJECTNUM, ADDITIONALORDER, ORDERING, QUESTION, PAY, NOQUESTION} from '/content/kiosk/common/js/utils/key.js';
const imgs = document.querySelectorAll("img");
const menuName = document.querySelectorAll(".menu-name");
const setOptionText = document.querySelectorAll(".set-option");
const orderPrice = document.querySelectorAll(".order-price");
const deleteBtn = document.querySelectorAll(".delete");
const amount = document.querySelectorAll(".amount-num");

//--------------------------------------------------------------------
const setImgArr = ["/content/kiosk/img/fast-food/set/1955-set.png", "/content/kiosk/img/fast-food/set/bacon-tomato-set.png", "/content/kiosk/img/fast-food/set/bigmac-set.png", "/content/kiosk/img/fast-food/set/cheese-set.png", "/content/kiosk/img/fast-food/set/bulgogi-set.png", "/content/kiosk/img/fast-food/set/crispy-set.png", "/content/kiosk/img/fast-food/set/quaterpound-set.png", "/content/kiosk/img/fast-food/set/shrimp-set.png"];
const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];

const parseSet = JSON.parse(localStorage.getItem(SETCART));
const parseSingle = JSON.parse(localStorage.getItem(SINGLECART));
const setAmount = JSON.parse(localStorage.getItem(SETAMOUNT));
const singleAmount = JSON.parse(localStorage.getItem(SINGLEAMOUNT));
const subjectNum = localStorage.getItem(SUBJECTNUM);

let setAmountArr = setAmount
let singleAmountArr = singleAmount;

//------------------------------------------------------------------------
const addtionalOrder = document.querySelector(".additional-order");
const ordering = document.querySelector(".ordering");

addtionalOrder.addEventListener("click", () => {
  if(subjectNum == 6){
    localStorage.setItem(ADDITIONALORDER, "check");
  }
  location.href = "/content/kiosk/common/html/practice-category.html";
})

ordering.addEventListener("click", () => {
  if(subjectNum == 7){
    localStorage.setItem(ORDERING, "check");
  }
  localStorage.setItem(PAY, "pay");
  if(!localStorage.getItem(NOQUESTION)){
  localStorage.removeItem(QUESTION);
  }
  location.href = "/content/kiosk/common/html/payment-method.html";
})

if(!localStorage.getItem(NOQUESTION)){
  if(subjectNum == 4){
    setTimeout(function(){
      location.href = "/content/kiosk/common/html/example/success.html";
    }, 2000);
  }
  if(localStorage.getItem(ADDITIONALORDER)){
    setTimeout(function(){
      location.href = "/content/kiosk/common/html/example/success.html";
    }, 1000);
  }
}

// deleteBtn[i].addEventListener("click", () => {
//   if(subjectNum == 5){
//     setTimeout(function(){
//       location.href = "/content/kiosk/common/html/example/success.html";
//     }, 1000);
//   }
//   parseSet.splice(i, 1);
//   setAmount.splice(i, 1);
//   localStorage.setItem(SETAMOUNT, JSON.stringify(setAmount));
//   localStorage.setItem(SETCART, JSON.stringify(parseSet));
//   if(subjectNum != 5){
//     location.reload();
// }
// })

for(let i = 0; i < deleteBtn.length; i++){
  deleteBtn[i].addEventListener("click", () => {
    if(subjectNum == 5){
      setTimeout(function(){
        location.href = "/content/kiosk/common/html/example/success.html";
      }, 1000);
    }
    if(parseSet){
      if(i > parseSet.length){
        parseSingle.splice(i - parseSet.length, 1);
        singleAmountArr.splice(i - parseSet.length, 1);
        localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmount));
        localStorage.setItem(SINGLECART, JSON.stringify(parseSingle));
      }
      else{
        parseSet.splice(i, 1);
        setAmountArr.splice(i, 1);
        localStorage.setItem(SETAMOUNT, JSON.stringify(setAmount));
        localStorage.setItem(SETCART, JSON.stringify(parseSet));
      }
    }
    else{
      console.log(parseSingle[i]);
      parseSingle.splice(i, 1);
      singleAmountArr.splice(i, 1);
      localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmount));
      localStorage.setItem(SINGLECART, JSON.stringify(parseSingle));
    }
    if(subjectNum != 5){
      location.reload();
    }
  })
}

if(parseSet.length == 0){
  localStorage.removeItem(SETCART);
}