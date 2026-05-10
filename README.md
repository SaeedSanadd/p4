# Personal Portfolio Website

A world-class, award-winning personal portfolio website featuring immersive 3D interactive experiences.

## Tech Stack

- **React** (Vite)
- **Three.js** / **React Three Fiber** (3D environments)
- **GSAP** + **ScrollTrigger** (scroll-based animations)
- **Framer Motion** (UI transitions)
- **Tailwind CSS** (design system)

## Features

- **Cinematic Hero Section**: Fullscreen 3D environment with floating abstract shapes
- **Interactive 3D Elements**: Mouse-controlled camera and lighting
- **Scroll-Driven Animations**: GSAP-powered storytelling through scroll
- **Skills Visualization**: Animated skill bars with hover effects
- **Projects Showcase**: 3D-style project cards with interactions
- **Experience Timeline**: Vertical animated timeline
- **Contact Form**: Futuristic UI with smooth animations

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
├── scenes/         # 3D scenes
│   └── HeroScene.tsx
├── hooks/          # Custom React hooks
├── animations/     # Animation utilities
├── App.tsx         # Main app component
└── main.tsx        # React entry point
```

## Performance Optimizations

- Lazy loading of 3D assets
- Optimized WebGL rendering
- 60 FPS animations maintained
- Minimal re-renders

## Design Philosophy

Dark futuristic aesthetic with neon accents, glassmorphism effects, and smooth micro-interactions. Every element is animated to create a living, emotional experience.