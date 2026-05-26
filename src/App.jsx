import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import {
  personalInfo,
  about,
  skillCategories,
  experience,
  furtherHistory,
  education,
  credentials,
  projects,
  contact,
  navigation,
} from './data/data';

function useInView(threshold = 0.25) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const SQUIGGLE_ARROWS = {
  'up-left': {
    vb: '0 0 90 90',
    curve: 'M76 78 C 72 50, 46 72, 40 46 C 32 24, 32 10, 18 14',
    head: 'M24 8 L 18 14 L 26 20',
  },
  'up-right': {
    vb: '0 0 90 90',
    curve: 'M14 78 C 18 50, 44 72, 50 46 C 58 24, 58 10, 72 14',
    head: 'M66 8 L 72 14 L 64 20',
  },
  'down-left': {
    vb: '0 0 90 90',
    curve: 'M76 12 C 72 40, 46 28, 40 44 C 32 66, 32 80, 18 76',
    head: 'M24 82 L 18 76 L 26 70',
  },
  'down-right': {
    vb: '0 0 90 90',
    curve: 'M14 12 C 18 40, 44 28, 50 44 C 58 66, 58 80, 72 76',
    head: 'M66 82 L 72 76 L 64 70',
  },
  left: {
    vb: '0 0 110 50',
    curve: 'M100 36 C 70 32, 60 12, 30 18 C 18 22, 14 22, 8 22',
    head: 'M16 16 L 8 22 L 16 28',
  },
  right: {
    vb: '0 0 110 50',
    curve: 'M10 36 C 40 32, 50 12, 80 18 C 92 22, 96 22, 102 22',
    head: 'M94 16 L 102 22 L 94 28',
  },
  up: {
    vb: '0 0 70 100',
    curve: 'M35 92 C 18 74, 50 56, 32 36 C 22 22, 30 14, 35 8',
    head: 'M28 14 L 35 8 L 42 14',
  },
  down: {
    vb: '0 0 70 100',
    curve: 'M35 8 C 18 26, 50 44, 32 64 C 22 78, 30 86, 35 92',
    head: 'M28 86 L 35 92 L 42 86',
  },
};

function Squiggle({ children, className = '', arrow = 'up-left', rotation = -3 }) {
  const [ref, inView] = useInView();
  const p = SQUIGGLE_ARROWS[arrow] || SQUIGGLE_ARROWS['up-left'];

  return (
    <div
      ref={ref}
      className={`squiggle squiggle-${arrow} ${className} ${inView ? 'is-visible' : ''}`}
      style={{ '--squiggle-rotate': `${rotation}deg` }}
      aria-hidden="true"
    >
      <svg
        className="squiggle-arrow"
        viewBox={p.vb}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={p.curve} />
        <path d={p.head} />
      </svg>
      <span className="squiggle-text">{children}</span>
    </div>
  );
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))];
}

function Topbar() {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="topbar no-print">
      <div className="topbar-inner">
        <a href="#top" className="topbar-brand">Austin Arlint</a>
        <nav className="topbar-nav">
          {navigation.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
        </nav>
        <div className="topbar-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Switch to dark' : 'Switch to light'}
          >
            {theme === 'light' ? '◐' : '◑'}
          </button>
          <button
            className="btn-pdf"
            onClick={() => window.print()}
            aria-label="Download PDF resume"
          >
            ↓ PDF
          </button>
        </div>
      </div>
    </header>
  );
}

function Masthead() {
  const [first, ...rest] = personalInfo.name.split(' ');
  return (
    <section className="masthead fade-in" id="top">
      <div className="masthead-grid">
        <div className="masthead-text">
          <div className="masthead-eyebrow">Forward Deployed · Platform &amp; AI · {personalInfo.location}</div>
          <h1 className="masthead-name">
            {first} <em>{rest.join(' ')}</em>
          </h1>
          <p className="masthead-tagline">{personalInfo.tagline}</p>
          <div className="masthead-meta">
            <span className="masthead-meta-item">
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </span>
            <span className="masthead-meta-item">{personalInfo.website}</span>
            <span className="masthead-meta-item">{personalInfo.clearance}</span>
            <span className="masthead-meta-item">Hourly rates upon request</span>
          </div>
        </div>
        {personalInfo.portrait && (
          <figure className="masthead-portrait">
            <img src={personalInfo.portrait} alt={`${personalInfo.name} portrait`} />
            <div className="portrait-annotation no-print" aria-hidden="true">
              <svg
                className="portrait-arrow"
                viewBox="0 0 120 110"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 100 C 4 78, 48 92, 38 60 C 30 32, 88 38, 78 14" />
                <path d="M72 26 L 78 14 L 66 18" />
              </svg>
              <span className="portrait-annotation-text">
                hair and mustache<br />available with request
              </span>
            </div>
          </figure>
        )}
      </div>
    </section>
  );
}

function Summary() {
  return (
    <section className="section" id="summary">
      <div className="section-label">01 — Summary</div>
      <div className="summary-grid">
        <div>
          <p className="summary-lead">{about.lead}</p>
          <p className="summary-body">{about.body}</p>
        </div>
        <aside className="stats">
          {about.stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
          <Squiggle className="squiggle-stats" arrow="down-left" rotation={5}>
            really.<br />don't do<br />the math.
          </Squiggle>
        </aside>
      </div>
    </section>
  );
}

function Experience() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="section" id="experience">
      <div className="section-label">02 — Experience</div>
      <h2 className="section-title">A decade embedded with teams — platforms, security, and the AI tooling wrapping both.</h2>
      <div className="experience-list">
        {experience.map((role) => (
          <article key={role.company} className="role">
            <div className="role-meta">
              <span className="role-period">{role.startDate} – {role.endDate}</span>
              <span className="role-location">{role.location}</span>
            </div>
            <div className="role-body">
              <h3 className="role-company">{role.company}</h3>
              <div className="role-position">{role.position}</div>
              <p className="role-summary">{role.summary}</p>
              <ul className="role-bullets">
                {role.achievements.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="role-tags">
                {role.technologies.map((t) => (
                  <span key={t} className="role-tag">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {furtherHistory.length > 0 && (
        <div className="further-history">
          <Squiggle className="squiggle-further" arrow="down" rotation={-3}>
            click. I have receipts.
          </Squiggle>
          <button
            className="further-toggle no-print"
            onClick={() => setShowMore((s) => !s)}
            aria-expanded={showMore}
          >
            <span className="further-toggle-rule" />
            <span className="further-toggle-label">
              {showMore ? 'Hide further history' : `Further history · ${furtherHistory.length} earlier roles`}
            </span>
            <span className="further-toggle-icon">{showMore ? '−' : '+'}</span>
          </button>

          <div className={`further-list ${showMore ? 'is-open' : ''}`}>
            <div className="further-list-inner">
              {furtherHistory.map((role, i) => (
                <article key={`${role.company}-${i}`} className="further-role">
                  <div className="further-period">{role.startDate} – {role.endDate}</div>
                  <div className="further-body">
                    <h4 className="further-company">
                      {role.company}
                      <span className="further-position"> · {role.position}</span>
                    </h4>
                    {role.location && <div className="further-location">{role.location}</div>}
                    {role.summary && <p className="further-summary">{role.summary}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-label">03 — Capabilities</div>
      <h2 className="section-title">Platform engineering, DevSecOps, and agentic AI — one practice, five surfaces.</h2>
      <div className="skills-grid">
        <Squiggle className="squiggle-skills" arrow="down-left" rotation={-4}>
          ok yes — buzzwords.<br />but I've actually used them.
        </Squiggle>
        {skillCategories.map((cat) => (
          <div key={cat.name}>
            <h3 className="skill-category-name">{cat.name}</h3>
            <ul className="skill-items">
              {cat.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-label">04 — Selected Projects</div>
      <h2 className="section-title">Things I built, mostly nights and weekends — agents, platforms, and the tooling around them.</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.name} className="project">
            <header className="project-header">
              <h3 className="project-name">{p.name}</h3>
              {p.github && (
                <a className="project-link" href={p.github} target="_blank" rel="noreferrer">
                  Source ↗
                </a>
              )}
            </header>
            {p.tagline && <div className="project-tagline">{p.tagline}</div>}
            <p className="project-description">{p.description}</p>
            <div className="project-tags">
              {p.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section" id="education">
      <div className="section-label">05 — Education & Credentials</div>
      <div className="education-grid">
        <div>
          <div className="edu-block-title">Education</div>
          {education.map((e) => (
            <div key={e.institution} className="edu-item">
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-institution">{e.institution}</div>
              <div className="edu-meta">{e.location} · {e.startDate}–{e.endDate}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="edu-block-title">Credentials</div>
          {credentials.map((c) => (
            <div key={c.name} className="cred-item">
              <span className="cred-name">{c.name}</span>
              <span className="cred-status">{c.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Colophon() {
  return (
    <footer className="colophon no-print" id="contact">
      <Squiggle className="squiggle-colophon" arrow="down" rotation={-5}>
        you read this far? respect.
      </Squiggle>
      <div className="colophon-message">
        Open to senior roles. Hourly contracts available upon request. <a href={`mailto:${contact.email}`}>Write me</a> if it sounds like a fit.
      </div>
      <div className="colophon-meta">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={contact.socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <div className="colophon-sig">Set in Fraunces &amp; Inter · {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Topbar />
      <main className="page">
        <Masthead />
        <Summary />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>
      <div className="page">
        <Colophon />
      </div>
    </>
  );
}
