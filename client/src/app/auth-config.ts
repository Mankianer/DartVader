import {StsConfigHttpLoader, StsConfigLoader} from 'angular-auth-oidc-client';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../environments/environment';


export const httpLoaderFactory = (httpClient: HttpClient) => {
  const config$ = httpClient.get<any>(environment.api + '/public/auth/config').pipe(
    map((customConfig: any) => {
      let config = {
        ...customConfig,
        secureRoutes: [environment.api, 'http://localhost:8081'],
        redirectUrl: window.location.origin + "/profile",
        postLogoutRedirectUri: window.location.origin + "/home",
        triggerAuthorizationResultEvent: true,
        silentRenew: true,
        useRefreshToken: true,
      };
      console.log('config', config);
      return config;
    })
  );
  return new StsConfigHttpLoader(config$);
};

export const authConfigLoader = {provide: StsConfigLoader, useFactory: httpLoaderFactory, deps: [HttpClient]};
