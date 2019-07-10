// function getMyname(name) {
//     console.log(name)
//     return "Mr" + name;
// }
// getMyname('Dung')


// function pt(a, b, c) {
//     var x = (c - b) / a;
//     return x;
// }
// console.log(pt(1, 2, 3));


// let name = prompt("enter name");
// let name2 = name.split("");
// console.log(name2)
// for (i = 0; i < name2.length; i++) {
//     console.log(name2[i])
// }

// "string" = ["s","t","r","i","n","g"]

// function character(string) {
//     let x = "";
//     for (i = string.length - 1; i >= 0; i--) {
//         x += string[i];
//     }
//     return x
// }
// console.log(character("ABCD"));

// let answer1 = prompt("String?");
// let answer2 = character(answer1);
// if (answer1 === answer2) {
//     console.log("True");
// } else {
//     console.log("False");
// }


// const arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// let l = 0;
// let r = n - 1;
// while (l < r) {
//     let Sum = arr[l] + arr[r];
//     if (Sum == 5) {
//         console.log(arr[l] + " " + arr[r]);
//         l++;
//         r--;
//     } else if (arr[l] + arr[r] < 5) {
//         l++;
//     } else {
//         r--;
//     }
// }





// let x = Number(prompt("Enter x"));
// let y = Number(prompt("Enter y"));
// let op = prompt("st");
// let result = 0;

// if (op == "+") {
//     result = x + y
// } else if (op == "-") {
//     result = x - y
// } else if (op == "*") {
//     result = x * y
// } else if (op == "/") {
//     result = x / y
// }
// alert(result)

// refactor code