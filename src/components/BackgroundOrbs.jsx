const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="orb absolute w-[600px] h-[600px] -top-[10%] -left-[10%] rounded-full blur-[80px] opacity-40 mix-blend-screen animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.6), transparent 70%)',
          animationDuration: '25s',
        }}
      />
      <div
        className="orb absolute w-[500px] h-[500px] -bottom-[15%] -right-[5%] rounded-full blur-[80px] opacity-40 mix-blend-screen animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.5), transparent 70%)',
          animationDuration: '30s',
          animationDelay: '-5s',
        }}
      />
      <div
        className="orb absolute w-[450px] h-[450px] top-[40%] -right-[20%] rounded-full blur-[80px] opacity-40 mix-blend-screen animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.4), transparent 70%)',
          animationDuration: '35s',
          animationDelay: '-10s',
        }}
      />
    </div>
  )
}

export default BackgroundOrbs

