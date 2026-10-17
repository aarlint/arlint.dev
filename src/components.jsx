import { company } from './data/data';

// Registration identifiers. Each renders only when set — never a placeholder.
export function CompanyIds({ className = '' }) {
  const ids = [
    company.uei && { label: 'UEI', value: company.uei },
    company.duns && { label: 'D-U-N-S', value: company.duns },
  ].filter(Boolean);
  if (ids.length === 0) return null;
  return (
    <dl className={`company-ids ${className}`}>
      {ids.map((id) => (
        <div key={id.label} className="company-id">
          <dt>{id.label}</dt>
          <dd>{id.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function PageLabel({ children }) {
  return <div className="section-label">{children}</div>;
}

export function DemoButton({ children = 'Request a demo or pilot', variant = 'primary' }) {
  return (
    <a className={`btn btn-${variant}`} href={company.demoMailto}>
      {children}
    </a>
  );
}
