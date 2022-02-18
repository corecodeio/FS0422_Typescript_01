export interface Callable {
  number: number;
  zoneCode: number;
  call(zoneCode: number, number: number): void;
  getFormatedNumber(): string;
  // play(another: number): number;
}
