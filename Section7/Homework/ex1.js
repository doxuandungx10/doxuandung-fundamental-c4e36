let a = document.getElementById(`demo-a`);
let btnDemo = document.getElementById(`btn-demo`);
let input = document.getElementById(`demo-input`);


btnDemo.addEventListener('click', () => {
    // console.dir(a)
    console.log(a.href)
    input.value = a.href
})