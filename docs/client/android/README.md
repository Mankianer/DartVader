# Android App

_Hier eine kurze auflistung zur Portierung nach Android_

## Framework

Für das Konvertieren der Angular App in eine Android App wird das Framework [Capacitor](https://capacitorjs.com/docs/)
verwendet.
Dieses Framework ermöglicht es, die Angular App in eine Android App zu konvertieren.

## Setup

Hier klicken für das [Setup](https://capacitorjs.com/docs/getting-started/environment-setup) von Capacitor.

## Build

Nach dem der Client gebaut wurde kann die WebApp in die Android App gesynct werden:

```bash
npx cap sync
```

_ToDo: in package.json als Task aufnehmen!_

## Run

Um die App auf einem Android Gerät zu starten, kann folgender Befehl verwendet werden:

```bash
npx cap open android # startet Android Studio
npx cap run android # startet die App auf dem Gerät
```

Das eigene Gerät kann auch über USB angeschlossen werden und die App wird automatisch auf das Gerät installiert, wenn
USB-Debugging aktiv ist.