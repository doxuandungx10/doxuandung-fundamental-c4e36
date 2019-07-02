const company = [{
        name: "Dũng",
        salary: 50000,
        hours: 5,
        days: 15,
    },
    {
        name: "Đức",
        salary: 80000,
        hours: 7,
        days: 2,
    },
    {
        name: "Phong",
        salary: 60000,
        hours: 2,
        days: 30,

    }
]

console.log(company);
console.log(company[2].name)

// const luong = salary * hour * days;
// console.log(`Lương của ${table[name]} la ${luong} `)
let totalSalary = 0;

company.forEach((person, index) => {
    const salary = person.salary * person.hours * person.days
    console.log(`Lương của ${[person.name]} la ${salary} `)
    totalSalary += salary;
    console.log(`Tổng lương của 3 người là: ${totalSalary}`)
})