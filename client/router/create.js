const form = document.querySelector("form");
const url = `http://localhost:8080/ques/`;
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const question = formData.get("question");
    const answer = formData.get("answer");
    const que = {
        question,
        answer
    };
    const data = await sendData(que);

})

async function sendData(que) {

    const rawData = await fetch(url, {
        method: "POST",
        body: JSON.stringify(que),
        headers: {
            "content-type": "application/json",
        },
    });
    const data = await rawData.json();
    redirect();
}

function redirect() {
    location.href = '/';
}