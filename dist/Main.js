"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Student_1 = require("./Student");
const Professor_1 = require("./Professor");
class Main {
    salaryResult() {
        return 90;
    }
    start() {
        let p = new Professor_1.Professor(90000, 'Alexa', 'Lorem', 'Math', 30);
        let s = new Student_1.Student('Josh', 'Ipsum', 17);
        console.log(p.getPayAmount());
        console.log(p.setSalary(80000));
        console.log(p.getPayAmount());
        // console.log(p.personId);
        s.studentClasses = 'Math';
        s.studentClasses = 'Backend';
        console.log(p.print()); // total de caracteres, 2, error
    }
}
exports.Main = Main;
