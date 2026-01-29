# Ryan Calacsan - Developer Portfolio

Welcome to the repository for my developer portfolio website! This site showcases my skills, projects, and experience as a full-stack engineer.

## Live Demo

[View Portfolio](https://ryancalacsan.github.io/)

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript, React
- **Styling:** Modern CSS with custom properties (no preprocessor)
- **Build Tools:** Vite
- **Linting:** ESLint
- **Deployment:** GitHub Pages via `gh-pages`

## Features

- **Interactive UI:** Built with React and styled with modern CSS custom properties for a responsive experience.
- **Professional Experience:** Dedicated section highlighting work history and roles.
- **Project Showcase:** Highlights selected work and side projects.
- **About & Contact:** Information about me and ways to get in touch.
- **Scroll Reveal Animations:** Intersection Observer-based entrance animations with stagger support.
- **Accessibility:** Focus-visible styles, reduced motion support, semantic HTML, and keyboard-navigable mobile menu.
- **Performance Optimized:** Fast-loading site powered by Vite with no CSS preprocessor overhead.

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
│   ├── Projects.jsx
│   └── Toolkit.jsx
├── hooks/             # Custom React hooks
│   └── useScrollReveal.js
├── styles/
│   ├── base/          # Reset and base styles
│   ├── components/    # Per-component CSS
│   ├── utils/         # Variables, utilities, and animations
│   └── styles.css     # Main stylesheet (imports all partials)
└── App.jsx
```

## Installation & Local Development

1. Clone the repository:
   ```sh
   git clone https://github.com/ryancalacsan/dev-portfolio.git
   ```
2. Navigate to the project folder:
   ```sh
   cd dev-portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173/` (or the port shown in the terminal).

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy to GitHub Pages |

## License

This project is open-source and available under the [GNU General Public License v3.0](LICENSE).
