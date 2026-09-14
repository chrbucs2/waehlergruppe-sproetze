export const electionResults = {
    source: {
        label: 'Wahlergebnisse der Stadt Buchholz i.d.N. – Ortsratswahl 2026, Sprötze',
        url: 'https://buchholz.wahlen-aktuell.de/Ortsratswahl2026/ergebnisse_ortsteil_033530053.html',
        updatedAt: '14.09.2026, 05:08:14',
    },
    turnout: '69,4 %',
    listResult: {
        party: 'WGS',
        votes: '1.844',
        percentage: '42,1 %',
    },
    partyResults: [
        { party: 'WGS', votes: '1.844', percentage: '42,1 %' },
        { party: 'CDU', votes: '1.137', percentage: '26,0 %' },
        { party: 'GRÜNE', votes: '598', percentage: '13,7 %' },
        { party: 'SPD', votes: '454', percentage: '10,4 %' },
        { party: 'FDP', votes: '173', percentage: '4,0 %' },
        { party: 'EB: Ulrich', votes: '172', percentage: '3,9 %' },
    ],
    electedCandidates: [
        { name: 'Denise Jusinski', rank: 1, votes: 228 },
        { name: 'Claas Bartels', rank: 2, votes: 178 },
        { name: 'Dorothee Kröger', rank: 4, votes: 177 },
        { name: 'Peter Kröger', rank: 3, votes: 155 },
    ],
    allCandidateResults: [
        { name: 'Denise Jusinski', rank: 1, votes: 228, elected: true },
        { name: 'Claas Bartels', rank: 2, votes: 178, elected: true },
        { name: 'Dorothee Kröger', rank: 4, votes: 177, elected: true },
        { name: 'Peter Kröger', rank: 3, votes: 155, elected: true },
        { name: 'Ingo Schalow', rank: 5, votes: 92, elected: false },
        { name: 'Ute Schwermer-Vietheer', rank: 6, votes: 86, elected: false },
        { name: 'Christian Buck', rank: 7, votes: 59, elected: false },
        { name: 'René Hamann', rank: 8, votes: 56, elected: false },
        { name: 'Gabriele Pilkowski', rank: 9, votes: 20, elected: false },
    ],
};
