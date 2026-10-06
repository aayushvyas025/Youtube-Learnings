interface EmployeeDetail {
  readonly employeeId: string | number;
  firstName: string;
  lastName: string;
  department: string;
  position: string;
  role: string;
}

class Employee {
  // Here we creating public member which is accessible publicly
  public employeeId;
  public firstName;
  public lastName;
  public department;
  public position;
  public role;
  // Here we are using `private` keyword  so we this salary is not accessible to  publicly
  private salary: number = 0;
  constructor(employee: EmployeeDetail) {
    this.employeeId = employee.employeeId;
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.department = employee.department;
    this.role = employee.role;
    this.position = employee.position;
  }
  salaryDetail(num:number) {
    if (num < 1) throw new Error("Salary should be greater than 0");
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
