import {Component, Signal, signal} from '@angular/core';
import {InputSumDart, SumDartKeyboard} from '../../keyboards';

@Component({
  selector: 'app-default-sum-dart-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './default-sum-dart-keyboard.component.html',
  styleUrl: './default-sum-dart-keyboard.component.sass'
})
export class DefaultSumDartKeyboardComponent extends SumDartKeyboard {

  private getInput_ = signal(new InputSumDart());
  public getInput: Signal<InputSumDart> = this.getInput_.asReadonly();

  constructor() {
    super();
  }

}
