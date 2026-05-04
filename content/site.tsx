import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Database,
  Eye,
  FileText,
  GraduationCap,
  Lock,
  Mail,
  Map,
  Monitor,
  Radar,
  Scale,
  School,
  Search,
  Shield,
  ShieldCheck,
  Siren,
  Users,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  whatItIs: string;
  audience: string;
  included: string[];
  deliverable: string;
  icon: LucideIcon;
};

export type MethodStep = {
  step: string;
  title: string;
  description: string;
  points: string[];
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/methodology", label: "Methodology" },
  { href: "/contact", label: "Contact" },
];

export const trustBadges: IconItem[] = [
  {
    title: "Authorized reviews only",
    description: "Every engagement begins with written approval and a defined scope.",
    icon: ShieldCheck,
  },
  {
    title: "Built for education",
    description: "Security work shaped around schools, staff, students, and public-facing systems.",
    icon: School,
  },
  {
    title: "Student-data aware",
    description: "Privacy, public exposure, and data handling are treated with extra care.",
    icon: Lock,
  },
  {
    title: "Clear reporting",
    description: "Evidence, severity, and practical next steps delivered in plain language.",
    icon: FileText,
  },
];

export const problemAreas: IconItem[] = [
  {
    title: "Public websites reveal more than expected",
    description:
      "Outdated plugins, forgotten files, and visible admin surfaces can create avoidable risk before anyone notices.",
    icon: Eye,
  },
  {
    title: "Student data moves across many surfaces",
    description:
      "Forms, portals, apps, and registration flows can expose personal information in small but serious ways.",
    icon: Database,
  },
  {
    title: "Staff accounts remain a common entry point",
    description:
      "Phishing, weak passwords, and missing multi-factor protections still lead many education incidents.",
    icon: Mail,
  },
  {
    title: "Young users need guided digital safety",
    description:
      "Students benefit from ethical, beginner-friendly cybersecurity education that improves habits without fear tactics.",
    icon: GraduationCap,
  },
];

export const services: Service[] = [
  {
    slug: "school-security-checkup",
    title: "School Security Checkup",
    summary:
      "A safe external review of a school’s public digital presence to identify visible security risks.",
    whatItIs:
      "A structured external review focused on what a school website, portal, or public-facing system may be exposing to outsiders.",
    audience:
      "Schools, private institutions, education centers, and small education platforms.",
    included: [
      "Website security basics",
      "HTTPS and SSL review",
      "Public exposure checks",
      "Login and admin surface review",
      "Basic email and account security guidance",
      "Clear risk summary",
    ],
    deliverable:
      "A professional report with findings, screenshots, severity levels, and recommendations.",
    icon: Shield,
  },
  {
    slug: "student-data-protection-review",
    title: "Student Data Protection Review",
    summary:
      "A focused review of how student-related data may be exposed, collected, or protected across public-facing systems.",
    whatItIs:
      "A student-data-focused review that looks at visible handling risks across websites, forms, portals, apps, and registration journeys.",
    audience:
      "Schools using websites, forms, portals, apps, or online registration systems.",
    included: [
      "Public data exposure review",
      "Form and file exposure checks",
      "Access control observations",
      "Privacy and safety recommendations",
    ],
    deliverable:
      "A student-data-focused risk report with practical improvement steps.",
    icon: Database,
  },
  {
    slug: "teacher-admin-cyber-awareness-training",
    title: "Teacher/Admin Cyber Awareness Training",
    summary:
      "Practical training that helps staff recognize phishing, weak passwords, unsafe links, and account takeover risks.",
    whatItIs:
      "Short, practical awareness training designed for the real workflows of teachers, administrators, and school support staff.",
    audience: "Teachers, school administrators, and education staff.",
    included: [
      "Phishing awareness",
      "Password and 2FA guidance",
      "Safe email habits",
      "Device and account safety basics",
      "Simple real-world examples",
    ],
    deliverable:
      "A short training session, awareness material, and a staff security checklist.",
    icon: Users,
  },
  {
    slug: "student-cybersecurity-workshops",
    title: "Student Cybersecurity Workshops",
    summary:
      "Hands-on beginner-friendly cybersecurity education for students, focused on ethics, safety, and practical learning.",
    whatItIs:
      "Interactive workshops that introduce cybersecurity with age-appropriate, ethical, and practical learning experiences.",
    audience: "Students, school clubs, and youth technology programs.",
    included: [
      "Cybersecurity basics",
      "CTF-style learning",
      "OSINT awareness",
      "Web security introduction",
      "Legal and ethical hacking principles",
    ],
    deliverable:
      "A workshop session, learning roadmap, and beginner practice resources.",
    icon: GraduationCap,
  },
  {
    slug: "secure-website-portal-guidance",
    title: "Secure Website & Portal Guidance",
    summary:
      "Guidance for schools building or maintaining websites, portals, or digital systems with security in mind.",
    whatItIs:
      "Practical implementation guidance for schools working with developers, agencies, or internal IT teams on digital platforms.",
    audience:
      "Schools working with developers, agencies, or internal IT staff.",
    included: [
      "Secure login recommendations",
      "Backup and update guidance",
      "Hosting and HTTPS advice",
      "Admin access protection",
      "Basic security checklist",
    ],
    deliverable: "A practical website security guidance document.",
    icon: Monitor,
  },
  {
    slug: "incident-preparation-guidance",
    title: "Incident Preparation Guidance",
    summary:
      "Basic preparation to help schools respond better if an account, website, or system is compromised.",
    whatItIs:
      "Simple readiness planning that helps education teams respond faster and more clearly if a website, account, or system issue occurs.",
    audience:
      "Schools and education businesses that want simple response planning.",
    included: [
      "Account recovery preparation",
      "Backup recommendations",
      "Emergency contact planning",
      "Basic incident checklist",
      "Communication guidance",
    ],
    deliverable:
      "A simple incident-readiness checklist and response plan.",
    icon: Siren,
  },
];

export const methodologySteps: MethodStep[] = [
  {
    step: "01",
    title: "Written authorization",
    description:
      "No review starts before the school or organization gives explicit written permission.",
    points: [
      "Authorization is documented before any work begins.",
      "The responsible contact and approved systems are identified up front.",
    ],
  },
  {
    step: "02",
    title: "Scope definition",
    description:
      "The review is limited to the domains, portals, and public assets that were agreed in advance.",
    points: [
      "Only approved systems are included.",
      "Testing boundaries are written clearly to avoid confusion.",
    ],
  },
  {
    step: "03",
    title: "Passive reconnaissance",
    description:
      "Publicly available information is reviewed first to understand the school’s visible exposure.",
    points: [
      "Public DNS, pages, headers, and linked assets are examined safely.",
      "No invasive activity is used during this stage.",
    ],
  },
  {
    step: "04",
    title: "Safe external checks",
    description:
      "Controlled external checks are used to identify visible weaknesses without disrupting service.",
    points: [
      "No destructive testing is performed.",
      "No attempts are made outside approved permissions.",
    ],
  },
  {
    step: "05",
    title: "Risk classification",
    description:
      "Findings are organized by severity, exposure, and practical impact on school operations or student safety.",
    points: [
      "Risks are prioritized in a usable format.",
      "Context is included so decision-makers can act quickly.",
    ],
  },
  {
    step: "06",
    title: "Professional report",
    description:
      "The school receives a clear report with evidence, screenshots, and recommended next steps.",
    points: [
      "Reports are written for non-technical and technical readers.",
      "Each finding includes proof and suggested remediation.",
    ],
  },
  {
    step: "07",
    title: "Remediation guidance",
    description:
      "Recommendations are translated into practical actions for school leadership, IT teams, or vendors.",
    points: [
      "Prioritized fixes help teams focus on what matters first.",
      "Guidance avoids aggressive jargon and vague advice.",
    ],
  },
  {
    step: "08",
    title: "Optional retest",
    description:
      "If requested, a follow-up review can confirm whether agreed remediation steps were completed successfully.",
    points: [
      "Retests are limited to the original findings and scope.",
      "The goal is confirmation, not additional unscheduled testing.",
    ],
  },
];

export const whyRedSec: IconItem[] = [
  {
    title: "School-context security",
    description:
      "Recommendations are framed for school directors, internal IT, vendors, and staff who need to act on them.",
    icon: Compass,
  },
  {
    title: "Rooted in Morocco and North Africa",
    description:
      "A regional perspective informs the work, while the methodology follows broadly applicable security hygiene principles.",
    icon: Map,
  },
  {
    title: "Ethical and scoped by design",
    description:
      "Work stays authorized, bounded, and non-destructive, with no access attempts outside permission.",
    icon: Scale,
  },
  {
    title: "Practical learning outcomes",
    description:
      "The goal is not only to identify risk, but to help staff and students build safer habits afterwards.",
    icon: Radar,
  },
];

export const securityPrinciples: IconItem[] = [
  {
    title: "Authorization first",
    description: "Every security activity begins with written approval and clear responsibility.",
    icon: ShieldCheck,
  },
  {
    title: "Minimal disruption",
    description: "Checks are designed to avoid affecting teaching, portals, or school operations.",
    icon: School,
  },
  {
    title: "Evidence over assumptions",
    description: "Findings are supported with observable proof, screenshots, and context.",
    icon: Search,
  },
  {
    title: "Plain-language guidance",
    description: "Reports explain what matters, why it matters, and how to improve it.",
    icon: FileText,
  },
  {
    title: "Student safety awareness",
    description: "Student-related systems and data handling are treated as a priority concern.",
    icon: Lock,
  },
];

export const aboutPillars: IconItem[] = [
  {
    title: "Education protection",
    description:
      "RedSec Edu exists to help schools improve digital safety around websites, portals, accounts, and public exposure.",
    icon: School,
  },
  {
    title: "Honest scope",
    description:
      "The initiative does not overclaim capabilities or imply blanket offensive testing. Work stays safe and clearly defined.",
    icon: Scale,
  },
  {
    title: "Clear reports",
    description:
      "Findings are delivered in readable, professional language so schools can act without guesswork.",
    icon: FileText,
  },
  {
    title: "Student-focused learning",
    description:
      "Cybersecurity education is presented ethically, practically, and with long-term habit building in mind.",
    icon: GraduationCap,
  },
];

export const methodologyGuardrails = [
  "All testing is authorized.",
  "All work is scoped.",
  "No destructive testing is performed.",
  "No disruption to school services is intended.",
  "No access attempts are made outside permission.",
  "Student data protection is treated seriously.",
];

export const reportHighlights = [
  "Executive summary for school leadership",
  "Evidence-backed findings with screenshots",
  "Severity ratings and remediation priority",
  "Plain-language recommendations for the right stakeholders",
];

export const serviceOptions = services.map((service) => service.title);

export const homeMethodPreview = methodologySteps.slice(0, 4);
