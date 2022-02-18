import { Audible } from '../Interfaces/Audible';
import { Callable } from '../Interfaces/Callable';
import { Touchable } from '../Interfaces/Touchable';
import { Device } from './Device';

export class Iphone extends Device implements Audible, Touchable, Callable {
  speakerCount: number = 4;
  position: [number, number] = [0, 0];

  constructor(public number: number, public zoneCode: number, brand: string) {
    super(brand);
  }

  play(): string {
    return 'Playing...';
  }

  // play(another: number): number {
  //   return another;
  // }

  //

  call(zoneCode: number, number: number) {
    console.log('Calling...');
  }

  getFormatedNumber(): string {
    return `${this.zoneCode}-${this.number}`;
  }

  click(x: number, y: number): void {
    this.position = [x, y];
    console.log(`Clicked possition ${x} ${y}`);
  }
}
