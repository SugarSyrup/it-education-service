import {CLASSNAME} from '/content/kiosk/common/js/utils/key.js';
localStorage.clear();

const category = document.querySelectorAll(".category");

let checkLocal = localStorage.getItem(CLASSNAME);

if(!checkLocal){
  for(let i = 0; i < category.length; i++){
    let className = category[i].classList[1];
    category[i].addEventListener("click", () =>{
          localStorage.setItem(CLASSNAME, className);
          localStorage.setItem("categoryNum", 1);
          location.href ="/content/kiosk/common/html/main-category.html";
    })
    }
  }