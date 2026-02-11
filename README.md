# Ryan Calacsan - Developer Portfolio

Welcome to the repository for my developer portfolio website! This site showcases my skills, projects, and experience as a full-stack engineer.

## Live Demo

[View Portfolio](https://ryancalacsan.dev)

## Tech Stack

- **Frontend:** React 18, JavaScript
- **Styling:** Modern CSS with custom properties and BEM naming (no preprocessor)
- **Animations:** Framer Motion (scroll-triggered, staggered, parallax)
- **Build Tools:** Vite
- **Linting:** ESLint
- **Deployment:** Vercel

## Features

- **Dark Mode:** Theme toggle with `prefers-color-scheme` fallback, localStorage persistence, and FOUC prevention
- **Scroll Animations:** Per-section Framer Motion animations (fadeUp, slideLeft, scaleUp, stagger)
- **Hero Effects:** Animated gradient mesh background, clip-path name reveal, magnetic buttons
- **Navigation:** Active section indicator with smooth sliding, hover underlines, glass-effect backdrop
- **Featured Projects:** Curated showcase of QuoteCraft and print-check
- **Accessibility:** Focus-visible styles, reduced motion support, semantic HTML, keyboard-navigable mobile menu
- **Performance Optimized:** Fast-loading site powered by Vite with no CSS preprocessor overhead

## Project Structure

```
src/
├── components/        # React components
│   ├── AboutMe.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Menu.jsx
│   ├── MotionSection.jsx
│   ├── Projects.jsx
│   └── Toolkit.jsx
├── hooks/             # Custom React hooks
│   ├── useActiveSection.js
│   ├── useMagneticEffect.js
│   └── useTheme.js
├── styles/
│   ├── base/          # Reset and base styles
│   ├── components/    # Per-component CSS
│   ├── utils/         # Variables, dark mode, utilities, and animations
│   └── styles.css     # Main stylesheet (imports all partials)
└── App.jsx
```

## Installation & Local Development

1. Clone the repository:
   ```sh
   git clone https://github.com/ryancalacsan/ryancalacsan.github.io.git
   cd ryancalacsan.github.io
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173/` (or the port shown in the terminal).

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy to Vercel |

## License

This project is open-source and available under the [GNU General Public License v3.0](LICENSE).
