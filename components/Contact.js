const links = [
  { href: 'https://t.me/dotzbaik', bg: '#26A5E4', icon: 'fab fa-telegram-plane', label: 'Telegram', delay: 'reveal-d2' },
  { href: 'https://www.youtube.com/dotzstore', bg: '#FF0000', icon: 'fab fa-youtube', label: 'YouTube', delay: 'reveal-d2' },
  { href: 'https://github.com/gada', bg: '#000000', icon: 'fab fa-github', label: 'GitHub', delay: 'reveal-d3' },
]

export default function Contact() {
  return (
    <section className="py-12 sm:py-16" id="kontak">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-center mb-2 sm:mb-4 reveal">
        <i className="fas fa-paper-plane text-[#00D26A] mr-2 sm:mr-3"></i>Kontak
      </h2>
      <p className="text-center font-bold text-[10px] sm:text-xs max-w-lg mx-auto mb-6 sm:mb-10 reveal reveal-d1 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        Tempat orang-orang biasa nyari saya
      </p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {links.map((l, i) => (
          <a
            key={i}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 sm:gap-3 text-white border-4 border-black rounded-xl brutal-shadow-sm px-5 sm:px-7 py-3 sm:py-4 font-bold text-[10px] sm:text-xs uppercase brutal-btn reveal ${l.delay}`}
            style={{ background: l.bg }}
          >
            <i className={l.icon}></i> {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}
