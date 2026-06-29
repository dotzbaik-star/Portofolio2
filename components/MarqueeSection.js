const items = [
  { icon: 'fab fa-python', color: '#3776AB', label: 'Pyrogram' },
  { icon: 'fas fa-bolt', color: '#FFD93D', label: 'Telethon' },
  { icon: 'fab fa-python', color: '#3776AB', label: 'Python' },
  { icon: 'fab fa-js', color: '#F7DF1E', label: 'JavaScript' },
  { icon: 'fab fa-node-js', color: '#339933', label: 'Node.js' },
  { icon: 'fas fa-database', color: '#DC382D', label: 'Redis' },
  { icon: 'fas fa-leaf', color: '#47A248', label: 'MongoDB' },
  { icon: 'fas fa-database', color: '#4479A1', label: 'MySQL' },
  { icon: 'fas fa-box', color: '#003B57', label: 'SQLite' },
  { icon: 'fas fa-cloud', color: '#232F3E', label: 'AWS' },
  { icon: 'fab fa-digital-ocean', color: '#0080FF', label: 'DigitalOcean' },
  { icon: 'fab fa-microsoft', color: '#0089D6', label: 'Azure' },
]

export default function MarqueeSection() {
  const doubled = [...items, ...items]
  return (
    <div className="border-4 border-brutal rounded-xl brutal-shadow bg-[var(--surface)] overflow-hidden my-6 sm:my-10">
      <div className="flex gap-8 sm:gap-12 py-3 sm:py-4 px-4 sm:px-6 marquee text-[10px] sm:text-[11px] font-bold uppercase tracking-wide" style={{ color: 'var(--text-sec)' }}>
        {doubled.map((item, i) => (
          <span key={i}>
            <i className={`${item.icon}`} style={{ color: item.color, marginRight: '0.375rem' }}></i>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
