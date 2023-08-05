const nameInput = document.querySelector("#name");
let name_check = document.querySelector('#name_check');
const emailInput = document.querySelector("#email");
let email_check = document.querySelector('#email_check');
const email_list = document.querySelector('#email_list');
const email_txt = document.querySelector('#email_txt');
const submit = document.querySelector("#submit");
const year = document.querySelector("#year");
const month = document.querySelector('#month');
const day = document.querySelector('#day');

//이름
function IsEmpty(input, errorLabel, errorMessage){
  if(input.value == ""){
    errorLabel.innerText =errorMessage +"입력해주세요.";
  }
  else if(input.value.includes(" ")){
    errorLabel.innerText = "공백이 포함되어 있습니다!";
    errorLabel.style.color = "red";
    input.style.border = "2px solid red";
  }
  else
  {
    errorLabel.innerText ="";
    errorLabel.style.color = "black";
    input.style.border = "1px solid #ccc";
  }
}
//이메일

email_list.addEventListener('change', (event) => {
  if(event.target.value !== "type") {
    email_txt.value = event.target.value
    email_txt.disabled = true
  } else {
    email_txt.value = ""
    email_txt.disabled = false
  }
})

function submit_btn(){
  localStorage.setItem('name', nameInput.value);
  if(email_txt.disabled = false){
  localStorage.setItem('email',emailInput.value+'@'+email_list.value)
  }
  else{
    localStorage.setItem('email',emailInput.value+'@'+email_txt.value)
  }
  localStorage.setItem('ymd', year.value + month.value + day.value);
}

nameInput.addEventListener('input',() => IsEmpty(nameInput, name_check, "성함"));
emailInput.addEventListener('input',() => IsEmpty(emailInput, email_check, "이메일"));
email_txt.addEventListener('input',() => IsEmpty(email_txt, email_check, "이메일 주소") )

submit.addEventListener('click', submit_btn);

/* 수정해야 할 것 
1. 제출버튼 누를 시 새로고침 되는 것
2. 제출버튼 누를 시 올바르게 정보를 입력했는지 검사 ? (알림창)*/


