const nameInput = document.querySelector("#name");
const name_check = document.querySelector("#name_check");
const emailInput = document.querySelector("#email");
const email_check = document.querySelector("#email_check");
const email_list = document.querySelector("#email_list");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const submit_Btn = document.querySelector("#submit");
const box_email_Btn = document.querySelector('.box_email_button');
const hint_box = document.querySelector('.hint_box');
let check = 0;

const name_x = /^[ㄱ-ㅎ]|[가-힣]{1,4}$/;
const name_y = /^[a-z|A-Z|0-9]+$/;

nameInput.addEventListener("input", function(){
  if(nameInput.value.includes(" ")){
    name_check.style.color = "red";
    name_check.innerText = "공백이 포함되어 있습니다";
    check = 0;
  }
  else if(name_x.test(nameInput.value) == false){
    name_check.style.color = "red";
    name_check.innerText = "한글로 입력해주세요";
    check = 0;
  }
  else{
    name_check.style.color = "black";
    name_check.innerText = "";
    check = 1;
  }
})

emailInput.addEventListener("input", function(){
  if(emailInput.value.includes(" ")){
    email_check.style.color = "red";
    email_check.innerText = "공백이 포함되어 있습니다";
    check = 0;
  }
  else if(name_y.test(emailInput.value) == false){
    email_check.style.color = "red";
    email_check.innerText = "영어로 입력해주세요";
    check = 0;
  }
  else{
    email_check.style.color = "black";
    email_check.innerText = "";
    check = 1;
  }
})

email_list.addEventListener("click", function(){
  if(email_list.value == "type"){
    email_check.style.color = "red";
    email_check.innerText = "메일 주소를 입력해주세요";
    check = 0;
  }
  else{
    email_check.style.color = "black";
    email_check.innerText = "";
    check = 1;
  }
})

submit_Btn.addEventListener("click", function(event){
  event.preventDefault();
  if(check == 0){
    Swal.fire({
      title: '실패!',
      icon: 'error',
      text: '이름과 이메일을 다시 확인해 주세요!',
    })
  }
  else{
    if(year.value == "" || day.value == "" || month.value == ""){
      Swal.fire({
        title: '실패!',
        icon: 'error',
        text: '생년월일을 입력해주세요!',
      })
    }
    else{
      Swal.fire({
        title: '성공!',
        icon: 'success',
      })
      localStorage.setItem('name', nameInput.value);
      localStorage.setItem('ymd', year.value + month.value + day.value);
      localStorage.setItem('email', emailInput.value +'@'+email_list.value)
    }
  }
})

box_email_Btn.addEventListener('click', (event) => {
  event.preventDefault();
  if(hint_box.classList[1] == "remove"){
    hint_box.classList.remove("remove");
  }
  else{
    hint_box.classList.add("remove");
  }
})

function goBack() {
  window.history.back();
}


