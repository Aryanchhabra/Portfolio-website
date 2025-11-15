import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const skillCategories = [
  {
    title: "Languages",
    description: "Core programming languages",
    skills: ["Python", "SQL", "JavaScript", "R"],
    primary: true
  },
  {
    title: "AI & Machine Learning",
    description: "Building intelligent systems",
    skills: ["Machine Learning", "TensorFlow", "scikit-learn", "AI Agents", "LLMs", "Deep Learning"],
    primary: true
  },
  {
    title: "Data Science & Analytics",
    description: "Data-driven insights",
    skills: ["Pandas", "NumPy", "Plotly", "Power BI", "Data Visualization", "Statistical Analysis"],
    primary: true
  },
  {
    title: "Web & Frameworks",
    description: "Modern web development",
    skills: ["React", "Streamlit", "Flask", "Vite", "Tailwind CSS", "API Development"],
    primary: false
  },
  {
    title: "AI Development Tools",
    description: "Next-gen development",
    skills: ["Cursor AI", "Vibe Coding", "Lovable", "n8n", "LangChain"],
    primary: false
  },
  {
    title: "Collaboration & Tools",
    description: "Workflow & productivity",
    skills: ["Git", "GitHub", "Notion", "Slack"],
    primary: false
  }
]

function SkillCard({ category, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      className={`group ${category.primary ? 'lg:col-span-1' : 'lg:col-span-1'}`}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-skill-card
    >
      <motion.div
        className={`relative h-full p-8 rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
          isHovered 
            ? 'bg-black border-black shadow-[0_20px_60px_rgba(0,0,0,0.3)]' 
            : 'bg-white border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
        } ${category.primary ? 'min-h-[400px]' : 'min-h-[350px]'}`}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <motion.div
              className={`w-12 h-1 rounded-full mb-4 transition-colors duration-500 ${
                isHovered ? 'bg-white' : 'bg-black'
              }`}
              initial={{ width: 0 }}
              animate={inView ? { width: 48 } : {}}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
            />
            <h3 className={`text-2xl sm:text-3xl font-bold mb-2 transition-colors duration-500 ${
              isHovered ? 'text-white' : 'text-black'
            }`}>
              {category.title}
            </h3>
            <p className={`text-sm font-medium transition-colors duration-500 ${
              isHovered ? 'text-gray-300' : 'text-gray-500'
            }`}>
              {category.description}
            </p>
          </div>

          {/* Skills */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    delay: index * 0.1 + 0.4 + skillIndex * 0.05,
                    duration: 0.4 
                  }}
                >
                  <motion.div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                      isHovered ? 'bg-white' : 'bg-black'
                    }`}
                    animate={{
                      scale: isHovered ? [1, 1.5, 1] : 1
                    }}
                    transition={{
                      delay: skillIndex * 0.1,
                      duration: 0.6,
                      repeat: isHovered ? Infinity : 0,
                      repeatDelay: 2
                    }}
                  />
                  <span className={`text-base font-medium transition-colors duration-500 ${
                    isHovered ? 'text-white' : 'text-gray-700'
                  }`}>
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Hover gradient accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function SkillsMatrix() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" ref={ref} className="relative min-h-screen px-4 sm:px-6 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20 sm:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-black"
          >
            Technical Expertise
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-black mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI, data science, and modern development
          </p>
        </motion.div>

        {/* Skills Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20 sm:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="inline-block p-8 rounded-2xl bg-gradient-to-br from-black to-gray-900 text-white shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.div
                className="w-3 h-3 rounded-full bg-white"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="text-center sm:text-left">
                <p className="text-xl font-bold mb-1">Continuous Learning</p>
                <p className="text-gray-300 text-sm">Always exploring new technologies and methodologies</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

