# Reference Documentation

## Overview

This document provides a comprehensive reference guide for the Ontario Tech Media Pass website, including API references, component documentation, utility functions, common patterns, and troubleshooting.

## Table of Contents

1. [Component Reference](#component-reference)
2. [Data Structure Reference](#data-structure-reference)
3. [Routing Reference](#routing-reference)
4. [Styling Reference](#styling-reference)
5. [Utility Functions](#utility-functions)
6. [Common Patterns](#common-patterns)
7. [Troubleshooting](#troubleshooting)
8. [Quick Reference](#quick-reference)

## Component Reference

### Layout Components

#### App.jsx

**Purpose**: Root component with routing configuration

**Location**: `src/App.jsx`

**Features**:
- React Router setup
- Preloader state management
- Global layout structure

**Props**: None (root component)

**State**:
- `isLoading`: Boolean - Controls preloader visibility

**Example Usage**:
```jsx
// App.jsx is the root component, imported in main.jsx
import App from './App.jsx';
```

#### Navbar.jsx

**Purpose**: Global navigation bar

**Location**: `src/components/Navbar.jsx`

**Features**:
- Responsive mobile menu
- Active route highlighting
- Logo and brand display
- CTA buttons

**Props**: None

**State**:
- `isOpen`: Boolean - Controls mobile menu visibility

**Navigation Links**:
```javascript
[
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/team', label: 'Team' },
  { path: '/events', label: 'Events' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/news', label: 'News' },
  { path: '/join', label: 'Join' },
  { path: '/contact', label: 'Contact' }
]
```

#### Footer.jsx

**Purpose**: Site footer

**Location**: `src/components/Footer.jsx`

**Features**:
- Footer links
- Social media links
- Copyright information
- Contact information

**Props**: None

#### Preloader.jsx

**Purpose**: Loading screen on initial page load

**Location**: `src/components/Preloader.jsx`

**Features**:
- Animated loading indicator
- Displays during initial page load
- Auto-hides after 3.5 seconds or page load

**Props**: None

### Card Components

#### EventCard.jsx

**Purpose**: Display event information

**Location**: `src/components/EventCard.jsx`

**Props**:
- `event`: Object - Event data object
- `isPast`: Boolean (optional) - Whether event is in the past

**Event Object Structure**:
```javascript
{
  id: Number,
  title: String,
  date: String,
  description: String,
  location: String (optional),
  time: String (optional),
  category: String,
  image: String (optional),
  featured: Boolean (optional),
  recap: String (optional) // For past events
}
```

**Example Usage**:
```jsx
import EventCard from '../components/EventCard';

const EventsPage = () => {
  const event = {
    id: 1,
    title: "Workshop Event",
    date: "March 15, 2026",
    description: "Event description",
    location: "Main Hall",
    time: "6:00 PM - 8:00 PM",
    category: "workshop"
  };

  return <EventCard event={event} isPast={false} />;
};
```

#### TeamCard.jsx

**Purpose**: Display team member information

**Location**: `src/components/TeamCard.jsx`

**Props**:
- `member`: Object - Team member data object

**Member Object Structure**:
```javascript
{
  id: Number,
  name: String,
  role: String,
  program: String,
  bio: String,
  image: String,
  socials: {
    linkedin: String (optional),
    instagram: String (optional),
    github: String (optional),
    portfolio: String (optional),
    email: String (optional)
  }
}
```

**Example Usage**:
```jsx
import TeamCard from '../components/TeamCard';

const TeamPage = () => {
  const member = {
    id: 1,
    name: "John Doe",
    role: "Co-President",
    program: "Computer Science",
    bio: "Biography text",
    image: memberPic,
    socials: {
      linkedin: "https://linkedin.com/...",
      instagram: "https://instagram.com/..."
    }
  };

  return <TeamCard member={member} />;
};
```

#### NewsCard.jsx

**Purpose**: Display news article preview

**Location**: `src/components/NewsCard.jsx`

**Props**:
- `article`: Object - Article data object

**Article Object Structure**:
```javascript
{
  id: Number,
  title: String,
  date: String,
  excerpt: String,
  image: String (optional),
  content: String (optional),
  category: String (optional)
}
```

#### GalleryItem.jsx

**Purpose**: Display gallery image

**Location**: `src/components/GalleryItem.jsx`

**Props**:
- `item`: Object - Gallery item data object

**Gallery Item Structure**:
```javascript
{
  id: Number,
  title: String,
  description: String (optional),
  image: String,
  category: String,
  tags: Array<String> (optional)
}
```

#### PositionCard.jsx

**Purpose**: Display position/job listing

**Location**: `src/components/PositionCard.jsx`

**Props**:
- `position`: Object - Position data object

**Position Object Structure**:
```javascript
{
  id: Number,
  title: String,
  description: String,
  requirements: Array<String>,
  open: Boolean,
  deadline: String (optional)
}
```

### Utility Components

#### PageHero.jsx

**Purpose**: Reusable hero section component

**Location**: `src/components/PageHero.jsx`

**Props**:
- `title`: String - Hero title
- `subtitle`: String (optional) - Hero subtitle
- `backgroundImage`: String (optional) - Background image URL

**Example Usage**:
```jsx
<PageHero 
  title="Our Team" 
  subtitle="Meet the people behind OT Media Pass"
/>
```

## Data Structure Reference

### Data Files Location

All data files are located in `src/data/`:

- `team.js` - Team members
- `events.js` - Events (upcoming, planned, past)
- `news.js` - News articles
- `gallery.js` - Gallery images
- `positions.js` - Job openings

### Team Data Structure

**File**: `src/data/team.js`

**Export**: `teamMembers` array

**Object Structure**:
```javascript
{
  id: Number,              // Required: Unique identifier
  name: String,            // Required: Full name
  role: String,            // Required: Position/title
  program: String,         // Required: Academic program
  bio: String,             // Required: Biography
  image: String,           // Required: Image import
  socials: {               // Optional: Social media links
    linkedin: String,
    instagram: String,
    github: String,
    portfolio: String,
    email: String,
    tiktok: String,
    youtube: String,
    linktree: String
  }
}
```

**Example**:
```javascript
import memberPic from '../assets/Team_Pictures/Member_Pic.jpg';

{
  id: 1,
  name: "John Doe",
  role: "Co-President",
  program: "Computer Science",
  bio: "Biography text here",
  image: memberPic,
  socials: {
    linkedin: "https://linkedin.com/in/johndoe",
    instagram: "https://instagram.com/johndoe"
  }
}
```

### Events Data Structure

**File**: `src/data/events.js`

**Exports**: 
- `upcomingEvents` array
- `plannedEvents` array
- `pastEvents` array

**Object Structure**:
```javascript
{
  id: Number,              // Required: Unique identifier
  title: String,           // Required: Event title
  date: String,            // Required: Display date (formatted)
  description: String,     // Required: Event description
  location: String,        // Optional: Event location
  time: String,            // Optional: Event time
  category: String,        // Optional: Event category
  image: String,           // Optional: Event image
  featured: Boolean,       // Optional: Featured flag
  recap: String            // Optional: Event recap (past events)
}
```

**Example**:
```javascript
{
  id: 101,
  title: "Photography Workshop",
  date: "March 15, 2026",
  description: "Learn portrait photography techniques",
  location: "Main Hall",
  time: "6:00 PM - 8:00 PM",
  category: "workshop",
  featured: false
}
```

### News Data Structure

**File**: `src/data/news.js`

**Export**: `newsArticles` array

**Object Structure**:
```javascript
{
  id: Number,              // Required: Unique identifier
  title: String,           // Required: Article title
  date: String,            // Required: Publication date
  excerpt: String,         // Required: Short description
  content: String,         // Optional: Full article content
  image: String,           // Optional: Featured image
  author: String,          // Optional: Author name
  category: String         // Optional: Article category
}
```

### Gallery Data Structure

**File**: `src/data/gallery.js`

**Export**: `galleryItems` array

**Object Structure**:
```javascript
{
  id: Number,              // Required: Unique identifier
  title: String,           // Required: Image title
  description: String,     // Optional: Image description
  image: String,           // Required: Image import
  category: String,        // Optional: Category for filtering
  tags: Array<String>      // Optional: Tags array
}
```

### Positions Data Structure

**File**: `src/data/positions.js`

**Export**: `positions` array

**Object Structure**:
```javascript
{
  id: Number,              // Required: Unique identifier
  title: String,           // Required: Position title
  description: String,     // Required: Position description
  requirements: Array<String>, // Required: Requirements list
  open: Boolean,           // Required: Whether position is open
  deadline: String         // Optional: Application deadline
}
```

## Routing Reference

### Route Configuration

**Location**: `src/App.jsx`

**Routes**:
| Path | Component | Description |
|------|-----------|-------------|
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

### Navigation

**Programmatic Navigation**:
```jsx
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/about');
  };
  
  return <button onClick={handleClick}>Go to About</button>;
};
```

**Link Navigation**:
```jsx
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

**Active Route Detection**:
```jsx
import { useLocation } from 'react-router-dom';

const MyComponent = () => {
  const location = useLocation();
  const isActive = location.pathname === '/about';
  
  return <div className={isActive ? 'active' : ''}>About</div>;
};
```

## Styling Reference

### TailwindCSS Utilities

#### Layout

```jsx
// Flexbox
<div className="flex">          // display: flex
<div className="flex-col">      // flex-direction: column
<div className="items-center">  // align-items: center
<div className="justify-between"> // justify-content: space-between

// Grid
<div className="grid">          // display: grid
<div className="grid-cols-3">   // grid-template-columns: repeat(3, minmax(0, 1fr))
<div className="gap-4">         // gap: 1rem
```

#### Spacing

```jsx
// Padding
<div className="p-4">           // padding: 1rem
<div className="px-6">          // padding-left/right: 1.5rem
<div className="py-8">          // padding-top/bottom: 2rem

// Margin
<div className="m-4">           // margin: 1rem
<div className="mx-auto">       // margin-left/right: auto
<div className="mt-6">          // margin-top: 1.5rem
```

#### Colors

```jsx
// Background
<div className="bg-black">      // background-color: #000
<div className="bg-lavender">   // background-color: #ee88ee
<div className="bg-white/10">   // background-color: rgba(255,255,255,0.1)

// Text
<p className="text-white">      // color: white
<p className="text-lavender">   // color: #ee88ee
<p className="text-white/80">   // color: rgba(255,255,255,0.8)
```

#### Typography

```jsx
// Font Size
<h1 className="text-4xl">       // font-size: 2.25rem
<p className="text-base">       // font-size: 1rem
<span className="text-sm">      // font-size: 0.875rem

// Font Weight
<p className="font-bold">       // font-weight: 700
<p className="font-semibold">   // font-weight: 600
<p className="font-normal">     // font-weight: 400
```

#### Responsive

```jsx
// Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
  {/* Base: small, Medium+: base, Large+: large */}
</div>

// Breakpoints
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

### Custom Colors

**Available Custom Colors**:
- `lavender`: `#ee88ee`
- `lavender-light`: `#c7a0ff`
- `lavender-dark`: `#330033`
- `brand-black`: `#0b0b0b`

**Usage**:
```jsx
<div className="bg-lavender text-black">
<div className="border-lavender/30">  // 30% opacity
```

### Custom Utilities

**Gradient Text**:
```jsx
<h1 className="gradient-text">
  Gradient Text
</h1>
```

## Utility Functions

### Common Utility Functions (Future)

When backend is added, these utilities may be created:

```javascript
// src/utils/api.js
export const apiCall = async (endpoint, options = {}) => {
  // API call utility
};

// src/utils/formatDate.js
export const formatDate = (date) => {
  // Date formatting utility
};

// src/utils/imageOptimization.js
export const optimizeImage = (url, width) => {
  // Image optimization utility
};
```

## Common Patterns

### Mapping Data to Components

```jsx
// Map array of data to components
const events = [/* event data */];

return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {events.map(event => (
      <EventCard key={event.id} event={event} />
    ))}
  </div>
);
```

### Conditional Rendering

```jsx
// Ternary operator
{isLoading ? <Preloader /> : <Content />}

// Logical AND
{featured && <FeaturedBadge />}

// Conditional classes
<div className={`base-class ${isActive ? 'active' : ''}`}>
```

### Event Handlers

```jsx
// Inline handler
<button onClick={() => console.log('clicked')}>Click</button>

// Named function
const handleClick = () => {
  console.log('clicked');
};

<button onClick={handleClick}>Click</button>

// With parameters
const handleItemClick = (itemId) => {
  console.log('Item clicked:', itemId);
};

<button onClick={() => handleItemClick(item.id)}>Click</button>
```

### State Management

```jsx
// useState hook
const [state, setState] = useState(initialValue);

// Update state
setState(newValue);

// Update state based on previous
setState(prev => prev + 1);

// Multiple state values
const [name, setName] = useState('');
const [email, setEmail] = useState('');
```

### useEffect Hook

```jsx
// Run on mount
useEffect(() => {
  // Side effect code
}, []); // Empty dependency array

// Run on state change
useEffect(() => {
  // Side effect code
}, [dependency]); // Dependency array

// Cleanup
useEffect(() => {
  const timer = setTimeout(() => {}, 1000);
  
  return () => {
    clearTimeout(timer); // Cleanup function
  };
}, []);
```

## Troubleshooting

### Common Errors

#### 1. "Cannot find module"

**Error**: `Error: Cannot find module './Component'`

**Solution**:
- Check file path is correct
- Verify file exists
- Check spelling of filename
- Verify file extension (.jsx vs .js)

#### 2. "Cannot read property of undefined"

**Error**: `TypeError: Cannot read property 'title' of undefined`

**Solution**:
- Check data is passed correctly as props
- Add optional chaining: `event?.title`
- Add default values: `const { title = '' } = event || {}`

#### 3. "Warning: Each child in a list should have a unique key prop"

**Error**: React warning about missing keys

**Solution**:
```jsx
// ❌ Bad
{items.map(item => <Item data={item} />)}

// ✅ Good
{items.map(item => <Item key={item.id} data={item} />)}
```

#### 4. "Port already in use"

**Error**: Port 5173 is already in use

**Solution**:
```bash
# Find process using port
lsof -ti:5173

# Kill process
lsof -ti:5173 | xargs kill

# Or change port in vite.config.js
export default defineConfig({
  server: {
    port: 3000
  }
})
```

### Performance Issues

#### Images Not Optimizing

**Issue**: Large image sizes slow down site

**Solutions**:
- Optimize images before adding (compress, resize)
- Use WebP format when possible
- Use responsive images (different sizes for different screens)

#### Slow Page Load

**Issue**: Page takes too long to load

**Solutions**:
- Check network tab for slow requests
- Optimize images
- Enable code splitting
- Use lazy loading for images

## Quick Reference

### Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run linter

# Git
git status           # Check status
git add .            # Stage changes
git commit -m "msg"  # Commit changes
git push             # Push to remote
```

### File Paths Reference

```
Components:     src/components/
Pages:          src/pages/
Data:           src/data/
Assets:         src/assets/
Global Styles:  src/index.css
Entry Point:    src/main.jsx
App Component:  src/App.jsx
```

### Import Patterns

```jsx
// React imports
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Component imports
import Navbar from '../components/Navbar';
import EventCard from './EventCard';

// Asset imports
import logo from '../assets/Logo.png';

// Data imports
import { teamMembers } from '../data/team';
import { upcomingEvents } from '../data/events';
```

### JSX Patterns

```jsx
// Self-closing tags
<img src={image} alt="Description" />
<br />
<input type="text" />

// Conditional rendering
{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}

// Lists
{items.map(item => (
  <Item key={item.id} data={item} />
))}
```

## Additional Resources

- **React Docs**: https://react.dev
- **React Router**: https://reactrouter.com
- **TailwindCSS**: https://tailwindcss.com/docs
- **Vite**: https://vitejs.dev/guide
- **MDN Web Docs**: https://developer.mozilla.org

## Support

For issues or questions:
1. Check this reference documentation
2. Review other documentation files in `documentation/` folder
3. Create an issue on GitHub
4. Contact the development team

