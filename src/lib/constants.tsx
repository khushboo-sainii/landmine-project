import { Globe, Smartphone, Palette, Cloud, Lock, BotIcon, Code2, Server, Cpu, ShieldCheck } from "lucide-react";

// ============================================================
//  SITE CONFIG — Company basic info
// ============================================================
export const SITE_CONFIG = {
  name: "Landmine Soft",
  tagline1: "Reinvent",
  tagline2: " What's Possible",
  description:
    "Landmine Soft is a technology company that helps startups, growing businesses, and enterprises build their digital core — smarter, faster, and future-ready.",
  email: "contact@landminesoft.com",
  careersEmail: "careers@landminesoft.com",
  supportEmail: "support@landminesoft.com",
  phone: "+91-90590-24-653",
  whatsapp: "+919059024653",
  address: "Hyderabad, Telangana 500081, India",
  linkedin: "https://linkedin.com/company/landminesoft",
  twitter: "https://x.com/landminesoft",
  github: "https://github.com/landminesoft",
  facebook: "https://facebook.com/landminesoft",
  instagram: "https://instagram.com/landminesoft",
  workingHours: "Monday – Saturday, 9:00 AM – 6:30 PM IST",
};


// ============================================================
//  NAV LINKS
// ============================================================
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

// ============================================================
//  FOOTER LINKS
// ============================================================
export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "Cloud Solutions", href: "/services" },
    { label: "AI & Automation", href: "/services" },
    { label: "Cybersecurity", href: "/services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

// ============================================================
//  STATS — used on home + careers + about
// ============================================================
export const STATS = [
  { value: "50", label: "Projects Delivered" },
  { value: "30", label: "Happy Clients" },
  { value: "5", label: "Years of Excellence" },
  { value: "15", label: "Team Members" },
];

// ============================================================
//  SERVICES
// ============================================================
export const SERVICES_WITH_ICONS = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Modern, fast, and scalable web applications built with cutting-edge technologies like React, Next.js and Node.js.",
    icon: Globe,
    iconBg: "bg-[#EBF0FF]",
    iconColor: "#0A2463",
  },
  {
    id: 2,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications using Flutter and React Native that deliver seamless user experiences.",
    icon: Smartphone,
    iconBg: "bg-[#E0F7FB]",
    iconColor: "#0096C7",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs backed by user research that convert visitors into loyal customers.",
    icon: Palette,
    iconBg: "bg-[#EBF0FF]",
    iconColor: "#1A3A8F",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description:
      "Modern infrastructure that scales with your business — AWS, Azure, GCP with full DevOps support.",
    icon: Cloud,
    iconBg: "bg-[#E0F7FB]",
    iconColor: "#00B4D8",
  },
  {
    id: 5,
    title: "AI & Automation",
    description:
      "Intelligent systems — chatbots, predictive analytics, LLM integrations — that reduce manual effort and unlock new business value.",
    icon: BotIcon,
    iconBg: "bg-[#EBF0FF]",
    iconColor: "#0A2463",
  },
  {
    id: 6,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with enterprise-grade security audits, compliance frameworks, and monitoring.",
    icon: Lock,
    iconBg: "bg-[#FFF8E7]",
    iconColor: "#D97706",
  },
];

// ──────────────────────────────────────────────
//  HOME PAGE DATA
// ──────────────────────────────────────────────

export const SERVICE_SECTION_CONTENT = {
  label: "WHAT WE DO — SERVICES PILLARS",
  title: "Technology That Moves Business Forward",
  description:
    "From strategy to execution — we deliver end-to-end technology solutions that drive growth, efficiency, and resilience.",
};

export const FEATURED_SECTION_CONTENT = {
  label: "Featured Work",
  title: "Proof in Every Project",
  description: "Real solutions. Real results. Here's a glimpse of what we've built.",
};

export const PROJECTS = [
  {
    tag: "Healthcare",
    name: "Healthcare Appointment Platform",
    tech: ["React", "Node.js", "PostgreSQL"],
    outcome: "Reduced patient wait times by 40% with an automated booking system.",
    accent: "#00B4D8",
    accentBg: "#E0F7FB",
    num: "01",
  },
  {
    tag: "Retail",
    name: "Multi-Vendor eCommerce Platform",
    tech: ["Flutter", "Firebase", "Razorpay API"],
    outcome: "Onboarded 200+ vendors in 3 months with zero downtime.",
    accent: "#0A2463",
    accentBg: "#EBF0FF",
    num: "02",
  },
  {
    tag: "Corporate SaaS",
    name: "Employee Management Dashboard",
    tech: ["Vue.js", "Django", "AWS"],
    outcome: "Saved 15 hours/week per HR team through automation.",
    accent: "#00A878",
    accentBg: "#E6F7F3",
    num: "03",
  },
];

export const WHY_SECTION_CONTENT = {
  label: "WHY CHOOSE US",
  title: "Why Leading Businesses",
  description:
    "We don't just write code — we solve business problems with technology that actually works.",
};

export const WHY_ITEMS = [
  { icon: "⚡", title: "Speed Without Compromise", desc: "We deliver MVPs in 4–6 weeks and full products in months — not years." },
  { icon: "🎯", title: "Domain-First Thinking", desc: "We understand your industry before writing a single line of code." },
  { icon: "🔄", title: "Agile at Our Core", desc: "Weekly sprints, transparent updates, and zero surprises in delivery." },
  { icon: "🤝", title: "Long-Term Partnership", desc: "We stay with you post-launch — support, enhancements, scaling." },
];

export const TESTIMONIALS_DESCRIPTION = {
  label: "Client Testimonials",
  title: "What Our Clients Say",
};

export const TESTIMONIALS = [
  {
    quote: "Landminesoft delivered our platform on time and beyond expectations. The team's technical depth and communication made all the difference.",
    author: "Founder",
    company: "HealthTech Startup, Gurugram",
    initials: "HT",
    dark: true,
  },
  {
    quote: "We approached them with a vague idea and they turned it into a full product that our customers love. Highly recommended.",
    author: "Co-Founder",
    company: "eCommerce Platform, Delhi NCR",
    initials: "EC",
    dark: false,
  },
];

export const CTA_CONTENT = {
  title1: "Ready to Reinvent",
  title2: "Your Business?",
  description: "Let's talk about what we can build together.",
  ctaText1: "Start a Conversation",
  ctaLink1: "/contact",
  ctaText2: "View Our Services",
  ctaLink2: "/services",
};

// ──────────────────────────────────────────────
//  SERVICES PAGE DATA
// ──────────────────────────────────────────────

export const SERVICES_PAGE_HERO = {
  label: "WHAT WE BUILD",
  title: "Technology Solutions.",
  titleAccent: "Tailored for You.",
  description:
    "We combine deep technical expertise with domain knowledge to deliver solutions that are not just functional — but transformative.",
  cta1: "Explore Services",
  cta2: "Talk to an Expert",
};

export const SERVICES_DETAIL = [
  {
    id: 1,
    icon: Code2,
    iconBg: "#EBF0FF",
    iconColor: "#0A2463",
    tag: "Development",
    title: "Custom Software Development",
    overview:
      "Every business is unique. Off-the-shelf software can only take you so far. We build custom solutions designed around your specific workflows, goals, and growth plans.",
    deliverables: [
      "Enterprise applications — scalable, secure, and performance-optimized",
      "SaaS product development — from idea to market-ready platform",
      "Legacy system modernization — migrate, rebuild, and future-proof",
      "API development and third-party integrations",
      "Microservices architecture for high-scale applications",
    ],
    stack: [
      { label: "Backend", value: "Node.js, Python (Django/FastAPI), PHP Laravel" },
      { label: "Frontend", value: "React.js, Vue.js, Angular, Next.js" },
      { label: "Database", value: "PostgreSQL, MySQL, MongoDB, Redis" },
    ],
    accent: "#0A2463",
    accentBg: "#EBF0FF",
  },
  {
    id: 2,
    icon: Smartphone,
    iconBg: "#E0F7FB",
    iconColor: "#0096C7",
    tag: "Mobile & Web",
    title: "Web & Mobile App Development",
    overview:
      "Your users are on every screen — web, iOS, Android. We build high-performance applications that deliver seamless experiences across all platforms.",
    deliverables: [
      "Progressive Web Apps (PWA) — fast, offline-capable, installable",
      "Native iOS and Android applications",
      "Cross-platform apps using Flutter and React Native",
      "E-commerce platforms with payment gateway integration",
      "Real-time features — chat, notifications, live tracking",
    ],
    stack: [
      { label: "Mobile", value: "Flutter, React Native, Swift, Kotlin" },
      { label: "Web", value: "React.js, Next.js, Tailwind CSS" },
      { label: "Payments", value: "Razorpay, Stripe, PayU, Cashfree" },
    ],
    accent: "#0096C7",
    accentBg: "#E0F7FB",
  },
  {
    id: 3,
    icon: Cloud,
    iconBg: "#E6F7F3",
    iconColor: "#00A878",
    tag: "Cloud & DevOps",
    title: "Cloud Solutions & DevOps",
    overview:
      "Modern businesses run on modern infrastructure. We help you migrate to the cloud, optimize operations, and build automated delivery pipelines that eliminate downtime.",
    deliverables: [
      "Cloud migration strategy and execution — AWS, Azure, Google Cloud",
      "Infrastructure as Code (IaC) with Terraform and AWS CloudFormation",
      "CI/CD pipeline setup — GitHub Actions, Jenkins, GitLab CI",
      "Container orchestration with Docker and Kubernetes",
      "24/7 monitoring, alerting, and incident response",
    ],
    stack: [
      { label: "Cloud", value: "AWS, Microsoft Azure, Google Cloud" },
      { label: "DevOps", value: "Docker, Kubernetes, Terraform" },
      { label: "CI/CD", value: "GitHub Actions, Jenkins, GitLab CI" },
    ],
    accent: "#00A878",
    accentBg: "#E6F7F3",
  },
  {
    id: 4,
    icon: Palette,
    iconBg: "#F3E8FF",
    iconColor: "#7C3AED",
    tag: "Design",
    title: "UI/UX Design",
    overview:
      "Great software is software people actually want to use. Our design team creates interfaces that are intuitive, beautiful, and conversion-optimized — backed by research, not guesswork.",
    deliverables: [
      "User research and persona development",
      "Information architecture and user flow mapping",
      "Wireframing and interactive prototyping",
      "High-fidelity UI design with brand-consistent visual language",
      "Usability testing and design iteration",
    ],
    stack: [
      { label: "Design", value: "Figma, Adobe XD" },
      { label: "Testing", value: "Maze, Hotjar" },
      { label: "Animation", value: "Lottie, Framer" },
    ],
    accent: "#7C3AED",
    accentBg: "#F3E8FF",
  },
  {
    id: 5,
    icon: BotIcon,
    iconBg: "#EBF0FF",
    iconColor: "#0A2463",
    tag: "AI & ML",
    title: "AI & Intelligent Automation",
    overview:
      "Artificial Intelligence is no longer optional — it's a competitive advantage. We help businesses integrate AI to reduce costs, improve decisions, and create new revenue streams.",
    deliverables: [
      "AI-powered chatbots and virtual assistants",
      "Recommendation engines and personalization systems",
      "Predictive analytics and business intelligence dashboards",
      "Process automation using AI/ML and RPA",
      "LLM integration — OpenAI, Gemini, Anthropic API",
    ],
    stack: [
      { label: "ML", value: "Python, TensorFlow, PyTorch, Scikit-learn" },
      { label: "LLM", value: "LangChain, OpenAI API, Anthropic" },
      { label: "Data", value: "Apache Spark, Pandas" },
    ],
    accent: "#0A2463",
    accentBg: "#EBF0FF",
  },
  {
    id: 6,
    icon: ShieldCheck,
    iconBg: "#FFF8E7",
    iconColor: "#D97706",
    tag: "Security",
    title: "Cybersecurity & Consulting",
    overview:
      "Technology decisions have long-lasting consequences. Our experts work as your trusted advisors — helping you secure your systems and choose the right stack from Day 1.",
    deliverables: [
      "Technology assessment and architecture review",
      "Digital transformation roadmapping",
      "CTO-as-a-service for early-stage startups",
      "Code and security audits",
      "Penetration testing and compliance frameworks",
    ],
    stack: [
      { label: "Security", value: "OWASP, ISO 27001, SOC 2" },
      { label: "Audit", value: "Burp Suite, Nessus, SAST/DAST" },
      { label: "Compliance", value: "GDPR, HIPAA, PCI-DSS" },
    ],
    accent: "#D97706",
    accentBg: "#FFF8E7",
  },
];

export const PROCESS_STEPS = [
  { num: "01", title: "Discover", desc: "Deep-dive into your business, users, and goals. Define scope, requirements, and success metrics." },
  { num: "02", title: "Design", desc: "Architect the solution — wireframes, system design, tech stack selection, sprint planning." },
  { num: "03", title: "Build", desc: "Agile sprints with weekly demos. Continuous testing. Full transparency throughout." },
  { num: "04", title: "Deploy", desc: "Cloud deployment, DevOps setup, performance testing, and go-live support." },
  { num: "05", title: "Scale", desc: "Post-launch support, feature enhancements, performance optimization, and long-term partnership." },
];

export const TECH_STACK = [
  { category: "Frontend", items: "React.js, Vue.js, Angular, Next.js, Tailwind CSS" },
  { category: "Backend", items: "Node.js, Django, Laravel, FastAPI, Spring Boot" },
  { category: "Mobile", items: "Flutter, React Native, Swift, Kotlin" },
  { category: "Cloud", items: "AWS, Azure, GCP, Docker, Kubernetes" },
  { category: "Database", items: "PostgreSQL, MySQL, MongoDB, Redis, Firebase" },
  { category: "AI/ML", items: "Python, TensorFlow, PyTorch, LangChain, OpenAI API" },
];

export const INDUSTRIES = [
  { icon: "🏥", name: "Healthcare & MedTech", desc: "Patient portals, telemedicine, hospital management systems" },
  { icon: "🛍️", name: "Retail & eCommerce", desc: "Inventory, POS, customer apps, marketplace platforms" },
  { icon: "🏦", name: "Finance & FinTech", desc: "Secure payment systems, loan platforms, wealth dashboards" },
  { icon: "🎓", name: "EdTech & Learning", desc: "LMS platforms, virtual classrooms, assessment tools" },
  { icon: "🏭", name: "Manufacturing", desc: "ERP systems, IoT integration, production tracking" },
  { icon: "🚀", name: "Startups & SMEs", desc: "MVP development, product-market fit solutions, rapid prototyping" },
];

// ──────────────────────────────────────────────
//  ABOUT PAGE DATA
// ──────────────────────────────────────────────

export const ABOUT_HERO = {
  label: "WHO WE ARE",
  title: "We Are",
  titleAccent: "Landmine Soft.",
  description:
    "A technology company built on the belief that great software should be accessible to every business — not just the biggest ones.",
  cta1: "Meet Our Team",
  cta2: "See Our Work",
};

export const ABOUT_STORY = {
  label: "OUR STORY",
  title: "How It All Started",
  paragraphs: [
    "Landminesoft was founded with a simple but powerful conviction: that businesses of every size deserve enterprise-grade technology solutions.",
    "We started as a small, focused team in Hyderabad, Telangana — with a shared obsession with building things that work. What we lacked in size, we made up for in depth. Every project was treated as if it were our own business on the line.",
    "Today, we've grown into a full-service technology company — serving clients across healthcare, retail, finance, education, and more. But we've never lost that founding ethos: move fast, communicate honestly, and build with precision.",
  ],
};

export const MISSION_VISION = [
  {
    icon: "🎯",
    label: "OUR MISSION",
    title: "Mission",
    text: "To empower businesses with technology solutions that are simple, scalable, and built to last — turning complexity into competitive advantage.",
    accent: "#0A2463",
    accentBg: "#EBF0FF",
  },
  {
    icon: "🔭",
    label: "OUR VISION",
    title: "Vision",
    text: "To be the most trusted technology partner for growing businesses across India and the world — known for quality, reliability, and impact.",
    accent: "#00B4D8",
    accentBg: "#E0F7FB",
  },
];

export const CORE_VALUES = [
  { icon: "🎯", title: "Precision Over Volume", desc: "We'd rather do fewer things exceptionally well than many things average. Every deliverable is something we're proud to put our name on." },
  { icon: "🤝", title: "Client Success is Our Success", desc: "We don't clock out when the code ships. We stay invested in your outcomes, your growth, and your next challenge." },
  { icon: "💡", title: "Continuous Innovation", desc: "We keep learning — new tools, new frameworks, new approaches — so you never have to worry about being left behind." },
];

export const TEAM = [
  { id: 1, name: "Arjun Sharma", role: "CEO & Founder", image: "/about/arjun.jpg", linkedin: "#" },
  { id: 2, name: "Priya Verma", role: "CTO & Co-Founder", image: "/about/priya.jpg", linkedin: "#" },
  { id: 3, name: "Rahul Singh", role: "Head of Design", image: "/about/rahul.jpg", linkedin: "#" },
  { id: 4, name: "Neha Gupta", role: "Head of Delivery", image: "/about/neha.jpg", linkedin: "#" },
];

export const DIFFERENTIATORS = [
  { feature: "Small agency feel", detail: "With enterprise-level execution and processes" },
  { feature: "Dedicated teams", detail: "Not freelancers — real committed engineers" },
  { feature: "Flexible pricing", detail: "Fixed-price or T&M — fits your budget & risk" },
  { feature: "Full-cycle", detail: "From discovery to deployment to post-launch support" },
  { feature: "IP ownership to you", detail: "All code, all IP — yours. No lock-ins." },
  { feature: "Zero surprise billing", detail: "Detailed estimates, weekly progress, transparent invoicing" },
];

export const COMPANY_FACTS = [
  { label: "Founded", value: "2019" },
  { label: "Headquarters", value: "Hyderabad, Telangana 500081, India" },
  { label: "Team Size", value: "15–30 professionals" },
  { label: "Projects Delivered", value: "50+ across India & internationally" },
  { label: "Industries Served", value: "Healthcare, Retail, Finance, EdTech, SaaS" },
  { label: "Working Hours", value: "Mon–Sat, 9:00 AM – 6:30 PM IST" },
];

export const CULTURE_ITEMS = [
  { icon: "📚", title: "Continuous Learning", desc: "We sponsor certifications, attend tech conferences, and run internal knowledge sessions every week." },
  { icon: "🚀", title: "Ownership Culture", desc: "Every team member owns their work — from requirement to release. No hand-holding, just trust and accountability." },
  { icon: "⚖️", title: "Work-Life Balance", desc: "Flexible hours. Respect for weekends. We work smart, not just long." },
  { icon: "🎉", title: "We Celebrate Together", desc: "Project launches, birthdays, milestones — we celebrate the wins, big and small." },
];

// ──────────────────────────────────────────────
//  CAREERS PAGE DATA
// ──────────────────────────────────────────────

export const CAREERS_HERO = {
  label: "WE'RE HIRING — JOIN THE TEAM",
  title: "Reinvent Your Career",
  titleAccent: `at Landmine Soft`,
  description:
    "Build products that matter. Work with people who push you. Grow faster than you thought possible. This isn't just a job — it's your launchpad.",
  cta1: "View Open Roles",
  cta2: "Meet the Team",
  badge: "15+ Open Positions Right Now",
};

export const WHY_JOIN_CONTENT = {
  label: "WHY LANDMINE SOFT",
  title: "More Than a Workplace.",
  titleAccent: "A Career With Purpose.",
  description:
    "We believe the best work happens when talented people are given real ownership, genuine respect, and the freedom to grow.",
};

export const WHY_JOIN_ITEMS = [
  { icon: "🚀", title: "Impact from Day 1", desc: "No bench-warming. You'll own real features and ship real code in your first week. Your work reaches actual users immediately." },
  { icon: "📈", title: "Clear Growth Path", desc: "Junior → Senior → Lead — structured mentoring, skill development plans, and growth-linked increments. Not just promises." },
  { icon: "🧠", title: "Learn From the Best", desc: "Work alongside engineers who've built enterprise systems across multiple industries. The learning curve here is steep — in the best way." },
];

export const HIRING_STEPS = [
  { num: "01", title: "Apply Online", desc: "Send your resume or LinkedIn profile. Takes 2 minutes." },
  { num: "02", title: "Initial Call", desc: "A 30-min conversation — we get to know each other." },
  { num: "03", title: "Technical Round", desc: "Real problems, no tricks. Just honest skill assessment." },
  { num: "04", title: "Culture Fit", desc: "Meet the team. Ask us anything. Two-way evaluation." },
  { num: "05", title: "Offer Letter", desc: "We move fast. Offer within 48 hours of final round." },
];

export const OPEN_ROLES = [
  { title: "Full Stack Developer (React + Node.js)", location: "Hyderabad / Hybrid", exp: "2–4 Years", type: "Full-time", dept: "Engineering" },
  { title: "DevOps Engineer", location: "Remote", exp: "3+ Years", type: "Full-time", dept: "Engineering" },
  { title: "UI/UX Designer", location: "Hyderabad / Hybrid", exp: "1–4 Years", type: "Full-time", dept: "Design" },
  { title: "Project Manager / Scrum Master", location: "Hyderabad / Hybrid", exp: "3–6 Years", type: "Full-time", dept: "Business" },
  { title: "Software Development Intern", location: "Hyderabad (On-site)", exp: "3–6 Months", type: "Paid Stipend", dept: "Internship" },
];

export const DEPT_BADGE: Record<string, { bg: string; color: string; border: string }> = {
  Engineering: { bg: "#E0F7FA", color: "#0097A7", border: "#80DEEA" },
  Design: { bg: "#F3E8FF", color: "#7C3AED", border: "#C4B5FD" },
  Business: { bg: "#FEF9C3", color: "#B45309", border: "#FDE68A" },
  Internship: { bg: "#DCFCE7", color: "#15803D", border: "#86EFAC" },
};


export const CAREERS_TESTI = [
  { initials: "RM", name: "Rahul M.", role: "Senior Full Stack Developer · 2 years", quote: "Joining Landminesoft was the best career decision I've made. The learning curve is steep — in the best possible way. I've grown more in 18 months here than in 3 years at my previous job.", dark: false },
  { initials: "PS", name: "Priya S.", role: "Senior UX Designer · 2.5 years", quote: "The team treats you like a professional from Day 1. No micromanagement — just trust, ownership, and real accountability. I came as a junior designer and now lead UX for our biggest clients.", dark: false },
  { initials: "AK", name: "Aryan K.", role: "Backend Engineer · 1.5 years", quote: "What makes Landminesoft different is how much they invest in you — not just in skills, but as a person. The culture here is rare. You're not a resource, you're a contributor.", dark: false },
  { initials: "NV", name: "Neha V.", role: "Junior Developer (ex-Intern) · 1 year", quote: "I started as an intern and received a full-time offer within 3 months. The mentors here are genuinely invested in your growth. If you're hardworking and curious, this is the right place.", dark: false },
];

export const MARQUEE_SKILLS = [
  "Full Stack Development", "Cloud Engineering", "UI/UX Design",
  "AI & Automation", "Mobile Development", "DevOps",
  "Product Management", "Business Development",
];

// ──────────────────────────────────────────────
//  CONTACT PAGE DATA
// ──────────────────────────────────────────────

export const CONTACT_HERO = {
  label: "GET IN TOUCH",
  title: "Let's Build Something",
  titleAccent: "Great Together.",
  description:
    "Whether you have a project in mind, a problem to solve, or just a question — we're ready to listen. Reach out and we'll get back to you within 24 hours.",
};

export const CONTACT_INFO = [
  {
    icon: "📍",
    label: "Visit Our Office",
    lines: ["Hyderabad, Telangana 500081, India"],
    link: "https://maps.google.com/?q=Landmine+Soft+Hyderabad",
    linkText: "Get Directions →",
  },
  {
    icon: "📞",
    label: "Call Us",
    lines: ["+91-90590-24-653", "Mon–Sat: 9:00 AM – 6:30 PM IST"],
    link: "tel:+919059024653",
    linkText: "Call Now →",
  },
  {
    icon: "📧",
    label: "Email Us",
    lines: ["contact@landminesoft.com", "support@landminesoft.com"],
    link: "mailto:contact@landminesoft.com",
    linkText: "Send Email →",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    lines: ["+91-90590-24-653", "Typically reply within 2 hours"],
    link: "https://wa.me/919059024653",
    linkText: "Message Us →",
  },
];

export const RESPONSE_TIMES = [
  { channel: "📧 Email Inquiries", time: "Within 24 business hours" },
  { channel: "📞 Phone Calls", time: "Mon–Sat, 9 AM – 6:30 PM IST" },
  { channel: "💬 WhatsApp", time: "2–4 hours during business hours" },
  { channel: "🚨 Urgent Support", time: "4-hour SLA for existing clients" },
];

export const CONTACT_FAQ = [
  { q: "How long does a typical project take?", a: "MVPs: 4–8 weeks. Full products: 3–6 months. Depends on scope. We give detailed timelines after discovery." },
  { q: "Do you work with international clients?", a: "Yes. We serve clients across India, the US, UAE, the UK, and Southeast Asia." },
  { q: "What is your pricing model?", a: "We offer fixed-price, time & material, and dedicated team models. We'll recommend the best fit for you." },
  { q: "Do you sign NDAs?", a: "Absolutely. We sign mutual NDAs before any project discussion. Confidentiality is non-negotiable." },
  { q: "Who owns the code you build?", a: "You do. 100%. All IP, all code, all assets — transferred to you on final payment." },
];

export const CONTACT_FORM_OPTIONS = {
  inquiryTypes: ["General Inquiry", "Start a Project", "Careers", "Partnership", "Technical Support", "Other"],
  referralSources: ["Google", "LinkedIn", "Referral", "Social Media", "Event", "Other"],
};

// --------------------------------------------
//            FOOTER
// ---------------------------------------------

// ---------------- ICONS ----------------

export const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
  </svg>
);

export const TwitterIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);


// ---------------- SOCIAL LINKS ----------------

export const SOCIAL_LINKS = [
  { icon: LinkedInIcon, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: SITE_CONFIG.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: SITE_CONFIG.instagram, label: "Instagram" },
  { icon: TwitterIcon, href: SITE_CONFIG.twitter, label: "Twitter/X" },
];