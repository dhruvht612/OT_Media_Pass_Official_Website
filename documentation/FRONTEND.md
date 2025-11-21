# Frontend Documentation

## Overview

The Ontario Tech Media Pass website is built as a modern Single Page Application (SPA) using React and TailwindCSS. It follows component-based architecture with client-side routing, static data management, and a responsive design system.

## Tech Stack

### Core Technologies

- **React 19.1.1**: UI library for building component-based interfaces
- **React DOM 19.1.1**: React renderer for web browsers
- **Vite 7.1.7**: Build tool and development server for fast development
- **React Router DOM 7.9.5**: Client-side routing for SPA navigation

### Styling & UI

- **TailwindCSS 4.1.17**: Utility-first CSS framework
- **PostCSS 8.5.6**: CSS processing with Autoprefixer
- **Font Awesome**: Icon library via CDN (`kit.fontawesome.com`)

### Development Tools

- **ESLint 9.36.0**: Code linting and quality checks
- **TypeScript Types**: Type definitions for React and React DOM
- **Vite React Plugin**: React Fast Refresh and HMR support

### Analytics & Deployment

- **Vercel Analytics 1.0**: Web analytics and performance monitoring
- **Netlify**: Deployment platform (configured via `netlify.toml`)

### Additional Libraries

- **Swiper 12.0.3**: Touch slider/carousel for image galleries

## Project Structure

```
Ot_Media_Pass_Website/
├── public/                 # Static assets
│   ├── Logo.png           # Site logo
│   └── vite.svg           # Vite icon
├── src/
│   ├── assets/            # Image assets
│   │   ├── Logo.png
│   │   ├── Events_Pics&Posters/
│   │   └── Team_Pictures/
│   ├── components/        # Reusable UI components
│   │   ├── EventCard.jsx
│   │   ├── Footer.jsx
│   │   ├── GalleryItem.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsCard.jsx
│   │   ├── PageHero.jsx
│   │   ├── PositionCard.jsx
│   │   ├── Preloader.jsx
│   │   └── TeamCard.jsx
│   ├── data/              # Static data files
│   │   ├── events.js
│   │   ├── gallery.js
│   │   ├── news.js
│   │   ├── positions.js
│   │   └── team.js
│   ├── pages/             # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Events/
│   │   │   ├── Overview.jsx
│   │   │   ├── Past.jsx
│   │   │   ├── Planned.jsx
│   │   │   └── Upcoming.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── Join/
│   │   │   ├── Join.jsx
│   │   │   └── Positions.jsx
│   │   ├── News.jsx
│   │   └── Team.jsx
│   ├── App.jsx            # Main app component with routing
│   ├── App.css            # App-specific styles
│   ├── index.css          # Global styles and Tailwind imports
│   └── main.jsx           # Application entry point
├── dist/                  # Build output directory
├── node_modules/          # Dependencies
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # TailwindCSS configuration
├── postcss.config.js      # PostCSS configuration
├── eslint.config.js       # ESLint configuration
├── netlify.toml           # Netlify deployment config
└── README.md              # Project documentation
```

## Component Architecture

### Component Hierarchy

```
App.jsx
├── Preloader (conditional)
└── Router
    ├── Navbar (global)
    ├── Routes
    │   ├── Home
    │   ├── About
    │   ├── Team
    │   │   └── TeamCard[]
    │   ├── Events/
    │   │   ├── Overview
    │   │   ├── Upcoming
    │   │   │   └── EventCard[]
    │   │   ├── Planned
    │   │   │   └── EventCard[]
    │   │   └── Past
    │   │       └── EventCard[]
    │   ├── Gallery
    │   │   └── GalleryItem[]
    │   ├── News
    │   │   └── NewsCard[]
    │   ├── Join
    │   │   ├── Join
    │   │   └── Positions
    │   │       └── PositionCard[]
    │   └── Contact
    └── Footer (global)
```

### Component Descriptions

#### Layout Components

**App.jsx**
- Root component with routing configuration
- Manages preloader state
- Sets up global layout structure (Navbar, Main, Footer)

**Navbar.jsx**
- Fixed navigation bar with responsive menu
- Active route highlighting
- Mobile hamburger menu
- Logo and brand display

**Footer.jsx**
- Site footer with links and copyright
- Social media links
- Contact information

**Preloader.jsx**
- Loading animation on initial page load
- Shows for maximum 3.5 seconds or until page load completes

#### Page Components

**Home.jsx**
- Hero section with CTA
- About preview
- Featured events
- Team preview
- Gallery preview

**About.jsx**
- Mission, vision, values
- Organization description
- What we do section

**Team.jsx**
- Grid of team members
- Uses TeamCard component for each member
- Filtering/sorting capabilities (if implemented)

**Events Pages**
- Overview.jsx: Overview of all events
- Upcoming.jsx: Upcoming events list
- Planned.jsx: Planned events list
- Past.jsx: Past events archive
- All use EventCard component

**Gallery.jsx**
- Image gallery with filtering
- Grid layout
- Modal/lightbox for full-size viewing
- Uses GalleryItem component

**News.jsx**
- List of news articles
- Uses NewsCard component
- Chronological ordering

**Join.jsx**
- Join information and CTAs
- Links to positions page

**Positions.jsx**
- Available positions listing
- Uses PositionCard component
- Application information

**Contact.jsx**
- Contact form
- Social media links
- Location information

#### Reusable Components

**EventCard.jsx**
- Displays event information
- Image, title, date, description
- Link to event details

**TeamCard.jsx**
- Team member profile card
- Photo, name, role, bio
- Social media links

**NewsCard.jsx**
- News article preview
- Image, headline, excerpt, date

**GalleryItem.jsx**
- Individual gallery image
- Hover effects
- Click to view full size

**PositionCard.jsx**
- Job/position listing
- Title, description, requirements

**PageHero.jsx**
- Reusable hero section component
- Title, subtitle, background image/gradient

## Routing Structure

### Routes Configuration

All routes are defined in `App.jsx` using React Router:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/about` | About | About page |
| `/team` | Team | Team members page |
| `/events` | Overview | Events overview |
| `/events/upcoming` | Upcoming | Upcoming events |
| `/events/planned` | Planned | Planned events |
| `/events/past` | Past | Past events |
| `/gallery` | Gallery | Media gallery |
| `/news` | News | News articles |
| `/join` | Join | Join information |
| `/join/positions` | Positions | Available positions |
| `/contact` | Contact | Contact page |

### Navigation Patterns

- **Active Route Highlighting**: Navbar highlights active route
- **Nested Routes**: Events and Join have sub-routes
- **Link Components**: Uses `Link` from React Router for navigation
- **No Page Refresh**: All navigation is client-side

## Data Management

### Static Data Files

Currently, all data is stored as static JavaScript files in `src/data/`:

**team.js**
- Exports `teamMembers` array
- Each member has: id, name, role, program, bio, image, socials

**events.js**
- Exports events arrays
- Each event has: id, title, date, description, image, location, etc.

**news.js**
- Exports `newsArticles` array
- Each article has: id, title, date, excerpt, image, content

**gallery.js**
- Exports `galleryItems` array
- Each item has: id, image, title, category, description

**positions.js**
- Exports `positions` array
- Each position has: id, title, description, requirements

### Data Flow

1. **Import**: Components import data from `data/` files
2. **Mapping**: Data is mapped over to create component instances
3. **Rendering**: Components render data-driven UI
4. **No State Management**: Currently no global state (Redux/Context) needed

### Future Data Management

When backend is integrated:
- API calls will replace static imports
- State management library (Context API or Redux) may be needed
- Data fetching hooks (React Query/SWR) for caching

## Styling Architecture

### TailwindCSS Setup

**Configuration** (`tailwind.config.js`):
- Content paths for class scanning
- Custom theme extensions (in `index.css`)

**Custom Theme** (`src/index.css`):
- Custom color variables
- Custom font families
- Utility classes (gradient-text, etc.)
- Global styles

### Styling Patterns

- **Utility-First**: Primarily Tailwind utility classes
- **Component Styles**: Minimal component-specific CSS
- **Responsive Design**: Mobile-first breakpoints
- **Dark Theme**: Black background with light text

### CSS Organization

- **Global Styles**: `index.css` (fonts, reset, utilities)
- **Component Styles**: Inline Tailwind classes
- **Custom Utilities**: Defined in `index.css` if needed
- **No CSS Modules**: Using Tailwind utility approach

## Build System

### Vite Configuration

**Development**:
- Fast HMR (Hot Module Replacement)
- React Fast Refresh
- Development server on `http://localhost:5173`

**Build**:
- Production build to `dist/`
- Code splitting and optimization
- Asset optimization (images, CSS, JS)

### Build Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Asset Handling

- **Images**: Imported as modules, optimized during build
- **Fonts**: Google Fonts via CDN
- **Icons**: Font Awesome via CDN
- **Static Files**: Served from `public/` directory

## Performance Optimizations

### Code Splitting

- **Route-based**: Each route is code-split automatically by Vite
- **Lazy Loading**: Can implement React.lazy() for further splitting

### Image Optimization

- **Build-time**: Vite optimizes images during build
- **Format**: JPG/PNG with appropriate compression
- **Lazy Loading**: Can implement lazy loading for gallery images

### Bundle Optimization

- **Tree Shaking**: Unused code removed automatically
- **Minification**: CSS and JS minified in production
- **Gzip/Brotli**: Compression via hosting platform

### Current Optimizations

- Minimal dependencies
- CDN for fonts/icons (reduces bundle size)
- Efficient React rendering
- Fast development experience with Vite

## Browser Support

### Supported Browsers

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Requirements**: ES6+ support, CSS Grid, Flexbox

### Polyfills

- None currently required
- Autoprefixer handles CSS vendor prefixes
- Vite handles JS transpilation for target browsers

## Development Workflow

### Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

### Code Standards

- **ESLint**: Enforced via eslint.config.js
- **React Best Practices**: Functional components, hooks
- **Component Structure**: Consistent prop patterns
- **Naming Conventions**: PascalCase for components, camelCase for variables

### File Organization

- **Components**: One component per file
- **Data**: Separate data files for easy editing
- **Assets**: Organized by type (images, etc.)
- **Pages**: One page component per route

## Deployment

### Netlify Configuration

**netlify.toml**:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirect rules for SPA routing

### Deployment Process

1. Build project: `npm run build`
2. Deploy `dist/` folder to Netlify
3. Configure redirects for client-side routing
4. Set up environment variables if needed

### Environment Variables

Currently none required. Future variables might include:
- API endpoints
- Analytics keys
- Feature flags

## Testing Strategy

### Current Testing

- Manual testing during development
- Browser testing on multiple devices
- No automated tests currently

### Future Testing Plans

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Component interaction tests
- **E2E Tests**: Playwright or Cypress
- **Visual Regression**: Storybook + Chromatic

## Analytics Integration

### Vercel Analytics

- Integrated via `@vercel/analytics/react`
- Automatic page view tracking
- Performance monitoring
- No additional configuration needed

### Future Analytics

- Custom event tracking
- User behavior analysis
- Conversion tracking
- Performance metrics

## Accessibility

### Current Implementation

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators

### Future Improvements

- Full WCAG 2.1 AA compliance audit
- Screen reader testing
- Keyboard-only navigation testing
- Color contrast validation

## Known Limitations

### Current Limitations

- **Static Data**: All content is hardcoded in data files
- **No CMS**: Content updates require code changes
- **No User Authentication**: No user accounts or admin panel
- **No Form Handling**: Contact form is not functional
- **Limited Interactivity**: Basic UI interactions only

### Performance Considerations

- Large image galleries may impact load time
- No pagination for large lists
- All data loaded on page load (no lazy loading)

## Future Enhancements

### Planned Features

- **Backend Integration**: API for dynamic content
- **Content Management**: Admin panel for content updates
- **Search Functionality**: Search events, news, gallery
- **Advanced Filters**: Filter gallery by category, date
- **User Accounts**: Member profiles, submissions
- **Real-time Updates**: Live event updates, notifications

### Technical Improvements

- **TypeScript Migration**: Add type safety
- **State Management**: Context API or Redux for complex state
- **Form Handling**: Form validation and submission
- **Image Optimization**: WebP format, responsive images
- **Progressive Web App**: PWA capabilities
- **SEO Optimization**: Meta tags, structured data

