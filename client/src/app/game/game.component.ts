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

  constructor(public gameControlService: GameControlService) {
  }

  ngOnInit(): void {
    this.gameControlService.setViewContainerRef(this.dynamicGameModeComponentContainer);
  }

  loadComponent(gameModeName: string): void {
    this.gameControlService.loadGameMode(gameModeName);
  }
}
