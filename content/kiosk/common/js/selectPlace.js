import {PLACE, SUBJECTNUM, QUESTION, NOQUESTION, CLASSNAME} from "../js/utils/key.js";
const here = document.querySelector(".here");
const toGo = document.querySelector(".to-go");
const choice = document.querySelectorAll(".choice");

const subjectNum = localStorage.getItem(SUBJECTNUM);
const className = localStorage.getItem(CLASSNAME);

if(!localStorage.getItem(NOQUESTION)){
  const question = JSON.parse(localStorage.getItem(QUESTION))[1];
  if(subjectNum == 9 && className == "fast-food" || subjectNum == 8 && className == "cafe"){
    here.addEventListener("click", () => {
      if(question == here.childNodes[3].innerText){
        localStorage.setItem(PLACE, "here");
        localStorage.removeItem(QUESTION);
        location.href = "../html/practice-category.html";
      }
      else{
        wrong();
      }
    })
    toGo.addEventListener("click", () => {
      if(question == toGo.childNodes[3].innerText){
        localStorage.setItem(PLACE, "to-go");
        localStorage.removeItem(QUESTION);
        location.href = "../html/practice-category.html";
      }
      else{
        wrong();
      }
    })
  }
  else{
    for(let i = 0; i < choice.length; i++){
      choice[i].addEventListener("click", () => {
        if(choice[i].childNodes[3].innerText == question){
          alertFunc();
        }
        else{
          wrong();
        }
      })
    }
  }
}
else{
  here.addEventListener("click", () => {
      localStorage.setItem(PLACE, "here");
      localStorage.removeItem(QUESTION);
      location.href = "../html/practice-category.html";
  })
  toGo.addEventListener("click", () => {
      localStorage.setItem(PLACE, "to-go");
      localStorage.removeItem(QUESTION);
      location.href = "../html/practice-category.html";
  })
}

function alertFunc(){
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
      location.href = "../html/main-category.html";
    }
    else if(result.isDismissed){
      localStorage.setItem(SUBJECTNUM, Number(localStorage.getItem(SUBJECTNUM)) + 1);
      location.href = "../html/example/example.html";
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