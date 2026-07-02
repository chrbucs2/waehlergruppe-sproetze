export const organization = {
    name: 'Wählergruppe Sprötze',
    tagline: 'Bürgernähe, Augenmaß und ein lebenswertes Dorf.',
    highlights: [
        'Bürgernähe. Sprötze. Für EUCH!',
        'Interessen aller Altersgruppen.',
        'Familienfreundliches Wohnen.',
        'Geordnetes Wachstum.',
    ],
};

export const contacts = {
    webmaster: {
        name: 'Christian Buck',
        title: 'Webmaster',
        email: 'wgs@buck-online.net',
        address: 'Hubertusweg 4, 21244 Buchholz i.d.N.',
    },
    representative: {
        name: 'Peter Kröger',
        title: 'Vertreter der Wählergruppe',
        email: 'peter.kroeger@sproetze.de',
        phone: '+49 4186 7878',
        address: 'Sprötzer Bahnhofstraße 9A, 21244 Buchholz-Sprötze',
    },
};

export const legal = {
    impressum: {
        heading: 'Impressum',
        webmasterSection: {
            title: 'Verantwortlich für Webseite & Inhalte',
            content: `${contacts.webmaster.name} (${contacts.webmaster.title})
${contacts.webmaster.address}

E-Mail: ${contacts.webmaster.email}`,
        },
        representativeSection: {
            title: 'Vertreter der Wählergruppe',
            content: `${contacts.representative.name}
${contacts.representative.address}

Telefon: ${contacts.representative.phone}
E-Mail: ${contacts.representative.email}`,
        },
        organizationForm:
            'Wählergruppe Sprötze ist eine unabhängige Bürgerbewegung (nicht eingetragener Verein, parteilos).',
        hostingTech:
            'Diese Webseite wird gehostet auf GitHub Pages (pages.github.com). Technologie: React + Vite.',
        externalLinksDisclaimer:
            'Für fremde Inhalte, auf die wir von dieser Seite verlinken, übernehmen wir keine Haftung nach TMG §7(1).',
        imageRights:
            'Alle auf dieser Seite abgebildeten Personen haben der Veröffentlichung ihrer Fotos zugestimmt.',
    },
    datenschutz: {
        heading: 'Datenschutzerklärung',
        introduction:
            'Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung erläutert, welche Informationen erfasst werden und wie wir diese behandeln (DSGVO-konform).',
        dataController: `Datenverantwortlicher: Wählergruppe Sprötze, vertreten durch:
• ${contacts.webmaster.name}, ${contacts.webmaster.email}
• ${contacts.representative.name}, ${contacts.representative.email}`,
        dsb: 'Die Wählergruppe Sprötze ist eine kleine Initiative ohne regelmäßige Datenverarbeitung. Kein Datenschutzbeauftragter ist nach DSGVO Art. 37 erforderlich.',
        noDataCollection: `Diese Website erfasst KEINE persönlichen Daten von Ihnen.
✓ Keine Kontaktformulare
✓ Keine Newsletter-Anmeldung
✓ Kein Tracking oder Analytics
✓ Keine Cookies
✓ Keine Speicherung von Besucherdaten`,
        githubDataCollection: `Diese Website wird auf GitHub Pages gehostet. GitHub speichert automatisch Zugriffsdaten:
• IP-Adresse (zur Sicherheit und Verfügbarkeit)
• Zugriffszeitstempel
• Browser-Informationen (User-Agent)
• Referrer-Daten`,
        legalBasis:
            'Rechtsgrundlage: DSGVO Art. 6 Abs. 1 f) (berechtigtes Interesse zur Infrastruktur-Überwachung und Sicherheit)',
        storageDuration: 'Typischerweise ca. 90 Tage nach GitHub-Standardrichtlinien',
        userRights: `Sie haben unter der DSGVO folgende Rechte:
• Recht auf Auskunft über Ihre Daten (Art. 15)
• Recht auf Berichtigung oder Löschung (Art. 16–17)
• Recht auf Datenportabilität (Art. 20)
• Recht auf Beschwerde bei einer Datenschutzbehörde (Art. 77)`,
        objectionMethods: `Sie können GitHub-Datenerfassung einschränken durch:
• Browser-Einstellungen (Cookies, Do-Not-Track)
• VPN-Nutzung
• Browsererweiterungen (z.B. uBlock)`,
        openSource:
            'Der Quellcode dieser Website ist öffentlich verfügbar (GitHub). Es gibt keine versteckten Datenverarbeitungen oder Tracking-Skripte. Alle genutzten Bibliotheken (React, Vite) sind unter MIT-Lizenz verfügbar.',
        changes:
            'Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen. Die aktuelle Fassung finden Sie hier auf dieser Seite. Stand: Juli 2026.',
    },
};
