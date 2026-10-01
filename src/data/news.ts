import { NewsModel } from '../models/pages/NewsModel';

export const news: NewsModel[] = [
    {
        id: 'gruengutannahme-trelder-berg-2026',
        slug: 'neue-gruengutannahme-gewerbegebiet-trelder-berg',
        title: 'Neue Grüngut-Annahmestelle im Gewerbegebiet Trelder Berg',
        publishedAt: '2026-02-13',
        topicIds: ['abfallentsorgung', 'infrastruktur'],
        summary: [
            '**Im Gewerbegebiet Trelder Berg gibt es eine neue Annahmestelle für Grüngut.** Seit dem 2. März 2026 können Bürgerinnen und Bürger aus dem Landkreis Harburg können dort täglich bis zu **einen Kubikmeter Grüngut kostenfrei** abgeben. Die Annahme erfolgt ebenerdig in einer Halle und ist damit barrierefreier als am bisherigen Standort in Nenndorf.',
            'Die neue Annahmestelle in der **Ritscherstraße 10** ersetzt die bisherige Grüngutabgabe in Nenndorf und liegt damit auch für Sprötze und Trelde vergleichsweise nah.',
        ],
        articleLink: {
            href: 'https://www.landkreis-harburg.de/portal/meldungen/neue-annahmestelle-fuer-gruengut-in-buchholz-901010429-20100.html',
            text: 'Zur Info-Seite des Landkreises'
        },
    },
    {
        id: 'stadteingang-west-rahmenplan-beratung',
        slug: 'stadteingang-west-rahmenplan-beratung',
        title: 'Stadteingang West: Weitere Planung für großes Wohngebiet beraten',
        publishedAt: '2026-03-18',
        topicIds: ['neubaugebiete', 'verkehr', 'infrastruktur'],
        summary: [
            'Der geplante **Stadteingang West an der Bremer Straße** stand am 18. März erneut auf der Tagesordnung des Stadtentwicklungsausschusses. Neben dem Rahmenplan ging es um die geplanten Bebauungspläne **„Bremer Straße / Brumhagen Süd“ und „Bremer Straße / Brumhagen Nord“**.',
            'Für das Gesamtgebiet sind **bis zu rund 580 Wohnungen** vorgesehen. Die weitere Planung wird in mehreren Abschnitten vorbereitet. Offen sind unter anderem wichtige Fragen zu **Verkehr, Schul- und Kita-Kapazitäten, Entwässerung sowie Natur- und Artenschutz**.',
        ],
        summaryImage: {
            src: '/images/articles/stadteingang-west-variante-1.png',
            alt: 'Planung Stadteingang-West, Variante 1',
            zoom: 1.1,
            offset: {x: 3, y: 2}
        },
        articleLink: {
            slug: 'stadteingang-west-bremer-strasse',
            text: 'Wohngebiet "Stadteingang West"'
        },
    },
    {
        id: 'tafel-buchholz-standort-sproetze-eroeffnet',
        slug: 'tafel-buchholz-standort-sproetze-eroeffnet',
        title: 'Tafel Buchholz eröffnet neuen Standort in Sprötze',
        publishedAt: '2026-04-13',
        topicIds: ['infrastruktur', 'leben-im-dorf', 'soziales'],
        summary: [
            'Die **Tafel Buchholz** hat ihren neuen Standort in der **Niedersachsenstraße 18 in Sprötze** offiziell eingeweiht. Bereits seit Ende 2025 findet die Lebensmittelausgabe dort statt.',
            'Der Umzug schafft mehr Platz für Lebensmittel, Kühlung und die Ausgabe. Inzwischen versorgt die Tafel nach eigenen Angaben **mehr als 230 Familien**.',
        ],
        introduction: [
            'Die Tafel Buchholz ist seit Ende 2025 in der **Niedersachsenstraße 18 in Sprötze** zu Hause. Am 13. April wurde der neue Standort nun auch offiziell mit einer kleinen Feierstunde eingeweiht.',
            'Der frühere Standort am Reiherstieg war für die Arbeit der Tafel zu klein geworden. In Sprötze stehen nun größere Räume für die Lagerung, Kühlung und Ausgabe der Lebensmittel zur Verfügung.',
        ],
        sections: [
            {
                title: 'Die Tafel in Sprötze',
                paragraphs: [
                    'Der **Umzug** hatte bereits am **1. Oktober 2025** stattgefunden. Zuvor war die Tafel am Reiherstieg in Buchholz untergebracht. Schon damals wurde berichtet, dass die bisherigen Räume für die wachsende Arbeit nicht mehr ausreichten.',
                    'Seit ihrem Umzug ist die Tafel Buchholz außerdem ein eigenständiger Verein. Zuvor wurde sie als Teil der Tafel Harburg geführt.',
                ],
            },
            {
                title: 'Mehr Platz für die Tafel',
                paragraphs: [
                    'Die neuen Räume sollen die tägliche Arbeit erleichtern. Neben der eigentlichen Ausgabe braucht die Tafel Platz für Regale sowie Kühl- und Gefrierschränke, um gespendete Lebensmittel lagern zu können.',
                    'Nach Angaben der Tafel werden inzwischen **mehr als 230 Familien** von rund **25 ehrenamtlichen Helferinnen und Helfern** versorgt. Die Nachfrage sei weiterhin groß und steige weiter.',
                    'Die **Stadt Buchholz übernimmt die Mietkosten** für den neuen Standort.',
                ],
            },
            {
                title: 'Öffnungszeiten und Spenden',
                paragraphs: [
                    'Die Lebensmittelausgabe findet aktuell **jeden Mittwoch von 13:00 bis 14:00 Uhr** in der Niedersachsenstraße 18 statt.',
                    'Lebensmittelspenden können **mittwochs von 9:30 bis 14:00 Uhr** oder nach **telefonischer Absprache** abgegeben werden. Auch Geldspenden sind möglich.',
                    {
                        type: 'list',
                        items: [
                            '**Adresse:** Niedersachsenstraße 18, 21244 Buchholz i.d.N.',
                            '**Lebensmittelausgabe:** Mittwoch, 13:00 bis 14:00 Uhr',
                            '**Spendenannahme:** Mittwoch, 9:30 bis 14:00 Uhr oder nach telefonischer Absprache',
                            '**Telefon:** 0176 88143096',
                            '**Spendenkonto:** bitte der [Webseite](https://www.tafel-buchholz.de/kontakt/) entnehmen',
                        ],
                    },
                ],
            },
            {
                title: 'Weiterführende Informationen',
                paragraphs: [
                    'Weitere Informationen zum neuen Standort, zur Arbeit der Tafel und zu Möglichkeiten der Unterstützung finden Sie hier:',
                    {
                        type: 'link',
                        text: 'Wochenblatt: Standort der Tafel Buchholz in Sprötze eröffnet',
                        href: 'https://www.kreiszeitung-wochenblatt.de/buchholz/c-panorama/standort-der-tafel-buchholz-eroeffnet_a398918',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'Tafel Buchholz: Kontakt, Öffnungszeiten und Spenden',
                        href: 'https://www.tafel-buchholz.de/kontakt/',
                        indent: true,
                    },
                ],
            },
        ],
    },
    {
        id: 'bebauungsplan-sproetzer-weg-satzungsbeschluss',
        slug: 'bebauungsplan-sproetzer-weg-an-den-tennisplaetzen-satzungsbeschluss',
        title: 'Neue Kita beim Discounter am Sprötzer Weg in Planung',
        publishedAt: '2026-05-06',
        topicIds: ['infrastruktur', 'verkehr'],
        summary: [
            '**Neue Kita am Sprötzer Weg geplant.** Der Bebauungsplan „**Sprötzer Weg / An den Tennisplätzen**“ soll geändert werden, um auf der bislang für Einzelhandel vorgesehenen Fläche unter anderem eine Kindertagesstätte zu ermöglichen.',
            'Die Planung geht jedoch über die Kita hinaus und erlaubt künftig auch weitere soziale, kulturelle und sportliche Angebote. Zudem geht es um Verkehr, Erschließung, Entwässerung, Lärmschutz und die Begrünung des rund 0,9 Hektar großen Areals.',
        ],
        summaryImage: {
            src: '/images/articles/planzeichnung-sproetzer-weg.png',
            alt: 'Planzeichnung Sprötzer Weg',
            zoom: 1.4,
            offset: {x: -3, y: 0}
        },
        introduction: [
            'Am Sprötzer Weg soll eine **neue Kindertagesstätte** entstehen. Dafür wird der **Bebauungsplan „Sprötzer Weg / An den Tennisplätzen“** geändert.',
            'Der zuständige Ausschuss hat sich am 6. Mai 2026 mit der Planung beschäftigt.',
        ],
        sections: [
            {
                title: 'Was ist geplant?',
                paragraphs: [
                    'Auf einer bisher **ungenutzten Fläche neben dem bestehenden Discounter im Sprötzer Weg** soll eine **neue Kita** gebaut werden. Bisher war die Fläche hauptsächlich für Einzelhandel vorgesehen.',
                    'Der neue Bebauungsplan erlaubt neben der Kita auch andere soziale, kulturelle oder sportliche Einrichtungen sowie Bildungs- und Freizeitangebote.',
                ],
            },
            {
                title: 'Worum geht es noch?',
                paragraphs: [
                    'Bei der Planung geht es nicht nur darum, was gebaut werden darf. Auch **Verkehr**, **Zufahrt**, **Entwässerung**, **Lärmschutz** und die **Begrünung** des Grundstücks müssen berücksichtigt werden.',
                ],
            },
            {
                title: 'Wie geht es weiter?',
                paragraphs: [
                    'Das Verfahren ist bereits weit fortgeschritten. Der **Ausschuss hat die Änderung des Bebauungsplans** für den späteren Satzungsbeschluss **beraten**.',
                    'Wichtig: Damit ist der Bau der Kita noch nicht automatisch beschlossen. Der Bebauungsplan schafft **zunächst nur die rechtlichen Voraussetzungen** dafür, dass eine Kita an diesem Standort entstehen kann.',
                ],
            },
            {
                title: 'Warum ist das für Sprötze interessant?',
                paragraphs: [
                    'Das Grundstück liegt zwar nicht direkt in Sprötze, befindet sich aber am Sprötzer Weg – einer wichtigen Verbindung zwischen Sprötze und der Buchholzer Kernstadt. Die Entwicklung des Standorts kann deshalb auch **für Sprötzer interessant sein, etwa mit Blick auf Verkehr und neue soziale Infrastruktur**.',
                ],
            },
            {
                title: 'Weiterführende Informationen',
                paragraphs: [
                    'Wer tiefer einsteigen möchte, findet die Tagesordnung, die öffentliche Vorlage und weitere Anlagen direkt auf der Sitzungsseite der Stadt Buchholz. Zusätzlich gibt es dazu auch einen ausführlichen Artikel mit den wichtigsten Hintergründen und Details.',
                    {
                        type: 'link',
                        text: 'Zur öffentlichen Sitzungsseite',
                        href: 'https://www.buchholz.de/allris/to010?SILFDNR=1000953',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'Bebauungsplan Sprötzer Weg',
                        slug: 'bebauungsplan-sproetzer-weg',
                        indent: true,
                    },
                ],
            },
        ],
        articleLink: {
            slug: 'bebauungsplan-sproetzer-weg',
            text: 'Bebauungsplan Sprötzer Weg'
        },
    },
    {
        id: 'grundschule-sproetze-trelde-ausbau',
        slug: 'grundschule-sproetze-trelde-neubau-erweiterung',
        title: 'Ausbau der Grundschule Sprötze-Trelde an beiden Standorten geplant',
        publishedAt: '2026-05-26',
        topicIds: ['ortsmitte', 'infrastruktur'],
        summary: [
            'Die Grundschule Sprötze-Trelde soll **an beiden Standorten weiterentwickelt werden**. In Sprötze ist ein Teilersatzneubau geplant, in Trelde soll die bestehende Schule erweitert werden.',
            'In Sprötze bildet **Variante 1 mit einem zweigeschossigen Neubau auf dem Pausenhof** die Grundlage der weiteren Planung. Die Tennisplätze und der Sportplatz können dabei bestehen bleiben. In Trelde soll der **einzügige Schulstandort erhalten** und an das benötigte Raumprogramm angepasst werden.',
        ],
        summaryImage: {
            src: '/images/articles/grundschule-sproetze-variante-1.png',
            alt: 'Aktuelle Planungsgrundlage, Variante 1',
            zoom: 1.1,
            offset: {x: 4, y: 0}
        },
        articleLink: {
            slug: 'grundschule-sproetze-trelde-ausbau',
            text: 'Ausbau Grundschule Sprötze-Trelde'
        },
    },
    {
        id: '100-jahre-tsv-sproetze',
        slug: '100-jahre-tsv-sproetze',
        title: '100 Jahre TSV Sprötze: Jubiläumsjahr geht weiter',
        publishedAt: '2026-08-28',
        topicIds: ['vereine', 'leben-im-dorf'],
        summary: [
            'Der **TSV Sprötze feiert 2026 sein 100-jähriges Bestehen**. Einer der Höhepunkte war der große Familientag am 22. August auf dem Vereinsgelände.',
            'Nach dem erfolgreichen Fest stehen im November noch der **offizielle 100. Geburtstag** und die große Jubiläumsparty an.',
        ],
        introduction: [
            'Seit **100 Jahren** gehört der TSV zum Leben in Sprötze. Am 4. November 1926 wurde der Verein mit zunächst 22 Mitgliedern gegründet. Heute sind mehr als **950 Menschen** im TSV aktiv.',
            'Das Jubiläum wird über das ganze Jahr gefeiert. Nach Fitness- und Yogatag, Frühschoppen und dem großen Familientag im August folgen im November die abschließenden Veranstaltungen.',
        ],
        sections: [
            {
                title: 'Familientag auf dem Vereinsgelände',
                paragraphs: [
                    'Am **22. August** wurde das Vereinsgelände an der Königsstraße zum Treffpunkt für Kinder, Familien und Vereinsmitglieder. Zum Auftakt fand gemeinsam mit der Grundschule Sprötze-Trelde ein **Sponsorenlauf zugunsten der Schulsporthalle Sprötze** statt.',
                    'Trotz Regen zu Beginn entwickelte sich der Familientag zu einer **gut besuchten Jubiläumsfeier**. Zum Programm gehörten unter anderem Kindertanz, eine Judo-Vorführung, Spiel- und Geschicklichkeitsstationen sowie ein spontaner Zumba-Flashmob.',
                    'Unterstützt wurde der TSV von zahlreichen Ehrenamtlichen und auch von der **Feuerwehr Sprötze**, die sich um die Verpflegung der Gäste kümmerte.',
                ],
            },
            {
                title: 'Vom kleinen Turnverein zum Mehrgenerationenverein',
                paragraphs: [
                    'Gegründet wurde der **TSV Sprötze** am **4. November 1926** als kleiner Turnverein. Nach dem Zweiten Weltkrieg wurde der Verein 1946 neu aufgebaut und sein Sportangebot in den folgenden Jahrzehnten immer weiter erweitert.',
                    'Heute reicht das Angebot vom Kinderturnen über Judo und Tennis bis zu Fitness-, Gesundheits- und Familienangeboten. Der Verein zählt inzwischen **mehr als 950 Mitglieder** und bringt damit mehrere Generationen aus Sprötze und Umgebung zusammen.',
                ],
            },
            {
                title: 'Im November wird weitergefeiert',
                paragraphs: [
                    'Am **4. November**, genau 100 Jahre nach der Vereinsgründung, findet ein Jubiläumsempfang für geladene Gäste statt.',
                    'Den Abschluss des Jubiläumsjahres bildet am **7. November ab 20 Uhr** die große **Jubiläumsparty** mit DJ Stephan im Gasthaus Wiechern. Eingeladen sind Mitglieder, Freunde des Vereins und weitere Feierfreudige.',
                ],
            },
            {
                title: 'Weiterführende Informationen',
                paragraphs: [
                    'Weitere Informationen zum Jubiläum, zum Familientag und zur Geschichte des TSV Sprötze finden Sie hier:',
                    {
                        type: 'link',
                        text: 'Wochenblatt: Familientag zum Jubiläum war ein großer Erfolg',
                        href: 'https://www.kreiszeitung-wochenblatt.de/buchholz/c-sport/familientag-zum-jubilaeum-war-ein-grosser-erfolg_a417411',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'Wochenblatt: Der Verein feiert sein 100-jähriges Jubiläum',
                        href: 'https://www.kreiszeitung-wochenblatt.de/buchholz/c-sport/familientag-der-verein-feiert-sein-100-jaehriges-jubilaeum_a415458',
                        indent: true,
                    },
                ],
            },
        ],
    },
    {
        id: 'neuer-entsorger-veolia-gelbe-tonne-altpapier',
        slug: 'neuer-entsorger-veolia-gelbe-tonne-altpapier',
        title: 'Veolia übernimmt Gelbe Tonnen und Altpapier',
        publishedAt: '2026-09-03',
        topicIds: ['abfallentsorgung'],
        summary: [
            'Im Landkreis Harburg gibt es einen **neuen Entsorger für die Gelben Tonnen und das Altpapier**. Veolia hat die Aufgaben von Knettenbrech + Gurdulic übernommen.',
            'Für Haushalte in Sprötze bleiben die **bekannten Abfuhrtermine unverändert**. Neu sind vor allem die Ansprechpartner bei Fragen oder bei der Bestellung einer Gelben Tonne.',
        ],
        introduction: [
            'Die **Veolia Umweltservice Nord GmbH** übernimmt ab sofort die Abfuhr der Gelben Tonnen und des Altpapiers im Landkreis Harburg. Das Unternehmen hat den operativen Betrieb von Knettenbrech + Gurdulic übernommen.',
            'Für die Haushalte in Sprötze ändert sich bei der eigentlichen Abfuhr zunächst wenig: **Die bisherigen Termine und Abläufe bleiben bestehen**. Übergangsweise können sogar noch die bekannten grün-roten Müllfahrzeuge des bisherigen Entsorgers unterwegs sein.',
        ],
        sections: [
            {
                title: 'Wechsel nach Problemen bei der Abfuhr',
                paragraphs: [
                    'Veolia ist künftig für die **Gelbe Tonne und die Altpapiertonne** zuständig. Dem Betreiberwechsel waren seit 2025 wiederholt Probleme bei der Abholung von Gelben Säcken beziehungsweise Gelben Tonnen und Altpapier vorausgegangen. Zeitweise blieben Behälter über längere Zeit stehen.',
                    'Veolia übernimmt auch den bisherigen Betriebsstandort in Marxen. **Die genauen Hintergründe der vorzeitigen Übergabe an den neuen Entsorger wurden bislang nicht vollständig öffentlich erläutert.**',
                    'Weitere Informationen gibt es beim [Landkreis Harburg](https://www.landkreis-harburg.de/portal/meldungen/neuer-entsorger-bei-papierabfall-und-gelben-tonnen-901010872-20100.html).',
                ],
            },
            {
                title: 'Was ändert sich für Sprötze?',
                paragraphs: [
                    'Die vorhandenen Tonnen können weiter genutzt werden und auch die veröffentlichten Abfuhrtermine ändern sich durch den Betreiberwechsel nicht.',
                    'Geändert haben sich vor allem die **Kontaktmöglichkeiten**. Wer beispielsweise eine Gelbe Tonne bestellen möchte oder Fragen zur Abfuhr hat, muss sich künftig an Veolia wenden.',
                ],
            },
            {
                title: 'Neue Kontaktdaten',
                paragraphs: [
                    {
                        type: 'list',
                        items: [
                            '**Veolia Umweltservice Nord GmbH, Betrieb Marxen**',
                            'Hinter der Bahn 33, 21439 Marxen',
                            'Telefon: **04185 9269030**',
                            'E-Mail: **de.vus.dispo.marxen@veolia.com**',
                            '[Online-Portal für die Gelbe Tonne](https://www.veolia.de/gelbe-tonne-landkreis-harburg)',
                        ],
                    },
                    'Die gleichen Kontaktdaten gelten auch für Fragen zum **Altpapier**. Bei Fragen oder Reklamationen zur Papiertonne kann weiterhin auch die Abfallwirtschaft des Landkreises Harburg unter **04171 693694** oder per E-Mail an **abfallberatung@lkharburg.de** kontaktiert werden.',
                ],
            },
            {
                title: 'Weiterführende Informationen',
                paragraphs: [
                    'Weitere Informationen zum Wechsel des Entsorgers und zu den Hintergründen finden Sie bei folgenden Quellen:',
                    {
                        type: 'link',
                        text: 'Landkreis Harburg: Neuer Entsorger bei Papierabfall und Gelben Tonnen',
                        href: 'https://www.landkreis-harburg.de/portal/meldungen/neuer-entsorger-bei-papierabfall-und-gelben-tonnen-901010872-20100.html',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'Buchholz Aktuell: Neuer Entsorger für Papier und Gelbe Tonne startet im Kreis Harburg',
                        href: 'https://buchholz-aktuell.de/buchholz/nach-muell-chaos-neuer-entsorger-fuer-papier-und-gelbe-tonne-startet-im-kreis-harburg-19341/',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'NDR: Künftig holt Veolia den Müll im Landkreis Harburg',
                        href: 'https://www.ndr.de/nachrichten/niedersachsen/lueneburg_heide_unterelbe/betreiberwechsel-kuenftig-holt-veolia-muell-im-landkreis-harburg,aktuelllueneburg-2620.html',
                        indent: true,
                    },
                ],
            },
        ],
    },
    {
        id: 'hausmuellanalyse-buchholz-2026',
        slug: 'hausmuellanalyse-buchholz-2026',
        title: 'Hausmüllanalyse: Was landet in der Restmülltonne?',
        publishedAt: '2026-09-04',
        topicIds: ['abfallentsorgung'],
        summary: [
            'Vom **21. bis 25. September untersucht** die Abfallwirtschaft des Landkreises Harburg **stichprobenartig den Restmüll in Buchholz und fünf weiteren Orten**.',
            'Dabei soll festgestellt werden, wie gut die Mülltrennung funktioniert und wie häufig beispielsweise **Biomüll, Papier oder Glas im Restmüll** landen.',
        ],
        introduction: [
            'Die Abfallwirtschaft des Landkreises Harburg lässt vom **21. bis 25. September 2026** eine Analyse der Restmüllzusammensetzung durchführen. Neben Buchholz gehören Appel, Asendorf, Nenndorf, Salzhausen und Winsen zu den ausgewählten Untersuchungsorten.',
            'Dabei geht es nicht um die Kontrolle einzelner Haushalte. Mehrere zufällig ausgewählte Restmülltonnen werden bei der regulären Abfuhr zusammengeführt. Anschließend wird das Gemisch in einem Labor untersucht.',
        ],
        sections: [
            {
                title: 'Was soll untersucht werden?',
                paragraphs: [
                    'Die Analyse soll zeigen, **was tatsächlich im Restmüll landet** und wie häufig Abfälle falsch entsorgt werden. Besonders geht es um Wertstoffe wie Biomüll, Papier oder Glas, die eigentlich getrennt gesammelt werden können.',
                    'Der Landkreis möchte damit herausfinden, wie gut die Mülltrennung bereits funktioniert und an welchen Stellen möglicherweise zusätzliche Informationen zur richtigen Abfalltrennung sinnvoll sind.',
                ],
            },
            {
                title: 'Keine Kontrolle einzelner Haushalte',
                paragraphs: [
                    'Ein beauftragter Dienstleister leert während der normalen Müllabfuhr ausgewählte Restmülltonnen in einen gemeinsamen Sammelbehälter. Untersucht wird anschließend nur das **Gemisch aus mehreren Behältern**.',
                    'Nach Angaben des Landkreises sind deshalb **keine Rückschlüsse auf einzelne Haushalte, deren Konsum oder ihr Trennverhalten möglich**.',
                ],
            },
            {
                title: 'Ist Sprötze betroffen?',
                paragraphs: [
                    'Der Landkreis nennt **Buchholz** als einen der sechs Untersuchungsorte. Welche Stadtteile, Straßen oder Haushalte für die Stichprobe ausgewählt werden, wird jedoch nicht veröffentlicht.',
                    'Ob auch Restmülltonnen aus **Sprötze** Teil der Untersuchung sind, lässt sich aus den veröffentlichten Informationen daher nicht entnehmen.',
                ],
            },
            {
                title: 'Weiterführende Informationen',
                paragraphs: [
                    'Weitere Informationen zur Hausmüllanalyse und zu ihrem Ablauf finden Sie bei folgenden Quellen:',
                    {
                        type: 'link',
                        text: 'Landkreis Harburg: Was landet alles im Restmüll?',
                        href: 'https://www.landkreis-harburg.de/portal/meldungen/was-landet-alles-im-restmuell--901010877-20100.html',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'Wochenblatt: Was landet alles im Restmüll?',
                        href: 'https://www.kreiszeitung-wochenblatt.de/tag/abfall',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'Buchholz Aktuell: Hausmüllanalyse soll Mülltrennung in Buchholz verbessern',
                        href: 'https://buchholz-aktuell.de/buchholz/hausmuellanalyse-soll-muelltrennung-in-buchholz-verbessern-19380',
                        indent: true,
                    },
                ],
            },
        ],
    },
    {
        id: 'bahnbruecke-k72-restarbeiten-september-2026',
        slug: 'bahnbruecke-sproetze-k72-vollsperrungen-september-2026',
        title: 'Nächtliche Vollsperrungen an Sprötzer Bahnbrücke Ende September',
        publishedAt: '2026-09-15',
        topicIds: ['verkehr', 'leben-im-dorf'],
        summary: [
            '**An der Bahnbrücke der K72 in Sprötze stehen weitere Arbeiten an.** Vom **28. September bis 4. Oktober 2026** wird unterhalb der Brücke während der nächtlichen Betriebsruhe der Bahn gearbeitet. Dabei kann es zwischen **22:30 und 4:30 Uhr zu einzelnen Vollsperrungen** auf dem Brückenbauwerk kommen. Die Arbeiten an den Übergangskonstruktionen selbst wurden bereits im Frühjahr ausgeführt.',
        ],
        introduction: [
            'Die Arbeiten an der **Bahnbrücke in der Kirchenallee in Sprötze** sind noch nicht vollständig abgeschlossen.',
            'Vom **28. September bis 4. Oktober 2026** stehen weitere Arbeiten unterhalb der Brücke an. Dafür kann die K72 nachts zeitweise vollständig gesperrt werden.',
        ],
        sections: [
            {
                title: 'Weitere Arbeiten an der Bahnbrücke',
                paragraphs: ['Die Arbeiten unterhalb des Bauwerks können nur während der nächtlichen Betriebsruhe der Bahn ausgeführt werden. Deshalb kann es zwischen **22:30 und 4:30 Uhr zu einzelnen Vollsperrungen** kommen. Eine durchgehende Sperrung über den gesamten Zeitraum ist nicht angekündigt.', 'Die **Übergangskonstruktionen der Brücke** wurden bereits im Frühjahr instandgesetzt. Die jetzt folgenden Arbeiten mussten verschoben werden, weil die dafür benötigten Sperrpausen der Deutschen Bahn erst Ende September zur Verfügung stehen.',],
            },
            {
                title: 'Weiterführende Informationen',
                paragraphs: [
                    'Weitere Informationen entnehmen Sie bitte dem Wochenblatt-Artikel, der die Hintergründe und Details zu den Arbeiten an der Bahnbrücke zusammenfasst.',
                    {
                        type: 'link',
                        text: 'Wochenblatt-Artikel',
                        href: 'https://www.kreiszeitung-wochenblatt.de/buchholz/c-panorama/bauarbeiten-an-bahnbruecke-in-sproetze-teilweise-vollsperrung_a419984',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'Offizielle Vorgeschichte (Pressmitteilung)',
                        href: 'https://www.landkreis-harburg.de/downloads/datei/NDE5ZTgzMzU5MjdkMDUwY2dhYUFVRlM1SFNlbzFURWJUMUM2dFJmUUxHUEVPUVcvUXVsMEFUZzMvRy9McSt4WlJBTXBmVGV2V3BhKzZHOUFtR3ZXNEhVcXNvMmIxWjFwMGRMc0RVMFB1b1p3NWVqZlBZSm96MEQ1YmhRU2txeDcreUFWTmpjVFBJdnNVTmo5YkhZRmpuNEpmOGZQTExJRmR0SVBzUT09',
                        indent: true,
                    },
                ],
            },
        ],
    },
    {
        id: 'niedersachsenstrasse-13-wohnungsbau-bauturbo',
        slug: 'niedersachsenstrasse-13-mehrfamilienhaeuser-bauturbo',
        title: 'Deutlich größere Bebauung in der Niedersachsenstraße 13',
        publishedAt: '2026-09-17',
        topicIds: ['ortsmitte'],
        summary: [
            'Auf dem **Eckgrundstück an der Niedersachsenstraße 13 neben dem Edeka** sind **zwei Mehrfamilienhäuser** mit 12 bis 15 Wohnungen und zwei Gewerbeeinheiten geplant.',
            'Für das Vorhaben sollen die **bisherigen Vorgaben des Bebauungsplans deutlich überschritten** werden: Statt eines Vollgeschosses sind zwei vorgesehen, außerdem sollen Gebäude höher ausfallen und Baugrenzen stellenweise um bis zu 6,20 Meter überschritten werden.',
        ],
        summaryImage: {
            src: '/images/news/niedersachsenstrasse-13.jpeg',
            alt: 'Altbestand in der Niedersachsenstrasse 13',
        },
        articleLink: {
            slug: 'niedersachsenstrasse-13-wohnungsbau',
            text: 'Bebaungsplan Niedersachsenstraße 13'
        },
    },
    {
        id: 'sproetzer-bahnhofstrasse-3-mehrfamilienhaus',
        slug: 'sproetzer-bahnhofstrasse-3-mehrfamilienhaus',
        title: 'Mehrfamilienhaus mit 12 Wohnungen an der Sprötzer Bahnhofstraße 3 geplant',
        publishedAt: '2026-09-17',
        topicIds: ['ortsmitte'],
        summary: [
            'An der **Sprötzer Bahnhofstraße 3**, dem Grundstück zwischen der Cakewishes Bakery und den Glascontainern am Bahnhof, ist ein **Mehrfamilienhaus mit 12 Wohnungen** geplant. Das 1.182 Quadratmeter große Grundstück wurde zuvor mit Altbestand zum Verkauf angeboten.',
            'Inzwischen wird das genehmigte Neubauprojekt selbst als **Investment für 3,23 Millionen Euro** vermarktet. Die Fertigstellung ist für **2027** vorgesehen.',
        ],
        summaryImage: {
            src: '/images/news/sproetzer-bahnhofstrasse-3.jpeg',
            alt: 'Altbestand in der Sprötzer Bahnhofstraße 3',
        },
        introduction: [
            'An der **Sprötzer Bahnhofstraße 3** soll ein Mehrfamilienhaus mit **12 Wohnungen** entstehen. Das Grundstück mit einer Größe von **1.182 Quadratmetern** war zuvor als Baugrundstück mit Altbestand angeboten und inzwischen verkauft worden.',
            'Mittlerweile wird das geplante Mehrfamilienhaus selbst als **Investment für 3,23 Millionen Euro** angeboten. Laut aktuellem Immobilienangebot liegt die **Baugenehmigung bereits vor**, die Fertigstellung ist für **2027** vorgesehen.',
        ],
        sections: [
            {
                title: 'Was ist geplant?',
                paragraphs: [
                    'Das aktuelle Angebot beschreibt ein **Mehrfamilienhaus mit 12 Wohnungen und rund 634 Quadratmetern Wohnfläche** auf dem 1.182 Quadratmeter großen Grundstück.',
                    'Geplant ist ein energieeffizienter Neubau nach **KfW-40-QNG-Standard**. Das Projekt richtet sich vor allem an Kapitalanleger und wird derzeit für **3,23 Millionen Euro** angeboten.',
                ],
            },
            {
                title: 'Das Grundstück wurde zuvor verkauft',
                paragraphs: [
                    'Zuvor wurde das Grundstück als **Baugrundstück für ein Mehrfamilienhaus** angeboten. Auf dem Grundstück befand sich zu diesem Zeitpunkt noch ein Gebäude aus den 1960er-Jahren, das laut damaligem Angebot vom Käufer beseitigt werden sollte.',
                    'Im früheren Angebot wurde eine Bebauung nach **§ 34 BauGB entsprechend der Nachbarschaftsbebauung** beschrieben. Das Angebot ist mittlerweile als **verkauft** gekennzeichnet.',
                ],
            },
            {
                title: '2024 waren noch vier Wohnungen genannt',
                paragraphs: [
                    'Interessant ist ein Blick in das Ratsinformationssystem der Stadt: Im August 2024 wurde unter der Adresse **Sprötzer Bahnhofstraße 3–3a** ein Bauvorhaben für ein **Mehrfamilienhaus mit vier Wohneinheiten** aufgeführt.',
                    'Das aktuelle Immobilienangebot nennt dagegen **12 Wohnungen** und eine bereits erteilte Baugenehmigung. Wie sich die Planung zwischenzeitlich von vier auf zwölf Wohnungen entwickelt hat, lässt sich aus den öffentlich verfügbaren Angaben derzeit nicht nachvollziehen.',
                ],
            },
            {
                title: 'Das Projekt wird bereits als Investment angeboten',
                paragraphs: [
                    'Das heutige Angebot richtet sich nicht mehr an Käufer eines unbebauten Grundstücks, sondern vermarktet das **projektierte und genehmigte Mehrfamilienhaus als Kapitalanlage**.',
                    'Angeboten werden dabei laut Makler zwei Modelle mit oder ohne Mietpreisbindung. Außerdem wird mit möglichen Förderdarlehen von NBank und KfW sowie steuerlichen Vorteilen geworben.',
                ],
            },
            {
                title: 'Weiterführende Informationen',
                paragraphs: [
                    {
                        type: 'link',
                        text: 'Früheres Verkaufsangebot des Grundstücks – inzwischen verkauft',
                        href: 'https://amoreal.de/immobilien/grundstueck-in-buchholz-in-der-nordheide-sproetze-kaufen-36e9dc/',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'Aktuelles Kaufangebot des geplanten Mehrfamilienhauses',
                        href: 'https://www.jakob-bauer.de/immobiliendetails.xhtml?id[obj0]=237',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'Ratsinformationssystem: Bauvorhaben Sprötzer Bahnhofstraße 3–3a mit vier Wohneinheiten im Jahr 2024',
                        href: 'https://www.buchholz.de/allris/doc?ANNOTS=1&DOCTYP=108&DOLFDNR=1211906&OTYP=41',
                        indent: true,
                    },
                ],
            },
        ],
    },
    {
        id: 'niedersachsenstrasse-4a-wohnungsbau',
        slug: 'niedersachsenstrasse-4a-wohnungsbau',
        title: 'Dreigeschossiges Wohnhaus mit 8 Wohnungen in Niedersachsenstrasse 4a geplant',
        publishedAt: '2026-09-17',
        topicIds: ['ortsmitte'],
        summary: [
            'An der **Niedersachsenstraße 4a** ist ein **dreigeschossiges Wohnhaus mit 8 Wohnungen** geplant. Das Vorhaben wurde im April und Mai 2026 in den städtischen Gremien zur Kenntnis genommen; weitere Details zur konkreten Planung sind bislang nicht öffentlich bekannt.'
        ],
        summaryImage: {
            src: '/images/news/niedersachsenstrasse-4a.jpeg',
            alt: 'Spielplatz neben der Niedersachsenstraße 4',
        },
        introduction: [
            'An der **Niedersachsenstraße 4a in Sprötze** ist ein neues Mehrfamilienhaus geplant. Vorgesehen ist ein **dreigeschossiges Gebäude mit insgesamt 8 Wohnungen**.',
            'Das Vorhaben liegt in der Sprötzer Ortsmitte. Viele Details zur konkreten Planung wurden bisher allerdings **nicht öffentlich gemacht**.',
        ],
        sections: [
            {
                title: 'Was ist geplant?',
                paragraphs: [
                    'Die Stadt bezeichnet das Vorhaben als **„Errichtung eines dreigeschossigen Wohnhauses mit 8 Wohneinheiten“**.',
                    'Weitere Angaben etwa zur Gebäudehöhe, zur Größe der Wohnungen, zu Stellplätzen oder zur Gestaltung sind in den bisher veröffentlichten Sitzungsunterlagen nicht enthalten. Auch die genaue Grundstückslage geht aus den Unterlagen nicht hervor, evtl. könnte es sich um das Grundstück mit dem kleinen Spielplatz schräg gegenüber des alten Feuerwehrhauses handeln.',
                ],
            },
            {
                title: 'Was ist bisher passiert?',
                paragraphs: [
                    'Das Bauvorhaben wurde am **15. April 2026** im Ausschuss für Stadtentwicklung, Umwelt, Klimaschutz und Mobilität behandelt. Der Tagesordnungspunkt wurde als Information über ein Bauvorhaben geführt.',
                    'Am **19. Mai 2026** nahm auch der Verwaltungsausschuss die Information über das Vorhaben zur Kenntnis. Ein eigener politischer Beschluss über das Bauvorhaben ist in den veröffentlichten Unterlagen nicht ausgewiesen.',
                ],
            },
            {
                title: 'Warum ist das für Sprötze interessant?',
                paragraphs: [
                    'Das Grundstück liegt in der **Sprötzer Ortsmitte an der Niedersachsenstraße**. Bereits bei der Planung der „Neuen Ortsmitte Sprötze“ war vorgesehen, in diesem Bereich zusätzliche **innerörtliche Wohnmöglichkeiten** zu schaffen.',
                    'Gleichzeitig sollte sich neue Bebauung in die vorhandenen Strukturen einfügen. In der Begründung zum Bebauungsplan wird ausdrücklich das Ziel genannt, bei Neubauten die **dörflichen Strukturen und das Ortsbild** zu berücksichtigen.',
                    'Ein **dreigeschossiges Wohngebäude** ist deshalb für die weitere Entwicklung der Ortsmitte interessant – insbesondere im Hinblick auf Gebäudegröße und Gestaltung. Zu diesen Punkten liegen für das konkrete Vorhaben bisher aber keine öffentlichen Detailinformationen vor.',
                ],
            },
            {
                title: 'Wie geht es weiter?',
                paragraphs: [
                    'Der öffentlich dokumentierte Stand endet derzeit mit der **Kenntnisnahme durch den Verwaltungsausschuss am 19. Mai 2026**.',
                    'Ob inzwischen eine Baugenehmigung erteilt wurde oder sich die Planung noch verändert hat, ist aus den bisher veröffentlichten Unterlagen nicht ersichtlich.',
                ],
            },
            {
                title: 'Weiterführende Informationen',
                paragraphs: [
                    {
                        type: 'link',
                        text: 'Sitzung des Stadtentwicklungsausschusses vom 15.04.2026',
                        href: 'https://www.buchholz.de/allris/to010?SILFDNR=1000952&TOLFDNR=1017696',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'Pressemitteilung des Verwaltungsausschusses vom 19.05.2026',
                        href: 'https://www.buchholz.de/downloads/datei/NGQzZDk0ZDUyZDhmZjI2OWZKVTFvUmdnU0lrcGI1cDlRTS9FbUhhMWpTaVo5VEZDemdTVklDV2JxRnhFcW44THJKOWZpaEhnd1ZZWUVxbUNBenFWTFV2U1RtYXRnclh0Ym9QY2tLanpVWTFrMG1xekJya0I1cEVha3UzMk9OWE5RajhzVFphUXlZSC9VNWoydmVDNXB0TW1WVGFGam5pSnNNSVhZdz09',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'Begründung zum Bebauungsplan „Neue Ortsmitte Sprötze – Niedersachsenstraße“',
                        href: 'https://www.buchholz.de/downloads/datei/NTA0ZGM1OGM0ODU5MzAwN3VjaDdIQ0pzQVNyUmQ2elJXUHRQNEpPQ1ZFUEUwWUpLUXk3Y1haTGRIb1AvcFBnZWh3Y1BZOTk1bXdjUTBpMllJczNEK2hXYmdKZWN5aEt0OFVnaVdwZFRDRms1RXZIVEFXN0k0bGw0a0tZdlRWdGh5dmRuaXI4clI1V2RSb3ZNTHBXVXlVVE5ZaWhCMjRJd2czRkY3UT09',
                        indent: true,
                    },
                    {
                        type: 'link',
                        text: 'Wochenblatt: Bürokratische Hürden bei einem Bauvorhaben in Sprötze',
                        href: 'https://www.kreiszeitung-wochenblatt.de/buchholz/c-panorama/buerokratische-huerden-die-bei-bauvorhaben-lauern_a370051',
                        indent: true,
                    },
                ],
            },
        ],
    },
    {
        id: 'haeckselaktion-buchholz-2026',
        slug: 'haeckselaktion-2026-anmeldung-sproetze',
        title: 'Häckselaktion 2026 im November',
        publishedAt: '2026-09-18',
        topicIds: ['abfallentsorgung', 'leben-im-dorf'],
        summary: [
            'Die **mobile Häckselaktion** der Stadt Buchholz findet im **November** wieder statt. An vier Samstagen wird Baum- und Buschschnitt direkt vor angemeldeten Grundstücken zerkleinert. **Für Sprötze steht der genaue Termin noch nicht fest.** Die Stadt will am 19. Oktober bekanntgeben, welche Ortschaft an welchem Aktionstag bedient wird.',
        ],
        articleLink: {
            href: 'https://buchholz-aktuell.de/buchholz/jetzt-anmelden-mobile-haecksler-kommen-nach-buchholz-19803',
            text: 'Buchholz Aktuell: Häckselaktion'
        },
    },
];