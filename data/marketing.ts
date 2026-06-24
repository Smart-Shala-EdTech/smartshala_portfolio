import {
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  DatabaseZap,
  Download,
  Figma,
  Headphones,
  History,
  Layers3,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TestTube2,
  TimerReset,
  UsersRound,
  Workflow,
} from "lucide-react";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#featured-projects" },
  { label: "FAQ", href: "#faq" },
];

export const trustBadges = [
  "End-to-End Development",
  "AI-Powered Solutions",
  "Scalable Architecture",
  "Long-Term Support",
];

export const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native-feeling mobile apps for founders and teams who need reliable launch velocity without losing product polish.",
    benefits: ["Product-ready flows", "Store launch support", "Maintainable codebases"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Operational tools, SaaS products, CRM systems, and web apps shaped around the exact way your business works.",
    benefits: ["Clear ownership", "Role-based workflows", "Built for iteration"],
  },
  {
    icon: DatabaseZap,
    title: "Backend & API Development",
    description:
      "Secure APIs, data models, integrations, and backend foundations that keep your product dependable as traffic grows.",
    benefits: ["Clean API contracts", "Database planning", "Integration-ready"],
  },
  {
    icon: CloudCog,
    title: "Cloud Deployment & Automation",
    description:
      "Deployment pipelines, infrastructure setup, and release automation that make shipping feel calm and repeatable.",
    benefits: ["Stable releases", "Environment parity", "Monitoring-ready"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Automation",
    description:
      "AI agents, RAG systems, workflow automation, and LLM features embedded where they solve real business problems.",
    benefits: ["Practical AI use cases", "Human review loops", "Measurable outcomes"],
  },
];

export const whyChoose = [
  {
    icon: Layers3,
    title: "End-to-End Product Development",
    description: "From idea to deployment, one team, zero handoffs.",
  },
  {
    icon: TimerReset,
    title: "Fast and Transparent Delivery",
    description: "Clear milestones and weekly updates, no black boxes.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable Architecture",
    description: "Built to handle growth without costly rewrites.",
  },
  {
    icon: Sparkles,
    title: "AI Integration Expertise",
    description: "Modern AI capabilities embedded where they add real value.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description: "Active maintenance and iteration after launch.",
  },
];

export const processSteps = [
  {
    icon: MessagesSquare,
    title: "Discovery Call",
    description: "We map the business goal, users, risks, and first useful release.",
  },
  {
    icon: CheckCircle2,
    title: "Requirement Analysis",
    description: "The scope becomes a practical feature plan with dependencies called out.",
  },
  {
    icon: Figma,
    title: "Proposal & Timeline",
    description: "You get clear milestones, pricing assumptions, and delivery checkpoints.",
  },
  {
    icon: Layers3,
    title: "UI/UX Design",
    description: "Core screens and user flows are designed before heavy development starts.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "We build in focused cycles with weekly demos and visible progress.",
  },
  {
    icon: TestTube2,
    title: "Testing",
    description: "Features are checked across devices, edge cases, and expected workflows.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "The release is shipped with production settings, monitoring, and rollback paths.",
  },
  {
    icon: Workflow,
    title: "Maintenance & Support",
    description: "After launch, we keep improving performance, reliability, and product fit.",
  },
];

export const featuredProject = {
  name: "Vidisha Detergent",
  category: "Dealer Management Platform",
  description:
    "Developed a centralized dealer management platform integrated with Tally, enabling dealers to securely access voucher details, view transaction history, and download receipts anytime from anywhere.",
  client: "Vidisha Detergent",
  industry: "FMCG & Distribution",
  overview:
    "SmartShala developed a digital dealer management platform that streamlines access to business records and transaction information. The solution enables dealers to access important voucher details, monitor transaction history, and download receipts through a secure and user-friendly system.",
  challenge:
    "Managing dealer records and sharing transaction details manually can create delays and inefficiencies. Dealers required a reliable way to access voucher information and business records without depending on manual communication.",
  solution:
    "We designed and developed a centralized platform integrated with Tally that provides dealers with secure access to business data through a modern digital experience.",
  keyFeatures: [
    { icon: ShieldCheck, label: "Secure Dealer Authentication" },
    { icon: Workflow, label: "Tally Integration" },
    { icon: History, label: "Voucher & Transaction History" },
    { icon: Download, label: "Downloadable Receipts" },
    { icon: UsersRound, label: "Centralized Dealer Dashboard" },
    { icon: Smartphone, label: "Mobile-Friendly User Experience" },
  ],
  impact: [
    "Improved accessibility for dealers across locations",
    "Reduced manual effort in sharing business records",
    "Faster access to voucher and transaction information",
    "Enhanced transparency between the company and dealer network",
    "Digitized dealer operations through a centralized platform",
  ],
  servicesProvided: [
    "Mobile Application Development",
    "Backend & API Development",
    "Custom Software Development",
    "Tally Integration",
    "Cloud Deployment & Automation",
  ],
};

export const testimonials = [
  {
    quote:
      "SmartShala translated a messy operations problem into a product our team actually enjoys using every day.",
    name: "Udit Kumar Singh",
    role: "Co-founder and CEO",
    company: "SmartShala",
  },
  {
    quote:
      "The weekly demos were crisp, honest, and useful. We always knew what was ready and what needed a decision.",
    name: "Prashant Singh",
    role: "Co-founder and CTO",
    company: "SmartShala",
  },
  {
    quote:
      "Their AI recommendations were practical. No theatrics, just automation that removed hours of repeated work.",
    name: "Ved Prakash Sahu",
    role: "Co-founder and CMO",
    company: "SmartShala",
  },
  {
    quote:
      "Good software should feel simple on the outside and dependable underneath. That is the standard we build toward.",
    name: "Deepanshu Chauhan",
    role: "Co-founder and Tech lead",
    company: "SmartShala",
  },
];

export const faqs = [
  {
    question: "How much does a project cost?",
    answer:
      "Most projects depend on scope, integrations, and launch timeline. After the discovery call, we share a clear estimate with milestones and assumptions.",
  },
  {
    question: "How long does development take?",
    answer:
      "Focused MVPs often take 4 to 8 weeks. Larger platforms usually move in phased releases so value reaches users earlier.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We provide maintenance, monitoring support, performance improvements, and product iteration after the first release.",
  },
  {
    question: "Can AI be integrated into existing software?",
    answer:
      "Yes. We can add AI workflows to existing systems through APIs, retrieval pipelines, automations, and guarded human-review flows.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Start with the consultation form. We will reply within 24 hours with a few useful questions and a suggested next step.",
  },
];
