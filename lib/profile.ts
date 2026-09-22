/**
 * Profile / experience / credentials — source of truth
 * drawn from the existing portfolio. Rewritten for editorial
 * clarity; facts preserved.
 */

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
  highlight?: { label: string; value: string }[];
};

export const profile = {
  name: 'Victor Chukwudebelu',
  initials: 'VC',
  location: 'Remote-friendly · Open to senior AI/ML roles',
  email: 'victordebelu@outlook.com',
  phone: '+1 (347) 836-4575',
  social: {
    github: 'https://github.com/unveiledhistory49',
    linkedin: 'https://www.linkedin.com/in/victordebelu/',
  },
  elevator:
    'Senior AI/ML Engineer and Computer Scientist with 10+ years of experience across the full ML lifecycle — from custom transformer architectures and RLHF alignment pipelines to optimized inference at 10,000+ GPU scale in Fortune 500 environments.',
  headline:
    'Building intelligent systems, production software, and technical infrastructure.',
};

export const experience: Experience[] = [
  {
    role: 'Senior AI Research Engineer',
    org: 'Gannett',
    period: 'Jan 2024 – Apr 2026',
    points: [
      'Led cross-functional RLHF pipeline optimisation — improving model alignment, safety scores, and compliance metrics across production LLM systems.',
      'Architected distributed LLM training infrastructure on 10,000+ GPU clusters for billion-parameter models.',
      'Reduced inference latency by 35% via INT8/FP16 quantization and model distillation, materially lowering serving cost.',
    ],
    highlight: [
      { label: 'Inference latency', value: '−35%' },
      { label: 'GPU scale', value: '10,000+' },
    ],
  },
  {
    role: 'Machine Learning Engineer',
    org: 'Union Pacific',
    period: 'Jun 2021 – Oct 2023',
    points: [
      'Built data-ingestion and preprocessing pipelines for Gemini / PaLM multi-modal models across text, image, and structured data.',
      'Implemented Bayesian hyperparameter tuning that increased Search ranking model accuracy by 12%, impacting millions of daily users.',
    ],
    highlight: [{ label: 'Model accuracy uplift', value: '+12%' }],
  },
  {
    role: 'Software Engineer',
    org: 'PEMCO Mutual Insurance',
    period: 'Mar 2019 – Feb 2021',
    points: [
      'Maintained 99.9% system uptime across critical insurance platforms through rigorous code review and mentorship of 4 junior engineers.',
      'Authored onboarding documentation that reduced time-to-productivity by an estimated 30%.',
    ],
    highlight: [{ label: 'System uptime', value: '99.9%' }],
  },
  {
    role: 'Software Developer',
    org: 'Mercer  |  EMC Corporation',
    period: 'Feb 2017 – Dec 2018  |  Apr 2016 – Jan 2017',
    points: [
      'Built and maintained enterprise software applications across the full development lifecycle using agile methodologies.',
      'Developed security protocols and intuitive UIs, reducing support tickets and improving usability scores.',
    ],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: 'AI / Machine Learning',
    items: [
      'LLM Training & Fine-Tuning',
      'RLHF',
      'Transformer Architectures',
      'Distributed Training',
      'Quantization & Distillation',
      'MLOps',
      'NLP',
      'Computer Vision',
      'Generative AI',
    ],
  },
  {
    title: 'Frameworks',
    items: [
      'PyTorch',
      'TensorFlow',
      'Hugging Face',
      'LangChain',
      'Scikit-learn',
      'XGBoost',
      'React',
      'Next.js',
      'Django',
      'FastAPI',
    ],
  },
  {
    title: 'Languages',
    items: [
      'Python',
      'TypeScript / JavaScript',
      'Go',
      'Rust',
      'C#',
      'Java',
      'C++',
      'SQL',
      'Solidity',
      'Bash',
    ],
  },
  {
    title: 'Cloud & MLOps',
    items: [
      'AWS SageMaker',
      'GCP Vertex AI',
      'Docker',
      'Kubernetes',
      'Helm',
      'MLflow',
      'Terraform',
      'GitHub Actions',
      'Prometheus',
    ],
  },
  {
    title: 'Cybersecurity',
    items: [
      'Zero-Trust Architecture',
      'Penetration Testing',
      'SIEM (Splunk)',
      'OWASP',
      'NIST CSF',
      'ISO 27001',
      'Threat Modelling (STRIDE)',
    ],
  },
  {
    title: 'Blockchain / DeFi',
    items: [
      'Solidity',
      'ERC-4626',
      'ERC-4337 AA',
      'Foundry',
      'Hardhat',
      'Anchor (Rust)',
      'Chainlink',
      'wagmi / viem',
    ],
  },
];

export const credentials = [
  { name: 'AWS ML Specialty', issuer: 'Amazon Web Services' },
  { name: 'Google ML Engineer', issuer: 'Google' },
  { name: 'CompTIA Security+', issuer: 'CompTIA' },
  { name: 'CEH', issuer: 'EC-Council' },
  { name: 'CFA Level I', issuer: 'CFA Institute' },
  { name: 'FinTech', issuer: 'Wharton' },
  { name: 'Deep Learning', issuer: 'deeplearning.ai' },
  { name: 'QuickBooks ProAdvisor', issuer: 'Intuit' },
];

export const education = {
  school: 'University of Pennsylvania',
  degree: 'Master of Computer Applications, Computer Science',
  period: 'Graduated Jan 2016',
};

export const metrics = [
  { value: '35%', label: 'LLM inference latency reduction' },
  { value: '12%', label: 'Model accuracy uplift' },
  { value: '99.9%', label: 'System uptime maintained' },
  { value: '10K+', label: 'GPU training infrastructure' },
];
