// Personal Information
export const personalInfo = {
  name: "Austin Arlint",
  title: "Forward Deployed Platform & AI Engineer",
  portrait: "/lusterjack.jpg",
  tagline: "Forward-deployed engineer building paved-road platforms, shift-left DevSecOps, and agentic AI tooling for teams that have to ship — fast, secure, and under audit.",
  location: "United States",
  email: "austin@arlint.dev",
  website: "arlint.dev",
  clearance: "Active Secret Clearance",
  socialLinks: {
    github: "https://github.com/aarlint",
    linkedin: "https://linkedin.com/in/austinarlint",
    twitter: "https://twitter.com/austinarlint"
  }
};

// Summary / About
export const about = {
  lead: "Forward-deployed engineer building internal platforms, shift-left DevSecOps, and agentic AI tooling for teams that have to ship — fast, secure, and under audit.",
  body: "I work at the seam of three disciplines that have stopped being separate. On the platform side, I build paved roads — Kubernetes on EKS, Terraform modules, GitOps pipelines, and developer-experience tooling that turns ad-hoc operations into a product engineers can self-serve. On the DevSecOps side, I run the network-intelligence and compliance backbone of a zero-trust cloud-access platform for DoD mission partners — Palo Alto, Appgate SDP, Transit Gateway, OpenSearch — with policy-as-code guardrails, SBOM and supply-chain scanning, and STIG/RMF automation woven into CI/CD so compliance falls out of the build rather than living in a spreadsheet. On the AI side, I build MCP servers, RAG pipelines, agent workflows, and local-LLM tooling that turn telemetry, transcripts, and unstructured work into something a human — or an agent — can act on. I embed deep, take ownership end-to-end, and treat platform, security posture, and developer experience as one product.",
  stats: [
    { value: "8+", label: "Years shipping platforms" },
    { value: "GovCloud", label: "Production scale" },
    { value: "Secret", label: "Clearance" }
  ]
};

// Skills — categorized for editorial layout
export const skillCategories = [
  {
    name: "Platform Engineering",
    items: [
      "Paved roads & golden paths, platform-as-a-product",
      "Internal developer platforms (IDPs) and DevEx tooling",
      "Kubernetes — EKS, Rancher, self-managed",
      "Terraform modules, remote state, GovCloud providers",
      "GitOps — ArgoCD / Flux, declarative delivery",
      "OpenTelemetry, Grafana, Prometheus, CloudWatch",
      "SRE practice — SLOs, runbooks, incident review"
    ]
  },
  {
    name: "DevSecOps & Zero Trust",
    items: [
      "Shift-left security in CI/CD pipelines",
      "Supply-chain security — SBOM, signing, attestations",
      "Policy-as-code — OPA / Rego, admission control",
      "Container & image scanning — Trivy, runtime telemetry",
      "Zero-trust network access — Appgate SDP, microsegmentation",
      "Palo Alto Panorama, NGFW, App-ID, traffic analytics",
      "STIG / RMF / DISA SCAP, continuous control monitoring",
      "Secrets management, IAM least privilege, SigV4"
    ]
  },
  {
    name: "AI & Agentic Systems",
    items: [
      "Anthropic Claude API, Claude Code, Claude Agent SDK",
      "Model Context Protocol (MCP) server development",
      "Agentic workflows & tool-use orchestration",
      "RAG pipelines, embeddings, vector search",
      "Local LLMs — Ollama, Gemma, on-prem inference",
      "Prompt engineering, evals, agent observability",
      "Knowledge-graph construction over unstructured corpora"
    ]
  },
  {
    name: "Cloud Infrastructure",
    items: [
      "AWS — GovCloud + Commercial, multi-account / Organizations",
      "EC2, EKS, RDS, S3, Route 53, IAM, KMS, Lambda",
      "AWS Transit Gateway, VPC, Direct Connect, PrivateLink",
      "Azure — AKS, App Services, Azure DevOps",
      "OpenSearch / Elasticsearch — queries, dashboards, ingest",
      "Ansible — playbooks, roles, dynamic inventory"
    ]
  },
  {
    name: "Languages & Build",
    items: [
      "Python — boto3, opensearch-py, data pipelines, automation",
      "TypeScript / JavaScript — Node.js, React, Svelte, Vue",
      "Go — CLI tools and services",
      "Bash, PowerShell, shell-driven automation",
      "SQL, SQLite, PostgreSQL",
      "GitHub Actions, Jenkins, GitLab CI, Bun / Vite"
    ]
  }
];

// Experience
export const experience = [
  {
    company: "RAFT",
    position: "Staff DevSecOps Engineer",
    location: "Remote",
    startDate: "2022",
    endDate: "Present",
    summary: "Staff engineer on CNAP, a zero-trust cloud-access platform in AWS GovCloud serving DoD mission partners. Own the network-intelligence layer, the paved-road platform engineers build on, and the AI-native tooling that's starting to wrap the whole thing.",
    achievements: [
      "Designed and shipped the executive network-intelligence pipeline that fuses Palo Alto traffic, Appgate SDP zero-trust tunnels, and AWS Transit Gateway routing — turning 460+ firewall rules and millions of log events into per-customer markdown reports, Mermaid traffic-flow diagrams, and audit-ready CSV evidence with a defensible Compliant → High-Risk classification",
      "Operates the multi-firewall border architecture across regions: per-firewall report folders, customer-pattern matching, and live CIDR-to-customer mapping driven from AWS TGW route tables",
      "Built the OpenSearch query layer (cnap_palo_traffic, cnap_appgate, cloudtrail-production) on AWS SigV4 + assumed roles, powering investigations, dashboards, and continuous-control evidence — turning detection telemetry into a queryable platform primitive",
      "Wove STIG/RMF compliance into CI/CD — SBOM generation, container scanning, policy-as-code guardrails, evidence bundling, and an interactive checklist server with SQLite state — so compliance falls out of the build instead of living in a spreadsheet",
      "Operates the paved-road platform: EKS workloads, Terraform modules, GitOps-driven deployment pipelines, secrets management, and developer-experience tooling that lets feature teams self-serve provisioning without leaving the compliance perimeter",
      "Building the AI-native layer: MCP servers and agent workflows that put live telemetry, audit evidence, and runbook context one prompt away — turning security operations into a conversational interface for the team"
    ],
    technologies: ["AWS GovCloud", "Palo Alto", "Appgate SDP", "OpenSearch", "EKS / Kubernetes", "Terraform", "GitOps", "Policy-as-Code", "STIG / RMF", "MCP", "Python"]
  },
  {
    company: "NTT Data",
    position: "DevOps Engineer",
    location: "Remote",
    startDate: "2020",
    endDate: "2022",
    summary: "Embedded with enterprise clients to build infrastructure automation, containerized application platforms, and full-stack tooling — the foundation that turned into platform engineering everywhere else.",
    achievements: [
      "Automated provisioning, configuration, and deployment across hybrid fleets with Ansible playbooks and roles wired into Jenkins pipelines",
      "Containerized multi-tier applications with Docker and shipped them on Kubernetes — image optimization, Compose for local dev, Helm for production",
      "Built full-stack Django and Node.js applications, including an internal infrastructure dashboard ops teams used daily",
      "Owned CI/CD pipelines end-to-end: test, build, scan, and deploy — replacing release toil with declarative, auditable workflows"
    ],
    technologies: ["Python", "Django", "Node.js", "Ansible", "Docker", "Kubernetes", "Jenkins", "AWS"]
  }
];

// Further History — earlier roles, collapsed by default
// Each entry: { company, position, location, startDate, endDate, summary }
export const furtherHistory = [
  // populate after pulling LinkedIn export, e.g.:
  // { company: "...", position: "...", location: "...", startDate: "YYYY", endDate: "YYYY", summary: "..." }
];

// Education & Credentials
export const education = [
  {
    institution: "Utah State University",
    degree: "B.S. Information Systems Management",
    location: "Logan, UT",
    startDate: "2009",
    endDate: "2013"
  }
];

export const credentials = [
  { name: "CompTIA Security+", status: "Active" },
  { name: "Secret Security Clearance", status: "Active" }
];

// Selected Projects (curated)
export const projects = [
  {
    name: "Hours",
    tagline: "Native macOS time tracking + invoicing with MCP integration",
    description: "End-to-end time tracking and invoicing app with a Claude-native MCP server — start/stop timers, generate PDF invoices, and manage clients/contracts/quotes directly from a conversational interface.",
    technologies: ["Swift", "Node.js", "MCP", "SQLite", "PDF"],
    link: "https://github.com/aarlint/hours",
    github: "https://github.com/aarlint/hours"
  },
  {
    name: "Hours MCP Server",
    tagline: "Conversational time tracking for Claude Desktop",
    description: "Standalone MCP server exposing 60+ tools for time tracking, billing cycles, invoice generation, and client management — drives the Hours app from Claude with 15-minute precision.",
    technologies: ["TypeScript", "MCP", "Node.js"],
    github: "https://github.com/aarlint/hours-mcp"
  },
  {
    name: "HomeGuard",
    tagline: "Private AI summaries over mirrored device traffic",
    description: "Self-hosted dashboard that ingests mirrored WhatsApp activity, runs local LLM summarization with Ollama/Gemma, surfaces concerning topics, and lets an investigator chat with a knowledge graph built from the corpus.",
    technologies: ["Ollama", "Gemma", "Node.js", "Knowledge Graph"],
    github: "https://github.com/aarlint/homeguard"
  },
  {
    name: "Slack Impersonator",
    tagline: "Voice-cloning Slack bot with approval workflow",
    description: "Slack bot that learns a user's voice from history and replies on their behalf. Vue admin UI with persona library, A/B experiments, draft approval flow, and MPIM polling.",
    technologies: ["Vue", "Node.js", "Slack API", "LLM"],
    github: "https://github.com/aarlint/slackimpersonator"
  },
  {
    name: "Trivy Glass",
    tagline: "Vulnerability visualizer for Kubernetes",
    description: "Web UI that visualizes container vulnerabilities discovered by the Trivy Operator on Kubernetes clusters — real-time scanning, interactive dashboards, severity drilldowns.",
    technologies: ["Svelte", "Node.js", "Kubernetes", "Trivy"],
    github: "https://github.com/arlintdev/trivyglass"
  },
  {
    name: "Switchboard",
    tagline: "Desktop app for browsing CLI coding sessions",
    description: "Desktop client for browsing, searching, and managing transcripts from CLI-driven coding sessions across multiple projects.",
    technologies: ["Electron", "TypeScript", "React"],
    github: "https://github.com/aarlint/switchboard"
  }
];

// Contact
export const contact = {
  email: "austin@arlint.dev",
  location: "United States",
  availability: "Open to forward-deployed, platform, and AI engineering roles",
  socialLinks: {
    github: "https://github.com/aarlint",
    linkedin: "https://linkedin.com/in/austinarlint",
    twitter: "https://twitter.com/austinarlint"
  }
};

// Navigation
export const navigation = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];
