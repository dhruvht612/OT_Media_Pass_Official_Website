# Design Documentation

## Overview

The Ontario Tech Media Pass website follows a modern, dark-themed design system that emphasizes creativity, professionalism, and visual storytelling. The design system is built around a cohesive color palette, typography hierarchy, and reusable UI components.

## Design Philosophy

- **Dark-First Design**: Black backgrounds with high-contrast elements create a cinematic, professional aesthetic
- **Visual Storytelling**: Large imagery, hero sections, and gallery-focused layouts showcase media content
- **Brand Consistency**: Design elements align with Ontario Tech Media Pass brand identity
- **Accessibility**: High contrast ratios and clear typography ensure readability across devices
- **Responsive**: Mobile-first approach ensures optimal viewing on all screen sizes

## Color Palette

### Primary Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Brand Black** | `#0b0b0b` | Primary background |
| **Lavender** | `#ee88ee` | Primary accent, CTAs, active states |
| **Lavender Light** | `#c7a0ff` | Hover states, gradients |
| **Lavender Dark** | `#330033` | Deep accents, shadows |
| **White** | `#f5f5f5` | Primary text, icons |

### Brand Colors (Referenced)

The following colors are part of the brand guidelines but used selectively:

- **Royal Blue**: `#0148B2`
- **Sage Green**: `#A4AC86`
- **Sand Yellow**: `#E8E6DB`
- **Bright Yellow**: `#FFDE59`
- **Orange**: `#FF914D`
- **Deep Navy**: `#00334F`

### Usage Guidelines

- **Background**: Primarily black (`#0b0b0b`) with gradient overlays
- **Text**: White/light gray (`#f5f5f5`, `rgba(255,255,255,0.8)`) for body text
- **Accents**: Lavender (`#ee88ee`) for buttons, links, and highlights
- **Overlays**: Semi-transparent black (`rgba(0,0,0,0.85)`) for navbar and cards
- **Borders**: Subtle white borders (`rgba(255,255,255,0.1)` to `rgba(255,255,255,0.2)`) for definition

## Typography

### Font Families

- **Primary Font (Headings)**: `Poppins` - Sans-serif, bold weights
  - Weights: 400 (Regular), 600 (Semi-Bold), 700 (Bold)
  - Used for: Headings, navigation, buttons, emphasis

- **Secondary Font (Body)**: `Open Sans` - Sans-serif, readable
  - Used for: Body text, descriptions, paragraphs

### Type Scale

| Element | Font Size | Font Weight | Line Height |
|---------|-----------|-------------|-------------|
| H1 (Hero) | `4xl - 7xl` (2.25rem - 4.5rem) | 700 (Bold) | Tight |
| H2 (Section) | `3xl - 5xl` (1.875rem - 3rem) | 700 (Bold) | 1.2 |
| H3 (Subsection) | `2xl - 3xl` (1.5rem - 1.875rem) | 600 (Semi-Bold) | 1.3 |
| Body Large | `lg` (1.125rem) | 400 (Regular) | 1.75 |
| Body | `base` (1rem) | 400 (Regular) | 1.6 |
| Small Text | `sm` (0.875rem) | 400 (Regular) | 1.5 |
| Caption | `xs` (0.75rem) | 400 (Regular) | 1.4 |

### Text Styles

- **Uppercase Labels**: Used for navigation, badges, and small labels with letter-spacing (`tracking-[0.25em]` to `tracking-[0.4em]`)
- **Gradient Text**: Applied to headings using lavender-to-white gradient
- **Text Opacity**: Body text uses reduced opacity (`text-white/80`) for hierarchy

## Layout Principles

### Grid System

- **Container Width**: Maximum `7xl` (1280px) with auto margins
- **Padding**: Responsive padding (`px-4 sm:px-6 lg:px-8`)
- **Gap Spacing**: Consistent gaps using Tailwind spacing scale (`gap-4`, `gap-6`, `gap-8`, `gap-12`)

### Breakpoints

| Device | Min Width | Max Width | Characteristics |
|--------|-----------|-----------|----------------|
| Mobile | 0px | 767px | Single column, stacked layouts |
| Tablet | 768px | 1023px | Two-column grids, side-by-side content |
| Desktop | 1024px+ | - | Multi-column grids, full-width sections |

### Section Spacing

- **Hero Sections**: `pt-32 pb-28 md:pb-36` (large top/bottom padding)
- **Content Sections**: `py-16 md:py-24` (consistent vertical rhythm)
- **Card Grids**: `gap-6 md:gap-8` (responsive gap spacing)

## Component Patterns

### Navigation Bar

- **Position**: Fixed top (`fixed top-0 z-50`)
- **Background**: Dark gradient with blur (`bg-gradient-to-r from-black/85 via-black/65 to-black/85 backdrop-blur-xl`)
- **Logo**: Circular with border, `h-12` on desktop
- **Links**: Rounded pill buttons with active states
- **Mobile Menu**: Full-width dropdown with hamburger toggle

**Active State Styling**:
```css
background: lavender
text: black
shadow: 0 0 25px rgba(232,136,232,0.35)
```

### Cards

- **Background**: Dark with semi-transparent overlay
- **Border**: Subtle white border (`border border-white/10`)
- **Hover**: Scale transform, glow effects, border color change
- **Padding**: Consistent internal spacing (`p-4` to `p-6`)

**Card Types**:
- Event Cards: Featured image, title, date, description
- Team Cards: Photo, name, role, social links
- News Cards: Image, headline, excerpt, date
- Gallery Items: Image with overlay on hover

### Buttons

**Primary Button**:
- Background: Lavender (`bg-lavender`)
- Text: Black
- Style: Rounded-full (pill shape)
- Hover: Lighter lavender, scale effect
- Shadow: Glow effect on hover

**Secondary Button**:
- Background: Transparent or `bg-white/10`
- Border: `border border-white/20`
- Text: White
- Hover: Border changes to lavender, text changes to lavender

**CTA Buttons**:
- Larger padding (`px-6 py-3`)
- Uppercase text with letter-spacing
- Prominent shadow/glow effects

### Hero Sections

- **Full-width background** with gradient overlays
- **Large typography** (4xl to 7xl)
- **Centered or split layout** (text + image)
- **Radial gradients** for depth (`bg-[radial-gradient(...)]`)
- **Call-to-action buttons** prominently displayed

### Image Galleries

- **Grid Layout**: Responsive grid (1-4 columns based on breakpoint)
- **Aspect Ratio**: Maintained with `object-cover`
- **Hover Effects**: Overlay with title/description, scale transform
- **Modal View**: Full-screen image viewer (if implemented)

## Visual Effects

### Gradients

- **Background Gradients**: `from-black via-[#120012] to-black`
- **Radial Gradients**: Used for subtle lighting effects
- **Text Gradients**: Lavender to white for headings
- **Button Gradients**: Solid colors with hover transitions

### Shadows & Glows

- **Glow Effects**: `shadow-[0_0_25px_rgba(232,136,232,0.35)]` for lavender elements
- **Card Shadows**: Subtle elevation with dark shadows
- **Text Shadows**: Optional for improved readability on images

### Blur Effects

- **Backdrop Blur**: `backdrop-blur-xl` for navigation and overlays
- **Gaussian Blur**: Used for background elements (`blur-3xl`)

### Transitions

- **Duration**: Standard `duration-300` (0.3s)
- **Easing**: Default Tailwind easing
- **Properties**: Color, transform, opacity, shadow

## Responsive Design Guidelines

### Mobile (< 768px)

- **Single column layouts**
- **Stacked navigation** with hamburger menu
- **Full-width images**
- **Reduced font sizes** (text-4xl instead of text-7xl)
- **Vertical spacing** optimized for scrolling
- **Touch-friendly targets** (min 44x44px)

### Tablet (768px - 1023px)

- **Two-column grids** for cards
- **Side-by-side content** in hero sections
- **Horizontal navigation** with reduced link count
- **Medium font sizes**
- **Optimized image sizes**

### Desktop (1024px+)

- **Multi-column grids** (3-4 columns)
- **Full navigation** with all links visible
- **Larger typography** and spacing
- **Hover states** prominently displayed
- **Maximum content width** with centered layout

## Accessibility Considerations

### Color Contrast

- **Text Contrast**: Minimum 4.5:1 for body text, 3:1 for large text
- **Interactive Elements**: Clear visual indicators for focus states
- **Link States**: Distinct styles for hover, focus, and active states

### Typography

- **Readable Font Sizes**: Minimum 16px for body text
- **Line Height**: 1.5-1.75 for optimal readability
- **Letter Spacing**: Adequate spacing for uppercase text

### Interactive Elements

- **Focus Indicators**: Visible outline on keyboard focus
- **Button Labels**: Clear, descriptive text
- **Image Alt Text**: All images have descriptive alt attributes
- **ARIA Labels**: Used for icon-only buttons

## Animation & Transitions

### Page Transitions

- **Preloader**: 3.5s max duration with loading animation
- **Route Transitions**: Smooth transitions between pages (if implemented)

### Micro-interactions

- **Hover Effects**: Scale, glow, color changes
- **Button Presses**: Subtle scale-down effect
- **Image Hover**: Overlay fade-in, slight zoom
- **Scroll Animations**: Fade-in on scroll (if implemented)

## Design Tokens (Tailwind Config)

The design system uses Tailwind CSS with custom theme extensions:

```javascript
// Custom colors defined in index.css
--color-brand-black: #0b0b0b
--color-lavender: #ee88ee
--color-lavender-light: #c7a0ff
--color-lavender-dark: #330033
```

## Design Assets

### Logo

- **File**: `public/Logo.png`
- **Usage**: Navigation bar, hero sections, favicon
- **Format**: PNG with transparency
- **Sizing**: Responsive (h-8 to h-12)

### Images

- **Team Photos**: Located in `src/assets/Team_Pictures/`
- **Event Images**: Located in `src/assets/Events_Pics&Posters/`
- **Format**: JPG/PNG
- **Optimization**: Images are optimized during build process

## Future Design Enhancements

- **Dark/Light Mode Toggle**: Optional light theme
- **Animation Library**: Framer Motion or similar for advanced animations
- **Design System Documentation Site**: Interactive component library
- **Brand Guidelines PDF**: Comprehensive brand guide
- **Accessibility Audit**: Regular WCAG compliance checks

