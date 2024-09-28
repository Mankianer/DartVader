# Keycloak Docs

_Hilfe für den Umgang mit dem Dev-Keycloak._

Der Keycloak ist unter [http://localhost:8081](http://localhost:8081) erreichbar.

## Standard Realm

_Beschreibung der standard Einstellung für den dev-keycloak._

## Master Realm

Standard admin: admin/admin

## DartVader Realm

### Dev-DartVader - Client

_Für Dev-Stage für die DartVader App._

Client-ID: Dev-DartVader  
Erlaubte Adressen:  
Frontend: http://localhost:4200

#### Role: DARTVADER_USER

_Rolle für Client zugehörigkeit. Als dummy für Rollen-Model._
Der Nutzer `user` hat diese Rolle.

### User

* User: user/user
    * Rolle: DARTVADER_USER

* No-User: nuser/nuser
    * ohne DARTVADER_USER

## Änderungen Speichern

Die Änderungen am Keycloak werden in der [`keycloakdb.mv.db`](..%2F..%2Fdev-env-data%2Fkeycloak%2Fh2%2Fkeycloakdb.mv.db)
gespeichert.
Diese wird beim Starten des Keycloak-Containers in den Container gemountet. Hierdurch bleiben die Änderungen erhalten
und können mit dem repo synchronisiert werden. Damit kann ein dev-stage des Keycloak einfach geteilt werden.