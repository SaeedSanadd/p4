import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90, color: '#61dafb' },
  { name: 'Three.js', level: 85, color: '#049ef4' },
  { name: 'TypeScript', level: 88, color: '#3178c6' },
  { name: 'GSAP', level: 82, color: '#0acf83' },
  { name: 'Node.js', level: 75, color: '#339933' },
  { name: 'Python', level: 70, color: '#3776ab' },
]

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(skillsRef.current?.children,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
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
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                <motion.div
                  className="h-3 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-gray-400 text-sm">{skill.level}% Proficiency</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills