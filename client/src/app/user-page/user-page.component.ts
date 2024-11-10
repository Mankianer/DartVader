import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButton,
    NgIf,
    MatCardModule
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.sass'
})
export class UserPageComponent {

  public constructor(public loginService: LoginService) {
  }
}
