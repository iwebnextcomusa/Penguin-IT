import { ServiceItem, IndustryItem, TestimonialItem, FAQItem, PainPoint, LoopStep, PricingPlan, CoreGuarantee } from '../types';

export const PAIN_POINTS_DATA: PainPoint[] = [
  {
    id: 'pain-1',
    title: 'Windows problems steal your time.',
    description: 'Forced updates, ads, data collection, and features you didn\'t ask for.',
    accentColor: 'amber',
    iconName: 'AlertTriangle'
  },
  {
    id: 'pain-2',
    title: 'Same tasks drain your time.',
    description: 'Repeat work should turn into guides and automations.',
    accentColor: 'cyan',
    iconName: 'RefreshCw'
  },
  {
    id: 'pain-3',
    title: 'Stuck when tech gets hard?',
    description: 'Get clear, focused help so you can move forward with confidence.',
    accentColor: 'rose',
    iconName: 'HelpCircle'
  }
];

export const LOOP_STEPS_DATA: LoopStep[] = [
  {
    stepNumber: 1,
    name: 'ASK',
    description: 'Tell us the tech problem.',
    iconName: 'MessageSquare'
  },
  {
    stepNumber: 2,
    name: 'SOLVE',
    description: 'We fix it, teach it, script it, or document it.',
    iconName: 'Wrench'
  },
  {
    stepNumber: 3,
    name: 'SAVE',
    description: 'Answers, teachings, guides, videos, and automations become reusable assets.',
    iconName: 'FileCode'
  },
  {
    stepNumber: 4,
    name: 'IMPROVE',
    description: 'Saved assets get better over time and help more people.',
    iconName: 'TrendingUp'
  },
  {
    stepNumber: 5,
    name: 'REUSABLE',
    description: 'Reusable work means each membership goes further and builds better support for all.',
    iconName: 'ShieldCheck'
  }
];

export const PRICING_PLANS_DATA: PricingPlan[] = [
  {
    id: 'plan-1',
    planNumber: 1,
    title: 'Windows/Mac to Linux Switch & Setup',
    price: '$199',
    subtitle: 'Personalized assessment & migration plan to Windows/Mac/Linux.',
    features: [
      'Personalized assessment and migration plan to Windows/Mac/Linux.',
      '512 GB backup bootloader drive & lanyard +$60',
      'Backup, install, essential apps, and walkthrough',
      'Optional security hardening',
      'Early-Founder Bonus: 1+1 months free of our Penguin Tech Support'
    ],
    processTag: 'Pre-check → Backup → Install → Teach → Support',
    note: 'Per device. Second same-home device $100.',
    accentColor: 'red'
  },
  {
    id: 'plan-2',
    planNumber: 2,
    title: 'Penguin Tech Support',
    price: '$59',
    priceSubtext: '/mo',
    subtitle: 'Questions, updates, troubleshooting, and how-to help.',
    features: [
      'Questions, updates, troubleshooting, and how-to help',
      'Remote-first support for up to 3 Linux devices',
      'Use technician time for guides, small scripts, and automations that solve repeat problems',
      'Keeps your Linux systems current, secure, backed up, and running smooth'
    ],
    earlyBonus: 'Early-Founder Bonus: 2 support hours + 2 hours of reusable work. All approved critical and emergency work is free.',
    note: 'First and last month paid upfront. Monthly billing begins 30 days after.',
    accentColor: 'blue'
  },
  {
    id: 'plan-3',
    planNumber: 3,
    title: 'Custom AI Setup',
    price: '$299',
    subtitle: 'AI that works for your world.',
    features: [
      'AI tools configured around your daily tasks',
      'Prompts, templates, shortcuts, and automations',
      'AI tools for privacy and control',
      'Simple training so you can use it with confidence',
      'Early-Founder Bonus: 16+16 hours of free reusable work'
    ],
    processTag: 'Discover → Design → Build → Automate → Teach → Support',
    note: 'Per user or workstation. Second same-home setup $150.',
    accentColor: 'emerald'
  },
  {
    id: 'plan-4',
    planNumber: 4,
    title: 'Tech Partner',
    price: '$199',
    priceSubtext: '/mo Home Use  |  $299/mo Business',
    badge: 'BEST VALUE',
    subtitle: 'Complete IT partner for Home Office & Small Business.',
    highlighted: true,
    features: [
      'Early-Partner Bonus: 1 Linux Switch & Setup plus Custom AI Setup for one device',
      'Custom scripts, guides, workflows, and automations that save time and reduce repeat work',
      'Ongoing maintenance, updates, troubleshooting, and system health checks',
      'Remote-first support for OS, AI, devices, printers, Wi-Fi, backups, and smart devices',
      'Use technician time for scripts, workflows, and automations that save time and deliver measurable value'
    ],
    earlyBonus: 'Early-Founder Bonus: 8 support hours + 8 hours of reusable work. All approved critical and emergency work is free.',
    note: 'First and last month paid upfront. Monthly billing begins 30 days after.',
    accentColor: 'purple'
  }
];

export const CORE_GUARANTEES_DATA: CoreGuarantee[] = [
  {
    id: 'guarantee-1',
    title: 'PRIVACY BY DESIGN',
    description: 'No unnecessary data shared or kept.',
    iconName: 'Shield'
  },
  {
    id: 'guarantee-2',
    title: 'YOU STAY IN CONTROL',
    description: 'We recommend what helps you, not what locks you in.',
    iconName: 'Users'
  },
  {
    id: 'guarantee-3',
    title: 'NO-SHAME SUPPORT',
    description: 'Ask the question. Show the error. We help you get unstuck.',
    iconName: 'Heart'
  },
  {
    id: 'guarantee-4',
    title: 'GETS SMARTER OVER TIME',
    description: 'FAQs, guides, code, and automation become repeatable workflows others can use.',
    iconName: 'TrendingUp'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Services',
    category: 'managed',
    shortDesc: 'Comprehensive end-to-end IT infrastructure management, proactive 24/7 monitoring, and immediate issue resolution.',
    fullDesc: 'Our Managed IT Services act as your complete virtual IT department. We proactively monitor your workstations, servers, and networks 24/7/365 to detect and resolve vulnerabilities before they impact your operations.',
    iconName: 'ServerHandshake',
    badge: 'Popular',
    features: [
      '24/7/365 Infrastructure Monitoring & Alerting',
      'Automated Patch Management & System Updates',
      'Dedicated Virtual CIO (vCIO) Strategic Guidance',
      'Predictive Maintenance & Vendor Management'
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    category: 'cloud',
    shortDesc: 'Scalable cloud migration, hybrid cloud architecture, AWS, Azure, and Google Cloud optimization.',
    fullDesc: 'Transform your legacy infrastructure into a resilient, highly scalable cloud environment. We design, migrate, and manage multi-cloud strategies that enhance agility while cutting operational overhead.',
    iconName: 'Cloud',
    features: [
      'Seamless Multi-Cloud Migration (AWS/Azure/GCP)',
      'Serverless & Container Orchestration (Kubernetes)',
      'Cost Optimization & Dynamic Scaling',
      'High-Availability Hybrid Cloud Architecture'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Threat Defense',
    category: 'security',
    shortDesc: 'Next-generation Zero Trust security, Endpoint Detection & Response (EDR), and SOC compliance.',
    fullDesc: 'Safeguard your digital assets with advanced threat intelligence, automated response capabilities, and continuous penetration testing. Protect your business against ransomware, phishing, and insider threats.',
    iconName: 'ShieldCheck',
    badge: 'Essential',
    features: [
      'Managed Detection & Response (MDR / XDR)',
      'Zero Trust Network Access (ZTNA) Architecture',
      'Phishing Awareness Training & Simulations',
      'SOC2, HIPAA, and ISO 27001 Compliance Audits'
    ]
  },
  {
    id: 'network-infra',
    title: 'Network Infrastructure',
    category: 'infrastructure',
    shortDesc: 'High-speed SD-WAN, enterprise Wi-Fi 6/7 deployment, firewall routing, and structured cabling.',
    fullDesc: 'Build a bulletproof networking foundation. We design high-capacity, secure, low-latency enterprise networks tailored to modern remote and multi-office business environments.',
    iconName: 'Network',
    features: [
      'SD-WAN & Next-Gen Firewall Configuration',
      'Enterprise Wi-Fi 6E/7 Site Surveys & Deployment',
      'Structured Fiber & Copper Gigabit Cabling',
      'VPN & Secure Remote Access Nodes'
    ]
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting & Advisory',
    category: 'managed',
    shortDesc: 'Strategic technology roadmaps, digital transformation consulting, and IT budget optimization.',
    fullDesc: 'Align technology directly with your business growth objectives. Our seasoned IT advisors help you navigate complex tech decisions, streamline workflows, and maximize return on IT investment.',
    iconName: 'Lightbulb',
    features: [
      'Strategic IT Roadmap & Budget Planning',
      'Legacy System Modernization Assessment',
      'Vendor Contract Negotiation & Audit',
      'Digital Transformation Frameworks'
    ]
  },
  {
    id: 'disaster-recovery',
    title: 'Backup & Disaster Recovery',
    category: 'security',
    shortDesc: 'Immutable cloud backups, rapid ransomware recovery, and business continuity planning.',
    fullDesc: 'Ensure zero data loss and near-instant recovery in any crisis. Our automated snapshot technology guarantees your business operational continuity even during catastrophic hardware failures or cyberattacks.',
    iconName: 'DatabaseBackup',
    badge: 'Critical',
    features: [
      'Immutable Air-Gapped Cloud Backups',
      'Near-Zero RTO (Recovery Time) & RPO Targets',
      'Automated Daily Disaster Recovery Testing',
      'Disaster Preparedness & Compliance Playbooks'
    ]
  },
  {
    id: 'technical-support',
    title: 'Technical Support (Helpdesk)',
    category: 'managed',
    shortDesc: 'Lightning-fast Tier 1-3 helpdesk support with guaranteed SLA response times under 15 minutes.',
    fullDesc: 'Empower your workforce with responsive, friendly technical assistance. Available 24/7/365 via phone, live chat, or remote ticketing to solve user issues instantaneously.',
    iconName: 'Headset',
    features: [
      'Under 15-Minute Average Response Time',
      'Omnichannel Helpdesk (Portal, Email, Phone)',
      'Remote Desktop Troubleshooting & Diagnostics',
      'Dedicated Tier 3 Certified System Engineers'
    ]
  },
  {
    id: 'm365-google',
    title: 'Microsoft 365 & Google Workspace',
    category: 'productivity',
    shortDesc: 'Enterprise licensing, seamless tenant migrations, SharePoint setup, and security hardening.',
    fullDesc: 'Maximize workplace productivity with fully integrated cloud collaboration suites. We handle migration, security policy enforcement, device management (MDM), and admin training.',
    iconName: 'Boxes',
    features: [
      'Zero-Downtime Tenant-to-Tenant Migration',
      'Microsoft Intune & Endpoint MDM Hardening',
      'SharePoint & Teams Custom Architecture',
      'Spam, DLP & Advanced Threat Protection'
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'small-business',
    title: 'Small & Growing Business',
    description: 'Customized, enterprise-grade IT capabilities scaled for agile teams looking to maximize efficiency without heavy capital expenditures.',
    iconName: 'Building2',
    keyBenefits: ['Predictable Monthly Pricing', 'Rapid Scalability', 'Complete Cyber Hygiene'],
    caseMetric: '42% Cost Reduction on IT Overhead'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical Tech',
    description: 'HIPAA and HITECH compliant infrastructure designed to protect electronic health records (EHR) while enabling seamless patient care.',
    iconName: 'Activity',
    keyBenefits: ['HIPAA Compliance Audit Ready', 'Encrypted Telehealth Links', 'High-Availability Medical Systems'],
    caseMetric: '99.999% EHR System Uptime'
  },
  {
    id: 'education',
    title: 'Education & Academics',
    description: 'Secure, high-bandwidth campus networks, classroom device management, and digital learning ecosystem security.',
    iconName: 'GraduationCap',
    keyBenefits: ['Content Filtering & CIPA Security', '1:1 Device MDM Management', 'High-Density Campus Wi-Fi'],
    caseMetric: '10,000+ Students Supported Concurrently'
  },
  {
    id: 'retail',
    title: 'Retail & E-Commerce',
    description: 'PCI-DSS compliant Point-of-Sale (POS) networking, multi-location inventory syncing, and zero-downtime store operations.',
    iconName: 'ShoppingBag',
    keyBenefits: ['PCI-DSS POS Compliance', 'Failover Cellular Backups', 'Omnichannel System Sync'],
    caseMetric: '0% Store Checkout Downtime'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial',
    description: 'Operational Technology (OT) and Industrial IoT security, ruggedized facility networking, and supply chain continuity.',
    iconName: 'Factory',
    keyBenefits: ['OT / Industrial Cybersecurity', 'Supply Chain ERP Integration', 'Rugged Wi-Fi Infrastructure'],
    caseMetric: '3.5x Faster Factory Network Speeds'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Chief Technology Officer',
    company: 'Apex Financial Technologies',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    content: 'Penguin IT transformed our entire network architecture in under 3 weeks. Their cybersecurity team detected vulnerabilities that our previous provider missed entirely. The 15-minute response SLA is genuine!',
    rating: 5
  },
  {
    id: '2',
    name: 'David Vance',
    role: 'Director of Operations',
    company: 'BioHealth Solutions',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    content: 'Navigating HIPAA compliance and cloud migration felt daunting until we partnered with Penguin IT. Their engineers worked seamlessly alongside our staff, ensuring zero disruption to our patient services.',
    rating: 5
  },
  {
    id: '3',
    name: 'Elena Rostova',
    role: 'Head of Infrastructure',
    company: 'Vanguard Retail Corp',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    content: 'With over 45 retail locations, network outages used to cost us thousands per hour. Penguin IT implemented SD-WAN with automatic cellular failover, and we have experienced 100% uptime ever since.',
    rating: 5
  },
  {
    id: '4',
    name: 'Marcus Thorne',
    role: 'Founder & CEO',
    company: 'Nexus Robotics',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    content: 'As a fast-growing tech startup, we needed an IT partner who could scale effortlessly with us. Penguin IT took over our Microsoft 365 licensing, endpoint security, and onboarding—saving us countless hours.',
    rating: 5
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How quickly can Penguin IT respond to critical support tickets?',
    answer: 'We guarantee a 15-minute average response SLA for critical priority issues. Our 24/7 Network Operations Center (NOC) monitors your systems around the clock, so most issues are detected and resolved automatically before you even notice them.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'How does Penguin IT onboarding work for new clients?',
    answer: 'Onboarding is thorough and stress-free. We perform a complete initial IT environment discovery, document your network assets, implement initial endpoint security, and set up your team on our helpdesk portal—typically within 5 to 10 business days.'
  },
  {
    id: 'faq-3',
    category: 'Security',
    question: 'How do you protect our business against ransomware and phishing attacks?',
    answer: 'We employ a multi-layered Zero Trust security stack including Managed Detection & Response (MDR), AI-driven endpoint isolation, DNS filtering, automated phishing training for employees, and air-gapped immutable cloud backups.'
  },
  {
    id: 'faq-4',
    category: 'Cloud',
    question: 'Can you help us migrate our existing servers to AWS, Azure, or Google Cloud?',
    answer: 'Yes! We specialize in zero-downtime cloud migrations. Our certified cloud architects assess your current server workloads, design an optimized cloud or hybrid architecture, and execute migrations seamlessly off-hours.'
  },
  {
    id: 'faq-5',
    category: 'Billing',
    question: 'Are there hidden fees in your Managed IT packages?',
    answer: 'Never. We operate on a flat-rate, transparent monthly subscription model based on user or device count. You receive unlimited remote support, proactive maintenance, and security monitoring with zero surprise invoices.'
  },
  {
    id: 'faq-6',
    category: 'Cloud',
    question: 'Do you manage Microsoft 365 and Google Workspace migrations?',
    answer: 'Yes, we manage complete tenant-to-tenant migrations, email archive transfers, SharePoint/Drive structuring, single sign-on (SSO) integration, and multi-factor authentication (MFA) enforcement.'
  }
];

export const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
    title: '24/7 Security Operations Center',
    caption: 'Continuous threat monitoring and real-time incident response.'
  },
  {
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000',
    title: 'Enterprise Server Infrastructure',
    caption: 'High-density rack servers optimized for maximum uptime and cloud routing.'
  },
  {
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    title: 'Cybersecurity Matrix & Code Audits',
    caption: 'Advanced vulnerability scanning and threat prevention systems.'
  },
  {
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000',
    title: 'Collaborative Engineering Hub',
    caption: 'Our certified engineers building customized IT strategies for modern clients.'
  }
];
