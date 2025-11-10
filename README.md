# Ontario Tech Media Pass Website

A modern, responsive React + TailwindCSS website for the Ontario Tech Media Pass student media organization.

## 🚀 Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **React Router Navigation** - Smooth single-page application experience
- **TailwindCSS Styling** - Modern, utility-first CSS framework
- **Brand-Consistent Design** - Follows Ontario Tech Media Pass brand guidelines
- **Static Data** - All content stored as local JSON arrays (no backend required)

## 📁 Project Structure

```
src/
├─ assets/          # Images, logo, and media files
├─ components/      # Reusable components (Navbar, Footer, Cards)
├─ pages/           # Page components
│   ├─ Home.jsx
│   ├─ About.jsx
│   ├─ Team.jsx
│   ├─ Events/
│   │   ├─ Upcoming.jsx
│   │   └─ Past.jsx
│   ├─ Gallery.jsx
│   ├─ News.jsx
│   └─ Contact.jsx
├─ data/            # Static data files
│   ├─ team.js
│   ├─ events.js
│   ├─ news.js
│   └─ gallery.js
├─ App.jsx          # Main app component with routing
├─ main.jsx         # Entry point
└─ index.css        # Global styles with TailwindCSS
```

## 🎨 Brand Colors

- **Royal Blue**: #0148B2
- **Sage Green**: #A4AC86
- **Sand Yellow**: #E8E6DB
- **Black**: #1A1A1A
- **Lavender**: #86608E
- **Bright Yellow**: #FFDE59
- **Orange**: #FF914D
- **Deep Navy**: #00334F

## 🔤 Typography

- **Headings**: Anton (Google Fonts)
- **Body Text**: Quicksand (Google Fonts)

## 🛠️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📄 Pages

- **Home** - Hero section, about preview, featured events, and CTA
- **About** - Mission, vision, values, and what we do
- **Team** - Grid of team members with photos and bios
- **Events** - Upcoming and past events with detailed cards
- **Gallery** - Filterable media gallery with modal view
- **News** - Latest club updates and articles
- **Contact** - Contact form and social media links

## 🚀 Deployment

This project is ready to deploy on:
- **Netlify** - Drag and drop the `dist` folder after building
- **Vercel** - Connect your GitHub repository for automatic deployments
- **GitHub Pages** - Use the build output for static hosting

## 📝 Customization

### Updating Content

All content is stored in the `/src/data` folder:
- `team.js` - Team member information
- `events.js` - Upcoming and past events
- `news.js` - News articles and updates
- `gallery.js` - Gallery images and metadata

Simply edit these files to update the website content.

### Updating Colors

Colors are defined in `tailwind.config.js` and can be customized to match your brand.

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Optimized images loaded from CDN
- Minimal dependencies
- Fast page loads with Vite
- Code splitting with React Router

## 📧 Contact

For questions or support, contact: mediapass@ontariotechu.ca

---

Built with ❤️ by Ontario Tech Media Pass
