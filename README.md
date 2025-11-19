# Devexana - AI Voice Agent Consulting Platform

A comprehensive web application for **Devexana**, an AI voice agent consulting company that helps businesses implement the best voice AI solutions for their specific needs.

## 🚀 Features

### Core Components

1. **Hero Section**
   - Gradient background with animated elements
   - Dual CTAs (Schedule Consultation & View Case Studies)
   - Professional purple/blue gradient theme
   - Smooth scroll to sections

2. **Interactive Demo Section**
   - Industry category selector (Healthcare, Real Estate, E-Commerce, Financial Services, Insurance)
   - Agent type demos with play functionality
   - Sample transcripts preview
   - Request custom demo option

3. **Metrics Dashboard**
   - Animated counter statistics
   - 65M+ Customer Calls, 4M+ Hours Saved, +35% Answered Calls, 99.99% Uptime
   - Beautiful gradient cards with hover effects

4. **Client Logos**
   - Auto-scrolling carousel
   - Grayscale to color on hover
   - Trust indicators

5. **Services Grid**
   - Consulting Services (Strategy, Personality Design, Integration, Compliance, Optimization, Training)
   - Implementation Services (Development, CRM Integration, Multi-channel, Testing, Deployment, Support)
   - Tab-based navigation

6. **Tech Stack Diagram**
   - Interactive visualization
   - Input Channels → AI Core → Integrations → Analytics flow
   - Responsive mobile/desktop layouts

7. **Case Study Slider**
   - Client success stories with challenges, solutions, and results
   - Testimonials with quotes
   - Carousel navigation

8. **Pricing Calculator**
   - Interactive sliders for monthly minutes
   - Industry type selector
   - Add-on services checkboxes
   - Real-time price calculation
   - Estimated cost breakdown

9. **Resources Grid**
   - Blog posts, whitepapers, webinars, calculators
   - Filterable content types
   - Meta information (author, read time)

10. **Consultation Form**
    - Multi-step form (4 steps)
    - Company information, contact details, needs assessment, preferences
    - Progress indicator
    - Form validation

11. **Dark Mode Support**
    - Toggle between light/dark themes
    - Persistent preferences (localStorage)
    - Smooth transitions

### Additional Features

- **Responsive Design** - Mobile-first, works on all devices
- **Smooth Animations** - Framer Motion for all interactions
- **Glass Morphism Effects** - Modern UI design patterns
- **Accessibility** - WCAG 2.1 AA compliant
- **SEO Optimized** - Meta tags, schema markup, proper heading hierarchy

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Carousel**: Embla Carousel React

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Colors

- **Primary**: Purple (#7c3aed - #4c1d95)
- **Accent**: Blue (#3b82f6 - #1e3a8a)
- **Gradients**: Purple to Blue, radial gradients for backgrounds

### Typography

- **Display Font**: Plus Jakarta Sans
- **Body Font**: Inter

### Components

- Custom button styles (`btn-primary`, `btn-secondary`)
- Glass morphism effects (`.glass`, `.glass-dark`)
- Gradient backgrounds (`.gradient-bg`)
- Text gradients (`.text-gradient`)
- Card hover effects (`.card-hover`)

## 📁 Project Structure

```
/src
  /components
    - HeroSection.tsx
    - InteractiveDemo.tsx
    - MetricsDashboard.tsx
    - ServicesGrid.tsx
    - TechStackDiagram.tsx
    - CaseStudySlider.tsx
    - PricingCalculator.tsx
    - ClientLogos.tsx
    - ResourcesGrid.tsx
    - ConsultationForm.tsx
    - Header.tsx
    - Footer.tsx
  /data
    - mockData.ts
  /hooks
    - useAnimatedCounter.ts
  /lib
    - DarkModeContext.tsx
  /types
    - index.ts
  /assets
  - App.tsx
  - main.tsx
  - index.css
```

## 🎯 Key Sections

### Navigation

The header includes smooth scroll navigation to:
- Solutions (#demo)
- Services (#services)
- Case Studies (#case-studies)
- Pricing (#pricing)
- Resources (#resources)
- Consultation Form (#consultation)

### SEO & Meta Tags

Complete meta tags for:
- Open Graph (Facebook)
- Twitter Cards
- Keywords
- Author
- Theme color
- Robots indexing

## 🚧 Future Enhancements

1. **AI Agent Simulator** - Interactive chat interface to demo voice agents
2. **ROI Calculator Tool** - Calculate potential savings and efficiency gains
3. **Integration Checker** - Tool to check compatibility with existing business systems
4. **Blog Section** - Full blog with CMS integration
5. **Webinar Platform** - Integrated webinar viewing and registration
6. **Client Portal** - Dashboard for existing clients
7. **Analytics Integration** - Google Analytics, Mixpanel, etc.
8. **Email Marketing** - Newsletter signup and drip campaigns

## 📝 Customization

### Update Content

Edit `/src/data/mockData.ts` to modify:
- Industries
- Agent types
- Metrics
- Services
- Case studies
- Resources
- Client logos

### Update Branding

Edit `tailwind.config.js` to change:
- Colors
- Fonts
- Animations
- Custom utilities

### Update Copy

Edit individual component files to update:
- Headlines
- Descriptions
- CTAs
- Form fields

## 🌐 Deployment

Build the project for production:

```bash
npm run build
```

Deploy the `dist` folder to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting service

## 📊 Current Status

✅ All core components implemented
✅ Responsive design completed
✅ Dark mode support added
✅ SEO optimization complete
✅ Development server running at `http://localhost:5173/`

## 📄 License

© 2025 Devexana. All rights reserved.

## 🤝 Contributing

This is a proprietary project for Devexana. For internal contributions, please follow the company's development guidelines.

## 📞 Support

For questions or issues:
- Email: support@devexana.com
- Website: https://devexana.com

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
