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
        location.href="./post.html";
    }
    else {
        root1.style.display = 'flex';
        root2.style.display = 'none';
        flag=true;
    }
})

//image
const image_input = document.querySelector('#image');
const image_label = document.querySelector('.image_input');
let submit_flag = false;

image_input.addEventListener('change', (e) => {
    const data = e.target.files[0];
    const formData = new FormData();
    formData.append('image', data);

    fetch('https://likelionhelper.fly.dev/post/image', {
        method:'POST',
        body: formData
    }).then(async (response) => {
        return await response.json()
    })
        .then((response) => { 
            image_label.innerHTML = `<img src=${response.path} alt="image" class="" style="max-width:100%"></img>`
            submit_flag = true;
        })
        .catch((error) => {
            console.log(error)
        })
})



//form
const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const submit_button = document.querySelector('.final');

submit_button.addEventListener('click', (e) => {
    if(submit_flag) {
        const data = {
            "author": inputs[0].value,
            "email": inputs[1].value,
            "password": inputs[2].value,
            "title": inputs[3].value,
            "explain": inputs[4].value,
            "content" : [{
                "text": inputs[5].value,
                "img": document.querySelector('img').src
            }]
        }
        fetch('https://likelionhelper.fly.dev/post/create',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if(window.confirm('전송 완료되었습니다. 심사 결과는 이메일로 통지될 예정입니다.')) {
                    location.href = './main.html';
                } else {
                    location.href = './main.html';
                }
            })
    } else {
        window.alert('모든 입력을 진행해 주세요!')
    }
})