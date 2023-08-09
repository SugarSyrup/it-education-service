import {SETCART, SINGLECART, SETAMOUNT, SINGLEAMOUNT} from '/content/kiosk/common/js/utils/key.js';
const wholePrice = document.querySelector(".price");

const parseSet = JSON.parse(localStorage.getItem(SETCART));
const parseSingle = JSON.parse(localStorage.getItem(SINGLECART));
const setAmount = JSON.parse(localStorage.getItem(SETAMOUNT));
const singleAmount = JSON.parse(localStorage.getItem(SINGLEAMOUNT));

let singleAmountArr = singleAmount;
let setAmountArr = setAmount

let price = 0;
let individualPrice= 0;
let setPrice = [];
let singlePrice = [];
let counter = 0;

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
    individualPrice = Number(singleAmountArr[i]) * Number(parseSingle[i][2].replaceAll(/원|,/g, ""));
    singlePrice.push(individualPrice);
  }
}
  
  while(counter < setPrice.length){
    price = price + setPrice[counter] * Number(setAmountArr[counter]);
    counter++;
  }

  counter = 0;
  
  while(counter < singlePrice.length){
    price = price + singlePrice[counter];
    counter++;
  }
  // console.log(price);
  wholePrice.innerText = "￦" + price.toLocaleString("ko-KR");