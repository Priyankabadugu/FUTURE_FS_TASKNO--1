export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Data Science' | 'Web App';
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  status?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  gradeLabel: string;
  courses: string[];
  description: string;
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 0-100
    category: string;
    icon?: string;
    experience?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  department?: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  skillsCovered: string[];
  iconName?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  description: string;
  date: string;
  badge: string;
}

export interface PortfolioProfile {
  name: string;
  title: string;
  subTitle: string;
  shortBio: string;
  fullBio: string[];
  email: string;
  phone: string;
  location: string;
  availability: string;
  avatarUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    leetcode?: string;
    twitter?: string;
  };
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
}
