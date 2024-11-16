# Client Authentifizierung

_Die Authentifizierung erfolgt über JWT (JSON Web Token). Der Token wird im LocalStorage des Browsers gespeichert und
bei jeder Anfrage an den Server mitgeschickt. Der Server prüft den Token und gibt die entsprechenden Daten zurück._

## library

Für die Anmeldung wird die [angular-auth-oidc-lib](https://www.npmjs.com/package/angular-auth-oidc-client) verwendet.

### Konfiguration

Die Konfiguration erfolgt in der Datei [`auth-config.ts`](..%2F..%2F..%2Fclient%2Fsrc%2Fapp%2Fauth-config.ts).
Hier werden die Einstellungen für die Authentifizierung festgelegt.

Es wird versucht vom Server die Konfigurationen von der URL `/public/auth/config` zu laden. Wenn dies nicht klappt, wird
die Konfiguration aus der Datei [`config.json`](..%2F..%2F..%2Fclient%2Fpublic%2Fauth%2Fconfig.json) geladen.

_Aktuell sind die Konfigurationen für den localen dev-Keycloak konfiguriert._