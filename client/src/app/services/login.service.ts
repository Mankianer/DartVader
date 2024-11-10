import { Injectable } from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public constructor(private readonly oidcSecurityService: OidcSecurityService) {
    // this.setUpLogin();
  }

  setUpLogin(): void {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, accessToken }) => {
        console.log('app authenticated', isAuthenticated);
        console.log(`Current access token is '${accessToken}'`);
        this.oidcSecurityService.getUserData().subscribe((userData) => {
          console.log('userData', userData);
        });
      });
  }

  getUserName(): Observable<string> {
    return this.oidcSecurityService.getUserData().pipe(map((data) => data.given_name));
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

  isLoggedIn(): Observable<boolean> {
    return this.oidcSecurityService.isAuthenticated();
  }
}
