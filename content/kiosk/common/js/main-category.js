const CLASSNAME = "className";
// localStorage.removeItem(CLASSNAME);
localStorage.clear();
// localStorage.removeItem("categoryNum");
// localStorage.removeItem("place");

const category = document.querySelectorAll(".category");

let checkLocal = localStorage.getItem(CLASSNAME);

if(!checkLocal){
  for(let i = 0; i < category.length; i++){
    let className = category[i].classList[1];
    category[i].addEventListener("click", () =>{
      if(className == "movie"){
        localStorage.setItem(CLASSNAME, className);
        location.href ="/content/kiosk/theater/html/movie-time.html"
      }
      else{
          localStorage.setItem(CLASSNAME, className);
          localStorage.setItem("categoryNum", 1);
          location.href ="/content/kiosk/common/html/select-place.html";
        }
    })
    }
  }