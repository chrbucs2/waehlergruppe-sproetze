# Content-Konfiguration: articles, news und scheduleItems

Diese drei Dateien bilden die redaktionelle Struktur der Seite:

- `articles`: ausführliche Hintergrundartikel mit eigener Detailseite
- `news`: Kurzmeldungen mit optionaler Detailseite oder Verlinkung auf Artikel und externe Quellen
- `scheduleItems`: Sitzungs- und Terminobjekte mit Zusammenfassung, Detailabschnitten und Quellen

## 1. `articles`

`articles` sind die längeren Erklärstücke. Sie eignen sich für Themen, die unabhängig von einem konkreten News-Anlass dauerhaft erklärt werden sollen.

Typische Inhalte:
- `id`, `slug`, `title`, `publishedAt`, `modifiedAt`, `category`
- `introduction`
- `sections` mit Fließtext, `subheading`, `list`, `image`
- `sources`

### Beispiel

```js
export const articles = [
  {
    id: 'bebauungsplan-sproetzer-weg',
    slug: 'bebauungsplan-sproetzer-weg',
    title: 'Bebauungsplan Sprötzer Weg',
    publishedAt: '2026-05-06',
    modifiedAt: '2026-05-20',
    category: 'Stadtplanung',
    introduction: [
      'Am Sprötzer Weg soll eine bisher nur teilweise genutzte Fläche neu geordnet werden.',
      'Bisher war die freie Fläche vor allem für Einzelhandel vorgesehen. Künftig sollen dort auch soziale, kulturelle und sportliche Einrichtungen möglich sein.',
    ],
    sections: [
      {
        title: 'Was ist geplant?',
        paragraphs: [
          'Die Fläche wird als **Sondergebiet** ausgewiesen.',
          '**Das konkrete Vorhaben ist eine Kindertagesstätte**.',
        ],
      },
      {
        title: 'Welche Themen sind wichtig?',
        paragraphs: [
          { type: 'subheading', text: 'Verkehr:' },
          'Die Zufahrt soll weiterhin über den Sprötzer Weg erfolgen.',
          { type: 'subheading', text: 'Grün und Umwelt:' },
          'Der ältere **Baumbestand** soll weitgehend erhalten bleiben.',
          { type: 'list', items: ['Verkehr', 'Regenwasser', 'Lärm'] },
          'Eine geplante [neue Kita](bebauungsplan-sproetzer-weg) ist für die weiteren Planungen relevant.',
        ],
        image: {
          src: '/images/articles/kita-sproetzer-weg-2025.png',
          alt: 'Entwicklungskonzept für eine Kindertagesstätte am Sprötzer Weg',
          caption: 'Mögliches Entwicklungskonzept für die Kita.',
        },
      },
    ],
    sources: [
      {
        label: 'Ratsinformationssystem der Stadt Buchholz',
        url: 'https://www.buchholz.de/allris/tr010',
      },
    ],
  },
];
```

## 2. `news`

`news` sind kurze Meldungen für die Start- oder News-Übersicht. Eine Meldung kann drei Varianten haben:

1. **News mit eigener Detailsseite**: `introduction` und `sections` sind direkt in `news` gepflegt.
2. **News mit verlinktem Artikel**: `articleLink.slug` verweist auf einen Eintrag in `articles`.
3. **News mit verlinktem externen Artikel**: `articleLink.link` verweist auf eine externe Quelle.

### Beispiel: News mit eigener Detailsseite

```js
{
  id: 'stadteingang-west-rahmenplan-beratung',
  slug: 'stadteingang-west-rahmenplan-beratung',
  title: 'Stadteingang West: Weitere Planung für großes Wohngebiet beraten',
  publishedAt: '2026-03-18',
  topicIds: ['neubaugebiete', 'verkehr', 'infrastruktur'],
  summary: [
    'Der geplante **Stadteingang West** stand erneut auf der Tagesordnung.',
    'Es geht um Verkehr, Schul- und Kita-Kapazitäten, Entwässerung sowie Natur- und Artenschutz.',
  ],
  introduction: [
    'Für das Gesamtgebiet sind **bis zu rund 580 Wohnungen** vorgesehen.',
  ],
  sections: [
    {
      title: 'Welche Fragen sind offen?',
      paragraphs: [
        'Vor allem **Verkehr**, **Schul- und Kita-Kapazitäten** und **Entwässerung** müssen noch geklärt werden.',
        { type: 'subheading', text: 'Verkehr:' },
        'Die Kreuzung Bremer Straße / Sprötzer Weg ist bereits heute belastet.',
        { type: 'list', items: ['Verkehr', 'Natur- und Artenschutz', 'Infrastruktur'] },
      ],
    },
  ],
};
```

### Beispiel: News mit verlinktem Artikel

```js
{
  id: 'bebauungsplan-sproetzer-weg-satzungsbeschluss',
  slug: 'bebauungsplan-sproetzer-weg-satzungsbeschluss',
  title: 'Neue Kita beim Discounter am Sprötzer Weg in Planung',
  publishedAt: '2026-05-06',
  topicIds: ['infrastruktur', 'verkehr'],
  summary: [
    '**Neue Kita am Sprötzer Weg geplant.** Der Bebauungsplan soll geändert werden.',
    'Die Planung geht über die Kita hinaus und erlaubt auch weitere soziale, kulturelle und sportliche Angebote.',
  ],
  articleLink: { slug: 'bebauungsplan-sproetzer-weg', label: 'Bebauungsplan Sprötzer Weg' },
};
```

### Beispiel: News mit externem Link

```js
{
  id: 'bahnbruecke-k72-restarbeiten-september-2026',
  slug: 'bahnbruecke-sproetze-k72-vollsperrungen-september-2026',
  title: 'Nächtliche Vollsperrungen an Sprötzer Bahnbrücke Ende September',
  publishedAt: '2026-09-15',
  topicIds: ['verkehr', 'leben-im-dorf'],
  summary: [
    '**An der Bahnbrücke der K72 in Sprötze stehen weitere Arbeiten an.**',
  ],
  articleLink: {
    link: 'https://www.kreiszeitung-wochenblatt.de/buchholz/c-panorama/bauarbeiten-an-bahnbruecke-in-sproetze-teilweise-vollsperrung_a419984',
    label: 'Wochenblatt-Artikel',
  },
};
```

## 3. `scheduleItems`

`scheduleItems` sind Sitzungs- und Terminobjekte. Sie eignen sich für das chronologische Sitzungsarchiv mit Kurzbeschreibung, Detailabschnitten und öffentlicher Sitzungsseite.

Typische Inhalte:
- `id`, `slug`, `category`, `date`, `time`, `title`, `location`
- `details`
- `introduction`
- `sections`
- `link`, `linkLabel`

### Beispiel

```js
export const scheduleItems = [
  {
    id: 'ausschuss-stadtentwicklung-2026-09-17',
    slug: 'ausschuss-stadtentwicklung-umwelt-klimaschutz-mobilitaet-2026-09-17',
    category: 'Ausschuss Stadtentwicklung, Umwelt, Klimaschutz und Mobilität',
    date: '2026-09-17',
    time: '18:30 Uhr',
    title: 'Wohnungsbau in der Niedersachsenstraße, Buchholz Bus und Stadtentwicklung',
    location: 'Kantine Rathaus Buchholz',
    details: 'Für Sprötze stand vor allem das geplante **Bauvorhaben an der Niedersachsenstraße 13** im Mittelpunkt.',
    introduction: [
      'Besonders relevant für Sprötze war **TOP 13 zur Niedersachsenstraße 13**.',
      'Das Vorhaben weicht deutlich vom geltenden Bebauungsplan ab.',
    ],
    sections: [
      {
        title: 'Themen der Sitzung',
        paragraphs: [
          '**Bauturbo**: Nach einem ersten Zwischenbericht nutzt Buchholz das neue Instrument bislang vor allem zur **Nachverdichtung**.',
          '**Niedersachsenstraße 13**: Die Fachabteilung hält die beantragten Abweichungen städtebaulich für vertretbar.',
          {
            text: 'Bebaungsplan Niedersachsenstraße 13',
            slug: 'niedersachsenstrasse-13-wohnungsbau',
            indent: true,
          },
        ],
      },
    ],
    link: 'https://www.buchholz.de/allris/to010?SILFDNR=1000969',
    linkLabel: 'Zur öffentlichen Sitzungsseite',
  },
];
```

## Stilistische Bausteine im Überblick

In den Beispielen kommen diese Elemente vor:

- `**fetter Text**`
- `subheading`
- `list`
- `image`
- interne Links per `[Text](slug)`
- externe Links per `[Text](https://...)`
- eingerückte Links via `indent: true`
- `articleLink.slug` und `articleLink.link`

