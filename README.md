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
- **React Icons** - Comprehensive icon library with Font Awesome icons
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

- **Home** (`/`) - Full-screen hero section with animated background, stats bar, core capabilities, testimonials, and featured content
- **About** (`/about`) - Mission, vision, values, and what we do with enhanced visuals
- **Team** (`/team`) - Organized team sections (Presidents, Marketing, Outreach, Events, Tech, Finance) with member cards and team statistics
- **Events** (`/events`) - Comprehensive events section:
  - Overview (`/events`) - All events summary
  - Upcoming (`/events/upcoming`) - Future events with booking CTA
  - Planned (`/events/planned`) - Events in planning phase
  - Past (`/events/past`) - Historical events archive
- **Gallery** (`/gallery`) - Interactive media gallery with Swiper carousel and modal views
- **News** (`/news`) - Latest club updates and articles with card layouts
- **Join** (`/join`) - Recruitment page with open positions and application information
  - Positions (`/join/positions`) - Detailed view of available positions
- **Contact** (`/contact`) - Contact form, location info, office hours, and social media links

## 🚀 Deployment

This project is ready to deploy on various platforms:

### Netlify
- Drag and drop the `dist` folder after building, or
- Connect your GitHub repository for automatic deployments
- The `netlify.toml` configuration file is included
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
- Connect your GitHub repository
- Vercel will automatically detect Vite and configure the build
- Supports automatic deployments on push
- Vercel Analytics is already integrated

### GitHub Pages
- Build the project: `npm run build`
- Deploy the `dist` folder contents to GitHub Pages
- Configure base path in `vite.config.js` if needed

### Other Platforms
- Any static hosting service that supports SPA routing
- Ensure proper redirect rules for React Router
- Build command: `npm run build`
- Output directory: `dist`

## 📝 Customization

### Updating Content

All content is stored in the `/src/data` folder:
- `team.js` - Team member information (name, role, bio, image, socials)
- `events.js` - Upcoming and past events (title, date, description, images)
- `news.js` - News articles and updates
- `gallery.js` - Gallery images and metadata
- `positions.js` - Open job positions and descriptions

Simply edit these JavaScript files to update the website content. The data is exported as arrays of objects. No backend or database required - everything is static and fast!

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

### Updating Icons

Icons are managed through `react-icons` library. To change icons:

1. Import the desired icon from `react-icons/fa` (Font Awesome), `react-icons/md` (Material Design), etc.
2. Replace the icon component in the relevant file
3. Example:
   ```jsx
   import { FaHome, FaUser } from 'react-icons/fa';
   <FaHome className="text-lg" />
   ```

Available icon sets:
- `react-icons/fa` - Font Awesome icons
- `react-icons/md` - Material Design icons
- `react-icons/io` - Ionicons
- And many more - see [react-icons documentation](https://react-icons.github.io/react-icons/)

## 📱 Responsive Design

The website is fully responsive with Tailwind's default breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

All components are designed mobile-first and scale up for larger screens. The navigation includes a mobile hamburger menu for optimal mobile experience.

## ⚡ Performance

- **Vite Build Tool** - Lightning-fast development and optimized production builds
- **Code Splitting** - Automatic code splitting with React Router
- **Image Optimization** - Optimized image loading and lazy loading
- **Minimal Dependencies** - Only essential packages included
- **Tree Shaking** - Unused code automatically removed in production (including React Icons)
- **Vercel Analytics** - Built-in analytics support (optional)
- **Icon Optimization** - React Icons supports tree-shaking for smaller bundle sizes

## 🛠️ Tech Stack

- **React 19.1.1** - Modern UI library with latest features
- **React Router 7.9.5** - Client-side routing for SPA navigation
- **Vite 7.1.7** - Lightning-fast build tool and dev server
- **TailwindCSS 4.1.17** - Utility-first CSS framework with custom theme
- **React Icons 5.5.0** - Comprehensive icon library (Font Awesome, Material, etc.)
- **Swiper 12.0.3** - Touch slider for carousels and galleries
- **Vercel Analytics 1.5.0** - Web analytics and performance monitoring
- **ESLint 9.36.0** - Code linting and quality checks

## 📧 Contact

For questions or support:
- **Email**: otmediapass@gmail.com
- **Location**: Ontario Tech University, 2000 Simcoe Street North, Oshawa, ON L1G 0C5

## 📄 License

This project is proprietary and belongs to Ontario Tech Media Pass.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server (runs on `http://localhost:5173`)
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

### Development Tips

- Hot Module Replacement (HMR) is enabled for instant updates
- Use React DevTools for debugging React components
- Check browser console for any warnings or errors
- All icons are from `react-icons` - no external CDN dependencies
- TailwindCSS classes are purged in production for optimal bundle size

## 🐛 Troubleshooting

### Icons not showing?
- Ensure `react-icons` is installed: `npm install react-icons`
- Check that icons are imported correctly from `react-icons/fa`

### Build errors?
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (v18+ recommended)
- Verify all dependencies are installed: `npm install`

### Styling issues?
- Ensure TailwindCSS is properly configured in `tailwind.config.js`
- Check that PostCSS is processing CSS correctly
- Verify custom colors are defined in `src/index.css`

---

Built with ❤️ by Ontario Tech Media Pass Team
