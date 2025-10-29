import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const projects = [
    {
      title: 'Customer Churn Prediction',
      description:
        'Random Forest & Logistic models achieving 85% AUC on 7k+ customers. Identified key churn drivers and proposed retention strategies projected to reduce churn by 25%.',
      tags: ['Python', 'Pandas', 'scikit-learn'],
      link: 'https://github.com/Aryanchhabra',
      gradient: 'radial-gradient(circle at 30% 30%, rgba(139,92,246,0.15), transparent 70%)',
      large: true,
    },
    {
      title: 'E-commerce Analytics',
      description:
        'RFM & cohort analysis on 540k+ transactions; identified Champions driving 40% of revenue.',
      tags: ['SQL', 'Python', 'Tableau'],
      link: 'https://github.com/Aryanchhabra',
      gradient: 'radial-gradient(circle at 70% 70%, rgba(236,72,153,0.15), transparent 70%)',
    },
    {
      title: 'DeepResearchAI',
      description:
        'Multi-agent research system with LangGraph orchestration, Gemini, and automated fact-checking pipeline.',
      tags: ['LangGraph', 'Gemini', 'RAG'],
      link: 'https://github.com/Aryanchhabra',
      gradient: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.15), transparent 70%)',
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-semibold text-xs tracking-[0.12em] uppercase text-accent-cyan mb-3">
            Projects
          </span>
          <h2 className="font-serif font-bold text-[clamp(28px,5vw,54px)] leading-[1.1] tracking-tight mb-8">
            Selected work
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`
                  relative overflow-hidden rounded-3xl p-8 bg-white/[0.04] border border-white/10 
                  no-underline text-text transition-all duration-300 group
                  hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                  ${project.large ? 'md:col-span-2' : ''}
                `}
              >
                <div
                  className="absolute inset-0 opacity-15 transition-opacity duration-300 group-hover:opacity-25"
                  style={{ background: project.gradient }}
                />

                <div className="relative z-10">
                  <h3 className="font-serif font-semibold text-[22px] leading-tight mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-text-muted mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/[0.08] text-accent-cyan"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

