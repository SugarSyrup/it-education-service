const img = document.querySelector(".img");
const name = document.querySelector(".name");
const price = document.querySelector(".price");

const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus");
let amount = document.querySelector(".amount-num");

const OPTION ="option";
const SINGLEAMOUNT = "singleAmount";

const parseOption = JSON.parse(localStorage.getItem(OPTION));

img.setAttribute("src", parseOption[0]);
name.innerText = parseOption[1];
price.innerText = parseOption[2];
//----------------------------------------

let amountArr = [1];
let amountNum = 1;

if(!localStorage.getItem(SINGLEAMOUNT)){
  localStorage.setItem(SINGLEAMOUNT, JSON.stringify(amountArr));
}
let parseAmount = JSON.parse(localStorage.getItem(SINGLEAMOUNT));

let amountLength = parseAmount.length - 1;
parseAmount.push(1);
localStorage.setItem(SINGLEAMOUNT, JSON.stringify(parseAmount));

if(amountLength == 0){
  plus.addEventListener("click", plusFunc);
  minus.addEventListener("click", minusFunc);
  // parseAmount.push(1);
}
else{
  plus.addEventListener("click", plusFunc);
  minus.addEventListener("click", minusFunc);
  // parseAmount.push(1);
}

function plusFunc(){
    amountNum++;
    amount.innerText = amountNum;
    parseAmount[amountLength] = amountNum;
    localStorage.setItem(SINGLEAMOUNT, JSON.stringify(parseAmount));
  }

function minusFunc() {
    amountNum--;
    amount.innerText = amountNum;
    parseAmount[amountLength] = amountNum;
    localStorage.setItem(SINGLEAMOUNT, JSON.stringify(parseAmount));
  }
//--------------------------------------------------------
  const cart = document.querySelector(".add-cart");
  const back = document.querySelector(".back");
  const SINGLECART = "singleCart";

  let singleCart = [];

  if(!localStorage.getItem(SINGLECART)){
    localStorage.setItem(SINGLECART, JSON.stringify(singleCart));
  }

  let parseCart = JSON.parse(localStorage.getItem(SINGLECART));
// console.log(parseCart);
  cart.addEventListener("click", () => {
    parseCart.push(parseOption);
    localStorage.setItem(SINGLECART, JSON.stringify(parseCart));
    localStorage.removeItem(OPTION);
    location.href = "/content/kiosk/common/html/practice-category.html";
  })
  back.addEventListener("click", () => {
    localStorage.removeItem(OPTION);
    localStorage.removeItem(SINGLEAMOUNT);
    location.href = "/content/kiosk/common/practice-category.html";
  })
  console.log(parseCart);