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
  clientOutcome?: string;
  architecturePoints?: string[];
  techStack?: string[];
  productFeatures?: string[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
};

export type FAQItem = {
  question: string;
  answer: string;
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
