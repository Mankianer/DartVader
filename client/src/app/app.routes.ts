import { Routes } from '@angular/router';
import {LoggedInComponent} from './logged-in/logged-in.component';
import {AutoLoginPartialRoutesGuard} from 'angular-auth-oidc-client';
import {LoggedOutComponent} from './logged-out/logged-out.component';

export const routes: Routes = [
  { path: '', redirectTo: '/loggedOut', pathMatch: 'full' },
  { path: 'loggedOut', component: LoggedOutComponent },
  { path: 'loggedIn', component: LoggedInComponent, canActivate: [AutoLoginPartialRoutesGuard] },
];
