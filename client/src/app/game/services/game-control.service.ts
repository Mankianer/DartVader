import {
  ComponentRef,
  computed,
  effect,
  Injectable,
  Signal,
  signal,
  Type,
  ViewContainerRef,
  WritableSignal
} from '@angular/core';
import {DownComponent} from '../modes/down/down.component';
import {GameMode} from '../modes/game-modes';
import {NotificationService} from '../../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class GameControlService {

  private static GAME_MODES_MAP: { [key: string]: Type<GameMode> } = {
    'down': DownComponent,
  }

  private viewContainerRefGameDisplay: ViewContainerRef | null = null;
  private viewContainerRefKeyBoard: ViewContainerRef | null = null;

  public isGameRunning: Signal<boolean> = computed(() => this.currentGameMode_() !== null);

  private currentGameMode_: WritableSignal<Type<GameMode> | null> = signal(null);
  private currentGameModeInstance_: Signal<ComponentRef<GameMode> | null> = computed(() => {
    let currentGameMode = this.currentGameMode_();
    if (currentGameMode && this.viewContainerRefGameDisplay) {
      return this.viewContainerRefGameDisplay.createComponent(currentGameMode);
    }
    this.viewContainerRefGameDisplay?.clear();
    return null;
  });

  constructor(public notificationService: NotificationService) {
    effect(() => {
      let currentGameModeInstance = this.currentGameModeInstance_();
      this.viewContainerRefKeyBoard?.clear();
      if (currentGameModeInstance) {
        let currentKeyBoard = currentGameModeInstance.instance.getKeyBoard();
        if (this.viewContainerRefKeyBoard) {
          this.viewContainerRefKeyBoard.createComponent(currentKeyBoard);
          return;
        }
      }
    });
  }

  public loadGameMode(gameModeName: string): void {
    if (!this.viewContainerRefGameDisplay) {
      console.error('ViewContainerRef is not set');
      this.notificationService.sendNotification('ViewContainerRef is not set');
    }
    this.stopGame();
    let component = this.getComponentByName(gameModeName);
    if (component) {
      this.currentGameMode_.set(component);
    } else {
      this.notificationService.sendNotification(`GameMode: ${gameModeName} not found`);
    }
  }

  public stopGame(): void {
    this.currentGameMode_.set(null);
  }

  private getComponentByName(name: string): Type<GameMode> | null {

    return GameControlService.GAME_MODES_MAP[name] || null;
  }

  public setViewContainerRefGameMode(viewContainerRef: ViewContainerRef): void {
    this.viewContainerRefGameDisplay = viewContainerRef;
  }

  public setViewContainerRefKeyBoard(viewContainerRef: ViewContainerRef) {
    this.viewContainerRefKeyBoard = viewContainerRef;
  }

}
