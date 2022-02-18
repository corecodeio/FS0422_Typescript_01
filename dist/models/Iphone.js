"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iphone = void 0;
const Device_1 = require("./Device");
class Iphone extends Device_1.Device {
    constructor(number, zoneCode, brand) {
        super(brand);
        this.number = number;
        this.zoneCode = zoneCode;
        this.speakerCount = 4;
        this.position = [0, 0];
    }
    play() {
        return 'Playing...';
    }
    // play(another: number): number {
    //   return another;
    // }
    //
    call(zoneCode, number) {
        console.log('Calling...');
    }
    getFormatedNumber() {
        return `${this.zoneCode}-${this.number}`;
    }
    click(x, y) {
        this.position = [x, y];
        console.log(`Clicked possition ${x} ${y}`);
    }
}
exports.Iphone = Iphone;
