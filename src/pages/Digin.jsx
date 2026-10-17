import { company, digin } from '../data/data';
import { DemoButton } from '../components';

export default function Digin() {
  return (
    <>
      <section className="hero fade-in" id="top">
        <div className="masthead-eyebrow">Product · {company.name}</div>
        <h1 className="hero-title">
          <em>{digin.name}</em>
        </h1>
        <p className="hero-lead">{digin.lead}</p>
        <p className="hero-sub">{digin.replaces}</p>
        <div className="hero-actions">
          <DemoButton />
          <a className="btn btn-ghost" href={digin.url} target="_blank" rel="noreferrer">
            {digin.urlLabel} ↗
          </a>
        </div>
      </section>

      <section className="section" id="runs">
        <div className="section-label">How it runs</div>
        <div className="split">
          <h2 className="section-title">One binary. Your servers.</h2>
          <div className="split-body">
            <p>{digin.runs}</p>
            <p>
              Its cryptography comes from a FIPS 140-3 build on the Go Cryptographic Module
              (CMVP #5247). Every request is authenticated and audited, and the audit log is
              hash-chained and anchored.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-label">What it does</div>
        <h2 className="section-title">Everything a team works in, held to one security bar.</h2>
        <div className="feature-grid">
          {digin.features.map((f) => (
            <article key={f.name} className="feature">
              <h3 className="feature-name">{f.name}</h3>
              <p className="feature-body">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="standing">
        <div className="section-label">Where it stands</div>
        <div className="standing">
          <ul className="fact-list">
            {digin.standing.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="standing-note">{digin.standingNote}</p>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-label">See it</div>
        <div className="contact-block">
          <p className="contact-message">
            Ask for a demo, or a pilot on your own infrastructure, at{' '}
            <a href={company.demoMailto}>{company.email}</a>.
          </p>
          <div className="hero-actions">
            <DemoButton />
          </div>
        </div>
      </section>
    </>
  );
}
