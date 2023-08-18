let currentImageIndex = 1;
let img = document.querySelector(".practice-section img");
let title = document.querySelector(".header span");

function changeImage_1() {
  if (currentImageIndex === 1) {
    alert("[1단계 통과!] 번호를 저장하기 위해선 먼저 전화를 눌러요~");
    img.src = "../images/test/8-1.jpg";   
    currentImageIndex = 2;
  }
}

function changeImage_2() {
  if(currentImageIndex === 2) {
    alert("[2단계 통과!] 번호를 저장하기 위해선 번호를 입력하고 + 버튼을 눌러요~");
    img.src = "../images/test/8-2.jpg";   
    currentImageIndex = 3;
  }
}

function changeImage_3() {
  if(currentImageIndex === 3) {
    alert("[3단계 통과!] 새로운 번호를 저장하려면 새 연락처 등록을 눌러요~");
    img.src = "../images/test/8-3.jpg";   
    currentImageIndex = 4;
  }
}

function changeImage_4() {
  if(currentImageIndex === 4) {
    alert("축하합니다! <8. 새로운 번호를 저장해요!>를 클리어 하셨습니다!!");
    img.src = "../images/test/8-4.jpg";   
    currentImageIndex = 5;
    title.innerHTML = "8. <완료> 다음 문제를 풀어주세요!";
  }
}