const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const login_btn = document.querySelector(".login_btn");
const id_check = localStorage.getItem('ID');
const pw_check = localStorage.getItem('pwd');


login_btn.addEventListener("click", function(event){
  event.preventDefault();
  if(id.value === id_check && pw.value === pw_check){
    Swal.fire({
      title: '로그인 성공!',
      icon: 'success'
    })
  }
  else{
    Swal.fire({
      title: '실패!',
      icon: 'error',
      text: '아이디와 비밀번호를 다시 확인해 주세요!',
    })
  }
})

function goBack() {
  console.log("back");
  window.history.back();
}