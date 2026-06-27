// ── CORNHOLE TURNIER CONFIG ───────────────────────────────────────────────────
// Statische Turnierdaten: Teams, Spielplan, Gruppenpaarungen.
// Ergebnisse und KO-Paarungen stehen in scores.js (wird separat aktualisiert).
//
// Reihenfolge der Abschnitte:
//   1. TEAMS          – Teamnamen und Gruppenzuordnung
//   2. MATCHES        – Spielplan (Zeiten, Felder, Runden)
//   3. PAARUNGEN      – Welche Teams spielen in welchem Match (Gruppenphase)


// ── TEAMS ─────────────────────────────────────────────────────────────────────
// 12 Teams in 3 Gruppen à 4.

const CORNHOLE_TEAMS_CONFIG = [
  { id:  1, name: "Awmb,akwmv",                  group: "A" },
  { id:  3, name: "PWG Turbo",                    group: "A" },
  { id:  4, name: "MUPPETS",                      group: "A" },
  { id:  7, name: "Unicorns",                     group: "A" },
  { id:  5, name: "Pommes & Champagner",          group: "B" },
  { id:  6, name: "Bio-Mech. Weltraumstiere",     group: "B" },
  { id:  8, name: "Two Girls one Sack",           group: "B" },
  { id: 18, name: "DiaWP",                        group: "B" },
  { id:  9, name: "Team Hecken Frisch-Vermählt",  group: "C" },
  { id: 10, name: "brunftige Beutel Boys",        group: "C" },
  { id: 11, name: "Mais-ter Mädels",              group: "C" },
  { id: 12, name: "Beutelbrüder",                 group: "C" },
];


// ── MATCHES ───────────────────────────────────────────────────────────────────
// 4 Teams pro Gruppe → je 6 Spiele · 3 Gruppen = 18 Gruppenspiele
// 10-Minuten-Intervalle · Halbfinale 17:00 · Platz 3 17:20 · Finale 17:30

const CORNHOLE_MATCHES_CONFIG = [
  // ── Gruppenphase A – Feld 1 (6 Spiele) ────────────────────────────────────
  { id:  1, round: "Gruppenphase", group: "A", field: 1, time: "16:00" },
  { id:  2, round: "Gruppenphase", group: "A", field: 1, time: "16:10" },
  { id:  3, round: "Gruppenphase", group: "A", field: 1, time: "16:20" },
  { id:  4, round: "Gruppenphase", group: "A", field: 1, time: "16:30" },
  { id:  5, round: "Gruppenphase", group: "A", field: 1, time: "16:40" },
  { id:  6, round: "Gruppenphase", group: "A", field: 1, time: "16:50" },
  // ── Gruppenphase B – Feld 2 (6 Spiele) ────────────────────────────────────
  { id:  7, round: "Gruppenphase", group: "B", field: 2, time: "16:00" },
  { id:  8, round: "Gruppenphase", group: "B", field: 2, time: "16:10" },
  { id:  9, round: "Gruppenphase", group: "B", field: 2, time: "16:20" },
  { id: 10, round: "Gruppenphase", group: "B", field: 2, time: "16:30" },
  { id: 11, round: "Gruppenphase", group: "B", field: 2, time: "16:40" },
  { id: 12, round: "Gruppenphase", group: "B", field: 2, time: "16:50" },
  // ── Gruppenphase C – Feld 3 (6 Spiele) ────────────────────────────────────
  { id: 13, round: "Gruppenphase", group: "C", field: 3, time: "16:00" },
  { id: 14, round: "Gruppenphase", group: "C", field: 3, time: "16:10" },
  { id: 15, round: "Gruppenphase", group: "C", field: 3, time: "16:20" },
  { id: 16, round: "Gruppenphase", group: "C", field: 3, time: "16:30" },
  { id: 17, round: "Gruppenphase", group: "C", field: 3, time: "16:40" },
  { id: 18, round: "Gruppenphase", group: "C", field: 3, time: "16:50" },
  // ── Halbfinale (17:00) ────────────────────────────────────────────────────
  { id: 19, round: "Halbfinale", group: null, field: 1, time: "17:00", label1: "1. Gruppe A", label2: "2. Gruppe B" },
  { id: 20, round: "Halbfinale", group: null, field: 2, time: "17:00", label1: "1. Gruppe B", label2: "2. Gruppe C" },
  { id: 21, round: "Halbfinale", group: null, field: 3, time: "17:00", label1: "1. Gruppe C", label2: "2. Gruppe A" },
  // ── Platz 3 & Finale ─────────────────────────────────────────────────────
  { id: 22, round: "Platz 3", group: null, field: 1, time: "17:20", label1: "3. Sieger HF", label2: "Bester Verlierer HF" },
  { id: 23, round: "Finale",  group: null, field: 1, time: "17:30", label1: "1. Sieger HF", label2: "2. Sieger HF" },
];


// ── PAARUNGEN ─────────────────────────────────────────────────────────────────
// Format:  Match-ID : [Team-ID 1, Team-ID 2]
// Nur Gruppenphase – Halbfinale/Finale werden in scores.js eingetragen.
// 4er Round-Robin: 6 Spiele pro Gruppe

const CORNHOLE_PAIRINGS = {
  // Gruppenphase A (Teams 1, 3, 4, 7)
  1:  [1, 3],
  2:  [4, 7],
  3:  [1, 4],
  4:  [3, 7],
  5:  [1, 7],
  6:  [3, 4],
  // Gruppenphase B (Teams 5, 6, 8, 18)
  7:  [5, 6],
  8:  [8, 18],
  9:  [5, 8],
  10: [6, 18],
  11: [5, 18],
  12: [6, 8],
  // Gruppenphase C (Teams 9, 10, 11, 12)
  13: [9, 10],
  14: [11, 12],
  15: [9, 11],
  16: [10, 12],
  17: [9, 12],
  18: [10, 11],
};
