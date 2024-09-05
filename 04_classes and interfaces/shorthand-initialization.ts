// shorthand initialization and readonly modifier

class Department {
  private employees: string[] = [];

  // constructor will create the properties with names of "id" and "name" and initialize them as well
  constructor(private readonly id: string, private name: string) {}

  printDetail(this: Department) {
    // explicitly assign type to this variable
    console.log("Department: ", this.id, " ", this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmpInfo() {
    console.log("Total Employees Count: ", this.employees.length);
    console.log("All Employees: ", this.employees);
  }
}
const accounting_department = new Department("Ac", "Accounting");
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
