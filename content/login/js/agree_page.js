const term = document.querySelector("#term");
const term1 = document.querySelector("#term1");
const term2 = document.querySelector("#term2");
const term3 = document.querySelector("#term3");
const term4 = document.querySelector("#term4");
const text_Hidden1 = document.querySelector("#text_Hidden1");
const text_Hidden2 = document.querySelector("#text_Hidden2");
const text_Hidden3 = document.querySelector("#text_Hidden3");
const text_Hidden4 = document.querySelector("#text_Hidden4");
const information = document.querySelectorAll(".information");

function allTerm(){
  if(term.checked == true){
    term1.checked = true;
    term2.checked = true;
    term3.checked = true;
    term4.checked = true;
  }
  else{
    term1.checked = false;
    term2.checked = false;
    term3.checked = false;
    term4.checked = false;
  }
}

function Hidden(text_Information){
  if(text_Information.style.display == "none"){
    text_Information.style.display = "block";
  }
  else{
    text_Information.style.display = "none";
  }
}

term.addEventListener("click", allTerm);

text_Hidden1.addEventListener('click',() => Hidden(information[0]));
text_Hidden2.addEventListener('click',() => Hidden
(information[1]));
text_Hidden3.addEventListener('click',() => Hidden
(information[2]));
text_Hidden4.addEventListener('click',() => Hidden
(information[3]));


function goBack() {
  console.log("back");
  window.history.back();
}