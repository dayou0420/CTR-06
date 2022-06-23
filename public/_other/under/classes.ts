abstract class Department {
    static fiscalYear = 2022;
    // private readonly id: string;
    // name: string;
    protected employees: string[] =[];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    static createEmployee(name: string) {
        return { name: name }
    }

    abstract describe(this: Department): void;

    addEmployee(employees: string) {
        // this.id = 'd2';
        this.employees.push(employees);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, private admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT Department' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('The Report is not found.');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Input correct value.');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }

        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReport() {
        console.log(this.reports);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    describe() {
        console.log('Accounting Department' + this.id);
    }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

// const accounting = new AccountingDepartment ('d2', []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Some Reports';

accounting.addReport('something');
accounting.printReport();

console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printEmployeeInformation();

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Manu');
it.addEmployee('Max');

// accounting.employees[2] = 'Anna';
// accounting.name = 'NEW NAME';

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

accounting.describe();
