import {SUBJECTNUM, CATEGORYNUM, CLASSNAME, REMOVE} from "../js/utils/key.js";

const category = document.querySelectorAll(".category");
const learningFirst = document.querySelector(".learning-from-scratch");
const className = localStorage.getItem(CLASSNAME);

const subjectArr = ["1. 매장 / 포장", "2. 메뉴 선택", "3. 단품 주문하기", "4. 세트 상품 주문하기", "5. 주문내역 확인", "6. 상품 취소하기", "7. 추가 주문하기", "8. 주문 하기", "9. 결제 방법 선택하기", "10. 연습하기"];
const cafeSubjectArr = ["1. 매장 / 포장", "2. 메뉴 선택", "3. 메뉴 주문하기", "4. 주문내역 확인", "5. 상품 취소하기", "6. 추가 주문하기", "7. 주문 하기", "8. 결제 방법 선택하기", "9. 연습하기"];
const theaterSubjectArr = ["1. 영화 선택", "2. 시간 선택", "3. 예매 매수 선택", "4. 좌석 선택","5. 예매 하기", "6. 결제 수단 선택", "7. 연습하기"];

  for(let i = 0; i < category.length; i++){
    if(className == "fast-food"){
        category[i].innerText = subjectArr[i];
      }
      else if(className == "cafe"){
        category[i].innerText = cafeSubjectArr[i];
        if(cafeSubjectArr[i] == undefined){
          category[i].remove();
        }
      }
      else{
        category[i].innerText = theaterSubjectArr[i];
        if(theaterSubjectArr[i] == undefined){
          category[i].remove();
        }
      }
      category[i].addEventListener("click", () => {
        localStorage.setItem(SUBJECTNUM, i);
        location.href = "../html/example/example.html";
      })
  }

  learningFirst.addEventListener("click", () => {
    localStorage.setItem(SUBJECTNUM, 0);
    location.href = "../html/example/example.html";
  })