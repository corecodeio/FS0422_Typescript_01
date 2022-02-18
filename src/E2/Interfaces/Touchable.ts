export interface Touchable {
  position: [number, number];
  click(x: number, y: number): void;
  // drag(x1: number, y1: number, x2: number, y2: number): void;
}
