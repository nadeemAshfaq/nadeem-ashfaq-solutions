export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type Service = {
  title: string;
  description: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  clientOutcome: string;
  architecturePoints: string[];
  techStack: string[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  icon: string;
  accentColor: string;
  targetKeywords: string[];
  capabilities: string[];
  businessBenefits: string[];
  faqs: FAQItem[];
  relatedProjects: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  outcome: string;
};

export type ValueProp = {
  icon: string;
  title: string;
  description: string;
};
