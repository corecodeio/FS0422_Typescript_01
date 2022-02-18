import { v4 as uuidv4 } from 'uuid';

export class Device {
  private serialNumber: string;

  get id(): string {
    return this.serialNumber;
  }

  constructor(public brand: string) {
    this.serialNumber = uuidv4();
  }
}
