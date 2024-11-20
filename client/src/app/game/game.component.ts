import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {GameControlService} from './services/game-control.service';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    MatButton,
    NgIf
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.sass'
})
export class GameComponent implements OnInit{
  @ViewChild('dynamicGameModeComponentContainer', { read: ViewContainerRef, static: true })
  dynamicGameModeComponentContainer!: ViewContainerRef;

  @ViewChild('dynamicKeyBoardContainer', { read: ViewContainerRef, static: true })
  dynamicKeyboardComponentContainer!: ViewContainerRef;

  constructor(public gameControlService: GameControlService) {
  }

  ngOnInit(): void {
    this.gameControlService.setViewContainerRefGameMode(this.dynamicGameModeComponentContainer);
    this.gameControlService.setViewContainerRefKeyBoard(this.dynamicKeyboardComponentContainer);
  }

  loadComponent(gameModeName: string): void {
    this.gameControlService.loadGameMode(gameModeName);
  }
}
