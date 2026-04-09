import './App.css'

function App() {
  return (
    <main className="portfolio-page">
      <div className="bg-orb orb-a" aria-hidden="true" />
      <div className="bg-orb orb-b" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />

      <header className="hero hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">PORTOFOLIU PERSONAL</p>
          <h1>Cristian Ioan Lavu</h1>
          <p className="lead">
            Dezvoltator orientat pe aplicații full-stack moderne, cu accent pe
            performanță, experiență de utilizare și soluții reale pentru orașe
            inteligente.
          </p>
          <div className="cta-row">
            <a
              className="btn btn-primary"
              href="https://www.linkedin.com/in/cristian-ioan-lavu-66633829b/"
              target="_blank"
              rel="noreferrer"
            >
              Profil LinkedIn
            </a>
            <a
              className="btn btn-secondary"
              href="https://tocea2003.github.io/Prezentare_Licenta/"
              target="_blank"
              rel="noreferrer"
            >
              Prezentare Proiect
            </a>
          </div>
          <div className="skill-pills" aria-label="Arii principale">
            <span>C#/.NET</span>
            <span>Vue.js</span>
            <span>Angular</span>
            <span>PWA & Maps</span>
            <span>Algoritmi de rutare</span>
          </div>
        </div>

        <aside className="panel hero-side" aria-label="Snapshot profil">
          <h3>Snapshot</h3>
          <ul>
            <li>
              <span>Focus</span>
              <strong>Full-stack web apps</strong>
            </li>
            <li>
              <span>Domeniu</span>
              <strong>Smart mobility</strong>
            </li>
            <li>
              <span>Oraș</span>
              <strong>Sibiu, România</strong>
            </li>
          </ul>
        </aside>
      </header>

      <section className="section-shell">
        <div className="section-headline">
          <h2>Rezultate cheie</h2>
          <p>Metrici din proiectul BUSSIB, organizați într-un format clar și ușor de parcurs.</p>
        </div>
        <section className="stats-grid" aria-label="Indicatori principali">
          <article>
            <h2>500+</h2>
            <p>Stații modelate în rețeaua Sibiu</p>
          </article>
          <article>
            <h2>2000+</h2>
            <p>Muchii în graful folosit pentru rutare</p>
          </article>
          <article>
            <h2>12x</h2>
            <p>Îmbunătățire față de abordare brute-force</p>
          </article>
          <article>
            <h2>99.9%</h2>
            <p>Uptime targetat pentru tracking live</p>
          </article>
        </section>
      </section>

      <section className="section-shell layout-main">
        <div className="column-flow">
          <section className="panel about spotlight">
            <div className="panel-header">
              <h3>Despre mine</h3>
              <span className="live-dot">Disponibil pentru proiecte noi</span>
            </div>
            <p>
              Construiesc produse digitale care combină algoritmi, date live și
              interfețe curate. În proiectele mele urmăresc echilibrul dintre
              arhitectură solidă, performanță și claritate pentru utilizator, cu o
              abordare practică orientată pe rezultate măsurabile.
            </p>
          </section>

          <section className="panel project">
            <div className="panel-header">
              <h3>Proiect reprezentativ: BUSSIB</h3>
              <a
                href="https://github.com/Tocea2003/Licenta"
                target="_blank"
                rel="noreferrer"
              >
                Vezi codul sursă
              </a>
            </div>
            <p>
              Sistem inteligent de transport public pentru Sibiu, cu rutare
              multimodală bazată pe Dijkstra, tracking în timp real și funcționalități
              PWA pentru utilizare offline.
            </p>
            <div className="feature-columns">
              <ul className="feature-list">
                <li>Dijkstra multimodal cu complexitate O((V+E)logV)</li>
                <li>Backend .NET 9, EF Core, SQLite, JWT și Google OAuth</li>
                <li>Hărți interactive Leaflet.js cu poziția live a autobuzelor</li>
                <li>Service Worker, IndexedDB și notificări push</li>
                <li>Dashboard admin cu analitice și operații CRUD</li>
              </ul>
              <div className="impact-card">
                <p className="impact-title">Impact tehnic</p>
                <div className="impact-row">
                  <span>Rutare</span>
                  <strong>12x mai rapid</strong>
                </div>
                <div className="impact-row">
                  <span>Acoperire trasee</span>
                  <strong>500+ stații</strong>
                </div>
                <div className="impact-row">
                  <span>Disponibilitate</span>
                  <strong>99.9% target</strong>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="panel experience">
          <h3>Experiență profesională</h3>
          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-head">
                <h4>Junior Software Developer</h4>
                <p>IndSoft · fracțiune de normă</p>
              </div>
              <p className="experience-meta">aug. 2025 - prezent · 9 luni · Sibiu, România · Hibrid</p>
              <p>
                Developing and maintaining full-stack web applications, utilizing
                C# for robust backend logic and Vue.js for dynamic, reactive user
                interfaces.
              </p>
              <p className="experience-tags">Vue.js · C# · Full-stack</p>
            </article>

            <article className="experience-item">
              <div className="experience-head">
                <h4>Student Intern</h4>
                <p>TNT Computers · stagiatură</p>
              </div>
              <p className="experience-meta">iul. 2024 · 1 lună · Sibiu, România · Hibrid</p>
              <p>
                Built responsive frontend interfaces in Angular and worked on
                practical software development and customer-service tasks in a
                collaborative team environment.
              </p>
              <p className="experience-tags">Angular · Dezvoltare software · Customer Service</p>
            </article>

            <article className="experience-item">
              <div className="experience-head">
                <h4>Administrative Officer</h4>
                <p>Euchner Cisnadie · fracțiune de normă</p>
              </div>
              <p className="experience-meta">oct. 2022 - mar. 2024 · 1 an 6 luni · Cisnădie, Sibiu, România · Hibrid</p>
              <p>
                Supported operational and administrative workflows, maintaining
                documentation and reports with strong attention to detail.
              </p>
              <p className="experience-tags">Microsoft Excel · Microsoft Word · Organizare</p>
            </article>
          </div>
        </section>
      </section>

      <section className="section-shell panel split-block">
        <div className="section-headline compact">
          <h2>Arhitectură & evoluție</h2>
        </div>
        <section className="split">
          <article>
            <h3>Stack tehnologic</h3>
            <ul>
              <li>Frontend: Vue 3 + TypeScript, Leaflet.js, Chart.js</li>
              <li>Backend: .NET 9, C# 13, REST API</li>
              <li>Date: SQLite + EF Core, Firebase Realtime Database</li>
              <li>Autentificare: JWT, OAuth 2.0, BCrypt</li>
              <li>Livrare: PWA, cache inteligent, optimizări de bundle</li>
            </ul>
          </article>
          <article>
            <h3>Timeline 2025-2026</h3>
            <ul>
              <li>Noi-Dec 2025: fundație proiect, import GTFS, hartă live</li>
              <li>Dec 2025: rutare Dijkstra multimodală</li>
              <li>Ian 2026: Google OAuth, JWT, admin dashboard</li>
              <li>Mar 2026: PWA, offline mode, push notifications</li>
              <li>Apr 2026: optimizări finale și testare</li>
            </ul>
          </article>
        </section>
      </section>

      <footer className="panel footer">
        <p>Contact rapid</p>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/cristian-ioan-lavu-66633829b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://tocea2003.github.io/Prezentare_Licenta/"
            target="_blank"
            rel="noreferrer"
          >
            Prezentare licență
          </a>
          <a href="https://github.com/Tocea2003/Licenta" target="_blank" rel="noreferrer">
            GitHub Licență
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
