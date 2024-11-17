import {Component, effect} from '@angular/core';
import {LoginService} from '../services/login.service';
import {NgForOf, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    MatCardModule,
    NgForOf

  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.sass'
})
export class UserPageComponent {

  public constructor(public loginService: LoginService, public httpClient: HttpClient) {
  }

  public callBackend() {
    this.httpClient.get('/api/me', {responseType: 'text'}).subscribe(data => {
      console.log(data);
    });
  }

  protected readonly effect = effect;
}
