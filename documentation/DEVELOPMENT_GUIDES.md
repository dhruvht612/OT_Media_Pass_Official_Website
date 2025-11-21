# Development Guides

## Overview

This guide provides step-by-step instructions for setting up, developing, and contributing to the Ontario Tech Media Pass website. It covers everything from initial setup to deployment.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Setup](#project-setup)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Component Development](#component-development)
6. [Adding New Pages](#adding-new-pages)
7. [Adding New Data](#adding-new-data)
8. [Styling Guidelines](#styling-guidelines)
9. [Testing Guide](#testing-guide)
10. [Debugging Guide](#debugging-guide)
11. [Building for Production](#building-for-production)
12. [Deployment Guide](#deployment-guide)
13. [Contributing](#contributing)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com/))
- **Code Editor**: VS Code (recommended) or similar

### Verify Installation

```bash
# Check Node.js version
node --version
# Should output v18.0.0 or higher

# Check npm version
npm --version
# Should output v9.0.0 or higher

# Check Git version
git --version
```

## Project Setup

### 1. Clone the Repository

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd Ot_Media_Pass_Website
```

### 2. Install Dependencies

```bash
# Install all dependencies
npm install
```

This will install all packages listed in `package.json`:
- React and React DOM
- React Router DOM
- TailwindCSS and PostCSS
- Vite and plugins
- ESLint and plugins
- Swiper

### 3. Start Development Server

```bash
# Start the development server
npm run dev
```

The development server will start at `http://localhost:5173` (default Vite port).

You should see output like:
```
VITE v7.1.7  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 4. Open in Browser

Open your browser and navigate to `http://localhost:5173`.

You should see the Ontario Tech Media Pass website with hot module replacement (HMR) enabled - changes to files will automatically refresh in the browser.

## Development Workflow

### Typical Workflow

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Edit files in `src/`
   - Test changes in browser
   - Verify no console errors

3. **Test Locally**
   ```bash
   # Run linter
   npm run lint
   
   # Build for production (test build)
   npm run build
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

5. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

### Hot Module Replacement (HMR)

Vite provides fast HMR - changes to files automatically update in the browser without full page reload.

**Files that trigger HMR**:
- `src/**/*.jsx` - React components
- `src/**/*.js` - JavaScript files
- `src/**/*.css` - Stylesheets

**Files that require manual refresh**:
- `index.html` - HTML template
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind configuration

### Project Structure

```
Ot_Media_Pass_Website/
├── public/              # Static assets (served as-is)
│   ├── Logo.png
│   └── vite.svg
├── src/
│   ├── assets/          # Imported assets (images, etc.)
│   │   ├── Logo.png
│   │   ├── Events_Pics&Posters/
│   │   └── Team_Pictures/
│   ├── components/      # Reusable components
│   ├── data/            # Static data files
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── dist/                # Build output (generated)
├── node_modules/        # Dependencies (generated)
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

## Coding Standards

### JavaScript/JSX Style Guide

#### File Naming

- **Components**: PascalCase (`EventCard.jsx`, `Navbar.jsx`)
- **Utilities**: camelCase (`formatDate.js`, `apiService.js`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL.js`, `CONSTANTS.js`)

#### Component Naming

- Use PascalCase for component names
- Match component name to file name
- Use descriptive names

```jsx
// ✅ Good
const EventCard = ({ event }) => { ... }

// ❌ Bad
const eventCard = ({ event }) => { ... }
const Card = ({ event }) => { ... }  // Too generic
```

#### Variable Naming

- Use camelCase for variables and functions
- Use descriptive names
- Avoid abbreviations

```jsx
// ✅ Good
const eventDate = new Date();
const handleSubmit = () => { ... };
const isModalOpen = true;

// ❌ Bad
const ed = new Date();
const handle = () => { ... };
const modal = true;
```

#### Component Structure

Organize components in this order:

1. Imports (external libraries first, then local)
2. Component definition
3. Helper functions (if any)
4. Export statement

```jsx
// External imports
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Local imports
import logo from '../assets/Logo.png';
import './Component.css';  // If component-specific styles exist

// Component
const MyComponent = ({ prop1, prop2 }) => {
  // Hooks
  const [state, setState] = useState(initialValue);
  
  // Event handlers
  const handleClick = () => { ... };
  
  // Render
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};

// Export
export default MyComponent;
```

#### Props

- Use destructuring for props
- Provide default values when appropriate
- Validate props with PropTypes (if using)

```jsx
// ✅ Good
const EventCard = ({ event, isPast = false }) => {
  ...
};

// ❌ Bad
const EventCard = (props) => {
  const event = props.event;
  const isPast = props.isPast || false;
  ...
};
```

#### JSX Guidelines

- Use self-closing tags when possible
- Use semantic HTML elements
- Add `alt` text to images
- Use `key` prop for lists

```jsx
// ✅ Good
<img src={image} alt="Event poster" />
{events.map(event => (
  <EventCard key={event.id} event={event} />
))}

// ❌ Bad
<img src={image}></img>
{events.map(event => (
  <EventCard event={event} />  // Missing key
))}
```

### CSS/Tailwind Guidelines

- Use Tailwind utility classes primarily
- Avoid inline styles (except for dynamic values)
- Use custom CSS classes sparingly
- Follow responsive design patterns (mobile-first)

```jsx
// ✅ Good
<div className="bg-black text-white p-4 md:p-6 lg:p-8">

// ❌ Bad
<div style={{ backgroundColor: 'black', color: 'white', padding: '16px' }}>
```

## Component Development

### Creating a New Component

1. **Create Component File**
   ```bash
   # In src/components/
   touch NewComponent.jsx
   ```

2. **Write Component**
   ```jsx
   import { useState } from 'react';

   const NewComponent = ({ prop1, prop2 }) => {
     const [state, setState] = useState(null);

     return (
       <div className="component-wrapper">
         {/* Component content */}
       </div>
     );
   };

   export default NewComponent;
   ```

3. **Use Component**
   ```jsx
   import NewComponent from '../components/NewComponent';

   const MyPage = () => {
     return (
       <div>
         <NewComponent prop1="value1" prop2="value2" />
       </div>
     );
   };
   ```

### Component Best Practices

1. **Single Responsibility**: Each component should do one thing
2. **Reusability**: Make components reusable when possible
3. **Props Validation**: Use TypeScript or PropTypes (future)
4. **Error Handling**: Handle edge cases and errors gracefully
5. **Accessibility**: Use semantic HTML and ARIA attributes

### Example: Creating a Card Component

```jsx
// src/components/FeatureCard.jsx
const FeatureCard = ({ title, description, icon, onClick }) => {
  return (
    <div 
      className="bg-gray-950/60 border border-lavender/30 rounded-lg p-6 
                 hover:shadow-[0_0_20px_#ee88ee] transition-all duration-300 
                 cursor-pointer"
      onClick={onClick}
    >
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-bold text-lavender mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

export default FeatureCard;
```

## Adding New Pages

### Step 1: Create Page Component

```bash
# In src/pages/
touch NewPage.jsx
```

### Step 2: Write Page Component

```jsx
// src/pages/NewPage.jsx
import PageHero from '../components/PageHero';

const NewPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero title="New Page" subtitle="Page description" />
      
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Page content */}
      </section>
    </div>
  );
};

export default NewPage;
```

### Step 3: Add Route

```jsx
// src/App.jsx
import NewPage from './pages/NewPage';

// In Routes component
<Route path="/new-page" element={<NewPage />} />
```

### Step 4: Add Navigation Link

```jsx
// src/components/Navbar.jsx
const navLinks = [
  // ... existing links
  { path: '/new-page', label: 'New Page' },
];
```

## Adding New Data

### Adding Team Members

1. **Open Team Data File**
   ```bash
   # Edit src/data/team.js
   ```

2. **Add Team Member**
   ```javascript
   import newMemberPic from '../assets/Team_Pictures/NewMember_Pic.jpg';

   {
     id: 19,  // Next sequential ID
     name: "New Member",
     role: "Position Title",
     program: "Program Name",
     bio: "Biography text here",
     image: newMemberPic,
     socials: {
       linkedin: "https://linkedin.com/...",
       instagram: "https://instagram.com/..."
     }
   }
   ```

3. **Add Team Photo**
   - Place image in `src/assets/Team_Pictures/`
   - Name it `NewMember_Pic.jpg` (follow naming convention)
   - Import in `team.js`

### Adding Events

1. **Open Events Data File**
   ```bash
   # Edit src/data/events.js
   ```

2. **Add to Appropriate Array**
   - `upcomingEvents` - Future events
   - `plannedEvents` - Planned events
   - `pastEvents` - Past events

3. **Event Object Format**
   ```javascript
   {
     id: 201,  // Next sequential ID
     title: "Event Title",
     date: "March 15, 2026",
     description: "Event description",
     location: "Location name",
     time: "6:00 PM - 8:00 PM",
     category: "workshop",
     image: eventImage,  // Optional
     featured: false     // Optional
   }
   ```

### Adding News Articles

1. **Open News Data File**
   ```bash
   # Edit src/data/news.js
   ```

2. **Add Article**
   ```javascript
   {
     id: 301,
     title: "Article Title",
     date: "January 15, 2026",
     excerpt: "Short description",
     image: articleImage,  // Optional
     content: "Full article content",  // Optional
     category: "news"  // Optional
   }
   ```

### Adding Gallery Items

1. **Open Gallery Data File**
   ```bash
   # Edit src/data/gallery.js
   ```

2. **Add Image**
   ```javascript
   import newImage from '../assets/Gallery/new-image.jpg';

   {
     id: 401,
     title: "Image Title",
     description: "Image description",
     image: newImage,
     category: "events",  // For filtering
     tags: ["tag1", "tag2"]  // Optional
   }
   ```

## Styling Guidelines

### TailwindCSS Usage

**Prefer Tailwind utilities**:
```jsx
// ✅ Good
<div className="bg-black text-white p-4 rounded-lg">

// ❌ Avoid
<div className="custom-class">
```

**Responsive Design** (Mobile-first):
```jsx
<div className="text-sm md:text-base lg:text-lg">
  {/* Base: small, Medium+: base, Large+: large */}
</div>
```

**Custom Colors**:
```jsx
// Use custom colors from theme
<div className="bg-lavender text-black">
<div className="border-lavender/30">  // With opacity
```

### Custom CSS

When Tailwind utilities aren't sufficient:

1. **Add to `src/index.css`**
   ```css
   .custom-class {
     /* Custom styles */
   }
   ```

2. **Use in Component**
   ```jsx
   <div className="custom-class">
   ```

### Color Palette Reference

- `lavender`: `#ee88ee`
- `lavender-light`: `#c7a0ff`
- `lavender-dark`: `#330033`
- `brand-black`: `#0b0b0b`
- `white`: `#f5f5f5`

## Testing Guide

### Manual Testing

1. **Visual Testing**
   - Check all pages render correctly
   - Verify responsive design at different screen sizes
   - Test navigation links

2. **Functional Testing**
   - Test interactive elements (buttons, links)
   - Verify forms (if any)
   - Test mobile menu

3. **Browser Testing**
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)
   - Mobile browsers

### Automated Testing (Future)

```bash
# Run unit tests (when implemented)
npm test

# Run E2E tests (when implemented)
npm run test:e2e
```

## Debugging Guide

### Common Issues

#### 1. Module Not Found

**Error**: `Cannot find module '...'`

**Solutions**:
- Check import path is correct
- Verify file exists at path
- Check spelling of filename
- Restart dev server

#### 2. Build Errors

**Error**: Build fails with errors

**Solutions**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
```

#### 3. Styles Not Applying

**Solutions**:
- Check Tailwind classes are correct
- Verify `tailwind.config.js` includes file paths
- Check if class is purged (shouldn't happen with JIT)
- Restart dev server

#### 4. Images Not Loading

**Solutions**:
- Verify image path in import
- Check image exists in assets folder
- Verify file extension matches
- Check image format is supported (JPG, PNG, WebP)

### Developer Tools

**React Developer Tools**:
- Install [React DevTools](https://react.dev/learn/react-developer-tools) browser extension
- Inspect component tree
- View component props and state

**Browser DevTools**:
- **Console**: Check for errors
- **Network**: Monitor API calls (future)
- **Elements**: Inspect DOM structure
- **Performance**: Analyze performance

### Debugging Tips

1. **Console Logging**
   ```jsx
   console.log('Debug value:', value);
   ```

2. **React DevTools**
   - Inspect component state
   - Monitor props changes
   - Profile performance

3. **Breakpoints**
   - Use browser DevTools debugger
   - Set breakpoints in source code

## Building for Production

### Build Command

```bash
# Build for production
npm run build
```

This will:
- Optimize code (minification, tree-shaking)
- Bundle assets
- Generate production-ready files in `dist/`

### Build Output

```
dist/
├── assets/
│   ├── index-*.js      # Optimized JavaScript
│   ├── index-*.css     # Optimized CSS
│   └── *.jpg           # Optimized images
└── index.html          # HTML file
```

### Preview Production Build

```bash
# Preview production build locally
npm run preview
```

Opens `http://localhost:4173` with production build.

### Build Optimization

The build process:
- **Minifies** JavaScript and CSS
- **Tree-shakes** unused code
- **Optimizes** images (during build)
- **Code-splits** by route
- **Generates** source maps (for debugging)

## Deployment Guide

### Netlify Deployment

#### Automatic Deployment (Recommended)

1. **Connect Repository**
   - Log in to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub/GitLab/Bitbucket repository
   - Select repository branch (usually `main` or `master`)

2. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Netlify will detect settings from `netlify.toml`

3. **Deploy**
   - Netlify automatically builds and deploys
   - Future commits to main branch auto-deploy

#### Manual Deployment

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Deploy dist/ Folder**
   - Log in to Netlify
   - Drag and drop `dist/` folder
   - Site is live immediately

### Environment Variables (Future)

If using environment variables:

1. **Add in Netlify Dashboard**
   - Site settings → Environment variables
   - Add variables (e.g., `VITE_API_URL`)

2. **Redeploy**
   - Trigger new deployment
   - Variables available at build time

### Custom Domain

1. **Add Domain in Netlify**
   - Site settings → Domain management
   - Add custom domain

2. **Configure DNS**
   - Add CNAME record pointing to Netlify
   - Wait for DNS propagation

### Other Deployment Options

**Vercel**:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**GitHub Pages**:
- Requires additional configuration
- See Vite docs for GitHub Pages deployment

## Contributing

### Contribution Guidelines

1. **Fork Repository**
   - Fork the repository on GitHub

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Follow coding standards
   - Write clear commit messages
   - Test your changes

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Create Pull Request on GitHub
   - Describe changes in PR description

### Commit Message Format

```
type: short description

Optional longer description explaining what and why
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples**:
```
feat: Add gallery filter functionality
fix: Resolve navbar mobile menu issue
docs: Update development guide
```

### Code Review Process

1. PR is reviewed by maintainers
2. Address review comments
3. PR is approved and merged
4. Changes are deployed automatically

## Troubleshooting

### Common Issues

**Issue**: `npm install` fails
**Solution**: 
- Delete `node_modules` and `package-lock.json`
- Clear npm cache: `npm cache clean --force`
- Run `npm install` again

**Issue**: Port 5173 already in use
**Solution**: 
- Kill process using port: `lsof -ti:5173 | xargs kill`
- Or change port in `vite.config.js`

**Issue**: Changes not reflecting in browser
**Solution**: 
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Restart dev server

## Additional Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide)
- [Git Documentation](https://git-scm.com/doc)

## Getting Help

- **Issues**: Create issue on GitHub
- **Questions**: Check existing issues or create new one
- **Documentation**: See `documentation/` folder

