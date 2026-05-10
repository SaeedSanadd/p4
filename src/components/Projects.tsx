import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description: 'A cinematic portfolio experience built with React and Three.js',
    tech: ['React', 'Three.js', 'GSAP'],
    image: '/placeholder-project1.jpg'
  },
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced animations',
    tech: ['Next.js', 'Framer Motion', 'Stripe'],
    image: '/placeholder-project2.jpg'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Real-time data visualization with interactive charts',
    tech: ['D3.js', 'React', 'WebGL'],
    image: '/placeholder-project3.jpg'
  },
  {
    title: 'Mobile App UI',
    description: 'Sleek mobile app design with micro-interactions',
    tech: ['React Native', 'Framer Motion', 'Figma'],
    image: '/placeholder-project4.jpg'
  }
]

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(carouselRef.current?.children,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
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
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div ref={carouselRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-purple-400 transition-all duration-300 group cursor-pointer"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-6xl">🎨</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects