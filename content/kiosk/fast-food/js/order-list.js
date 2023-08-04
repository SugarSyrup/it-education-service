const imgs = document.querySelectorAll("img");
const menuName = document.querySelectorAll(".menu-name");
const setOption = document.querySelectorAll(".set-option");
const orderPrice = document.querySelectorAll(".order-price");

const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
let amount = document.querySelectorAll(".amount-num");

const SETCART = "setCart";
const SINGLECART = "singleCart";
const SETAMOUNT = "amount";
const SINGLEAMOUNT = "singleAmount";

const parseSet = JSON.parse(localStorage.getItem(SETCART));
const parseSingle = JSON.parse(localStorage.getItem(SINGLECART));
const setAmount = JSON.parse(localStorage.getItem(SETAMOUNT));
const singleAmount = JSON.parse(localStorage.getItem(SINGLEAMOUNT));

let singleAmountArr = singleAmount;
let setAmountArr = setAmount;

let wholePrice = document.querySelector(".sum-price");

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
  
  for(let i = 0; i < parseSingle.length; i++){
    individualPrice = Number(singleAmountArr[i]) * Number(parseSingle[i][2].replaceAll(/원|,/g, ""));
    singlePrice.push(individualPrice);
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
  wholePrice.innerText = "￦" + price.toLocaleString("ko-KR");

//--------------------------------------------------------------------
const setImgArr = ["/content/kiosk/img/fast-food/set/1955-set.png", "/content/kiosk/img/fast-food/set/bacon-tomato-set.png", "/content/kiosk/img/fast-food/set/bigmac-set.png", "/content/kiosk/img/fast-food/set/cheese-set.png", "/content/kiosk/img/fast-food/set/bulgogi-set.png", "/content/kiosk/img/fast-food/set/crispy-set.png", "/content/kiosk/img/fast-food/set/quaterpound-set.png", "/content/kiosk/img/fast-food/set/shrimp-set.png"];
const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];

for(let i = 0; i < parseSet.length; i++){
  imgs[i].setAttribute("src", setImgArr[bugerNameArr.indexOf(parseSet[i][0][1])]);
  menuName[i].innerText = parseSet[i][0][1];
  setOption[i].innerText = "세트";
  orderPrice[i].innerText = setPrice[i];
  amount[i].innerText = setAmountArr[i];
}
for(let i = 0; i < parseSingle.length; i++){
  imgs[parseSet.length + i].setAttribute("src", parseSingle[i][0]);
  menuName[parseSet.length + i].innerText = parseSingle[i][1];
  setOption[parseSet.length + i].innerText = "단품";
  orderPrice[parseSet.length + i].innerText = singlePrice[i];
  amount[parseSet.length + i].innerText = singleAmountArr[i];
}
for(let i = parseSet.length + parseSingle.length; i < imgs.length; i++){
  imgs[i].parentElement.classList.add("remove");
}

//---------------------------------------------------------------------------
let amountArr = [1];
let amountNum;

for(let i = 0; i < plus.length; i++){
  plus[i].addEventListener("click", () => {
    if(i < parseSet.length){
      plusFunc(i);
      setAmountArr[i] = amountNum;
      price = price + setPrice[i];
      localStorage.setItem(SETAMOUNT, JSON.stringify(setAmountArr));
    }
    else{
      plusFunc(i);
      singleAmountArr[parseSet.length - i] = amountNum;
      price = price + singlePrice[i - parseSet.length];
      localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmountArr));
      
    }
    wholePrice.innerText = "￦" + price.toLocaleString("ko-KR");
  })
  minus[i].addEventListener("click", () => {
    if(i < parseSet.length){
      minusFunc(i);
      setAmountArr[i] = amountNum;
      price = price - setPrice[i];
      localStorage.setItem(SETAMOUNT, JSON.stringify(setAmountArr));
    }
    else{
      minusFunc(i);
      price = price - singlePrice[i - parseSet.length];
      singleAmountArr[i - parseSet.length] = amountNum;
      localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmountArr));
      
    }
    wholePrice.innerText = "￦" + price.toLocaleString("ko-KR");
  })
}

function plusFunc(i){
  amountNum = Number(amount[i].innerText);
  amountNum++;
  amount[i].innerText = amountNum;
  }
  
  function minusFunc(i) {
    amountNum = Number(amount[i].innerText);
  if(amountNum > 1){
    amountNum--;
    amount[i].innerText = amountNum;
  }
  }

//------------------------------------------------------------------------
const addtionalOrder = document.querySelector(".additional-order");
const ordering = document.querySelector(".ordering");

addtionalOrder.addEventListener("click", () => {
  location.href = "/content/kiosk/common/html/practice-category.html";
})

ordering.addEventListener("click", () => {
  location.href = "/content/kiosk/common/html/payment-method.html";
})