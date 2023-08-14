const next_button = document.querySelector('.submit');
const back_button = document.querySelector('.back');
const root1 = document.querySelector('#page1');
const root2 = document.querySelector('#page2');

let flag = true;

next_button.addEventListener('click', (event) => {
    event.preventDefault();
    root1.style.display = 'none';
    root2.style.display = 'flex';
    flag=false;
})

back_button.addEventListener('click', (event) => {
    event.preventDefault();
    if(flag){
        location.href="/post.html";
    }
    else {
        root1.style.display = 'flex';
        root2.style.display = 'none';
        flag=true;
    }
})