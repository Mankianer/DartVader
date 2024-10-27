import {Component, inject, Injectable, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {NavigationComponent} from './navigation/navigation.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {AuthModule, OidcSecurityService} from 'angular-auth-oidc-client';
import {authConfig} from './auth-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggle, NavigationComponent, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatCardModule, NavigationComponent, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  title = 'client';
  private readonly oidcSecurityService = inject(OidcSecurityService);

  ngOnInit(): void {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, accessToken }) => {
        console.log('app authenticated', isAuthenticated);
        console.log(`Current access token is '${accessToken}'`);
      });
  }

  login(): void {
    console.log('start login');
    this.oidcSecurityService.authorize();
  }

  refreshSession(): void {
    console.log('start refreshSession');
    this.oidcSecurityService.authorize();
  }

  logout(): void {
    console.log('start logoff');
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log(result));
  }
}
