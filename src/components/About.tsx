import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(textRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-4xl mx-auto px-8">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div ref={textRef} className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
          <p>
            I'm a passionate creative developer with a love for blending technology and art.
            My journey began with traditional design, but I found my true calling in the intersection
            of code and creativity.
          </p>
          <p>
            Specializing in modern web technologies, I create immersive digital experiences
            that push the boundaries of what's possible on the web. From interactive 3D environments
            to smooth animations, I strive to make every project memorable.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or experimenting with generative art and procedural graphics.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About