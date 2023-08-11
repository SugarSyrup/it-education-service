import {SUBJECTNUM, ORDERING, QUESTION, NOQUESTION} from '/content/kiosk/common/js/utils/key.js';
const method = document.querySelectorAll(".payment-method");
const back = document.querySelector(".back");

const subjectNum = localStorage.getItem(SUBJECTNUM);

if(subjectNum == 7){
  if(localStorage.getItem(ORDERING)){
    setTimeout(function(){
      location.href = "/content/kiosk/common/html/example/success.html";
    }, 1000);
  }
}

const payment = localStorage.getItem(QUESTION);

if(!localStorage.getItem(NOQUESTION)){
  for(let i = 0; i < method.length; i++){
    method[i].addEventListener("click", () => {
      if(method[i].childNodes[5].innerText == payment){
        location.href = "/content/kiosk/common/html/example/success.html";
      }
      else{
        console.log("w");
      }
    })
  }
}
else{
  for(let i = 0; i < method.length; i++){
    method[i].addEventListener("click", () => {
        location.href = "/content/kiosk/common/html/example/success.html";
    })
  }
}

back.addEventListener("click", () => {
  location.href = "javascript:history.back()";
})