import {SUBJECTNUM, SINGLECART, SINGLEAMOUNT, CLASSNAME, REMOVE, NOQUESTION} from '/content/kiosk/common/js/utils/key.js';

const subject = document.querySelector(".subject");
const questionBtn = document.querySelector(".questionBtn");
const noQuestionBtn = document.querySelector(".noQuestion");

const subjectArr = ["1. 매장 / 포장", "2. 메뉴 선택", "3. 단품 주문하기", "4. 세트 상품 주문하기", "5. 주문내역 확인", "6. 상품 취소하기", "7. 추가 주문하기", "8. 주문 하기", "9. 결제 방법 선택하기", "10. 연습하기"];
const cafeSubjectArr = ["1. 매장 / 포장", "2. 메뉴 선택", "3. 메뉴 주문하기", "4. 주문내역 확인", "5. 상품 취소하기", "6. 추가 주문하기", "7. 주문 하기", "8. 결제 방법 선택하기", "9. 연습하기"];



const subjectNum = localStorage.getItem(SUBJECTNUM);
const className = localStorage.getItem(CLASSNAME);

let parseSingle = [];
let singleAmount = [1];
let parseCafe = [];
let cafeAmount = [1];
const arr = ["/content/kiosk/img/fast-food/buger/1955.png", "1955 버거", "7,200원"];
const cafeArr = ["/content/kiosk/img/cafe/coffee/americano-hot.jpg", "아메리카노", "4,000원", "핫", "레귤러", "기본"];

const questionArr = ["/content/kiosk/common/html/select-place.html", "/content/kiosk/common/html/practice-category.html", "/content/kiosk/common/html/practice-category.html", "/content/kiosk/common/html/practice-category.html", "/content/kiosk/common/html/practice-category.html", "/content/kiosk/common/html/order-list.html", "/content/kiosk/common/html/order-list.html", "/content/kiosk/common/html/order-list.html", "/content/kiosk/common/html/payment-method.html", "/content/kiosk/common/html/select-place.html"];
const cafeQuestionArr = ["/content/kiosk/common/html/select-place.html", "/content/kiosk/common/html/practice-category.html", "/content/kiosk/common/html/practice-category.html", "/content/kiosk/common/html/practice-category.html", "/content/kiosk/common/html/order-list.html", "/content/kiosk/common/html/order-list.html", "/content/kiosk/common/html/order-list.html", "/content/kiosk/common/html/payment-method.html", "/content/kiosk/common/html/select-place.html"];

if(subjectNum > 8 && noQuestionBtn != null){
  noQuestionBtn.classList.remove(REMOVE);
  noQuestionBtn.addEventListener("click", () => {
    localStorage.setItem(NOQUESTION, "no");
    location.href = "/content/kiosk/common/html/select-place.html";
  })
}
else if(questionBtn){
  questionBtn.style.width = "100%";
}


if(questionBtn){
  if(className == "fast-food"){
    subject.innerText = subjectArr[subjectNum];
    
    questionBtn.addEventListener("click", () => {
      if(subjectNum > 4 && subjectNum < 8){
        parseSingle.push(arr);
        localStorage.setItem(SINGLEAMOUNT, JSON.stringify(singleAmount));
        localStorage.setItem(SINGLECART, JSON.stringify(parseSingle));
      }
      location.href = questionArr[subjectNum];
    })
  }
  
  
  if(className == "cafe"){
    if(subjectNum >= 4){
      subject.innerText = cafeSubjectArr[subjectNum -1];
    }
    else{
      subject.innerText = cafeSubjectArr[subjectNum];
    }
    questionBtn.addEventListener("click", () => {
      if(subjectNum > 4 && subjectNum < 8){
        parseCafe.push(cafeArr);
        localStorage.setItem(SINGLEAMOUNT, JSON.stringify(cafeAmount));
        localStorage.setItem(SINGLECART, JSON.stringify(parseCafe));
      }
    location.href = cafeQuestionArr[subjectNum];
    if(subjectNum >= 4){
      location.href = cafeQuestionArr[subjectNum - 1];
    }
    })
  }
}