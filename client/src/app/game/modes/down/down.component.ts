import {Component, Signal, Type} from '@angular/core';
import {GameControlService} from '../../services/game-control.service';
import {MatButtonModule} from '@angular/material/button';
import {UiConfigService} from '../../../services/ui-config.service';
import {Keyboard} from '../../../ui/keyboards/keyboards';
import {GameMode} from '../game-modes';

@Component({
  selector: 'app-down',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './down.component.html',
  styleUrl: './down.component.sass'
})
export class DownComponent extends GameMode {

  public getKeyBoard: Signal<Type<Keyboard>>;

  constructor(public gameControlService: GameControlService, private uiConfigService: UiConfigService) {
    super();
    this.getKeyBoard = uiConfigService.defaultKeyboard;
  }

}
