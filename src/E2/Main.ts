import { Audible } from './Interfaces/Audible';
import { Callable } from './Interfaces/Callable';
import { Runnable } from './Interfaces/Runnable';
import { Touchable } from './Interfaces/Touchable';
import { Device } from './models/Device';
import { Iphone } from './models/Iphone';
import { Kindle } from './models/Kindle';

export class Main implements Runnable {
  // type guard
  isCallable(idontknow: unknown): idontknow is Callable {
    return (
      'number' in (idontknow as Callable) &&
      'zoneCode' in (idontknow as Callable) &&
      'call' in (idontknow as Callable) &&
      'getFormatedNumber' in (idontknow as Callable)
    );
  }

  start(): void {
    let touchables: Touchable[] = [];
    touchables.push(new Iphone(12345, 502, 'Apple'));
    touchables.push(new Kindle('Amazon'));

    touchables.forEach((t: Touchable) => {
      if (t instanceof Device) console.log(t.brand);
      if (this.isCallable(t)) t.call(502, 4567890);
      // if (t implementationof Callable) t.call(502, 4567890);
    });
  }
}

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
