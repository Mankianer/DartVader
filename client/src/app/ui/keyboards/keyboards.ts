import {Signal} from '@angular/core';

export abstract class Keyboard {
  public abstract getInput: Signal<InputInterface>;
}

export abstract class SingleDartKeyboard extends Keyboard {
  public abstract override getInput: Signal<InputSingleDart>;
}

export abstract class SumDartKeyboard extends Keyboard {
  public abstract override getInput: Signal<InputSumDart>;
}

type StandardSegment = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
type SpecialSegment = 25 | 50;
type DartSegment = StandardSegment | SpecialSegment;

interface InputInterface {
  value: number;
}

export class InputSingleDart implements InputInterface {
  public value: number = 0;
  /**
   * 1 - single
   * 2 - double
   * 3 - triple
   * ignore - 0
   */
  public multiplier: 1 | 2 | 3 = 1;
  public segment: DartSegment = 0;
}

export class InputSumDart implements InputInterface {
  public value: number = 0;
}


