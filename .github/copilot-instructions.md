# Kerkar Creations Website - AI Coding Agent Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is the main website for **Kerkar Creations**, an AR/VR-focused creative studio that also specializes in web development, mobile app development, Snap Lens development, Instagram filter development, and game development.

## Tech Stack & Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7.x for fast development and optimized builds
- **Styling**: CSS Modules (preferred) or styled-components for component styling
- **Development**: Hot Module Replacement (HMR) enabled via Vite

## Development Workflow
- **Dev Server**: `npm run dev` - starts Vite dev server with HMR
- **Build**: `npm run build` - TypeScript compilation + Vite production build
- **Preview**: `npm run preview` - preview production build locally
- **Linting**: `npm run lint` - ESLint with React hooks and refresh plugins

## Project Structure Conventions
```
src/
├── components/          # Reusable UI components
├── pages/              # Main page components (Home, About, Portfolio, etc.)
├── sections/           # Page sections (Hero, Services, Projects, Contact)
├── assets/             # Static assets (images, icons, fonts)
├── styles/             # Global styles and CSS modules
├── types/              # TypeScript type definitions
└── utils/              # Utility functions and constants
```

## Key Business Context
- **Primary Focus**: AR/VR development showcases and case studies
- **Service Categories**: AR Studio, App Studio, Web Development, Snap Lenses, IG Filters, Game Development
- **Target Audience**: Businesses and individuals seeking immersive technology solutions
- **Brand Tone**: Professional, innovative, cutting-edge technology focus

## Component Patterns
- Use functional components with hooks (React 19)
- Prefer TypeScript interfaces for props and state
- Implement responsive design mobile-first approach
- Use semantic HTML and accessibility best practices
- Create reusable components for services, project cards, and testimonials

## Styling Guidelines
- Use CSS custom properties for theme variables (colors, spacing, typography)
- Implement dark/light theme support for modern UX
- Use CSS Grid and Flexbox for layouts
- Prefer CSS Modules for component-scoped styling
- Mobile-first responsive design with breakpoints: 768px (tablet), 1024px (desktop)

## Content Structure
- **Hero Section**: Company introduction with AR/VR focus
- **Services**: Highlight AR Studio, App Studio, and other capabilities
- **Portfolio**: Showcase projects with technology tags and case studies
- **About**: Company story and team expertise
- **Contact**: Professional contact form and business information

## Performance Considerations
- Optimize images and 3D assets for web delivery
- Implement lazy loading for portfolio content
- Use Vite's code splitting for optimal bundle sizes
- Consider WebGL integration for AR/VR previews or demos


Needs to be a futuristic, innovative, and professional design that reflects the cutting-edge nature of the services offered by Kerkar Creations. All things immersive you know and love, with a focus on AR/VR, web, and mobile technologies.