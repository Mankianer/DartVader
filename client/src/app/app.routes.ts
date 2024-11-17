import {Routes} from '@angular/router';
import {LoggedInComponent} from './logged-in/logged-in.component';
import {AutoLoginPartialRoutesGuard} from 'angular-auth-oidc-client';
import {HomeComponent} from './home/home.component';
import {UserPageComponent} from './user-page/user-page.component';
import {GameComponent} from './game/game.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: UserPageComponent },
  { path: 'game', component: GameComponent },
  { path: 'loggedIn', component: LoggedInComponent, canActivate: [AutoLoginPartialRoutesGuard] },
];
