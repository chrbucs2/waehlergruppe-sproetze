export const newsTopics = [
    {
        id: 'verkehr',
        label: 'Verkehr & Mobilität',
        description: 'Straßensicherheit, Schulwege, ÖPNV und Erreichbarkeit in Sprötze.',
    },
    {
        id: 'neubaugebiete',
        label: 'Neubaugebiete',
        description: 'Bebauungspläne, Flächennutzung und neue Vorhaben mit Auswirkungen auf Sprötze.',
    },
    {
        id: 'stadtplanung',
        label: 'Stadtplanung',
        description: 'Planungen, Verfahren und Entscheidungen zur baulichen Entwicklung in und um Sprötze.',
    },
    {
        id: 'leben-im-dorf',
        label: 'Leben im Dorf',
        description: 'Themen rund um Zusammenhalt, Ehrenamt und die Entwicklung von Sprötze.',
    },
];

export const newsArticles = [
    {
        id: 'bebauungsplan-sproetzer-weg-satzungsbeschluss',
        slug: 'bebauungsplan-sproetzer-weg-an-den-tennisplaetzen-satzungsbeschluss',
        title: 'Bebauungsplan am Sprötzer Weg: Satzungsbeschluss im Ausschuss beraten',
        summary:
            'Im Ausschuss wurde der Satzungsbeschluss für die 1. Änderung des Bebauungsplans „Sprötzer Weg / An den Tennisplätzen“ beraten.',
        publishedAt: '2026-05-06',
        topicIds: ['neubaugebiete', 'stadtplanung'],
        featured: false,
        content: [
            'Am 6. Mai 2026 hat sich der Ausschuss für Stadtentwicklung, Umwelt, Klimaschutz und Mobilität mit dem Bebauungsplan „Sprötzer Weg / An den Tennisplätzen, 1. Änderung“ befasst.',
            'Dabei ging es um den Satzungsbeschluss. Laut öffentlicher Vorlage soll auf der Fläche eine geordnete Nachnutzung ermöglicht werden. Genannt werden vor allem soziale, sportliche und kulturelle Nutzungen. Als wichtiges Ziel wird auch eine Kita genannt.',
            'Für Sprötze ist das Thema wichtig, weil es direkt einen Bereich im Ort betrifft. Entscheidend sind dabei unter anderem die geplante Nutzung, die Erschließung über den Sprötzer Weg, Fragen zu Verkehr, Lärm, Oberflächenwasser und der Umgang mit Grünstrukturen.',
            'In den Unterlagen wird außerdem beschrieben, dass es Fachgutachten unter anderem zu Verkehr, Schall, Entwässerung und Grünordnung gibt. Nach der Ausschusssitzung wurden einzelne textliche Festsetzungen zum Schallschutz noch klargestellt.',
            'Wer tiefer einsteigen möchte, findet die Tagesordnung, die öffentliche Vorlage und weitere Anlagen direkt über die verlinkten Ratsinformationen der Stadt Buchholz.',
        ],
        ctaLabel: 'Mehr zu Stadtplanung',
    },
];

export const scheduleItems = [
    {
        id: 'ausschuss-stadtentwicklung-2026-05-06',
        slug: 'ausschuss-stadtentwicklung-umwelt-klimaschutz-mobilitaet-2026-05-06',
        title: 'Sitzung mit Bebauungsplan Sprötzer Weg und Lerchenpark',
        date: '2026-05-06',
        time: '18:30 Uhr',
        location: 'Kantine, Rathausplatz 1, 21244 Buchholz i.d.N.',
        category: 'Ausschuss Stadtentwicklung, Umwelt, Klimaschutz und Mobilität',
        isPast: true,
        agenda: [
            { text: 'Lerchenpark: Rahmenplanverfahren zur Südstadterweiterung auf dem ehemaligen Rütgersgelände.', isRelevantForSproetze: false },
            {
                text: 'Bebauungsplan „Sprötzer Weg / An den Tennisplätzen, 1. Änderung“: Satzungsbeschluss nach § 10 Absatz 1 BauGB.',
                isRelevantForSproetze: true,
                relatedNewsSlug: 'bebauungsplan-sproetzer-weg-an-den-tennisplaetzen-satzungsbeschluss',
            },
            { text: 'Neuausrichtung des Innenstadtmanagements.', isRelevantForSproetze: false },
        ],
        details:
            'Sitzung mit wichtigem Sprötzer Tagesordnungspunkt zum Bebauungsplan am Sprötzer Weg.',
        content: [
            'Der Ausschuss für Stadtentwicklung, Umwelt, Klimaschutz und Mobilität tagte am Mittwoch, den 6. Mai 2026, ab 18:30 Uhr in der Kantine am Rathausplatz 1 in Buchholz.',
            'Die öffentliche Sitzung dauerte laut Tagesordnung bis 21:50 Uhr.',
            'Zu der Sitzung sind auf der öffentlichen Ratsseite mehrere Dokumente verlinkt, darunter ein öffentliches Protokoll, die Vorlage zum Bebauungsplan sowie weitere Anlagen und Präsentationen.',
        ],
        outcome:
            'Die öffentliche Vorlage zum Bebauungsplan und mehrere Anlagen waren verlinkt. Ein öffentliches Protokoll ist auf der Sitzungsseite ebenfalls aufgeführt.',
        link: 'https://www.buchholz.de/allris/to010?SILFDNR=1000953&refresh=false',
    },
    {
        id: 'ausschuss-stadtentwicklung-2026-09-17',
        slug: 'ausschuss-stadtentwicklung-umwelt-klimaschutz-mobilitaet-2026-09-17',
        title: 'Reguläre Ratssitzung',
        date: '2026-09-17',
        time: '18:30 Uhr',
        location: 'Kantine Rathaus Buchholz',
        category: 'Ausschuss Stadtentwicklung, Umwelt, Klimaschutz und Mobilität',
        isPast: false,
        agenda: [
            { text: 'Mehr Bänke an Bushaltestellen: Es wird geprüft, ob es an den Haltestellen mehr und höhere Sitzplätze geben kann.', isRelevantForSproetze: true },
            { text: 'Bus-Fahrplan: Es gibt einen Antrag, dass die Busse in Buchholz wieder nach dem alten Fahrplan fahren sollen.', isRelevantForSproetze: true },
            { text: 'Neues Rechenzentrum: Es wird eine Studie für ein Rechenzentrum in der Nähe vom Bahnhof vorgestellt. Dabei geht es auch um die Wärmeversorgung.', isRelevantForSproetze: false },
            { text: 'Wohnungen bauen: Die Stadt spricht darüber, wie man schneller neue Wohnungen bauen kann.', isRelevantForSproetze: true },
            { text: 'Klimabeirat: Es wird ein Plan besprochen, damit der Klimabeirat unabhängig arbeiten kann.', isRelevantForSproetze: false },
            { text: 'Fragen von Bürgerinnen und Bürgern: Es gibt eine Zeit, in der Einwohnerinnen und Einwohner Fragen an die Politik stellen dürfen.', isRelevantForSproetze: true },
        ],
        details:
            'Öffentliche Sitzung zu Stadtentwicklung, Mobilität und Klimathemen.',
        content: [
            'Am Donnerstag, den 17. September 2026, tagt der Ausschuss für Stadtentwicklung, Umwelt, Klimaschutz und Mobilität ab 18:30 Uhr in der Kantine im Rathaus Buchholz. Der erste Teil der Sitzung ist öffentlich.',
        ],
        link: 'https://www.buchholz.de/allris/to010?SILFDNR=1000969',
    },
    {
        id: 'ausschuss-finanzen-2026-09-28',
        slug: 'ausschuss-wirtschaft-finanzen-verwaltung-digitalisierung-2026-09-28',
        title: 'Reguläre Ratssitzung',
        date: '2026-09-28',
        time: '18:30 Uhr',
        location: 'Kantine Rathaus Buchholz',
        category: 'Ausschuss Wirtschaft, Finanzen, Verwaltung und Digitalisierung',
        isPast: false,
        agenda: [
            'Noch keine verifizierte Tagesordnung',
        ],
        details:
            'Relevant insbesondere bei Haushalt, Investitionsplanung, Schulen, Feuerwehr, Straßen oder städtischen Grundstücken mit Sprötze-Bezug.',
    },
    {
        id: 'rat-regulaer-2026-10-05',
        slug: 'rat-der-stadt-letzte-regulaere-sitzung-2026-10-05',
        title: 'Letzte reguläre Ratssitzung der bisherigen Wahlperiode',
        date: '2026-10-05',
        time: '19:00 Uhr',
        location: 'Saal EMPORE',
        category: 'Rat der Stadt',
        isPast: false,
        agenda: [
            'Tagesordnung derzeit noch nicht verifiziert',
        ],
        details:'Verpflichtung der Ratsmitglieder nach der Kommunalwahl',
    },
    {
        id: 'rat-konstituierend-2026-11-09',
        slug: 'rat-der-stadt-konstituierende-sitzung-2026-11-09',
        title: 'Konstituierende Sitzung des neuen Stadtrates',
        date: '2026-11-09',
        time: '19:00 Uhr',
        location: 'Saal EMPORE',
        category: 'Rat der Stadt',
        isPast: false,
        agenda: [
            'Noch keine Tagesordnung vorhanden',
        ],
        details:
            'Ausschussbesetzungen, Mehrheiten und der politischen Arbeit der neuen Wahlperiode.',
    },
    {
        id: 'ortsrat-konstituierend-2026-11-11',
        slug: 'ortsrat-sproetze-konstituierende-sitzung-2026-11-11',
        title: 'Konstituierende Sitzung des neu gewählten Ortsrates',
        date: '2026-11-11',
        time: '19:30 Uhr',
        location: 'Schützenhaus Sprötze',
        category: 'Ortsrat Sprötze',
        isPast: false,
        agenda: [
            'Noch keine Tagesordnung vorhanden',
        ],
        details:
            'Neue Zusammensetzung, voraussichtlich Wahl von Ortsbürgermeister/in bzw. Stellvertretungen und organisatorische Weichenstellungen.',
    },
    {
        id: 'rat-regulaer-2026-12-14',
        slug: 'rat-der-stadt-regulaere-sitzung-2026-12-14',
        title: 'Reguläre Ratssitzung',
        date: '2026-12-14',
        time: '19:00 Uhr',
        location: 'Saal EMPORE',
        category: 'Rat der Stadt',
        isPast: false,
        agenda: [
            'Noch keine Tagesordnung vorhanden',
        ],
        details:
            'Projekte, Haushalt, Bebauung, Verkehr oder Infrastruktur aufgerufen werden.',
    },
    {
        id: 'ortsrat-sproetze-2026-06-15',
        slug: 'ortsrat-sproetze-regulaere-sitzung-2026-06-15',
        title: 'Reguläre Sitzung des Ortsrates Sprötze',
        date: '2026-06-15',
        time: '17:30 Uhr',
        location: 'Torbogenzimmer, Rathausplatz 1, 21244 Buchholz i.d.N.',
        category: 'Ortsrat Sprötze',
        isPast: true,
        agenda: [
            { text: 'Genehmigung des Protokolls der Sitzung vom 28.10.2024.', isRelevantForSproetze: true },
            { text: 'Bericht der Ortsbürgermeisterin.', isRelevantForSproetze: true },
            { text: 'Bericht des Bürgermeisters.', isRelevantForSproetze: true },
            { text: 'Anfragen nach § 17 der Geschäftsordnung.', isRelevantForSproetze: true },
        ],
        details:
            'Reguläre Ortsratssitzung mit kurzer öffentlicher Tagesordnung und anschließendem nichtöffentlichen Teil.',
        content: [
            'Die reguläre Sitzung des Ortsrates Sprötze fand am Montag, den 15. Juni 2026, ab 17:30 Uhr im Torbogenzimmer am Rathausplatz 1 in Buchholz in der Nordheide statt.',
            'Der öffentliche Teil war laut veröffentlichter Tagesordnung für 17:30 bis 17:59 Uhr angesetzt. Anschließend folgte ein nichtöffentlicher Teil von 18:00 bis 18:35 Uhr.',
            'Ein Sitzungsprotokoll oder eine veröffentlichte Ergebniszusammenfassung konnten bislang nicht gefunden werden. Sobald ein Protokoll nachgereicht wird, kann der Eintrag ergänzt werden.',
        ],
        outcome:
            'Ein veröffentlichtes Protokoll oder offizielle Ergebnisse lagen bei der Recherche noch nicht vor.',
        link: 'https://www.buchholz.de/allris/to010?SILFDNR=1001165&refresh=false',
    },
];
