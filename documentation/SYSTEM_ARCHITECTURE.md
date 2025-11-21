# System Architecture

## Overview

The Ontario Tech Media Pass website follows a modern Single Page Application (SPA) architecture built on React with client-side routing. The system is designed with separation of concerns, component-based architecture, and scalability in mind.

## Architecture Principles

### 1. Single Page Application (SPA)
- All navigation occurs client-side without full page reloads
- Improved user experience with smooth transitions
- Faster navigation after initial load

### 2. Component-Based Architecture
- Reusable, modular components
- Separation of concerns (presentation vs. logic)
- Easy to test and maintain

### 3. Static Data Management
- Current: All data stored as JavaScript modules
- Future: Dynamic data via API endpoints
- Clear separation between data and presentation

### 4. Responsive Design
- Mobile-first approach
- Breakpoint-based layout adjustments
- Consistent experience across devices

## System Layers

### Presentation Layer

**Technology**: React 19.1.1
- **Purpose**: User interface rendering and interaction
- **Components**: 
  - Pages (Home, About, Team, Events, etc.)
  - Reusable UI components (Cards, Navbar, Footer)
  - Layout components (App, Preloader)

**Responsibilities**:
- Render UI based on route and state
- Handle user interactions
- Manage component-level state
- Communicate with data layer

### Routing Layer

**Technology**: React Router DOM 7.9.5
- **Purpose**: Client-side navigation and route management
- **Features**:
  - Declarative routing
  - Nested routes
  - Route parameters
  - Programmatic navigation

**Routes Structure**:
```
/ (Home)
├── /about
├── /team
├── /events
│   ├── /upcoming
│   ├── /planned
│   └── /past
├── /gallery
├── /news
├── /join
│   └── /positions
└── /contact
```

### Data Layer

**Current Implementation**:
- **Static Data**: JavaScript modules in `src/data/`
- **Data Files**:
  - `team.js` - Team member information
  - `events.js` - Event data (upcoming, planned, past)
  - `news.js` - News articles
  - `gallery.js` - Gallery images
  - `positions.js` - Job openings

**Data Flow**:
```
Data File (JavaScript Module)
    ↓
Import Statement
    ↓
Component Props/State
    ↓
UI Rendering
```

**Future Implementation**:
```
Frontend Component
    ↓
API Call (fetch/axios)
    ↓
Backend API (REST/GraphQL)
    ↓
Database (MongoDB)
```

### Styling Layer

**Technology**: TailwindCSS 4.1.17
- **Purpose**: Utility-first CSS framework
- **Custom Theme**: Extended with brand colors and fonts
- **Approach**: Utility classes with minimal custom CSS

**Organization**:
- Global styles: `src/index.css`
- Component styles: Tailwind utility classes (inline)
- Custom utilities: Defined in `index.css`

### Build Layer

**Technology**: Vite 7.1.7
- **Purpose**: Development server and production build
- **Features**:
  - Hot Module Replacement (HMR)
  - Fast builds with esbuild
  - Code splitting
  - Asset optimization

## Component Architecture

### Hierarchical Structure

```
App (Root)
│
├── Preloader (Conditional)
│
└── Router
    │
    ├── Navbar (Global Layout)
    │
    ├── Routes (Page Components)
    │   │
    │   ├── Home
    │   │   ├── Hero Section
    │   │   ├── About Preview
    │   │   ├── Event Cards
    │   │   └── Gallery Preview
    │   │
    │   ├── About
    │   ├── Team
    │   │   └── TeamCard[] (List)
    │   │
    │   ├── Events/
    │   │   ├── Overview
    │   │   ├── Upcoming
    │   │   │   └── EventCard[] (Filtered)
    │   │   ├── Planned
    │   │   │   └── EventCard[] (Filtered)
    │   │   └── Past
    │   │       └── EventCard[] (Filtered)
    │   │
    │   ├── Gallery
    │   │   └── GalleryItem[] (Grid)
    │   │
    │   ├── News
    │   │   └── NewsCard[] (List)
    │   │
    │   ├── Join
    │   │   └── Positions
    │   │       └── PositionCard[] (List)
    │   │
    │   └── Contact
    │
    └── Footer (Global Layout)
```

### Component Types

#### 1. Layout Components
- **App.jsx**: Root component with routing
- **Navbar.jsx**: Navigation bar
- **Footer.jsx**: Site footer
- **Preloader.jsx**: Loading screen

**Characteristics**:
- Global scope (visible on all/most pages)
- Manage layout structure
- Handle global state/navigation

#### 2. Page Components
- Located in `src/pages/`
- One component per route
- Composed of smaller components

**Characteristics**:
- Represent full page views
- Handle page-specific logic
- May fetch/process data

#### 3. Reusable Components
- Located in `src/components/`
- Card components, UI elements
- Can be used across multiple pages

**Examples**:
- `EventCard.jsx`
- `TeamCard.jsx`
- `NewsCard.jsx`
- `GalleryItem.jsx`
- `PositionCard.jsx`
- `PageHero.jsx`

**Characteristics**:
- Presentational (display data)
- Receive props for data
- Reusable across pages
- Consistent styling

## Data Flow Architecture

### Current Static Data Flow

```
┌─────────────────────┐
│   Data File (JS)    │
│   src/data/*.js     │
└──────────┬──────────┘
           │
           │ Export
           ▼
┌─────────────────────┐
│   Page Component    │
│   Import & Use      │
└──────────┬──────────┘
           │
           │ Map/Filter
           ▼
┌─────────────────────┐
│  Reusable Component │
│   (Card, etc.)      │
└──────────┬──────────┘
           │
           │ Props
           ▼
┌─────────────────────┐
│   UI Rendering      │
│   (DOM)             │
└─────────────────────┘
```

### Future API-Based Data Flow

```
┌─────────────────────┐
│  User Interaction   │
│  (Click, Form, etc.)│
└──────────┬──────────┘
           │
           │ Event Handler
           ▼
┌─────────────────────┐
│   Page Component    │
│   (useState/Effect) │
└──────────┬──────────┘
           │
           │ API Call
           ▼
┌─────────────────────┐
│   API Service       │
│   (fetch/axios)     │
└──────────┬──────────┘
           │
           │ HTTP Request
           ▼
┌─────────────────────┐
│   Backend API       │
│   (Express/Node.js) │
└──────────┬──────────┘
           │
           │ Query
           ▼
┌─────────────────────┐
│   Database          │
│   (MongoDB)         │
└─────────────────────┘
```

## State Management

### Current State Approach

**Component-Level State**:
- Local state using `useState` hook
- Component-specific data and UI state
- Examples: Navbar menu toggle, Preloader visibility

**No Global State**:
- No Redux, Context API, or global state management
- Data passed via props
- Simple and appropriate for current needs

### State Examples

```javascript
// Navbar - Menu Toggle
const [isOpen, setIsOpen] = useState(false);

// App - Preloader
const [isLoading, setIsLoading] = useState(true);

// Future: Gallery Filter
const [filter, setFilter] = useState('all');
const [selectedImage, setSelectedImage] = useState(null);
```

### Future State Management

**When Backend is Added**:
- **API State**: Fetching, loading, error states
- **User State**: Authentication, profile data
- **Form State**: Contact form, application forms
- **Cache State**: API response caching

**Potential Solutions**:
- React Context API (simple global state)
- React Query/SWR (server state management)
- Redux Toolkit (complex state needs)

## Request Flow (Future)

### Typical User Request Flow

```
1. User Action
   ↓
2. Event Handler (Component)
   ↓
3. API Service Function
   ↓
4. HTTP Request (fetch/axios)
   ↓
5. Backend API Endpoint
   ↓
6. Controller/Handler
   ↓
7. Service/Business Logic
   ↓
8. Database Query (Mongoose)
   ↓
9. Database (MongoDB)
   ↓
10. Response Back Through Layers
   ↓
11. Update Component State
   ↓
12. Re-render UI
```

## Deployment Architecture

### Current Deployment (Netlify)

```
┌─────────────────────────┐
│   GitHub Repository     │
│   (Source Code)         │
└────────────┬────────────┘
             │
             │ Git Push
             ▼
┌─────────────────────────┐
│   Netlify CI/CD         │
│   - npm run build       │
│   - Deploy dist/        │
└────────────┬────────────┘
             │
             │ Static Files
             ▼
┌─────────────────────────┐
│   Netlify CDN           │
│   (Global Distribution) │
└────────────┬────────────┘
             │
             │ HTTPS
             ▼
┌─────────────────────────┐
│   User Browser          │
│   (React SPA)           │
└─────────────────────────┘
```

### Future Deployment Architecture

```
┌─────────────────────────┐
│   Frontend (React SPA)  │
│   - Netlify/Vercel      │
│   - CDN Distribution    │
└────────────┬────────────┘
             │
             │ HTTPS/REST API
             ▼
┌─────────────────────────┐
│   Backend API           │
│   - Node.js + Express   │
│   - Docker Container    │
│   - Load Balancer       │
└────────────┬────────────┘
             │
      ┌──────┴──────┐
      │             │
      ▼             ▼
┌──────────┐  ┌──────────┐
│ MongoDB  │  │ AWS S3   │
│ Atlas    │  │ Storage  │
└──────────┘  └──────────┘
```

## Scalability Considerations

### Current Limitations

1. **Static Data**: All content in code files
2. **No Caching**: No API response caching
3. **No CDN**: Images served from same origin
4. **No Backend**: No dynamic content or user features

### Scalability Improvements (Future)

1. **Database**: Move to MongoDB for dynamic content
2. **CDN**: Use CloudFront/Cloudflare for assets
3. **Image Optimization**: Cloudinary for automatic optimization
4. **Caching**: Redis for API response caching
5. **Load Balancing**: Multiple server instances
6. **Code Splitting**: Route-based lazy loading
7. **API Pagination**: Handle large datasets efficiently

## Security Architecture

### Current Security Measures

1. **HTTPS**: Enforced by Netlify
2. **CSP Headers**: Content Security Policy (can be added)
3. **No User Input**: Static content, no forms processed
4. **No Backend**: No API endpoints to secure

### Future Security Measures

1. **Authentication**: JWT tokens, secure sessions
2. **Authorization**: Role-based access control (RBAC)
3. **Input Validation**: Server-side validation
4. **SQL Injection Prevention**: Parameterized queries (MongoDB)
5. **XSS Prevention**: Content sanitization
6. **CORS**: Configure allowed origins
7. **Rate Limiting**: Prevent API abuse
8. **HTTPS Only**: Enforce secure connections
9. **Environment Variables**: Secure secret management
10. **File Upload Security**: Type/size validation

## Performance Architecture

### Current Performance Optimizations

1. **Vite Build**: Fast builds with esbuild
2. **Code Splitting**: Automatic route-based splitting
3. **Minification**: Production builds minified
4. **Tree Shaking**: Unused code removed
5. **CDN Fonts**: Google Fonts via CDN

### Performance Metrics

**Target Metrics** (Future):
- **Lighthouse Score**: 90+ on all categories
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Future Performance Improvements

1. **Image Optimization**: WebP format, responsive images
2. **Lazy Loading**: Images and components
3. **Service Workers**: PWA capabilities, offline support
4. **API Caching**: Client-side and server-side caching
5. **Database Indexing**: Optimize queries
6. **CDN**: Global content delivery
7. **Bundle Analysis**: Monitor bundle size

## Monitoring & Analytics

### Current Monitoring

- **Vercel Analytics**: Basic page view tracking
- **Manual Testing**: Developer testing

### Future Monitoring

1. **Application Monitoring**: Error tracking (Sentry)
2. **Performance Monitoring**: APM tools
3. **API Monitoring**: Response times, error rates
4. **User Analytics**: Detailed user behavior
5. **Uptime Monitoring**: Service availability
6. **Log Aggregation**: Centralized logging

## Architecture Diagrams

### High-Level System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    User Browser                          │
│              (React SPA - Client-Side)                  │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ HTTP/HTTPS
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
┌──────────────┐         ┌──────────────┐
│  Netlify CDN │         │  Backend API │ (Future)
│  (Static)    │         │  (Dynamic)   │
└──────────────┘         └──────┬───────┘
                                │
                    ┌───────────┼───────────┐
                    │           │           │
                    ▼           ▼           ▼
            ┌──────────┐ ┌──────────┐ ┌──────────┐
            │ MongoDB  │ │  AWS S3  │ │  Email   │
            │ Database │ │ Storage  │ │ Service  │
            └──────────┘ └──────────┘ └──────────┘
```

### Component Interaction Flow

```
User Action
    │
    ▼
Event Handler (Component)
    │
    ├── Update Local State
    │       │
    │       └──► Re-render Component
    │
    └── Trigger Side Effect
            │
            ├── API Call (Future)
            │       │
            │       └──► Update State with Data
            │
            └── Navigation (React Router)
                    │
                    └──► Render New Page Component
```

## Technology Stack Summary

### Frontend
- **React 19.1.1**: UI library
- **React Router 7.9.5**: Client-side routing
- **TailwindCSS 4.1.17**: Styling
- **Vite 7.1.7**: Build tool
- **Swiper 12.0.3**: Image carousel

### Backend (Future)
- **Node.js**: Runtime
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM
- **JWT**: Authentication

### Infrastructure
- **Netlify**: Frontend hosting
- **Vercel Analytics**: Analytics
- **AWS S3/Cloudinary**: File storage (future)

## Conclusion

The current architecture is well-suited for a static content website. As the project evolves to include dynamic features, user authentication, and content management, the architecture can be extended with a backend API while maintaining the React frontend structure.

