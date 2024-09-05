// singleton pattern and private constructors
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// abstract classes cannot be instantiated
// derived classed must provide an implementation for all the abstract methods
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        // console.log(Department.fiscalYer);
    }
    Department.createEmpoyee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmpInfo = function () {
        console.log("Total Employees Count: ", this.employees.length);
        console.log("All Employees: ", this.employees);
    };
    Department.fiscalYer = 2024;
    return Department;
}());
var ITDedpartment = /** @class */ (function (_super) {
    __extends(ITDedpartment, _super);
    function ITDedpartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDedpartment.prototype.printDetail = function () {
        console.log("IT department - ID: ", this.id);
    };
    return ITDedpartment;
}(Department));
new ITDedpartment("IT", []).printDetail();
var AccountsDepartment = /** @class */ (function (_super) {
    __extends(AccountsDepartment, _super);
    function AccountsDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounts") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountsDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountsDepartment("Ac", []);
        return this.instance;
    };
    Object.defineProperty(AccountsDepartment.prototype, "mostRecentReport", {
        // getter
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No reports found");
        },
        // setter
        set: function (report) {
            if (!report) {
                throw new Error("Please provide a valid report");
            }
            this.addReports(report);
        },
        enumerable: false,
        configurable: true
    });
    AccountsDepartment.prototype.printDetail = function () {
        console.log("Accounts department - ID: ", this.id);
    };
    AccountsDepartment.prototype.addEmployee = function (employee) {
        if (employee === "Max") {
            console.log(employee, "is not in accounts department");
            return;
        }
        this.employees.push(employee);
    };
    AccountsDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountsDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountsDepartment;
}(Department));
var accounts = AccountsDepartment.getInstance();
var accounts2 = AccountsDepartment.getInstance();
console.log(accounts);
console.log(accounts2);
