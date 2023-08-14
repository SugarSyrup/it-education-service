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
    img.src = "../images/test/2-2.jpg";   
    currentImageIndex = 3;
  }
}

function changeImage_3() {
  if(currentImageIndex === 3) {
    alert("[3단계 통과!] 접근성 메뉴에서 여러 편의 옵션 설정이 가능해요~");
    img.src = "../images/test/2-3.jpg";   
    currentImageIndex = 4;
  }
}

function changeImage_4() {
  if(currentImageIndex === 4) {
    alert("[4단계 통과!] 화면은 시인성 항목에 있어요~");
    img.src = "../images/test/2-4.jpg";   
    currentImageIndex = 5;
  }
}

function changeImage_5() {
  if(currentImageIndex === 5) {
    alert("축하합니다! <2. 화면이 너무 작아요!>를 클리어 하셨습니다!!");
    img.src = "../images/test/2-5.jpg";
    currentImageIndex = 6;
    title.innerHTML = "2. <완료> 다음 문제를 풀어주세요!";
  }
}