export default function Achievements() {
  const badges = [
    { icon: 'fas fa-crown', bg: '#8A2BE2', textWhite: true, label: 'Bot Architect' },
    { icon: 'fab fa-python', bg: '#3776AB', textWhite: true, label: 'Python Expert' },
    { icon: 'fas fa-bolt', bg: '#00D26A', textWhite: false, label: 'Automation' },
    { icon: 'fab fa-git-alt', bg: '#F05032', textWhite: true, label: 'Git Master' },
  ]
  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-center mb-2 sm:mb-4 reveal">
        <i className="fas fa-trophy text-[#FFD93D] mr-2 sm:mr-3"></i>Pencapaian
      </h2>
      <p className="text-center font-bold text-[10px] sm:text-xs max-w-lg mx-auto mb-6 sm:mb-10 reveal reveal-d1 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        Sumber Github Tropies
      </p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 reveal reveal-d2">
        {badges.map((b, i) => (
          <span
            key={i}
            className={`border-4 border-black rounded-xl px-4 sm:px-6 py-3 sm:py-4 font-bold text-[10px] sm:text-xs uppercase brutal-card flex items-center gap-1.5 ${b.textWhite ? 'text-white' : ''}`}
            style={{ background: b.bg }}
          >
            <i className={b.icon}></i>{b.label}
          </span>
        ))}
      </div>
    </section>
  )
}
