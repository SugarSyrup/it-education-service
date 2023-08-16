import { URL } from "./utils/CONST.js";

const inputs = document.querySelectorAll('input');
const submit_button = document.querySelector('.button');
const values = [];

function getValues() {
    inputs.forEach((input) => {
        values.push(input.value);
    })
}

submit_button.addEventListener('click', (e) => {
    getValues();
    fetch(`${URL}/post/getPosts`, {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email" : values[0],
            "password" : values[1]
        })
    }).then(async (response) => await response.json())
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)})
})