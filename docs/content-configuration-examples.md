# Content-Konfiguration: articles, news und scheduleItems

Diese drei Dateien bilden die redaktionelle Struktur der Seite:

- `articles`: ausführliche Hintergrundartikel mit eigener Detailseite
- `news`: Kurzmeldungen mit optionaler Detailseite oder Verlinkung auf Artikel und externe Quellen
- `scheduleItems`: Sitzungs- und Terminobjekte mit Zusammenfassung, Detailabschnitten und Quellen

## 1. `articles`

`articles` sind die längeren Erklärstücke. Sie eignen sich für große Themen, die unabhängig von einem konkreten News-Anlass dauerhaft erklärt werden sollen. Diese Seiten sind dafür gedacht, aktualisiert zu werden und von News- oder Terminseiten referenziert zu werden.

Typische Inhalte:
- Allgemein:  `id`, `slug` (in der Regel der gleiche Wert)
- Header: `title`, `publishedAt`, `modifiedAt`, `category`
- Einleitung: `introduction`
- Inhalte: `sections`
- Quellen: `sources`

### Beispiel

```js
{
    id: 'bebauungsplan-sproetzer-weg',
        slug: 'bebauungsplan-sproetzer-weg',
        title: 'Titel für den Artikel',
        publishedAt: '2026-05-06',
        modifiedAt: '2026-05-20',
        category: 'Sitzungskategory wie "Ortsrat"',
        introduction: [
        'Dies ist ein einleitender Text.',
        'Der kann auch über mehrere Absätze gehen und **fett gedruckten Text** enthalten.',
    ],
        sections: [
        {
            title: 'Überschrift 1',
            paragraphs: [
                'Hier ist ein Absatz.',
                'Noch  ein Absatz mit **fett gedrucktem Text**.',
            ],
        },
        {
            title: 'Überschrift 2',
            paragraphs: [
                { type: 'subheading', text: 'Überschrift 2.1' },
                'Hier ist ein Absatz zu Überschrift 2.1.',
                { type: 'subheading', text: 'Überschrift 2.2' },
                'Hier ist ein Absatz zu Überschrift 2.2.',
                'Ein weiterer Absatz mit [Link zu einem artikel](artikel-slug-id).',
                'Ein weiterer Absatz mit [Link zu externer Seite](https://link.zum.artikel.de/artikel/xy).',
                { type: 'list', items: ['Listenelement 1', 'Listenelement 2', 'Listenelement 3'] },
                'Noch ein Absatz.',
            ],
            image: {
                src: '/images/articles/kita-sproetzer-weg-2025.png',
                alt: 'Ein Bild kann an das Ende einer Section gesetzt werden',
                caption: 'Text unter dem Bild.',
            },
        },
    ],
        sources: [
        {
            label: 'Quelle 1',
            url: 'https://www.buchholz.de/allris/tr010',
        },
    ],
}
```

## 2. `news`

`news` sind kurze Meldungen für die News-Übersicht. Eine Meldung kann drei Varianten haben:

1. **News mit eigener Detailsseite**: `introduction` und `sections` sind direkt in `news` gepflegt.
2. **News mit verlinktem internen Artikel**: `articleLink.slug` verweist auf einen Eintrag in `articles`.
3. **News mit verlinktem externen Artikel**: `articleLink.link` verweist auf eine externe Quelle.

Typische Inhalte für die Übersichtsseite:
- Allgemein:  `id`, `slug` (in der Regel der gleiche Wert)
- Header: `title`, `publishedAt`
- Themen-Filter: `topicIds`
- Zusammenfassung: `summary`

Typische Inhalte für die Detailsseite:
- Header: `title`, `publishedAt`
- Einleitung: `introduction`
- Inhalte: `sections`
- Themengebiete (am Ende der Seite): `topicIds`


### Beispiel: News mit eigener Detailsseite

```js
{
    id: 'stadteingang-west-rahmenplan-beratung',
    slug: 'stadteingang-west-rahmenplan-beratung',
    title: 'Titel für den News-Beitrag',
    publishedAt: '2026-03-18',
    topicIds: ['neubaugebiete', 'verkehr', 'infrastruktur'],
    summary: [
        'Dies ist ein einleitender Text für die Übersichtsseite.',
        'Der kann auch über mehrere Absätze gehen und **fett gedruckten Text** enthalten.',
    ],
    introduction: [
        'Dies ist ein einleitender Text.',
        'Der kann auch über mehrere Absätze gehen und **fett gedruckten Text** enthalten.',
    ], 
    sections: [
        {
            title: 'Überschrift 1',
            paragraphs: [
                'Hier ist ein Absatz.',
                'Noch  ein Absatz mit **fett gedrucktem Text**.',
            ],
        },
        {
            title: 'Überschrift 2',
            paragraphs: [
                { type: 'subheading', text: 'Überschrift 2.1' },
                'Hier ist ein Absatz zu Überschrift 2.1.',
                { type: 'subheading', text: 'Überschrift 2.2' },
                'Hier ist ein Absatz zu Überschrift 2.2.',
                'Ein weiterer Absatz mit [Link zu einem artikel](artikel-slug-id).',
                'Ein weiterer Absatz mit [Link zu externer Seite](https://link.zum.artikel.de/artikel/xy).',
                { type: 'list', items: ['Listenelement 1', 'Listenelement 2', 'Listenelement 3'] },
                'Noch ein Absatz.',
            ],
            image: {
                src: '/images/articles/kita-sproetzer-weg-2025.png',
                alt: 'Ein Bild kann an das Ende einer Section gesetzt werden',
                caption: 'Text unter dem Bild.',
            },
        },
    ],
};
```

### Beispiel: News mit verlinktem internen Artikel

```js
{
    id: 'stadteingang-west-rahmenplan-beratung',
    slug: 'stadteingang-west-rahmenplan-beratung',
    title: 'Titel für den News-Beitrag',
    publishedAt: '2026-03-18',
    topicIds: ['neubaugebiete', 'verkehr', 'infrastruktur'],
    summary: [
        'Dies ist ein einleitender Text für die Übersichtsseite.',
        'Der kann auch über mehrere Absätze gehen und **fett gedruckten Text** enthalten.',
    ],
    articleLink: {
        slug: 'slug-id-von-artikel-xy',
        text: 'Zum Artikel XY'
    },
};
```

### Beispiel: News mit externem Link

```js
{
    id: 'stadteingang-west-rahmenplan-beratung',
    slug: 'stadteingang-west-rahmenplan-beratung',
    title: 'Titel für den News-Beitrag',
    publishedAt: '2026-03-18',
    topicIds: ['neubaugebiete', 'verkehr', 'infrastruktur'],
    summary: [
        'Dies ist ein einleitender Text für die Übersichtsseite.',
        'Der kann auch über mehrere Absätze gehen und **fett gedruckten Text** enthalten.',
    ],
    articleLink: {
        href: 'https://link.zum.artikel.de/artikel/xy',
        text: 'Zum Artikel XY'
    },
};
```

## 3. `scheduleItems`

`scheduleItems` sind Sitzungs- und Terminobjekte. Sie eignen sich für das chronologische Sitzungsarchiv mit Kurzbeschreibung, Detailabschnitten und öffentlicher Sitzungsseite.


Typische Inhalte für die Übersichtsseite:
- Allgemein:  `id`, `slug` (in der Regel der gleiche Wert)
- Header: `title`, `category`, `date`, `time`
- Zusammenfassung: `details`

Typische Inhalte für die Detailsseite:
- Header: `title`, `category`, `date`, `time`, `location`
- Einleitung: `introduction`
- Inhalte: `sections`
- Link zur öffentlichen Sitzung: `link`, `linkLabel`

### Beispiel

```js
{
    id: 'ausschuss-stadtentwicklung-2026-09-17',
    slug: 'ausschuss-stadtentwicklung-umwelt-klimaschutz-mobilitaet-2026-09-17',
    category: 'Sitzungskategory wie "Ortsrat"',
    date: '2026-09-17',
    time: '18:30 Uhr',
    title: 'Titel für den Termin',
    location: 'Wo der Termin stattfindet',
    details: [
        'Dies ist ein einleitender Text für die Übersichtsseite.',
        'Der kann auch über mehrere Absätze gehen und **fett gedruckten Text** enthalten.',
    ]
    introduction: [
        'Dies ist ein einleitender Text.',
        'Der kann auch über mehrere Absätze gehen und **fett gedruckten Text** enthalten.',
    ],
    sections: [
        {
            title: 'Überschrift 1',
            paragraphs: [
                'Hier ist ein Absatz.',
                'Noch  ein Absatz mit **fett gedrucktem Text**.',
            ],
        },
        {
            title: 'Überschrift 2',
            paragraphs: [
                { type: 'subheading', text: 'Überschrift 2.1' },
                'Hier ist ein Absatz zu Überschrift 2.1.',
                { type: 'subheading', text: 'Überschrift 2.2' },
                'Hier ist ein Absatz zu Überschrift 2.2.',
                'Ein weiterer Absatz mit [Link zu einem artikel](artikel-slug-id).',
                'Ein weiterer Absatz mit [Link zu externer Seite](https://link.zum.artikel.de/artikel/xy).',
                { type: 'list', items: ['Listenelement 1', 'Listenelement 2', 'Listenelement 3'] },
                'Noch ein Absatz.',
            ],
            image: {
                src: '/images/articles/kita-sproetzer-weg-2025.png',
                alt: 'Ein Bild kann an das Ende einer Section gesetzt werden',
                caption: 'Text unter dem Bild.',
            },
        },
    ],
    linkLabel: 'Zur öffentlichen Sitzungsseite',
    link: 'https://www.buchholz.de/allris/to010?SILFDNR=1000969',
}
```
