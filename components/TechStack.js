const categories = [
  {
    title: 'Bahasa & Framework',
    icon: 'fas fa-code',
    delay: 'reveal-d2',
    items: [
      { label: 'Python', color: '#3776AB', textWhite: true, icon: 'fab fa-python' },
      { label: 'JavaScript', color: '#F7DF1E', textWhite: false, icon: 'fab fa-js' },
      { label: 'Node.js', color: '#339933', textWhite: true, icon: 'fab fa-node-js' },
    ]
  },
  {
    title: 'Database',
    icon: 'fas fa-database',
    delay: 'reveal-d3',
    items: [
      { label: 'Redis', color: '#DC382D', textWhite: true, icon: 'fas fa-database' },
      { label: 'MongoDB', color: '#47A248', textWhite: true, icon: 'fas fa-leaf' },
      { label: 'MySQL', color: '#4479A1', textWhite: true, icon: 'fas fa-database' },
      { label: 'SQLite', color: '#003B57', textWhite: true, icon: 'fas fa-box' },
      { label: 'aiosqlite', color: '#3776AB', textWhite: true, icon: 'fas fa-link' },
    ]
  },
  {
    title: 'Cloud & Infra',
    icon: 'fas fa-cloud',
    delay: 'reveal-d4',
    items: [
      { label: 'AWS', color: '#232F3E', textWhite: true, icon: 'fas fa-cloud' },
      { label: 'DigitalOcean', color: '#0080FF', textWhite: true, icon: 'fab fa-digital-ocean' },
      { label: 'Azure', color: '#0089D6', textWhite: true, icon: 'fab fa-microsoft' },
      { label: 'Git', color: '#F05032', textWhite: true, icon: 'fab fa-git-alt' },
    ]
  },
]

export default function TechStack() {
  return (
    <section className="py-12 sm:py-16" id="tech">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-center mb-2 sm:mb-4 reveal">
        <i className="fas fa-layer-group text-[#00D26A] mr-2 sm:mr-3"></i>Tech Stack
      </h2>
      <p className="text-center font-bold text-[10px] sm:text-xs max-w-lg mx-auto mb-6 sm:mb-10 reveal reveal-d1 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        Yang sering dipake sehari-hari
      </p>
      <div className="space-y-6 sm:space-y-8">
        {categories.map((cat, ci) => (
          <div key={ci} className={`reveal ${cat.delay}`}>
            <h3 className="font-black text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 border-b-4 border-brutal pb-2" style={{ color: 'var(--text)' }}>
              <i className={`${cat.icon} mr-2`}></i>{cat.title}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {cat.items.map((item, ii) => (
                <span
                  key={ii}
                  className={`border-4 border-black rounded-xl px-3 sm:px-5 py-2 sm:py-3 font-bold text-[10px] sm:text-xs uppercase brutal-card ${item.textWhite ? 'text-white' : ''}`}
                  style={{ background: item.color }}
                >
                  <i className={`${item.icon} mr-1.5`}></i>{item.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
