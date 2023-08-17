const label = document.querySelector('.label');
const posts = JSON.parse(localStorage.getItem("post_read"));

console.log(posts);
label.innerText = `${posts.length}개의 게시글이 있습니다`;


const posts_wrapper = document.querySelector('.posts');
posts.map((post) => {
    
})