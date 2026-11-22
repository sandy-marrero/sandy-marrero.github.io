import { PROFILE } from "../data/profile.js";

const state = {
  activeTab: "wall",
  skillCategory: "all",
  query: "",
  activeSkillFilter: "",
};

const ICONS = {
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
  gradCap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>`,
};

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getEffectiveFilter() {
  return (state.activeSkillFilter || state.query).trim().toLowerCase();
}

function matchesFilter(textParts) {
  const filter = getEffectiveFilter();
  if (!filter) return true;
  return textParts.join(" ").toLowerCase().includes(filter);
}

function projectVisualSvg(type) {
  if (type === "ranktify") {
    return `
      <svg viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="26" y="14" width="120" height="82" rx="10" fill="#ffffff" stroke="#cdd9ec"/>
        <rect x="38" y="26" width="38" height="38" rx="7" fill="#3b5998"/>
        <path d="M53 51V37l12-3v14" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="50" cy="51" r="3" fill="#ffffff"/>
        <circle cx="62" cy="48" r="3" fill="#ffffff"/>
        <rect x="84" y="30" width="48" height="7" rx="3.5" fill="#17202e" opacity="0.8"/>
        <rect x="84" y="43" width="34" height="5" rx="2.5" fill="#64748b" opacity="0.5"/>
        <text x="38" y="82" fill="#3b5998" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">★★★★☆ 4.5</text>
        <path d="M164 55h40" stroke="#3b5998" stroke-width="2" stroke-dasharray="4 4"/>
        <path d="m197 49 7 6-7 6" stroke="#3b5998" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="218" y="20" width="76" height="70" rx="10" fill="#edf2fa" stroke="#3b5998" stroke-width="1.5"/>
        <text x="256" y="50" text-anchor="middle" fill="#29447e" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700">SWIPE</text>
        <text x="256" y="68" text-anchor="middle" fill="#42526a" font-family="JetBrains Mono, monospace" font-size="10">1–5 ★</text>
      </svg>`;
  }

  return `
    <svg viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="44" y="26" width="96" height="58" rx="9" fill="#ffffff" stroke="#cdd9ec" stroke-width="1.5"/>
      <line x1="92" y1="32" x2="92" y2="78" stroke="#cdd9ec" stroke-width="1.5"/>
      <circle cx="60" cy="42" r="4" fill="#29447e"/><circle cx="76" cy="42" r="4" fill="#29447e"/>
      <circle cx="60" cy="68" r="4" fill="#29447e"/><circle cx="76" cy="68" r="4" fill="#29447e"/>
      <circle cx="68" cy="55" r="4" fill="#29447e"/>
      <circle cx="116" cy="55" r="4.5" fill="#3b5998"/>
      <rect x="158" y="26" width="118" height="58" rx="9" fill="#ffffff" stroke="#cdd9ec"/>
      <rect x="172" y="39" width="54" height="7" rx="3.5" fill="#3b5998" opacity="0.85"/>
      <rect x="172" y="52" width="88" height="6" rx="3" fill="#cbd5e1"/>
      <rect x="172" y="64" width="66" height="6" rx="3" fill="#e2e8f0"/>
    </svg>`;
}

/* ==========================================================================
   Render Functions
   ========================================================================== */

function renderProfileHeader() {
  const { person } = PROFILE;
  document.getElementById("profile-name").textContent = person.name;
  document.getElementById("profile-headline").textContent = person.headline;
  document.getElementById("profile-avatar").src = person.avatar;
  document.getElementById("profile-avatar").alt = person.name;

  document.getElementById("profile-badges").innerHTML = `
    <span class="meta-chip meta-chip--status">${escapeHtml(person.employmentStatus)}</span>
    <span class="meta-chip meta-chip--neutral">${escapeHtml(person.graduationStatus)} · UPRM</span>
  `;

  document.getElementById("btn-email-cta").href = `mailto:${person.email}`;
  document.getElementById("topbar-github").href = person.links.github;
  document.getElementById("topbar-linkedin").href = person.links.linkedin;
}

function renderSidebar() {
  const { person, skills } = PROFILE;

  document.getElementById("sidebar-info").innerHTML = `
    <li class="info-item">
      ${ICONS.briefcase}
      <span><strong>Software Engineer</strong> at <strong>${escapeHtml(person.company)}</strong> (${escapeHtml(person.employmentStatus)})</span>
    </li>
    <li class="info-item">
      ${ICONS.gradCap}
      <span><strong>B.S. Computer Software Engineering</strong>, <strong>UPRM</strong> (Graduated May 2025)</span>
    </li>
    <li class="info-item">
      ${ICONS.phone}
      <span>${escapeHtml(person.focus)}</span>
    </li>
  `;

  const mainLanguages = skills.filter((s) => s.category === "languages");
  const activeFilter = state.activeSkillFilter.toLowerCase();
  document.getElementById("sidebar-core-stack").innerHTML = mainLanguages
    .map((skill) => {
      const selected = activeFilter === skill.name.toLowerCase();
      return `<button type="button" class="stack-pill ${selected ? "is-selected" : ""}" data-skill-filter="${escapeHtml(skill.name)}">${escapeHtml(skill.name)}</button>`;
    })
    .join("");

  document.getElementById("sidebar-connect").innerHTML = `
    <a class="connect-row" href="${escapeHtml(person.links.linkedin)}" target="_blank" rel="noopener noreferrer">
      <span class="connect-row-left">${ICONS.linkedin}<span>linkedin.com/in/sandy-marrero</span></span>
      <span class="connect-hint">↗</span>
    </a>
    <a class="connect-row" href="${escapeHtml(person.links.github)}" target="_blank" rel="noopener noreferrer">
      <span class="connect-row-left">${ICONS.github}<span>github.com/sandy-marrero</span></span>
      <span class="connect-hint">↗</span>
    </a>
    <button type="button" class="connect-row" id="copy-email-btn">
      <span class="connect-row-left">${ICONS.mail}<span>${escapeHtml(person.email)}</span></span>
      <span class="connect-hint">Copy</span>
    </button>
  `;
}

function renderAbout() {
  document.getElementById("about-prose").innerHTML = PROFILE.about
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}

function renderExperience() {
  const container = document.getElementById("experience-list");
  const filter = getEffectiveFilter();

  const matchingCompanies = PROFILE.experience
    .map((company) => {
      const roles = company.roles.filter((role) =>
        matchesFilter([
          company.company,
          company.type,
          role.title,
          role.summary,
          ...role.bullets,
          ...role.skills,
        ])
      );
      return { ...company, roles };
    })
    .filter((company) => company.roles.length > 0);

  document.getElementById("experience-meta").textContent = `${matchingCompanies.reduce(
    (sum, c) => sum + c.roles.length,
    0
  )} roles`;

  if (matchingCompanies.length === 0) {
    container.innerHTML = `<div class="empty-state">No experience entries match "${escapeHtml(filter)}".</div>`;
    return;
  }

  container.innerHTML = matchingCompanies
    .map((company) => {
      const isFte = company.type.toLowerCase().includes("full-time");
      const isMulti = company.roles.length > 1;
      const badgeClass =
        company.accent === "blackrock" ? "company-badge company-badge--blackrock" : "company-badge";

      return `
        <article class="exp-company-block">
          <div class="exp-company-header">
            <div class="${badgeClass}" aria-hidden="true">${escapeHtml(company.monogram)}</div>
            <div class="exp-company-info">
              <div class="exp-company-name-row">
                <h3 class="exp-company-name">${escapeHtml(company.company)}</h3>
                <span class="exp-type-badge ${isFte ? "exp-type-badge--fte" : ""}">${escapeHtml(company.type)}</span>
              </div>
              <div class="exp-company-meta">${escapeHtml(company.totalDuration)}</div>
            </div>
          </div>
          <div class="exp-roles ${isMulti ? "exp-roles--multi" : ""}">
            ${company.roles
              .map(
                (role) => `
              <div class="exp-role ${role.current ? "exp-role--current" : ""}">
                <div class="exp-role-top">
                  <h4 class="exp-role-title">${escapeHtml(role.title)}</h4>
                  <span class="exp-role-period">${escapeHtml(role.period)}</span>
                </div>
                <p class="exp-role-summary">${escapeHtml(role.summary)}</p>
                ${
                  role.bullets.length
                    ? `<ul class="exp-bullets">${role.bullets
                        .map((b) => `<li>${escapeHtml(b)}</li>`)
                        .join("")}</ul>`
                    : ""
                }
                ${
                  role.skills.length
                    ? `<div class="tag-row">
                        ${role.skills
                          .map((skill) => {
                            const active =
                              state.activeSkillFilter.toLowerCase() === skill.toLowerCase();
                            return `<button type="button" class="tag-chip ${
                              active ? "is-active" : ""
                            }" data-skill-filter="${escapeHtml(skill)}">${escapeHtml(skill)}</button>`;
                          })
                          .join("")}
                      </div>`
                    : ""
                }
              </div>`
              )
              .join("")}
          </div>
        </article>`;
    })
    .join("");
}

function renderSkills() {
  const filtersEl = document.getElementById("skill-filters");
  filtersEl.innerHTML = PROFILE.skillCategories
    .map((cat) => {
      const active = state.skillCategory === cat.id;
      return `<button type="button" class="filter-pill ${active ? "is-active" : ""}" data-skill-category="${escapeHtml(cat.id)}">${escapeHtml(cat.label)}</button>`;
    })
    .join("");

  const filtered = PROFILE.skills.filter((skill) => {
    const categoryMatch = state.skillCategory === "all" || skill.category === state.skillCategory;
    const textMatch = matchesFilter([skill.name, skill.level, skill.context, skill.category]);
    return categoryMatch && textMatch;
  });

  document.getElementById("skills-meta").textContent = `${filtered.length} of ${PROFILE.skills.length}`;
  const grid = document.getElementById("skills-grid");

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">No skills match the current filter.</div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((skill) => {
      const levelClass = `skill-level--${skill.level.toLowerCase()}`;
      const selected = state.activeSkillFilter.toLowerCase() === skill.name.toLowerCase();
      return `
        <button type="button" class="skill-card ${selected ? "is-selected" : ""}" data-skill-filter="${escapeHtml(skill.name)}" title="Filter profile by ${escapeHtml(skill.name)}">
          <div class="skill-card-top">
            <span class="skill-name">${escapeHtml(skill.name)}</span>
            <span class="skill-level ${levelClass}">${escapeHtml(skill.level)}</span>
          </div>
          <span class="skill-context">${escapeHtml(skill.context)}</span>
        </button>`;
    })
    .join("");
}

function renderProjects() {
  const featured = PROFILE.featuredProjects.filter((p) =>
    matchesFilter([p.title, p.tag, p.summary, ...p.highlights, ...p.tech])
  );

  document.getElementById("projects-meta").textContent = `${featured.length} ${
    featured.length === 1 ? "project" : "projects"
  }`;

  const featuredEl = document.getElementById("featured-projects-grid");
  if (featured.length === 0) {
    featuredEl.innerHTML = `<div class="empty-state">No projects match the current filter.</div>`;
    return;
  }

  featuredEl.innerHTML = featured
    .map(
      (project) => `
      <article class="project-card">
        <div class="project-visual">${projectVisualSvg(project.visualType)}</div>
        <div class="project-body">
          <div class="project-tag-row">
            <span class="project-tag">${escapeHtml(project.tag)}</span>
            <span class="exp-role-period">${escapeHtml(project.period)}</span>
          </div>
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-summary">${escapeHtml(project.summary)}</p>
          <ul class="project-highlights">
            ${project.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
          </ul>
          <div class="project-footer">
            <div class="tag-row">
              ${project.tech
                .map(
                  (t) =>
                    `<button type="button" class="tag-chip ${
                      state.activeSkillFilter.toLowerCase() === t.toLowerCase() ? "is-active" : ""
                    }" data-skill-filter="${escapeHtml(t)}">${escapeHtml(t)}</button>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </article>`
    )
    .join("");
}

function renderEducation() {
  const eduList = document.getElementById("education-list");
  eduList.innerHTML = PROFILE.education
    .map(
      (edu) => `
      <article class="edu-item">
        <div class="edu-top">
          <div>
            <h3 class="edu-school">${escapeHtml(edu.school)}</h3>
            <p class="edu-degree">${escapeHtml(edu.degree)}</p>
          </div>
          <div class="edu-right">
            <span class="meta-chip meta-chip--status">${escapeHtml(edu.status)}</span>
            <span class="edu-period">${escapeHtml(edu.period)}</span>
          </div>
        </div>
        ${
          edu.gpa
            ? `<div class="edu-detail-row"><span class="edu-gpa">GPA: ${escapeHtml(edu.gpa)}</span></div>`
            : ""
        }
      </article>`
    )
    .join("");
}

function renderTabVisibility() {
  const sections = document.querySelectorAll("[data-tab-section]");
  sections.forEach((sec) => {
    const allowedTabs = sec.dataset.tabSection.split(" ");
    const visible = state.activeTab === "wall" || allowedTabs.includes(state.activeTab);
    sec.hidden = !visible;
  });

  document.querySelectorAll("[data-tab]").forEach((btn) => {
    const active = btn.dataset.tab === state.activeTab;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });
}

function renderFilterBanner() {
  const banner = document.getElementById("filter-banner");
  const label = document.getElementById("filter-banner-text");
  if (state.activeSkillFilter) {
    label.innerHTML = `Filtering profile by skill: <strong>${escapeHtml(state.activeSkillFilter)}</strong>`;
    banner.classList.add("is-visible");
  } else if (state.query.trim()) {
    label.innerHTML = `Showing results matching <strong>"${escapeHtml(state.query.trim())}"</strong>`;
    banner.classList.add("is-visible");
  } else {
    banner.classList.remove("is-visible");
  }
}

function renderTabCounts() {
  const expCount = PROFILE.experience.reduce((sum, c) => sum + c.roles.length, 0);
  document.getElementById("count-experience").textContent = expCount;
  document.getElementById("count-skills").textContent = PROFILE.skills.length;
  document.getElementById("count-projects").textContent = PROFILE.featuredProjects.length;
}

function renderAll() {
  renderSidebar();
  renderExperience();
  renderSkills();
  renderProjects();
  renderEducation();
  renderTabVisibility();
  renderFilterBanner();
}

/* ==========================================================================
   Toast Helper
   ========================================================================== */

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

/* ==========================================================================
   Event Wiring
   ========================================================================== */

function initEvents() {
  document.getElementById("profile-tabs").addEventListener("click", (event) => {
    const tabBtn = event.target.closest("[data-tab]");
    if (!tabBtn) return;
    state.activeTab = tabBtn.dataset.tab;
    renderTabVisibility();
    history.replaceState(null, "", `#${state.activeTab}`);
  });

  const searchInput = document.getElementById("profile-search");
  const searchWrap = document.getElementById("search-wrap");
  const searchClear = document.getElementById("search-clear");

  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    state.activeSkillFilter = "";
    searchWrap.classList.toggle("has-value", state.query.length > 0);
    if (state.query.trim() && state.activeTab !== "wall") {
      state.activeTab = "wall";
    }
    renderAll();
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    state.query = "";
    searchWrap.classList.remove("has-value");
    renderAll();
    searchInput.focus();
  });

  document.getElementById("filter-clear-btn").addEventListener("click", () => {
    state.activeSkillFilter = "";
    state.query = "";
    searchInput.value = "";
    searchWrap.classList.remove("has-value");
    renderAll();
  });

  document.querySelectorAll("[data-print-resume]").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.print();
    });
  });

  document.addEventListener("click", (event) => {
    const catBtn = event.target.closest("[data-skill-category]");
    if (catBtn) {
      state.skillCategory = catBtn.dataset.skillCategory;
      renderSkills();
      return;
    }

    const skillBtn = event.target.closest("[data-skill-filter]");
    if (skillBtn) {
      const targetSkill = skillBtn.dataset.skillFilter;
      state.activeSkillFilter =
        state.activeSkillFilter.toLowerCase() === targetSkill.toLowerCase() ? "" : targetSkill;
      state.query = "";
      searchInput.value = "";
      searchWrap.classList.remove("has-value");
      if (state.activeSkillFilter && state.activeTab !== "wall" && state.activeTab !== "skills") {
        state.activeTab = "wall";
      }
      renderAll();
      return;
    }

    const copyBtn = event.target.closest("#copy-email-btn");
    if (copyBtn) {
      navigator.clipboard
        ?.writeText(PROFILE.person.email)
        .then(() => showToast(`Copied ${PROFILE.person.email} to clipboard`))
        .catch(() => showToast(PROFILE.person.email));
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== searchInput) {
      const tag = document.activeElement?.tagName;
      if (tag !== "INPUT" && tag !== "TEXTAREA") {
        event.preventDefault();
        searchInput.focus();
      }
    } else if (event.key === "Escape") {
      if (document.activeElement === searchInput && searchInput.value) {
        searchInput.value = "";
        state.query = "";
        searchWrap.classList.remove("has-value");
        renderAll();
      }
    }
  });

  const validTabs = ["wall", "experience", "skills", "projects", "education"];
  const hashTab = window.location.hash.replace("#", "");
  if (validTabs.includes(hashTab)) {
    state.activeTab = hashTab;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProfileHeader();
  renderTabCounts();
  renderAbout();
  initEvents();
  renderAll();
});
