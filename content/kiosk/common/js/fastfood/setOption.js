import {SETCATEGORYNUM, SNACKCHANGE, DRINKCHANGE ,SNACKOPTION, DRINKOPTION, REMOVE, SUBJECTNUM, QUESTION, QUESTION2, QUESTION3, QUESTIONAMOUNT, NOQUESTION} from '/content/kiosk/common/js/utils/key.js';
const imgs = document.querySelectorAll("img");
const menuName = document.querySelectorAll(".menu-name");
const menuPrice = document.querySelectorAll(".menu-price");
const category = document.querySelectorAll("li");
const questionText = document.querySelectorAll(".question");
const questionAmount = document.querySelector(".questionAmount");
// let option = JSON.parse(localStorage.getItem("option"));

const snackArr = ["/content/kiosk/img/fast-food/snack/cheese-stick.png", "/content/kiosk/img/fast-food/snack/chicken-nugget.png", "/content/kiosk/img/fast-food/snack/chicken-wing.png", "/content/kiosk/img/fast-food/snack/french-fries.png", "/content/kiosk/img/fast-food/snack/kohlslow.png"];
const snackNameArr = ["치즈스틱", "치킨 너겟", "치킨 윙", "감자튀김", "코울슬로"];
const drinkArr = ["/content/kiosk/img/fast-food/drink/americano.png", "/content/kiosk/img/fast-food/drink/coke.png", "/content/kiosk/img/fast-food/drink/juice.png", "/content/kiosk/img/fast-food/drink/sprite.png", "/content/kiosk/img/fast-food/drink/vanilla-shake.png"];
const drinkNameArr = ["아메리카노", "콜라", "주스", "사이다", "바닐라 쉐이크"];

const snackPriceArr = ["3,300원", "3,300원", "4,000원", "2,800원", "2,700원"];
const drinkPriceArr = ["3,300원", "2,400원", "2,000원", "2,400원", "3,500원"];

const imgArr = [snackArr, drinkArr];
const textArr = [snackNameArr, drinkNameArr];
const priceArr = [snackPriceArr, drinkPriceArr];

let categoryNum = Number(localStorage.getItem(SETCATEGORYNUM)) -1;
const subjectNum = localStorage.getItem(SUBJECTNUM);

category[categoryNum].style.backgroundColor = "rgb(109, 255, 98)";
category[categoryNum].style.width = "18.3vw";
category[categoryNum].style.position = "relative";
category[categoryNum].style.left = "1.05vw";

for(let i = 0; i < imgs.length; i++){
  if(categoryNum != 2){
    imgs[i].setAttribute("src", imgArr[categoryNum][i]);
    menuName[i].innerText = textArr[categoryNum][i];
    menuPrice[i].innerText =priceArr[categoryNum][i];
    if(snackArr[i] == undefined || snackNameArr[i] == undefined || snackPriceArr[i] == undefined){
      imgs[i].parentElement.classList.add("none");
      imgs[i].classList.add(REMOVE);
      menuName[i].classList.add(REMOVE);
      menuPrice[i].classList.add(REMOVE);
    }
  }
  else{
    location.href = "/content/kiosk/common/html/fastFood/order-check.html";
  }
}
//----------------------------------------------------design
const menuBox = document.querySelectorAll(".menu-box");

let snackOption = [];
let drinkOption = [];

let options = [snackOption, drinkOption];

const optionKey = [SNACKOPTION,DRINKOPTION];

if(!localStorage.getItem(NOQUESTION)){
  const randomSnack = localStorage.getItem(QUESTION2).replace(",", "");
  const randomDrink = localStorage.getItem(QUESTION3);

  for(let i = 0; i < menuBox.length; i++){
    menuBox[i].addEventListener("click", () => {
      if(subjectNum > 0){
        if(menuBox[i].childNodes[3].innerText == randomSnack || menuBox[i].childNodes[3].innerText == randomDrink){
          addOption(i);
        }
        else{
          console.log("w");
        }
      }
      else if(subjectNum == 3){
        if(menuBox[i].childNodes[3].innerText == randomSnack || menuBox[i].childNodes[3].innerText == randomDrink){
          addOption(i);
        }
        else{
          console.log("w");
        }
        addOption(i);
      }
    })
  }
}
else{
  for(let i = 0; i < menuBox.length; i++){
    menuBox[i].addEventListener("click", () => {
      addOption(i);
    })
  }
}

  let snackChange = localStorage.getItem(SNACKCHANGE);
  let drinkChange = localStorage.getItem(DRINKCHANGE);

let parseSnackOption = JSON.parse(localStorage.getItem(SNACKOPTION));
let parseDrinkOption = JSON.parse(localStorage.getItem(DRINKOPTION));

  if(snackChange){
    for(let i = 0; i < menuBox.length; i++){
      menuBox[i].addEventListener("click", () => {
        parseSnackOption.push(imgArr[categoryNum][i]);
        parseSnackOption.push(textArr[categoryNum][i]);
        parseSnackOption.push(priceArr[categoryNum][i]);
        localStorage.removeItem(SNACKCHANGE);
        location.href = "/content/kiosk/common/html/fastFood/order-check.html";
      })
    }
  }
  else if(drinkChange){
    for(let i = 0; i < menuBox.length; i++){
      menuBox[i].addEventListener("click", () => {
        parseDrinkOption.push(imgArr[categoryNum][i]);
        parseDrinkOption.push(textArr[categoryNum][i]);
        parseDrinkOption.push(priceArr[categoryNum][i]);
        localStorage.removeItem(DRINKCHANGE);
        location.href = "/content/kiosk/common/html/fastFood/order-check.html";
      })
    }
  }

  function addOption(i){
      options[categoryNum].push(imgArr[categoryNum][i]);
      options[categoryNum].push(textArr[categoryNum][i]);
      options[categoryNum].push(priceArr[categoryNum][i]);
      localStorage.setItem(optionKey[categoryNum], JSON.stringify(options[categoryNum]));
      localStorage.setItem(SETCATEGORYNUM, categoryNum + 2);
      location.reload();
  }