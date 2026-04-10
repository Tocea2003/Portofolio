import { useEffect, useState } from 'react'
import './App.css'

/* ── Inline SVG icons ── */
const I = {
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  arrow: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  ),
  map: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  code: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  briefcase: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  grad: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 10 10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  /* scroll tracking */
  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 60)
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* scroll-reveal */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  /* animated counters */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target
        const raw = el.dataset.to
        const end = parseFloat(raw)
        const dec = raw.includes('.') ? raw.split('.')[1].length : 0
        const suffix = el.dataset.suffix || ''
        const dur = 2000
        const t0 = performance.now()
        const tick = now => {
          const p = Math.min((now - t0) / dur, 1)
          const v = (1 - (1 - p) ** 3) * end
          el.textContent = v.toFixed(dec) + suffix
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        io.unobserve(el)
      }),
      { threshold: 0.4 },
    )
    document.querySelectorAll('[data-to]').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* ── progress bar ── */}
      <div className="scroll-bar" style={{ width: `${progress}%` }} />

      {/* ── navigation ── */}
      <nav className={`topnav${scrolled ? ' stuck' : ''}`}>
        <div className="topnav-inner">
          <button className="logo" onClick={() => go('hero')}>CL<span>.</span></button>
          <div className="nav-links">
            {[
              ['rezultate', 'Rezultate'],
              ['despre', 'Despre'],
              ['competente', 'Competente'],
              ['experienta', 'Experienta'],
              ['educatie', 'Educatie'],
              ['contact', 'Contact'],
            ].map(([id, label]) => (
              <button key={id} onClick={() => go(id)}>{label}</button>
            ))}
          </div>
        </div>
      </nav>

      <main className="page">
        {/* ── background ── */}
        <div className="bg-orb orb-1" aria-hidden="true" />
        <div className="bg-orb orb-2" aria-hidden="true" />
        <div className="bg-orb orb-3" aria-hidden="true" />
        <div className="bg-grid" aria-hidden="true" />

        {/* ═══════ HERO ═══════ */}
        <header id="hero" className="hero-section">
          <div className="hero-text">
            <p className="badge"><span className="badge-dot" />FULL-STACK DEVELOPER</p>
            <h1>Salut, sunt <span className="glow-text">Cristian</span></h1>
            <p className="subtitle">
              Dezvoltator orientat pe aplicatii <strong>full-stack moderne</strong>, cu
              accent pe performanta, experienta de utilizare si solutii reale
              pentru <strong>orase inteligente</strong>.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="https://www.linkedin.com/in/cristian-ioan-lavu-66633829b/" target="_blank" rel="noreferrer">
                {I.linkedin} LinkedIn
              </a>
              <a className="btn ghost" href="https://github.com/Tocea2003/Licenta" target="_blank" rel="noreferrer">
                {I.github} GitHub
              </a>
              <a className="btn ghost" href="https://tocea2003.github.io/Prezentare_Licenta/" target="_blank" rel="noreferrer">
                Prezentare {I.arrow}
              </a>
            </div>
          </div>

          <aside className="profile-card">
            <div className="pc-head">
              <div className="avatar"><span>CL</span></div>
              <div>
                <h3>Cristian Ioan Lavu</h3>
                <p className="pc-role">Junior Software Developer @ IndSoft</p>
              </div>
            </div>
            <span className="status-pill"><span className="pulse-dot" />Disponibil pentru proiecte</span>
            <ul className="pc-info">
              <li>{I.map}<span>Sibiu, Romania</span></li>
              <li>{I.code}<span>Full-stack web apps</span></li>
              <li>{I.briefcase}<span>Smart Mobility</span></li>
            </ul>
            <div className="pc-pills">
              {['C#/.NET', 'Vue.js', 'Angular', 'TypeScript', 'Leaflet.js', 'PWA'].map(s => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </aside>
        </header>

        {/* ═══════ STATS ═══════ */}
        <section id="rezultate" className="section reveal">
          <div className="section-head">
            <h2>Rezultate cheie</h2>
            <p>Metrici din proiectul BUSSIB</p>
          </div>
          <div className="stats-grid">
            {[
              { to: '500', suffix: '+', label: 'Statii modelate in reteaua Sibiu' },
              { to: '2000', suffix: '+', label: 'Muchii in graful de rutare' },
              { to: '12', suffix: 'x', label: 'Imbunatatire vs brute-force' },
              { to: '99.9', suffix: '%', label: 'Uptime targetat live tracking' },
            ].map((s, i) => (
              <article key={i} className="stat-card">
                <h2 className="stat-num" data-to={s.to} data-suffix={s.suffix}>0</h2>
                <p>{s.label}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ═══════ ABOUT + PROJECT ═══════ */}
        <section id="despre" className="section">
          <div className="two-col">
            <div className="col-stack">
              {/* About */}
              <article className="card spotlight reveal">
                <div className="card-top">
                  <h3>Despre mine</h3>
                </div>
                <p>
                  Construiesc produse digitale care combina algoritmi, date live si
                  interfete curate. In proiectele mele urmaresc echilibrul dintre
                  arhitectura solida, performanta si claritate pentru utilizator, cu
                  o abordare practica orientata pe rezultate masurabile.
                </p>
              </article>

              {/* BUSSIB Project */}
              <article className="card reveal">
                <div className="card-top">
                  <h3>Proiect: BUSSIB</h3>
                  <a href="https://github.com/Tocea2003/Licenta" target="_blank" rel="noreferrer" className="card-link">
                    Cod sursa {I.arrow}
                  </a>
                </div>
                <p>
                  Sistem inteligent de transport public pentru Sibiu — rutare
                  multimodala Dijkstra, tracking real-time si PWA offline.
                </p>
                <div className="feat-split">
                  <ul className="feat-list">
                    <li>Dijkstra multimodal — O((V+E)logV)</li>
                    <li>Backend .NET 9, EF Core, SQLite, JWT + Google OAuth</li>
                    <li>Harti Leaflet.js cu pozitia live a autobuzelor</li>
                    <li>Service Worker, IndexedDB, notificari push</li>
                    <li>Dashboard admin cu analitice si CRUD</li>
                  </ul>
                  <div className="impact">
                    <p className="impact-label">IMPACT TEHNIC</p>
                    <div className="impact-row"><span>Rutare</span><strong>12x mai rapid</strong></div>
                    <div className="impact-row"><span>Acoperire</span><strong>500+ statii</strong></div>
                    <div className="impact-row"><span>Uptime</span><strong>99.9% target</strong></div>
                  </div>
                </div>
              </article>
            </div>

            {/* Experience */}
            <section id="experienta" className="card reveal">
              <h3>Experienta profesionala</h3>
              <div className="timeline">
                {[
                  {
                    title: 'Junior Software Developer',
                    where: 'IndSoft · fractiune de norma',
                    when: 'aug. 2025 – prezent · Sibiu, Romania · Hibrid',
                    text: 'Dezvoltare si mentenanta de aplicatii web full-stack, utilizand C# pentru backend si Vue.js pentru interfete reactive si dinamice.',
                    tags: 'Vue.js · C# · Full-stack',
                  },
                  {
                    title: 'Student Intern',
                    where: 'TNT Computers · stagiatura',
                    when: 'iul. 2024 · 1 luna · Sibiu, Romania · Hibrid',
                    text: 'Creare de interfete frontend responsive in Angular si participare la sarcini practice de dezvoltare software intr-un mediu colaborativ.',
                    tags: 'Angular · Dezvoltare software',
                  },
                  {
                    title: 'Administrative Officer',
                    where: 'Euchner Cisnadie · fractiune de norma',
                    when: 'oct. 2022 – mar. 2024 · 1 an 6 luni · Cisnadie, Sibiu · Hibrid',
                    text: 'Suport pentru fluxuri operationale si administrative, mentenanta documentatiei si rapoartelor cu atentie la detalii.',
                    tags: 'Excel · Word · Organizare',
                  },
                ].map((job, i) => (
                  <article key={i} className="tl-item">
                    <div className="tl-dot" />
                    <div className="tl-body">
                      <div className="tl-head">
                        <h4>{job.title}</h4>
                        <span className="tl-where">{job.where}</span>
                      </div>
                      <p className="tl-when">{job.when}</p>
                      <p>{job.text}</p>
                      <p className="tl-tags">{job.tags}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        {/* ═══════ SKILLS ═══════ */}
        <section id="competente" className="section reveal">
          <div className="section-head">
            <h2>Competente tehnice</h2>
            <p>Tehnologii si instrumente cu care lucrez</p>
          </div>
          <div className="skills-mosaic">
            {[
              { cat: 'Frontend', items: ['Vue 3', 'TypeScript', 'Angular', 'Leaflet.js', 'Chart.js', 'HTML / CSS'] },
              { cat: 'Backend', items: ['.NET 9', 'C# 13', 'REST API', 'EF Core', 'JWT', 'OAuth 2.0'] },
              { cat: 'Date & Stocare', items: ['SQLite', 'Firebase Realtime DB', 'IndexedDB', 'GTFS'] },
              { cat: 'DevOps & Tools', items: ['Git / GitHub', 'PWA', 'Service Workers', 'Vite', 'ESLint'] },
            ].map((g, i) => (
              <div key={i} className="skill-group">
                <h4>{g.cat}</h4>
                <div className="skill-tags">
                  {g.items.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ ARCHITECTURE ═══════ */}
        <section className="section reveal">
          <div className="section-head compact">
            <h2>Arhitectura & evolutie</h2>
          </div>
          <div className="split-cards">
            <article className="card">
              <h3>Stack tehnologic</h3>
              <ul>
                <li>Frontend: Vue 3 + TypeScript, Leaflet.js, Chart.js</li>
                <li>Backend: .NET 9, C# 13, REST API</li>
                <li>Date: SQLite + EF Core, Firebase Realtime Database</li>
                <li>Auth: JWT, OAuth 2.0, BCrypt</li>
                <li>Deploy: PWA, smart caching, bundle optimization</li>
              </ul>
            </article>
            <article className="card">
              <h3>Timeline 2025 – 2026</h3>
              <ul>
                <li>Nov – Dec 2025: fundatie, import GTFS, harta live</li>
                <li>Dec 2025: rutare Dijkstra multimodala</li>
                <li>Ian 2026: Google OAuth, JWT, admin dashboard</li>
                <li>Mar 2026: PWA, offline mode, push notifications</li>
                <li>Apr 2026: optimizari finale si testare</li>
              </ul>
            </article>
          </div>
        </section>

        {/* ═══════ EDUCATION ═══════ */}
        <section id="educatie" className="section reveal">
          <div className="section-head">
            <h2>Educatie</h2>
          </div>
          <article className="card edu-card">
            <div className="edu-top">
              <div className="edu-icon">{I.grad}</div>
              <div>
                <h4>Universitatea Lucian Blaga din Sibiu</h4>
                <p className="edu-degree">Licenta in Informatica</p>
              </div>
            </div>
            <p className="edu-thesis">
              <strong>Lucrare de licenta:</strong> BUSSIB — Sistem inteligent de
              transport public cu rutare multimodala si tracking real-time
            </p>
          </article>
        </section>

        {/* ═══════ FOOTER ═══════ */}
        <footer id="contact" className="card footer-card reveal">
          <div className="footer-inner">
            <div>
              <h3>Hai sa vorbim</h3>
              <p>Sunt deschis la noi provocari si colaborari.</p>
            </div>
            <div className="footer-links">
              <a className="btn primary sm" href="https://www.linkedin.com/in/cristian-ioan-lavu-66633829b/" target="_blank" rel="noreferrer">
                {I.linkedin} LinkedIn
              </a>
              <a className="btn ghost sm" href="https://github.com/Tocea2003/Licenta" target="_blank" rel="noreferrer">
                {I.github} GitHub
              </a>
              <a className="btn ghost sm" href="https://tocea2003.github.io/Prezentare_Licenta/" target="_blank" rel="noreferrer">
                Prezentare {I.arrow}
              </a>
            </div>
          </div>
          <p className="copy">&copy; {new Date().getFullYear()} Cristian Ioan Lavu</p>
        </footer>
      </main>
    </>
  )
}

export default App
