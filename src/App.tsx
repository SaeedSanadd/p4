import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize scroll-based animations
    const ctx = gsap.context(() => {
      // Global scroll animations can be set here
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={appRef} className="App bg-black text-white overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App