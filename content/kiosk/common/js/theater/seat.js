import {SUBJECTNUM, CATEGORYNUM, NOQUESTION, QUESTIONAMOUNT, OPTION } from "../../js/utils/key.js";
const seatNum = document.querySelectorAll(".seat");
const complete = document.querySelector(".complete");

const subjectNum = localStorage.getItem(SUBJECTNUM);
const questionSeat = localStorage.getItem(QUESTIONAMOUNT);
let seat = [];
let option = JSON.parse(localStorage.getItem(OPTION));

let amount = 0 ;

for(let i = 0; i < option[2].length; i++){
  amount = amount + Number(option[2][i]);
}

if(!localStorage.getItem(NOQUESTION)){
  for(let i = 0; i < seatNum.length; i++){
    seatNum[i].addEventListener("click", () => {
      seat.push(seatNum[i].innerText);
      if(seat.length > amount){
        seatFunc();
      }
      else{
        seatNum[i].classList.toggle("focus");
        if(subjectNum == 3){
          complete.addEventListener("click", () => {
            if(seatNum[i].innerText == questionSeat){
              alertFunc();
            }
            else{
              wrong();
              seat = [];
            }
          })
        }
        else{
          complete.addEventListener("click", () => {
            if(seatNum[i].innerText == questionSeat){
              option.push(seat);
              localStorage.setItem(OPTION, JSON.stringify(option));
              location.href = "../../html/theater/reservation.html";
            }
            else{
              wrong();
              seat = [];
            }
          })
        }
      }
    })
  }
}
else{
  for(let i = 0; i < seatNum.length; i++){
    seatNum[i].addEventListener("click", () => {
      seat.push(seatNum[i].innerText);
      if(seat.length > amount){
        seatFunc();
      }
      else{
        seatNum[i].classList.toggle("focus");
        complete.addEventListener("click", () => {
          if(option[3]){
            option[3] = seat;
            localStorage.setItem(OPTION, JSON.stringify(option));
          }
          else{
            option.push(seat);
            localStorage.setItem(OPTION, JSON.stringify(option));
          }
          location.href = "../../html/theater/reservation.html";
        })
      }
    })
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
      location.href = "../../html/main-category.html";
    }
    else if(result.isDismissed){
      localStorage.setItem(SUBJECTNUM, Number(localStorage.getItem(SUBJECTNUM)) + 1);
      localStorage.setItem(CATEGORYNUM, 1);
      location.href = "../../html/example/example.html";
    }
})
}

function wrong(){
  Swal.fire({
    icon: 'error',
    title: '틀린 답입니다',
    text: '제시문을 다시 확인해 보세요',
    confirmButtonColor: 'rgb(245, 134, 31)',
  }).then((result) => {
    if(result){
    location.reload();
    }
  })
}

function seatFunc(){
  Swal.fire({
    icon: 'error',
    text: '좌석 선택은 예매 매수를 초과할 수 없습니다',
    confirmButtonColor: 'rgb(245, 134, 31)',
  }).then((result) => {
    if(result){
    location.reload();
    }
  })
}