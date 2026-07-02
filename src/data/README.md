# Zentrale Datenverwaltung

Alle Inhalte und Daten für die Website werden zentral in diesem `src/data/`-Verzeichnis verwaltet.

## Dateien

### `index.js`
Haupt-Export für alle Datenmodule. Verwendet die Exports der Einzeldateien.

### `priorities.js`
Die 7 Kampagnen-Prioritäten:
- Familien verbinden
- Dorfcharakter bewahren
- Natur schützen
- Mobilität sichern
- Bürgerbeteiligung stärken
- Ehrenamt fördern
- Wohnen bezahlbar halten

Jede Priorität hat:
- `title`: Kurztitel
- `eyebrow`: Nummierte Überschrift
- `image`: SVG-Pfad
- `imageAlt`: Alt-Text
- `text`: Beschreibung

### `candidates.js`
Die 8 Kandidaten für die "Persönliche Schwerpunkte"-Sektion:
- Denise Jusinski
- Peter Kröger
- Claas Bartels
- Dorothee Kröger
- Christian Buck
- René Hamann
- Ute Schwermer-Vietheer
- Ingo Schalow

Jeder Kandidat hat:
- `name`: Name
- `profile`: Alter & Beruf
- `summary`: Kurzbeschreibung
- `priorities`: 3 persönliche Schwerpunkte
- `focus`: 4 Fokus-Tags

### `teamMembers.js`
Die 9 Team-Mitglieder (incl. Gabriele Pilkowski):
- Alle Kandidaten
- Plus Gabriele Pilkowski (ehrenamtliche Richterin)

Jedes Mitglied hat:
- `name`: Name
- `image`: Portraitfoto-Pfad
- `imagePosition`: Optional CSS-Position für Bildausschnitt
- `meta`: Kurzinfo (Alter, Beruf)
- `details`: Array von {icon, text} oder {iconImage, iconAlt, text}
- `quote`: Persönliches Zitat

### `content.js`
Zentrale Inhalte und Metadaten:

#### `organization`
- `name`: "Wählergruppe Sprötze"
- `tagline`: Kurzmotto
- `highlights`: Hero-Highlights (Array)

#### `contacts`
Datenverantwortliche:
- `webmaster`: Name, Titel, Email, Adresse
- `representative`: Name, Titel, Email, Telefon, Adresse

#### `legal`
Rechtliche Texte:
- `impressum`: Impressum-Inhalte (Überschriften, Texte)
- `datenschutz`: Datenschutzerklärung (DSGVO-konform)

## Verwendung in App.jsx

```javascript
import { priorities, candidates, teamMembers, organization, contacts, legal } from './data';
```

Diese Imports ersetzen die früheren inline-Konstanten.

## Anpassung von Inhalten

Alle diese Dateien können ohne Änderungen an `src/App.jsx` angepasst werden:
- Text ändern
- Prioritäten hinzufügen/entfernen
- Kandidaten- oder Teamdaten aktualisieren
- Kontaktinformationen pflegen

Änderungen sind sofort nach einem Neustart des Dev-Servers sichtbar.

## Erweiterung

Um neue zentrale Daten hinzuzufügen:
1. Neue Datei in `src/data/` anlegen (z.B. `src/data/events.js`)
2. Daten exportieren: `export const events = [...]`
3. In `src/data/index.js` exportieren: `export { events } from './events'`
4. In `src/App.jsx` importieren: `import { ..., events } from './data'`
