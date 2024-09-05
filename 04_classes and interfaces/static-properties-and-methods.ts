// static properties and methods

class Department {
  static fiscalYer = 2024;
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    console.log(Department.fiscalYer);
  }

  static createEmpoyee(name: string) {
    return { name };
  }

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

const emp1 = Department.createEmpoyee("Luv");
console.log(emp1);
console.log(Department.fiscalYer);

class AccountsDepartment extends Department {
  private lastReport: string;

  // getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No reports found");
  }

  // setter
  set mostRecentReport(report: string) {
    if (!report) {
      throw new Error("Please provide a valid report");
    }

    this.addReports(report);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounts");
    this.lastReport = reports[0];
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      console.log(employee, "is not in accounts department");
      return;
    }
    this.employees.push(employee);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounts = new AccountsDepartment("Ac", []);

// console.log(accounts);

accounts.addReports("Year 2024 reports...");
accounts.mostRecentReport = "Profit for year 2024 is 20k crores";
console.log(accounts.mostRecentReport);

accounts.addEmployee("Max");
