import {SETAMOUNT, CLASSNAME, SINGLEAMOUNT, SETCART, SINGLECART, SUBJECTNUM, ADDITIONALORDER, ORDERING, QUESTION, PAY, NOQUESTION} from '/content/kiosk/common/js/utils/key.js';
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
const className = localStorage.getItem(CLASSNAME);
//------------------------------------------------------------------------
const addtionalOrder = document.querySelector(".additional-order");
const ordering = document.querySelector(".ordering");

addtionalOrder.addEventListener("click", () => {
  if(subjectNum == 5){
    localStorage.setItem(ADDITIONALORDER, "check");
  }
  location.href = "/content/kiosk/common/html/practice-category.html";
})

ordering.addEventListener("click", () => {
  if(className == "cafe"){
    if(subjectNum == 6){
      alertFunc();
    }
  }
  else if(className == "fast-food"){
    if(subjectNum == 7){
      alertFunc();
    }
  }
  if(localStorage.getItem(NOQUESTION)){
    localStorage.setItem(PAY, "pay");
    if(!localStorage.getItem(NOQUESTION)){
    localStorage.removeItem(QUESTION);
    }
    location.href = "/content/kiosk/common/html/payment-method.html";
  }
  else{
    localStorage.setItem(PAY, "pay");
    if(!localStorage.getItem(NOQUESTION)){
    localStorage.removeItem(QUESTION);
    }
    location.href = "/content/kiosk/common/html/payment-method.html";
  }
})

if(!localStorage.getItem(NOQUESTION)){
  if(className == "cafe"){
    if(subjectNum == 3){
      alertFunc();
    }
    if(localStorage.getItem(ADDITIONALORDER)){
      alertFunc();
    }
  }
  else if(className == "fast-food"){
    if(subjectNum == 4){
      alertFunc();
    }
    if(localStorage.getItem(ADDITIONALORDER)){
      alertFunc();
    }
  }
}

for(let i = 0; i < deleteBtn.length; i++){
  deleteBtn[i].addEventListener("click", () => {
    if(className == "cafe"){
      if(subjectNum == 4){
        alertFunc();
      }
    }
    else if(className == "fast-food"){
      if(subjectNum == 5){
        alertFunc();
      }
    }
    if(localStorage.getItem(localStorage.getItem(NOQUESTION))){
      if(parseSet){
        if(i > parseSet.length - 1){
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
        parseSingle.splice(i, 1);
        singleAmountArr.splice(i, 1);
        localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmount));
        localStorage.setItem(SINGLECART, JSON.stringify(parseSingle));
      }
      if(subjectNum != 5){
        location.reload();
      }
    }
  })
}

if(parseSet){
  if(parseSet.length == 0){
    localStorage.removeItem(SETCART);
  }
}

function alertFunc (){
  Swal.fire({
    title: '성공!',
    text: "다음 문제로 넘어 갈까요?",
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: 'rgb(245, 134, 31)',
    cancelButtonColor: 'rgb(245, 134, 31)',
    confirmButtonText: '아니요',
    cancelButtonText: '네'
  }).then((result) => {
    if (result.isConfirmed) {
      location.href = "/content/kiosk/common/html/main-category.html";
    }
    else if(result.isDismissed){
      localStorage.setItem(SUBJECTNUM, Number(localStorage.getItem(SUBJECTNUM)) + 1);
      location.href = "/content/kiosk/common/html/example/example.html";
    }
})
}

function wrong(){
  Swal.fire({
    icon: 'error',
    title: '틀린 답입니다',
    text: '제시문을 다시 확인해 보세요',
    confirmButtonColor: 'rgb(245, 134, 31)',
  })
}