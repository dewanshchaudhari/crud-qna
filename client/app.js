const url = `http://localhost:8080/ques/`;
const quesElement = document.querySelector('.ques');
async function getData() {
    const rawData = await fetch(url);
    const data = await rawData.json();
    data.reverse();
    data.forEach(ele => {
        const card = document.createElement('div');
        card.className = 'card my-2';
        const card_content = document.createElement('div');
        card_content.className = 'card-content';
        card.appendChild(card_content);
        const media = document.createElement('div');
        media.className = 'media';
        card_content.appendChild(media);
        const media_content = document.createElement('div');
        media_content.className = 'media-content';
        media.appendChild(media_content);
        const title = document.createElement('p');
        title.className = 'title is-4';
        title.textContent = ele.question;
        media_content.appendChild(title);
        const content = document.createElement('div');
        content.className = 'content';
        content.textContent = ele.answer;
        card_content.appendChild(content);
        const button = document.createElement('button');
        button.className = 'button is-danger remove';
        button.textContent = 'Remove';
        button.id = ele.id;
        card_content.appendChild(button);
        quesElement.appendChild(card);
    });
}

async function total() {
    const data = await getData();
    const remove = document.querySelector('.remove');
    return remove;
}
const remove = total();
remove.addEventListener("clicked", (event) => {
    const id = remove.id;
    console.log(id);
});

// async function remove(id) {
//     fetch(`${url}${id}`, {
//         method: 'DELETE',
//     });
//     getData();
// }