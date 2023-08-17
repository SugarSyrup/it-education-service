const id_Make = document.querySelector('#id_Make');
const id_Btn = document.querySelector('#id_Btn');
const id_Msg = document.querySelector('#id_Msg');
const pwd_Text = document.querySelector('#pwd_Text');
const pwd_Text_Check = document.querySelector('#pwd_Text_Check');
const pwd_Msg = document.querySelector('#pwd_Msg');
const pwd_Btn = document.querySelector('#pwd_Btn');
const pwd_Msg_Check = document.querySelector("#pwd_Msg_Check");
let pwd_check = 0;
let pwd_check_ = 0;
let id_check = 0;
//조건 : 아이디 6~12자, 영문,숫자 조합, 특수문자 X

  function id_Check(input) {
    const reid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    id_check = reid.test(input);
    if(id_check == 1){
      id_Msg.style.color = "white";
      id_Msg.innerText = "중복확인을 눌러주세요"
    }
    else{
      id_Msg.style.color = "red";
      id_Msg.innerText = "6~12자의 영어,대문자,소문자를 조합해주세요"
    }
  };

  function id_Create(event){
    event.preventDefault();
    if(id_check == 1){
      Swal.fire({
        title: '사용 가능한 아이디 입니다!',
        icon: 'success'
      })
      localStorage.setItem('ID', id_Make.value);
    }
    else {  
      Swal.fire({
        title: '다시 확인해 주세요',
        icon: 'error',
        text: '사용 불가능한 아이디 입니다.',
      })
    }
  }

id_Make.addEventListener('input',() => id_Check(id_Make.value))

id_Btn.addEventListener('click', id_Create)

//비밀번호

function pwd_Text_True(input){
  const re_pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~]{8,}(?:(?!.*([A-Za-z\d])\1\1).)*$/;
  pwd_check = re_pw.test(input);
  if(pwd_check == 1){
    pwd_Msg.innerText = "사용가능합니다!"
  }
  else{
    pwd_Msg.innerText = "비밀번호는 8자 이상,영문 대/소문자, 숫자, 특수문자 중 적어도 하나를 포함해야 하며, 같은 문자가 연속으로 3번 이상 나오면 안 됩니다."
  }
}

function pwd_Text_Check_function(){
  if(pwd_Text.value == pwd_Text_Check.value){
    pwd_Msg_Check.style.color ="white";
    pwd_Msg_Check.innerText = '일치합니다.';
    pwd_check_ = 1;
  }
  
  else{
    pwd_Msg_Check.style.color ="red";
    pwd_Msg_Check.innerText = '비밀번호가 일치하지 않습니다. 다시 확인해주세요'
  }
}

function pwd_Btn_Click(event){
  event.preventDefault();
  if(pwd_check == 1 && pwd_check_ == 1){
    Swal.fire({
      title: '성공!',
      icon: 'success'
    })
    localStorage.setItem("pwd", pwd_Text.value);
  }
  else{
    Swal.fire({
      title: ' 다시 확인해 주세요!',
      icon: 'error'
    })
  }
}

pwd_Text.addEventListener('input', () => pwd_Text_True(pwd_Text.value));

pwd_Text_Check.addEventListener('input', pwd_Text_Check_function)

pwd_Btn.addEventListener('click', pwd_Btn_Click)

function goBack() {
  console.log("back");
  window.history.back();
}
