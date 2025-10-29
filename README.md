# Aryan Chhabra — Portfolio

Modern, high-performance portfolio built with **React**, **Vite**, **TailwindCSS**, and **Framer Motion**. Features dramatic typography, animated gradients, smooth scroll animations, and a beautiful bento-box project grid.

## 🚀 Tech Stack

- **React 18** - Component-based UI library
- **Vite** - Lightning-fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **React Intersection Observer** - Performant scroll animations

## ✨ Features

- ⚡ Lightning-fast development with Vite HMR
- 🎨 Animated gradient hero with custom fonts
- 🔮 Floating glassmorphic navigation
- 📦 Bento-box project grid with hover effects
- 🌊 Parallax background orbs
- 🎭 Smooth reveal animations on scroll
- 📱 Fully responsive design
- ♿ Accessibility-focused (reduced motion support)
- 🎯 SEO optimized

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

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

The dev server will start at `http://localhost:3000` and automatically open in your browser.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume/              # Place your resume PDF here
├── src/
│   ├── components/          # React components
│   │   ├── About.jsx
│   │   ├── BackgroundOrbs.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Skills.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── README.md
```

## 🎨 Customization

### Content
Edit the component files in `src/components/` to update your:
- Bio and description
- Work experience
- Projects
- Skills
- Certifications

### Styling
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font imports in `src/index.css`
- **Animations**: Adjust Framer Motion settings in component files

### Resume
Place your PDF at `public/resume/aryan-chhabra-resume.pdf`

## 📦 Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 🚀 Deployment

This project works perfectly with:
- **Vercel** (recommended) - `vercel deploy`
- **Netlify** - Drag & drop the `dist` folder
- **GitHub Pages** - Use `gh-pages` package
- **Cloudflare Pages**
- Any static hosting service

### Quick Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## 🧹 Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format
```

## 🎯 Performance

- Optimized bundle size with Vite code splitting
- Lazy loading animations with Intersection Observer
- Efficient re-renders with React best practices
- Minimal runtime overhead

## 📄 License

Personal use only.

## 🤝 Connect

- [LinkedIn](https://www.linkedin.com/in/aryanchhabraai)
- [GitHub](https://github.com/Aryanchhabra)
- [Email](mailto:aryanchhabra13.ac@gmail.com)

---

**Built with ❤️ using modern web technologies**
