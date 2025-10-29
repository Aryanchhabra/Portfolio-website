import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { value: '8.3', label: 'CGPA · AI & Data Science' },
    { value: '3+', label: 'Major Projects Shipped' },
    { value: '40%', label: 'Efficiency Gain (Automation)' },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1fr_300px] gap-10 items-start"
        >
          <div className="max-w-[70ch]">
            <span className="inline-block font-semibold text-xs tracking-[0.12em] uppercase text-accent-cyan mb-3">
              About
            </span>
            <h2 className="font-serif font-bold text-[clamp(28px,5vw,54px)] leading-[1.1] tracking-tight mb-5">
              Building at the intersection of AI, data, and growth
            </h2>
            <div className="prose">
              <p className="mb-4 text-text-muted">
                I'm Aryan Chhabra, an AI & Data Science graduate working at the forefront of
                intelligent automation and go-to-market strategy. My work bridges technical depth
                with business impact — translating complex models into scalable systems that drive
                measurable results.
              </p>
              <p className="text-text-muted">
                Whether it's engineering predictive pipelines, designing analytics dashboards, or
                crafting AI-powered outreach workflows, I obsess over outcomes. I believe the best
                technology is invisible — it just works, compounds value, and feels inevitable in
                hindsight.
              </p>
            </div>
          </div>

          <div className="grid gap-3.5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="p-5 rounded-2xl card-gradient"
              >
                <div className="font-serif font-bold text-[40px] leading-none text-accent-cyan">
                  {stat.value}
                </div>
                <div className="text-[13px] text-text-muted mt-1.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

