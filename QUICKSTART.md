# ⚡ Quick Start Guide

Get your portfolio running in 60 seconds!

## 🎯 Step 1: Dependencies Installed ✅

Dependencies are already installed! If you need to reinstall:

```bash
npm install
```

## 🚀 Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will open at **http://localhost:3000** 🎉

## 📝 Step 3: Customize Your Content

Edit these files to personalize your portfolio:

### 1. Hero Section
**File:** `src/components/Hero.jsx`
- Update your name
- Change the subtitle/bio
- Modify button links

### 2. About Section
**File:** `src/components/About.jsx`
- Write your bio
- Update stats (CGPA, projects, etc.)

### 3. Experience
**File:** `src/components/Experience.jsx`
- Add/edit work experience
- Update job titles, companies, dates
- Modify achievement highlights

### 4. Projects
**File:** `src/components/Projects.jsx`
- Add your projects
- Update descriptions
- Change GitHub links
- Modify tech stack tags

### 5. Skills
**File:** `src/components/Skills.jsx`
- Update programming languages
- Add/remove tools
- Customize skill categories

### 6. Education
**File:** `src/components/Education.jsx`
- Update degree information
- Add certifications

### 7. Contact
**File:** `src/components/Contact.jsx`
- Update email address
- Change social media links

## 📄 Step 4: Add Your Resume

Place your PDF resume at:
```
public/resume/aryan-chhabra-resume.pdf
```

Or update the filename in:
- `src/components/Hero.jsx`
- `src/components/Resume.jsx`

## 🎨 Step 5: Customize Colors (Optional)

**File:** `tailwind.config.js`

```js
colors: {
  accent: {
    violet: '#8b5cf6',  // Change these!
    pink: '#ec4899',
    cyan: '#06b6d4',
    amber: '#f59e0b',
  }
}
```

## 🏗️ Step 6: Build for Production

```bash
npm run build
```

Output: `dist/` folder (ready to deploy!)

## 🚀 Step 7: Deploy

**Vercel (Easiest):**
```bash
npm i -g vercel
vercel
```

**Or drag & drop `dist` folder to:**
- [Netlify Drop](https://app.netlify.com/drop)
- [Vercel](https://vercel.com)

See `DEPLOYMENT.md` for detailed deployment guides!

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
| `npm run format` | Format code with Prettier |

## 📱 Testing on Mobile

1. Find your local IP:
   ```bash
   ipconfig
   ```

2. On your phone, visit:
   ```
   http://YOUR-IP:3000
   ```

## 💡 Tips

- **Hot Reload**: Save any file and see changes instantly!
- **Component Structure**: Each section is a separate component
- **Tailwind**: Use utility classes for styling
- **Animations**: Powered by Framer Motion
- **SEO**: Update meta tags in `index.html`

## 🐛 Common Issues

### Port already in use?
```bash
# Kill the process or change port in vite.config.js
```

### Resume not loading?
- Make sure PDF is in `public/resume/`
- Serve over HTTP (not file://)
- Check filename matches in code

### Animations not smooth?
- Check browser supports modern CSS
- Disable "Reduce Motion" in OS settings for testing

## 🎓 Learning Resources

- **React**: [react.dev](https://react.dev)
- **Vite**: [vitejs.dev](https://vitejs.dev)
- **Tailwind**: [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)

## 🤝 Need Help?

Check out:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deployment guides
- Component files - Well commented!

---

**Happy coding! 🚀**

