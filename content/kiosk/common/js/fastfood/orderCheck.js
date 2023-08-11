import {SETCATEGORYNUM, SUBJECTNUM, QUESTIONAMOUNT, SETCART, OPTION, SNACKOPTION, DRINKOPTION, BUGERCHANGE, SNACKCHANGE, DRINKCHANGE, NOQUESTION} from '/content/kiosk/common/js/utils/key.js';
const category = document.querySelectorAll("li");
const amount = document.querySelector(".amount-num");

localStorage.setItem(SETCATEGORYNUM, 3);

let categoryNum = Number(localStorage.getItem(SETCATEGORYNUM)) -1;

category[categoryNum].style.backgroundColor = "rgb(109, 255, 98)";
category[categoryNum].style.width = "18.3vw";
category[categoryNum].style.position = "relative";
category[categoryNum].style.left = "1.05vw";

//---------------------------------------------------
const buger = document.querySelector(".selected-buger");
const selectedBugerName = document.querySelector(".selected-menu-name");
const selectedBugerprice = document.querySelector(".selected-menu-price");

const bugerArr = ["/content/kiosk/img/fast-food/buger/1955.png", "/content/kiosk/img/fast-food/buger/bacon-tomato-buger.png", "/content/kiosk/img/fast-food/buger/big-mac.png", "/content/kiosk/img/fast-food/buger/cheese-buger.png", "/content/kiosk/img/fast-food/buger/bulgogi-buger.png", "/content/kiosk/img/fast-food/buger/crispy-buger.png", "/content/kiosk/img/fast-food/buger/quarter-pound.png", "/content/kiosk/img/fast-food/buger/shrimp-buger.png"];
const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];

const bugerOption = JSON.parse(localStorage.getItem(OPTION));
const snackOption = JSON.parse(localStorage.getItem(SNACKOPTION));
const drinkOption = JSON.parse(localStorage.getItem(DRINKOPTION));

let singleBugerImg = bugerArr[bugerNameArr.indexOf(bugerOption[1])];

const menuImg = document.querySelectorAll(".selected-product-img");
const menuName = document.querySelectorAll(".name");
const menuPrice = document.querySelectorAll(".price");

let menuImgArr = [singleBugerImg, snackOption[0], drinkOption[0]];
let menuNameArr = [bugerOption[1], snackOption[1], drinkOption[1]];
let menuPriceArr = [bugerOption[2], snackOption[2], drinkOption[2]];

buger.setAttribute("src", bugerOption[0]);
selectedBugerName.innerText = bugerOption[1] + "세트";
selectedBugerprice.innerText = bugerOption[2];

for(let i = 0; i < menuImg.length; i++){
  menuImg[i].setAttribute("src", menuImgArr[i]);
  menuName[i].innerText = menuNameArr[i];
  menuPrice[i].innerText = menuPriceArr[i];
}
//---------------------------------------------------------------사진
const bugerChangeBtn = document.querySelector(".change-buger");
const snackChangeBtn = document.querySelector(".change-snack");
const drinkChangeBtn = document.querySelector(".change-drink");

bugerChangeBtn.addEventListener("click", () => {
  localStorage.setItem(BUGERCHANGE, "change");
  location.href = "/content/kiosk/common/html/practice-category.html";
})

snackChangeBtn.addEventListener("click", () => {
  localStorage.setItem(SETCATEGORYNUM, 1);
  localStorage.setItem(SNACKCHANGE, "change");
  location.href = "/content/kiosk/fast-food/html/set-option.html";
})

drinkChangeBtn.addEventListener("click", () => {
  localStorage.setItem(SETCATEGORYNUM, 2);
  localStorage.setItem(DRINKCHANGE, "change");
  location.href = "/content/kiosk/fast-food/html/set-option.html";
})

////----------------------------------------------------------
const cancel = document.querySelector(".cancel");
const addCart = document.querySelector(".add-cart");
let cart = [];

let optionArr = [bugerOption, snackOption, drinkOption];
let parseCart = JSON.parse(localStorage.getItem(SETCART));
const subjectNum = localStorage.getItem(SUBJECTNUM);

cancel.addEventListener("click", () => {
  localStorage.removeItem(DRINKOPTION);
  localStorage.removeItem(SNACKOPTION);
  localStorage.removeItem(OPTION);
  localStorage.removeItem("amount");
  location.href = "/content/kiosk/common/html/practice-category.html";
})

if(!localStorage.getItem(NOQUESTION)){
  const questionAmount = localStorage.getItem(QUESTIONAMOUNT);
  addCart.addEventListener("click", () => {
    if(subjectNum > 0){
      if(questionAmount == amount.innerText){
        if(parseCart){
          parseCart.push(Array)
          parseCart[parseCart.length-1] = optionArr;
          localStorage.setItem(SETCART, JSON.stringify(parseCart));
        }
        else{
          cart.push(Array);
          cart[cart.length-1] = optionArr;
          localStorage.setItem(SETCART, JSON.stringify(cart));
        }
        removeItem();
        location.href = "/content/kiosk/common/html/example/success.html";
      }
      else{
        console.log("w");
      }
    }
    else if(subjectNum == 3){
      if(questionAmount == amount.innerText){
        // console.log("a")
        removeItem();
        location.href = "/content/kiosk/common/html/example/success.html";
      }
      else{
        console.log("w");
      }
    }
  })
}
else{
  console.log("a");
  addCart.addEventListener("click", () => {
    if(parseCart){
      parseCart.push(Array)
      parseCart[parseCart.length-1] = optionArr;
      localStorage.setItem(SETCART, JSON.stringify(parseCart));
    }
    else{
      cart.push(Array);
      cart[cart.length-1] = optionArr;
      localStorage.setItem(SETCART, JSON.stringify(cart));
    }
    removeItem();
    location.href = "/content/kiosk/common/html/practice-category.html";
  })
}

function removeItem(){
  localStorage.removeItem("setOption");
  localStorage.removeItem(OPTION);
  localStorage.removeItem(SNACKOPTION);
  localStorage.removeItem(DRINKOPTION);
  localStorage.removeItem(SETCATEGORYNUM);
}