import {CATEGORYNUM, OPTION, REMOVE, SUBJECTNUM, QUESTION, NOQUESTION} from "../../js/utils/key.js";
const imgs = document.querySelectorAll("img");
const menuName = document.querySelectorAll(".menu-name");
const className = localStorage.getItem("className");
const category = document.querySelectorAll(".category-li");
const menuPrice = document.querySelectorAll(".menu-price");
const questionText = document.querySelectorAll(".question");

let categoryNum = Number(localStorage.getItem(CATEGORYNUM)) - 1;
const subjectNum = localStorage.getItem(SUBJECTNUM);

const cafeCategoryTitle = ["커피", "차", "음료", "디저트"];
const coffeeHotArr = ["../../img/cafe/coffee/americano-hot.jpg", "../../img/cafe/coffee/cappuccino-hot.jpg", "../../img/cafe/coffee/caramel-macchiato-hot.jpg", "../../img/cafe/coffee/cafe-mocha-hot.jpg", "../../img/cafe/coffee/latte-hot.jpg", "../../img/cafe/coffee/vanilla-latte-hot.jpg"];
const coffeeIceArr = ["../../img/cafe/coffee/americano-ice.jpg", "../../img/cafe/coffee/cappuccino-ice.jpg", "../../img/cafe/coffee/caramel-macchiato-ice.jpg", "../../img/cafe/coffee/cafe-mocha-ice.jpg", "../../img/cafe/coffee/latte-ice.jpg", "../../img/cafe/coffee/vanilla-latte-ice.jpg"];
const beverageArr = ["../../img/cafe/beverage/grapefruit-ade.jpg", "../../img/cafe/beverage/lemon-ade.jpg", "../../img/cafe/beverage/peach-ice-tea.jpg", "../../img/cafe/beverage/strawberry-juice.jpg", "../../img/cafe/beverage/strawberry-yogurt-shake.jpg"];
const teaHotArr = ["../../img/cafe/tea/chamomile-hot.jpg", "../../img/cafe/tea/citron-tea-hot.jpg", "../../img/cafe/tea/earl-grey-hot.jpg", "../../img/cafe/tea/lemon-tea-hot.jpg", "../../img/cafe/tea/peppermint-hot.jpg", "../../img/cafe/tea/rooibos-hot.jpg"];
const teaiceArr = ["../../img/cafe/tea/chamomile-ice.jpg", "../../img/cafe/tea/citrone-tea-ice.jpg", "../../img/cafe/tea/earl-grey-ice.jpg", "../../img/cafe/tea/lemon-tea-ice.jpg"];
const cafeDissertArr = ["../../img/cafe/dessert/carrot-cake.jpg", "../../img/cafe/dessert/chocolate-cake.jpg", "../../img/cafe/dessert/greentea-cake.jpg", "../../img/cafe/dessert/crople.jpg", "../../img/cafe/dessert/madeleine.jpg"];

const coffeeNameArr = ["아메리카노", "카푸치노", "캬라멜 마키아토", "카페모카", "카페라떼", "바닐라라떼"];
const beverageNameArr = ["자몽 에이드", "레몬 에이드", "복숭아 아이스티", "딸기 주스", "딸기 스무디"];
const teaNameArr = ["캐모마일", "유자차", "홍차", "레몬차", "페퍼민트", "루이보스"];
const cafeDissertNametArr = ["당근 케이크", "초콜릿 케이크","녹차 케이크", "크로플", "마들렌"];

const coffeePriceArr = ["4,000원", "5,000원", "5,000원", "5,000원", "5,000원", "5,000원"];
const beveragePriceArr = ["5,000원", "5,000원", "4,000원", "5,000원", "5,000원"];
const teaPriceArr = ["4,000원", "4,000원", "4,000원", "4,000원", "4,000원", "4,000원"];
const dissertPriceArr = ["5,500원", "5,500원", "5,500원", "5,500원", "5,500원"]; 

const cafeMenuArr = [coffeeHotArr, teaHotArr, beverageArr, cafeDissertArr];
const cafeMenuNameArr = [coffeeNameArr, teaNameArr, beverageNameArr, cafeDissertNametArr];
const cafePriceArr = [coffeePriceArr, teaPriceArr, beveragePriceArr, dissertPriceArr];

let cafeOption = [];

if(className == "cafe"){

  for(let i = 0; i < category.length; i++){
    category[i].innerText = cafeCategoryTitle[i];
    category[categoryNum].classList.add("focus");
    category[i].addEventListener("click", () => {
      localStorage.setItem(CATEGORYNUM, category[i].classList[1]);
      location.reload();
    })
  }
  for(let i = 0; i < imgs.length; i++){
    imgs[i].setAttribute("src", cafeMenuArr[categoryNum][i]);
    menuName[i].innerText = cafeMenuNameArr[categoryNum][i];
    menuPrice[i].innerText = cafePriceArr[categoryNum][i];
    if(cafeMenuArr[categoryNum][i] == undefined || cafeMenuArr[categoryNum][i] == undefined){
      imgs[i].classList.add(REMOVE);
      menuName[i].classList.add(REMOVE);
      menuPrice[i].classList.add(REMOVE);
    }
    else{
      imgs[i].classList.remove(REMOVE)
      menuName[i].classList.remove(REMOVE);
      menuPrice[i].classList.remove(REMOVE);
    }
  }
  if(!localStorage.getItem(NOQUESTION)){
  if(subjectNum >= 1){
    for(let i = 0; i < imgs.length; i++){
      imgs[i].addEventListener("click", () => {
        if(imgs[i].parentNode.childNodes[3].innerText == questionText[0].innerText.replace(",", "")){
          if(subjectNum == 1){
            alertFunc();
          }
          else if(cafeDissertNametArr.indexOf(localStorage.getItem(QUESTION)) != -1){
            cafeOption.push(cafeMenuArr[categoryNum][i]);
            cafeOption.push(cafeMenuNameArr[categoryNum][i]);
            cafeOption.push(cafePriceArr[categoryNum][i]);
            localStorage.setItem(OPTION, JSON.stringify(cafeOption));
            location.href = "../html/fastFood/individual-option.html";
          }
          else{
            cafeOption.push(cafeMenuArr[categoryNum][i]);
            cafeOption.push(cafeMenuNameArr[categoryNum][i]);
            cafeOption.push(cafePriceArr[categoryNum][i]);
            localStorage.setItem(OPTION, JSON.stringify(cafeOption));
            location.href = "../html/cafe/option.html";
          }
        }
        else{
          wrong();
        }
      })
    }
  }
}
else{
  for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener("click", () => {
        if(cafeDissertNametArr.indexOf(imgs[i].parentNode.childNodes[3].innerText) != -1){
          cafeOption.push(cafeMenuArr[categoryNum][i]);
          cafeOption.push(cafeMenuNameArr[categoryNum][i]);
          cafeOption.push(cafePriceArr[categoryNum][i]);
          localStorage.setItem(OPTION, JSON.stringify(cafeOption));
          location.href = "../html/fastFood/individual-option.html";
        }
        else{
          cafeOption.push(cafeMenuArr[categoryNum][i]);
          cafeOption.push(cafeMenuNameArr[categoryNum][i]);
          cafeOption.push(cafePriceArr[categoryNum][i]);
          localStorage.setItem(OPTION, JSON.stringify(cafeOption));
          location.href = "../html/cafe/option.html";
        }
      })
    }
  }
}

function alertFunc(){
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