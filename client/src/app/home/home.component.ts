import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';
import {NotificationService} from '../services/notification.service';

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

  @Input()
  set redirectUrl(value: string) {
    if (value && value.startsWith('/')) {
      this.router.navigate([value]).then();
    }
  }

  public constructor(public loginService: LoginService, public router: Router, public notificationService: NotificationService) {
  }

  ngOnInit(): void {
  }


  public logout(): void {
    this.loginService.logout();
  }

}
