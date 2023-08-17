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
const divBox = document.querySelector('.email_box');
const box_email_Btn = document.querySelector('.box_email_button');
const hint_box = document.querySelector('.hint_box');
const nextBtn = document.querySelector('.queston');
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
    errorLabel.style.color = "white";
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
    Swal.fire({
      title: '실패!',
      icon: 'error',
      text: '이름과 이메일을 다시 확인해 주세요!',
    })
  }
  else{
    Swal.fire({
      title: '성공!',
      icon: 'success'
    })
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
// email_txt.addEventListener('input',() => IsEmpty(email_txt, email_check, "이메일 주소") )

submit.addEventListener('click', submit_btn);
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


