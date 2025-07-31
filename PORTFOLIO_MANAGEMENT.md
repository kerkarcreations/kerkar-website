# Portfolio Management Guide

## 📁 Managing Your Portfolio Projects

Your portfolio data is now centrally managed in `/src/data/portfolioData.ts`. This makes it easy to add, edit, or remove projects without touching the component code.

## 🎯 Adding a New Project

1. Open `/src/data/portfolioData.ts`
2. Add a new project object to the `portfolioProjects` array:

```typescript
{
  id: 7, // Use next available ID
  title: "Your Project Title",
  year: "2024",
  company: "CLIENT NAME",
  image: "/images/projects/your-project-image.jpg",
  height: "medium", // 'short' | 'medium' | 'tall'
  width: "normal", // 'narrow' | 'normal' | 'wide' (optional)
  description: "Brief description of the project",
  technologies: ["React", "TypeScript", "WebGL"],
  category: "Web Development", // See categories below
  featured: true, // Optional: adds red border
  link: "https://your-project-link.com" // Optional: makes card clickable
}
```

## 📊 Project Properties

### Required Fields
- `id`: Unique number for each project
- `title`: Project name/title
- `year`: Year of completion
- `company`: Client or company name
- `image`: Path to project image (relative to public folder)
- `height`: Card height - `'short'` | `'medium'` | `'tall'`

### Optional Fields
- `width`: Card width - `'narrow'` | `'normal'` | `'wide'` (defaults to 'normal')
- `description`: Project description (shows on hover)
- `technologies`: Array of technology tags
- `category`: Project category (see list below)
- `featured`: Boolean - adds red border highlight
- `link`: External link (makes card clickable)

## 🏷️ Available Categories
- `'AR/VR'`
- `'Web Development'`
- `'Mobile App'`
- `'Snap Lens'`
- `'IG Filter'`
- `'Game Development'`

## 🖼️ Managing Images

1. **Add images** to `/public/images/projects/`
2. **Reference them** in portfolioData.ts as `/images/projects/filename.jpg`
3. **Recommended sizes**:
   
   **Width by card type:**
   - Narrow: ~240px card width
   - Normal: ~300px card width  
   - Wide: ~380px card width
   
   **Height by card type:**
   - Short: ~200px (320px card height)
   - Medium: ~300px (400px card height)
   - Tall: ~500px (480px card height)

## 🎨 Card Dimensions

### Height Options
- **Short**: `320px` - Compact cards for simple projects
- **Medium**: `400px` - Standard cards for most projects
- **Tall**: `480px` - Extended cards for complex projects

### Width Options  
- **Narrow**: `240px` - Compact width for mobile/simple projects
- **Normal**: `300px` - Standard width (default if not specified)
- **Wide**: `380px` - Extended width for showcase projects

## 🔧 Helper Functions Available

The data file includes helpful utility functions:

```typescript
import { 
  getFeaturedProjects,
  getProjectsByCategory,
  getProjectsByYear,
  getAllCategories,
  getAllYears
} from '../data/portfolioData';

// Get only featured projects
const featured = getFeaturedProjects();

// Get projects by category
const arVrProjects = getProjectsByCategory('AR/VR');

// Get projects by year
const projects2023 = getProjectsByYear('2023');

// Get all unique categories
const categories = getAllCategories();

// Get all years (sorted newest first)
const years = getAllYears();
```

## 📱 Responsive Behavior

The portfolio automatically handles:
- **Desktop**: Horizontal scrolling with drag support
- **Mobile**: Touch-friendly scrolling
- **All devices**: Responsive card sizing and text

## 🎨 Visual Features

- **Hover Effects**: Description and tech tags appear on hover
- **Featured Projects**: Red border for important projects
- **Clickable Cards**: Auto-opens links in new tab
- **Smooth Animations**: Drag scrolling and hover transitions
- **Category Tags**: Visual category indicators
- **Tech Stack Tags**: Technology badges

## ✅ Quick Checklist for New Projects

- [ ] Add project object to `portfolioProjects` array
- [ ] Use unique ID number
- [ ] Add project image to `/public/images/projects/`
- [ ] Set appropriate `height` for visual balance
- [ ] Include relevant `technologies` array
- [ ] Set `featured: true` for important projects
- [ ] Add external `link` if available
- [ ] Choose appropriate `category`

## 🔄 Updating Existing Projects

Simply find the project by ID in the array and update any properties. The portfolio will automatically reflect your changes!

---

**Need help?** All styling is handled automatically - just focus on updating the data in `portfolioData.ts`!
