/* ============================================================
   AI-SOLUTIONS — SHARED BEHAVIOUR
   ============================================================ */

// ---------- Mobile nav ----------
function initNav(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? '✕' : '☰';
  });
}

// ---------- Icon set (inline SVG, stroke-based, matches design tokens) ----------
const AISOL_ICONS = {
  pulse:  '<path d="M2 12h5l2-7 4 14 2-7h7"/>',
  chat:   '<path d="M4 4h16v12H8l-4 4V4z"/>',
  layers: '<path d="M12 3 3 8l9 5 9-5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  chart:  '<path d="M4 20V10M12 20V4M20 20v-7"/>',
  grid:   '<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
  cpu:    '<rect x="7" y="7" width="10" height="10"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M7 2v2M17 2v2M7 20v2M17 20v2"/>'
};
function iconSvg(name){
  return `<svg viewBox="0 0 24 24">${AISOL_ICONS[name] || AISOL_ICONS.grid}</svg>`;
}

// ---------- Star rating ----------
function starRow(rating){
  let out = '<div class="stars" role="img" aria-label="' + rating + ' out of 5 stars">';
  for(let i=1;i<=5;i++){
    out += i <= rating
      ? '<svg viewBox="0 0 20 20"><polygon points="10,1 12.6,7 19,7.5 14,11.8 15.5,18 10,14.5 4.5,18 6,11.8 1,7.5 7.4,7"/></svg>'
      : '<svg class="empty" viewBox="0 0 20 20"><polygon points="10,1 12.6,7 19,7.5 14,11.8 15.5,18 10,14.5 4.5,18 6,11.8 1,7.5 7.4,7"/></svg>';
  }
  return out + '</div>';
}

function initials(name){
  return name.split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase();
}

// ---------- Renderers (called by pages that have the relevant containers) ----------
function renderSolutionCards(containerId, list){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = list.map(s => `
    <div class="card bracket">
      <div class="icon-box">${iconSvg(s.icon)}</div>
      <span class="tag">${s.tag}</span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`).join('');
}

function renderTestimonials(containerId, list){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = list.map(t => `
    <div class="card">
      ${starRow(t.rating)}
      <p class="quote">&ldquo;${t.quote}&rdquo;</p>
      <div class="person">
        <div class="avatar">${initials(t.name)}</div>
        <div><b>${t.name}</b><span>${t.role}</span></div>
      </div>
    </div>`).join('');
}

function renderArticles(containerId, list){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = list.map(a => `
    <div class="card">
      <span class="tag">${a.tag}</span>
      <p style="font-family:var(--f-mono);font-size:12px;color:var(--slate-soft);margin-bottom:10px;">${formatDate(a.date)}</p>
      <h3>${a.title}</h3>
      <p>${a.excerpt}</p>
    </div>`).join('');
}

function renderEvents(containerId, list){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = list.map(e => `
    <div class="event-row">
      <div class="event-date"><b>${e.day}</b><span>${e.mon}</span></div>
      <div><h3>${e.title}</h3><p>${e.desc}</p></div>
      <a href="contact.html" class="btn btn-ghost on-light">Register</a>
    </div>`).join('');
}

function renderCaseStudies(containerId, list){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = list.map(c => `
    <div class="card card-dark bracket on-dark">
      <span class="tag">${c.industry} — ${c.client}</span>
      <h3>${c.title}</h3>
      <p>${c.summary}</p>
      <div class="meta-row">
        ${c.metrics.map(m => `<div><span>${m[0]}</span><b>${m[1]}</b></div>`).join('')}
      </div>
    </div>`).join('');
}

function formatDate(iso){
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' });
}

// ---------- Pipeline signature animation (homepage hero) ----------
function initPipelinePulse(){
  const pulse = document.getElementById('pipelinePulse');
  const path = document.getElementById('pipelineTrace');
  if(!pulse || !path || !path.getTotalLength) return;
  const len = path.getTotalLength();
  let t = 0;
  function step(){
    t += 0.0035;
    if(t > 1) t = 0;
    const pt = path.getPointAtLength(t * len);
    pulse.setAttribute('cx', pt.x);
    pulse.setAttribute('cy', pt.y);
    requestAnimationFrame(step);
  }
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    requestAnimationFrame(step);
  }
}

// ---------- Contact form ----------
function initContactForm(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  const success = document.getElementById('formSuccess');

  const validators = {
    fullName: v => v.trim().length >= 2 || 'Enter your full name.',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Enter a valid email address.',
    phone: v => /^[0-9+()\-\s]{7,20}$/.test(v.trim()) || 'Enter a valid phone number.',
    company: v => v.trim().length >= 2 || 'Enter your company name.',
    country: v => v.trim().length > 0 || 'Select your country.',
    jobTitle: v => v.trim().length >= 2 || 'Enter your job title.',
    details: v => v.trim().length >= 15 || 'Add a little more detail (15+ characters) so we can route this properly.'
  };

  function validateField(field){
    const rule = validators[field.name];
    if(!rule) return true;
    const result = rule(field.value);
    const wrap = field.closest('.field');
    const errEl = wrap.querySelector('.err');
    if(result === true){
      wrap.classList.remove('invalid');
      return true;
    }
    wrap.classList.add('invalid');
    if(errEl) errEl.textContent = result;
    return false;
  }

  form.querySelectorAll('input,textarea,select').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let allValid = true;
    form.querySelectorAll('input,textarea,select').forEach(field => {
      if(!validateField(field)) allValid = false;
    });
    if(!allValid){
      const firstInvalid = form.querySelector('.field.invalid input, .field.invalid select, .field.invalid textarea');
      if(firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate submission to the inquiries store (see README for production API design).
    const data = Object.fromEntries(new FormData(form).entries());
    const record = {
      id: Date.now(),
      name: data.fullName,
      email: data.email,
      company: data.company,
      country: data.country,
      jobTitle: data.jobTitle,
      details: data.details,
      date: new Date().toISOString().slice(0,10),
      status: 'New'
    };
    // In this static demo, in-memory only — a real deployment posts to /api/inquiries.
    window.__aisolNewInquiry = record;

    form.reset();
    form.style.display = 'none';
    success.classList.add('show');
    success.setAttribute('tabindex','-1');
    success.focus();
  });
}

// ---------- Admin: login (client-side demo gate only — see README) ----------
function initAdminLogin(){
  const form = document.getElementById('adminLoginForm');
  if(!form) return;
  const errBox = document.getElementById('adminError');
  const DEMO_PASSWORD = 'Sunderland2026!'; // demo-only credential, see README for production auth guidance

  form.addEventListener('submit', e => {
    e.preventDefault();
    const pw = document.getElementById('adminPassword').value;
    const user = document.getElementById('adminUser').value.trim();
    if(user.length > 1 && pw === DEMO_PASSWORD){
      window.location.href = 'dashboard.html?auth=1';
    } else {
      errBox.textContent = 'Incorrect username or password. Try admin / Sunderland2026!';
      errBox.classList.add('show');
    }
  });
}

// ---------- Admin: dashboard render ----------
function initAdminDashboard(){
  const root = document.getElementById('inquiriesTableBody');
  if(!root) return;

  // Soft client-side gate: real deployment enforces this server-side with session auth.
  const params = new URLSearchParams(window.location.search);
  if(params.get('auth') !== '1'){
    window.location.href = 'login.html';
    return;
  }

  const rows = AISOL_INQUIRIES_SEED;
  document.getElementById('kpiTotal').textContent = rows.length;
  document.getElementById('kpiNew').textContent = rows.filter(r => r.status === 'New').length;
  document.getElementById('kpiQualified').textContent = rows.filter(r => r.status === 'Qualified').length;

  const countries = new Set(rows.map(r => r.country));
  document.getElementById('kpiCountries').textContent = countries.size;

  root.innerHTML = rows.map(r => `
    <tr>
      <td>#${r.id}</td>
      <td><b>${r.name}</b><br><span style="color:var(--slate-soft);font-size:12.5px;">${r.email}</span></td>
      <td>${r.company}</td>
      <td>${r.country}</td>
      <td>${r.jobTitle}</td>
      <td>${formatDate(r.date)}</td>
      <td><span class="pill">${r.status}</span></td>
    </tr>`).join('');

  // Simple bar chart: inquiries by month (derived from seed dates)
  const byMonth = {};
  rows.forEach(r => {
    const m = r.date.slice(0,7);
    byMonth[m] = (byMonth[m] || 0) + 1;
  });
  const months = Object.keys(byMonth).sort();
  const max = Math.max(...Object.values(byMonth), 1);
  const bars = document.getElementById('bars');
  if(bars){
    bars.innerHTML = months.map(m => {
      const val = byMonth[m];
      const h = Math.round((val / max) * 140) + 10;
      const label = new Date(m + '-01').toLocaleDateString('en-GB', { month:'short' });
      return `<div class="bar-col"><div class="bar" style="height:${h}px" title="${val} inquiries"></div><span>${label}</span></div>`;
    }).join('');
  }

  const logout = document.getElementById('logoutBtn');
  if(logout){
    logout.addEventListener('click', () => { window.location.href = 'login.html'; });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initPipelinePulse();
  initContactForm();
  initAdminLogin();
  initAdminDashboard();
});
