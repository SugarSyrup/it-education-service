import {SUBJECTNUM, NOQUESTION, QUESTION, QUESTION2, QUESTION3, QUESTIONAMOUNT, QUESTIONOPTION, OPTION} from "../../js/utils/key.js";
const movie = document.querySelectorAll(".movie");
const timeTable = document.querySelectorAll(".timeTable");

const subjectNum = localStorage.getItem(SUBJECTNUM);
const questionMovieName = localStorage.getItem(QUESTION);
const questionMovieTime = localStorage.getItem(QUESTION2);

let movieTime;
let theaterNum;
let movieName; 

let movieInpo = [];
let option = [];
let paresInpo;
if(localStorage.getItem(OPTION)){
  paresInpo = JSON.parse(localStorage.getItem(OPTION));
}

const a = document.querySelectorAll(".time-box");

if(!localStorage.getItem(NOQUESTION)){
  if(subjectNum == 0){
    for(let i = 0; i < movie.length; i++){
      movie[i].addEventListener("click", () => {
          if(movie[i].childNodes[1].innerText == questionMovieName){
            alertFunc();
          }
          else{
            alert("제시문 속 영화 제목을 다시 확인해 보세요");
          }
        })
      }
    }
  else{
    for(let i = 0; i < timeTable.length; i++){
      timeTable[i].addEventListener("click", () => {
        movieName = timeTable[i].parentNode.parentNode.childNodes[1].innerText;
        movieTime = timeTable[i].childNodes[1].innerText;
    
        if(questionMovieTime == movieTime && questionMovieName == movieName){
          theaterNum = timeTable[i].childNodes[3].childNodes[1].innerText;
        movieInpo.push(movieName);
        movieInpo.push(movieTime);
        movieInpo.push(theaterNum);
          option.push(movieInpo);
          localStorage.setItem(OPTION, JSON.stringify(option));
          if(subjectNum == 1){
            alertFunc();
          }
          else if(subjectNum > 1){
            location.href = "../../html/theater/number-of-spectator.html";
          }
        }
        else{
          wrong();
        }
      })
    }
  }
}
else{
  for(let i = 0; i < timeTable.length; i++){
    timeTable[i].addEventListener("click", () => {
      movieName = timeTable[i].parentNode.parentNode.childNodes[1].innerText;
      movieTime = timeTable[i].childNodes[1].innerText;
        theaterNum = timeTable[i].childNodes[3].childNodes[1].innerText;
      movieInpo.push(movieName);
      movieInpo.push(movieTime);
      movieInpo.push(theaterNum);
        option.push(movieInpo);
        localStorage.setItem(OPTION, JSON.stringify(option));
          location.href = "../../html/theater/number-of-spectator.html";
        })
      }
  }


  function alertFunc (){
    Swal.fire({
      title: '성공!',
      text: "다음 문제로 넘어 갈까요?",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: 'rgb(245, 134, 31)',
      cancelButtonColor: 'rgb(245, 134, 31)',
      confirmButtonText: '아니요',
      cancelButtonText: '네'
    }).then((result) => {
      if (result.isConfirmed) {
        location.href = "../../html/main-category.html";
      }
      else if(result.isDismissed){
        localStorage.setItem(SUBJECTNUM, Number(localStorage.getItem(SUBJECTNUM)) + 1);
        location.href = "../../html/example/example.html";
      }
  })
  }
  
function wrong(){
  Swal.fire({
    icon: 'error',
    title: '틀린 답입니다',
    text: '제시문을 다시 확인해 보세요',
    confirmButtonColor: 'rgb(245, 134, 31)',
  })
}