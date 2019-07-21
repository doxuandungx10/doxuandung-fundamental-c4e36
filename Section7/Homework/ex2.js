let remove = document.getElementById(`remove`)
let color = document.getElementById(`color`)
remove.addEventListener('click', () => {
    // console.dir(color)
    color.children[color.value].remove()

})