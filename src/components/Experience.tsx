import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const experiences = [
  {
    year: '2023',
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    description: 'Led development of interactive web applications using React and Three.js'
  },
  {
    year: '2021',
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    description: 'Built responsive websites and web applications with modern frameworks'
  },
  {
    year: '2019',
    title: 'Junior Developer',
    company: 'Startup Co.',
    description: 'Developed user interfaces and contributed to open-source projects'
  },
  {
    year: '2018',
    title: 'Freelance Designer',
    company: 'Self-employed',
    description: 'Created visual designs and prototypes for various clients'
  }
]

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(timelineRef.current?.children,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
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
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-black py-20">
      <div className="max-w-4xl mx-auto px-8">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              className="relative flex items-start mb-12 ml-16"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-16 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black animate-pulse"></div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-purple-400 transition-all duration-300 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <span className="text-cyan-400 font-bold">{exp.year}</span>
                </div>
                <p className="text-purple-400 mb-3">{exp.company}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience