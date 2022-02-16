"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor() {
        super(...arguments);
        this.classes = [];
    }
    set studentClasses(classname) {
        this.classes.push(classname);
    }
    get studentClasses() {
        return this.classes.toString();
    }
    assignClass(className) {
        this.classes.push(className);
    }
}
exports.Student = Student;
