"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const Person_1 = require("./Person");
class Professor extends Person_1.Person {
    //private salary: number;
    //main_class: string;
    constructor(salary, name, last_name, main_class, age) {
        super(name, last_name, age);
        this.salary = salary;
        this.main_class = main_class;
        // this.salary = salary;
        // this.main_class = main_class;
    }
    getPayAmount() {
        return this.salary;
    }
    // setSalary(newSalary: number): number | string {
    //   if (newSalary >= 80000 && newSalary < 100000) {
    //     return (this.salary = newSalary);
    //   }
    //   return `El salario no cumple con el minimo o el maximo`;
    // }
    verifyNewSalary(newSalary) {
        return newSalary >= 80000 && newSalary < 100000;
    }
    setSalary(newSalary) {
        const setSalaryResult = this.verifyNewSalary(newSalary);
        if (setSalaryResult) {
            this.salary = newSalary;
        }
        return setSalaryResult;
    }
    badIdGnerator() {
        //this.personId = 'sfaskjdfhaksjfdalsk';
    }
    print() {
        return `
    ====================================
      ${this.name}  ${this.last_name}
            ${this.personId}
    ====================================
    `;
    }
}
exports.Professor = Professor;
