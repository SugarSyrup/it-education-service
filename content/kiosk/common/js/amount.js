import {SETCART, SINGLECART, SETAMOUNT, SINGLEAMOUNT, SETOPTION, SINGLEOPTION } from '/content/kiosk/common/js/utils/key.js';


const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const amount = document.querySelectorAll(".amount-num");
const wholePrice = document.querySelector(".price");

const setAmount = JSON.parse(localStorage.getItem(SETAMOUNT));
const singleAmount = JSON.parse(localStorage.getItem(SINGLEAMOUNT));

let setAmountArr = setAmount
let singleAmountArr = singleAmount;

let amountArr = [1];
let amountNum;

let setPrice = [];
let singlePrice = [];
let price = Number(wholePrice.innerText.replaceAll(/원|,|￦/g, ""));
let individualPrice= 0;

const parseSet = JSON.parse(localStorage.getItem(SETCART));
const parseSingle = JSON.parse(localStorage.getItem(SINGLECART));
const setOption = localStorage.getItem(SETOPTION);
const singleOption = localStorage.getItem(SINGLEOPTION);

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

for(let i = 0; i < plus.length; i++){
  plus[i].addEventListener("click", () => {
    if(parseSet){
      plusFunc(i);
      if(i > parseSet.length - 1){
        singleAmountArr[i - parseSet.length] = amountNum;
        price = Number(price) + Number(singlePrice[i - parseSet.length]);
        localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmountArr));
      }
      else{
        setAmountArr[i] = amountNum;
        price = Number(price) + Number(singlePrice[i]);
        localStorage.setItem(SETAMOUNT, JSON.stringify(setAmountArr));
      }
    }
    else{
      plusFunc(i);
        setAmountArr[i] = amountNum;
        price = Number(price) + Number(singlePrice[i]);
        localStorage.setItem(SETAMOUNT, JSON.stringify(setAmountArr));
    }
    wholePrice.innerText = "￦" + price.toLocaleString("ko-KR");
  })
  
  minus[i].addEventListener("click", () => {
    if(parseSet){
      amountNum = Number(amount[i].innerText);
      if(amountNum > 1){
        minusFunc(i);
        if(i > parseSet.length - 1){
            singleAmountArr[i - parseSet.length] = amountNum;
            price = price - singlePrice[i - parseSet.length];
            localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmountArr));
          }
          else{
            setAmountArr[i] = amountNum;
            price = price - setPrice[i];
            localStorage.setItem(SETAMOUNT, JSON.stringify(setAmountArr));
          }
        }
      }
      else{
        if(amountNum > 1){
          minusFunc(i);
          singleAmountArr[i] = amountNum;
          price = price - singlePrice[i];
          localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmountArr));
        }
      }
      wholePrice.innerText = "￦" + price.toLocaleString("ko-KR");
    })
  }

  function plusFunc(i){
    amountNum = Number(amount[i].innerText);
  amountNum++;
  amount[i].innerText = amountNum;
  
}
function minusFunc(i) {;
  amountNum--;
  amount[i].innerText = amountNum; 
}
