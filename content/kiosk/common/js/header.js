import {NOQUESTION, REMOVE, QUESTION, PLACE, SUBJECTNUM} from "../js/utils/key.js";
const close = document.querySelector(".fa-chevron-down");
const open = document.querySelector(".fa-chevron-up");
const iconBox = document.querySelector(".icon");
const question = document.querySelector(".questionText");
const questionText = document.querySelector(".question");
const questionBox = document.querySelector(".text-box");
const practiceSection = document.querySelector(".practice-section");

const subjectNum = localStorage.getItem(SUBJECTNUM);

// close.addEventListener("click", () => {
//   if(localStorage.getItem(QUESTION)){
//     close.classList.toggle("fa-chevron-up");
//     close.classList.toggle("fa-chevron-down");
//     close.parentNode.parentNode.parentNode.childNodes[1].classList.toggle("close");
//     questionText.classList.toggle(REMOVE);
//     if(question){
//       question.classList.toggle(REMOVE);
//     }
//     questionBox.classList.toggle("backgroundNone");
//   }
// })

if(localStorage.getItem(QUESTION) || !localStorage.getItem(PLACE)){
  questionBox.classList.remove(REMOVE);
}
else{
  questionBox.classList.add(REMOVE);
  practiceSection.style.margin = "0 0 0 0";
}

if(localStorage.getItem(NOQUESTION)){
  questionBox.classList.add(REMOVE);
  practiceSection.style.margin = "0 0 0 0";
}