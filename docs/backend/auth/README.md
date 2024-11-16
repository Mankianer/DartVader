# User Authentication

_Infos zur User Authentication im Backend_

Für die User Authentication werden JWTs verwendet. Diese werden von Keycloak ausgestellt und können vom Backend
verifiziert werden.

Für die Einstellung des jwt-issuer muss die Property `spring.security.oauth2.resourceserver.jwt.issuer-uri`.

## AuthConfig

In der Klasse [`AuthConfig.java`](../../../src/main/java/de/dartvader/dartvader/config/AuthConfig.java) sind die
Einstellungen für die Authentifizierung hinterlegt.

## PublicAuthEndpoint

Der Endpunkt `/auth/public/config` ist für die Authentifizierung-Config für den Client vorgesehen, um diese mit dem
Backend synchron zu halten.