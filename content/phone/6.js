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
    alert("[2단계 통과!] 상태바가 내려왔을 때 아무곳이나 잡고 한번 더 내리면 더 다양한 설정을 할 수 있어요~");
    img.src = "../images/test/6-2.jpg";   
    currentImageIndex = 3;
  }
}

function changeImage_3() {
  if(currentImageIndex === 3) {
    alert("축하합니다! <6. 손전등을 켜봅시다!>를 클리어 하셨습니다!!");
    img.src = "../images/test/6-3.jpg";   
    currentImageIndex = 4;
    title.innerHTML = "6. <완료> 다음 문제를 풀어주세요!";
  }
}