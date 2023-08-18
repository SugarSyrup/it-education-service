import {SUBJECTNUM, ORDERING, QUESTION, NOQUESTION, CLASSNAME, CATEGORYNUM} from "../js/utils/key.js";
const method = document.querySelectorAll(".payment-method");
const back = document.querySelector(".back");

const subjectNum = localStorage.getItem(SUBJECTNUM);
const className = localStorage.getItem(CLASSNAME);

if(subjectNum == 7){
  if(localStorage.getItem(ORDERING)){
    alertFunc();
  }
}

const payment = localStorage.getItem(QUESTION);

if(!localStorage.getItem(NOQUESTION)){
  for(let i = 0; i < method.length; i++){
    method[i].addEventListener("click", () => {
      if(method[i].childNodes[5].innerText == payment){
        if(className == "fast-food"){
          if(subjectNum != 9){
            alertFunc();
          }
          else{
            finish();
          }
        }
        else if(className == "cafe"){
          if(subjectNum != 8){
            alertFunc();
          }
          else{
            finish();
          }
        }
        else{
          if(subjectNum != 6){
            alertFunc();
          }
          else{
            finish();
          }
        }
      }
      else{
        wrong();
      }
    })
  }
}
else{
  for(let i = 0; i < method.length; i++){
    method[i].addEventListener("click", () => {
      if(className == "fast-food"){
        if(subjectNum == 9){
          finish();
        }
      }
      else if(className == "cafe"){
        if(subjectNum == 8){
          finish();
        }
      }
      else{
        if(subjectNum == 6){
          finish();
        }
      }
    })
  }
}

back.addEventListener("click", () => {
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
      location.href = "../html/main-category.html";
    }
    else if(result.isDismissed){
      localStorage.setItem(SUBJECTNUM, Number(localStorage.getItem(SUBJECTNUM)) + 1);
      localStorage.setItem(CATEGORYNUM, 1);
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

function finish(){
  Swal.fire({
    title : '모든 단계를 끝내셨습니다',
    icon : "success", 
    confirmButtonColor : "rgb(245, 134, 31)",
    confirmButtonText : "확인"
  }).then((result) => {
    if(result){
    location.href = "../../index.html";
    }
  });
}