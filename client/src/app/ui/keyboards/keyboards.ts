import {Signal} from '@angular/core';

export abstract class Keyboard {
  public abstract getInput: Signal<InputInterface | KeyInputEvent>;
}

export abstract class SingleDartKeyboard extends Keyboard {
  public abstract override getInput: Signal<InputSingleDart | KeyInputEvent>;
}

export abstract class SumDartKeyboard extends Keyboard {
  public abstract override getInput: Signal<InputSumDart | KeyInputEvent>;
}

export type StandardSegment = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
export type SpecialSegment = 25 | 50;
export type DartSegment = StandardSegment | SpecialSegment;
export type KeyInputEvent = 'back' | 'init-keyboard';

export function isDartSegment(value: any): value is DartSegment {
  return typeof value === 'number' && (value >= 0 && value <= 20 || value === 25 || value === 50);
}
export function isKeyInputEvent(value: any): value is KeyInputEvent {
  return value === 'back' || value === 'init-keyboard';
}

interface InputInterface {
  value: number;
}

export class InputSingleDart implements InputInterface {

  /**
   * 1 - single
   * 2 - double
   * 3 - triple
   * ignore - 0
   */
  public multiplier: 1 | 2 | 3 = 1;
  public segment: DartSegment = 0;

  public get value(): number {
    if (this.segment > 20) {
      return this.segment;
    }
    return this.segment * this.multiplier;
  }

}

export class InputSumDart implements InputInterface {
  public value: number = 0;
}


