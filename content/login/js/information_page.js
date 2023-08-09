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
let check = 0;

//이름
function IsEmpty(input, errorLabel, errorMessage){
  if(input.value == ""){
    errorLabel.innerText =errorMessage +"입력해주세요.";
    check = 0;
  }
  else if(input.value.includes(" ")){
    errorLabel.innerText = "공백이 포함되어 있습니다!";
    errorLabel.style.color = "red";
    input.style.border = "2px solid red";
    check = 0;
  }
  else
  {
    errorLabel.innerText ="";
    errorLabel.style.color = "black";
    input.style.border = "1px solid #ccc";
    check = 1;
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

function submit_btn(event){
  event.preventDefault();
  if(check == 0){
    alert("정보가 잘못 되었습니다. 다시 입력해주세요");
  }
  else{
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('ymd', year.value + month.value + day.value);
    if(email_txt.disabled = false){
    localStorage.setItem('email',emailInput.value+'@'+email_list.value)
    }
    else{
    localStorage.setItem('email',emailInput.value+'@'+email_txt.value)
    }
  }
}

nameInput.addEventListener('input',() => IsEmpty(nameInput, name_check, "성함"));
emailInput.addEventListener('input',() => IsEmpty(emailInput, email_check, "이메일"));
email_txt.addEventListener('input',() => IsEmpty(email_txt, email_check, "이메일 주소") )

submit.addEventListener('click', submit_btn);
