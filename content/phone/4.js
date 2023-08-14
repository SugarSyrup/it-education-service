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
    img.src = "../images/test/3-2.jpg";   
    currentImageIndex = 3;
  }
}

function changeImage_3() {
  if(currentImageIndex === 3) {
    alert("[3단계 통과!] 디스플레이에서 여러가지 설정을 할 수 있어요~");
    img.src = "../images/test/4-3.jpg";   
    currentImageIndex = 4;
  }
  else if(currentImageIndex === 4) {
    alert("[4단계 통과!] 이제 화면 켜짐 시간을 설정할 수 있어요~");
    img.src = "../images/test/4-4.jpg";
    currentImageIndex = 5;
  }
}

function changeImage_4() {
  if(currentImageIndex === 5) {
    alert("축하합니다! <4. 화면이 자꾸 꺼져요!>를 클리어 하셨습니다!!");
    img.src = "../images/test/4-5.jpg";   
    currentImageIndex = 6;
    title.innerHTML = "4. <완료> 다음 문제를 풀어주세요!";
  }
}