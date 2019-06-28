menu = ["Com", "Chao", "Rau", "Thit", "Ca"];

menu.forEach((food, index) => {
    console.log(`${index + 1}. ${food}`);
})


let answer = prompt("Update???").toLowerCase();
if (answer === "n") {
    alert("Goodbye!");
}
else if (answer === "y") {
    let answer2 = prompt("Index or Value?").toLowerCase();
    if (answer2 === "index") {
        let STT = Number(prompt("Index??"));
        let m = prompt("Newfood");
        menu[STT - 1] = m;
        menu.forEach((food, index) => {
            console.log(`${index + 1}. ${food}`);
        })
        
        console.log(menu);
    }
    else if (answer2 === "value") {
        let x = prompt("Value??");
        let n = prompt("Newfood").toLowerCase();
        menu[menu.indexOf(x)] = n;
        menu.forEach((food, index) => {
            console.log(`${index + 1}. ${food}`);
        })
        console.log(menu)
    }
}
