import {Component, inject, OnInit} from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {LoginService} from '../services/login.service';
import {MatButton} from '@angular/material/button';
import {AsyncPipe, NgIf} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {

  private _snackBar = inject(MatSnackBar);

  public constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.isLoggedIn().subscribe((isLoggedIn) => {
      console.log('Home: IsLoggedIn: ' + isLoggedIn);
    });
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  public logout(): void {
    this.loginService.logout();
  }

}
