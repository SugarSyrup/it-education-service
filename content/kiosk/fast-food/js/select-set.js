const setImg = document.querySelector(".set-img");
const singleImg = document.querySelector(".single-img");
const options = document.querySelectorAll(".option");
const OPTION = "option";
const SETOPTIN = "setOption";
const SETCATEGORYNUM ="setCategoryNum";
const SINGLECART = "singleCart";

const setImgArr = ["/content/kiosk/img/fast-food/set/1955-set.png", "/content/kiosk/img/fast-food/set/bacon-tomato-set.png", "/content/kiosk/img/fast-food/set/bigmac-set.png", "/content/kiosk/img/fast-food/set/cheese-set.png", "/content/kiosk/img/fast-food/set/bulgogi-set.png", "/content/kiosk/img/fast-food/set/crispy-set.png", "/content/kiosk/img/fast-food/set/quaterpound-set.png", "/content/kiosk/img/fast-food/set/shrimp-set.png"];
const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];
const singleImgArr = ["/content/kiosk/img/fast-food/buger/1955.png", "/content/kiosk/img/fast-food/buger/bacon-tomato-buger.png", "/content/kiosk/img/fast-food/buger/big-mac.png", "/content/kiosk/img/fast-food/buger/cheese-buger.png", "/content/kiosk/img/fast-food/buger/bulgogi-buger.png", "/content/kiosk/img/fast-food/buger/crispy-buger.png", "/content/kiosk/img/fast-food/buger/quarter-pound.png", "/content/kiosk/img/fast-food/buger/shrimp-buger.png"];

let singleCart = [];

const buger = JSON.parse(localStorage.getItem(OPTION));
let arrIndex = bugerNameArr.indexOf(buger[1]);

setImg.setAttribute("src", setImgArr[arrIndex]);
singleImg.setAttribute("src", singleImgArr[arrIndex]);

const checkLocal = localStorage.getItem(SETOPTIN);

parseCart = JSON.parse(localStorage.getItem(SINGLECART));

if(!checkLocal){
  for(let i = 0; i < options.length; i++){
    options[i].addEventListener("click", () => {
      if(options[i].classList[0] == "set"){
        // console.log("aa");
        buger.push(setImgArr[arrIndex]);
        localStorage.setItem(OPTION, JSON.stringify(buger));
        localStorage.setItem(SETCATEGORYNUM, 1);
        location.href = "/content/kiosk/fast-food/html/set-option.html";
        localStorage.setItem(SETOPTIN, options[i].classList[0]);
      }
      else{
        // if(!parseCart){
        //   singleCart.push(buger);
        //   localStorage.setItem(SINGLECART, JSON.stringify(singleCart));
        // }
        // else{
        //   parseCart.push(buger);
        //   localStorage.setItem(SINGLECART, JSON.stringify(parseCart));
        // }
        // localStorage.removeItem(OPTION);
        location.href = "/content/kiosk/fast-food/html/individual-option.html";
      }
    })
  }
}
else{
  localStorage.removeItem(SETOPTIN);
}