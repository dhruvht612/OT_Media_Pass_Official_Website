# Ontario Tech Media Pass Website

A modern, responsive React + Vite + TailwindCSS website for the Ontario Tech Media Pass student media organization. Features a stunning glassmorphism design with smooth animations and a fully responsive layout.

## 🚀 Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **React Router Navigation** - Smooth single-page application experience with nested routes
- **TailwindCSS 4.0** - Modern, utility-first CSS framework with custom theme
- **Glassmorphism UI** - Beautiful glass-effect design with backdrop blur throughout
- **Smooth Animations** - Fade-in, hover effects, and interactive transitions
- **Static Data Management** - All content stored as local JavaScript modules (no backend required)
- **Swiper Integration** - Interactive carousels for gallery and featured content
- **Modern Design System** - Consistent color palette, typography, and component styling

## 📁 Project Structure

```
src/
├─ assets/                    # Images, logo, and media files
│   ├─ Logo.png
│   ├─ Team_Pictures/         # Team member photos
│   └─ Events_Pics&Posters/  # Event images and posters
├─ components/                # Reusable components
│   ├─ Navbar.jsx            # Glassmorphism navigation bar
│   ├─ Footer.jsx            # Enhanced footer with social links
│   ├─ PageHero.jsx          # Reusable hero section component
│   ├─ TeamCard.jsx           # Team member card component
│   ├─ EventCard.jsx         # Event display card
│   ├─ NewsCard.jsx           # News article card
│   ├─ GalleryItem.jsx       # Gallery image item
│   ├─ PositionCard.jsx      # Job position card
│   └─ Preloader.jsx          # Loading screen component
├─ pages/                     # Page components
│   ├─ Home.jsx              # Landing page with hero and stats
│   ├─ About.jsx              # About page
│   ├─ Team.jsx               # Team page with organized sections
│   ├─ Events/                # Events section
│   │   ├─ Overview.jsx       # Events overview page
│   │   ├─ Upcoming.jsx       # Upcoming events
│   │   ├─ Planned.jsx        # Planned events
│   │   └─ Past.jsx           # Past events
│   ├─ Gallery.jsx           # Media gallery with Swiper
│   ├─ News.jsx               # News and updates
│   ├─ Join.jsx               # Join page
│   ├─ Join/
│   │   └─ Positions.jsx      # Open positions page
│   └─ Contact.jsx            # Contact form and info
├─ data/                      # Static data files
│   ├─ team.js                # Team member data
│   ├─ events.js               # Events data
│   ├─ news.js                 # News articles
│   ├─ gallery.js              # Gallery images
│   └─ positions.js            # Job positions
├─ App.jsx                     # Main app component with routing
├─ main.jsx                    # Entry point
└─ index.css                   # Global styles with TailwindCSS and animations
```

## 🎨 Brand Colors

The website uses a modern dark theme with lavender accents:

- **Lavender**: `#ee88ee` - Primary accent color
- **Lavender Light**: `#c7a0ff` - Secondary accent
- **Lavender Dark**: `#330033` - Dark variant
- **Brand Black**: `#0b0b0b` - Primary background
- **White**: `#f5f5f5` - Text and highlights

## 🔤 Typography

- **Headings & Body**: Poppins (Google Fonts) - 400, 600, 700 weights
- **Secondary Text**: Open Sans (Google Fonts) - 400 weight

## ✨ Design Features

- **Glassmorphism Effects**: Backdrop blur with transparent backgrounds
- **Gradient Text**: Multi-color gradient text effects
- **Smooth Animations**: Fade-in, scale, and hover transitions
- **Interactive Elements**: Hover effects, scale transforms, and glow effects
- **Responsive Grids**: Flexible layouts that adapt to all screen sizes

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Ot_Media_Pass_Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder

5. **Preview production build:**
   ```bash
   npm run preview
   ```

6. **Lint code:**
   ```bash
   npm run lint
   ```

## 📄 Pages

- **Home** - Full-screen hero section with animated background, stats bar, core capabilities, and featured content
- **About** - Mission, vision, values, and what we do with enhanced visuals
- **Team** - Organized team sections (Presidents, Marketing, Outreach, Events, Tech, Finance) with member cards
- **Events** - Comprehensive events section:
  - Overview - All events summary
  - Upcoming - Future events
  - Planned - Events in planning
  - Past - Historical events archive
- **Gallery** - Interactive media gallery with Swiper carousel and modal views
- **News** - Latest club updates and articles with card layouts
- **Join** - Recruitment page with open positions and application information
- **Contact** - Contact form, location info, and social media links

## 🚀 Deployment

This project is ready to deploy on various platforms:

### Netlify
- Drag and drop the `dist` folder after building, or
- Connect your GitHub repository for automatic deployments
- The `netlify.toml` configuration file is included

### Vercel
- Connect your GitHub repository
- Vercel will automatically detect Vite and configure the build
- Supports automatic deployments on push

### GitHub Pages
- Build the project: `npm run build`
- Deploy the `dist` folder contents to GitHub Pages
- Configure base path in `vite.config.js` if needed

### Other Platforms
- Any static hosting service that supports SPA routing
- Ensure proper redirect rules for React Router

## 📝 Customization

### Updating Content

All content is stored in the `/src/data` folder:
- `team.js` - Team member information (name, role, bio, image, socials)
- `events.js` - Upcoming and past events (title, date, description, images)
- `news.js` - News articles and updates
- `gallery.js` - Gallery images and metadata
- `positions.js` - Open job positions and descriptions

Simply edit these JavaScript files to update the website content. The data is exported as arrays of objects.

### Updating Colors

Colors are defined in `src/index.css` using CSS custom properties in the `@theme` block:
```css
--color-lavender: #ee88ee;
--color-lavender-light: #c7a0ff;
```

You can also customize colors in `tailwind.config.js` if needed.

### Updating Styles

- Global styles: `src/index.css`
- Component styles: Inline Tailwind classes in component files
- Custom animations: Defined in `src/index.css` with keyframes

## 📱 Responsive Design

The website is fully responsive with Tailwind's default breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

All components are designed mobile-first and scale up for larger screens.

## ⚡ Performance

- **Vite Build Tool** - Lightning-fast development and optimized production builds
- **Code Splitting** - Automatic code splitting with React Router
- **Image Optimization** - Optimized image loading and lazy loading
- **Minimal Dependencies** - Only essential packages included
- **Tree Shaking** - Unused code automatically removed in production
- **Vercel Analytics** - Built-in analytics support (optional)

## 🛠️ Tech Stack

- **React 19** - UI library
- **React Router 7** - Client-side routing
- **Vite 7** - Build tool and dev server
- **TailwindCSS 4** - Utility-first CSS framework
- **Swiper 12** - Touch slider for carousels
- **ESLint** - Code linting

## 📧 Contact

For questions or support:
- **Email**: otmediapass@gmail.com
- **Location**: Ontario Tech University, 2000 Simcoe Street North, Oshawa, ON L1G 0C5

## 📄 License

This project is proprietary and belongs to Ontario Tech Media Pass.

---

Built with ❤️ by Ontario Tech Media Pass Team
