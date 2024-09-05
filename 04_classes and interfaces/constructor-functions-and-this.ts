// constructor function and this keyword

class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printDetail(this: Department) {
    // explicitly assign type to this variable
    console.log("Department: ", this);
  }
}
const accounting_department = new Department("Accounting");
accounting_department.printDetail();

const tech_department = {
  name: "Tech",
  printDetail: accounting_department.printDetail,
};

tech_department.printDetail();
