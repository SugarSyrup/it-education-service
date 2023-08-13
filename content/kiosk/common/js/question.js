import {QUESTION, QUESTION2, QUESTION3, QUESTIONAMOUNT, QUESTIONOPTION, SUBJECTNUM, REMOVE, PLACE, PAY, CLASSNAME, NOQUESTION} from '/content/kiosk/common/js/utils/key.js';
const questionText = document.querySelectorAll(".question");
const questionAmount = document.querySelector(".questionAmount");
const questionTextBox = document.querySelector(".questionText");
const questionDiv = document.querySelectorAll(".div");


const bugerNameArr = ["1955 버거", "베이컨 버거", "빅맥", "치즈 버거", "불고기 버거", "크리스피 버거", "쿼터파운드 버거", "새우버거"];
const snackNameArr = ["치즈스틱", "치킨 너겟", "치킨 윙", "감자튀김", "코울슬로"];
const drinkNameArr = ["아메리카노", "콜라", "주스", "사이다", "바닐라 쉐이크"];
const fastFoodDessertNameArr = ["아이스크림"];

const coffeeNameArr = ["아메리카노", "카푸치노", "캬라멜 마키아토", "카페모카", "카페라떼", "바닐라라떼"];
const beverageNameArr = ["자몽 에이드", "레몬 에이드", "복숭아 아이스티", "딸기 주스", "딸기 스무디"];
const teaNameArr = ["캐모마일", "유자차", "홍차", "레몬차", "페퍼민트", "루이보스"];
const cafeDisserNametArr = ["당근 케이크", "초콜릿 케이크","녹차 케이크", "크로플", "마들렌"];

const movieNameArr = ["미션 임파서블", "밀수", "엘리멘탈", "바비", "더 문", "코난"];
const movieTimeArr = ["15:25 ~ 17:44", "16:50 ~ 19:05", "17:20 ~ 19:39", "18:00 ~ 20:19", "19:25 ~ 21:44"];
const customerFeatures = ["일반", "청소년", "장애인", "경로우대"];
const numberOfTicket = ["1매", "2매", "3매", "4매", "5매", "6매", "7매", "8매"];
const numArr = ["01", "02", "03", "04", "05", "06", "07"];
const seatArr = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K"];

const placeArr = [["매장에서 먹기", "매장"], ["포장 하기", "포장"]];
const setOption = [["세트", "set"], ["단품", "single"]];
const paymentArr = ["카드", "현금", "모바일 상품권", "포인트 사용"];

const temperture = ["핫", "아이스"];
const size = ["레귤러", "라지"];
const coffeeBean = ["기본", "디카페인"];

const cafeOptionArr = [temperture, size, coffeeBean];
const choiceArr = [bugerNameArr, snackNameArr, drinkNameArr, fastFoodDessertNameArr];
const cafeChoiceArr = [coffeeNameArr, teaNameArr, beverageNameArr, cafeDisserNametArr];

const randomNum =  Math.round((Math.random() * (choiceArr.length - 1) - 0) + 0); //0 ~ 3 
const randomNum2 = Math.round((Math.random() * (choiceArr[randomNum].length - 1) - 0) + 0);
const randomNum3 = Math.round((Math.random() * (5 - 1)) + 1); // 0 ~ 5
const randomNum4 = Math.round((Math.random() * (1 - 0) + 0)); // 0 ~ 1
const randomNum5 = Math.round((Math.random() * (paymentArr.length -1) - 0) + 0);
const randomNum6 = Math.round(Math.random() * ((placeArr.length - 1) - 0) + 0);
const randomNum7 = Math.round((Math.random() * (cafeChoiceArr.length - 1) - 0) + 0); 
const randomNum8 = Math.round((Math.random() * (cafeChoiceArr[randomNum7].length - 1) - 0) + 0);
const randomNum9 = Math.round((Math.random() * (cafeOptionArr.length - 1) - 0) + 0);
const randomNum10 = Math.round((Math.random() * (cafeOptionArr[randomNum9].length - 1) - 0) + 0);

const randomNum11 = Math.round((Math.random() * (movieNameArr.length -1)-0)+0);
const randomNum12 = Math.round((Math.random() * (movieTimeArr.length -1)-0)+0);
const randomNum13 = Math.round((Math.random() * (customerFeatures.length -1)-0)+0);
const randomNum14 = Math.round((Math.random() * (numArr.length -1)-0)+0);
const randomNum15 = Math.round((Math.random() * (seatArr.length -1)-0)+0);

let randomSnack = snackNameArr[Math.round((Math.random() * (snackNameArr.length - 1)) + 0)];
let randomBuger = bugerNameArr[Math.round((Math.random() * (snackNameArr.length - 1)) + 0)];
let randomDrink = drinkNameArr[Math.round((Math.random() * (snackNameArr.length - 1)) + 0)];

const subjectNum = localStorage.getItem(SUBJECTNUM);
const className = localStorage.getItem(CLASSNAME);

if(!localStorage.getItem(NOQUESTION)){ 
  if(className == "fast-food" || className == "cafe"){
    if(className == "fast-food"){
      if(subjectNum == 9 && !localStorage.getItem(PLACE) || subjectNum == 0 ){
        localStorage.setItem(QUESTION, JSON.stringify(placeArr[randomNum6]));
        questionText[0].innerText = placeArr[randomNum6];
        questionText[0].innerText = JSON.parse(localStorage.getItem(QUESTION))[0];
      }
    }
    else{
      if(subjectNum == 8 && !localStorage.getItem(PLACE) || subjectNum == 0){
        localStorage.setItem(QUESTION, JSON.stringify(placeArr[randomNum6]));
        questionText[0].innerText = JSON.parse(localStorage.getItem(QUESTION))[0];
      }
    }
  }

//----------------------------------------------------포장 매장
if(className == "fast-food"){
  if(subjectNum == 5){
    localStorage.setItem(QUESTION, "상품을 취소해 주세요");
    questionText[0].innerText = localStorage.getItem(QUESTION);
    questionDiv[1].classList.add(REMOVE);
  }
  else if(subjectNum != 5 && subjectNum < 8 && subjectNum != 0 || subjectNum == 9 && !localStorage.getItem(PAY)){
    if(!localStorage.getItem(QUESTION)){
      localStorage.setItem(QUESTION, choiceArr[randomNum][randomNum2]);
      localStorage.setItem(QUESTIONAMOUNT, randomNum3);
      if(subjectNum == 2){
        console.log("a");
        questionDiv[1].insertBefore(questionText[0], questionText[2]);
        questionDiv[0].remove();
        localStorage.setItem(QUESTIONOPTION, JSON.stringify(setOption[1]));
      }
      else if(subjectNum == 3){
        localStorage.setItem(QUESTIONOPTION, JSON.stringify(setOption[0]));
        if(JSON.parse(localStorage.getItem(QUESTIONOPTION))[0] == "세트"){
        localStorage.removeItem(QUESTION);
        }
      }
      else if(randomNum != 0){
        localStorage.setItem(QUESTIONOPTION, JSON.stringify(setOption[1]));
      }
      else{
        localStorage.setItem(QUESTIONOPTION, JSON.stringify(setOption[randomNum4]));
      }
    }
    if(localStorage.getItem(QUESTION2)){
      questionText[1].innerText = localStorage.getItem(QUESTION2);
      questionText[2].innerText = localStorage.getItem(QUESTION3);
    }
    if(localStorage.getItem(QUESTIONOPTION)){
      questionText[0].innerText = localStorage.getItem(QUESTION);
      questionText[3].innerText = JSON.parse(localStorage.getItem(QUESTIONOPTION))[0];
    }
  
    if(localStorage.getItem(QUESTIONOPTION)){
      if(JSON.parse(localStorage.getItem(QUESTIONOPTION))[0] == "세트" && !localStorage.getItem(QUESTION)){
        questionText[0].innerText = randomBuger;
        questionText[1].innerText = randomSnack;
        questionText[2].innerText = randomDrink;
        localStorage.setItem(QUESTION, questionText[0].innerText);
        localStorage.setItem(QUESTION2, questionText[1].innerText);
        localStorage.setItem(QUESTION3, questionText[2].innerText);
      }
    }
    if(localStorage.getItem(QUESTIONAMOUNT)){
      questionAmount.innerText = localStorage.getItem(QUESTIONAMOUNT) + "개";
    }
    if(subjectNum == 1){
      questionAmount.classList.add(REMOVE);
    }
  }
  if(localStorage.getItem(QUESTIONOPTION)){
    if(localStorage.getItem(QUESTION) && JSON.parse(localStorage.getItem(QUESTIONOPTION))[1] == "single"){
      questionDiv[1].insertBefore(questionText[0], questionText[2]);
      questionDiv[0].remove();
    }
  }
}
else if(className == "cafe"){
  if(subjectNum == 4){
    localStorage.setItem(QUESTION, "상품을 취소해 주세요");
    questionText[0].innerText = localStorage.getItem(QUESTION);
    questionDiv[1].classList.add(REMOVE);
  }
    else if(subjectNum != 4 && subjectNum < 7 && subjectNum != 0 || subjectNum == 8 && !localStorage.getItem(PAY)){
    if(!localStorage.getItem(QUESTION)){
      localStorage.setItem(QUESTION, cafeChoiceArr[randomNum7][randomNum8]);
      localStorage.setItem(QUESTIONAMOUNT, randomNum3);
      if(randomNum7 == 0){
        localStorage.setItem(QUESTION2, cafeOptionArr[0][randomNum10]);
        localStorage.setItem(QUESTION3, cafeOptionArr[1][randomNum10]);
        localStorage.setItem(QUESTIONOPTION, cafeOptionArr[2][randomNum10]);
      }
      else if(randomNum7 == 2){
        localStorage.setItem(QUESTION2, cafeOptionArr[0][1]);
        localStorage.setItem(QUESTION3, cafeOptionArr[1][1]);
        localStorage.setItem(QUESTIONOPTION, cafeOptionArr[2][randomNum10]);
        questionText[2].classList.add(REMOVE);
      }
      else if(randomNum7 == 3){
        questionText[2].classList.add(REMOVE);
        questionText[3].classList.add(REMOVE);
      }
      else{
        localStorage.setItem(QUESTION2, cafeOptionArr[0][0]);
        localStorage.setItem(QUESTION3, cafeOptionArr[1][0]);
        localStorage.setItem(QUESTIONOPTION, cafeOptionArr[2][randomNum10]);
      }
    }
    if(subjectNum != 0){ 
      if(localStorage.getItem(QUESTION) && localStorage.getItem(PLACE) || subjectNum < 8 ){
        questionText[0].innerText = localStorage.getItem(QUESTION);
        questionText[1].innerText = localStorage.getItem(QUESTION2);
        questionText[2].innerText = localStorage.getItem(QUESTION3);
        questionText[3].innerText = localStorage.getItem(QUESTIONOPTION);
        questionAmount.innerText = localStorage.getItem(QUESTIONAMOUNT) + "개";
      }
    }
    if(subjectNum == 1){
      questionAmount.classList.add(REMOVE);
    }
  }
}
else if(className == "movie"){
  if(subjectNum < 5 && subjectNum || subjectNum == 6 && !localStorage.getItem(PAY)){
    if(!localStorage.getItem(QUESTION)){
      localStorage.setItem(QUESTION, movieNameArr[randomNum11]);
      localStorage.setItem(QUESTION2, movieTimeArr[randomNum12]);
      localStorage.setItem(QUESTION3, customerFeatures[randomNum13]);
      localStorage.setItem(QUESTIONOPTION, numberOfTicket[0]);
      localStorage.setItem(QUESTIONAMOUNT, seatArr[randomNum15] + numArr[randomNum14]);
    }
    questionText[0].innerText = localStorage.getItem(QUESTION);
    questionText[1].innerText = localStorage.getItem(QUESTION2);
    questionText[2].innerText = localStorage.getItem(QUESTION3);
    questionText[3].innerText = localStorage.getItem(QUESTIONOPTION);
    questionAmount.innerText = localStorage.getItem(QUESTIONAMOUNT);
  
        if(subjectNum == 6 && !localStorage.getItem(QUESTION)){
          localStorage.removeItem(QUESTIONOPTION);
          localStorage.removeItem(QUESTIONAMOUNT);
          localStorage.removeItem(QUESTION2);
          localStorage.removeItem(QUESTION3);
          localStorage.setItem(QUESTION, paymentArr[randomNum5]);
          localStorage.setItem(PAY, "pay");  
        }
        if(subjectNum == 6 || subjectNum == 7 && localStorage.getItem(PAY)){
          if(!localStorage.getItem(QUESTIONOPTION)){
            for(let i = 1; i < questionText.length; i++){
              questionText[i].classList.add(REMOVE);
              questionAmount.classList.add(REMOVE);
              questionTextBox.style.justifyContent = "center";
            }
          }
          if(localStorage.getItem(PAY)){
            questionText[0].innerText = localStorage.getItem(QUESTION);
          }
        }
    }
  }
  ///------------------------------------------------------- 랜덤 주문 목록
  // if(!localStorage.getItem(NOQUESTION)){
  if(className == "fast-food"){
    if(subjectNum >= 8 && !localStorage.getItem(QUESTION)){
      localStorage.removeItem(QUESTIONOPTION);
      localStorage.removeItem(QUESTIONAMOUNT);
      localStorage.setItem(QUESTION, paymentArr[randomNum5]);
      localStorage.setItem(PAY, "pay");
    }
    if(localStorage.getItem(PAY)){
      questionText[0].innerText = localStorage.getItem(QUESTION);
    }
  }
  else if(className == "cafe"){
    if(subjectNum >= 7 && !localStorage.getItem(QUESTION)){
      localStorage.removeItem(QUESTIONOPTION);
      localStorage.removeItem(QUESTIONAMOUNT);
      localStorage.setItem(QUESTION, paymentArr[randomNum5]);
      localStorage.setItem(PAY, "pay");
    }
    if(localStorage.getItem(PAY)){
      questionText[0].innerText = localStorage.getItem(QUESTION);
    }
  }
  else{
    if(subjectNum >= 5  && !localStorage.getItem(QUESTION)){
      localStorage.removeItem(QUESTIONOPTION);
      localStorage.removeItem(QUESTIONAMOUNT);
      localStorage.setItem(QUESTION, paymentArr[randomNum5]);
      localStorage.setItem(PAY, "pay");
    }
    if(!localStorage.getItem(QUESTIONOPTION)){
        for(let i = 1; i < questionText.length; i++){
          questionText[i].classList.add(REMOVE);
          questionAmount.classList.add(REMOVE);
        }
      }
      if(localStorage.getItem(PAY)){
        questionText[0].innerText = localStorage.getItem(QUESTION);
      }
    }
  // }
  for(let i = 0; i < questionText.length; i++){
    if(questionText[i].innerText == "" && !localStorage.getItem(PAY)){
      questionText[i].classList.add(REMOVE);
    }
  }
//////----------------------------------결제 수단
}