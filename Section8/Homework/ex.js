const context = {
    employees: null,
}

window.onload = async() => {
    await getEmployees();
    renderEmployees();
    viewSalary();
}

const getEmployees = async() => {
    const res = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    const employees = await res.json();
    context.employees = employees;
}

const renderEmployees = () => {
    console.dir(context.employees);
    const listEmployees = document.getElementById('list-employees');
    context.employees.forEach((employee, index) => {
        let employeeElement = `<li>${employee.employee_name}</li>`;
        listEmployees.innerHTML += employeeElement;
    })
}

const viewSalary = () => {
    const listEmployees = document.getElementById('list-employees');
    const salaryEmployee = document.getElementById('employee_salary');
    for (let i = 0; i < context.employees.length; i++) {
        listEmployees.children[i].onmouseover = () => {
            let salaryView = `<p>The salary of ${context.employees[i].employee_name}: ${context.employees[i].employee_salary}</p>`;
            salaryEmployee.innerHTML += salaryView;
        }
        listEmployees.children[i].onmouseout = () => {
            salaryEmployee.innerHTML = '';

        }
    }
}