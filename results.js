// ── CORNHOLE TURNIER CONFIG ───────────────────────────────────────────────────
// Statische Turnierdaten: Teams, Spielplan, Gruppenpaarungen.
// Ergebnisse und KO-Paarungen stehen in scores.js (wird separat aktualisiert).
//
// Reihenfolge der Abschnitte:
//   1. TEAMS          – Teamnamen und Gruppenzuordnung
//   2. MATCHES        – Spielplan (Zeiten, Felder, Runden)
//   3. PAARUNGEN      – Welche Teams spielen in welchem Match (Gruppenphase)


// ── TEAMS ─────────────────────────────────────────────────────────────────────
// 18 Teams in 3 Gruppen à 6. Gruppe wird für spätere Gruppenanzeige genutzt.

const CORNHOLE_TEAMS_CONFIG = [
  { id:  1, name: "Awmb,akwmv",                         group: "A" },
  { id:  3, name: "PWG Turbo",                           group: "A" },
  { id:  4, name: "MUPPETS",                             group: "A" },
  { id: 13, name: "Iron Pair",                           group: "A" },
  { id: 14, name: "Ein Sack kommt selten allein",        group: "A" },
  { id: 17, name: "Die Sackgesichter",                   group: "A" },
  { id:  5, name: "Pommes & Champagner",                 group: "B" },
  { id:  6, name: "Die Bio-Mechanischen-Weltraumstiere", group: "B" },
  { id:  7, name: "Unicorns",                            group: "B" },
  { id:  8, name: "Two Girls one Sack",                  group: "B" },
  { id: 15, name: "Team Schäl Sick",                     group: "B" },
  { id: 18, name: "DiaWP",                                group: "B" },
  { id:  9, name: "Team Hecken Frisch-Vermählt",         group: "C" },
  { id: 10, name: "Die brunftigen Beutel Boys",          group: "C" },
  { id: 11, name: "Mais-ter Mädels",                     group: "C" },
  { id: 12, name: "Die Beutelbrüder",                    group: "C" },
  { id: 16, name: "Corn to be wild",                     group: "C" },
  { id: 19, name: "Team Mais",                           group: "C" },
];


// ── MATCHES ───────────────────────────────────────────────────────────────────
// Spielplan: Runden, Felder und Uhrzeiten.
// 6 Teams pro Gruppe → je 15 Spiele · 3 Gruppen = 45 Gruppenspiele
// 10-Minuten-Intervalle · Halbfinale 18:30 · Platz 3 & Finale 19:00

const CORNHOLE_MATCHES_CONFIG = [
  // ── Gruppenphase A – Feld 1 (15 Spiele) ───────────────────────────────────
  { id:  1, round: "Gruppenphase", group: "A", field: 1, time: "16:00" },
  { id:  2, round: "Gruppenphase", group: "A", field: 1, time: "16:10" },
  { id:  3, round: "Gruppenphase", group: "A", field: 1, time: "16:20" },
  { id:  4, round: "Gruppenphase", group: "A", field: 1, time: "16:30" },
  { id:  5, round: "Gruppenphase", group: "A", field: 1, time: "16:40" },
  { id:  6, round: "Gruppenphase", group: "A", field: 1, time: "16:50" },
  { id:  7, round: "Gruppenphase", group: "A", field: 1, time: "17:00" },
  { id:  8, round: "Gruppenphase", group: "A", field: 1, time: "17:10" },
  { id:  9, round: "Gruppenphase", group: "A", field: 1, time: "17:20" },
  { id: 10, round: "Gruppenphase", group: "A", field: 1, time: "17:30" },
  { id: 11, round: "Gruppenphase", group: "A", field: 1, time: "17:40" },
  { id: 12, round: "Gruppenphase", group: "A", field: 1, time: "17:50" },
  { id: 13, round: "Gruppenphase", group: "A", field: 1, time: "18:00" },
  { id: 14, round: "Gruppenphase", group: "A", field: 1, time: "18:10" },
  { id: 15, round: "Gruppenphase", group: "A", field: 1, time: "18:20" },
  // ── Gruppenphase B – Feld 2 (15 Spiele) ───────────────────────────────────
  { id: 16, round: "Gruppenphase", group: "B", field: 2, time: "16:00" },
  { id: 17, round: "Gruppenphase", group: "B", field: 2, time: "16:10" },
  { id: 18, round: "Gruppenphase", group: "B", field: 2, time: "16:20" },
  { id: 19, round: "Gruppenphase", group: "B", field: 2, time: "16:30" },
  { id: 20, round: "Gruppenphase", group: "B", field: 2, time: "16:40" },
  { id: 21, round: "Gruppenphase", group: "B", field: 2, time: "16:50" },
  { id: 22, round: "Gruppenphase", group: "B", field: 2, time: "17:00" },
  { id: 23, round: "Gruppenphase", group: "B", field: 2, time: "17:10" },
  { id: 24, round: "Gruppenphase", group: "B", field: 2, time: "17:20" },
  { id: 25, round: "Gruppenphase", group: "B", field: 2, time: "17:30" },
  { id: 26, round: "Gruppenphase", group: "B", field: 2, time: "17:40" },
  { id: 27, round: "Gruppenphase", group: "B", field: 2, time: "17:50" },
  { id: 28, round: "Gruppenphase", group: "B", field: 2, time: "18:00" },
  { id: 29, round: "Gruppenphase", group: "B", field: 2, time: "18:10" },
  { id: 30, round: "Gruppenphase", group: "B", field: 2, time: "18:20" },
  // ── Gruppenphase C – Feld 3 (15 Spiele) ───────────────────────────────────
  { id: 31, round: "Gruppenphase", group: "C", field: 3, time: "16:00" },
  { id: 32, round: "Gruppenphase", group: "C", field: 3, time: "16:10" },
  { id: 33, round: "Gruppenphase", group: "C", field: 3, time: "16:20" },
  { id: 34, round: "Gruppenphase", group: "C", field: 3, time: "16:30" },
  { id: 35, round: "Gruppenphase", group: "C", field: 3, time: "16:40" },
  { id: 36, round: "Gruppenphase", group: "C", field: 3, time: "16:50" },
  { id: 37, round: "Gruppenphase", group: "C", field: 3, time: "17:00" },
  { id: 38, round: "Gruppenphase", group: "C", field: 3, time: "17:10" },
  { id: 39, round: "Gruppenphase", group: "C", field: 3, time: "17:20" },
  { id: 40, round: "Gruppenphase", group: "C", field: 3, time: "17:30" },
  { id: 41, round: "Gruppenphase", group: "C", field: 3, time: "17:40" },
  { id: 42, round: "Gruppenphase", group: "C", field: 3, time: "17:50" },
  { id: 43, round: "Gruppenphase", group: "C", field: 3, time: "18:00" },
  { id: 44, round: "Gruppenphase", group: "C", field: 3, time: "18:10" },
  { id: 45, round: "Gruppenphase", group: "C", field: 3, time: "18:20" },
  // ── Halbfinale (18:30) ────────────────────────────────────────────────────
  { id: 46, round: "Halbfinale", group: null, field: 1, time: "18:30", label1: "1. Gruppe A", label2: "2. Gruppe B"     },
  { id: 47, round: "Halbfinale", group: null, field: 2, time: "18:30", label1: "1. Gruppe B", label2: "2. Gruppe C" },
  { id: 48, round: "Halbfinale", group: null, field: 3, time: "18:30", label1: "1. Gruppe C", label2: "2. Gruppe A"     },
  // ── Platz 3 & Finale (19:00) ──────────────────────────────────────────────
  { id: 49, round: "Platz 3", group: null, field: 1, time: "19:00", label1: "3. Sieger HF", label2: "Bester Verlierer HF" },
  { id: 50, round: "Finale",  group: null, field: 2, time: "19:00", label1: "1. Sieger HF", label2: "2. Sieger HF"         },
];


// ── PAARUNGEN ─────────────────────────────────────────────────────────────────
// Format:  Match-ID : [Team-ID 1, Team-ID 2]
// Nur Gruppenphase – Halbfinale/Finale werden in scores.js eingetragen.
// 6er Round-Robin: 15 Spiele pro Gruppe

const CORNHOLE_PAIRINGS = {
  // Gruppenphase A (Teams 1, 3, 4, 13, 14, 17)
  1:  [1, 3],
  2:  [4, 13],
  3:  [14, 17],
  4:  [1, 4],
  5:  [3, 14],
  6:  [13, 17],
  7:  [1, 13],
  8:  [3, 17],
  9:  [4, 14],
  10: [1, 14],
  11: [3, 13],
  12: [4, 17],
  13: [1, 17],
  14: [3, 4],
  15: [13, 14],
  // Gruppenphase B (Teams 5, 6, 7, 8, 15, 18)
  16: [5, 6],
  17: [7, 8],
  18: [15, 18],
  19: [5, 7],
  20: [6, 15],
  21: [8, 18],
  22: [5, 8],
  23: [6, 18],
  24: [7, 15],
  25: [5, 15],
  26: [6, 7],
  27: [8, 15],
  28: [5, 18],
  29: [7, 18],
  30: [6, 8],
  // Gruppenphase C (Teams 9, 10, 11, 12, 16, 19)
  31: [9, 10],
  32: [11, 12],
  33: [16, 19],
  34: [9, 11],
  35: [10, 16],
  36: [12, 19],
  37: [9, 12],
  38: [10, 19],
  39: [11, 16],
  40: [9, 16],
  41: [10, 11],
  42: [12, 16],
  43: [9, 19],
  44: [10, 12],
  45: [11, 19],
};
