# Pranava Kshetra - Conscious Living Initiative

> Building conscious communities through sustainability and inner transformation

A modern, responsive web application showcasing Pranava Kshetra's mission to create sustainable communities that foster inner transformation, environmental consciousness, and social harmony.

## ⚡ Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**  
   Visit the local URL shown in your terminal (usually [http://localhost:5173](http://localhost:5173)).

## 📝 How to Make Changes

- **Edit UI Components:**  
  Change files in `src/components/` (e.g., `Navbar.tsx`, `HeroSection.tsx`) to update navigation, hero, etc.

- **Edit Homepage:**  
  Modify `src/pages/Index.tsx` to change homepage layout or sections.

- **Change Styles:**  
  Update `tailwind.config.ts` for theme colors, fonts, and custom styles.  
  Use Tailwind utility classes in your `.tsx` files for layout/design tweaks.

- **Add/Edit Pages:**  
  Place new or updated pages in `src/pages/`.

- **Assets:**  
  Add images or static files in a `public/` or `assets/` folder if needed.

- **Live Reload:**  
  Save your changes and the site will auto-refresh in your browser.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI**: Clean, elegant interface using Tailwind CSS
- **Interactive Elements**: Smooth animations, hover effects, and engaging user interactions
- **Optimized Performance**: Built with Vite for fast development and production builds
- **Accessibility**: WCAG compliant design patterns and keyboard navigation support

## 🏗️ Architecture

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── Navbar.tsx      # Navigation header
│   ├── HeroSection.tsx # Landing hero section
│   ├── WelcomeSection.tsx # Welcome message
│   ├── TwoPillarsSection.tsx # Model Village & Gurukulam
│   ├── MissionVisionSection.tsx # Mission & Vision cards
│   ├── TestimonialCarousel.tsx # User testimonials
│   ├── GallerySection.tsx # Image gallery
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Root application component
```

### Component Architecture
- **Atomic Design**: Components built following atomic design principles
- **Composition Pattern**: Flexible component composition using React children
- **Single Responsibility**: Each component handles one specific concern
- **Reusability**: Shared components in `/ui` folder for consistent design system

## 🛠️ Tech Stack

### Core Framework
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development with excellent IDE support
- **Vite** - Lightning-fast build tool and development server

### Styling
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### State Management & Data Fetching
- **TanStack Query (React Query)** - Powerful data synchronization for React

### Forms & Validation
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Routing & Navigation
- **React Router DOM** - Declarative routing for React applications

### Icons & UI
- **Lucide React** - Beautiful, customizable icon library
- **clsx** - Utility for constructing className strings conditionally

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📦 Dependencies

### Core Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.2",
  "@tanstack/react-query": "^5.56.2"
}
```

### UI & Styling
```json
{
  "tailwindcss": "latest",
  "clsx": "^2.1.1"
}
```

### Forms & Validation
```json
{
  "react-hook-form": "^7.53.0",
  "@hookform/resolvers": "^3.9.0",
  "zod": "^3.23.8"
}
```

### Icons
```json
{
  "lucide-react": "^0.462.0"
}
```

## ⚠️ Security Notice

- As of the latest dependency audit, there are **moderate security vulnerabilities** in `esbuild` (<=0.24.2) and packages depending on it (such as `vite` and `@vitejs/plugin-react-swc`).
- **No fix is currently available** for these vulnerabilities. See [GHSA-67mh-4wv8-2f99](https://github.com/advisories/GHSA-67mh-4wv8-2f99) for details.
- If your use case requires strict security compliance, consider monitoring these dependencies for updates or evaluating alternative tooling.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm (or use [nvm](https://github.com/nvm-sh/nvm))
- Git for version control

### Installation
```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd pranava-kshetra

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Lovable Platform (Recommended)
1. Open your Lovable project
2. Click "Share" → "Publish"
3. Your app will be live at `yourproject.lovable.app`

### Custom Domain
1. Navigate to Project > Settings > Domains in Lovable
2. Click "Connect Domain"
3. Follow the DNS configuration steps

### Manual Deployment
The project builds to static files and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🔧 Configuration

### Environment Variables
Create `.env.local` for local development:
```env
VITE_API_URL=your_api_endpoint
VITE_ANALYTICS_ID=your_analytics_id
```

### Tailwind Configuration
Custom theme colors and styling defined in `tailwind.config.ts`:
- Primary colors: Orange (#F97316) and Green (#047857)
- Custom animations and transitions
- Responsive breakpoints

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of Pranava Kshetra's digital initiative. All rights reserved.

## 📞 Support

For questions or support:
- Visit our website: [Pranava Kshetra](https://pranavaксhetra.lovable.app)
- Email: info@pranavaксhetra.org
- Join our community discussions

---

Built with ❤️ for conscious living and sustainable communities.
