import {CATEGORYNUM, OPTION, REMOVE, SUBJECTNUM, QUESTION, NOQUESTION} from '/content/kiosk/common/js/utils/key.js';
const imgs = document.querySelectorAll("img");
const menuName = document.querySelectorAll(".menu-name");
const className = localStorage.getItem("className");
const category = document.querySelectorAll(".category-li");
const menuPrice = document.querySelectorAll(".menu-price");
const questionText = document.querySelectorAll(".question");

let categoryNum = Number(localStorage.getItem(CATEGORYNUM)) - 1;
const subjectNum = localStorage.getItem(SUBJECTNUM);

const cafeCategoryTitle = ["커피", "차", "음료", "디저트"];
const coffeeHotArr = ["/content/kiosk/img/cafe/coffee/americano-hot.jpg", "/content/kiosk/img/cafe/coffee/cappuccino-hot.jpg", "/content/kiosk/img/cafe/coffee/caramel-macchiato-hot.jpg", "/content/kiosk/img/cafe/coffee/cafe-mocha-hot.jpg", "/content/kiosk/img/cafe/coffee/latte-hot.jpg", "/content/kiosk/img/cafe/coffee/vanilla-latte-hot.jpg"];
const coffeeIceArr = ["/content/kiosk/img/cafe/coffee/americano-ice.jpg", "/content/kiosk/img/cafe/coffee/cappuccino-ice.jpg", "/content/kiosk/img/cafe/coffee/caramel-macchiato-ice.jpg", "/content/kiosk/img/cafe/coffee/cafe-mocha-ice.jpg", "/content/kiosk/img/cafe/coffee/latte-ice.jpg", "/content/kiosk/img/cafe/coffee/vanilla-latte-ice.jpg"];
const beverageArr = ["/content/kiosk/img/cafe/beverage/grapefruit-ade.jpg", "/content/kiosk/img/cafe/beverage/lemon-ade.jpg", "/content/kiosk/img/cafe/beverage/peach-ice-tea.jpg", "/content/kiosk/img/cafe/beverage/strawberry-juice.jpg", "/content/kiosk/img/cafe/beverage/strawberry-yogurt-shake.jpg"];
const teaHotArr = ["/content/kiosk/img/cafe/tea/chamomile-hot.jpg", "/content/kiosk/img/cafe/tea/citron-tea-hot.jpg", "/content/kiosk/img/cafe/tea/earl-grey-hot.jpg", "/content/kiosk/img/cafe/tea/lemon-tea-hot.jpg", "/content/kiosk/img/cafe/tea/peppermint-hot.jpg", "/content/kiosk/img/cafe/tea/rooibos-hot.jpg"];
const teaiceArr = ["/content/kiosk/img/cafe/tea/chamomile-ice.jpg", "/content/kiosk/img/cafe/tea/citrone-tea-ice.jpg", "/content/kiosk/img/cafe/tea/earl-grey-ice.jpg", "/content/kiosk/img/cafe/tea/lemon-tea-ice.jpg"];
const cafeDissertArr = ["/content/kiosk/img/cafe/dessert/carrot-cake.jpg", "/content/kiosk/img/cafe/dessert/chocolate-cake.jpg", "/content/kiosk/img/cafe/dessert/greentea-cake.jpg", "/content/kiosk/img/cafe/dessert/crople.jpg", "/content/kiosk/img/cafe/dessert/madeleine.jpg"];

const coffeeNameArr = ["아메리카노", "카푸치노", "캬라멜 마키아토", "카페모카", "카페라떼", "바닐라라떼"];
const beverageNameArr = ["자몽 에이드", "레몬 에이드", "복숭아 아이스티", "딸기 주스", "딸기 스무디"];
const teaNameArr = ["캐모마일", "유자차", "홍차", "레몬차", "페퍼민트", "루이보스"];
const cafeDissertNametArr = ["당근 케이크", "초콜릿 케이크","녹차 케이크", "크로플", "마들렌"];

const coffeePriceArr = ["4,000원", "5,000원", "5,0000원", "5,0000원", "5,0000원", "5,0000원"];
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
    category[i].addEventListener("click", () => {
      localStorage.setItem(CATEGORYNUM, category[i].classList[1]);
      category[categoryNum].classList.add("focus");
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
    // console.log("q")
    for(let i = 0; i < imgs.length; i++){
      imgs[i].addEventListener("click", () => {
        if(imgs[i].parentNode.childNodes[3].innerText == questionText[0].innerText.replace(",", "")){
          if(subjectNum == 1){
            location.href = "/content/kiosk/common/html/example/success.html";
          }
          else if(cafeDissertNametArr.indexOf(localStorage.getItem(QUESTION)) != -1){
            cafeOption.push(cafeMenuArr[categoryNum][i]);
            cafeOption.push(cafeMenuNameArr[categoryNum][i]);
            cafeOption.push(cafePriceArr[categoryNum][i]);
            localStorage.setItem(OPTION, JSON.stringify(cafeOption));
            location.href = "/content/kiosk/common/html/fastFood/individual-option.html";
          }
          else{
            cafeOption.push(cafeMenuArr[categoryNum][i]);
            cafeOption.push(cafeMenuNameArr[categoryNum][i]);
            cafeOption.push(cafePriceArr[categoryNum][i]);
            localStorage.setItem(OPTION, JSON.stringify(cafeOption));
            location.href = "/content/kiosk/common/html/cafe/option.html";
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
  for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener("click", () => {
        if(cafeDissertNametArr.indexOf(imgs[i].parentNode.childNodes[3].innerText) != -1){
          cafeOption.push(cafeMenuArr[categoryNum][i]);
          cafeOption.push(cafeMenuNameArr[categoryNum][i]);
          cafeOption.push(cafePriceArr[categoryNum][i]);
          localStorage.setItem(OPTION, JSON.stringify(cafeOption));
          location.href = "/content/kiosk/common/html/fastFood/individual-option.html";
        }
        else{
          cafeOption.push(cafeMenuArr[categoryNum][i]);
          cafeOption.push(cafeMenuNameArr[categoryNum][i]);
          cafeOption.push(cafePriceArr[categoryNum][i]);
          localStorage.setItem(OPTION, JSON.stringify(cafeOption));
          location.href = "/content/kiosk/common/html/cafe/option.html";
        }
      })
    }
  }
}