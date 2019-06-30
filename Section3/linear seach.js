// const numberArr = [-7, 3, 5, -6, 2];

// const n = Number(prompt("Enter number?"));
// let foundIndex = -99999;
// numberArr.forEach((numb, i) => {
//     if (numb === n) {
//         foundIndex = i;
//     }
// })

// if (foundIndex === -99999){
//     alert("Not found")
// } else {
//     console.log(`Number ${n} at ${foundIndex + 1} position! `)
// }


const dayso = [-10, 3, 100, -6, 2];
let max = dayso[0]
for (i = 1; i < 5; i++) {
    if (dayso[i] > max) {
        max = dayso[i] 
    }
    
}
console.log("Max = " + max);