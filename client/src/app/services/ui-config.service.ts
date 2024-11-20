import {computed, Injectable, Signal, signal, Type, WritableSignal} from '@angular/core';
import {
  DefaultSingleDartKeyboardComponent
} from '../ui/keyboards/single-dart/default-single-dart-keyboard/default-single-dart-keyboard.component';
import {Keyboard, SingleDartKeyboard, SumDartKeyboard} from '../ui/keyboards/keyboards';
import {
  DefaultSumDartKeyboardComponent
} from '../ui/keyboards/sum-dart/default-sum-dart-keyboard/default-sum-dart-keyboard.component';

type KeyboardType = 'single-dart' | 'sum-dart';

@Injectable({
  providedIn: 'root'
})
export class UiConfigService {

  private static KEYBOARD_SINGLE_DART: { [key: string]: Type<SingleDartKeyboard> } = {
    'default': DefaultSingleDartKeyboardComponent,
  }
  private static KEYBOARD_SUM_DART: { [key: string]: Type<SumDartKeyboard> } = {
    'default': DefaultSumDartKeyboardComponent,
  }

  public static DUMMY_INIT_KEYBOARD = DefaultSingleDartKeyboardComponent;

  private preferredSingleDartKeyboardType_: WritableSignal<string> = signal('default');
  private preferredSumDartKeyboardType_: WritableSignal<string> = signal('default');
  public preferredSingleDartKeyboard: Signal<Type<SingleDartKeyboard>> = computed(() => {
    return this.getKeyboardSingleDartComponent(this.preferredSingleDartKeyboardType_());
  })
  public preferredSumDartKeyboard: Signal<Type<SumDartKeyboard>> = computed(() => {
    return this.getKeyboardSumDartComponent(this.preferredSumDartKeyboardType_());
  })

  private defaultKeyboardType_: WritableSignal<KeyboardType> = signal('single-dart');
  public defaultKeyboard: Signal<Type<Keyboard>> = computed(() => {
    if (this.defaultKeyboardType_() === 'sum-dart') {
      return this.preferredSumDartKeyboard();
    } else {
      return this.preferredSingleDartKeyboard();
    }
  })


  constructor() { }

  /**
   * Set preferred single dart keyboard type
   * @param type
   */
  public setPreferredSingleDartKeyboardType(type: string): void {
    if (!UiConfigService.KEYBOARD_SINGLE_DART[type]) {
      throw new Error(`Single dart keyboard type ${type} not found`);
    }
    this.preferredSingleDartKeyboardType_.set(type);
  }

  /**
   * Set preferred sum dart keyboard type
   * @param type
   */
  public setPreferredSumDartKeyboardType(type: string): void {
    if (!UiConfigService.KEYBOARD_SUM_DART[type]) {
      throw new Error(`Sum dart keyboard type ${type} not found`);
    }
    this.preferredSumDartKeyboardType_.set(type);
  }

  /**
   * Set default keyboard type
   * @param type
   */
  public setDefaultKeyboardType(type: KeyboardType): void {
    this.defaultKeyboardType_.set(type);
  }

  private getKeyboardSingleDartComponent(name: string): Type<SingleDartKeyboard> {
    return UiConfigService.KEYBOARD_SINGLE_DART[name];
  }

  private getKeyboardSumDartComponent(name: string): Type<SumDartKeyboard> {
    return UiConfigService.KEYBOARD_SUM_DART[name];
  }
}
