// Personal Information
export const personalInfo = {
  name: "Austin Arlint",
  title: "Senior DevSecOps Engineer",
  portrait: "/lusterjack.jpg",
  tagline: "Zero-trust platforms, network intelligence, and DevSecOps for regulated environments.",
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
  lead: "Senior DevSecOps engineer specializing in zero-trust network architecture, cloud security automation, and compliance tooling for DoD and regulated environments.",
  body: "I design and operate the security backbone of a cloud-access platform serving DoD mission partners — building network intelligence pipelines that correlate Palo Alto traffic, Appgate SDP tunnels, and AWS Transit Gateway routing to quantify zero-trust posture in real time. My day-to-day spans firewall rule analysis, OpenSearch query engineering, STIG/RMF automation, Kubernetes operations, and shipping internal tools that turn security telemetry into evidence executives and assessors can act on.",
  stats: [
    { value: "8+", label: "Years in DevSecOps" },
    { value: "AWS GovCloud", label: "Production environment" },
    { value: "Secret", label: "Clearance" }
  ]
};

// Skills — categorized for editorial layout
export const skillCategories = [
  {
    name: "Cloud & Infrastructure",
    items: [
      "AWS (GovCloud + Commercial)",
      "AWS EKS, EC2, RDS, S3, Route 53, IAM, KMS",
      "AWS Transit Gateway, VPC, Direct Connect",
      "Azure (AKS, App Services, Azure DevOps)",
      "Terraform (modules, state, GovCloud providers)",
      "Ansible (playbooks, roles, dynamic inventory)"
    ]
  },
  {
    name: "Security & Zero Trust",
    items: [
      "Palo Alto Networks (Panorama, NGFW, App-ID, traffic logs)",
      "Appgate SDP (zero-trust network access)",
      "STIG / RMF / DISA SCAP",
      "Network segmentation & microsegmentation",
      "Trivy, container vulnerability scanning",
      "AWS SigV4, IAM role assumption, least privilege"
    ]
  },
  {
    name: "Platforms & Orchestration",
    items: [
      "Kubernetes (EKS, Rancher, self-managed)",
      "Docker, Docker Compose, BuildKit",
      "Istio service mesh",
      "GitHub Actions, Jenkins, GitLab CI",
      "OpenSearch / Elasticsearch (queries, dashboards, SigV4)",
      "Grafana, Prometheus, CloudWatch"
    ]
  },
  {
    name: "Languages & Frameworks",
    items: [
      "Python (boto3, opensearch-py, data pipelines, automation)",
      "JavaScript / TypeScript (Node.js, React, Svelte, Vue)",
      "Go (CLI tools, services)",
      "Django, Express, Vite",
      "Bash, PowerShell",
      "SQL, SQLite, PostgreSQL"
    ]
  },
  {
    name: "AI & Tooling",
    items: [
      "Anthropic Claude API & Claude Code",
      "Model Context Protocol (MCP) server development",
      "Local LLMs (Ollama, Gemma)",
      "Embedding search & retrieval pipelines",
      "Agent orchestration for security workflows"
    ]
  }
];

// Experience
export const experience = [
  {
    company: "RAFT",
    position: "Senior DevSecOps Engineer",
    location: "Remote",
    startDate: "2022",
    endDate: "Present",
    summary: "DevSecOps lead on CNAP, a zero-trust cloud-access platform deployed in AWS GovCloud for DoD mission partners. Own the network intelligence stack, compliance tooling, and infrastructure automation that hold the platform's security posture together.",
    achievements: [
      "Built the executive network intelligence report generator that correlates Palo Alto traffic, Appgate SDP tunnels, and AWS Transit Gateway routing to quantify bypass vs. zero-trust posture per customer — turning 460+ rules and millions of log events into per-customer markdown reports, Mermaid traffic flow diagrams, and CSV evidence",
      "Designed and operates the multi-firewall border architecture with per-firewall report folders, customer-pattern matching, and CIDR-to-customer mapping driven from live AWS TGW route tables",
      "Authored the OpenSearch query layer (cnap_palo_traffic, cnap_appgate, cloudtrail-production) using AWS SigV4-signed access and assumed roles to power investigations, audit evidence, and dashboards",
      "Built STIG compliance tooling — interactive checklist server, SQLite state persistence, evidence bundling — to compress RMF assessment cycles for the platform",
      "Operates Kubernetes (EKS) workloads, Terraform IaC, and GitHub Actions CI/CD across dev, staging, and production GovCloud environments",
      "Risk classification framework (Compliant → Low → Medium → High) baked into the report pipeline gives leadership a defensible, repeatable measure of zero-trust adoption"
    ],
    technologies: ["AWS GovCloud", "Palo Alto", "Appgate SDP", "OpenSearch", "Kubernetes / EKS", "Terraform", "Python", "STIG / RMF", "GitHub Actions"]
  },
  {
    company: "NTT Data",
    position: "DevOps Engineer",
    location: "Remote",
    startDate: "2020",
    endDate: "2022",
    summary: "Built and operated infrastructure automation and full-stack applications for enterprise clients — containerization, configuration management, and CI/CD across hybrid environments.",
    achievements: [
      "Automated server provisioning, configuration, and software deployment with Ansible playbooks integrated into Jenkins pipelines",
      "Containerized multi-tier applications with Docker and orchestrated them on Kubernetes — Dockerfiles, image optimization, Compose for local dev, Helm for production",
      "Built full-stack Django and Node.js applications including internal infrastructure dashboards used by ops teams",
      "Owned CI/CD pipelines that automated test, build, and deploy stages — significantly reducing manual release work"
    ],
    technologies: ["Python", "Django", "Node.js", "Ansible", "Docker", "Kubernetes", "Jenkins", "AWS"]
  }
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
  availability: "Open to senior DevSecOps and platform-security roles",
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
