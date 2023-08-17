import { URL } from "./utils/CONST.js";

const inputs = document.querySelectorAll('input');
const submit_button = document.querySelector('.button');
let values = [];

function getValues() {
    inputs.forEach((input) => {
        values.push(input.value);
    })
}

submit_button.addEventListener('click', (e) => {
    getValues();
    console.log(values);
    fetch(`${URL}/post/getPosts`, {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email" : values[0],
            "password" : values[1]
        })
    }).then(async (response) => {
        return await response.json()
    })
        .then((response) => { 
            localStorage.setItem("post_read",JSON.stringify(response));
            location.href = "/detail.html";
        })
        .catch((error) => {
            values = [];
            console.log(error)
        })
    values = [];
})
