// const movie = document.querySelector(".movie");
// const cafe = document.querySelector(".cafe");
// const fastFood= document.querySelector(".fast-food");
const CLASSNAME = "className";

const category = document.querySelectorAll(".category");

for(let i = 0; i < category.length; i++){
  let className = category[i].classList[1];
  category[i].addEventListener("click", () =>{
    localStorage.setItem(CLASSNAME, className);
    localStorage.setItem("categoryNum", 1);
    location.href ="/content/kiosk/common/html/practice-category.html";
  })
  if(className == "movie"){
    localStorage.setItem(CLASSNAME, className);
    location.href ="/content/kiosk/theater/html/movie-time.html"
  }
}