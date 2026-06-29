const projects = [
  {
    icon: 'fas fa-bullhorn',
    title: 'Bot Automasi Promosi',
    desc: 'Bot userbot promosi berskala besar berbasis Python, Pyrogram & Redis. AutoBroadcast 24 jam, auto reply WTB, auto reply chat private, payment gateway sewa, sanggup menampung ratusan userbot — sudah dipakai 200-300 userbot aktif promosi.',
    tags: ['Python', 'Pyrogram', 'Redis'],
    link: 'https://t.me/JasebXBot',
    delay: 'reveal-d2',
  },
  {
    icon: 'fas fa-store',
    title: 'Bot Jual Beli Akun',
    desc: 'Platform jual beli akun Telegram dengan payment gateway otomatis. Bot skala besar — sudah di /start oleh 15K+ user dengan volume transaksi tinggi.',
    tags: ['Python', 'Pyrogram', 'Redis'],
    link: 'https://t.me/NokosID_UBOT',
    delay: 'reveal-d3',
  },
  {
    icon: 'fas fa-address-book',
    title: 'Bot Manage Akun',
    desc: 'Solusi manajemen banyak akun Telegram dalam satu bot. Fitur: clear chat, get OTP, ganti 2FA, join grup, kick device, dll. Sistem sewa slot dengan payment gateway — 400+ akun tersimpan.',
    tags: ['Python', 'Pyrogram', 'Redis'],
    link: 'https://t.me/ManageAkunBot',
    delay: 'reveal-d4',
  },
  {
    icon: 'fas fa-search',
    title: 'Bot Cek ID & Tahun',
    desc: 'Cek ID akun/group/channel Telegram, prediksi tahun pembuatan akun, dan detail lainnya. Gratis — sudah dipakai 5000+ user. Berbasis Python, Pyrogram & MongoDB.',
    tags: ['Python', 'Pyrogram', 'MongoDB'],
    link: 'https://t.me/CekIDinBot',
    delay: 'reveal-d2',
  },
]

const tagColors = {
  'Python': 'bg-[#3776AB] text-white',
  'Pyrogram': 'bg-[#8A2BE2] text-white',
  'Redis': 'bg-[#DC382D] text-white',
  'MongoDB': 'bg-[#00D26A] text-black',
}

export default function Projects() {
  return (
    <section className="py-12 sm:py-16" id="proyek">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-center mb-2 sm:mb-4 reveal">
        <i className="fas fa-code-branch text-[#FF6B6B] mr-2 sm:mr-3"></i>Proyek
      </h2>
      <p className="text-center font-bold text-[10px] sm:text-xs max-w-lg mx-auto mb-6 sm:mb-10 reveal reveal-d1 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        Bot Telegram skala besar & kecil yang saya kembangkan
      </p>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`bg-[var(--surface)] border-4 border-black rounded-xl brutal-shadow p-4 sm:p-5 brutal-card reveal ${p.delay}`}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-4 border-black bg-[#8A2BE2] flex items-center justify-center text-white text-base sm:text-lg shrink-0 brutal-shadow-sm">
                <i className={p.icon}></i>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-black uppercase tracking-tight mb-1" style={{ color: 'var(--text)' }}>{p.title}</h3>
                <p className="font-bold text-[10px] sm:text-xs leading-relaxed" style={{ color: 'var(--text-sec)' }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tags.map((t, ti) => (
                    <span
                      key={ti}
                      className={`border-2 border-black rounded-lg px-2 sm:px-2.5 py-0.5 text-[8px] sm:text-[9px] font-bold ${tagColors[t] || 'bg-gray-200 text-black'}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 font-bold text-[8px] sm:text-[9px] uppercase bg-black text-white border-2 border-black rounded-lg px-3 py-1.5 brutal-shadow-sm brutal-btn"
                >
                  <i className="fab fa-telegram-plane"></i> Go to Bot
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
