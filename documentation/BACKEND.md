# Backend Documentation (Future Plans)

## Overview

This document outlines the planned backend architecture for the Ontario Tech Media Pass website. The current implementation is a static frontend application with hardcoded data. The future backend will enable dynamic content management, user authentication, content submissions, and administrative features.

## Current State

### What We Have Now

- **Static Frontend**: React SPA with client-side routing
- **Static Data**: All content stored in JavaScript files (`src/data/`)
- **No Backend**: No server, database, or API currently
- **No Authentication**: No user accounts or admin access
- **No Content Management**: Content updates require code deployment

### Limitations

- Content updates require developer intervention
- No user-generated content
- No administrative dashboard
- No form submissions processing
- No analytics beyond basic Vercel Analytics
- No content versioning or history

## Planned Backend Architecture

### Technology Stack Options

#### Option 1: Node.js + Express (Recommended)

**Backend Framework**:
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB** or **PostgreSQL**: Database
- **JWT**: Authentication tokens
- **Multer**: File upload handling

**Pros**:
- Same language as frontend (JavaScript/TypeScript)
- Large ecosystem and community
- Easy to integrate with React
- Flexible and scalable

**Cons**:
- Need to set up infrastructure
- More configuration required

#### Option 2: Serverless (Vercel/Netlify Functions)

**Backend Approach**:
- **Serverless Functions**: API routes as serverless functions
- **Firebase/Supabase**: Backend-as-a-Service
- **Vercel/Netlify**: Hosting platform with built-in functions

**Pros**:
- Minimal setup
- Scales automatically
- Cost-effective for small projects
- Easy deployment with frontend

**Cons**:
- Less control over infrastructure
- Cold start latency
- Vendor lock-in concerns

#### Option 3: Headless CMS

**Backend Approach**:
- **Strapi** or **Contentful** or **Sanity**: Headless CMS
- **Direct Integration**: Frontend fetches from CMS API
- **Built-in Admin Panel**: Content management interface

**Pros**:
- Fastest to implement
- Built-in admin interface
- Content management without code
- API automatically generated

**Cons**:
- Less customization
- Ongoing costs for hosted solutions
- May have limitations for complex features

### Recommended Architecture: Node.js + Express + MongoDB

Based on the project requirements, we recommend a Node.js backend with Express and MongoDB:

```
Frontend (React SPA)
    ↕️ HTTP/REST API
Backend (Node.js + Express)
    ↕️ ODM (Mongoose)
Database (MongoDB)
    ↕️ File Storage
Storage (AWS S3 / Cloudinary)
```

## Core Features to Implement

### 1. Content Management System (CMS)

#### Pages & Content

- **Dynamic Pages**: Store page content in database
- **WYSIWYG Editor**: Rich text editing for content
- **Media Library**: Upload and manage images/videos
- **Content Versioning**: Track changes and revisions
- **Draft/Published States**: Workflow for content approval

#### API Endpoints

```
GET    /api/pages/:slug          # Get page content
POST   /api/pages                # Create new page (admin)
PUT    /api/pages/:id            # Update page (admin)
DELETE /api/pages/:id            # Delete page (admin)
```

### 2. Events Management

#### Features

- **CRUD Operations**: Create, read, update, delete events
- **Event Categories**: Categorize events (upcoming, past, planned)
- **Event Details**: Rich event information, images, location
- **RSVP System**: User registration for events (future)
- **Event Calendar**: Calendar view of events

#### Database Schema

```javascript
Event {
  _id: ObjectId,
  title: String,
  description: String,
  date: Date,
  endDate: Date,
  location: String,
  category: Enum['upcoming', 'planned', 'past'],
  images: [String], // URLs to images
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date,
  createdBy: ObjectId // Reference to User
}
```

#### API Endpoints

```
GET    /api/events               # Get all events
GET    /api/events/:id           # Get single event
GET    /api/events/category/:cat # Get events by category
POST   /api/events               # Create event (admin)
PUT    /api/events/:id           # Update event (admin)
DELETE /api/events/:id           # Delete event (admin)
```

### 3. Team Management

#### Features

- **Team Member Profiles**: Dynamic team member information
- **Role Management**: Assign roles and responsibilities
- **Profile Photos**: Upload and manage member photos
- **Social Links**: Manage social media links
- **Member Ordering**: Control display order

#### Database Schema

```javascript
TeamMember {
  _id: ObjectId,
  name: String,
  role: String,
  program: String,
  bio: String,
  image: String, // URL to photo
  socials: {
    linkedin: String,
    instagram: String,
    github: String,
    portfolio: String,
    email: String
  },
  displayOrder: Number,
  active: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### API Endpoints

```
GET    /api/team                 # Get all team members
GET    /api/team/:id             # Get single member
POST   /api/team                 # Add member (admin)
PUT    /api/team/:id             # Update member (admin)
DELETE /api/team/:id             # Remove member (admin)
```

### 4. News & Blog System

#### Features

- **Article Management**: Create and edit news articles
- **Rich Content**: Support for images, videos, embeds
- **Categories/Tags**: Organize articles
- **Publishing Workflow**: Draft → Review → Published
- **SEO Optimization**: Meta tags, slugs, descriptions

#### Database Schema

```javascript
Article {
  _id: ObjectId,
  title: String,
  slug: String, // URL-friendly identifier
  excerpt: String,
  content: String, // Rich HTML content
  featuredImage: String,
  author: ObjectId, // Reference to User
  category: String,
  tags: [String],
  published: Boolean,
  publishedAt: Date,
  views: Number,
  createdAt: Date,
  updatedAt: Date
}
```

#### API Endpoints

```
GET    /api/news                 # Get all published articles
GET    /api/news/:slug           # Get single article
GET    /api/news/category/:cat   # Get articles by category
POST   /api/news                 # Create article (admin/author)
PUT    /api/news/:id             # Update article (admin/author)
DELETE /api/news/:id             # Delete article (admin)
```

### 5. Gallery Management

#### Features

- **Image Upload**: Multiple image upload
- **Image Metadata**: Titles, descriptions, categories
- **Image Optimization**: Automatic resizing and compression
- **Album Organization**: Group images into albums
- **Bulk Operations**: Batch upload and management

#### Database Schema

```javascript
GalleryItem {
  _id: ObjectId,
  title: String,
  description: String,
  imageUrl: String,
  thumbnailUrl: String,
  category: String,
  tags: [String],
  event: ObjectId, // Optional reference to Event
  uploadedBy: ObjectId, // Reference to User
  featured: Boolean,
  createdAt: Date
}
```

#### API Endpoints

```
GET    /api/gallery              # Get all gallery items
GET    /api/gallery/:id          # Get single item
GET    /api/gallery/category/:cat # Get by category
POST   /api/gallery              # Upload image (admin)
PUT    /api/gallery/:id          # Update item (admin)
DELETE /api/gallery/:id          # Delete item (admin)
POST   /api/gallery/upload       # Bulk upload
```

### 6. User Authentication & Authorization

#### Features

- **User Registration**: Sign up for accounts
- **Login/Logout**: Secure authentication
- **Role-Based Access**: Admin, Member, Guest roles
- **Password Reset**: Forgot password functionality
- **Profile Management**: User profiles and settings
- **JWT Tokens**: Stateless authentication

#### Database Schema

```javascript
User {
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String,
  role: Enum['admin', 'member', 'guest'],
  profileImage: String,
  bio: String,
  socialLinks: Object,
  active: Boolean,
  emailVerified: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

#### API Endpoints

```
POST   /api/auth/register        # Register new user
POST   /api/auth/login           # Login
POST   /api/auth/logout          # Logout
POST   /api/auth/refresh         # Refresh token
POST   /api/auth/forgot-password # Request password reset
POST   /api/auth/reset-password  # Reset password
GET    /api/auth/me              # Get current user
PUT    /api/auth/profile         # Update profile
```

### 7. Contact Form Processing

#### Features

- **Form Submission**: Process contact form submissions
- **Email Notifications**: Send emails to admins
- **Auto-Responder**: Confirmation email to user
- **Submission Logging**: Store submissions in database
- **Spam Protection**: CAPTCHA or similar

#### Database Schema

```javascript
ContactSubmission {
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  read: Boolean,
  responded: Boolean,
  createdAt: Date
}
```

#### API Endpoints

```
POST   /api/contact              # Submit contact form
GET    /api/contact              # Get submissions (admin)
PUT    /api/contact/:id/read     # Mark as read (admin)
DELETE /api/contact/:id          # Delete submission (admin)
```

### 8. Application System (Join/Positions)

#### Features

- **Position Management**: Create and manage open positions
- **Application Submission**: Users can apply for positions
- **Application Tracking**: Track application status
- **Resume/CV Upload**: Handle file uploads
- **Email Notifications**: Notify admins and applicants

#### Database Schema

```javascript
Position {
  _id: ObjectId,
  title: String,
  description: String,
  requirements: [String],
  open: Boolean,
  applicationDeadline: Date,
  createdAt: Date,
  updatedAt: Date
}

Application {
  _id: ObjectId,
  position: ObjectId, // Reference to Position
  applicant: {
    name: String,
    email: String,
    phone: String,
    program: String,
    year: String
  },
  resume: String, // URL to uploaded file
  coverLetter: String,
  status: Enum['pending', 'reviewing', 'accepted', 'rejected'],
  notes: String, // Internal notes
  submittedAt: Date,
  reviewedAt: Date,
  reviewedBy: ObjectId // Reference to User
}
```

#### API Endpoints

```
GET    /api/positions            # Get all open positions
GET    /api/positions/:id        # Get single position
POST   /api/positions            # Create position (admin)
PUT    /api/positions/:id        # Update position (admin)
DELETE /api/positions/:id        # Delete position (admin)

POST   /api/applications         # Submit application
GET    /api/applications         # Get applications (admin)
GET    /api/applications/:id     # Get single application (admin)
PUT    /api/applications/:id     # Update status (admin)
```

### 9. Admin Dashboard

#### Features

- **Content Management Interface**: Easy-to-use CMS
- **Analytics Dashboard**: View site statistics
- **User Management**: Manage users and permissions
- **Media Library**: Upload and organize media
- **Activity Logs**: Track changes and actions
- **Settings**: Configure site settings

#### Admin Features

- Dashboard overview with statistics
- Content editor (rich text, media)
- User management interface
- Media library browser
- Form submission viewer
- Application review interface
- Site settings configuration

### 10. File Storage & Media Management

#### Storage Options

**Option 1: Cloud Storage (Recommended)**
- **AWS S3**: Scalable object storage
- **Cloudinary**: Image optimization and CDN
- **DigitalOcean Spaces**: S3-compatible storage

**Option 2: Local Storage**
- Store files on server filesystem
- Simple but less scalable
- Good for development

#### Features

- **Image Upload**: Support multiple formats (JPG, PNG, WebP)
- **Image Optimization**: Automatic resizing and compression
- **Video Upload**: Support for video files
- **CDN Integration**: Fast delivery via CDN
- **File Organization**: Folders and tags for organization

## Database Design

### Database Choice: MongoDB

**Why MongoDB?**
- Flexible schema (good for evolving content structure)
- JSON-like documents (easy integration with JavaScript)
- Scalable and performant
- Good for content management
- Strong Node.js ecosystem support

### Database Collections

1. **users**: User accounts and authentication
2. **events**: Event information
3. **team**: Team member profiles
4. **articles**: News/blog articles
5. **gallery**: Gallery images
6. **positions**: Open positions
7. **applications**: Job applications
8. **contacts**: Contact form submissions
9. **pages**: Dynamic page content
10. **media**: Media library metadata

### Relationships

- Users → Articles (author relationship)
- Events → Gallery (event photos)
- Positions → Applications (one-to-many)
- Users → Applications (reviewer relationship)

## API Design

### RESTful API Structure

**Base URL**: `https://api.otmediapass.com/api`

**Versioning**: `/api/v1/...`

### Authentication

- **JWT Tokens**: Bearer token in Authorization header
- **Token Expiration**: 24 hours (refresh token available)
- **Protected Routes**: Require authentication header

### Response Format

**Success Response**:
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

**Error Response**:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  }
}
```

### Pagination

For list endpoints:
```
GET /api/events?page=1&limit=10
```

Response:
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "pages": 5
  }
}
```

## Security Considerations

### Authentication Security

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure token generation and validation
- **HTTPS**: Enforce HTTPS for all API requests
- **CORS**: Configure allowed origins
- **Rate Limiting**: Prevent abuse and DDoS

### Data Security

- **Input Validation**: Validate all user inputs
- **SQL Injection Prevention**: Use parameterized queries (MongoDB driver handles this)
- **XSS Prevention**: Sanitize user-generated content
- **File Upload Security**: Validate file types and sizes
- **Environment Variables**: Store secrets securely

### Authorization

- **Role-Based Access Control (RBAC)**: Admin, Member, Guest roles
- **Resource Ownership**: Users can only edit their own content (unless admin)
- **API Key Management**: For third-party integrations

## Deployment Architecture

### Production Setup

**Recommended Stack**:
- **Application Server**: Node.js on VPS (DigitalOcean, AWS EC2) or Docker
- **Database**: MongoDB Atlas (managed) or self-hosted
- **File Storage**: AWS S3 or Cloudinary
- **CDN**: CloudFront or Cloudflare
- **Reverse Proxy**: Nginx
- **SSL**: Let's Encrypt certificates

### Environment Variables

```env
# Server
NODE_ENV=production
PORT=3000
API_URL=https://api.otmediapass.com

# Database
MONGODB_URI=mongodb://...
DB_NAME=otmediapass

# Authentication
JWT_SECRET=...
JWT_EXPIRES_IN=24h

# File Storage
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_BUCKET_NAME=...
AWS_REGION=...

# Email
SMTP_HOST=...
SMTP_PORT=...
SMTP_USER=...
SMTP_PASS=...

# Frontend
FRONTEND_URL=https://otmediapass.com
```

## Implementation Phases

### Phase 1: Foundation (Weeks 1-2)

- Set up Node.js + Express backend
- Configure MongoDB connection
- Implement user authentication
- Create basic API structure
- Set up admin user

### Phase 2: Content Management (Weeks 3-4)

- Events CRUD API
- Team members API
- News articles API
- Gallery API
- Admin authentication

### Phase 3: File Upload (Week 5)

- File storage integration (S3/Cloudinary)
- Image upload endpoints
- Image optimization
- Media library API

### Phase 4: Frontend Integration (Weeks 6-7)

- Update React app to use API
- Replace static data with API calls
- Implement loading states
- Error handling

### Phase 5: Advanced Features (Weeks 8-9)

- Contact form processing
- Application system
- Admin dashboard (basic)
- Email notifications

### Phase 6: Polish & Optimization (Week 10)

- Performance optimization
- Security audit
- Testing
- Documentation
- Deployment

## Future Enhancements

### Advanced Features

- **Real-time Updates**: WebSocket integration for live updates
- **Comments System**: User comments on articles/events
- **Notification System**: In-app and email notifications
- **Search**: Full-text search across all content
- **Analytics**: Detailed analytics and reporting
- **Multi-language**: Internationalization support
- **API Documentation**: Swagger/OpenAPI documentation
- **GraphQL API**: Alternative to REST API
- **Caching**: Redis for improved performance
- **Background Jobs**: Queue system for email sending, image processing

### Integration Opportunities

- **Social Media**: Auto-post to Instagram, Twitter
- **Email Marketing**: Integration with Mailchimp/SendGrid
- **Calendar**: Google Calendar integration for events
- **Payment Processing**: Stripe for membership fees (future)
- **Third-party Auth**: OAuth (Google, Facebook login)

## Estimated Timeline

- **Development**: 8-10 weeks (with one developer)
- **Testing & Bug Fixes**: 2 weeks
- **Deployment & Migration**: 1 week
- **Total**: ~3 months for full backend implementation

## Cost Estimates

### Monthly Operating Costs

- **Hosting (VPS)**: $20-40/month (DigitalOcean/AWS)
- **Database (MongoDB Atlas)**: $0-25/month (free tier available)
- **File Storage (S3)**: $5-15/month (depending on usage)
- **CDN**: $0-10/month (Cloudflare free tier)
- **Email Service**: $0-10/month (SendGrid free tier)
- **Domain & SSL**: $10-15/year
- **Total**: ~$35-100/month

## Success Metrics

### Key Performance Indicators

- **API Response Time**: < 200ms for most endpoints
- **Uptime**: 99.9% availability
- **Content Updates**: Reduced from days to minutes
- **User Engagement**: Track user interactions
- **Admin Efficiency**: Time saved on content management

## Documentation Requirements

- **API Documentation**: Complete API reference (Swagger)
- **Admin Guide**: How to use admin dashboard
- **Developer Guide**: Setup and development instructions
- **Database Schema**: Complete schema documentation
- **Deployment Guide**: Production deployment steps

