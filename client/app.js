const url = `http://localhost:8080/ques/`;
const quesElement = document.querySelector('.ques');
async function getData() {
    const rawData = await fetch(url);
    const data = await rawData.json();
    data.forEach(ele => {
        const {
            question,
            answer
        } = ele;
        const card = document.createElement('div');
        card.className = 'card';
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
        title.textContent = question;
        media_content.appendChild(title);
        const content = document.createElement('div');
        content.className = 'content';
        content.textContent = answer;
        card_content.appendChild(content);
        quesElement.appendChild(card);


    });
}
getData();