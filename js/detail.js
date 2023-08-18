const label = document.querySelector('.label');
const posts = JSON.parse(localStorage.getItem("post_read"));

console.log(posts);
label.innerText = `${posts.length}개의 게시글이 있습니다`;

const posts_wrapper = document.querySelector('.posts');
posts.map((post) => {
    posts_wrapper.innerHTML += `
    <div class="post_wrapper">
        <span class="title">${post.title}</span>
        <span class="author">작성자 : ${post.author}</span>
        <span class="explain">${post.explain}</span>
        <span class="text">${post.content[0].text}</span>
        <img src="${post.content[0].img}" alt="${post.title}" />
        <span class="tag">승인 대기<span>
    </div>
    `
})