let food = document.getElementById(`food`)
let input = document.getElementById(`mon moi`);
// console.dir(food)

// console.dir(input)

let add = document.getElementById(`add`);
add.addEventListener(`click`, () => {
    console.dir(input)
    let li = `<li>${input.value}</li>`;
    food.innerHTML += li
})


let del = document.getElementById(`delete`)
del.addEventListener(`click`, () => {
    // food.forEach((mon, index) => {
    //         if (mon === input) {
    //             input.remove()
    //         }
    //     })
    // if (food[input]) {
    //     input.remove
    // } else {
    //     rau.remove();
    // }
    food.lastElementChild.remove()

})

let del2 = document.getElementById(`delete2`)
del2.addEventListener(`click`, () => {
    for (let i = 0; i < food.children.length; i++) {
        let eachFood = food.children[i];
        if (eachFood.textContent.toLocaleLowerCase === input.value.toLocaleLowerCase) {
            eachFood.remove()
        }
    }

    // let menuFood = [...food.children];
    // let deleteFood = menuFood.filter(food => food.textContent === input.value);
    // deleteFood[0].remove()
})