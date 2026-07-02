# Rechtliche Absicherung der Website

Diese Seite erklärt, wie ihr die Website rechtlich korrekt konfiguriert.

## 📋 Schritt-für-Schritt

### 1. Template ausfüllen
Öffnet `.legal-template.md` und füllt **alle Felder aus**.

Das Template enthält:
- Impressum-Pflichtangaben (Name, Adresse, Kontakt)
- Datenschutz-Details
- Bildrechte & Asset-Dokumentation
- Checkliste vor Live-Gang

### 2. Informationen in die App übertragen

Sobald das Template vollständig ist, öffnet `src/App.jsx` und sucht:

**Für Impressum:** Sucht nach `showImpressum` (ca. Zeile 538)
```jsx
{showImpressum && (
    <div className="legal-overlay" onClick={() => setShowImpressum(false)}>
        <article className="legal-modal" onClick={(e) => e.stopPropagation()}>
            {/* Hier die Inhalte aus eurem Template einfügen */}
```

**Für Datenschutz:** Sucht nach `showDatenschutz` (ca. Zeile 580)
```jsx
{showDatenschutz && (
    <div className="legal-overlay" onClick={() => setShowDatenschutz(false)}>
        <article className="legal-modal" onClick={(e) => e.stopPropagation()}>
            {/* Hier die Inhalte aus eurem Template einfügen */}
```

### 3. Testen
```bash
npm run dev
```

Klickt im Footer auf "Impressum" und "Datenschutz" — alles sollte aufgehen und lesbar sein.

### 4. Pushen
```bash
git add src/App.jsx
git commit -m "Update legal content with real organization details"
git push origin main
```

Die Website wird automatisch auf GitHub Pages aktualisiert.

---

## ✅ Was ist schon vorhanden?

- ✅ **Overlays** für Impressum & Datenschutz (modal, scrollbar, mobile-responsive)
- ✅ **Footer Links** zum Öffnen der Overlays
- ✅ **Basis-Texte** (generisch, müssen aber konkretisiert werden)

## ⚠️ Was braucht ihr selbst?

- 🔴 **Konkrete Kontaktdaten** (Adresse, E-Mail, Telefon)
- 🔴 **Vertretungsberechtigte** (wer unterschreibt rechtlich?)
- 🔴 **Bildrechte klären** (haben alle Kandidaten zugestimmt?)
- 🔴 **Datenschutzbeauftragter?** (falls benötigt)

---

## 🇩🇪 Deutsche Rechtslage — kurz zusammengefasst

| Anforderung | Status | Notwendig? |
|---|---|---|
| **Impressum (TMG §5, §7)** | ✅ Vorlage fertig | **JA** — Pflicht! |
| **Datenschutzerklärung (DSGVO)** | ✅ Vorlage fertig | **JA** — Pflicht! |
| **Bildrechte** | ⚠️ Selbst klären | **JA** — haftungsrelevant |
| **Cookie-Banner** | ✅ Nicht nötig | Nein — keine Cookies |
| **Externe Links-Haftung** | ✅ Dokumentiert | Bedingt |

---

## 📞 Hilferessourcen

- **E-Recht24**: https://www.e-recht24.de/ (Muster, Vorlagen)
- **Aktivemind**: https://www.activemind.de/ (DSGVO, Vorlagen)
- **IHK vor Ort**: Oft kostenlose rechtliche Beratung für Vereine/Initiativen
- **Bürgerstiftung Sprötze?** Falls registriert — die können oft weiterhelfen

---

## 🔗 Zusammenfassung

**Aktueller Stand:** 
- Website ist funktionsfähig ✅
- Rechtliche Struktur ist vorbereitet ✅
- Konkrete Inhalte müssen von euch eingefüllt werden 📝

**Nächste Schritte:**
1. `.legal-template.md` ausfüllen
2. Inhalte in `src/App.jsx` übertragen
3. Testen & pushen
4. Ggf. Anwalt checken (optional, aber empfohlen für politische Kandidaten)
