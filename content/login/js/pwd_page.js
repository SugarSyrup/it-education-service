const pwd_Text = document.querySelector('#pwd_Text');
const pwd_Text_Check = document.querySelector('#pwd_Text_Check');
const pwd_Msg = document.querySelector('#pwd_Msg');
const pwd_Btn = document.querySelector('#pwd_Btn');
const pwd_Msg_Check = document.querySelector("#pwd_Msg_Check");
let check = 0;
let check_ = 0;


function pwd_Text_True(input){
  const re_pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~]{8,}(?:(?!.*([A-Za-z\d])\1\1).)*$/;
  check = re_pw.test(input);
  if(check == 1){
    pwd_Msg.innerText = "성공입니다."
  }
  else{
    pwd_Msg.innerText = "조건을 확인 후 다시 입력해주세요"
  }
}

function pwd_Text_Check_function(){
  if(pwd_Text.value == pwd_Text_Check.value){
    pwd_Msg_Check.innerText = '일치합니다.';
    check_ = 1;
  }
  else{
    pwd_Msg_Check.innerText = '다시 확인해주세요'
  }
}

function pwd_Btn_Click(event){
  event.preventDefault();
  if(check == 1 && check_ == 1){
    alert("생성 되었습니다.");
    localStorage.setItem("pwd", pwd_Text.value);
  }
  else{
    alert("다시 확인해주세요");
  }
}

pwd_Text.addEventListener('input', () => pwd_Text_True(pwd_Text.value));

pwd_Text_Check.addEventListener('input', pwd_Text_Check_function)

pwd_Btn.addEventListener('click', pwd_Btn_Click)

/*  1. 비밀번호 요구사항 설명
    2. 특수문자 사용 설명
    3. 사용하지 말아야 할 비밀번호 (예시 abc1234)
    4. 비밀번호 강도 평가?..시도 해보기*/