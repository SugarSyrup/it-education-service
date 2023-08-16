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

//image
const image_input = document.querySelector('#image');

image_input.addEventListener('change', (e) => {
    const data = e.target.files[0];
    fetch('https://likelionhelper.fly.dev/post/image')
})



//form
const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const submit_button = document.querySelector('.submit');

submit_button.addEventListener('click', (e) => {
    console.log(form.formD)
})