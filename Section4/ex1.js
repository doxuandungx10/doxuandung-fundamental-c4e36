const dict = {
    hc: "học",
    ng: "người",
    stt: "status",

}
const words = Object.keys(dict);
words.forEach((word, index) => {
    console.log(`${index+1}. ${word}`)
})
let code = prompt("Enter your code");
if (dict.hasOwnProperty(code)) {
    console.log(`Translation: ${dict[code]}`)

} else {
    let question = prompt("Them vao dictionary khong?").toLowerCase();
    if (question === "n") {
        confirm("OK!");
    } else if (question === "y") {
        let question2 = prompt("Meaning??");
        dict[code] = question2;
        console.log(` ${code} = ${dict[code]}`);
        console.log(words);
    }

}
Object.keys(dict).forEach((word, index) => {
    console.log(`${index+1}. ${word}`)
})


// console.log( dict.hasOwnProperty(`code`) );
// console.log( answer in dict );
// console.log( dict[code] );