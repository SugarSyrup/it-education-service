const setImg = document.querySelector(".set-img");
const singleImg = document.querySelector(".single-img");
const options = document.querySelectorAll(".option");
const OPTIONNAME = "optionName";
const SETOPTIN = "setOption";
const OPTIONIMG = "optionImg";
const SETCATEGORYNUM ="setCategoryNum";

const setImgArr = ["/content/kiosk/img/fast-food/set/1955-set.png", "/content/kiosk/img/fast-food/set/bacon-tomato-set.png", "/content/kiosk/img/fast-food/set/bigmac-set.png", "/content/kiosk/img/fast-food/set/cheese-set.png", "/content/kiosk/img/fast-food/set/bulgogi-set.png", "/content/kiosk/img/fast-food/set/crispy-set.png", "/content/kiosk/img/fast-food/set/quaterpound-set.png", "/content/kiosk/img/fast-food/set/shrimp-set.png"];
const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];
const singleImgArr = ["/content/kiosk/img/fast-food/buger/1955.png", "/content/kiosk/img/fast-food/buger/bacon-tomato-buger.png", "/content/kiosk/img/fast-food/buger/big-mac.png", "/content/kiosk/img/fast-food/buger/cheese-buger.png", "/content/kiosk/img/fast-food/buger/bulgogi-buger.png", "/content/kiosk/img/fast-food/buger/crispy-buger.png", "/content/kiosk/img/fast-food/buger/quarter-pound.png", "/content/kiosk/img/fast-food/buger/shrimp-buger.png"];

const bugerName = localStorage.getItem(OPTIONNAME);
let arrIndex = bugerNameArr.indexOf(bugerName);

setImg.setAttribute("src", setImgArr[arrIndex]);
singleImg.setAttribute("src", singleImgArr[arrIndex]);

const checkLocal = localStorage.getItem(SETOPTIN);
// console.log(setImg.parentElement.classList[0]);
if(!checkLocal){
  for(let i = 0; i < options.length; i++){
    options[i].addEventListener("click", () => {
      localStorage.setItem(SETOPTIN, options[i].classList[0]);
      location.reload();
    })
  }
  }
  else{
  localStorage.removeItem(SETOPTIN);
  }

  
  if(checkLocal == "set"){
    localStorage.setItem(OPTIONIMG, setImgArr[arrIndex]);
    localStorage.setItem(SETCATEGORYNUM, 1);
    location.href = "/content/kiosk/fast-food/html/set-option.html";
  }