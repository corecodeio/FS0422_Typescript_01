"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const uuid_1 = require("uuid");
class Person {
    constructor(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
        // this.name = name;
        // this.last_name = last_name;
        // this.age = age;
        this.id = (0, uuid_1.v4)();
    }
    // name: string = '';
    // last_name: string = '';
    // age: number = 0;
    get personId() {
        return this.id;
    }
    getFullName() {
        return `${this.name} ${this.last_name}`;
    }
}
exports.Person = Person;
