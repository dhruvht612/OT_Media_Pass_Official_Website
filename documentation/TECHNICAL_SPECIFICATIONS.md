# Technical Specifications

## Overview

This document provides detailed technical specifications for the Ontario Tech Media Pass website, including requirements, API specifications, database schemas, performance metrics, and technology requirements.

## System Requirements

### Browser Requirements

**Minimum Supported Browsers**:
- Chrome: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Edge: Latest 2 versions
- iOS Safari: iOS 13+
- Chrome Mobile: Latest 2 versions

**Required Features**:
- ES6+ JavaScript support
- CSS Grid support
- Flexbox support
- Fetch API support
- LocalStorage support
- CSS Custom Properties (variables)

### Development Environment

**Required Software**:
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or yarn/pnpm equivalent)
- **Git**: Latest version
- **Code Editor**: VS Code (recommended) or similar

**Recommended Extensions** (VS Code):
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets

### Production Environment

**Hosting Requirements**:
- Static file hosting (Netlify, Vercel, GitHub Pages)
- HTTPS support
- Custom domain support
- CDN capability (recommended)
- Automatic deployments from Git

**Server Requirements** (Future Backend):
- Node.js: v18.0.0 LTS or higher
- 2GB RAM minimum (4GB recommended)
- 20GB storage minimum
- Ubuntu 20.04+ or similar Linux distribution

## Technology Stack Specifications

### Frontend Stack

#### React 19.1.1
- **Purpose**: UI library for component-based interfaces
- **Key Features**: Hooks, Context API, Suspense
- **Build Target**: ES2015+ modules
- **Browser Support**: Modern browsers (ES6+)

#### React Router DOM 7.9.5
- **Purpose**: Client-side routing
- **Mode**: BrowserRouter (HTML5 history API)
- **Features**: Nested routes, route parameters, programmatic navigation

#### TailwindCSS 4.1.17
- **Purpose**: Utility-first CSS framework
- **Custom Configuration**: Extended with brand colors and fonts
- **Build Process**: JIT (Just-In-Time) compilation
- **Output**: Optimized CSS bundle

#### Vite 7.1.7
- **Purpose**: Build tool and dev server
- **Build Tool**: esbuild (development), Rollup (production)
- **Dev Server**: Fast HMR with React Fast Refresh
- **Output Format**: ES modules

### Build Tools

#### ESLint 9.36.0
- **Configuration**: Flat config format
- **Plugins**: 
  - `eslint-plugin-react-hooks`
  - `eslint-plugin-react-refresh`
- **Rules**: Extended recommended rules with custom exceptions

#### PostCSS 8.5.6
- **Purpose**: CSS processing
- **Plugins**: 
  - `autoprefixer` (automatic vendor prefixes)
  - `@tailwindcss/postcss` (TailwindCSS)

## Data Structure Specifications

### Team Member Schema

```javascript
{
  id: Number,              // Unique identifier
  name: String,            // Full name
  role: String,            // Position/title
  program: String,         // Academic program
  bio: String,             // Biography text
  image: String,           // Image URL/path
  socials: {               // Social media links
    linkedin: String,      // LinkedIn URL (optional)
    instagram: String,     // Instagram URL (optional)
    github: String,        // GitHub URL (optional)
    portfolio: String,     // Portfolio URL (optional)
    email: String,         // Email address (optional)
    tiktok: String,        // TikTok URL (optional)
    youtube: String,       // YouTube URL (optional)
    linktree: String       // Linktree URL (optional)
  }
}
```

### Event Schema

```javascript
{
  id: Number,              // Unique identifier
  title: String,           // Event title
  date: String,            // Display date (formatted)
  description: String,     // Event description
  location: String,        // Event location (optional)
  time: String,            // Event time (optional)
  category: String,        // Event category (workshop, contest, etc.)
  image: String,           // Event image URL (optional)
  featured: Boolean,       // Featured event flag (optional)
  recap: String            // Event recap (for past events, optional)
}
```

### News Article Schema

```javascript
{
  id: Number,              // Unique identifier
  title: String,           // Article title
  date: String,            // Publication date
  excerpt: String,         // Short description
  content: String,         // Full article content (optional)
  image: String,           // Featured image URL (optional)
  author: String,          // Author name (optional)
  category: String         // Article category (optional)
}
```

### Gallery Item Schema

```javascript
{
  id: Number,              // Unique identifier
  title: String,           // Image title
  description: String,     // Image description (optional)
  image: String,           // Image URL
  category: String,        // Category for filtering
  tags: Array<String>,     // Tags array (optional)
  eventId: Number          // Associated event ID (optional)
}
```

### Position Schema

```javascript
{
  id: Number,              // Unique identifier
  title: String,           // Position title
  description: String,     // Position description
  requirements: Array<String>, // Requirements list
  open: Boolean,           // Whether position is open
  deadline: String         // Application deadline (optional)
}
```

## API Specifications (Future)

### Base URL
```
Production: https://api.otmediapass.com/api/v1
Development: http://localhost:3000/api/v1
```

### Authentication

**Method**: JWT (JSON Web Tokens)
**Header Format**: 
```
Authorization: Bearer <token>
```

**Token Expiration**: 24 hours
**Refresh Token**: Available for token renewal

### API Endpoints Specification

#### Events API

**GET /api/v1/events**
- **Description**: Get all events
- **Query Parameters**:
  - `category`: Filter by category (upcoming, planned, past)
  - `featured`: Filter featured events (true/false)
  - `page`: Page number (default: 1)
  - `limit`: Items per page (default: 10)
- **Response**: 
```json
{
  "success": true,
  "data": [/* array of events */],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "pages": 5
  }
}
```

**GET /api/v1/events/:id**
- **Description**: Get single event
- **Parameters**: `id` (event ID)
- **Response**:
```json
{
  "success": true,
  "data": {/* event object */}
}
```

**POST /api/v1/events** (Admin only)
- **Description**: Create new event
- **Body**: Event object (without id)
- **Response**: Created event object

**PUT /api/v1/events/:id** (Admin only)
- **Description**: Update event
- **Parameters**: `id` (event ID)
- **Body**: Partial event object
- **Response**: Updated event object

**DELETE /api/v1/events/:id** (Admin only)
- **Description**: Delete event
- **Parameters**: `id` (event ID)
- **Response**: Success confirmation

#### Team API

**GET /api/v1/team**
- **Description**: Get all team members
- **Response**: Array of team member objects

**GET /api/v1/team/:id**
- **Description**: Get single team member
- **Parameters**: `id` (member ID)
- **Response**: Team member object

**POST /api/v1/team** (Admin only)
- **Description**: Add team member
- **Body**: Team member object
- **Response**: Created team member object

**PUT /api/v1/team/:id** (Admin only)
- **Description**: Update team member
- **Parameters**: `id` (member ID)
- **Body**: Partial team member object
- **Response**: Updated team member object

**DELETE /api/v1/team/:id** (Admin only)
- **Description**: Remove team member
- **Parameters**: `id` (member ID)
- **Response**: Success confirmation

#### News API

**GET /api/v1/news**
- **Description**: Get all published articles
- **Query Parameters**:
  - `category`: Filter by category
  - `page`: Page number
  - `limit`: Items per page
- **Response**: Paginated articles array

**GET /api/v1/news/:slug**
- **Description**: Get article by slug
- **Parameters**: `slug` (URL-friendly identifier)
- **Response**: Article object

**POST /api/v1/news** (Admin/Author)
- **Description**: Create article
- **Body**: Article object
- **Response**: Created article object

#### Gallery API

**GET /api/v1/gallery**
- **Description**: Get gallery items
- **Query Parameters**:
  - `category`: Filter by category
  - `tags`: Filter by tags (comma-separated)
  - `page`: Page number
  - `limit`: Items per page
- **Response**: Paginated gallery items

**POST /api/v1/gallery** (Admin)
- **Description**: Upload gallery image
- **Body**: FormData with image file and metadata
- **Response**: Uploaded gallery item object

#### Authentication API

**POST /api/v1/auth/register**
- **Description**: Register new user
- **Body**: 
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```
- **Response**: User object (without password)

**POST /api/v1/auth/login**
- **Description**: Login user
- **Body**: 
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
- **Response**: 
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {/* user object */}
}
```

**POST /api/v1/auth/logout**
- **Description**: Logout user (invalidate token)
- **Headers**: Authorization Bearer token
- **Response**: Success confirmation

**GET /api/v1/auth/me**
- **Description**: Get current user
- **Headers**: Authorization Bearer token
- **Response**: User object

#### Contact API

**POST /api/v1/contact**
- **Description**: Submit contact form
- **Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Message text here"
}
```
- **Response**: Success confirmation

### Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {/* additional error details */}
  }
}
```

**Common Error Codes**:
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `422`: Validation Error
- `500`: Internal Server Error

## Database Schema Specifications (Future)

### MongoDB Collections

#### Users Collection

```javascript
{
  _id: ObjectId,
  email: String (unique, required),
  password: String (hashed, required),
  firstName: String,
  lastName: String,
  role: String (enum: ['admin', 'member', 'guest'], default: 'guest'),
  profileImage: String,
  bio: String,
  socialLinks: {
    linkedin: String,
    instagram: String,
    github: String,
    portfolio: String
  },
  active: Boolean (default: true),
  emailVerified: Boolean (default: false),
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
- `email`: Unique index
- `role`: Index for queries

#### Events Collection

```javascript
{
  _id: ObjectId,
  title: String (required),
  slug: String (unique, required),
  description: String,
  date: Date (required),
  endDate: Date,
  location: String,
  category: String (enum: ['upcoming', 'planned', 'past'], required),
  images: [String], // Array of image URLs
  featured: Boolean (default: false),
  createdBy: ObjectId (ref: 'User'),
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
- `category`: Index for filtering
- `date`: Index for sorting
- `slug`: Unique index
- `featured`: Index for featured queries

#### Team Collection

```javascript
{
  _id: ObjectId,
  name: String (required),
  role: String (required),
  program: String,
  bio: String,
  image: String, // Image URL
  socials: {
    linkedin: String,
    instagram: String,
    github: String,
    portfolio: String,
    email: String
  },
  displayOrder: Number,
  active: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
- `displayOrder`: Index for sorting
- `active`: Index for filtering

#### Articles Collection

```javascript
{
  _id: ObjectId,
  title: String (required),
  slug: String (unique, required),
  excerpt: String,
  content: String (required), // HTML content
  featuredImage: String,
  author: ObjectId (ref: 'User', required),
  category: String,
  tags: [String],
  published: Boolean (default: false),
  publishedAt: Date,
  views: Number (default: 0),
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
- `slug`: Unique index
- `published`: Index for filtering
- `publishedAt`: Index for sorting
- `category`: Index for filtering

#### Gallery Collection

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  imageUrl: String (required),
  thumbnailUrl: String,
  category: String,
  tags: [String],
  event: ObjectId (ref: 'Event'), // Optional reference
  uploadedBy: ObjectId (ref: 'User'),
  featured: Boolean (default: false),
  createdAt: Date
}
```

**Indexes**:
- `category`: Index for filtering
- `createdAt`: Index for sorting
- `event`: Index for event-related queries

## Performance Specifications

### Frontend Performance Targets

**Lighthouse Scores** (Target):
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

**Core Web Vitals**:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

**Load Time Targets**:
- **First Contentful Paint (FCP)**: < 1.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Total Blocking Time (TBT)**: < 200ms

### Bundle Size Targets

- **Initial Bundle (JS)**: < 200KB (gzipped)
- **Total Bundle (JS)**: < 500KB (gzipped)
- **CSS Bundle**: < 50KB (gzipped)
- **Lazy-loaded Routes**: < 50KB each (gzipped)

### API Performance Targets (Future)

- **Response Time (P95)**: < 200ms
- **Response Time (P99)**: < 500ms
- **Database Query Time**: < 100ms (average)
- **File Upload Time**: < 5s (for 10MB images)

## Security Specifications

### Frontend Security

**Content Security Policy (CSP)**:
```
default-src 'self';
script-src 'self' 'unsafe-inline' https://kit.fontawesome.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https:;
connect-src 'self' https://vitals.vercel-insights.com;
```

**Security Headers**:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Backend Security (Future)

**Authentication**:
- Password hashing: bcrypt (salt rounds: 12)
- JWT expiration: 24 hours
- Refresh token rotation
- Rate limiting: 5 requests/minute for auth endpoints

**Authorization**:
- Role-based access control (RBAC)
- Resource-level permissions
- API key authentication for external services

**Input Validation**:
- Server-side validation for all inputs
- Sanitization of user-generated content
- File type/size validation for uploads

**Data Protection**:
- HTTPS only (TLS 1.2+)
- Encrypted database connections
- Secure environment variables
- No sensitive data in logs

## File Upload Specifications

### Supported Formats

**Images**:
- **Formats**: JPG, JPEG, PNG, WebP
- **Max Size**: 10MB per file
- **Dimensions**: 
  - Team Photos: 500x500px (square)
  - Event Images: 1920x1080px (16:9)
  - Gallery Images: Up to 4K resolution
- **Optimization**: Automatic compression and resizing

**Documents** (Future):
- **Formats**: PDF
- **Max Size**: 5MB per file
- **Use Case**: Resumes, applications

### Storage Specifications

**Current**: 
- Static files in `src/assets/`
- Compiled to `dist/assets/`

**Future**:
- **Primary Storage**: AWS S3 or Cloudinary
- **CDN**: CloudFront or Cloudflare
- **Backup**: Automated backups
- **Versioning**: Enable S3 versioning

## Browser Compatibility Matrix

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Chrome Mobile |
|---------|--------|---------|--------|------|------------|---------------|
| React 19 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ES6+ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| CSS Grid | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Flexbox | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Fetch API | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| TailwindCSS | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## Environment Variables (Future)

### Frontend (.env)

```env
VITE_API_URL=https://api.otmediapass.com/api/v1
VITE_APP_NAME=OT Media Pass
VITE_ANALYTICS_ID=your_analytics_id
```

### Backend (.env)

```env
# Server
NODE_ENV=production
PORT=3000
API_URL=https://api.otmediapass.com

# Database
MONGODB_URI=mongodb://...
DB_NAME=otmediapass

# Authentication
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=24h

# File Storage
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_BUCKET_NAME=otmediapass-uploads
AWS_REGION=us-east-1

# Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=noreply@otmediapass.com
SMTP_PASS=...

# Frontend
FRONTEND_URL=https://otmediapass.com

# Analytics
ANALYTICS_KEY=...
```

## Versioning

### API Versioning
- **Format**: `/api/v1/...`
- **Strategy**: URL path versioning
- **Backward Compatibility**: Maintain previous versions for 6 months

### Application Versioning
- **Format**: Semantic Versioning (MAJOR.MINOR.PATCH)
- **Current Version**: 0.0.0 (pre-release)
- **Version Location**: `package.json`

## Testing Specifications (Future)

### Unit Testing
- **Framework**: Jest + React Testing Library
- **Coverage Target**: 80% code coverage
- **Test Location**: `__tests__/` or `*.test.js`

### Integration Testing
- **Framework**: Jest + Supertest (API)
- **Scope**: API endpoints, database interactions

### E2E Testing
- **Framework**: Playwright or Cypress
- **Scope**: Critical user flows
- **Test Scenarios**: 
  - User navigation
  - Form submissions
  - Content viewing

## Monitoring Specifications (Future)

### Application Monitoring
- **Error Tracking**: Sentry
- **Performance Monitoring**: APM tools
- **Uptime Monitoring**: Pingdom or UptimeRobot

### Logging
- **Format**: JSON structured logging
- **Levels**: error, warn, info, debug
- **Retention**: 30 days
- **Storage**: CloudWatch or similar

## Compliance & Standards

### Code Standards
- **JavaScript**: ES2020+
- **JSX**: React 19 conventions
- **CSS**: TailwindCSS utility-first
- **File Naming**: PascalCase (components), camelCase (utilities)

### Documentation Standards
- **Comments**: JSDoc format for functions
- **README**: Comprehensive setup instructions
- **API Docs**: OpenAPI/Swagger format

## Conclusion

These technical specifications provide a comprehensive foundation for development, ensuring consistency, performance, and maintainability throughout the project lifecycle.

