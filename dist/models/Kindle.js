"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kindle = void 0;
const Device_1 = require("./Device");
class Kindle extends Device_1.Device {
    constructor(brand) {
        super(brand);
        this.number = '0';
        this.position = [0, 0];
    }
    click(x, y) {
        this.position = [y, x];
        console.log(`------- Clicked possition ${x} ${y}`);
    }
}
exports.Kindle = Kindle;
