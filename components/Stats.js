const badges = [
  { icon: 'fas fa-crown', bg: '#8A2BE2', label: 'Bot Architect' },
  { icon: 'fab fa-python', bg: '#3776AB', label: 'Python Expert' },
  { icon: 'fas fa-bolt', bg: '#00D26A', label: 'Automation' },
  { icon: 'fab fa-git-alt', bg: '#F05032', label: 'Git Master' },
]

export default function Stats() {
  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-center mb-2 sm:mb-4 reveal">
        <i className="fas fa-chart-simple mr-2 sm:mr-3" style={{ color: 'var(--text)' }}></i>Statistik
      </h2>
      <p className="text-center font-bold text-[10px] sm:text-xs max-w-lg mx-auto mb-6 sm:mb-10 reveal reveal-d1 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        Aktivitas & Pencapaian di GitHub
      </p>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 reveal reveal-d2">
        {badges.map((b, i) => (
          <span
            key={i}
            className="border-4 border-black rounded-xl px-4 sm:px-6 py-3 sm:py-4 font-bold text-[10px] sm:text-xs uppercase brutal-card flex items-center gap-1.5 text-white"
            style={{ background: b.bg }}
          >
            <i className={b.icon}></i>{b.label}
          </span>
        ))}
      </div>

      <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-3 sm:p-5 mb-4 sm:mb-6 flex items-center justify-center reveal reveal-d2 brutal-card card-glow">
        <img src="https://github-profile-trophy.vercel.app/?username=wndrzzka&theme=radical&row=2&column=4" alt="GitHub Trophies" className="w-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 reveal reveal-d2">
        <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-3 sm:p-5 flex items-center justify-center brutal-card card-glow">
          <img src="https://github-readme-stats.vercel.app/api?username=wndrzzka&show_icons=true&theme=radical&include_all_commits=true&count_private=true" alt="GitHub Stats" className="w-full max-w-sm" />
        </div>
        <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-3 sm:p-5 flex items-center justify-center brutal-card card-glow">
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=wndrzzka&theme=radical" alt="GitHub Streak" className="w-full max-w-sm" />
        </div>
      </div>
      <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-3 sm:p-5 mt-4 sm:mt-6 flex items-center justify-center reveal reveal-d3 brutal-card card-glow">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=wndrzzka&layout=compact&theme=radical&langs_count=6&count_private=true" alt="Top Languages" className="w-full max-w-md" />
      </div>
      <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-3 sm:p-5 mt-4 sm:mt-6 flex items-center justify-center reveal reveal-d4 brutal-card card-glow">
        <img src="https://ghchart.rshah.org/8A2BE2/wndrzzka" alt="GitHub Contributions" className="w-full" />
      </div>
    </section>
  )
}
