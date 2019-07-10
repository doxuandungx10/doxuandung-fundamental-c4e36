window.onload = () => {
    let x = Math.floor((Math.random() * 10)) + 1;
    let y = Math.floor((Math.random() * 10)) + 1;
    // console.log(x)
    // console.log(y)
    // let result = 0;
    var operators = ["+", "-", "*", "/"]
        // var result = [`${x+y}`, `${x+y-1}`, `${x+y+1}`]


    let i = Math.floor(Math.random() * 4);
    let op = operators[i];
    // re = result[i2];

    // if (op == "+") {
    //     var result = [`${x+y}`, `${x+y-1}`, `${x+y+1}`]
    //     re = result[i2];
    //     alert(`${x}` + "+" + `${y} = ` + `${re}`);
    // } else if (op == "*") {
    //     var result = [`${x*y}`, `${x*y-1}`, `${x*y+1}`]
    //     re = result[i2];
    //     alert(`${x}` + "*" + `${y} = ` + `${re}`);
    // } else if (op == "-") {
    //     var result = [`${x-y}`, `${x-y-1}`, `${x-y+1}`]
    //     re = result[i2];
    //     alert(`${x}` + "-" + `${y} = ` + `${re}`);
    // } else if (op == "/") {
    //     var result = [`${x/y}`, `${x/y-1}`, `${x/y+1}`]
    //     re = result[i2];
    //     alert(`${x}` + "/" + `${y} = ` + `${re}`);
    // }
    let i2 = Math.floor(Math.random() * 3);
    const result = calc(x, y, op)
    let arr = [-1, 0, 1]
    let arr2 = arr[i2]
    let displayResult = result + arr2
    alert(`${x} ${op} ${y} = ${displayResult}`)

    let answer = prompt("Answer?").toLocaleLowerCase()
    if (arr2 === 0) {
        if (answer == "y") {
            alert("Hura!")
        } else if (answer == "n") {
            alert("Game over!")
        }
    } else {
        if (answer == "n") {
            alert("Hura!")
        } else if (answer == "y") {
            alert("Game over!")
        }

    }
}