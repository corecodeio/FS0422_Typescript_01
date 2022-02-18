import { Person } from './Person';
import { Student } from './Student';
import { Professor } from './Professor';
export class Main {
  salaryResult() {
    return 90;
  }

  start() {
    let p = new Professor(90000, 'Alexa', 'Lorem', 'Math', 30);
    let s = new Student('Josh', 'Ipsum', 17);

    console.log(p.getPayAmount());
    console.log(p.setSalary(80000));
    console.log(p.getPayAmount());
    // console.log(p.personId);

    s.studentClasses = 'Math';
    s.studentClasses = 'Backend';

    console.log(p.print()); // total de caracteres, 2, error
  }
}
