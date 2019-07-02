// object
const person = {
    name: "Duc",
    age: 21,
    university: "FTU",
    major: "Chinese",
}

// property: value
// CRUD


// 1. READ
console.log(person.age)

let demoProperty = "age"
console.log(person[demoProperty];)

// 2. CREATE / UPDATE
// create
person.status = "available";
// console.log(person)
// update
person.major = "Korea";
console.log(person)

//3. DELETE
delete person.age