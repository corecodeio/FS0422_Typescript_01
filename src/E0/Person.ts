import { v4 as uuidv4 } from 'uuid';

export class Person {
  private id: string;
  // name: string = '';
  // last_name: string = '';
  // age: number = 0;

  protected get personId(): string {
    return this.id;
  }

  constructor(
    public name: string,
    public last_name: string,
    public age: number
  ) {
    // this.name = name;
    // this.last_name = last_name;
    // this.age = age;
    this.id = uuidv4();
  }

  getFullName() {
    return `${this.name} ${this.last_name}`;
  }
}
