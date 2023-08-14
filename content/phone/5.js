let currentImageIndex = 1;
let img = document.querySelector(".practice-section img");
let title = document.querySelector(".header span");

function changeImage_1() {
  if (currentImageIndex === 1) {
    alert("[1단계 통과!] 설정창을 열려면 먼저 상태바를 내려요~");
    img.src = "../images/test/1-1.jpg";   
    currentImageIndex = 2;
  }
}

function changeImage_2() {
  if(currentImageIndex === 2) {
    alert("[2단계 통과!] 설정창을 열려면 톱니바퀴를 눌러요~");
    img.src = "../images/test/1-2.jpg";   
    currentImageIndex = 3;
  }
}

function changeImage_3() {
  if(currentImageIndex === 3) {
    alert("[3단계 통과!] 소리 및 진동에서 여러가지 설정을 할 수 있어요~");
    img.src = "../images/test/5-3.jpg";   
    currentImageIndex = 4;
  }
}

function changeImage_4() {
  if(currentImageIndex === 4) {
    alert("축하합니다! <5. 좋아하는 노래를 벨소리로!>를 클리어 하셨습니다!!");
    img.src = "../images/test/5-4.jpg";   
    currentImageIndex = 5;
    title.innerHTML = "5. <완료> 다음 문제를 풀어주세요!";
  }
}