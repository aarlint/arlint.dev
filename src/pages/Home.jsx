import { company, digin } from '../data/data';
import { CompanyIds, DemoButton } from '../components';

export default function Home() {
  return (
    <>
      <section className="hero fade-in" id="top">
        <div className="masthead-eyebrow">{company.status.join(' · ')}</div>
        <h1 className="hero-title">
          Arlint <em>Dev</em> LLC
        </h1>
        <p className="hero-lead">{company.oneLiner}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#/digin">Meet Digin</a>
          <a className="btn btn-ghost" href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </section>

      <section className="section" id="what-we-do">
        <div className="section-label">What we do</div>
        <h2 className="section-title">A product for teams that handle CUI, and the engineering around it.</h2>
        <div className="offer-grid">
          <article className="offer offer-product">
            <div className="offer-kicker">Product</div>
            <h3 className="offer-name">{digin.name}</h3>
            <p className="offer-body">{digin.lead}</p>
            <p className="offer-body offer-soft">{digin.replaces} {digin.runs}</p>
            <div className="offer-links">
              <a href="#/digin">About Digin →</a>
              <a href={digin.url} target="_blank" rel="noreferrer">{digin.urlLabel} ↗</a>
            </div>
          </article>
          <article className="offer">
            <div className="offer-kicker">Consulting</div>
            <h3 className="offer-name">Engineering for regulated work</h3>
            <ul className="offer-list">
              {company.consulting.map((c) => (
                <li key={c.name}>
                  <strong>{c.name}.</strong> {c.body}
                </li>
              ))}
            </ul>
            <div className="offer-links">
              <a href={company.consultingMailto}>Start a conversation →</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="federal">
        <div className="section-label">For federal and DoD teams</div>
        <h2 className="section-title">Built for the way regulated programs have to work.</h2>
        <div className="federal-grid">
          <ul className="fact-list">
            <li>A small business registered in SAM.gov, based in {company.location}.</li>
            <li>Digin is designed for a FISMA Moderate authorization and ships an OSCAL component definition and a control mapping.</li>
            <li>A FIPS 140-3 build on the Go Cryptographic Module (CMVP #5247).</li>
            <li>Runs on your infrastructure, on-premises or in your own cloud, with CUI markings and an anchored, hash-chained audit log.</li>
            <li>Native apps with app-embedded zero trust designed for IL4, including mutual TLS.</li>
            <li>Founded by an engineer with an active Secret clearance and years on a DoD zero-trust cloud-access platform.</li>
          </ul>
          <aside className="federal-card">
            <div className="federal-card-title">{company.name}</div>
            <div className="federal-card-line">{company.status.join(' · ')}</div>
            <CompanyIds />
            <a className="federal-card-mail" href={`mailto:${company.email}`}>{company.email}</a>
          </aside>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-label">Contact</div>
        <div className="contact-block">
          <p className="contact-message">
            To see Digin, run a pilot, or talk about an engagement, write to{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
          <div className="hero-actions">
            <DemoButton />
            <a className="btn btn-ghost" href="#/company">How to engage</a>
          </div>
        </div>
      </section>
    </>
  );
}
