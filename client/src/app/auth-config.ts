import {LogLevel, StsConfigHttpLoader, StsConfigLoader} from 'angular-auth-oidc-client';
import {HttpClient} from '@angular/common/http';
import {catchError, map, retry, switchMap} from 'rxjs/operators';
import {environment} from '../environments/environment';
import {of, throwError} from 'rxjs';
import fallbackData from '../../public/auth/fallbackconfig.json';


export const httpLoaderFactory = (httpClient: HttpClient) => {
  if(!environment.production) {
    return new StsConfigHttpLoader(of({
      ...fallbackData,
      secureRoutes: [environment.api],
      redirectUrl: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      triggerAuthorizationResultEvent: true,
      postLoginRoute: '/home',
      forbiddenRoute: '/forbidden',
      unauthorizedRoute: '/unauthorized',
      historyCleanupOff: true,
      silentRenew: true,
      useRefreshToken: true,
    }));
  }
  const config$ = httpClient.get<any>(environment.api + '/public/auth/config').pipe(
    retry(1),
    switchMap((customConfig: any) => {
      if (!customConfig.authority) {
        console.error('No authority in config');
        return  throwError(() => 'No authority in config');
      }
      return of({
        ...customConfig,
        secureRoutes: [environment.api],
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        triggerAuthorizationResultEvent: true,
        postLoginRoute: '/home',
        forbiddenRoute: '/forbidden',
        unauthorizedRoute: '/unauthorized',
        logLevel: LogLevel.Debug,
        historyCleanupOff: true,
        silentRenew: true,
        useRefreshToken: true,
      });
    }),
    catchError(() => of({
      ...fallbackData,
      secureRoutes: [environment.api],
      redirectUrl: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      triggerAuthorizationResultEvent: true,
      postLoginRoute: '/home',
      forbiddenRoute: '/forbidden',
      unauthorizedRoute: '/unauthorized',
      logLevel: LogLevel.Debug,
      historyCleanupOff: true,
      silentRenew: true,
      useRefreshToken: true,
    }))
  );

  return new StsConfigHttpLoader(config$);
};

export const authConfigLoader = {provide: StsConfigLoader, useFactory: httpLoaderFactory, deps: [HttpClient]};
