const imgs = document.querySelectorAll("img");
const menuName = document.querySelectorAll(".menu-name");
const className = localStorage.getItem("className");
const category = document.querySelectorAll(".category-li");
const menuPrice = document.querySelectorAll(".menu-price");

const CATEGORYNUM = "categoryNum";
const REMOVE = "remove";
const OPTION = "option";

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
const cafeDisserNametArr = ["당근 케이크", "초콜릿 케이크","녹차 케이크", "크로플", "마들렌"];

const cafeMenuArr = [coffeeHotArr, teaHotArr, beverageArr, cafeDissertArr];
const cafeMenuNameArr = [coffeeNameArr, teaNameArr, beverageNameArr, cafeDisserNametArr];

let cafeOption = [];


let categoryNum = Number(localStorage.getItem(CATEGORYNUM)) - 1;

if(className == "cafe"){
  for(let i = 0; i < category.length; i++){
    category[i].innerText = cafeCategoryTitle[i];
    category[i].addEventListener("click", () => {
      localStorage.setItem(CATEGORYNUM, category[i].classList[1]);
      location.reload();
    })
  }
  for(let i = 0; i < imgs.length; i++){
    imgs[i].setAttribute("src", cafeMenuArr[categoryNum][i]);
    menuName[i].innerText = cafeMenuNameArr[categoryNum][i];
    if(cafeMenuArr[categoryNum][i] == undefined || cafeMenuArr[categoryNum][i] == undefined){
      imgs[i].classList.add(REMOVE);
      menuName[i].classList.add(REMOVE);
    }
    else{
      imgs[i].classList.remove(REMOVE)
      menuName[i].classList.remove(REMOVE);
    }
    imgs[i].addEventListener("click", () => {
      cafeOption.push(cafeMenuArr[categoryNum][i]);
      cafeOption.push(cafeMenuNameArr[categoryNum][i]);
      // cafeOption.push()
    localStorage.setItem(OPTION, cafeOption);
    localStorage.setItem(OPTIONNAME, );
    location.href ="/content/kiosk/cafe/html/option.html";
    })
  }
}
// ----------------------------------------------------------------------cafe

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


const fastFoodMenuArr = [bugerArr, snackArr, drinkArr, fastFoodDessertArr];
const fastFoodNameArr = [bugerNameArr, snackNameArr, drinkNameArr, fastFoodDessertNameArr];
const fastFoodPriceArr = [bugerPriceArr, snackPriceArr, drinkPriceArr, fastFoodDessertPriceArr];

const fastFoodCategoryTitle = ["햄버거", "사이드", "음료", "디저트"]

let fastFoodOption = [];

let bugerChange = localStorage.getItem("bugerChange");

if(className == "fast-food"){
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
    imgs[i].addEventListener("click", () => {
      fastFoodOption.push(fastFoodMenuArr[categoryNum][i]);
      fastFoodOption.push(fastFoodNameArr[categoryNum][i]);
      fastFoodOption.push(fastFoodPriceArr[categoryNum][i]);
      if(categoryNum == 0){
        if(bugerChange){
          fastFoodOption.shift();
          fastFoodOption.unshift(0, setImgArr[i]);
          localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
          localStorage.removeItem("bugerChange");
          location.href = "/content/kiosk/fast-food/html/order-check.html";
        }
        else{
          localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
          location.href ="/content/kiosk/fast-food/html/option-1.html";
        }
      }
      else{
        localStorage.setItem(OPTION, JSON.stringify(fastFoodOption));
        location.href = "/content/kiosk/fast-food/html/individual-option.html";
      }
    })
  }
}
//-----------------------------------------------------fast-food
const backBtn = document.querySelector(".fa-left-long");

backBtn.addEventListener("click", () => {
  location.href = "/content/kiosk/common/html/main-category.html";
})

///------------------------------------------------------------
const wholePrice = document.querySelector(".price");

const parseCart = JSON.parse(localStorage.getItem("setCart"));
const amount = JSON.parse(localStorage.getItem("amount"));
const singleCart = JSON.parse(localStorage.getItem("singleCart"));
const singleAmount = JSON.parse(localStorage.getItem("singleAmount"));

let price = 0;
let individualPrice= 0;
let setPrice = [];
let singlePrice = [];
let counter = 0;

if(parseCart){
  for(let i = 0; i < parseCart.length; i++){
    for(let j = 0; j < parseCart[i].length; j++){
      individualPrice = individualPrice + Number(parseCart[i][j][2].replaceAll(/원|,/g, ""));
      if(j == 2){
        setPrice.push(individualPrice);
        individualPrice = 0;
      }
    } 
  }
}

for(let i = 0; i < singleCart.length; i++){
  individualPrice = Number(singleAmount[i]) * Number(singleCart[i][2].replaceAll(/원|,/g, ""));
  singlePrice.push(individualPrice);
}

while(counter < setPrice.length){
  price = price + setPrice[counter] * amount[counter];
  counter++
}

counter = 0;

while(counter < singlePrice.length){
  price = price + singlePrice[counter];
  counter++;
}
wholePrice.innerText = "￦" + price.toLocaleString("ko-KR");
//--------------------------------------------------------------
const orderList = document.querySelector(".order-list");

orderList.addEventListener("click", () =>{
  location.href = "/content/kiosk/fast-food/html/order-list.html";
})