const here = document.querySelector(".here");
const toGo = document.querySelector(".to-go");
const back = document.querySelector(".fa-left-long");

here.addEventListener("click", () => {
  localStorage.setItem("place", "here");
  location.href = "/content/kiosk/common/html/practice-category.html";
})
toGo.addEventListener("click", () => {
  localStorage.setItem("place", "to-go");
  location.href = "/content/kiosk/common/html/practice-category.html";
})
back.addEventListener("click", () => {
  location.href = "/content/kiosk/common/html/main-category.html";
})