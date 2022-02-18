import { Person } from './Person';

export class Student extends Person {
  private classes: string[] = [];

  set studentClasses(classname: string) {
    this.classes.push(classname);
  }

  get studentClasses(): string {
    return this.classes.toString();
  }

  assignClass(className: string) {
    this.classes.push(className);
  }
}
