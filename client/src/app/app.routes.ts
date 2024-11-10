import { Routes } from '@angular/router';
import {LoggedInComponent} from './logged-in/logged-in.component';
import {AutoLoginPartialRoutesGuard} from 'angular-auth-oidc-client';
import {LoggedOutComponent} from './logged-out/logged-out.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'loggedOut', component: LoggedOutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'loggedIn', component: LoggedInComponent, canActivate: [AutoLoginPartialRoutesGuard] },
];
