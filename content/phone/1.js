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
    alert("축하합니다! <1. 설정창 열기>를 클리어 하셨습니다!!");
    img.src = "../images/test/1-2.jpg";   
    currentImageIndex = 3;
    title.innerHTML = "1. <완료> 다음 문제를 풀어주세요!";
  }
}
