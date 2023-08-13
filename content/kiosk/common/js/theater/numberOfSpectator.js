import {SUBJECTNUM, NOQUESTION, QUESTION3, QUESTIONOPTION, OPTION, AMOUNT, BASIC, TEENAGER, DISABLED, OLDMAN} from '/content/kiosk/common/js/utils/key.js';
const number = document.querySelectorAll(".num");
const customerType = document.querySelectorAll(".type");
const wholeNumber = document.querySelector(".whole-number");
const complete = document.querySelector(".complete");
let sum = 0;
let amount = [];
let option = JSON.parse(localStorage.getItem(OPTION));

let customerTypeArr = [];
let arr = [];

let basic = [];
let teenager = [];
let disabled = [];
let oldMan = [];

let typeArr = [basic, teenager, disabled, oldMan];
const key = [BASIC, TEENAGER, DISABLED, OLDMAN]
const type = ["일반", "청소년", "장애인", "경로우대"];

// for(let i = 0; i < key.length; i++){
//   if(localStorage.getItem(key[i])){
//     customerTypeArr.push(type[i]);
//   }
// }

const subjectNum = localStorage.getItem(SUBJECTNUM);

// if(!localStorage.getItem(NOQUESTION)){
  const qiestionCustomerType = localStorage.getItem(QUESTION3);
  const questionNumber = localStorage.getItem(QUESTIONOPTION).replace("매", "");
// }

if(!localStorage.getItem(BASIC)){
  number[0].classList.add("focus");
}
if(!localStorage.getItem(TEENAGER)){
  number[9].classList.add("focus");
}
if(!localStorage.getItem(DISABLED)){
  number[18].classList.add("focus");
}
if(!localStorage.getItem(OLDMAN)){
  number[27].classList.add("focus");
}

for(let i = 0; i < number.length; i++){
    if(i < 9 && localStorage.getItem(BASIC)){
      if(number[i].innerText == JSON.parse(localStorage.getItem(BASIC))[0]){
        number[i].classList.add("focus");
          customerTypeArr[0] = "일반";
          amount[0] = JSON.parse(localStorage.getItem(BASIC))[0];
          localStorage.setItem(AMOUNT, JSON.stringify(amount));
        // }
      }
    }
    if(i > 8 && i < 18 && localStorage.getItem(TEENAGER)){
      if(number[i].innerText == JSON.parse(localStorage.getItem(TEENAGER))[0]){
        number[i].classList.add("focus");
        customerTypeArr[1] = "청소년";
        amount[1] = JSON.parse(localStorage.getItem(TEENAGER))[0];
        localStorage.setItem(AMOUNT, JSON.stringify(amount));
      }
    }
    if(i > 17 && i < 26 && localStorage.getItem(DISABLED)){
      if(number[i].innerText == JSON.parse(localStorage.getItem(DISABLED))[0]){
        number[i].classList.add("focus");
          customerTypeArr[2] = "장애인";
          amount[2] = JSON.parse(localStorage.getItem(DISABLED))[0];
          localStorage.setItem(AMOUNT, JSON.stringify(amount));
      }
    }
    if(i > 27 && localStorage.getItem(OLDMAN)){
      if(number[i].innerText == JSON.parse(localStorage.getItem(OLDMAN))[0]){
        number[i].classList.add("focus");
          customerTypeArr[3] = "경로우대";
          amount[3] = JSON.parse(localStorage.getItem(OLDMAN))[0];
          localStorage.setItem(AMOUNT, JSON.stringify(amount));
      }
    }
  }

  for(let i = 0; i < number.length; i++){
  number[i].addEventListener("click", () => {
    if(i < 9 && !localStorage.getItem(BASIC)){
      if(number[i].innerText != 0){
        basic.push(Number(number[i].innerText));
        localStorage.setItem(BASIC, JSON.stringify(basic));
        location.reload();
      }
    }
    else if(i > 8 && i < 18 && !localStorage.getItem(TEENAGER)){
      if(number[i].innerText != 0){
        teenager.push(Number(number[i].innerText));
        localStorage.setItem(TEENAGER, JSON.stringify(teenager));
        location.reload();
      }
    }
    else if(i > 17 && i < 26 && !localStorage.getItem(DISABLED)){
      if(number[i].innerText != 0){
        disabled.push(Number(number[i].innerText));
        localStorage.setItem(DISABLED, JSON.stringify(disabled));
        location.reload();
      }
    }
    else if(i > 27 && !localStorage.getItem(OLDMAN)){
      if(number[i].innerText != 0){
        oldMan.push(Number(number[i].innerText));
        localStorage.setItem(OLDMAN, JSON.stringify(oldMan));
        location.reload();
      }
    }
  })
  if(i < 9 && localStorage.getItem(BASIC)){
    number[i].addEventListener("click", () => {
      basic.pop();
      if(number[i].innerText == 0){
        localStorage.removeItem(BASIC)
      }
      else{
        basic.push(Number(number[i].innerText));
        localStorage.setItem(AMOUNT, JSON.stringify(amount));
        localStorage.setItem(BASIC, JSON.stringify(basic));
        // amount[0] = "";
      }
      location.reload();
    })
  }
  else if(i > 8 && i < 18 && localStorage.getItem(TEENAGER)){
    number[i].addEventListener("click", () => {
      teenager.pop();
      // amount[1] = "";
      if(number[i].innerText == 0){
        localStorage.removeItem(TEENAGER)
      }
      else{
        teenager.push(Number(number[i].innerText));
        localStorage.setItem(AMOUNT, JSON.stringify(amount));
        localStorage.setItem(TEENAGER, JSON.stringify(teenager));
      }
      location.reload();
    })
  }
  else if(i > 17 && i < 26 && localStorage.getItem(DISABLED)){
    number[i].addEventListener("click", () => {
      disabled.pop();
      // amount[2] = "";
      if(number[i].innerText == 0){
        localStorage.removeItem(DISABLED)
      }
      else{
        disabled.push(Number(number[i].innerText));
        localStorage.setItem(AMOUNT, JSON.stringify(amount));
        localStorage.setItem(DISABLED, JSON.stringify(disabled));
      }
      location.reload();
    })
  }
  else if(i > 26 && localStorage.getItem(OLDMAN)){
    number[i].addEventListener("click", () => {
      oldMan.pop();
      // amount[3] = "";
      if(number[i].innerText == 0){
        localStorage.removeItem(OLDMAN)
      }
      else{
        oldMan.push(Number(number[i].innerText));
        localStorage.setItem(AMOUNT, JSON.stringify(amount));
        localStorage.setItem(OLDMAN, JSON.stringify(oldMan));
      }
      location.reload();
    })
  }
}

for(let i = 0; i < amount.length; i++){
  if(amount[i] == undefined){
    amount[i] = 0;
  }
  sum = sum + amount[i];
}
wholeNumber.innerText = sum;

complete.addEventListener("click", () => {
  if(!localStorage.getItem(NOQUESTION)){
    if(amount[type.indexOf(qiestionCustomerType)] == questionNumber && wholeNumber.innerText == questionNumber){  
      amount = [];
      for(let i = 0; i < JSON.parse(localStorage.getItem(AMOUNT)).length; i++){
        if(JSON.parse(localStorage.getItem(AMOUNT))[i] != null){
          arr.push(customerTypeArr[i]);
          amount.push(JSON.parse(localStorage.getItem(AMOUNT))[i]);
        }
      }
    if(!option[1]){
      option.push(arr);
      option.push(amount);
      localStorage.setItem(OPTION, JSON.stringify(option));
    }
    else{
      option[1] = arr;
      option[2] = amount;
      localStorage.setItem(OPTION, JSON.stringify(option));
    }
      if(subjectNum == 2){
        alertFunc();
      }
      else{
        location.href = "/content/kiosk/common/html/theater/seat.html";
      }
    }
    else{
      wrong();
    }
  }
  else{
    amount = [];
    for(let i = 0; i < JSON.parse(localStorage.getItem(AMOUNT)).length; i++){
      if(JSON.parse(localStorage.getItem(AMOUNT))[i] != null){
        arr.push(customerTypeArr[i]);
        amount.push(JSON.parse(localStorage.getItem(AMOUNT))[i]);
      }
    }
  if(!option[1]){
    option.push(arr);
    option.push(amount);
    localStorage.setItem(OPTION, JSON.stringify(option));
  }
  else{
    option[1] = arr;
    option[2] = amount;
    localStorage.setItem(OPTION, JSON.stringify(option));
  }
    localStorage.removeItem(BASIC);
    localStorage.removeItem(TEENAGER);
    localStorage.removeItem(DISABLED);
    localStorage.removeItem(OLDMAN);
    location.href = "/content/kiosk/common/html/theater/seat.html";
  }
})

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
      location.href = "/content/kiosk/common/html/main-category.html";
    }
    else if(result.isDismissed){
      localStorage.setItem(SUBJECTNUM, Number(localStorage.getItem(SUBJECTNUM)) + 1);
      location.href = "/content/kiosk/common/html/example/example.html";
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