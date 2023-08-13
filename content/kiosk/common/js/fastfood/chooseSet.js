import {OPTION, SETCATEGORYNUM, SETOPTION, SINGLEOPTION, SINGLECART, SUBJECTNUM ,QUESTIONOPTION, NOQUESTION} from '/content/kiosk/common/js/utils/key.js';
const setImg = document.querySelector(".set-img");
const singleImg = document.querySelector(".single-img");
const options = document.querySelectorAll(".option");
const cancel = document.querySelector(".cancel");

const setImgArr = ["/content/kiosk/img/fast-food/set/1955-set.png", "/content/kiosk/img/fast-food/set/bacon-tomato-set.png", "/content/kiosk/img/fast-food/set/bigmac-set.png", "/content/kiosk/img/fast-food/set/cheese-set.png", "/content/kiosk/img/fast-food/set/bulgogi-set.png", "/content/kiosk/img/fast-food/set/crispy-set.png", "/content/kiosk/img/fast-food/set/quaterpound-set.png", "/content/kiosk/img/fast-food/set/shrimp-set.png"];
const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];
const singleImgArr = ["/content/kiosk/img/fast-food/buger/1955.png", "/content/kiosk/img/fast-food/buger/bacon-tomato-buger.png", "/content/kiosk/img/fast-food/buger/big-mac.png", "/content/kiosk/img/fast-food/buger/cheese-buger.png", "/content/kiosk/img/fast-food/buger/bulgogi-buger.png", "/content/kiosk/img/fast-food/buger/crispy-buger.png", "/content/kiosk/img/fast-food/buger/quarter-pound.png", "/content/kiosk/img/fast-food/buger/shrimp-buger.png"];

let singleCart = [];

const buger = JSON.parse(localStorage.getItem(OPTION));
let arrIndex = bugerNameArr.indexOf(buger[1]);

setImg.setAttribute("src", setImgArr[arrIndex]);
singleImg.setAttribute("src", singleImgArr[arrIndex]);

const checkLocal = localStorage.getItem(SETOPTION);

let parseCart = JSON.parse(localStorage.getItem(SINGLECART));
const subjectNum = localStorage.getItem(SUBJECTNUM);

let questionOption;

if(!localStorage.getItem(NOQUESTION)){
  if(localStorage.getItem(QUESTIONOPTION)){
    questionOption = JSON.parse(localStorage.getItem(QUESTIONOPTION))[1];
  }
  
  if(subjectNum > 0){
    for(let i = 0; i < options.length; i++){
      options[i].addEventListener("click", () => {
        if(questionOption == options[i].classList[0]){
          if(questionOption == "set"){
            set(i);
          }
          else{
            single(i);
          }
        }
        else{
          wrong();
        }
      })
    }
  }
  else if(subjectNum == 2){
    for(let i = 0; i < options.length; i++){
      options[i].addEventListener("click", () => {
        if(i == 1){
          single(i);
        }
        else{
          wrong();
        }
      })
    }
  }
  else if(subjectNum == 3){
    for(let i = 0; i < options.length; i++){
      options[i].addEventListener("click", () => {
        if(i == 0){
          set(i);
        }
        else{
          wrong();
        }
      })
    }
  }
  else if(subjectNum == 9){
  if(!checkLocal){
    for(let i = 0; i < options.length; i++){
      options[i].addEventListener("click", () => {
        if(options[i].classList[0] == "set"){
          set(i);
        }
        else{
          single(i);
        }
      })
    }
  }
  else{
    localStorage.removeItem(SETOPTION);
  }}
  
}
else{
  for(let i = 0; i < options.length; i++){
    options[i].addEventListener("click", () => {
      if(i == 0){
        set(i);
      }
      else{
        single(i);
      }
    })
  }
}

function set(i) {
  buger.push(setImgArr[arrIndex]);
  localStorage.setItem(OPTION, JSON.stringify(buger));
  localStorage.setItem(SETCATEGORYNUM, 1);
  localStorage.setItem(SETOPTION, "set");
  location.href = "/content/kiosk/common/html/fastFood/set-option.html";
}

function single(i){
  localStorage.setItem(SINGLEOPTION, "single");
  location.href = "/content/kiosk/common/html/fastFood/individual-option.html";
}

cancel.addEventListener("click", () => {
  localStorage.removeItem(SETOPTION);
  location.href = "javascript:history.back()";
})

function wrong(){
  Swal.fire({
    icon: 'error',
    title: '틀린 답입니다',
    text: '제시문을 다시 확인해 보세요',
    confirmButtonColor: 'rgb(245, 134, 31)',
  })
}