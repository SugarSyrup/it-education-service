import {PLACE, SUBJECTNUM, QUESTION, NOQUESTION} from '/content/kiosk/common/js/utils/key.js';
const here = document.querySelector(".here");
const toGo = document.querySelector(".to-go");
const back = document.querySelector(".fa-left-long");
const choice = document.querySelectorAll(".choice");

const subjectNum = localStorage.getItem(SUBJECTNUM);

if(localStorage.getItem(QUESTION)){
  const question = JSON.parse(localStorage.getItem(QUESTION))[1];
}


if(!localStorage.getItem(NOQUESTION)){
  if(subjectNum == 9){
    here.addEventListener("click", () => {
      if(question == here.childNodes[3].innerText){
        localStorage.setItem(PLACE, "here");
        localStorage.removeItem(QUESTION);
        location.href = "/content/kiosk/common/html/practice-category.html";
      }
      else{
        console.log("w");
      }
    })
    toGo.addEventListener("click", () => {
      if(question == toGo.childNodes[3].innerText){
        localStorage.setItem(PLACE, "to-go");
        localStorage.removeItem(QUESTION);
        location.href = "/content/kiosk/common/html/practice-category.html";
      }
      else{
        console.log("W");
      }
    })
    back.addEventListener("click", () => {
      location.href = "/content/kiosk/common/html/main-category.html";
    })
  }
  else{
    for(let i = 0; i < choice.length; i++){
      choice[i].addEventListener("click", () => {
        if(choice[i].childNodes[3].innerText == question){
          location.href = "/content/kiosk/common/html/example/success.html";
        }
        else{
          alert("다시 한번 생각해 보세요");
        }
      })
    }
  }
}
else{
  here.addEventListener("click", () => {
      localStorage.setItem(PLACE, "here");
      localStorage.removeItem(QUESTION);
      location.href = "/content/kiosk/common/html/practice-category.html";
  })
  toGo.addEventListener("click", () => {
      localStorage.setItem(PLACE, "to-go");
      localStorage.removeItem(QUESTION);
      location.href = "/content/kiosk/common/html/practice-category.html";
  })
  back.addEventListener("click", () => {
    location.href = "/content/kiosk/common/html/main-category.html";
  })
}