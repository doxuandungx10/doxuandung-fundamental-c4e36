let h1 = document.getElementById(`first-h1`);
h1.innerText = "Hello C4E36"


let a = document.getElementById(`demo-anchor`);
a.remove();


let demoBtn = document.getElementById(`demo-btn`)
demoBtn.addEventListener(`click`, () => {
    let body = document.getElementById(`body`);
    let h2 = `<h2>Heading level 2</h2>`;

    body.innerHTML += h2;

})