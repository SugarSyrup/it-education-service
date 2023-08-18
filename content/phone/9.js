let currentImageIndex = 1;
let img = document.querySelector(".practice-section img");
let title = document.querySelector(".header span");

function changeImage_1() {
  if (currentImageIndex === 1) {
    alert("[1단계 통과!] 전화번호를 관리하기 위해선 먼저 전화를 눌러요~");
    img.src = "../images/test/8-1.jpg";   
    currentImageIndex = 2;
  }
}

function changeImage_2() {
  if(currentImageIndex === 2) {
    alert("[2단계 통과!] 전화번호에 대한 설정을 하기 위해선 점 세개 버튼을 눌러요~");
    img.src = "../images/test/9-2.jpg";   
    currentImageIndex = 3;
  }
}

function changeImage_3() {
  if(currentImageIndex === 3) {
    alert("[3단계 통과!] 바로 전화를 거는건 단축번호! 단축번호를 눌러요~");
    img.src = "../images/test/9-3.jpg";   
    currentImageIndex = 4;
  }
  else if(currentImageIndex === 4) {
    alert("[4단계 통과!] 단축번호를 지정할 사람을 정하기 위해서 사람모양을 눌러요~");
    img.src = "../images/test/9-4.jpg";   
    currentImageIndex = 5;
  }
  else if(currentImageIndex === 5) {
    alert("축하합니다! <9. 아들 딸에게 바로 전화해요!>를 클리어 하셨습니다!!");
    img.src = "../images/test/9-5.jpg";   
    currentImageIndex = 6;
    title.innerHTML = "9. <완료> 다음 문제를 풀어주세요!";
  }
}