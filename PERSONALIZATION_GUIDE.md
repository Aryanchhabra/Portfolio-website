# 🎨 Portfolio Personalization Guide

Welcome to your new 3D Interdimensional Portfolio! Here's how to make it yours:

## 🚀 Quick Customization Checklist

### 1. **Hero Section** (`src/components/HeroSection.jsx`)
- **Line 33**: Change "Your Name" to your actual name
- **Line 43**: Update "Creative Developer" and "Digital Artist" to your roles
- **Line 51**: Personalize the tagline about yourself

### 2. **About Section** (`src/components/AboutPortal.jsx`)
- **Lines 86-95**: Write your own bio and story
- **Lines 106-110**: Update the stats (Projects, Years, Passion)

### 3. **Experience Timeline** (`src/components/ExperienceTimeline.jsx`)
- **Lines 7-45**: Replace with your actual work experience
  - Update year, title, company, description
  - Add your relevant skills for each role
  - Change emojis to match your style

### 4. **Projects** (`src/components/ProjectsGalaxy.jsx`)
- **Lines 6-35**: Replace with your actual projects
  - Update title, description, tags
  - Add project URLs/links
  - Change color gradients and emojis

### 5. **Skills** (`src/components/SkillsMatrix.jsx`)
- **Lines 6-15**: Update with your skills
  - Change skill names and levels (0-100)
  - Update emojis and colors
- **Line 147**: Update technologies you're currently learning

### 6. **Contact Section** (`src/components/ContactDimension.jsx`)
- **Lines 110-120**: Update contact information
  - Location
  - Email address
  - Phone number
- **Lines 128-133**: Update social media links
  - GitHub, LinkedIn, Twitter, Email
  - Add/remove social platforms as needed

### 7. **Navigation** (`src/components/Navigation.jsx`)
- **Line 189**: Change "YourName" to your actual name/brand

### 8. **Form Submission** (`src/components/ContactDimension.jsx`)
- **Line 24**: Add your form handling logic (e.g., EmailJS, Formspree, etc.)

## 🎨 Color Customization

The portfolio uses these gradient themes:
- **Purple-Pink**: `from-purple-500 to-pink-500`
- **Cyan-Blue**: `from-cyan-500 to-blue-500`
- **Green-Emerald**: `from-green-500 to-emerald-500`

Find and replace these in components to change your color scheme!

## 🖼️ Adding Images

To add profile pictures or project images:
1. Place images in `public/` folder
2. Update components to use `<img src="/your-image.jpg" />`

## ✨ Features Included

- ✅ 3D WebGL background with floating portals
- ✅ Custom animated cursor
- ✅ Smooth scroll animations
- ✅ Glassmorphism design
- ✅ Responsive mobile navigation
- ✅ Interactive project cards
- ✅ Animated skill progress bars
- ✅ Timeline with custom styling
- ✅ Contact form (needs backend integration)

## 🚀 Next Steps

1. **Deploy**: Run `npm run build` and deploy the `dist` folder
2. **Add Analytics**: Integrate Google Analytics or similar
3. **SEO**: Update meta tags in `index.html`
4. **Form Backend**: Connect contact form to EmailJS, Formspree, or your backend

## 🎮 Tips

- The 3D scene automatically adapts to scroll position
- Custom cursor only shows on desktop (auto-hides on mobile)
- All sections use intersection observers for scroll-triggered animations
- Color gradients are easily customizable with Tailwind classes

Enjoy your new portfolio! 🌟

