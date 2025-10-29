import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="top"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 relative"
    >
      <motion.div
        className="max-w-[1100px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-serif font-black text-[clamp(48px,12vw,140px)] leading-[0.95] tracking-tight mb-5"
        >
          <span className="block">Aryan</span>
          <span className="block gradient-text">Chhabra</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[clamp(16px,2vw,20px)] leading-relaxed text-text-muted max-w-[70ch] mx-auto mb-8"
        >
          AI & Data Science Engineer crafting intelligent systems that transform business outcomes.
          <br />
          From predictive models to growth automation — I build the future.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 justify-center mb-6"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold no-underline transition-all duration-200 bg-gradient-to-br from-accent-violet to-accent-pink text-white shadow-[0_8px_24px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(139,92,246,0.5)]"
          >
            View Work
          </a>
          <a
            href="mailto:aryanchhabra13.ac@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold no-underline transition-all duration-200 bg-white/[0.08] text-text backdrop-blur-lg border border-white/15 hover:-translate-y-0.5 hover:bg-white/[0.12]"
          >
            Get in Touch
          </a>
          <a
            href="resume/aryan-chhabra-resume.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold no-underline transition-all duration-200 bg-transparent text-text-muted border border-white/20 hover:text-text hover:bg-white/5"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M14 10v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2M8 1v10M4 7l4 4 4-4" />
            </svg>
            Resume
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/aryanchhabraai"
            target="_blank"
            rel="noopener"
            className="text-text-muted text-sm no-underline transition-colors duration-200 hover:text-text"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Aryanchhabra"
            target="_blank"
            rel="noopener"
            className="text-text-muted text-sm no-underline transition-colors duration-200 hover:text-text"
          >
            GitHub
          </a>
          <a
            href="mailto:aryanchhabra13.ac@gmail.com"
            className="text-text-muted text-sm no-underline transition-colors duration-200 hover:text-text"
          >
            Email
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 text-xs tracking-wider uppercase text-text-muted animate-bounce-slow"
      >
        Scroll to explore
      </motion.div>
    </section>
  )
}

export default Hero

