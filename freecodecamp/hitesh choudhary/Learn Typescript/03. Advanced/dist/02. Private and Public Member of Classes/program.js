"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    // Here we creating public member which is accessible publicly
    employeeId;
    firstName;
    lastName;
    department;
    position;
    role;
    // Here we are using `private` keyword  so we this salary is not accessible to  publicly
    salary = 0;
    constructor(employee) {
        this.employeeId = employee.employeeId;
        this.firstName = employee.firstName;
        this.lastName = employee.lastName;
        this.department = employee.department;
        this.role = employee.role;
        this.position = employee.position;
    }
    salaryDetail(num) {
        if (num < 1)
            throw new Error("Salary should be greater than 0");
        this.salary += num;
    }
    fetchSalary() {
        return this.salary;
    }
}
const employee = new Employee({
    employeeId: "emp01234555",
    firstName: "Aayush",
    lastName: "Vyas",
    department: "Software development",
    position: "Software Engineer",
    role: "Fullstack Developer",
});
console.log(employee);
employee.salaryDetail(550000);
const employeeSalary = employee.fetchSalary();
console.log(employeeSalary);
//# sourceMappingURL=program.js.map