import {Component, computed, signal, Signal, WritableSignal} from '@angular/core';
import {
  DartSegment,
  InputSingleDart,
  isDartSegment,
  KeyInputEvent,
  SingleDartKeyboard,
  StandardSegment
} from '../../keyboards';
import {NgClass, NgForOf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-default-single-dart-keyboard',
  standalone: true,
  imports: [
    NgForOf,
    MatButtonModule,
    MatIcon,
    NgClass
  ],
  templateUrl: './default-single-dart-keyboard.component.html',
  styleUrl: './default-single-dart-keyboard.component.sass'
})
export class DefaultSingleDartKeyboardComponent extends SingleDartKeyboard {

  private getInput_: WritableSignal<InputSingleDart | KeyInputEvent > = signal('init-keyboard');
  public getInput = this.getInput_.asReadonly();

  numbers: StandardSegment[] = Array.from({ length: 20 }, (_, i) =>  (i + 1) as StandardSegment);

  private multiplier_: WritableSignal<1 | 2 | 3> = signal(2);
  multiplier = this.multiplier_.asReadonly();
  multiplierChar: Signal<string> = computed(() => {
    switch (this.multiplier_()) {
      case 1:
        return '';
      case 2:
        return 'D';
      case 3:
        return 'T';
    }
  });


  constructor() {
    super();
  }

  input(value: DartSegment | KeyInputEvent): void {
    let input: InputSingleDart | KeyInputEvent;
    if (isDartSegment(value)) {
      input = new InputSingleDart();
      input.segment = value;
      input.multiplier = this.multiplier_();
    } else {
      input = value;
    }
    this.getInput_.set(input);
  }

  setMultiplier(multiplier: 2 | 3): void {
    if (this.multiplier_() === multiplier) {
      this.multiplier_.set(1);
      return;
    }
    this.multiplier_.set(multiplier);
  }

}
