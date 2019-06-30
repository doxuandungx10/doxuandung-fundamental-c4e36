// array

// 1. READ:
// 1.1 Read one

// index of element
// console.log(menu[menu.length-1]);

// length of array
// console.log(menu.length);

// 1.2 Read many
// for( let i = 0; i < menu.length; i++){
//     console.log(`${i+1}. ` + menu[i]);
// }


// 2. CREATE
// menu.forEach()
// menu.push()


// 3. DELETE
const menu = ["Com","Chao","Rau","Thit","Ca"];
// 3.1 Delete by index
// menu.splice(1, 3);
// console.log(menu);

// 3.2 Delete by value
// const indexOfFood = menu.indexOf("Thit");
// menu.splice(indexOfFood, 1);
// console.log(menu);
// 4. UPDATE
// 4.1 Update by index
// menu.forEach((food, index) => {
//     console.log(`${index + 1}. ${food}`);
// })

menu[1] = "Pho";
console.log(menu)


5