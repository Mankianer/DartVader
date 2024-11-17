import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavigationComponent} from './navigation/navigation.component';
import {AuthModule} from 'angular-auth-oidc-client';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'client';

  public constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loginService.setUpLogin();
  }

}
