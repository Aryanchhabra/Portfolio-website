import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const experiences = [
    {
      role: 'GTM Lead',
      company: 'Primeloop AI',
      period: 'Jul 2025 — Sep 2025',
      highlights: [
        'Automated proposal workflows with n8n, cutting prep time by ~40%.',
        'Led directory presence and LinkedIn outreach campaigns to drive qualified leads.',
        'Contributed to SEO strategy to improve discoverability and organic traffic.',
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-semibold text-xs tracking-[0.12em] uppercase text-accent-cyan mb-3">
            Experience
          </span>
          <h2 className="font-serif font-bold text-[clamp(28px,5vw,54px)] leading-[1.1] tracking-tight mb-8">
            Where I've built
          </h2>

          <div className="grid gap-6 max-w-[900px]">
            {experiences.map((exp, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-accent-violet to-accent-pink shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
                {i < experiences.length - 1 && (
                  <div
                    className="absolute left-1.5 top-5 bottom-[-24px] w-0.5"
                    style={{
                      background: 'linear-gradient(180deg, rgba(139,92,246,0.3), transparent)',
                    }}
                  />
                )}

                <div className="flex flex-wrap gap-2 gap-x-4 mb-3">
                  <span className="font-bold text-text">{exp.role}</span>
                  <span className="text-accent-cyan">{exp.company}</span>
                  <span className="text-sm text-text-muted">{exp.period}</span>
                </div>

                <ul className="pl-5 text-text-muted space-y-1.5 list-disc">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j}>{highlight}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

