import {LogLevel, OpenIdConfiguration} from 'angular-auth-oidc-client';

export const authConfig: OpenIdConfiguration = {
  triggerAuthorizationResultEvent: true,
  postLoginRoute: '/home',
  forbiddenRoute: '/forbidden',
  unauthorizedRoute: '/unauthorized',
  logLevel: LogLevel.Debug,
  historyCleanupOff: true,
  authority: 'http://localhost:8081/realms/Dev-DartVader',
  redirectUrl: window.location.origin,
  postLogoutRedirectUri: window.location.origin,
  clientId: 'dev-frontend',
  scope: 'openid profile email',
  responseType: 'code',
  silentRenew: true,
  useRefreshToken: true,
  secureRoutes: ['http://localhost:8080/api'],
};
