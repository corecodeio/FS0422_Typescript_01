"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const uuid_1 = require("uuid");
class Device {
    constructor(brand) {
        this.brand = brand;
        this.serialNumber = (0, uuid_1.v4)();
    }
    get id() {
        return this.serialNumber;
    }
}
exports.Device = Device;
