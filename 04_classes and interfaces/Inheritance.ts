// Inheritance

class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {}

  printDetail(this: Department) {
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

class ITDedpartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const it_department = new ITDedpartment("IT", ["Lavish"]);

// it_department.printDetail();

// it_department.addEmployee("Lavish");
// it_department.addEmployee("Rahul");

// it_department.printEmpInfo();

console.log(it_department);

class AccountsDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounts");
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounts = new AccountsDepartment("Ac", ["Year 2024 reports..."]);

console.log(accounts);
