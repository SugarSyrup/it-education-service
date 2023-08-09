import {CATEGORYNUM, OPTION, CLASSNAME, REMOVE, SUBJECTNUM, QUESTION, QUESTIONOPTION, NOQUESTION} from '../utils/key.js';
const imgs = document.querySelectorAll("img");
const menuName = document.querySelectorAll(".menu-name");
const className = localStorage.getItem("className");
const category = document.querySelectorAll(".category-li");
const menuPrice = document.querySelectorAll(".menu-price");
const questionText = document.querySelectorAll(".question");
const questionAmount = document.querySelector(".questionAmount");



const bugerArr = ["/content/kiosk/img/fast-food/buger/1955.png", "/content/kiosk/img/fast-food/buger/bacon-tomato-buger.png", "/content/kiosk/img/fast-food/buger/big-mac.png", "/content/kiosk/img/fast-food/buger/cheese-buger.png", "/content/kiosk/img/fast-food/buger/bulgogi-buger.png", "/content/kiosk/img/fast-food/buger/crispy-buger.png", "/content/kiosk/img/fast-food/buger/quarter-pound.png", "/content/kiosk/img/fast-food/buger/shrimp-buger.png"];
const fastFoodDessertArr = ["/content/kiosk/img/fast-food/dessert/icecream.png"];
const drinkArr = ["/content/kiosk/img/fast-food/drink/americano.png", "/content/kiosk/img/fast-food/drink/coke.png", "/content/kiosk/img/fast-food/drink/juice.png", "/content/kiosk/img/fast-food/drink/sprite.png", "/content/kiosk/img/fast-food/drink/vanilla-shake.png"];
const snackArr = ["/content/kiosk/img/fast-food/snack/cheese-stick.png", "/content/kiosk/img/fast-food/snack/chicken-nugget.png", "/content/kiosk/img/fast-food/snack/chicken-wing.png", "/content/kiosk/img/fast-food/snack/french-fries.png", "/content/kiosk/img/fast-food/snack/kohlslow.png"];
const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];
const fastFoodDessertNameArr = ["아이스크림"];
const drinkNameArr = ["아메리카노", "콜라", "주스", "사이다", "바닐라 쉐이크"];
const snackNameArr = ["치즈스틱", "치킨 너겟", "치킨 윙", "감자튀김", "코울슬로"];
const bugerPriceArr = ["7,200원", "6,600원", "6,000원", "3,500원", "3,600원", "7,600원", "8,200원", "5,500원"];
const snackPriceArr = ["3,300원", "3,300원", "4,000원", "2,800원", "2,700원"];
const drinkPriceArr = ["3,300원", "2,400원", "2,000원", "2,400원", "3,500원"];
const fastFoodDessertPriceArr = ["1,100원"];

const setImgArr = ["/content/kiosk/img/fast-food/set/1955-set.png", "/content/kiosk/img/fast-food/set/bacon-tomato-set.png", "/content/kiosk/img/fast-food/set/bigmac-set.png", "/content/kiosk/img/fast-food/set/cheese-set.png", "/content/kiosk/img/fast-food/set/bulgogi-set.png", "/content/kiosk/img/fast-food/set/crispy-set.png", "/content/kiosk/img/fast-food/set/quaterpound-set.png", "/content/kiosk/img/fast-food/set/shrimp-set.png"];

// const className = localStorage.getItem(CLASSNAME);

const fastFoodMenuArr = [bugerArr, snackArr, drinkArr, fastFoodDessertArr];
const fastFoodNameArr = [bugerNameArr, snackNameArr, drinkNameArr, fastFoodDessertNameArr];
const fastFoodPriceArr = [bugerPriceArr, snackPriceArr, drinkPriceArr, fastFoodDessertPriceArr];

const fastFoodCategoryTitle = ["햄버거", "사이드", "음료", "디저트"]

let fastFoodOption = [];

const bugerChange = localStorage.getItem("bugerChange");
const subjectNum = localStorage.getItem(SUBJECTNUM);
let categoryNum = Number(localStorage.getItem(CATEGORYNUM)) - 1;


if(className == "fast-food"){

  let questionBuger;

  for(let i = 0; i < category.length; i++){
    category[i].innerText = fastFoodCategoryTitle[i];
    category[categoryNum].classList.add("focus");
    category[i].addEventListener("click", () => {
      localStorage.setItem(CATEGORYNUM, category[i].classList[1]);
      location.reload();
    })
  }

  for(let i = 0; i < imgs.length; i++){
    imgs[i].setAttribute("src", fastFoodMenuArr[categoryNum][i]);
    menuName[i].innerText = fastFoodNameArr[categoryNum][i];
    menuPrice[i].innerText = fastFoodPriceArr[categoryNum][i];
  
    if(fastFoodMenuArr[categoryNum][i] == undefined || fastFoodNameArr[categoryNum][i] == undefined || fastFoodNameArr[categoryNum][i] == undefined){
      imgs[i].classList.add(REMOVE);
      menuName[i].classList.add(REMOVE);
      menuPrice[i].classList.add(REMOVE);
    }
  }

  if(!localStorage.getItem(NOQUESTION)){
    // console.log("a");
    const questionOption = JSON.parse(localStorage.getItem(QUESTIONOPTION))[1];
    questionBuger = localStorage.getItem(QUESTION).replace(",", "");
  
      if(subjectNum != 0 && subjectNum !=1){
        for(let i = 0; i < imgs.length; i++){
          imgs[i].addEventListener("click", () => {
            if(subjectNum == 3){
              if(imgs[i].parentNode.childNodes[3].innerText == questionBuger){
                addFastFood(i);
                localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
                location.href ="/content/kiosk/common/html/fastFood/chooseSet.html";
              }
              else{
                console.log("w");
              }
            }
            else{
              addFastFood(i);
              if(categoryNum == 0){
                if(bugerChange){
                  fastFoodOption.shift();
                  fastFoodOption.unshift(0, setImgArr[i]);
                  localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
                  localStorage.removeItem("bugerChange");
                  location.href = "/content/kiosk/common/html/fastFood/older-check.html";
                }
                else{
                  localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
                  location.href ="/content/kiosk/common/html/fastFood/chooseSet.html";
                }
              }
              else{
                localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
              }
            }
          })
        }
      }
      if(subjectNum >= 1){
        for(let i = 0; i < imgs.length; i++){
          imgs[i].addEventListener("click", () => {
            if(imgs[i].parentNode.childNodes[3].innerText == questionText[0].innerText.replace(",", "")){
              if(subjectNum == 1){
                location.href = "/content/kiosk/common/html/example/success.html";
              }
              else if(questionOption == "set"){
                location.href = "/content/kiosk/common/html/fastFood/chooseSet.html";
              }
              else if(questionOption == "single"){
                console.log("a");
                location.href = "/content/kiosk/common/html/fastFood/individual-option.html";
              }
            }
            else{
              console.log("w")
            }
        })
      }
    }
  }
  else{
    console.log("a");
    for(let i = 0; i < imgs.length; i++){
      imgs[i].addEventListener("click", () => {
        addFastFood(i);
        if(categoryNum == 0){
          if(bugerChange){
            fastFoodOption.shift();
            fastFoodOption.unshift(0, setImgArr[i]);
            localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
            localStorage.removeItem("bugerChange");
            location.href = "/content/kiosk/common/html/fastFood/older-check.html";
          }
          else{
            localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
            location.href = "/content/kiosk/common/html/fastFood/chooseSet.html";
          }
        }
        else{
          localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
          location.href = "/content/kiosk/common/html/fastFood/individual-option.html";
        }
      })
    }
  }
}
  
    function addFastFood(i){
      fastFoodOption.push(fastFoodMenuArr[categoryNum][i]);
      fastFoodOption.push(fastFoodNameArr[categoryNum][i]);
      fastFoodOption.push(fastFoodPriceArr[categoryNum][i]);
    }