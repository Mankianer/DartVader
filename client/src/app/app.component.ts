import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {AuthModule, OidcSecurityService} from 'angular-auth-oidc-client';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  title = 'client';

  public constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.setUpLogin();
  }

}
