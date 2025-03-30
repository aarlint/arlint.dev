// Personal Information
export const personalInfo = {
  name: "Austin Arlint",
  title: "Senior DevSecOps Engineer | Full Stack Developer | Holds Secret Clearance",
  profilePicture: "/lusterjack.jpg",
  resumeFile: "/austin-arlint-resume.pdf",
  email: "austin@arlint.dev",
  location: "United States",
  socialLinks: {
    github: "https://github.com/arlint",
    linkedin: "https://linkedin.com/in/austinarlint",
    twitter: "https://twitter.com/austinarlint"
  }
};

// About Section
export const about = {
  summary: "I am a Senior DevSecOps Engineer and Full Stack Developer with extensive experience in cloud infrastructure, automation, and application development. My expertise spans across containerization, infrastructure as code, and cloud platforms, with a strong focus on security and scalability.",
  highlights: [
    "Managed multiple Kubernetes clusters across various environments including AWS EKS and standalone Rancher setups",
    "Implemented comprehensive CI/CD pipelines using GitHub Actions and Jenkins",
    "Developed and maintained large-scale infrastructure using Terraform and Ansible",
    "Built scalable applications using modern technologies like NodeJS, Python, and Django"
  ]
};

// Skills Section
export const skills = [
  {
    name: "AI and Machine Learning",
    description: "Experience in integrating AI and ML models into cloud-based applications.",
    icon: "/logos/ai.svg",
    story: "I have worked on several projects that involved integrating AI and machine learning models into cloud-based applications. I developed AI-powered chatbots that used natural language processing to interact with users and provide real-time assistance. I also worked on image generation platforms that utilized deep learning models to create custom images based on user input. These projects required a deep understanding of AI/ML concepts, cloud services, and serverless architectures.",
    show: true
  },
  {
    name: "Kubernetes - Container Orchestration",
    description: "Experience in managing containerized applications and orchestration using Kubernetes.",
    icon: "/logos/kubernets.svg",
    story: "At RAFT, I managed multiple Kubernetes clusters across various environments, including AWS, EKS, and standalone Rancher setups. I was responsible for ensuring the stability and scalability of microservices, automating the orchestration of containers, and resolving issues as they arose. One significant challenge was migrating applications to Kubernetes, where I automated deployment pipelines, reduced downtime, and optimized resource utilization, ensuring production systems were always highly available.",
    show: true
  },
  {
    name: "Docker - Containerization",
    description: "Expert in containerizing applications and services using Docker.",
    icon: "/logos/docker-4.svg",
    story: "At NTT, I used Docker to containerize complex multi-tier applications, ensuring consistent environments from development to production. This involved creating Dockerfiles, optimizing images, and managing Docker Compose for local development. Docker became an integral part of our CI/CD pipeline, where I automated testing, building, and deployment of containers to Kubernetes, significantly improving the speed and reliability of our software delivery process.",
    show: true
  },
  {
    name: "Terraform - Infrastructure as Code",
    description: "Infrastructure management and automation using Terraform.",
    icon: "/logos/terraform-enterprise.svg",
    story: "I utilized Terraform extensively for managing cloud infrastructure at RAFT and NTT. By automating the provisioning of AWS resources such as VPCs, EC2 instances, and security groups, I streamlined our infrastructure as code (IaC) practices. One of the key projects involved creating reusable Terraform modules that allowed teams to rapidly deploy consistent environments across development, staging, and production. This automation not only saved time but also reduced the risk of human error in infrastructure configurations.",
    show: true
  },
  {
    name: "AWS - Cloud Platform",
    description: "Proficient in AWS cloud platform for deploying and managing services.",
    icon: "/logos/aws-logo.svg",
    story: "Over the years, I've worked extensively with AWS, deploying and managing applications and services in cloud environments. At RAFT, I architected and managed infrastructure on AWS using services like EKS, EC2, RDS, S3, and Route 53. I implemented autoscaling groups to handle fluctuating traffic and ensured high availability across regions. My work also involved optimizing cost by implementing reserved instances and leveraging spot instances for non-critical workloads.",
    show: true
  },
  {
    name: "Azure - Cloud Platform",
    description: "Experience with Microsoft Azure for cloud infrastructure and services.",
    icon: "/logos/azure.svg",
    story: "I've worked with Microsoft Azure to design and implement cloud solutions for enterprise applications. My experience includes deploying and managing Azure Virtual Machines, App Services, Azure Kubernetes Service (AKS), and Azure Functions. I've implemented CI/CD pipelines using Azure DevOps, and utilized Azure's security features to ensure compliance with industry standards. I've also worked with Azure's PaaS offerings to build scalable, resilient applications that leverage the full power of Microsoft's cloud ecosystem.",
    show: true
  },
  {
    name: "NodeJS - JavaScript Runtime",
    description: "NodeJS for backend services and full-stack development.",
    icon: "/logos/nodejs-icon.svg",
    story: "At NTT, I used NodeJS to develop backend services for internal tools and customer-facing applications. My experience spans building RESTful APIs, integrating with third-party services, and handling asynchronous tasks using NodeJS. I also utilized NodeJS for full-stack development, integrating it with frontend frameworks and database services to deliver end-to-end solutions. This allowed me to create scalable, high-performance applications that powered both web and mobile interfaces.",
    show: true
  },
  {
    name: "GitHub - Version Control",
    description: "Version control, collaboration, and CI/CD pipeline management using GitHub.",
    icon: "/logos/github-icon-2.svg",
    story: "Throughout my career, GitHub has been my go-to platform for version control and collaboration. I have managed extensive repositories, ensuring clean commit histories and efficient branching strategies. At NTT, I leveraged GitHub Actions to automate our CI/CD pipelines, where every commit triggered builds, tests, and deployments to our Kubernetes clusters. This setup minimized manual intervention, reduced deployment errors, and enabled faster feature rollouts.",
    show: true
  },
  {
    name: "Python - Programming Language",
    description: "Python for automation, scripting, and backend development.",
    icon: "/logos/python-5.svg",
    story: "Python has been a crucial tool in my toolkit for automating infrastructure tasks, scripting, and backend development. At NTT, I used Python extensively with Ansible to automate infrastructure management tasks, such as setting up servers, configuring applications, and managing system updates. I've also written custom Python scripts to streamline deployment processes and handle data processing tasks, significantly improving operational efficiency.",
    show: true
  },
  {
    name: "Ansible - Automation",
    description: "Automation of infrastructure and services using Ansible.",
    icon: "/logos/ansible.svg",
    story: "At NTT, I implemented automation strategies using Ansible to manage and maintain large-scale environments. This included automating server provisioning, configuration management, and software deployments. I developed playbooks that integrated with Jenkins to automate deployment pipelines, reducing time spent on repetitive tasks. Ansible allowed me to maintain a consistent and secure infrastructure, from development environments to production.",
    show: true
  },
  {
    name: "Django - Web Framework",
    description: "Full-stack web development using Django and Python.",
    icon: "/logos/django.svg",
    story: "At NTT, I built full-stack applications using Django, leveraging its robustness for backend logic while keeping the frontend responsive and modern. Django's ORM made database management seamless, and I implemented secure, scalable applications that supported thousands of users. One project involved building an internal dashboard for infrastructure monitoring, where Django's built-in admin interface sped up the development and deployment of new features.",
    show: true
  }
];

// Experience Section
export const experience = [
  {
    company: "RAFT",
    position: "Senior DevSecOps Engineer",
    location: "Remote",
    startDate: "2022",
    endDate: "Present",
    description: "Leading DevSecOps initiatives and managing cloud infrastructure across multiple environments.",
    achievements: [
      "Managed multiple Kubernetes clusters across various environments",
      "Implemented comprehensive CI/CD pipelines",
      "Optimized cloud infrastructure costs",
      "Enhanced security posture through automated compliance checks"
    ],
    technologies: ["Kubernetes", "AWS", "Terraform", "Docker", "GitHub Actions"]
  },
  {
    company: "NTT",
    position: "DevOps Engineer",
    location: "Remote",
    startDate: "2020",
    endDate: "2022",
    description: "Developed and maintained infrastructure automation and deployment pipelines.",
    achievements: [
      "Automated infrastructure management using Ansible",
      "Developed full-stack applications using Django and NodeJS",
      "Implemented containerization strategies",
      "Managed CI/CD pipelines using Jenkins"
    ],
    technologies: ["Python", "Django", "NodeJS", "Ansible", "Docker", "Jenkins"]
  }
];

// Education Section
export const education = [
  {
    institution: "Utah State University",
    degree: "Bachelor of Science",
    field: "Information Systems Management",
    location: "Logan, UT",
    startDate: "2009",
    endDate: "2013",
    achievements: [
      "Graduated with a degree in Information Systems Management"
    ]
  },
  {
    institution: "CompTIA",
    degree: "Security+",
    field: "Information Security",
    location: "Online",
    startDate: "2020",
    endDate: "Present",
    achievements: [
      "Holds active Security+ certification"
    ]
  }
];

// Projects Section
export const projects = [
  {
    name: "German Language Learning App",
    description: "Developed a web application for learning German using React, Node.js, Docusaurus.",
    technologies: ["React", "Node.js", "Docusaurus"],
    category: "Web Development",
    image: "/background.webp",
    link: "https://german.arlint.dev",
    github: "https://github.com/aarlint/german",
    features: [
      "Interactive language learning interface",
      "Built with modern web technologies",
      "Responsive design for all devices"
    ]
  },
  {
    name: "Big Red Barn - Rental Website",
    description: "Developed a rental website for Big Red Barn using React",
    technologies: ["React", "Node.js"],
    category: "Web Development",
    image: "/background.webp",
    link: "https://big-red-barn.com",
    github: "https://github.com/aarlint/big-red-barn",
    features: [
      "Property rental management system",
      "User-friendly interface",
      "Secure payment integration"
    ]
  },
  {
    name: "Trivy Glass, Vulnerability Scanner Visualizer",
    description: "Developed a web application to visualize vulnerabilities in container images on K8s using Trivy Operator.",
    technologies: ["Svelte", "Node.js", "Kubernetes", "Trivy"],
    category: "Security",
    image: "/background.webp",
    github: "https://github.com/arlintdev/trivyglass",
    features: [
      "Real-time vulnerability scanning",
      "Kubernetes integration",
      "Interactive visualization dashboard"
    ]
  },
  {
    name: "Kubernetes Deployment Automation",
    description: "Developed a comprehensive automation framework for Kubernetes deployments, reducing deployment time and minimizing human error.",
    technologies: ["Kubernetes", "Terraform", "Python", "AWS"],
    category: "DevOps",
    image: "/background.webp",
    github: "https://github.com/aarlint",
    features: [
      "Automated deployment workflows",
      "Infrastructure as Code implementation",
      "Error reduction through automation"
    ]
  },
  {
    name: "Secure Microservices Architecture",
    description: "Designed and implemented a secure microservices architecture with service mesh for enhanced security and observability.",
    technologies: ["Docker", "Kubernetes", "Istio", "AWS"],
    category: "Security",
    image: "/background.webp",
    github: "https://github.com/aarlint",
    features: [
      "Service mesh implementation",
      "Enhanced security controls",
      "Improved observability"
    ]
  },
  {
    name: "Infrastructure Monitoring Dashboard",
    description: "Built a comprehensive monitoring dashboard for infrastructure and application metrics using modern visualization tools.",
    technologies: ["Grafana", "Prometheus", "Node.js", "React"],
    category: "Monitoring",
    image: "/background.webp",
    github: "https://github.com/aarlint",
    features: [
      "Real-time metrics visualization",
      "Custom alerting system",
      "Infrastructure health monitoring"
    ]
  },
  {
    name: "CI/CD Pipeline Optimization",
    description: "Optimized CI/CD pipelines for faster builds and deployments, implementing caching strategies and parallel execution.",
    technologies: ["Jenkins", "GitHub Actions", "Docker", "AWS"],
    category: "DevOps",
    image: "/background.webp",
    github: "https://github.com/aarlint",
    features: [
      "Optimized build times",
      "Parallel execution implementation",
      "Caching strategy optimization"
    ]
  }
];

// Contact Section
export const contact = {
  email: "austin@arlint.dev",
  location: "United States",
  availability: "Available for new opportunities",
  message: "I'm always interested in connecting with fellow developers and exploring new opportunities in cloud infrastructure and automation.",
  socialLinks: {
    github: "https://github.com/arlint",
    linkedin: "https://linkedin.com/in/austinarlint",
    twitter: "https://twitter.com/austinarlint"
  }
};

// Navigation Configuration
export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

// Theme Configuration
export const themes = {
  light: {
    name: "Light",
    primaryColor: "#007bff",
    secondaryColor: "#6c757d",
    backgroundColor: "#ffffff",
    textColor: "#333333",
    accentColor: "#ffc107",
    cardBackground: "#f8f9fa",
    borderColor: "#dee2e6"
  },
  dark: {
    name: "Dark",
    primaryColor: "#0d6efd",
    secondaryColor: "#adb5bd",
    backgroundColor: "#212529",
    textColor: "#f8f9fa",
    accentColor: "#ffc107",
    cardBackground: "#343a40",
    borderColor: "#495057"
  },
  ocean: {
    name: "Ocean",
    primaryColor: "#0dcaf0",
    secondaryColor: "#6c757d",
    backgroundColor: "#e3f2fd",
    textColor: "#1a237e",
    accentColor: "#00bcd4",
    cardBackground: "#ffffff",
    borderColor: "#b3e5fc"
  },
  forest: {
    name: "Forest",
    primaryColor: "#198754",
    secondaryColor: "#6c757d",
    backgroundColor: "#f1f8e9",
    textColor: "#1b5e20",
    accentColor: "#4caf50",
    cardBackground: "#ffffff",
    borderColor: "#c8e6c9"
  },
  purpleGlass: {
    name: "Purple Glass",
    primaryColor: "#7448ce",
    secondaryColor: "#b3b3ff",
    backgroundColor: "#0f0f1c",
    textColor: "#f0f0f0",
    accentColor: "#9a7fe0",
    cardBackground: "rgba(15, 15, 28, 0.25)",
    borderColor: "rgba(255, 255, 255, 0.18)"
  }
};

// Default theme
export const defaultTheme = "purpleGlass"; 