const imgs = document.querySelectorAll("img");
const menuName = document.querySelectorAll(".menu-name");
const className = localStorage.getItem("className");
const category = document.querySelectorAll(".category-li");

const CATEGORYNUM = "categoryNum";
const REMOVE = "remove";
const OPTIONIMG = "optionImg";
const OPTIONNAME = "optionName";

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
    localStorage.setItem(OPTIONIMG, cafeMenuArr[categoryNum][i]);
    localStorage.setItem(OPTIONNAME, cafeMenuNameArr[categoryNum][i]);
    location.href ="/content/kiosk/cafe/html/option.html";
    })
  }
}
// ----------------------------------------------------------------------cafe

const bugerArr = ["/content/kiosk/img/fast-food/buger/1955.png", "/content/kiosk/img/fast-food/buger/bacon-tomato-buger.png", "/content/kiosk/img/fast-food/buger/big-mac.png", "/content/kiosk/img/fast-food/buger/cheese-buger.png", "/content/kiosk/img/fast-food/buger/bulgogi-buger.png", "/content/kiosk/img/fast-food/buger/crispy-buger.png", "/content/kiosk/img/fast-food/buger/quater-pound.png", "/content/kiosk/img/fast-food/buger/shrimp-buger.png"];
const fastFoodDessertArr = ["/content/kiosk/img/fast-food/dessert/icecream.png"];
const drinkArr = ["/content/kiosk/img/fast-food/drink/americano.png", "/content/kiosk/img/fast-food/drink/coke.png", "/content/kiosk/img/fast-food/drink/juice.png", "/content/kiosk/img/fast-food/drink/sprite.png", "/content/kiosk/img/fast-food/drink/vanilla-shake.png"];
const snackArr = ["/content/kiosk/img/fast-food/snack/cheese-stick.png", "/content/kiosk/img/fast-food/snack/chicken-nugget.png", "/content/kiosk/img/fast-food/snack/chicken-wing.png", "/content/kiosk/img/fast-food/snack/french-fries.png", "/content/kiosk/img/fast-food/snack/kohlslow.png"];
const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];
const fastFoodDessertNameArr = ["아이스크림"];
const drinkNameArr = ["아메리카노", "콜라", "주스", "사이다", "바닐라 쉐이크"];
const snackNameArr = ["치즈스틱", "치킨 너겟", "치킨 윙", "감자튀김", "코울슬로"];

const fastFoodMenuArr = [bugerArr, snackArr, drinkArr, fastFoodDessertArr];
const fastFoodNameArr = [bugerNameArr, snackNameArr, drinkNameArr, fastFoodDessertNameArr];

const fastFoodCategoryTitle = ["햄버거", "사이드", "음료", "디저트"]

if(className == "fast-food"){
  for(let i = 0; i < category.length; i++){
    category[i].innerText = fastFoodCategoryTitle[i];
    category[i].addEventListener("click", () => {
      localStorage.setItem(CATEGORYNUM, category[i].classList[1]);
      location.reload();
    })
  }
  for(let i = 0; i < imgs.length; i++){
    imgs[i].setAttribute("src", fastFoodMenuArr[categoryNum][i]);
    menuName[i].innerText = fastFoodNameArr[categoryNum][i];
    if(fastFoodMenuArr[categoryNum][i] == undefined || fastFoodNameArr[categoryNum][i] == undefined){
      imgs[i].classList.add(REMOVE);
      menuName[i].classList.add(REMOVE);
    }
    else{
      imgs[i].classList.remove(REMOVE)
      menuName[i].classList.remove(REMOVE);
    }
    imgs[i].addEventListener("click", () => {
    localStorage.setItem(OPTIONIMG, fastFoodMenuArr[categoryNum][i]);
    localStorage.setItem(OPTIONNAME, fastFoodNameArr[categoryNum][i]);
    location.href ="/content/kiosk/fast-food/html/set-option.html";
    })
  }
}
//-----------------------------------------------------fast-food
