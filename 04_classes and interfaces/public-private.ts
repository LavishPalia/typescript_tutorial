// private and public access modifiers

class Department {
  name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  printDetail(this: Department) {
    // explicitly assign type to this variable
    console.log("Department: ", this);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmpInfo() {
    console.log("Total Employees Count: ", this.employees.length);
    console.log("All Employees: ", this.employees);
  }
}
const accounting_department = new Department("Accounting");
accounting_department.printDetail();

accounting_department.addEmployee("Lavish");
accounting_department.addEmployee("Rahul");

// without private property specified, we can add data to employees like below
// accounting_department.employees[2] = "Deepak";

accounting_department.printEmpInfo();

// const tech_department = {
//   name: "Tech",
//   printDetail: accounting_department.printDetail,
// };

// tech_department.printDetail();
