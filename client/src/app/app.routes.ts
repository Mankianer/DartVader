import { Routes } from '@angular/router';
import {LoggedInComponent} from './logged-in/logged-in.component';

export const routes: Routes = [
  { path: '', redirectTo: '/loggedIn', pathMatch: 'full' },
  { path: 'loggedIn', component: LoggedInComponent },
];
