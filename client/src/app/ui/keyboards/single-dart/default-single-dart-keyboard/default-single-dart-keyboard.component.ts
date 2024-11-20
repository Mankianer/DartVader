import {Component, signal, Signal} from '@angular/core';
import {InputSingleDart, SingleDartKeyboard} from '../../keyboards';
import {NgForOf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-default-single-dart-keyboard',
  standalone: true,
  imports: [
    NgForOf,
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './default-single-dart-keyboard.component.html',
  styleUrl: './default-single-dart-keyboard.component.sass'
})
export class DefaultSingleDartKeyboardComponent extends SingleDartKeyboard {

  private getInput_ = signal(new InputSingleDart());
  public getInput: Signal<InputSingleDart> = this.getInput_.asReadonly();

  public numbers: number[] = Array.from({ length: 20 }, (_, i) => i + 1);

  constructor() {
    super();
  }

}
