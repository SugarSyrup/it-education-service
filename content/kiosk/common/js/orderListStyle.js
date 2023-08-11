import {SETAMOUNT, SINGLEAMOUNT, SETCART, SINGLECART, SUBJECTNUM, ADDITIONALORDER, ORDERING} from '/content/kiosk/common/js/utils/key.js';
const imgs = document.querySelectorAll("img");
const menuName = document.querySelectorAll(".menu-name");
const setOptionText = document.querySelectorAll(".set-option");
const orderPrice = document.querySelectorAll(".order-price");
const amount = document.querySelectorAll(".amount-num");

//--------------------------------------------------------------------
const setImgArr = ["/content/kiosk/img/fast-food/set/1955-set.png", "/content/kiosk/img/fast-food/set/bacon-tomato-set.png", "/content/kiosk/img/fast-food/set/bigmac-set.png", "/content/kiosk/img/fast-food/set/cheese-set.png", "/content/kiosk/img/fast-food/set/bulgogi-set.png", "/content/kiosk/img/fast-food/set/crispy-set.png", "/content/kiosk/img/fast-food/set/quaterpound-set.png", "/content/kiosk/img/fast-food/set/shrimp-set.png"];
const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];

let setCartLength = 0;
let singleCartLength = 0;

const parseSet = JSON.parse(localStorage.getItem(SETCART));
const parseSingle = JSON.parse(localStorage.getItem(SINGLECART));
const setAmount = JSON.parse(localStorage.getItem(SETAMOUNT));
const singleAmount = JSON.parse(localStorage.getItem(SINGLEAMOUNT));
const subjectNum = localStorage.getItem(SUBJECTNUM);

let setAmountArr = setAmount
let singleAmountArr = singleAmount;
let individualPrice= 0;
let setPrice = [];
let singlePrice = [];

if(parseSet){
  for(let i = 0; i < parseSet.length; i++){
    for(let j = 0; j < parseSet[i].length; j++){
      individualPrice = individualPrice + Number(parseSet[i][j][2].replaceAll(/원|,/g, ""));
      if(j == 2){
        setPrice.push(individualPrice);
        individualPrice = 0;
      }
    } 
  }
}

if(parseSingle){
  for(let i = 0; i < parseSingle.length; i++){
    individualPrice = Number(parseSingle[i][2].replaceAll(/원|,/g, ""));
    singlePrice.push(individualPrice);
  }
}

if(parseSet){
  for(let i = 0; i < parseSet.length; i++){
    imgs[i].setAttribute("src", setImgArr[bugerNameArr.indexOf(parseSet[i][0][1])]);
    menuName[i].innerText = parseSet[i][0][1];
    setOptionText[i].innerText = "세트";
    orderPrice[i].innerText = setPrice[i];
    amount[i].innerText = setAmountArr[i];
  }
}
if(parseSingle){
for(let i = 0; i < parseSingle.length; i++){
  if(parseSet){
    imgs[parseSet.length + i].setAttribute("src", parseSingle[i][0]);
    menuName[parseSet.length + i].innerText = parseSingle[i][1];
    setOptionText[parseSet.length + i].innerText = "단품";
    orderPrice[parseSet.length + i].innerText = singlePrice[i];
    amount[parseSet.length + i].innerText = singleAmountArr[i];
  }
  else{
    imgs[i].setAttribute("src", parseSingle[i][0]);
    menuName[i].innerText = parseSingle[i][1];
    setOptionText[i].innerText = "단품";
    orderPrice[i].innerText = singlePrice[i];
    amount[i].innerText = singleAmountArr[i];
  }
  }
}

if(parseSet){
  setCartLength = parseSet.length;
}
if(parseSingle){
  singleCartLength = parseSingle.length;
}

for(let i = setCartLength + singleCartLength; i < imgs.length; i++){
  imgs[i].parentElement.classList.add("remove");
}