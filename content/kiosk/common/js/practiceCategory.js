import {SETOPTION, SINGLEOPTION, CATEGORYNUM, SUBJECTNUM, OPTION, QUESTION, QUESTION2, QUESTION3, QUESTIONAMOUNT, REMOVE, QUESTIONOPTION, CLASSNAME} from "../js/utils/key.js";
const imgs = document.querySelectorAll("img");
const menuName = document.querySelectorAll(".menu-name");
const category = document.querySelectorAll(".category-li");
const menuPrice = document.querySelectorAll(".menu-price");
const orderList = document.querySelector(".order-list");
const questionText = document.querySelectorAll(".question");

const className = localStorage.getItem(CLASSNAME);
let categoryNum = Number(localStorage.getItem(CATEGORYNUM)) - 1;
const subjectNum = localStorage.getItem(SUBJECTNUM);

const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];
const snackNameArr = ["치즈스틱", "치킨 너겟", "치킨 윙", "감자튀김", "코울슬로"];
const drinkNameArr = ["아메리카노", "콜라", "주스", "사이다", "바닐라 쉐이크"];
const fastFoodDessertNameArr = ["아이스크림"];


if(className == "fast-food"){
  if(localStorage.getItem(QUESTIONOPTION)){
  const questionOption = JSON.parse(localStorage.getItem(QUESTIONOPTION))[1];
  }
}

orderList.addEventListener("click", () =>{
  location.href = "../html/order-list.html";
})

localStorage.removeItem(SETOPTION);
localStorage.removeItem(SINGLEOPTION);