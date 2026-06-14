// ── CORNHOLE TURNIER CONFIG ───────────────────────────────────────────────────
// Diese Datei ist die einzige die für das Turnier gepflegt werden muss.
// data.js und app.js müssen nicht angefasst werden.
//
// Reihenfolge der Abschnitte:
//   1. TEAMS          – Teamnamen und Gruppenzuordnung
//   2. MATCHES        – Spielplan (Zeiten, Felder, Runden)
//   3. PAARUNGEN      – Welche Teams spielen in welchem Match
//   4. ERGEBNISSE     – Eingetragene Spielergebnisse


// ── TEAMS ─────────────────────────────────────────────────────────────────────
// Reihenfolge = Team-ID (1–12). Gruppe wird für spätere Gruppenanzeige genutzt.

const CORNHOLE_TEAMS_CONFIG = [
  { id:  1, name: "Awmb,akwmv",                         group: "A" },
  { id:  3, name: "PWG Turbo",                           group: "A" },
  { id:  4, name: "MUPPETS",                             group: "A" },
  { id:  5, name: "Pommes & Champagner",                 group: "B" },
  { id:  6, name: "Die Bio-Mechanischen-Weltraumstiere", group: "B" },
  { id:  7, name: "Unicorns",                            group: "B" },
  { id:  8, name: "Two Girls one Sack",                  group: "B" },
  { id:  9, name: "Team Hecken Frisch-Vermählt",         group: "C" },
  { id: 10, name: "Die brunftigen Beutel Boys",          group: "C" },
  { id: 11, name: "Mais-ter Mädels",                     group: "C" },
  { id: 12, name: "Die Beutelbrüder",                    group: "C" },
];


// ── MATCHES ───────────────────────────────────────────────────────────────────
// Spielplan: Runden, Felder und Uhrzeiten.
// team1/team2 und score1/score2 werden automatisch aus PAARUNGEN und ERGEBNISSE befüllt.
// 4 Teams pro Gruppe → 6 Round-Robin-Spiele pro Gruppe · alle Gruppen enden 17:40
// Halbfinale 18:00 · Platz 3 & Finale 18:30

const CORNHOLE_MATCHES_CONFIG = [
  // ── Gruppenphase A – Feld 1 ───────────────────────────────────────────────
  { id:  1, round: "Gruppenphase", group: "A", field: 1, time: "16:00" },
  { id:  2, round: "Gruppenphase", group: "A", field: 1, time: "16:20" },
  { id:  3, round: "Gruppenphase", group: "A", field: 1, time: "16:40" },
  { id:  4, round: "Gruppenphase", group: "A", field: 1, time: "17:00" },
  { id:  5, round: "Gruppenphase", group: "A", field: 1, time: "17:20" },
  { id:  6, round: "Gruppenphase", group: "A", field: 1, time: "17:40" },
  // ── Gruppenphase B – Feld 2 ───────────────────────────────────────────────
  { id:  7, round: "Gruppenphase", group: "B", field: 2, time: "16:00" },
  { id:  8, round: "Gruppenphase", group: "B", field: 2, time: "16:20" },
  { id:  9, round: "Gruppenphase", group: "B", field: 2, time: "16:40" },
  { id: 10, round: "Gruppenphase", group: "B", field: 2, time: "17:00" },
  { id: 11, round: "Gruppenphase", group: "B", field: 2, time: "17:20" },
  { id: 12, round: "Gruppenphase", group: "B", field: 2, time: "17:40" },
  // ── Gruppenphase C – Feld 3 ───────────────────────────────────────────────
  { id: 13, round: "Gruppenphase", group: "C", field: 3, time: "16:00" },
  { id: 14, round: "Gruppenphase", group: "C", field: 3, time: "16:20" },
  { id: 15, round: "Gruppenphase", group: "C", field: 3, time: "16:40" },
  { id: 16, round: "Gruppenphase", group: "C", field: 3, time: "17:00" },
  { id: 17, round: "Gruppenphase", group: "C", field: 3, time: "17:20" },
  { id: 18, round: "Gruppenphase", group: "C", field: 3, time: "17:40" },
  // ── Halbfinale (18:00) ────────────────────────────────────────────────────
  { id: 19, round: "Halbfinale", group: null, field: 1, time: "18:00", label1: "1. Gruppe A", label2: "2. Gruppe B"     },
  { id: 20, round: "Halbfinale", group: null, field: 2, time: "18:00", label1: "1. Gruppe B", label2: "Bester 2. Platz" },
  { id: 21, round: "Halbfinale", group: null, field: 3, time: "18:00", label1: "1. Gruppe C", label2: "2. Gruppe A"     },
  // ── Platz 3 & Finale (18:30) ──────────────────────────────────────────────
  { id: 22, round: "Platz 3", group: null, field: 1, time: "18:30", label1: "Verlierer HF 1", label2: "Verlierer HF 2" },
  { id: 23, round: "Finale",  group: null, field: 2, time: "18:30", label1: "Sieger HF 1",    label2: "Sieger HF 2"    },
];


// ── PAARUNGEN ─────────────────────────────────────────────────────────────────
// Format:  Match-ID : [Team-ID 1, Team-ID 2]
// Nur Gruppenphase – Halbfinale/Finale werden manuell eingetragen.
// 4er Round-Robin: 1v2, 3v4, 1v3, 2v4, 1v4, 2v3

const CORNHOLE_PAIRINGS = {
  // Gruppenphase A (Teams 1, 3, 4)
  2: [3, 4],
  3: [1, 3],
  5: [1, 4],
  // Gruppenphase B (Teams 5–8)
  7: [5, 6],
  8: [7, 8],
  9: [5, 7],
  10: [6, 8],
  11: [5, 8],
  12: [6, 7],
  // Gruppenphase C (Teams 9–12)
  13: [9, 10],
  14: [11, 12],
  15: [9, 11],
  16: [10, 12],
  17: [9, 12],
  18: [10, 11],
  // Halbfinale
  21: [8, 10],
  // Platz 3 & Finale
};


// ── ERGEBNISSE ────────────────────────────────────────────────────────────────
// Format:  Match-ID : [Punkte Team 1, Punkte Team 2]
// Nicht gespielte Spiele einfach weglassen oder auskommentieren.

const CORNHOLE_RESULTS = {
  // Gruppenphase A
  // Gruppenphase B
  // Gruppenphase C
  // Halbfinale
  // Platz 3 & Finale
};
