"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Device_1 = require("./models/Device");
const Iphone_1 = require("./models/Iphone");
const Kindle_1 = require("./models/Kindle");
class Main {
    // type guard
    isCallable(idontknow) {
        return ('number' in idontknow &&
            'zoneCode' in idontknow &&
            'call' in idontknow &&
            'getFormatedNumber' in idontknow);
    }
    start() {
        let touchables = [];
        touchables.push(new Iphone_1.Iphone(12345, 502, 'Apple'));
        touchables.push(new Kindle_1.Kindle('Amazon'));
        touchables.forEach((t) => {
            if (t instanceof Device_1.Device)
                console.log(t.brand);
            if (this.isCallable(t))
                t.call(502, 4567890);
            // if (t implementationof Callable) t.call(502, 4567890);
        });
    }
}
exports.Main = Main;
/**
 * Interfaz: [Estandarizar comportamiento]
 *
 * - Comunicacion entre dos entidades
 * - Definir comportamiento similar
 *
 *
 * - Contrat, define clases
 *
 *
 * 2
 *
 *
 * - Standard
 * - Type
 *
 */
