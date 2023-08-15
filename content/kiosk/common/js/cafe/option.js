import {OPTION, SINGLECART, SUBJECTNUM, QUESTION, NOQUESTION, CATEGORYNUM} from '/content/kiosk/common/js/utils/key.js';
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

const FOCUS = "focus";

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
      if(i == 0){
        choice[0].classList.add(FOCUS);
        choice[1].classList.remove(FOCUS);
      }
      else if(i == 1){
        choice[1].classList.add(FOCUS);
        choice[0].classList.remove(FOCUS);
      }
      if(i == 2){
        choice[2].classList.add(FOCUS);
        choice[3].classList.remove(FOCUS);
      }
      else if(i == 3){
        choice[3].classList.add(FOCUS);
        choice[2].classList.remove(FOCUS);
      }
      if(i == 4){
        choice[4].classList.add(FOCUS);
        choice[5].classList.remove(FOCUS);
      }
      else if(i == 5){
        choice[5].classList.add(FOCUS);
        choice[4].classList.remove(FOCUS);
      }
      if(questionText[1].innerText == "아이스"){
        if(coffeeNameArr.indexOf(questionText[0].innerText) != -1){
          cafeOption[0] = coffeeIceArr[coffeeNameArr.indexOf(questionText[0].innerText)];
          menuImg.setAttribute("src", cafeOption[0]);
        }
      }
      count++;
    }
    else{
      wrong();
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
      alertFunc();
    }
    else{
      wrong();
    }
  }
  else{
    if(localStorage.getItem(SINGLECART) && amountNum == questionAmount.innerText.replace("개", "")){
      localStorage.removeItem(OPTION);
      location.href = "/content/kiosk/common/html/practice-category.html";
    }
  }
})
}
else{
  for(let i = 0; i < choice.length; i++){
    choice[i].addEventListener("click", () => {
      if(i == 0){
        choice[0].classList.add(FOCUS);
        choice[1].classList.remove(FOCUS);
      }
      else if(i == 1){
        choice[1].classList.add(FOCUS);
        choice[0].classList.remove(FOCUS);
      }
      if(i == 2){
        choice[2].classList.add(FOCUS);
        choice[3].classList.remove(FOCUS);
      }
      else if(i == 3){
        choice[3].classList.add(FOCUS);
        choice[2].classList.remove(FOCUS);
      }
      if(i == 4){
        choice[4].classList.add(FOCUS);
        choice[5].classList.remove(FOCUS);
      }
      else if(i == 5){
        choice[5].classList.add(FOCUS);
        choice[4].classList.remove(FOCUS);
      }
      if(choice[i].childNodes[3].innerText == "아이스"){
        if(coffeeNameArr.indexOf(cafeOption[1]) != -1){
          cafeOption[0] = coffeeIceArr[coffeeNameArr.indexOf(cafeOption[1])];
          menuImg.setAttribute("src", cafeOption[0]);
        }
      }
      count++;
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
      localStorage.setItem(CATEGORYNUM, 1);
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