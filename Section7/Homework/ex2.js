let remove = document.getElementById(`remove`)
let color = document.getElementById(`color`)
remove.addEventListener('click', () => {
    color.children[color.value].remove()
    console.dir(color)

})