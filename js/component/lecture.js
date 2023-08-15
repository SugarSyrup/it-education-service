function Lecture(title, explain, tags, practice, link) {
    const div = document.createElement('a');
    div.className = "lecture";
    div.href = link;
    div.innerHTML = `
        <span class="title">${title}</span>
        <span class="explain">${explain}</span>
        <div class="icons">
            <div class="tags">
            ${tags.map((tag) => 
                `<span class="tag">${tag}</span>`
            )}
            </div>
            ${practice && `<span class="practice">실습</span>`}
        </div>
    `

    return div;
}

export default Lecture;