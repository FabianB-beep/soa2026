// ── NAVIGATION ───────────────────────────────────────────────────────────────

const nav     = document.getElementById("nav");
const burger  = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  nav.classList.toggle("nav--scrolled", window.scrollY > 50);
});

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav__links--open");
  burger.classList.toggle("nav__burger--open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav__links--open");
    burger.classList.remove("nav__burger--open");
  });
});

// Smooth scroll for hash links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ── COUNTDOWN ────────────────────────────────────────────────────────────────

const festivalDate = new Date("2026-06-27T12:00:00");

function updateCountdown() {
  const diff = festivalDate - Date.now();
  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = '<p class="countdown__live">Das Festival läuft gerade!</p>';
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById("cd-days").textContent  = String(d).padStart(2, "0");
  document.getElementById("cd-hours").textContent = String(h).padStart(2, "0");
  document.getElementById("cd-mins").textContent  = String(m).padStart(2, "0");
  document.getElementById("cd-secs").textContent  = String(s).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ── LINEUP ───────────────────────────────────────────────────────────────────

let activeDay   = 1;
let activeStage = "all";

function renderLineup() {
  const grid = document.getElementById("lineupGrid");
  const filtered = LINEUP.filter(a =>
    a.day === activeDay &&
    (activeStage === "all" || a.stage === activeStage)
  ).sort((a, b) => a.time.localeCompare(b.time));

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="lineup__empty">Kein Programm für diese Auswahl.</p>';
    return;
  }

  grid.innerHTML = filtered.map(a => `
    <div class="lineup__card">
      <div class="lineup__card-stage">${STAGE_LABELS[a.stage]}</div>
      <div class="lineup__card-time">${a.time}</div>
      <div class="lineup__card-artist">${a.artist}</div>
      <div class="lineup__card-genre">${a.genre}</div>
    </div>
  `).join("");

  grid.querySelectorAll(".lineup__card").forEach((card, i) => {
    card.classList.add("visible");
    card.addEventListener("click", () => openModal(filtered[i]));
  });
  
}

// Day tabs
document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("tab--active"));
    btn.classList.add("tab--active");
    activeDay = Number(btn.dataset.day);
    renderLineup();
  });
});

// Stage filter
document.querySelectorAll(".stage-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".stage-btn").forEach(b => b.classList.remove("stage-btn--active"));
    btn.classList.add("stage-btn--active");
    activeStage = btn.dataset.stage;
    renderLineup();
  });
});

renderLineup();

// ── LINEUP MODAL ─────────────────────────────────────────────────────────────

const backdrop   = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");

function openModal(act) {
  document.getElementById("modalStage").textContent  = STAGE_LABELS[act.stage] || act.stage;
  document.getElementById("modalTime").textContent   = act.time;
  document.getElementById("modalGenre").textContent  = act.genre;

  const originEl  = document.getElementById("modalOrigin");
  const originSep = document.getElementById("modalOriginSep");
  if (act.origin) {
    originEl.textContent  = act.origin;
    originSep.hidden = originEl.hidden = false;
  } else {
    originSep.hidden = originEl.hidden = true;
  }

  document.getElementById("modalArtist").textContent = act.artist;
  document.getElementById("modalDesc").textContent   = act.desc || "";

  const footer = document.getElementById("modalFooter");
  footer.innerHTML = "";
  if (act.url) {
    const link = document.createElement("a");
    link.className = "modal__badge";
    link.href = act.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "↗ Mehr erfahren";
    footer.appendChild(link);
  }

  backdrop.hidden = false;
  requestAnimationFrame(() => backdrop.classList.add("modal--visible"));
  document.body.style.overflow = "hidden";
}

function closeModal() {
  backdrop.classList.remove("modal--visible");
  backdrop.addEventListener("transitionend", () => {
    backdrop.hidden = true;
    document.body.style.overflow = "";
  }, { once: true });
}

modalClose.addEventListener("click", closeModal);
backdrop.addEventListener("click", e => { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !backdrop.hidden) closeModal(); });

// ── CORNHOLE ─────────────────────────────────────────────────────────────────

// Teams, Matches, Paarungen und Ergebnisse aus results.js einspielen
if (typeof CORNHOLE_TEAMS_CONFIG !== "undefined") {
  CORNHOLE_TEAMS_CONFIG.forEach(t => CORNHOLE_TEAMS.push({ ...t, players: [] }));
}
if (typeof CORNHOLE_MATCHES_CONFIG !== "undefined") {
  CORNHOLE_MATCHES_CONFIG.forEach(m => CORNHOLE_MATCHES.push({
    ...m, team1: null, team2: null, score1: null, score2: null,
  }));
}
if (typeof CORNHOLE_PAIRINGS !== "undefined") {
  CORNHOLE_MATCHES.forEach(m => {
    if (CORNHOLE_PAIRINGS[m.id]) {
      m.team1 = CORNHOLE_PAIRINGS[m.id][0];
      m.team2 = CORNHOLE_PAIRINGS[m.id][1];
    }
  });
}
if (typeof CORNHOLE_KO_PAIRINGS !== "undefined") {
  CORNHOLE_MATCHES.forEach(m => {
    if (CORNHOLE_KO_PAIRINGS[m.id]) {
      m.team1 = CORNHOLE_KO_PAIRINGS[m.id][0];
      m.team2 = CORNHOLE_KO_PAIRINGS[m.id][1];
    }
  });
}
if (typeof CORNHOLE_RESULTS !== "undefined") {
  CORNHOLE_MATCHES.forEach(m => {
    const r = CORNHOLE_RESULTS[m.id];
    if (r && typeof r[0] === "number" && typeof r[1] === "number") {
      m.score1 = r[0];
      m.score2 = r[1];
      m.done = !!r[2];
    }
  });
}

function renderCornholeTeams() {
  // Flache Liste ohne Gruppenaufteilung
  const container = document.getElementById("ch-teams-all");
  if (container) {
    container.innerHTML = CORNHOLE_TEAMS.map((t, i) => `
      <div class="ch-team">
        <div class="ch-team__num">${i + 1}</div>
        <div class="ch-team__info">
          <div class="ch-team__name">${t.name}</div>
        </div>
      </div>
    `).join("");
  }

  /* Gruppenansicht – einkommentieren sobald Gruppen feststehen:
  ["A", "B", "C"].forEach(group => {
    const cont = document.getElementById(`ch-teams-${group}`);
    if (!cont) return;
    const teams = CORNHOLE_TEAMS.filter(t => t.group === group);
    cont.innerHTML = teams.map((t, i) => `
      <div class="ch-team">
        <div class="ch-team__num">${i + 1}</div>
        <div class="ch-team__info">
          <div class="ch-team__name">${t.name}</div>
          <div class="ch-team__players">${t.players.join(" · ")}</div>
        </div>
      </div>
    `).join("");
  });
  */
}

function renderCornholeSchedule() {
  const container = document.getElementById("ch-schedule");
  if (!container) return;

  const teamMap = Object.fromEntries(CORNHOLE_TEAMS.map(t => [t.id, t]));

  const sorted = [...CORNHOLE_MATCHES].sort((a, b) => a.time.localeCompare(b.time) || a.field - b.field);
  const slotKeys = [];
  sorted.forEach(m => {
    const key = m.time + "|" + m.round;
    if (!slotKeys.includes(key)) slotKeys.push(key);
  });

  container.innerHTML = `<div class="ch-rounds">${slotKeys.map(key => {
    const [time, round] = key.split("|");
    const matches = sorted.filter(m => m.time === time && m.round === round);
    const roundLabel = round !== "Gruppenphase" ? round + " · " : "";
    return `
      <div>
        <div class="ch-round__title">${roundLabel}${time} Uhr</div>
        <div class="ch-matches">
          ${matches.map(m => {
            const isFinal = m.round === "Finale";
            const t1    = m.team1 ? teamMap[m.team1]?.name : (m.label1 || "TBD");
            const t2    = m.team2 ? teamMap[m.team2]?.name : (m.label2 || "TBD");
            const tbd1  = !m.team1;
            const tbd2  = !m.team2;
            const hasScore = m.score1 !== null && m.score2 !== null;
            const isLive   = hasScore && !m.done;
            const isDone   = hasScore && m.done;
            const score = hasScore
              ? `<span class="ch-match__score${isDone ? " ch-match__score--set" : " ch-match__score--live"}">${m.score1}:${m.score2}${isLive ? ' <span class="ch-match__live-dot"></span>' : ""}</span>`
              : `<span class="ch-match__score">–:–</span>`;
            return `
              <div class="ch-match${isFinal ? " ch-match--final" : ""}">
                <div class="ch-match__time">${m.time} Uhr</div>
                <div class="ch-match__team${tbd1 ? " ch-match__team--tbd" : ""}">${t1}</div>
                <div class="ch-match__vs">VS</div>
                <div class="ch-match__team ch-match__team--right${tbd2 ? " ch-match__team--tbd" : ""}">${t2}</div>
                ${score}
                <div class="ch-match__field">${m.group ? `Gruppe ${m.group} · ` : ""}Feld ${m.field}</div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("")}</div>`;
}

renderCornholeTeams();
renderCornholeSchedule();

function buildStats() {
  const stats = {};
  CORNHOLE_TEAMS.forEach(t => {
    stats[t.id] = { id: t.id, name: t.name, group: t.group, sp: 0, s: 0, n: 0, pkt: 0 };
  });
  CORNHOLE_MATCHES.filter(m => m.group !== null).forEach(m => {
    if (m.score1 === null || m.score2 === null || !m.team1 || !m.team2) return;
    if (m.score1 < 21 && m.score2 < 21) return; // noch live, nicht werten
    const s1 = stats[m.team1], s2 = stats[m.team2];
    if (!s1 || !s2) return;
    s1.sp++; s2.sp++;
    if (m.score1 > m.score2) { s1.s++; s2.n++; s1.pkt += m.score1 - m.score2; }
    else if (m.score2 > m.score1) { s2.s++; s1.n++; s2.pkt += m.score2 - m.score1; }
  });
  return stats;
}

function standingsTable(rows) {
  return `
    <table class="ch-standings">
      <thead>
        <tr>
          <th class="ch-standings__rank">#</th>
          <th class="ch-standings__name">Team</th>
          <th title="Gespielte Spiele">Sp</th>
          <th title="Siege">S</th>
          <th title="Niederlagen">N</th>
          <th title="Cancellation-Punkte">Pkt</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map((t, i) => `
          <tr class="${i === 0 && t.sp > 0 ? "ch-standings__row--first" : ""}">
            <td class="ch-standings__rank">${i + 1}</td>
            <td class="ch-standings__name">${t.name}</td>
            <td>${t.sp}</td>
            <td>${t.s}</td>
            <td>${t.n}</td>
            <td class="ch-standings__pkt">${t.pkt}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

let activeTableView = "gruppen";

function renderCornholeTable() {
  const container = document.getElementById("ch-table");
  if (!container) return;

  const stats = buildStats();
  const allTeams = Object.values(stats);

  const viewHtml = activeTableView === "gesamt"
    ? standingsTable(allTeams.sort((a, b) => b.s - a.s || b.pkt - a.pkt))
    : ["A", "B", "C"].map(group => `
        <div class="ch-table-group">
          <div class="ch-round__title">Gruppe ${group}</div>
          ${standingsTable(allTeams.filter(t => t.group === group).sort((a, b) => b.s - a.s || b.pkt - a.pkt))}
        </div>
      `).join("");

  container.innerHTML = `
    <div class="ch-table-filter">
      <button class="ch-table-btn${activeTableView === "gruppen" ? " ch-table-btn--active" : ""}" data-view="gruppen">Gruppen</button>
      <button class="ch-table-btn${activeTableView === "gesamt"  ? " ch-table-btn--active" : ""}" data-view="gesamt">Gesamt</button>
    </div>
    ${viewHtml}
  `;

  container.querySelectorAll(".ch-table-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeTableView = btn.dataset.view;
      renderCornholeTable();
    });
  });
}

renderCornholeTable();

// Cornhole tab switching
document.querySelectorAll(".cornhole__tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cornhole__tab").forEach(b => b.classList.remove("cornhole__tab--active"));
    btn.classList.add("cornhole__tab--active");
    const tab = btn.dataset.chTab;
    document.getElementById("ch-panel-teams").classList.toggle("cornhole__panel--hidden", tab !== "teams");
    document.getElementById("ch-panel-schedule").classList.toggle("cornhole__panel--hidden", tab !== "schedule");
    document.getElementById("ch-panel-table").classList.toggle("cornhole__panel--hidden", tab !== "table");
  });
});

// ── INTERSECTION OBSERVER (fade-in) ──────────────────────────────────────────

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".about__card, .lineup__card").forEach(el => {
  observer.observe(el);
});
