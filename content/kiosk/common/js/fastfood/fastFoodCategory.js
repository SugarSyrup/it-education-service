import {CATEGORYNUM, OPTION, CLASSNAME, REMOVE, SUBJECTNUM, QUESTION, QUESTIONOPTION, NOQUESTION} from '../utils/key.js';
const imgs = document.querySelectorAll("img");
const menuName = document.querySelectorAll(".menu-name");
const className = localStorage.getItem("className");
const category = document.querySelectorAll(".category-li");
const menuPrice = document.querySelectorAll(".menu-price");
const questionText = document.querySelectorAll(".question");
const questionAmount = document.querySelector(".questionAmount");



const bugerArr = ["../../img/fast-food/buger/1955.png", "../../img/fast-food/buger/bacon-tomato-buger.png", "../../img/fast-food/buger/big-mac.png", "../../img/fast-food/buger/cheese-buger.png", "../../img/fast-food/buger/bulgogi-buger.png", "../../img/fast-food/buger/crispy-buger.png", "../../img/fast-food/buger/quarter-pound.png", "../../img/fast-food/buger/shrimp-buger.png"];
const fastFoodDessertArr = ["../../img/fast-food/dessert/icecream.png"];
const drinkArr = ["../../img/fast-food/drink/americano.png", "../../img/fast-food/drink/coke.png", "../../img/fast-food/drink/juice.png", "../../img/fast-food/drink/sprite.png", "../../img/fast-food/drink/vanilla-shake.png"];
const snackArr = ["../../img/fast-food/snack/cheese-stick.png", "../../img/fast-food/snack/chicken-nugget.png", "../../img/fast-food/snack/chicken-wing.png", "../../img/fast-food/snack/french-fries.png", "../../img/fast-food/snack/kohlslow.png"];
const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];
const fastFoodDessertNameArr = ["아이스크림"];
const drinkNameArr = ["아메리카노", "콜라", "주스", "사이다", "바닐라 쉐이크"];
const snackNameArr = ["치즈스틱", "치킨 너겟", "치킨 윙", "감자튀김", "코울슬로"];
const bugerPriceArr = ["7,200원", "6,600원", "6,000원", "3,500원", "3,600원", "7,600원", "8,200원", "5,500원"];
const snackPriceArr = ["3,300원", "3,300원", "4,000원", "2,800원", "2,700원"];
const drinkPriceArr = ["3,300원", "2,400원", "2,000원", "2,400원", "3,500원"];
const fastFoodDessertPriceArr = ["1,100원"];

const setImgArr = ["../../img/fast-food/set/1955-set.png", "../../img/fast-food/set/bacon-tomato-set.png", "../../img/fast-food/set/bigmac-set.png", "../../img/fast-food/set/cheese-set.png", "../../img/fast-food/set/bulgogi-set.png", "../../img/fast-food/set/crispy-set.png", "../../img/fast-food/set/quaterpound-set.png", "../../img/fast-food/set/shrimp-set.png"];

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
    const questionOption = JSON.parse(localStorage.getItem(QUESTIONOPTION))[1];
    questionBuger = localStorage.getItem(QUESTION).replace(",", "");
  
        for(let i = 0; i < imgs.length; i++){
          imgs[i].addEventListener("click", () => {
            if(subjectNum == 3){
              if(imgs[i].parentNode.childNodes[3].innerText == questionBuger){
                addFastFood(i);
                localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
              }
              else{
                wrong();
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
                  location.href = "../html/fastFood/order-check.html";
                }
                else{
                  localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
                }
              }
              else{
                localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
              }
            }
          })
        }
      // }
      if(subjectNum >= 1){
        for(let i = 0; i < imgs.length; i++){
          imgs[i].addEventListener("click", () => {
            if(imgs[i].parentNode.childNodes[3].innerText == questionText[0].innerText.replace(",", "")){
              if(subjectNum == 1){
                alertFunc();
              }
              else if(questionOption == "set"){
                location.href = "../html/fastFood/chooseSet.html";
              }
              else if(questionOption == "single"){
                location.href = "../html/fastFood/individual-option.html";
              }
            }
            else{
              fastFoodOption = [];
              localStorage.setItem(OPTION, JSON.stringify(fastFoodOption))
              wrong();
            }
        })
      }
    }
  }
  else{
    for(let i = 0; i < imgs.length; i++){
      imgs[i].addEventListener("click", () => {
        addFastFood(i);
        if(categoryNum == 0){
          if(bugerChange){
            fastFoodOption.shift();
            fastFoodOption.unshift(setImgArr[i]);
            localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
            localStorage.removeItem("bugerChange");
            location.href = "../html/fastFood/order-check.html";
          }
          else{
            localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
            location.href = "../html/fastFood/chooseSet.html";
          }
        }
        else{
          localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
          location.href = "../html/fastFood/individual-option.html";
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

function alertFunc (){
  Swal.fire({
    title: '성공!',
    text: "다음 문제로 넘어 갈까요?",
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: 'rgb(245, 134, 31)',
    cancelButtonColor: 'rgb(245, 134, 31)',
    confirmButtonText: '아니요',
    cancelButtonText: '네'
  }).then((result) => {
    if (result.isConfirmed) {
      location.href = "../html/main-category.html";
    }
    else if(result.isDismissed){
      localStorage.setItem(SUBJECTNUM, Number(localStorage.getItem(SUBJECTNUM)) + 1);
      location.href = "../html/example/example.html";
    }
  })
}

function wrong(){
  Swal.fire({
    icon: 'error',
    title: '틀린 답입니다',
    text: '제시문을 다시 확인해 보세요',
    confirmButtonColor: 'rgb(245, 134, 31)',
  })
}