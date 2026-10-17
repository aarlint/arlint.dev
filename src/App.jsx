import { useEffect, useState } from 'react';
import './index.css';
import { company, digin } from './data/data';
import { CompanyIds } from './components';
import Home from './pages/Home';
import DiginPage from './pages/Digin';
import Company from './pages/Company';
import Profile from './pages/Profile';

// Hash routes: GitHub Pages has no server rewrites, so #/digin etc. always load index.html.
const ROUTES = {
  '/': { label: 'Home', title: `${company.name} — Digin and engineering for regulated work`, Page: Home },
  '/digin': { label: 'Digin', title: `Digin — ${company.name}`, Page: DiginPage },
  '/company': { label: 'Company', title: `Company — ${company.name}`, Page: Company },
  '/profile': { label: 'Profile', title: `Austin Arlint — Profile — ${company.name}`, Page: Profile },
};

// Section anchors from the old one-page résumé (arlint.dev/#experience) land on the Profile.
const LEGACY_PROFILE_ANCHORS = ['summary', 'experience', 'skills', 'projects', 'education', 'contact'];

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '');
  if (LEGACY_PROFILE_ANCHORS.includes(raw)) return { path: '/profile', anchor: raw };
  const path = raw.startsWith('/') ? raw.replace(/\/+$/, '') || '/' : '/';
  return { path: ROUTES[path] ? path : '/', anchor: null };
}

function useRoute() {
  const [route, setRoute] = useState(parseHash);
  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

function readStoredTheme() {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return readStoredTheme() ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage unavailable (private window); the theme still applies for this visit.
    }
  }, [theme]);

  return [theme, () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))];
}

function Topbar({ path }) {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="topbar no-print">
      <div className="topbar-inner">
        <a href="#/" className="topbar-brand">{company.name}</a>
        <nav className="topbar-nav" aria-label="Site">
          {Object.entries(ROUTES).map(([p, r]) => (
            <a key={p} href={`#${p}`} aria-current={p === path ? 'page' : undefined}>
              {r.label}
            </a>
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
          {path === '/profile' && (
            <button
              className="btn-pdf"
              onClick={() => window.print()}
              aria-label="Print the résumé to PDF"
            >
              ↓ PDF
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer no-print">
      <div className="site-footer-inner">
        <div className="site-footer-company">
          <div className="site-footer-name">{company.name}</div>
          <div className="site-footer-line">{company.location}</div>
          <a className="site-footer-mail" href={`mailto:${company.email}`}>{company.email}</a>
          <CompanyIds className="company-ids-inline" />
        </div>
        <nav className="site-footer-links" aria-label="Footer">
          {Object.entries(ROUTES).map(([p, r]) => (
            <a key={p} href={`#${p}`}>{r.label}</a>
          ))}
          <a href={digin.url} target="_blank" rel="noreferrer">{digin.urlLabel} ↗</a>
        </nav>
      </div>
      <div className="site-footer-sig">© {new Date().getFullYear()} {company.name}</div>
    </footer>
  );
}

export default function App() {
  const { path, anchor } = useRoute();
  const { Page, title } = ROUTES[path];

  useEffect(() => {
    document.title = title;
    if (anchor) {
      document.getElementById(anchor)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [path, anchor, title]);

  return (
    <>
      <Topbar path={path} />
      <main className="page" key={path}>
        <Page />
      </main>
      <SiteFooter />
    </>
  );
}
