# Kerkar Creations Website

The official website for **Kerkar Creations** - an innovative AR/VR-focused creative studio specializing in immersive technology solutions, web development, mobile apps, Snap Lenses, Instagram filters, and game development.

## 🚀 Tech Stack

- **React 19** with TypeScript for type-safe development
- **Vite 7.x** for lightning-fast development and optimized builds
- **ESLint** with React-specific rules for code quality
- **Hot Module Replacement (HMR)** for instant development feedback

## 💻 Development

### Prerequisites
- Node.js 20.19.0 or higher
- npm or yarn package manager

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

5. **Run linting**
   ```bash
   npm run lint
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Main page components
├── sections/           # Page sections (Hero, Services, etc.)
├── assets/             # Static assets
├── styles/             # Global styles and CSS modules
├── types/              # TypeScript definitions
└── utils/              # Utility functions
```

## 🎯 Services Showcased

- **AR Studio**: Augmented Reality experiences and applications
- **App Studio**: Mobile and web application development
- **Web Development**: Modern, responsive websites and web apps
- **Snap Lenses**: Custom Snapchat lens development
- **Instagram Filters**: AR filters for social media
- **Game Development**: Interactive games and experiences

## 🤖 AI Development

This project includes `.github/copilot-instructions.md` for enhanced AI coding assistance. The instructions help AI agents understand the project structure, business context, and development patterns specific to Kerkar Creations.

## 📄 License

Private project for Kerkar Creations.
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
