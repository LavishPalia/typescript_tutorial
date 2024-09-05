// Abstract method and classes

// abstract classes cannot be instantiated
// derived classed must provide an implementation for all the abstract methods
abstract class Department {
  static fiscalYer = 2024;
  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {
    // console.log(Department.fiscalYer);
  }

  static createEmpoyee(name: string) {
    return { name };
  }

  abstract printDetail(this: Department): void;

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

  printDetail(): void {
    console.log("IT department - ID: ", this.id);
  }
}

new ITDedpartment("IT", []).printDetail();

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

  printDetail(): void {
    console.log("Accounts department - ID: ", this.id);
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

accounts.printDetail();
// console.log(accounts);

accounts.addReports("Year 2024 reports...");
accounts.mostRecentReport = "Profit for year 2024 is 20k crores";
// console.log(accounts.mostRecentReport);

// accounts.addEmployee("Max");
