export const newsTopics = [
    {
        id: 'verkehr',
        label: 'Verkehr & Mobilität',
        description: 'Straßensicherheit, Schulwege, ÖPNV und Erreichbarkeit in Sprötze.',
    },
    {
        id: 'ortsrat',
        label: 'Ortsrat & Entscheidungen',
        description: 'Beschlüsse, Anträge und wichtige Themen aus der kommunalen Arbeit.',
    },
    {
        id: 'leben-im-dorf',
        label: 'Leben im Dorf',
        description: 'Themen rund um Zusammenhalt, Ehrenamt und die Entwicklung von Sprötze.',
    },
];

export const newsArticles = [
    {
        id: 'tempolimit-harburger-strasse',
        slug: 'tempolimit-harburger-strasse',
        title: 'Tempo 30 an sensiblen Abschnitten der Harburger Straße weiter im Fokus',
        summary:
            'Wir setzen uns dafür ein, die Verkehrssituation an stark genutzten Querungen und Haltestellen spürbar sicherer zu machen.',
        publishedAt: '2026-09-10',
        topicIds: ['verkehr', 'ortsrat'],
        featured: true,
        content: [
            'Die Rückmeldungen aus der Nachbarschaft zeigen deutlich, dass die Harburger Straße an mehreren Stellen als unübersichtlich und zu schnell wahrgenommen wird. Besonders im Umfeld von Bushaltestellen und Querungen für Kinder wünschen sich viele Menschen mehr Sicherheit.',
            'Deshalb begleiten wir das Thema weiterhin eng im Ortsrat und drängen auf eine belastbare Bewertung der besonders kritischen Bereiche. Wo Spielräume bestehen, sollen diese auch genutzt werden.',
            'Wichtig ist uns dabei, dass Maßnahmen nachvollziehbar begründet sind und die Situation für Anwohnende, Familien und ältere Menschen tatsächlich verbessern.',
        ],
        ctaLabel: 'Zum Thema Verkehr & Mobilität',
    },
    {
        id: 'sachstand-baugebiete',
        slug: 'sachstand-baugebiete',
        title: 'Sachstand zu Baugebieten: Wachstum mit Augenmaß',
        summary:
            'Neue Wohnbauflächen müssen zur Infrastruktur, zum Ortsbild und zu den Bedürfnissen der Menschen in Sprötze passen.',
        publishedAt: '2026-08-28',
        topicIds: ['leben-im-dorf', 'ortsrat'],
        featured: true,
        content: [
            'Wohnraum bleibt ein wichtiges Thema, gleichzeitig darf die Entwicklung unseres Ortes nicht an der Lebensrealität vorbeigehen. Für uns gehören Verkehr, Kita- und Schulwege, Versickerung, Grünflächen und die Einbindung ins Ortsbild immer mit auf den Tisch.',
            'Wir werben deshalb für transparente Informationen, frühzeitige Beteiligung und klare Kriterien, damit Entscheidungen zu Neubauflächen nicht isoliert getroffen werden.',
        ],
        ctaLabel: 'Alle Meldungen zum Leben im Dorf',
    },
    {
        id: 'ehrenamt-unterstuetzen',
        slug: 'ehrenamt-unterstuetzen',
        title: 'Ehrenamt stärken: Vereine und Initiativen sichtbar unterstützen',
        summary:
            'Sprötze lebt vom Engagement vieler Menschen. Unterstützung muss verlässlich, unbürokratisch und sichtbar sein.',
        publishedAt: '2026-08-12',
        topicIds: ['leben-im-dorf'],
        featured: false,
        content: [
            'Ob Sport, Kultur, Nachbarschaftshilfe oder Veranstaltungen: Viele Angebote in Sprötze beruhen auf ehrenamtlicher Arbeit. Dieses Engagement braucht gute Rahmenbedingungen statt zusätzlicher Hürden.',
            'Dazu gehören aus unserer Sicht verlässliche Ansprechpartner, transparente Informationen über Fördermöglichkeiten und eine politische Unterstützung, die freiwillige Arbeit wertschätzt.',
        ],
        ctaLabel: 'Mehr zum Thema Leben im Dorf',
    },
];

export const scheduleItems = [
    {
        id: 'ausschuss-stadtentwicklung-2026-09-17',
        slug: 'ausschuss-stadtentwicklung-umwelt-klimaschutz-mobilitaet-2026-09-17',
        title: 'Ausschuss Stadtentwicklung, Umwelt, Klimaschutz und Mobilität',
        date: '2026-09-17',
        time: '18:30 Uhr',
        location: 'Kantine Rathaus Buchholz',
        category: 'Ausschuss',
        isPast: false,
        agenda: [
            'Mehr Bänke an Bushaltestellen',
            'Bus-Fahrplan',
            'Neues Rechenzentrum',
            'Wohnungen bauen',
            'Klimabeirat',
            'Fragen von Bürgerinnen und Bürgern',
        ],
        details:
            'Öffentliche Sitzung zu Stadtentwicklung, Mobilität und Klimathemen.',
        content: [
            'Am Donnerstag, den 17. September 2026, tagt der Ausschuss für Stadtentwicklung, Umwelt, Klimaschutz und Mobilität ab 18:30 Uhr in der Kantine im Rathaus Buchholz. Der erste Teil der Sitzung ist öffentlich.',
        ],
        agendaDetails: [
            { text: 'Mehr Bänke an Bushaltestellen: Es wird geprüft, ob es an den Haltestellen mehr und höhere Sitzplätze geben kann.', isRelevantForSproetze: true },
            { text: 'Bus-Fahrplan: Es gibt einen Antrag, dass die Busse in Buchholz wieder nach dem alten Fahrplan fahren sollen.', isRelevantForSproetze: true },
            { text: 'Neues Rechenzentrum: Es wird eine Studie für ein Rechenzentrum in der Nähe vom Bahnhof vorgestellt. Dabei geht es auch um die Wärmeversorgung.', isRelevantForSproetze: false },
            { text: 'Wohnungen bauen: Die Stadt spricht darüber, wie man schneller neue Wohnungen bauen kann.', isRelevantForSproetze: true },
            { text: 'Klimabeirat: Es wird ein Plan besprochen, damit der Klimabeirat unabhängig arbeiten kann.', isRelevantForSproetze: false },
            { text: 'Fragen von Bürgerinnen und Bürgern: Es gibt eine Zeit, in der Einwohnerinnen und Einwohner Fragen an die Politik stellen dürfen.', isRelevantForSproetze: true },
        ],
        link: 'https://www.buchholz.de/allris/to010?SILFDNR=1000969',
    },
    {
        id: 'ausschuss-finanzen-2026-09-28',
        slug: 'ausschuss-wirtschaft-finanzen-verwaltung-digitalisierung-2026-09-28',
        title: 'Ausschuss Wirtschaft, Finanzen, Verwaltung und Digitalisierung',
        date: '2026-09-28',
        time: '18:30 Uhr',
        location: 'Kantine Rathaus Buchholz',
        category: 'Ausschuss',
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
        title: 'Rat der Stadt - Letzte reguläre Ratssitzung der bisherigen Wahlperiode',
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
        title: 'Rat der Stadt - Konstituierende Sitzung des neuen Stadtrates',
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
        title: 'Ortsrat Sprötze - Konstituierende Sitzung des neu gewählten Ortsrates',
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
        title: 'Rat der Stadt - Reguläre Ratssitzung',
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
        id: 'ortsrat-2026-07',
        slug: 'ortsratssitzung-sproetze-juli-2026',
        title: 'Ortsratssitzung Sprötze vom Juli',
        date: '2026-07-11',
        time: '19:30 Uhr',
        location: 'Feuerwehrhaus Sprötze',
        category: 'Sitzung',
        isPast: true,
        agenda: [
            'Verkehrssituation an Bushaltestellen',
            'Pflege öffentlicher Grünflächen',
            'Stand zu lokalen Bauvorhaben',
        ],
        details:
            'In der Sitzung wurden Hinweise aus der Bürgerschaft zu gefährlichen Querungen aufgenommen und eine weitere Prüfung angestoßen.',
        outcome:
            'Das Thema Verkehrssicherheit wurde zur weiteren Bearbeitung in die nächsten Beratungen gegeben. Zusätzlich wurde ein aktualisierter Überblick zu den laufenden Bauvorhaben zugesagt.',
        relatedNewsSlug: 'tempolimit-harburger-strasse',
    },
];
