import {Injectable, signal, Type, ViewContainerRef} from '@angular/core';
import {DownComponent} from '../modes/down/down.component';

@Injectable({
  providedIn: 'root'
})
export class GameControlService {

  private viewContainerRef: ViewContainerRef | null = null;

  private isGameRunning_ = signal(false);
  public isGameRunning = this.isGameRunning_.asReadonly();

  constructor() {}

  public loadGameMode(gameModeName: string): void {
    if (!this.viewContainerRef) {
      throw new Error('ViewContainerRef is not set');
    }

    this.stopGame();

    const component = this.getComponentByName(gameModeName);
    if (component) {
      this.viewContainerRef.createComponent(component);
      this.isGameRunning_.set(true);
    } else {
      console.error(`GameMode: ${gameModeName} not found`);
    }
  }

  public stopGame(): void {
    this.viewContainerRef?.clear();
    this.isGameRunning_.set(false);
  }

  private getComponentByName(name: string): Type<any> | null {
    const components: { [key: string]: Type<any> } = {
      'down': DownComponent,
    };

    return components[name] || null;
  }

  public setViewContainerRef(viewContainerRef: ViewContainerRef): void {
    this.viewContainerRef = viewContainerRef;
  }

}
