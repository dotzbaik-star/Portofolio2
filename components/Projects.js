const projects = [
  {
    icon: 'fas fa-shield-halved',
    iconColor: '#8A2BE2',
    bg: 'var(--surface)',
    textColor: 'var(--text-sec)',
    headingColor: 'var(--text)',
    title: 'Group Manager',
    desc: 'Bot buat manajemen grup Telegram — anti-spam, welcome message, filter otomatis, dan moderasi.',
    tags: [
      { label: 'Pyrogram', bg: '#8A2BE2', textWhite: true },
      { label: 'MongoDB', bg: '#00D26A', textWhite: false },
      { label: 'Redis', bg: '#FFD93D', textWhite: false },
    ],
    delay: 'reveal-d2',
  },
  {
    icon: 'fas fa-cart-shopping',
    iconColor: '#fff',
    bg: '#8A2BE2',
    textColor: 'rgba(255,255,255,0.8)',
    headingColor: '#fff',
    title: 'E-Commerce Bot',
    desc: 'Bot Telegram buat toko online — keranjang, pembayaran otomatis, dan tracking pesanan.',
    tags: [
      { label: 'Telethon', bg: '#fff', textWhite: false },
      { label: 'MySQL', bg: '#FFD93D', textWhite: false },
      { label: 'Node.js', bg: '#00D26A', textWhite: false },
    ],
    delay: 'reveal-d3',
  },
  {
    icon: 'fas fa-arrow-right-arrow-left',
    iconColor: '#000',
    bg: '#FFD93D',
    textColor: '#4a4a4a',
    headingColor: '#000',
    title: 'Auto Forward',
    desc: 'Bot otomasi forward pesan antar grup/channel dengan filter kata kunci dan jadwal.',
    tags: [
      { label: 'Pyrogram', bg: '#8A2BE2', textWhite: true },
      { label: 'SQLite', bg: '#fff', textWhite: false },
      { label: 'AWS', bg: '#00D26A', textWhite: false },
    ],
    delay: 'reveal-d4',
  },
]

export default function Projects() {
  return (
    <section className="py-12 sm:py-16" id="proyek">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-center mb-2 sm:mb-4 reveal">
        <i className="fas fa-code-branch text-[#FF6B6B] mr-2 sm:mr-3"></i>Proyek
      </h2>
      <p className="text-center font-bold text-[10px] sm:text-xs max-w-lg mx-auto mb-6 sm:mb-10 reveal reveal-d1 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        Bot Telegram yang pernah dibikin (dan masih jalan)
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`border-4 border-black rounded-xl brutal-shadow p-5 sm:p-7 brutal-card reveal ${p.delay}`}
            style={{ background: p.bg, color: p.textColor, borderColor: '#000' }}
          >
            <i className={`${p.icon} text-3xl sm:text-4xl mb-3 sm:mb-4`} style={{ color: p.iconColor }}></i>
            <h3 className="text-sm sm:text-base font-black uppercase tracking-tight mb-1.5 sm:mb-2" style={{ color: p.headingColor }}>{p.title}</h3>
            <p className="font-bold text-[11px] sm:text-xs leading-relaxed" style={{ color: p.textColor }}>{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5">
              {p.tags.map((t, ti) => (
                <span
                  key={ti}
                  className={`border-2 border-black rounded-lg px-2 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold ${t.textWhite ? 'text-white' : ''}`}
                  style={{ background: t.bg }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
