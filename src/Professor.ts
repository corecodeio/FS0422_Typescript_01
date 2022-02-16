import { Person } from './Person';

export class Professor extends Person {
  //private salary: number;
  //main_class: string;

  constructor(
    private salary: number,
    name: string,
    last_name: string,
    public main_class: string,
    age: number
  ) {
    super(name, last_name, age);
    // this.salary = salary;
    // this.main_class = main_class;
  }

  getPayAmount(): number {
    return this.salary;
  }

  // setSalary(newSalary: number): number | string {
  //   if (newSalary >= 80000 && newSalary < 100000) {
  //     return (this.salary = newSalary);
  //   }
  //   return `El salario no cumple con el minimo o el maximo`;
  // }

  private verifyNewSalary(newSalary: number): boolean {
    return newSalary >= 80000 && newSalary < 100000;
  }

  setSalary(newSalary: number): boolean {
    const setSalaryResult = this.verifyNewSalary(newSalary);
    if (setSalaryResult) {
      this.salary = newSalary;
    }
    return setSalaryResult;
  }

  badIdGnerator() {
    //this.personId = 'sfaskjdfhaksjfdalsk';
  }

  print(): string {
    return `
    ====================================
      ${this.name}  ${this.last_name}
            ${this.personId}
    ====================================
    `;
  }
}
