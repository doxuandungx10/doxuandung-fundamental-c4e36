const word = "champion";
words = word.split("")
    // words = ["h", "m", "p", "a", "i", "o", "n", "c"];
words2 = [];
while (words.length > 0) {
    x = Math.floor(Math.random() * words.length);
    words2.push(words[x]);
    words.splice(x, 1);
}

const words3 = words2.join(" ");
console.log(words3);
let answer = prompt("Your answer??");
if (answer === word) {
    console.log("Hura!!");

} else {
    console.log("Wrong!");
}







// const y = words.length;
// for (i = 0; i < y; i++) {
//     x = Math.floor(Math.random() * words.length);
//     words2.push(words[x]);
//     words.splice(x, 1);
// }




// while (words.length > 0) {
//     x = Math.floor(Math.random() * words.length);
//     words2.push(words[x]);
//     words.splice(x, 1);
// }