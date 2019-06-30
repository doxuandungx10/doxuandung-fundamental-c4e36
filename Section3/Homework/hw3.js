// STUDY

// - A nested list is a list that appears as an element in another list.
// - A list can store both strings and integers in it. Ex: myList = [ 4,'a', 'b', 'c', 1 'd', 3]

// EX3
// ouritems = [" T-Shirt", " Sweater", " Dress"];
// let answer = prompt("Welcome to our shop, what do you want (C, R, U, D)?").toLowerCase();
// if ( answer === "r" ){
//     console.log(`Our items: ${ouritems}`);
// }
// else if ( answer === "c" ){
//     let newitem = prompt("Enter new item???").toLowerCase();
//     ouritems.push(` ${newitem}`);
//     console.log(`Our items: ${ouritems}`);
// }
// else if ( answer === "u" ){
//     let updateposition = prompt("Update position???");
//     let newitem = prompt("New item???").toLowerCase();
//     ouritems[updateposition-1] = newitem;
//     console.log(`Our items: ${ouritems}`);

// }
// else if ( answer === "d" ){
//     let position = Number(prompt("Delete position??"));
//     ouritems.splice(position-1, 1);
//     console.log(`Our items: ${ouritems}`);
// }

// EX4
// myflock = [5, 7, 300, 90, 24, 50, 75];
// console.log(`Hello, my name is Dung and these are my ship sizes [${myflock}]`);

// for (j = 1; j < 5; j++) {
//     console.log(`MONTH ${j}`);
//     for (i = 0; i < 7; i++) {
//         myflock[i] = myflock[i] + 50;
//     }
//     console.log(`One month has passed, now here is my flock [${myflock}]`);

//     let max = myflock[1];
//     for (i = 1; i < 7; i++) {
//         if (myflock[i] > max) {
//             max = myflock[i];
//         }
//     }
//     console.log(`Now my biggest sheep has size ${max} let's shear it`);
//     let x = myflock.indexOf(max);
//     myflock[x] = 8;
//     console.log(`After shearing, here is my flock [${myflock}]`);
    
// }


