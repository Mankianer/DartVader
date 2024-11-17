import {Component} from '@angular/core';
import {GameControlService} from '../../services/game-control.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-down',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './down.component.html',
  styleUrl: './down.component.sass'
})
export class DownComponent {

  constructor(public gameControlService: GameControlService) {
  }
}
