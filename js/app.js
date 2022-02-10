const textarea = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');

// arahkan otomatis ke textarea
textarea.focus();

textarea.addEventListener('keyup', e => {
    createTags(e.target.value)

    if(e.key === 'Enter'){

        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomSelect();
    }
});

function createTags(input){
    const tagsInput = input.split(',')
    // potong white space
    .filter(tag => tag.trim() !== '').map(tag => tag.trim());
    
    tagsEl.innerHTML = '';
    tagsInput.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect(){
    const times = 20

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        choicedTag(randomTag);

        setTimeout(() => {
            unChoicedTag(randomTag);
        }, 100)
    }, 100);

    setTimeout(() => {
        
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            choicedTag(randomTag)
        }, 100);

    }, times * 100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function choicedTag(tag){
    tag.classList.add('choiced')
}

function unChoicedTag(tag){
    tag.classList.remove('choiced')
}