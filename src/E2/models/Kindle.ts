import { Touchable } from '../Interfaces/Touchable';
import { Device } from './Device';

export class Kindle extends Device implements Touchable {
  number: string = '0';
  position: [number, number] = [0, 0];
  constructor(brand: string) {
    super(brand);
  }
  click(x: number, y: number): void {
    this.position = [y, x];
    console.log(`------- Clicked possition ${x} ${y}`);
  }
}
