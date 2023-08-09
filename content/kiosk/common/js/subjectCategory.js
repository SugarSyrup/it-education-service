import {SUBJECTNUM, CATEGORYNUM, CLASSNAME, REMOVE} from '/content/kiosk/common/js/utils/key.js';

const category = document.querySelectorAll(".category");

const className = localStorage.getItem(CLASSNAME);


if(className == "fast-food"){
  console.log("a");
  for(let i = 0; i < category.length; i++){
    category[i].addEventListener("click", () => {
      localStorage.setItem(SUBJECTNUM, i);
      location.href = "/content/kiosk/common/html/example/example.html";
    })
  }
}
if(className == "cafe"){
  category[2].innerText = "3. 메뉴 주문하기";
  category[3].style.display = "none";
  category[4].innerText = "4. 주문내역 확인";
  category[5].innerText = "5. 상품 취소하기";
  category[6].innerText = "6. 추가 주문하기";
  category[7].innerText = "7. 주문하기";
  category[8].innerText = "8. 결제 방법 선택하기";
  category[9].innerText = "9. 연습하기";

for(let i = 0; i < category.length; i++){
  category[i].addEventListener("click", () => {
    localStorage.setItem(SUBJECTNUM, i);
    location.href = "/content/kiosk/common/html/example/example.html";
  })
}
} 