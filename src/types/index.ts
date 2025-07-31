// Service interfaces
export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
}

// Project interfaces
export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'AR/VR' | 'Web Development' | 'Mobile App' | 'Snap Lens' | 'IG Filter' | 'Game Development';
  technologies: string[];
  image: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
}

// Team member interface
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

// Contact form interface
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
  serviceInterest: string[];
}

// Navigation interface
export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}
