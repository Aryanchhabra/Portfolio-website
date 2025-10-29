const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 border-t border-white/10 text-center text-text-muted text-sm">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex gap-2.5 justify-center">
          <span>© {currentYear} Aryan Chhabra</span>
          <span className="opacity-60">·</span>
          <span>Crafted with intention & code</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

