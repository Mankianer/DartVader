import {Component, inject, Input, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {MatButton} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {

  private _snackBar = inject(MatSnackBar);

  @Input()
  set redirectUrl(value: string) {
    if (value && value.startsWith('/')) {
      this.router.navigate([value]).then();
    }
  }

  public constructor(public loginService: LoginService, public router: Router) {
  }

  ngOnInit(): void {
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  public logout(): void {
    this.loginService.logout();
  }

}
