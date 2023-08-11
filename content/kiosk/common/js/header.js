import {NOQUESTION, REMOVE, QUESTION} from '/content/kiosk/common/js/utils/key.js';
const close = document.querySelector(".fa-chevron-down");
const open = document.querySelector(".fa-chevron-up");
const iconBox = document.querySelector(".icon");
const question = document.querySelector(".questionText");
const questionText = document.querySelector(".question");
const questionBox = document.querySelector(".question-box");
const practiceSection = document.querySelector(".practice-section");

close.addEventListener("click", () => {
  if(localStorage.getItem(QUESTION)){
    close.classList.toggle("fa-chevron-up");
    close.classList.toggle("fa-chevron-down");
    close.parentNode.parentNode.parentNode.childNodes[1].classList.toggle("close");
    questionText.classList.toggle(REMOVE);
    if(question){
      question.classList.toggle(REMOVE);
    }
  }
})

if(!localStorage.getItem(QUESTION)){
  questionBox.classList.add(REMOVE);
  practiceSection.style.margin = "0 0 0 0";
}

if(localStorage.getItem(NOQUESTION)){
  questionBox.classList.add(REMOVE);
  practiceSection.style.margin = "0 0 0 0";
}