import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {LoginResponse, OidcSecurityService} from 'angular-auth-oidc-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isAuthenticated = signal(false);
  public isLoggedIn: Signal<boolean> = this.isAuthenticated.asReadonly();

  private userName = signal('N/A');
  public getUserName: Signal<string> = this.userName.asReadonly();

  private roles: WritableSignal<[string]> = signal(['N/A']);
  public getRoles: Signal<[string]> = this.roles.asReadonly();


  public getInRoleSignal(role: string): Signal<boolean> {
    return computed(() => this.getRoles().includes(role));
  }

  public isDartVaderGroup: Signal<boolean> = computed(() => this.getInRoleSignal('DARTVADER_USER')());

  public constructor(private readonly oidcSecurityService: OidcSecurityService) {
  }

  private loginResponseObservable: Observable<LoginResponse> | undefined;

  setUpLogin(): void {

    this.loginResponseObservable = this.oidcSecurityService
      .checkAuth()

    this.loginResponseObservable
      .subscribe(({ isAuthenticated, accessToken }) => {
        console.log('app authenticated', isAuthenticated);
        this.oidcSecurityService.getUserData().subscribe((userData) => {
          console.log('userData', userData);

          if(userData) {
            this.userName.set(userData?.given_name);
            this.roles.set(userData?.realm_access?.roles);
          }

        });
        this.isAuthenticated.set(isAuthenticated);
      });
  }


  login(): void {
    console.log('start login');
    this.oidcSecurityService.authorize('',{redirectUrl: window.location.origin + "/home?redirectUrl=" + window.location.pathname});
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
