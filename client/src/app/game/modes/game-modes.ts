import {Signal, Type} from '@angular/core';
import {Keyboard} from '../../ui/keyboards/keyboards';

export abstract class GameMode {
  public abstract getKeyBoard: Signal<Type<Keyboard>>;
}
