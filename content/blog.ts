export type BlogCategory = {
  slug: string;
  title: string;
  description: string;
};

export type BlogTag = {
  slug: string;
  title: string;
  description: string;
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: {
    title: string;
    body: string;
  };
};

type RawBlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  categorySlug: string;
  tagSlugs: string[];
  publishedAt: string;
  updatedAt: string;
  keyTakeaways: string[];
  introduction: string[];
  sections: BlogSection[];
  faq: BlogFaqItem[];
  relatedPostSlugs: string[];
  relatedServiceSlugs: string[];
};

export type BlogPostWithComputed = Omit<RawBlogPost, "categorySlug" | "tagSlugs"> & {
  category: BlogCategory;
  tags: BlogTag[];
  readingTimeMinutes: number;
  readingTimeText: string;
  wordCount: number;
  publishedLabel: string;
  updatedLabel: string;
};

const blogCategories: BlogCategory[] = [
  {
    slug: "school-cybersecurity",
    title: "School Cybersecurity",
    description:
      "Strategy, governance, and practical protection for schools, academies, and education institutions.",
  },
  {
    slug: "website-security",
    title: "Website Security",
    description:
      "Public-facing risks, hardening priorities, and safer maintenance patterns for school websites and portals.",
  },
  {
    slug: "cyber-awareness",
    title: "Cyber Awareness",
    description:
      "Training, habits, and communication patterns that improve digital safety for students and staff.",
  },
];

const blogTags: BlogTag[] = [
  {
    slug: "student-data-protection",
    title: "Student Data Protection",
    description:
      "Guidance on reducing unnecessary exposure of student-related information.",
  },
  {
    slug: "phishing-awareness",
    title: "Phishing Awareness",
    description:
      "Practical ways to reduce email-based fraud and account compromise.",
  },
  {
    slug: "school-websites",
    title: "School Websites",
    description:
      "Operational and public-facing security concerns around school websites and portals.",
  },
  {
    slug: "teacher-training",
    title: "Teacher Training",
    description:
      "Cyber awareness topics relevant to teachers, school administrators, and support staff.",
  },
  {
    slug: "education-platform-security",
    title: "Education Platform Security",
    description:
      "Security considerations for portals, forms, registration systems, and EdTech platforms.",
  },
  {
    slug: "student-safety",
    title: "Student Safety",
    description:
      "Digital safety, age-appropriate security habits, and protection-first guidance for students.",
  },
];

const categoriesBySlug = Object.fromEntries(
  blogCategories.map((category) => [category.slug, category]),
) as Record<string, BlogCategory>;

const tagsBySlug = Object.fromEntries(
  blogTags.map((tag) => [tag.slug, tag]),
) as Record<string, BlogTag>;

const rawBlogPosts: RawBlogPost[] = [
  {
    slug: "why-schools-need-better-cybersecurity",
    title: "Why Schools Need Better Cybersecurity",
    description:
      "Schools now operate as digital institutions. This guide explains why education environments need clearer cybersecurity priorities, safer public systems, and more practical awareness.",
    excerpt:
      "Schools are now expected to manage websites, portals, email, payment flows, and student information with the same discipline as any other digital organization. That shift changes the cybersecurity baseline.",
    categorySlug: "school-cybersecurity",
    tagSlugs: [
      "student-data-protection",
      "education-platform-security",
      "student-safety",
    ],
    publishedAt: "2026-05-11T08:00:00.000Z",
    updatedAt: "2026-05-11T08:00:00.000Z",
    keyTakeaways: [
      "Schools are no longer simple brochure websites. They now manage real digital operations and real digital risk.",
      "The most common school security issues are often operational, visible, and preventable rather than dramatic or highly technical.",
      "Leadership, staff habits, vendors, and public-facing systems all contribute to the security posture of an education institution.",
      "A strong first step is a safe external review combined with clear reporting and basic cyber awareness work.",
    ],
    introduction: [
      "Many schools still think about cybersecurity as a specialist topic that matters mainly to banks, software companies, or large public institutions. That assumption no longer matches reality. Modern schools run on websites, online forms, parent communication tools, staff email accounts, registration systems, portals, cloud storage, and third-party platforms. In practical terms, schools are already digital organizations.",
      "The challenge is that education teams are often expected to manage this digital environment without the staffing model, procurement process, or security maturity that a larger enterprise might have. A director may be responsible for trust, reputation, operations, and student protection, while the actual website is maintained by a small vendor, an internal administrator, or a generalist team with limited time.",
      "That gap between digital dependency and security readiness is where a large share of school risk sits. Better cybersecurity for schools does not begin with aggressive language or expensive tools. It begins with visibility, clear scope, and a realistic understanding of how public systems, staff behavior, and student-facing workflows create exposure.",
    ],
    sections: [
      {
        id: "schools-operate-as-digital-institutions",
        title: "Schools now operate as digital institutions",
        paragraphs: [
          "A school website is rarely just a website anymore. It often links to admissions workflows, downloadable forms, staff logins, learning portals, event systems, newsletter software, or cloud-hosted documents. Parents use it to make decisions. Staff rely on it to communicate. Students may interact with connected platforms through linked services or shared accounts. Each of those touchpoints expands the public surface of the institution.",
          "That matters because cyber risk in education is not limited to one catastrophic breach scenario. Smaller issues can still create operational strain or reputational damage. An exposed administrative login page, a misconfigured form, a forgotten document repository, or weak password habits among staff can be enough to create avoidable risk. None of those examples sound dramatic, but they are exactly the kind of issues that create long-term security debt.",
          "In other words, cybersecurity in schools should be treated as part of everyday institutional reliability. It belongs in the same conversation as student safety, parent trust, operational continuity, and vendor oversight.",
        ],
        bullets: [
          "Public websites are often linked to more systems than leadership expects.",
          "Staff accounts are business-critical and frequently underprotected.",
          "Student-related information can be exposed through routine workflows, not only through major incidents.",
        ],
      },
      {
        id: "education-has-a-low-margin-for-trust-failures",
        title: "Education has a low margin for trust failures",
        paragraphs: [
          "Schools operate inside a trust-heavy environment. Families expect stable communication, professional handling of information, and basic digital care even when the institution is small. When something goes wrong online, the issue is rarely judged only as a technical mistake. It is usually interpreted as a trust problem.",
          "This is especially important for institutions that serve younger students or handle admissions, payments, identity documents, or communication histories. Even a minor public-facing security problem can raise concerns from parents, board members, regulators, or partner organizations. The practical impact can be larger than the technical impact.",
          "That is why school cybersecurity should be framed in calm, operational language. The goal is not to frighten leadership. The goal is to help leadership reduce preventable exposure before it becomes a trust problem that is harder to explain later.",
        ],
        callout: {
          title: "A useful leadership question",
          body: "If a parent or partner reviewed your public digital systems today, would they see a careful institution or one carrying visible security debt?",
        },
      },
      {
        id: "common-risk-patterns",
        title: "Most school risk patterns are visible and preventable",
        paragraphs: [
          "A lot of useful security work in education starts with public visibility. That includes website hardening basics, sensible handling of forms and uploads, HTTPS coverage, login hygiene, and awareness of what is indexed, cached, or unintentionally exposed. These are not glamorous issues, but they are often the ones that matter first.",
          "Education organizations also depend heavily on third-party platforms. A school may use separate vendors for websites, learning management, forms, payments, communication, analytics, or mobile apps. Every additional service creates another place where access control, updates, configuration choices, or data handling practices need review. Schools do not always need to audit every vendor deeply, but they do need enough visibility to ask better questions.",
          "The strongest early-stage security improvement usually comes from a structured external review that identifies the obvious issues first, then translates them into plain-language remediation steps for leadership, IT, or vendors.",
        ],
        bullets: [
          "Weak or forgotten admin surfaces",
          "Outdated content management plugins or components",
          "Public files that reveal internal process or personal information",
          "Inconsistent HTTPS and account protection controls",
          "Staff workflows that are vulnerable to phishing or password reuse",
        ],
      },
      {
        id: "staff-and-student-awareness-matters",
        title: "Technology alone is not enough without staff and student awareness",
        paragraphs: [
          "Even when the public website is well maintained, schools still rely on people to make everyday security decisions. Teachers open email under time pressure. Administrators manage accounts across multiple systems. Students explore online spaces quickly and often without much patience for abstract warnings. That is why awareness work needs to be practical rather than theoretical.",
          "For staff, effective awareness usually means short guidance on phishing, password reuse, multi-factor authentication, link handling, and account recovery habits. For students, it means teaching digital caution, ethical behavior, and basic recognition of suspicious patterns in a way that supports learning instead of fear.",
          "The point is not to turn education teams into security professionals. The point is to give them a small number of habits that materially lower risk in daily operations.",
        ],
      },
      {
        id: "what-better-cybersecurity-looks-like",
        title: "What better cybersecurity looks like in practice",
        paragraphs: [
          "Better school cybersecurity is usually not a single project. It is a sequence of practical improvements. The first layer is visibility: knowing what public systems exist, what they expose, and where the obvious weaknesses are. The second layer is prioritization: understanding what needs action now, what can be scheduled, and what requires vendor involvement. The third layer is awareness: making sure staff and, where appropriate, students know how to reduce routine digital risk.",
          "This approach is particularly useful for international education organizations and EdTech teams because it scales. Whether the institution is a private school, a training center, a university program, or a student-facing platform, the same questions still matter. What is publicly visible? How is access protected? Where could student-related data be exposed? Are staff prepared for common account and email risks?",
          "The organizations that handle these questions early usually avoid the most embarrassing and avoidable problems later. They also make future procurement, reporting, and incident response work much easier because the baseline is clearer.",
        ],
      },
      {
        id: "where-to-start",
        title: "Where schools should start",
        paragraphs: [
          "A school does not need to begin with a full enterprise security program. A better first step is usually an authorized external review of the public digital surface combined with clear reporting. That gives leadership a factual starting point instead of assumptions. From there, staff awareness and implementation guidance can be matched to the real issues that were found.",
          "For institutions with limited internal security capacity, a calm and scoped process matters as much as the findings themselves. Schools need reporting that can be read by directors, administrators, IT contacts, and external vendors without translation. They also need review practices that stay non-destructive and appropriate for educational operations.",
          "That is the kind of work that builds long-term resilience. It is less about looking advanced and more about becoming harder to surprise.",
        ],
      },
    ],
    faq: [
      {
        question: "Do schools really need cybersecurity reviews if they are small?",
        answer:
          "Yes. Smaller institutions often have fewer internal controls, more informal vendor relationships, and less time to notice public exposure issues. A safe external review is often most valuable in exactly that situation.",
      },
      {
        question: "Is better school cybersecurity only about technical fixes?",
        answer:
          "No. Technical fixes matter, but staff awareness, vendor oversight, login hygiene, and clear reporting are just as important. School risk is operational as much as technical.",
      },
      {
        question: "What is the safest first step for a school?",
        answer:
          "Start with a scoped, authorized review of public-facing systems. That gives leadership a prioritized picture of visible risk without disruptive testing.",
      },
    ],
    relatedPostSlugs: [
      "common-risks-in-school-websites",
      "basic-cybersecurity-awareness-for-students-and-staff",
    ],
    relatedServiceSlugs: [
      "school-security-checkup",
      "teacher-admin-cyber-awareness-training",
    ],
  },
  {
    slug: "common-risks-in-school-websites",
    title: "Common Risks in School Websites",
    description:
      "School websites and portals often carry preventable public-facing risks. This guide explains where those issues appear and how education teams can reduce them safely.",
    excerpt:
      "Many education organizations assume their website is low-risk because it is public anyway. In practice, school websites often expose far more than branding and announcements.",
    categorySlug: "website-security",
    tagSlugs: [
      "school-websites",
      "student-data-protection",
      "education-platform-security",
    ],
    publishedAt: "2026-05-09T08:00:00.000Z",
    updatedAt: "2026-05-11T08:00:00.000Z",
    keyTakeaways: [
      "The biggest school website risks are often configuration, maintenance, and workflow issues rather than advanced exploitation.",
      "Visible admin paths, exposed documents, weak form handling, and inconsistent updates are common risk signals.",
      "A school website should be treated as part of the institution’s security posture, not as an isolated design asset.",
      "Simple hardening, safer content practices, and regular external review significantly reduce avoidable exposure.",
    ],
    introduction: [
      "School websites are often treated as communications assets first and security assets second. That is understandable. They exist to inform parents, support admissions, publish updates, and present the institution professionally. The problem is that the website is also one of the first places where outsiders can observe how carefully the institution manages its digital environment.",
      "A surprising number of education-related risks begin with something small on the public site: an exposed login route, an outdated plugin, a document that should not be public, a form that sends information insecurely, or a page that reveals more operational detail than intended. None of these issues require a dramatic breach narrative to matter. They simply create unnecessary opportunity for fraud, impersonation, data leakage, or trust damage.",
      "A more professional approach is to treat the website as part of the institution’s operational security surface. That does not mean turning every school site into a high-complexity security project. It means understanding the common risk patterns and addressing them in a structured, proportionate way.",
    ],
    sections: [
      {
        id: "visible-admin-and-login-surfaces",
        title: "Visible admin and login surfaces attract attention",
        paragraphs: [
          "One of the most common signals on school websites is an obviously exposed administrative or staff login path. On its own, a visible login page is not automatically a vulnerability. The issue is that it can invite brute-force attempts, password spraying, phishing targeting, and curiosity-driven reconnaissance if it is not protected appropriately.",
          "When schools use familiar CMS platforms or off-the-shelf portals, common login routes are easy to guess. If there is no multi-factor authentication, weak password policy, or access restriction in place, the risk increases quickly. This is especially important when the same accounts connect to email, content publishing, or student-facing systems.",
          "The right response is usually not to hide the existence of logins alone. It is to combine sensible exposure control with strong account protection. That includes multi-factor authentication, staff password hygiene, and clear vendor ownership of administrative access.",
        ],
      },
      {
        id: "public-files-and-directory-exposure",
        title: "Public files and directory exposure are often underestimated",
        paragraphs: [
          "Schools publish many documents for legitimate reasons: application forms, calendars, fee information, policy documents, schedules, newsletters, and student resources. Problems appear when storage folders, indexed file directories, or outdated documents remain public without anyone noticing. In some cases the file itself is harmless, but its metadata, naming pattern, or surrounding context reveals more than expected.",
          "Examples include draft documents left online, exported spreadsheets, staff contact lists, hidden backup files, or forms that include personal information because a workflow was never reviewed after launch. These problems are especially common when a website has been maintained by multiple people over time.",
          "A safe review should look not only at what is intentionally published, but also at what appears to have become public by accident or by neglect.",
        ],
        bullets: [
          "Legacy uploads that remain publicly reachable",
          "Misnamed exports that reveal internal structure",
          "Shared directories indexed by search engines or easy directory listing",
          "PDF or document metadata that discloses unnecessary information",
        ],
      },
      {
        id: "forms-and-student-data",
        title: "Forms, admissions flows, and student-related data create specific risk",
        paragraphs: [
          "School websites often collect information through admissions forms, contact forms, event registration, newsletter signups, or portal-linked workflows. The security question is not just whether the form works. It is whether the full journey handles information carefully enough for the institution’s level of trust.",
          "If a form is connected to email forwarding, cloud storage, or a vendor dashboard, then the exposure question extends beyond the visible page. Where does the data go? Who can access it? Is the upload path public? Are confirmation emails revealing too much? Is the school collecting more information than it needs at that stage of the workflow?",
          "Student-related data deserves extra caution even when the form only handles partial information. A school can improve its posture significantly by reviewing public data collection points and simplifying what those workflows ask for, store, or expose.",
        ],
      },
      {
        id: "maintenance-and-update-discipline",
        title: "Maintenance gaps create slow-moving but serious risk",
        paragraphs: [
          "A visually polished website can still be carrying technical debt underneath. Schools often rely on outside agencies, freelance developers, or internal administrators to manage updates. Over time, that can create uncertainty about who is responsible for plugin maintenance, hosting access, TLS configuration, backups, and incident readiness.",
          "Outdated components do not always lead directly to compromise, but they do reduce confidence in the security posture. They also make it harder for leadership to answer simple operational questions such as: Who can update the site? Who receives security notices? Where are backups stored? What happens if an account is lost or the homepage is defaced?",
          "A mature website posture is not only about patching. It is about knowing who owns each moving part and whether recovery steps are documented before a problem occurs.",
        ],
      },
      {
        id: "security-headers-and-browser-protections",
        title: "Browser-side protections are still worth the effort",
        paragraphs: [
          "Security headers are not a magic shield, but they are part of professional website hygiene. Missing or weak headers can reduce browser-side protection and signal that hardening has not been reviewed recently. For a school or EdTech site, that matters because the public website is often the first place where credibility is judged.",
          "Simple measures such as consistent HTTPS, secure transport policy, clickjacking protection, and sensible content-type handling help build a safer baseline. These controls should be implemented carefully to avoid breaking legitimate functionality, but they should not be ignored indefinitely.",
          "When a report highlights missing headers, the takeaway is not that the site is catastrophically insecure. The takeaway is that there is room to raise the floor of public-facing security hygiene.",
        ],
      },
      {
        id: "how-schools-should-review-websites",
        title: "How schools should review their websites safely",
        paragraphs: [
          "The most useful website review is calm, external, and evidence-led. It should identify what is publicly visible, what looks weak or outdated, and which issues matter most in practical terms. Schools usually do not need aggressive testing to get value. They need structured visibility.",
          "That is why a safe security checkup should prioritize what outsiders can already observe: HTTPS behavior, exposed login surfaces, public documents, obvious misconfigurations, and workflow patterns that may affect student or staff information. The deliverable should then translate those findings into action items for the institution and any vendor maintaining the platform.",
          "When this is done well, the website becomes easier to govern. Leadership gets clarity, vendors get a cleaner remediation list, and the institution reduces the most visible forms of avoidable risk.",
        ],
      },
    ],
    faq: [
      {
        question: "Is a public admin page always a vulnerability?",
        answer:
          "Not by itself. The issue is whether that login surface is protected with strong credentials, multi-factor authentication, and sensible access controls. Visibility plus weak protection is the real problem.",
      },
      {
        question: "Why do exposed files matter if they are only old documents?",
        answer:
          "Old files can still reveal internal structure, personal information, naming patterns, or process details that should not remain public. They also signal weak content governance.",
      },
      {
        question: "Should school websites be reviewed even if a third-party agency maintains them?",
        answer:
          "Yes. Vendor maintenance does not remove the institution’s responsibility for public trust and data exposure. External review helps schools ask better questions and verify the public-facing posture.",
      },
    ],
    relatedPostSlugs: [
      "why-schools-need-better-cybersecurity",
      "basic-cybersecurity-awareness-for-students-and-staff",
    ],
    relatedServiceSlugs: [
      "school-security-checkup",
      "secure-website-portal-guidance",
      "student-data-protection-review",
    ],
  },
  {
    slug: "basic-cybersecurity-awareness-for-students-and-staff",
    title: "Basic Cybersecurity Awareness for Students and Staff",
    description:
      "A practical guide to cybersecurity awareness for teachers, administrators, and students, with habits that reduce phishing, password, and account security risk.",
    excerpt:
      "Cyber awareness in education should be calm, repeatable, and useful in daily routines. The best programs do not overwhelm people. They teach a few habits that actually change decisions.",
    categorySlug: "cyber-awareness",
    tagSlugs: ["phishing-awareness", "teacher-training", "student-safety"],
    publishedAt: "2026-05-07T08:00:00.000Z",
    updatedAt: "2026-05-11T08:00:00.000Z",
    keyTakeaways: [
      "Awareness training works best when it is short, practical, and tied to real school workflows.",
      "Teachers and administrators need clear guidance on phishing, passwords, account recovery, and safe device habits.",
      "Students benefit from ethical, age-appropriate digital safety instruction that builds judgment rather than fear.",
      "A school should treat cyber awareness as an operating habit, not a one-time presentation.",
    ],
    introduction: [
      "Cyber awareness in education can go wrong in two opposite directions. It can be too technical, which means staff and students stop listening because the advice feels abstract. Or it can be too dramatic, which creates anxiety without giving people practical habits they can actually use. Neither approach helps schools very much.",
      "Good awareness work is simpler than that. It focuses on the everyday decisions that create real exposure: opening an email, reusing a password, approving a login prompt, clicking a form link, storing a document, or sharing an account between colleagues. Those moments are where people either reduce risk or create it.",
      "For schools and education platforms, the goal should be a calm awareness culture. Staff should know how to spot common fraud signals and protect their accounts. Students should understand basic digital caution, respectful behavior, and how to ask questions when something feels wrong online. This is not about turning everyone into a security specialist. It is about making safer decisions normal.",
    ],
    sections: [
      {
        id: "awareness-must-fit-school-routines",
        title: "Awareness must fit school routines, not interrupt them",
        paragraphs: [
          "Teachers and administrators work under time pressure. They handle messages quickly, juggle multiple systems, and often switch between classroom, communication, and administrative responsibilities in the same hour. Awareness training that ignores that reality usually fails because it asks people to become more cautious without changing the conditions under which they make decisions.",
          "A better approach is to teach a small number of practical checks that can be used quickly. Is the sender expected? Is the request urgent in a suspicious way? Is the login page familiar? Am I being asked to bypass normal process? These questions are fast, memorable, and directly relevant to school workflows.",
          "When awareness is designed around routine rather than theory, schools get better results with less friction.",
        ],
      },
      {
        id: "staff-basics-that-matter-most",
        title: "The staff basics that matter most",
        paragraphs: [
          "Most education staff do not need a long catalog of security concepts. They need a short operating baseline. The most valuable topics are usually phishing recognition, password reuse, multi-factor authentication, account recovery, device lock habits, and the importance of reporting something suspicious early instead of silently hoping it is harmless.",
          "This is especially true for accounts that carry operational authority. A compromised email account can lead to impersonation, invoice fraud, fake announcements, or account reset abuse across other systems. That means the awareness priority is not only privacy. It is also credibility and continuity.",
          "Schools should also make the safe action obvious. If staff suspect a message is fraudulent, who do they ask? If they lose access to an account, what is the recovery process? Awareness is much stronger when it is paired with a clear path for escalation.",
        ],
        bullets: [
          "Use unique passwords and a trusted password manager.",
          "Enable multi-factor authentication wherever it is available.",
          "Pause on urgent requests involving payments, credentials, or account changes.",
          "Report suspicious emails early rather than trying to investigate alone.",
        ],
      },
      {
        id: "student-awareness-should-be-ethical",
        title: "Student awareness should be ethical, age-appropriate, and constructive",
        paragraphs: [
          "Students need cybersecurity awareness too, but the tone matters. Awareness for students should not revolve around fear or performative \"hacker\" language. It should teach basic digital judgment: protecting accounts, thinking before sharing information, spotting suspicious links, respecting privacy, and understanding that online actions have consequences.",
          "For younger students, that may mean simple habits such as asking a trusted adult before submitting information or noticing when a site asks for more than expected. For older students, it can include a stronger introduction to phishing, OSINT awareness, ethical web behavior, and why unauthorized access is not the same as legitimate learning.",
          "The best student awareness work supports both safety and curiosity. It protects students while giving them a healthier foundation for learning about technology.",
        ],
      },
      {
        id: "phishing-awareness-needs-real-examples",
        title: "Phishing awareness needs real examples, not generic warnings",
        paragraphs: [
          "People remember patterns better than slogans. If a school wants better phishing awareness, the training should use examples that feel close to real education workflows: a fake invoice email, a spoofed parent message, a password reset request, an event attachment, or a platform login prompt that looks almost legitimate.",
          "Realistic examples help staff and students understand why suspicious messages are persuasive in the first place. They also make it easier to explain what to do next: verify through another channel, avoid clicking immediately, and escalate when the request involves credentials, payments, or sensitive information.",
          "The lesson should not be \"never trust anything.\" It should be \"slow down on the small set of actions that attackers rely on people to rush.\"",
        ],
      },
      {
        id: "awareness-is-a-repeating-process",
        title: "Awareness should be repeated in small doses",
        paragraphs: [
          "A single annual presentation rarely changes behavior. People forget, staff change, new platforms are adopted, and routines drift. Schools usually get better results from short repeated reminders than from one large training event. That might mean periodic refreshers, short staff checklists, onboarding basics, or brief student workshop modules.",
          "This is good news for smaller institutions because it means awareness does not need to become a large internal program before it becomes useful. Small, consistent reinforcement is often more effective than occasional complexity.",
          "The same principle applies to leadership. Directors and coordinators do not need a technical masterclass. They need enough awareness to ask better questions about vendors, account protection, and incident readiness.",
        ],
      },
      {
        id: "what-good-awareness-looks-like",
        title: "What good awareness looks like in a school environment",
        paragraphs: [
          "A well-run awareness culture is visible in behavior. Staff pause before acting on unusual requests. Accounts are better protected. Students understand the difference between curiosity and unsafe behavior. People know who to contact if something looks wrong. That is a far more useful outcome than simply saying training took place.",
          "For education institutions and EdTech teams, the strongest awareness programs stay close to real workflows and real audiences. They use plain language, practical examples, and short guidance that can be remembered during a busy day.",
          "When paired with scoped security review and clear reporting, awareness becomes one of the most cost-effective ways to improve the overall security posture of an education environment.",
        ],
        callout: {
          title: "Awareness is part of risk reduction, not an isolated workshop",
          body: "Training works best when it supports the actual risks the institution can see in its websites, portals, staff accounts, and daily communication habits.",
        },
      },
    ],
    faq: [
      {
        question: "How often should schools run cyber awareness training?",
        answer:
          "Short recurring refreshers are usually more effective than a single annual session. A practical cadence is periodic staff reminders plus onboarding support and age-appropriate student sessions.",
      },
      {
        question: "Should students be taught phishing awareness too?",
        answer:
          "Yes, but in an age-appropriate way. Students benefit from learning how to recognize suspicious requests, protect accounts, and ask for help before sharing information.",
      },
      {
        question: "What makes awareness training useful instead of generic?",
        answer:
          "Training becomes useful when it reflects real school workflows, uses realistic examples, and gives people a small number of actions they can remember under time pressure.",
      },
    ],
    relatedPostSlugs: [
      "why-schools-need-better-cybersecurity",
      "common-risks-in-school-websites",
    ],
    relatedServiceSlugs: [
      "teacher-admin-cyber-awareness-training",
      "student-cybersecurity-workshops",
    ],
  },
];

function countWords(value: string) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function calculateReadingTime(wordCount: number) {
  return Math.max(4, Math.ceil(wordCount / 220));
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(value));
}

function getWordCount(post: RawBlogPost) {
  const sectionsText = post.sections.flatMap((section) => [
    section.title,
    ...section.paragraphs,
    ...(section.bullets ?? []),
    section.callout?.title ?? "",
    section.callout?.body ?? "",
  ]);

  const faqText = post.faq.flatMap((item) => [item.question, item.answer]);

  const combined = [
    post.title,
    post.description,
    post.excerpt,
    ...post.keyTakeaways,
    ...post.introduction,
    ...sectionsText,
    ...faqText,
  ].join(" ");

  return countWords(combined);
}

function enrichPost(post: RawBlogPost): BlogPostWithComputed {
  const wordCount = getWordCount(post);
  const readingTimeMinutes = calculateReadingTime(wordCount);

  return {
    ...post,
    category: categoriesBySlug[post.categorySlug],
    tags: post.tagSlugs.map((tagSlug) => tagsBySlug[tagSlug]),
    readingTimeMinutes,
    readingTimeText: `${readingTimeMinutes} min read`,
    wordCount,
    publishedLabel: formatDate(post.publishedAt),
    updatedLabel: formatDate(post.updatedAt),
  };
}

const blogPosts = rawBlogPosts.map(enrichPost).sort((a, b) => {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
});

export function getAllBlogPosts() {
  return blogPosts;
}

export function getFeaturedBlogPosts(limit = 3) {
  return blogPosts.slice(0, limit);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogCategories() {
  return blogCategories.map((category) => ({
    ...category,
    count: blogPosts.filter((post) => post.category.slug === category.slug).length,
  }));
}

export function getBlogCategoryBySlug(slug: string) {
  const category = categoriesBySlug[slug];

  if (!category) {
    return undefined;
  }

  return {
    ...category,
    count: blogPosts.filter((post) => post.category.slug === slug).length,
  };
}

export function getAllBlogTags() {
  return blogTags.map((tag) => ({
    ...tag,
    count: blogPosts.filter((post) => post.tags.some((item) => item.slug === tag.slug))
      .length,
  }));
}

export function getBlogTagBySlug(slug: string) {
  const tag = tagsBySlug[slug];

  if (!tag) {
    return undefined;
  }

  return {
    ...tag,
    count: blogPosts.filter((post) => post.tags.some((item) => item.slug === slug))
      .length,
  };
}

export function getBlogPostsByCategory(slug: string) {
  return blogPosts.filter((post) => post.category.slug === slug);
}

export function getBlogPostsByTag(slug: string) {
  return blogPosts.filter((post) => post.tags.some((tag) => tag.slug === slug));
}

export function getRelatedBlogPosts(post: BlogPostWithComputed, limit = 2) {
  const explicitMatches = post.relatedPostSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((item): item is BlogPostWithComputed => Boolean(item));

  if (explicitMatches.length >= limit) {
    return explicitMatches.slice(0, limit);
  }

  const fallbackMatches = blogPosts.filter((candidate) => {
    if (candidate.slug === post.slug) {
      return false;
    }

    return candidate.tags.some((tag) => post.tags.some((current) => current.slug === tag.slug));
  });

  return [...explicitMatches, ...fallbackMatches]
    .filter((candidate, index, array) => {
      return array.findIndex((item) => item.slug === candidate.slug) === index;
    })
    .slice(0, limit);
}
