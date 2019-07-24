const context = {
    person: null,
}

window.onload = async() => {
    await getPerson();
    renderPerson();
    salary();
}

const getPerson = async() => {
    const res = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    const person = await res.json();
    context.person = person;
}

const renderPerson = () => {
    // console.dir(context.person)
    let employees = document.getElementById(`employees`);
    for (let i = 0; i < context.person.length; i++) {
        let element = `<li id="person-${i}">${context.person[i].employee_name}<li/>`;
        employees.innerHTML += element
    }
}
const salary = () => {
    // console.log(context.person[3].employee_name)
    for (let i = 0; i < context.person.length; i++) {
        let li2 = document.getElementById(`person-${i}`);
        let salaryEmployee = document.getElementById('salaryEmployee');
        li2.onmouseover = () => {
            // console.log(i)
            let view = `Salary of ${context.person[i].employee_name} is ${context.person[i].employee_salary}`
            salaryEmployee.innerHTML = '';
            salaryEmployee.innerHTML += view
        }

    }
}