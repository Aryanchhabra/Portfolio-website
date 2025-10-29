import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: "Python", category: "Language" },
  { name: "SQL", category: "Database" },
  { name: "Machine Learning", category: "AI/ML" },
  { name: "React", category: "Frontend" },
  { name: "Pandas & NumPy", category: "Data Science" },
  { name: "Power BI", category: "Analytics" },
  { name: "Streamlit", category: "Framework" },
  { name: "Data Analytics", category: "Analytics" },
  { name: "scikit-learn", category: "AI/ML" },
  { name: "Git & GitHub", category: "DevOps" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "API Development", category: "Backend" }
]

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.03, duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        className="relative h-32 px-6 py-5 rounded-2xl bg-white border-2 border-gray-200 overflow-hidden shadow-[0_2px_10px_rgb(0,0,0,0.04)] transition-all duration-300"
        whileHover={{ 
          y: -4, 
          borderColor: "#000",
          boxShadow: "0 8px 30px rgb(0,0,0,0.1)"
        }}
      >
        {/* Monogram Icon - First letter in geometric shape */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-white font-bold text-lg">{skill.name.charAt(0)}</span>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between">
          {/* Category tag */}
          <div className="inline-flex">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              {skill.category}
            </span>
          </div>
          
          {/* Skill name */}
          <h3 className="text-xl font-bold text-black leading-tight pr-12">
            {skill.name}
          </h3>
        </div>

        {/* Hover accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-black"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function SkillsMatrix() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="relative min-h-screen px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-black px-4"
          >
            Technical Skills
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Tools and technologies I use to build intelligent solutions
          </p>
        </motion.div>

        {/* Skills Grid - Optimized and Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-black/10">
            <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <p className="text-gray-700 text-sm sm:text-base font-medium">
              Continuously expanding my toolkit
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

