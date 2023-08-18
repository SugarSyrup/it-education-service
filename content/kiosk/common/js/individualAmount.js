import {SETAMOUNT, SINGLEAMOUNT, SETOPTION, SINGLEOPTION, SUBJECTNUM, SETCART, SINGLECART} from "../js/utils/key.js";
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const amount = document.querySelector(".amount-num");

let amountArr = [1];
let amountNum = amount.innerText;

const subjectNum = localStorage.getItem(SUBJECTNUM);

if(subjectNum != 0 || subjectNum != 1){
if(!localStorage.getItem(SETAMOUNT)){
  localStorage.setItem(SETAMOUNT, JSON.stringify(amountArr));
}

if(!localStorage.getItem(SINGLEAMOUNT)){
  localStorage.setItem(SINGLEAMOUNT, JSON.stringify(amountArr));
}

const setAmount = JSON.parse(localStorage.getItem(SETAMOUNT));
const singleAmount = JSON.parse(localStorage.getItem(SINGLEAMOUNT));

const setOption = localStorage.getItem(SETOPTION);
const singleOption = localStorage.getItem(SINGLEOPTION);

let setLength = 0;
let singleLength = 0;

if(localStorage.getItem(SETCART)){
  setLength = JSON.parse(localStorage.getItem(SETCART)).length;
}
if(localStorage.getItem(SINGLECART)){
  singleLength = JSON.parse(localStorage.getItem(SINGLECART)).length;
}

if(setOption){
  setAmount.push(1);
}
else{
  singleAmount.push(1);
}
localStorage.setItem(SETAMOUNT, JSON.stringify(setAmount));
localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmount));


if(setOption){
  plus.addEventListener("click", () => {
    plusFunc();
    setAmount[setLength] = amountNum;
    localStorage.setItem(SETAMOUNT, JSON.stringify(setAmount));
  });
  minus.addEventListener("click", () => {
      if(amountNum > 1){
      minusFunc();
      setAmount[setLength] = amountNum;
      localStorage.setItem(SETAMOUNT, JSON.stringify(setAmount));
    }
  });
}
else{
  plus.addEventListener("click", () => {
    plusFunc();
    singleAmount[singleLength] = amountNum;
    localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmount));
  });
  minus.addEventListener("click", () => {
    if(amountNum > 1){
      minusFunc();
      singleAmount[singleLength] = amountNum;
      localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmount));
      }
  });
}

function plusFunc(){
  amountNum++;
  amount.innerText = amountNum;
}
function minusFunc(){
  amountNum--;
  amount.innerText = amountNum;
}
}