import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) { }

  public sendNotification(message: string, action: string = 'Close'): void {
    this._snackBar.open(message, action);
  }
}
