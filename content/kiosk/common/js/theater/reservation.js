import {SUBJECTNUM, PAY, CATEGORYNUM, NOQUESTION, OPTION, QUESTION, QUESTION2, QUESTION3, QUESTIONAMOUNT, QUESTIONOPTION} from "../../js/utils/key.js";

const img = document.querySelector(".movieImg");
const title = document.querySelector(".title");
const date = document.querySelector(".date");
const day = document.querySelector(".day");
const movieTime = document.querySelector(".movieTime");
const numOfTheater = document.querySelector(".numOfTheater");
const numOfTicket = document.querySelectorAll(".numOfTicket");
const seatNum = document.querySelectorAll(".seatNum");
const complete = document.querySelector(".complete");
const cancel = document.querySelector(".cancel");
const ticketBox = document.querySelector(".tickets");
const seatBox = document.querySelector(".seats");

const movieImg = ["../../../img/theater/barbie.jpg", "../../../img/theater/elemental.jpg", "../../../img/theater/conan.jpg", "../../../img/theater/mission-impossible.jpg", "../../../img/theater/smuggling.jpg", "../../../img/theater/the-moon.jpg"];
const movieName = ["바비", "엘리멘탈", "코난", "미션 임파서블", "밀수", "더 문"];
const dayArr = ["일", "월", "화", "수", "목", "금", "토"];
const type = ["일반", "청소년", "장애인", "경로우대"];

const subjectNum = localStorage.getItem(SUBJECTNUM);
const option = JSON.parse(localStorage.getItem(OPTION));

let toDay = new Date().toLocaleDateString();
toDay.slice(0, 11)

img.setAttribute("src", movieImg[movieName.indexOf(option[0][0])]);
title.innerText = option[0][0];
date.innerText = toDay;
day.innerText = "(" + dayArr[new Date().getDay()] + ")";
movieTime.innerText = option[0][1];
numOfTheater.innerText = option[0][2];

for(let i = 0; i < option[1].length; i++){
  let span = document.createElement("span");
  span.classList.add("numOfTicket");
  ticketBox.appendChild(span);
  span.innerText = option[1][i] + " " + option[2][i] + "매";
  span.style.margin = "0 1vw 0 0";
}

for(let i = 0; i < option[3].length; i++){
  let num = document.createElement("span");
  num.classList.add("seatNum");
  seatBox.appendChild(num);
  num.innerText = option[3][i] + " ";
}

complete.addEventListener("click", () => {
  if(subjectNum == 4){
    alertFunc();
  }
  else{
    localStorage.setItem(PAY, "pay");
    localStorage.removeItem(QUESTION);
    localStorage.removeItem(QUESTION2);
    localStorage.removeItem(QUESTION3);
    localStorage.removeItem(QUESTIONOPTION);
    localStorage.removeItem(QUESTIONAMOUNT);
    location.href = "../../html/payment-method.html";
  }
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
      location.href = "../../html/main-category.html";
    }
    else if(result.isDismissed){
      localStorage.setItem(SUBJECTNUM, Number(localStorage.getItem(SUBJECTNUM)) + 1);
      localStorage.setItem(CATEGORYNUM, 1);
      location.href = "../../html/example/example.html";
    }
})
} 