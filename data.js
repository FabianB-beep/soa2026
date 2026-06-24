// ── LINEUP DATA ──────────────────────────────────────────────────────────────

const LINEUP = [
  {
    day: 1, stage: "cornhole", time: "17:00",
    artist: "Drops",
    genre:  "80er/90er Pop und Rock",
    origin: "Königswinter",
    desc:   "Drops! Man nehme: Ein Stage-Piano, eine Holzblocktrommel und zwei Sänger. Reicht euch noch nicht? Abwarten!",
    url:    "https://www.backstagepro.de/dropsrockt",
  },
  {
    day: 1, stage: "main", time: "19:00",    artist: "Bitch on the run",
    genre:  "Blues Cover",
    origin: "Westerwald",
    desc:   "Bitch on the run bringen dreckigen, rohen Blues auf die Bühne – roh, laut und unverfälscht. Coversongs von Klassikern bis zu modernen Blues-Hits.",
    url:    "",
  },
  {
    day: 1, stage: "main", time: "20:15",    artist: "eXemple",
    genre:  "Rock/Pop Cover",
    origin: "Erkelenz",
    desc:   "eXemple, das sind Beatles, Whitesnake oder U2. Ein Akustik-Quartett mit einem eigenen, handgemachten Groove.",
    url:    "",
  },
  {
    day: 1, stage: "main", time: "21:45",    artist: "MIXED PICKLES",
    genre:  "Cover Rock",
    origin: "Kasbach/Ohlenberg",
    desc:   "MIXED PICKLES – bunt, laut und ungekämmt. Noch so eine Cover Band! since März.2025.",
    url:    "https://www.instagram.com/mixedpickles.band/",
  },
  {
    day: 1, stage: "main", time: "23:15",    artist: "ALLES AUF ZUCKER",
    genre:  "Hard Rock",
    origin: "Westerwald",
    desc:   "Der Headliner des Abends. ALLES AUF ZUCKER liefern harten Rock mit Ansage – fette Gitarren, treibende Rhythmen und eine Show, die niemanden kalt lässt.",
    url:    "https://www.instagram.com/allesaufzuckerband/",
  },
  {
    day: 1, stage: "tekkno", time: "AFTER SHOW",    artist: "Spotify Techno",
    genre:  "Techno",
    origin: "Pfaffenbachtal",
    desc:   "Der Tekkno Bunker öffnet seine Tore. Ab Mitternacht gibt es elektronische Beats bis zum Morgengrauen.",
    url:    "",
  },
];

const STAGE_LABELS = {
  main:     "Main Stage",
  tekkno:   "Tekkno Bunker",
  cornhole: "Cornhole Stage",
};


// ── CORNHOLE DATA ────────────────────────────────────────────────────────────
// Alle Cornhole-Daten werden in results.js gepflegt.

const CORNHOLE_TEAMS   = [];  // wird aus results.js befüllt
const CORNHOLE_MATCHES = [];  // wird aus results.js befüllt


// ── INTERNE HELFERDATEN ───────────────────────────────────────────────────────

const HELFER_SLOTS = [
  // ── Theke ─────────────────────────────────────────────────────────────────
  { bereich: "Theke", slot: "15:00 – 18:00", helfer: ["Stammtisch"] },
  { bereich: "Theke", slot: "18:00 – 20:00", helfer: ["Daniel Petöcz", "Heiko Lindner", "Schello", "Stefan Groß", "Bine Krumscheid"] },
  { bereich: "Theke", slot: "20:00 – 22:00", helfer: ["Dani Dasbach", "Anja Tiffe", "Krümel"] },
  { bereich: "Theke", slot: "22:00 – 01:00", helfer: ["Rainer", "Witte", "Carsten"] },
  // ── Grill ─────────────────────────────────────────────────────────────────
  { bereich: "Grill", slot: "15:00 – 17:30", helfer: ["Stammtisch"] },
  { bereich: "Grill", slot: "17:30 – 20:00", helfer: ["Nicole Krumscheid", "Christina Schellberg"] },
  { bereich: "Grill", slot: "20:00 – 22:00", helfer: ["Christel Meyer", "Hildegard Börder"] },
  // ── Bändchenausgabe ───────────────────────────────────────────────────────
  { bereich: "Bändchenausgabe", slot: "17:30 – 22:00", helfer: ["Sarah Lissen-Rüddel", "Steffi Reif", "Hannah Große"] },
];

const HELFER_DAUERDIENSTE = [
  { aufgabe: "Aggi-Dienst",        verantwortlich: "Heiko Holger Hirsch", helfer: ["Andreas Krings"],             note: "Tankwart – dauerhaft vor Ort" },
  { aufgabe: "Moderation Cornhole Turnier", verantwortlich: "Axel Rüddel", helfer: [],                            note: "" },
  { aufgabe: "Künstlerbetreuung",  verantwortlich: "Fabian Buchmüller",    helfer: ["Andreas Rechmann"],          note: "Backstage, Catering Künstler, Koordination" },
];
