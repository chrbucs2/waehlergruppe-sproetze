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
        id: 'ortsrat-2026-09',
        title: 'Ortsratssitzung Sprötze',
        date: '2026-09-24',
        time: '19:30 Uhr',
        location: 'Feuerwehrhaus Sprötze',
        category: 'Sitzung',
        isPast: false,
        agenda: [
            'Bericht zu aktuellen Verkehrsfragen im Ort',
            'Sachstand Bau- und Entwicklungsflächen',
            'Anfragen aus der Bürgerschaft',
        ],
        details:
            'Die Sitzung ist öffentlich. Vor Beginn gibt es Zeit für Fragen und Hinweise aus der Bürgerschaft.',
    },
    {
        id: 'bauausschuss-2026-09',
        title: 'Ausschuss für Stadtentwicklung und Bauen',
        date: '2026-09-18',
        time: '18:00 Uhr',
        location: 'Rathaus Buchholz',
        category: 'Ausschuss',
        isPast: false,
        agenda: [
            'Vorberatung zu Entwicklungsflächen',
            'Einordnung von Verkehrsfolgen für Ortsteile',
        ],
        details:
            'Für Sprötze relevante Vorlagen werden hier häufig vorbereitet, bevor sie in weitere Gremien gehen.',
    },
    {
        id: 'ortsrat-2026-07',
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
