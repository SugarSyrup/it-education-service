import {SETCATEGORYNUM, REMOVE} from "../js/utils/key.js";
const back = document.querySelector(".fa-left-long");

back.addEventListener("click", () => {
  if(localStorage.getItem(SETCATEGORYNUM) == 3){
    localStorage.setItem(SETCATEGORYNUM, 1);
  }
  // location.href = "javascript:history.back()";
})