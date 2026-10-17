import { company, digin } from '../data/data';
import { CompanyIds, DemoButton } from '../components';

export default function Company() {
  return (
    <>
      <section className="hero fade-in" id="top">
        <div className="masthead-eyebrow">Company</div>
        <h1 className="hero-title">
          About <em>Arlint Dev</em>
        </h1>
        <p className="hero-lead">
          {company.name} is a limited liability company formed in {company.formed} in {company.location}.
          It builds {digin.name} and consults on platform engineering, DevSecOps, zero trust, and
          agentic AI for regulated and federal work.
        </p>
      </section>

      <section className="section" id="history">
        <div className="section-label">History</div>
        <div className="split">
          <h2 className="section-title">Founded on seventeen years of shipping.</h2>
          <div className="split-body">
            <p>
              Austin Arlint formed {company.name} in {company.location} in {company.formed}, and
              leads it as founder and principal engineer.
            </p>
            <p>
              Before the company, he spent almost five years on NTT&rsquo;s Kubernetes-native
              Automation Platform, after joining Dimension Data in Germany, and then worked as a
              senior DevSecOps engineer at Raft on CNAP, a zero-trust cloud-access platform in AWS
              GovCloud serving DoD mission partners. Since August 2025 he has also been Chief AI
              Officer at SHE BASH LLC, a DoD contracting company, where Digin is being piloted.
            </p>
            <p>
              He holds a B.S. in Information Systems Management from Utah State University, CompTIA
              Security+, and an active Secret clearance.{' '}
              <a href="#/profile">Read the full profile →</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="engage">
        <div className="section-label">How to engage</div>
        <h2 className="section-title">Two ways to work with us.</h2>
        <div className="offer-grid">
          <article className="offer offer-product">
            <div className="offer-kicker">Product</div>
            <h3 className="offer-name">A Digin demo or pilot</h3>
            <p className="offer-body">
              See {digin.name} in a demo, or run a pilot on your own infrastructure, on-premises or
              in your own cloud.
            </p>
            <div className="offer-links">
              <DemoButton />
            </div>
          </article>
          <article className="offer">
            <div className="offer-kicker">Consulting</div>
            <h3 className="offer-name">An engineering engagement</h3>
            <p className="offer-body">
              Platform engineering, DevSecOps, zero trust, and agentic AI for regulated and
              federal teams, drawing on the engineering behind {digin.name}.
            </p>
            <div className="offer-links">
              <a className="btn btn-ghost" href={company.consultingMailto}>Write about an engagement</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="registration">
        <div className="section-label">Registration</div>
        <div className="federal-grid">
          <ul className="fact-list">
            <li>{company.name}, a {company.kind}.</li>
            <li>Registered in SAM.gov as a small business.</li>
            <li>Based in {company.location}.</li>
          </ul>
          <aside className="federal-card">
            <div className="federal-card-title">{company.name}</div>
            <div className="federal-card-line">{company.status.join(' · ')}</div>
            <CompanyIds />
            <a className="federal-card-mail" href={`mailto:${company.email}`}>{company.email}</a>
          </aside>
        </div>
      </section>
    </>
  );
}
