const id_Make = document.querySelector('#id_Make');
const id_Btn = document.querySelector('#id_Btn');
const id_Msg = document.querySelector('#id_Msg');
let check = 0;
//조건 : 아이디 6~12자, 영문,숫자 조합, 특수문자 X

  /* if(input.length >= 6 && input.length <= 12) */
  function id_Check(input) {
    const reid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    check = reid.test(input);
    if(check == 1){
      id_Msg.style.color = "green";
      id_Msg.innerText = "중복확인을 눌러주세요"
    }
    else{
      id_Msg.style.color = "red";
      id_Msg.innerText = "6~12자의 영어,대문자,소문자를 조합해주세요"
    }
  };

  function id_Create(event){
    event.preventDefault();
    if(check == 1){
      alert("사용가능한 아이디 입니다!")
      localStorage.setItem('ID', id_Make.value);
    }
    else
      alert("사용 불가능한 아이디 입니다.");
  }

id_Make.addEventListener('input',() => id_Check(id_Make.value))

id_Btn.addEventListener('click', id_Create)

//1.아이디 생성 규칙 안내 문구
//2.예시 아이디
//3.자주 묻는 질문(FAQ)