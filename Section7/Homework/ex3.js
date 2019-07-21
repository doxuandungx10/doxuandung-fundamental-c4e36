let table = document.getElementById(`table`);
let row = document.getElementById(`row`);
let column = document.getElementById(`column`);
let content = document.getElementById(`content`);
let update = document.getElementById(`update`);


// console.dir(r1)
// console.log(table.rows[1].cells[1])


update.addEventListener(`click`, () => {
    for (i = 1; i < 4; i++) {
        if (row.value == i) {
            if (column.value == 1) {
                table.rows[i - 1].cells[0].innerText = content.value
            } else if (column.value == 2) {
                table.rows[i - 1].cells[1].innerText = content.value
            }

        }
    }

})