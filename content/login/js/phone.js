const agency_List = document.querySelector("#agency_List");
const phone_first = document.getElementById("first");
const phone_second = document.querySelector("#second");
const phone_third = document.querySelector("#third");
const genderDiv = document.querySelector("#gender");
const phone_sign = document.querySelector("#phone_sign");
const phone_check = document.querySelector("#phone_check");
const manCheck = genderDiv.querySelector('input[value = "man"]');
const womanCheck = genderDiv.querySelector('input[value = "woman"]');

phone_first.addEventListener("input", function(e){
  if(e.target.value.length === 3){
    phone_second.focus();
  };
})

phone_second.addEventListener("input", function(e){
  if(e.target.value.length === 4){
    phone_third.focus();
  };
})

let code = -1;

phone_sign.addEventListener("click",function(event){
  event.preventDefault();
  const phone_number = phone_first.value + phone_second.value + phone_third.value;
  console.log(phone_number);
  const data = JSON.stringify({
    "phone" : phone_number
  })
  fetch("https://likelionhelper.fly.dev/auth/phone",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body : data
  }).then(async function(R){
    return await R.json()
  }).then(function(R) {
    console.log(R)
    code = R.code
  }).catch(function(error){
    console.log(error);
  })
})

phone_check.addEventListener("click", function(event){
  event.preventDefault();
  if(code == phone_sign_number.value){
    Swal.fire({
      title: '일치합니다!',
      icon: 'success'
    })
  }
  else{
    
    Swal.fire({
      title: '다시 확인해 주세요!',
      icon: 'error',
    })
  }
})

//타이머

document.addEventListener("DOMContentLoaded", function () {
  const phoneSignButton = document.getElementById("phone_sign");
  const timerBox = document.getElementById("timer_box");
  let remainingTime = 180; // 180초, 3분

  function updateTimer() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    timerBox.innerHTML = `<span style="color: white; font-size: 20px;">남은시간 : ${formattedTime}</span>`;
  }

  function startTimer() {
    updateTimer();
    const interval = setInterval(function () {
      if (remainingTime > 0) {
        remainingTime -= 1;
        updateTimer();
      } else {
        clearInterval(interval);
        timerBox.innerHTML = `<span style="color: white; font-size: 20px;">시간만료</span>`;
      }
    }, 1000);
  }

  phoneSignButton.addEventListener("click", function (event) {
    event.preventDefault();
    startTimer();
  });
});

function goBack() {
  console.log("back");
  window.history.back();
}