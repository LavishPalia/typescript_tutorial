// singleton pattern and private constructors

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
  private static instance: AccountsDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounts");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new AccountsDepartment("Ac", []);
    return this.instance;
  }

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

const accounts = AccountsDepartment.getInstance();
const accounts2 = AccountsDepartment.getInstance();

console.log(accounts);
console.log(accounts2);
