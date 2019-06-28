// let menu = ["Com","Chao","Rau","Thit","Ca"];

// let answer = prompt("Would you like anything else???").toLowerCase();
// if ( answer === "n"){
//     console.log("Goodbye!!")
// }
// else if ( answer === "y"){
//     const answer2 = prompt("Which food?");
//     menu.push(answer2);
//     console.log(menu);
// for (i = 0; i < menu.length; i++){
//     console.log(`${i+1}. ${menu[i]}`);
// }
// }

// const menu = ["Com","Chao","Rau","Thit","Ca"];
menu = ["Com", "Chao", "Rau", "Thit", "Ca"];

menu.forEach((food, index) => {
    console.log(`${index + 1}. ${food}`);
})


let answer = prompt("Delete???").toLowerCase();
if (answer === "n") {
    console.log("Goodbye!");
}
else if (answer === "y") {
    let answer2 = prompt("Index or Value?").toLowerCase();
    if (answer2 === "index") {
        let STT = Number(prompt("Index??"));
        h.splice(STT - 1, 1);
        console.log(menu);
    }
    else if (answer2 === "value") {
        let x = prompt("Value??");
        const y = menu.indexOf(x);
        menu.splice(y, 1);
        console.log(menu)
    }
}

