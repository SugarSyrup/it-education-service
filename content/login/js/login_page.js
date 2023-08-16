const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const login_btn = document.querySelector(".login_btn");
const id_check = localStorage.getItem('ID');
const pw_check = localStorage.getItem('pwd');


login_btn.addEventListener("click", function(event){
  event.preventDefault();
  if(id.value === id_check && pw.value === pw_check){
    alert("로그인 성공!");
  }
  else{
    alert("다시 확인해주세요");
  }
})

function goBack() {
  console.log("back");
  window.history.back();
}