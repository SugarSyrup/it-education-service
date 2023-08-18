import {CATEGORYNUM, PAY, SUBJECTNUM, SINGLECART, SINGLEAMOUNT, CLASSNAME, REMOVE, NOQUESTION, OPTION, QUESTION, QUESTION2, QUESTION3, QUESTIONAMOUNT, QUESTIONOPTION, SNACKOPTION, DRINKOPTION } from "../../js/utils/key.js";

const subject = document.querySelector(".subject");
const questionBtn = document.querySelector(".questionBtn");
const noQuestionBtn = document.querySelector(".noQuestion");
const gif = document.querySelector(".gif");

const subjectArr = ["매장 / 포장", "메뉴 선택", "단품 주문하기", "세트 상품 주문하기", "주문내역 확인", "상품 취소하기", "추가 주문하기", "주문 하기", "결제 방법 선택하기", "연습하기"];
const cafeSubjectArr = ["매장 / 포장", "메뉴 선택", "메뉴 주문하기", "주문내역 확인", "상품 취소하기", "추가 주문하기", "주문 하기", "결제 방법 선택하기", "연습하기"];
const theaterSubjectArr = ["영화 선택", "시간 선택", "예매 매수 선택", "좌석 선택","예매하기", "결제 수단 선택", "연습하기"];

const fastFoodGif = ["../../../img/example/selectPlace.gif", "../../../img/example/fastFood/fastFood2.gif", "../../../img/example/fastFood/fastFood3.gif", "../../../img/example/fastFood/fastFood4.gif", "../../../img/example/fastFood/fastFood5.gif", "../../../img/example/fastFood/fastFood6.gif", "../../../img/example/fastFood/fastFood7.gif", "../../../img/example/fastFood/fastFood8.gif", "../../../img/example/payment.gif", "../../../img/example/fastFood/fastFood9.gif"];
const cafeGif = ["../../../img/example/selectPlace.gif", "../../../img/example/cafe/cafe2.gif", "../../../img/example/cafe/cafe3.gif", "../../../img/example/cafe/cafe4.gif", "../../../img/example/cafe/cafe5.gif", "../../../img/example/cafe/cafe6.gif", "../../../img/example/cafe/cafe7.gif", "../../../img/example/payment.gif", "../../../img/example/cafe/cafe9.gif"];
const movieGif = ["../../../img/example/movie/movie1.gif", "../../../img/example/movie/movie2.gif", "../../../img/example/movie/movie3.gif", "../../../img/example/movie/movie4.gif", "../../../img/example/movie/movie5.gif", "../../../img/example/payment.gif", "../../../img/example/movie/movie7.gif"];

const subjectNum = localStorage.getItem(SUBJECTNUM);
const className = localStorage.getItem(CLASSNAME);

let parseSingle = [];
let singleAmount = [1];
let parseCafe = [];
let cafeAmount = [1];
const arr = ["../../img/fast-food/buger/1955.png", "1955 버거", "7,200원"];
const cafeArr = ["../../img/cafe/coffee/americano-hot.jpg", "아메리카노", "4,000원", "핫", "레귤러", "기본"];
const movieArr = [["코난", "15:25 ~ 17:44", "3관"], ["일반"], ["1매"], ["G05"]]

const questionArr = ["../../html/select-place.html", "../../html/practice-category.html", "../../html/practice-category.html", "../../html/practice-category.html", "../../html/practice-category.html", "../../html/order-list.html", "../../html/order-list.html", "../../html/order-list.html", "../../html/payment-method.html", "../../html/select-place.html"];
const cafeQuestionArr = ["../../html/select-place.html", "../../html/practice-category.html", "../../html/practice-category.html", "../../html/practice-category.html", "../../html/order-list.html", "../../html/order-list.html", "../../html/order-list.html", "../../html/payment-method.html", "../../html/select-place.html"];
const theaterQuestionArr = ["../../html/theater/movie-time.html", "../../html/theater/movie-time.html", "../../html/theater/movie-time.html", "../../html/theater/movie-time.html", "../../html/theater/movie-time.html", "../../html/payment-method.html", "../../html/theater/movie-time.html"];

if(className == "fast-food"){
  if(subjectNum > 8 && noQuestionBtn != null){
    noQuestionBtn.classList.remove(REMOVE);
    noQuestionBtn.addEventListener("click", () => {
      localStorage.setItem(NOQUESTION, "no");
      localStorage.removeItem(QUESTION);
      localStorage.removeItem(QUESTION2);
      localStorage.removeItem(QUESTION3);
      localStorage.removeItem(QUESTIONOPTION);
      localStorage.removeItem(QUESTIONAMOUNT);
      localStorage.removeItem(SNACKOPTION);
      localStorage.removeItem(DRINKOPTION)

      location.href = "../../html/select-place.html";
    })
  }
  else if(questionBtn){
    questionBtn.style.width = "100%";
  }
  if(!localStorage.getItem(QUESTION) && !localStorage.getItem(NOQUESTION)){
    gif.setAttribute("src", fastFoodGif[subjectNum]);
  }
}
else if(className == "cafe"){
  if(subjectNum > 7 && noQuestionBtn != null){
    noQuestionBtn.classList.remove(REMOVE);
    noQuestionBtn.addEventListener("click", () => {
      localStorage.setItem(NOQUESTION, "no");
      location.href = "../../html/select-place.html";
    })
  }
  else if(questionBtn){
    questionBtn.style.width = "100%";
  }
  if(!localStorage.getItem(QUESTION) && !localStorage.getItem(NOQUESTION)){
    gif.setAttribute("src", cafeGif[subjectNum]);
  }
}
else{
  if(subjectNum  == 6){
    if(noQuestionBtn){
      noQuestionBtn.classList.remove(REMOVE);
      noQuestionBtn.addEventListener("click", () => {
        localStorage.setItem(NOQUESTION, "no");
        location.href = "../../html/theater/movie-time.html";
      })
    }
  }
  else if(questionBtn){
    questionBtn.style.width = "100%";
  }
  if(!localStorage.getItem(QUESTION) && !localStorage.getItem(NOQUESTION)){
    gif.setAttribute("src", movieGif[subjectNum]);
  }
}


if(questionBtn){
  if(className == "fast-food"){
    subject.innerText = subjectArr[subjectNum];
    
    questionBtn.addEventListener("click", () => {
      if(subjectNum > 4 && subjectNum < 8){
        parseSingle.push(arr);
        localStorage.removeItem(NOQUESTION);
        localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmount));
        localStorage.setItem(SINGLECART, JSON.stringify(parseSingle));
      }
      else{
        localStorage.removeItem(NOQUESTION);
        localStorage.removeItem(PAY);
      }
      location.href = questionArr[subjectNum];
    })
  }
  else if(className == "cafe"){
    subject.innerText = cafeSubjectArr[subjectNum];
    questionBtn.addEventListener("click", () => {
      if(subjectNum > 3 && subjectNum < 8){
        parseCafe.push(cafeArr);
        localStorage.removeItem(NOQUESTION);
        localStorage.setItem(SINGLEAMOUNT, JSON.stringify(cafeAmount));
        localStorage.setItem(SINGLECART, JSON.stringify(parseCafe));
      }
      else{
        localStorage.removeItem(NOQUESTION);
        localStorage.removeItem(PAY);
      }
    location.href = cafeQuestionArr[subjectNum];
    })
  }
  else if(className == "movie"){
    subject.innerText = theaterSubjectArr[subjectNum];
    questionBtn.addEventListener("click", () => {
      if(subjectNum == 4){
        localStorage.removeItem(NOQUESTION);
        localStorage.setItem(OPTION, JSON.stringify(movieArr));
        localStorage.setItem(QUESTION, "코난");
        localStorage.setItem(QUESTION2, "15:25 ~ 17:44");
        localStorage.setItem(QUESTION3, "일반");
        localStorage.setItem(QUESTIONOPTION, "1매");
        localStorage.setItem(QUESTIONAMOUNT, "G05");
      }
      else{
        localStorage.removeItem(NOQUESTION);
        localStorage.removeItem(PAY);
      }
      location.href = theaterQuestionArr[subjectNum];
    })
  }
}
else{
  if(className == "fast-food"){
    subject.innerText = subjectArr[subjectNum];
  }
  else if(className == "cafe"){
    subject.innerText = cafeSubjectArr[subjectNum];
  }
  else{
    subject.innerText = theaterSubjectArr[subjectNum];
  }
}
