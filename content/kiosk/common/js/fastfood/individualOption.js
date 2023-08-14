import {NOQUESTION, OPTION, SETCART, SINGLECART, SINGLEAMOUNT, SUBJECTNUM, QUESTION, QUESTIONAMOUNT, CATEGORYNUM} from '/content/kiosk/common/js/utils/key.js';
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
const singleAmount = JSON.parse(localStorage.getItem(SINGLEAMOUNT));



let parseSingle = JSON.parse(localStorage.getItem(SINGLECART));

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
          alertFunc();
        }
        else{
          wrong();
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
          wrong();
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
  singleAmount[parseSingle.length] = 1;
  singleAmount.pop(); 
  localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmount));
  location.href = "javascript:history.back()";
})

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