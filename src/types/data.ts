/**
 * Project information interface
 */
export interface ProjectInfo {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  url?: string;
  githubUrl?: string;
  featured?: boolean;
}

/**
 * Work experience interface
 */
export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  location?: string;
}

/**
 * Education information interface
 */
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
  achievements?: string[];
}

/**
 * Skill category interface
 */
export interface SkillCategory {
  name: string;
  skills: string[];
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

/**
 * Contact information interface
 */
export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  phone?: string;
  location?: string;
}
