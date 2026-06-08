export const siteConfig = {
  name: "Dhruv Gupta",
  displayName: "DHRUV GUPTA",
  title: "Dhruv Gupta | AI Engineer & Product Builder",
  description:
    "AI Engineer and software developer building intelligent products. B.Tech CSE AIML student, startup builder, and future ML engineer.",
  url: "https://dhruvgupta.dev",
  email: "dhruvgupt2005@gmail.com",
  linkedin: "https://linkedin.com/in/dhruv-gupta",
  github: "D:\PORTFOLIO\public\resume\Dhruv_updated_resume (1).pdf",
  resumePath: "resume/Dhruv_updated_resume (1).pdf",
  profileImage: "/profile/profile.jpg",
  heroRoles: ["AI Engineer", "Software Developer", "Startup Builder"],
  roles: [
    "AI Engineer",
    "Software Developer",
    "Startup Builder",
  ],
};

export const journeySteps = [
  {
    year: "2022 — Present",
    title: "B.Tech CSE AIML Student",
    description:
      "Pursuing Computer Science with specialization in Artificial Intelligence and Machine Learning, building a strong foundation in theory and practice.",
  },
  {
    year: "2023 — Present",
    title: "Learning DSA & System Design",
    description:
      "Mastering data structures, algorithms, and scalable system architecture to engineer robust, production-grade solutions.",
  },
  {
    year: "2024 — Present",
    title: "Building AI Applications",
    description:
      "Designing and shipping LLM-powered products — from RAG pipelines to intelligent assistants that solve real-world problems.",
  },
  {
    year: "2024 — Present",
    title: "Participating in Hackathons",
    description:
      "Competing in hackathons to rapidly prototype innovative solutions under pressure and collaborate with top talent.",
  },
  {
    year: "2025 — Present",
    title: "Creating Startup Solutions",
    description:
      "Building end-to-end products with product thinking, user empathy, and technical excellence from idea to deployment.",
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  gradient: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "verifresh",
    name: "VeriFresh",
    tagline: "Blockchain-based food transparency platform",
    problem:
      "Consumers lack verifiable trust in food supply chains, leading to fraud and safety concerns.",
    solution:
      "A blockchain-powered platform that traces food from farm to table with immutable records and real-time verification.",
    tech: ["React", "Node.js", "Solidity", "Ethereum", "IPFS"],
    features: [
      "Supply chain traceability",
      "QR-based product verification",
      "Smart contract automation",
      "Farmer & retailer dashboards",
    ],
    github: "https://github.com/dhruv-gupta/verifresh",
    demo: "https://verifresh.demo",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    image: "/projects/verifresh.svg",
    featured: true,
  },
  {
    id: "legal-ai",
    name: "Legal AI Assistant",
    tagline: "AI-powered legal document assistant",
    problem:
      "Legal document review is time-consuming, expensive, and inaccessible to individuals and small businesses.",
    solution:
      "An AI assistant that analyzes, summarizes, and answers questions about legal documents using advanced NLP.",
    tech: ["Python", "FastAPI", "OpenAI", "LangChain", "React"],
    features: [
      "Document summarization",
      "Clause extraction",
      "Natural language Q&A",
      "Multi-format support",
    ],
    github: "https://github.com/dhruv-gupta/legal-ai",
    demo: "https://legal-ai.demo",
    gradient: "from-violet-500/20 to-purple-500/20",
    image: "/projects/legal-ai.svg",
  },
  {
    id: "echo",
    name: "Echo",
    tagline: "AI communication assistant",
    problem:
      "Professionals struggle to craft clear, context-aware messages across channels efficiently.",
    solution:
      "An intelligent communication assistant that adapts tone, context, and intent for seamless messaging.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind", "Vercel"],
    features: [
      "Context-aware drafting",
      "Tone adaptation",
      "Multi-channel support",
      "Conversation memory",
    ],
    github: "https://github.com/dhruv-gupta/echo",
    demo: "https://echo.demo",
    gradient: "from-blue-500/20 to-indigo-500/20",
    image: "/projects/echo.svg",
  },
  {
    id: "tweet-engine",
    name: "AI Tweet Engine",
    tagline: "AI content generation system",
    problem:
      "Creating engaging, on-brand social content at scale is labor-intensive and inconsistent.",
    solution:
      "An automated content engine that generates, schedules, and optimizes tweets using AI and analytics.",
    tech: ["Python", "FastAPI", "GPT-4", "Twitter API", "Redis"],
    features: [
      "AI content generation",
      "Brand voice tuning",
      "Analytics dashboard",
      "Automated scheduling",
    ],
    github: "https://github.com/dhruv-gupta/ai-tweet-engine",
    demo: "https://tweet-engine.demo",
    gradient: "from-amber-500/20 to-orange-500/20",
    image: "/projects/tweet-engine.svg",
  },
  {
    id: "pdf-rag",
    name: "PDF RAG System",
    tagline: "Question-answering over documents",
    problem:
      "Extracting insights from large document collections requires manual reading and is not scalable.",
    solution:
      "A RAG-powered system that ingests PDFs, creates vector embeddings, and enables precise Q&A over documents.",
    tech: ["Python", "LangChain", "ChromaDB", "OpenAI", "Streamlit"],
    features: [
      "PDF ingestion pipeline",
      "Semantic search",
      "Source citations",
      "Multi-document support",
    ],
    github: "https://github.com/dhruv-gupta/pdf-rag",
    demo: "https://pdf-rag.demo",
    gradient: "from-rose-500/20 to-pink-500/20",
    image: "/projects/pdf-rag.svg",
  },
];

export type CredibilityStat = {
  label: string;
  value: number;
  suffix: string;
  description: string;
};

export const credibilityStats: CredibilityStat[] = [
  {
    label: "Certifications",
    value: 10,
    suffix: "+",
    description: "Industry credentials across AI, cloud, and software engineering",
  },
  {
    label: "AI Projects",
    value: 5,
    suffix: "+",
    description: "Production-grade AI applications shipped end-to-end",
  },
  {
    label: "DSA Problems Solved",
    value: 100,
    suffix: "+",
    description: "Consistent practice building algorithmic problem-solving depth",
  },
  {
    label: "Hackathons",
    value: 2,
    suffix: "+",
    description: "Rapid prototyping and team collaboration under pressure",
  },
];

export type Certification = {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  credentialUrl: string;
};

export const certifications: Certification[] = [
  {
    id: "appwars",
    title: "AppWars Competition",
    organization: "AppWars",
    date: "2025",
    image: "/certifications/APPWARS.svg",
    credentialUrl: "#",
  },
  {
    id: "claude-ai",
    title: "Claude AI Certification",
    organization: "Anthropic",
    date: "2025",
    image: "/certifications/CLAUDE.svg",
    credentialUrl: "#",
  },
  {
    id: "hackathon",
    title: "Hackathon Participation",
    organization: "Hackathon Event",
    date: "2025",
    image: "/certifications/HACKATHON.svg",
    credentialUrl: "#",
  },
  {
    id: "internship",
    title: "Internship Certificate",
    organization: "Company Internship",
    date: "2025",
    image: "/certifications/INTERNSHIP.svg",
    credentialUrl: "#",
  },
  {
    id: "machine-learning",
    title: "Machine Learning Certification",
    organization: "Machine Learning Program",
    date: "2025",
    image: "/certifications/MACHINE_LEARNING.svg",
    credentialUrl: "#",
  },
  {
    id: "skillup",
    title: "SkillUp Certification",
    organization: "SkillUp",
    date: "2025",
    image: "/certifications/SKILLUP.svg",
    credentialUrl: "#",
  },
  {
    id: "udemy",
    title: "Udemy Certification",
    organization: "Udemy",
    date: "2025",
    image: "/certifications/UDEMY.svg",
    credentialUrl: "#",
  },
];

export const skillCategories = {
  frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind"],
  backend: ["FastAPI", "Python", "Node.js"],
  aiml: ["Machine Learning", "LLMs", "LangChain", "RAG", "Prompt Engineering"],
  programming: ["Java", "Python", "DSA"],
};

export const skillNodes = [
  { id: "react", label: "React", category: "frontend", x: 0.2, y: 0.3 },
  { id: "nextjs", label: "Next.js", category: "frontend", x: 0.35, y: 0.15 },
  { id: "js", label: "JavaScript", category: "frontend", x: 0.1, y: 0.5 },
  { id: "ts", label: "TypeScript", category: "frontend", x: 0.25, y: 0.55 },
  { id: "tailwind", label: "Tailwind", category: "frontend", x: 0.4, y: 0.4 },
  { id: "fastapi", label: "FastAPI", category: "backend", x: 0.6, y: 0.2 },
  { id: "python-be", label: "Python", category: "backend", x: 0.75, y: 0.35 },
  { id: "node", label: "Node.js", category: "backend", x: 0.65, y: 0.5 },
  { id: "ml", label: "Machine Learning", category: "aiml", x: 0.5, y: 0.7 },
  { id: "llms", label: "LLMs", category: "aiml", x: 0.7, y: 0.75 },
  { id: "langchain", label: "LangChain", category: "aiml", x: 0.85, y: 0.6 },
  { id: "rag", label: "RAG", category: "aiml", x: 0.55, y: 0.85 },
  { id: "prompt", label: "Prompt Engineering", category: "aiml", x: 0.8, y: 0.85 },
  { id: "java", label: "Java", category: "programming", x: 0.15, y: 0.8 },
  { id: "python", label: "Python", category: "programming", x: 0.3, y: 0.75 },
  { id: "dsa", label: "DSA", category: "programming", x: 0.45, y: 0.65 },
];

export const skillEdges = [
  ["react", "nextjs"],
  ["react", "ts"],
  ["nextjs", "tailwind"],
  ["ts", "node"],
  ["fastapi", "python-be"],
  ["python-be", "ml"],
  ["ml", "llms"],
  ["llms", "langchain"],
  ["langchain", "rag"],
  ["llms", "prompt"],
  ["python", "dsa"],
  ["java", "dsa"],
  ["python-be", "python"],
  ["rag", "prompt"],
];

export const experiences = [
  {
    period: "2025",
    title: "AI Product Development",
    org: "Personal Projects",
    description:
      "Built production-grade AI applications including RAG systems, legal assistants, and content engines serving real use cases.",
    tags: ["AI", "LLMs", "Full Stack"],
  },
  {
    period: "2024 — 2025",
    title: "Hackathon Competitor",
    org: "Multiple Hackathons",
    description:
      "Participated in national and international hackathons, building MVPs under 48-hour deadlines with cross-functional teams.",
    tags: ["Hackathons", "Rapid Prototyping", "Team Leadership"],
  },
  {
    period: "2024 — Present",
    title: "Startup Builder",
    org: "Independent",
    description:
      "Conceptualized and developed startup solutions including VeriFresh, focusing on product-market fit and technical architecture.",
    tags: ["Startup", "Product", "Blockchain"],
  },
  {
    period: "2023 — Present",
    title: "Technical Leadership",
    org: "College & Community",
    description:
      "Led technical initiatives, mentored peers on AI/ML concepts, and organized coding workshops and study groups.",
    tags: ["Leadership", "Mentorship", "Community"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#credibility", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];
