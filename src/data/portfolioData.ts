// Portfolio data configuration
// Update this file to manage your portfolio projects easily

export interface PortfolioProject {
  id: number;
  title: string;
  year: string;
  company: string;
  image: string;
  height: 'short' | 'medium' | 'tall';
  width?: 'narrow' | 'normal' | 'wide';
  description?: string;
  technologies?: string[];
  category?: 'AR/VR' | 'Web Development' | 'Mobile App' | 'Snap Lens' | 'IG Filter' | 'Game Development';
  link?: string;
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "AR Experience for Meta Quest",
    year: "2023",
    company: "META INC",
    image: "/images/projects/meta-ar-project.jpg", // Update with actual image paths
    height: "tall",
    width: "wide",
    description: "Immersive AR experience built for Meta Quest platform with advanced hand tracking",
    technologies: ["Unity", "C#", "Meta SDK", "Hand Tracking"],
    category: "AR/VR",
    featured: true,
    link: "https://example.com/meta-project"
  },
  {
    id: 2,
    title: "Snap Lens - Virtual Try-On",
    year: "2023",
    company: "SNAP INC",
    image: "/images/projects/snap-lens-project.jpg",
    height: "tall",
    width: "wide",
    description: "Interactive Snap Lens allowing users to virtually try on accessories",
    technologies: ["Lens Studio", "JavaScript", "3D Modeling"],
    category: "Snap Lens",
    featured: true,
    link: "https://example.com/snap-project"
  },
  {
    id: 3,
    title: "WebXR Shopping Experience",
    year: "2022",
    company: "GOOGLE",
    image: "/images/projects/google-webxr-project.jpg",
    height: "tall",
    width: "wide",
    description: "Revolutionary WebXR shopping platform with AR product visualization",
    technologies: ["WebXR", "Three.js", "React", "WebGL"],
    category: "AR/VR",
    featured: true,
    link: "https://example.com/google-project"
  },
  {
    id: 4,
    title: "iOS AR Navigation App",
    year: "2021",
    company: "APPLE INC",
    image: "/images/projects/apple-ar-nav.jpg",
    height: "tall",
    width: "wide",
    featured: true,
    description: "AR-powered navigation app for iOS with real-time directions overlay",
    technologies: ["Swift", "ARKit", "Core Location", "Metal"],
    category: "Mobile App",
    link: "https://example.com/apple-project"
  },
  {
    id: 5,
    title: "Instagram Filter Studio",
    year: "2023",
    company: "MICROSOFT",
    image: "/images/projects/instagram-filter.jpg",
    height: "tall",
    width: "wide",
    featured: true,
    description: "Creative Instagram filters with face tracking and interactive elements",
    technologies: ["Spark AR", "JavaScript", "GLSL"],
    category: "IG Filter",
    link: "https://example.com/instagram-project"
  },
  {
    id: 6,
    title: "VR Training Simulator",
    year: "2022",
    company: "NVIDIA",
    image: "/images/projects/nvidia-vr-training.jpg",
    height: "tall",
    width: "wide",
    description: "Professional VR training simulator with realistic physics simulation",
    technologies: ["Unreal Engine", "C++", "Nvidia Omniverse", "VR SDKs"],
    category: "AR/VR",
    featured: true,
    link: "https://example.com/nvidia-project"
  }
];

// Helper functions for filtering and sorting
export const getFeaturedProjects = (): PortfolioProject[] => {
  return portfolioProjects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: PortfolioProject['category']): PortfolioProject[] => {
  return portfolioProjects.filter(project => project.category === category);
};

export const getProjectsByYear = (year: string): PortfolioProject[] => {
  return portfolioProjects.filter(project => project.year === year);
};

export const getAllCategories = (): string[] => {
  const categories = portfolioProjects.map(project => project.category).filter(Boolean);
  return Array.from(new Set(categories)) as string[];
};

export const getAllYears = (): string[] => {
  const years = portfolioProjects.map(project => project.year);
  return Array.from(new Set(years)).sort((a, b) => parseInt(b) - parseInt(a));
};
