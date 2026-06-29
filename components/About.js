export default function About() {
  return (
    <section className="py-12 sm:py-16" id="tentang">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-center mb-2 sm:mb-4 reveal">
        <i className="fas fa-user-circle text-[#8A2BE2] mr-2 sm:mr-3"></i>Tentang
      </h2>
      <p className="text-center font-bold text-[10px] sm:text-xs max-w-lg mx-auto mb-6 sm:mb-10 reveal reveal-d1 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        Bot Developer & SysAdmin — based in Aceh
      </p>
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-5 sm:p-7 lg:p-9 reveal reveal-d2">
          <p className="font-bold text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5" style={{ color: 'var(--text-sec)' }}>
            Halo, saya <strong style={{ color: 'var(--text)' }}>WannOfficial</strong>, 18 tahun dari Aceh. Sehari-hari saya berkutat dengan kode — bikin bot Telegram, merancang backend, dan mengotomasi hal-hal yang idealnya memang diotomasi. Saya juga jual beli akun Telegram serta ngurus beberapa server buat bot-bot yang udah running di production.
          </p>
          <p className="font-bold text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-sec)' }}>
            Saya <strong style={{ color: 'var(--text)' }}>self-taught</strong>, belajar dari dokumentasi, trial-error, dan kadang dari error yang bikin gregetan. Tinggal di Aceh, kerja remote, dan nggak pernah puas sama kode yang sudah jadi — selalu ada aja yang bisa dibikin lebih efisien.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-[#8A2BE2] text-white border-4 border-black rounded-xl brutal-shadow p-4 sm:p-6 text-center brutal-card reveal reveal-d3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black">50+</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase mt-1.5 tracking-wider"><i className="fas fa-robot mr-1"></i>Bot Dibikin</div>
          </div>
          <div className="bg-[#00D26A] border-4 border-black rounded-xl brutal-shadow p-4 sm:p-6 text-center brutal-card reveal reveal-d3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black">3+</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase mt-1.5 tracking-wider"><i className="fas fa-calendar mr-1"></i>Tahun Ngoding</div>
          </div>
          <div className="bg-[#FF6B6B] text-white border-4 border-black rounded-xl brutal-shadow p-4 sm:p-6 text-center brutal-card reveal reveal-d4">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black">∞</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase mt-1.5 tracking-wider"><i className="fas fa-sync mr-1"></i>Refactoring</div>
          </div>
          <div className="bg-[#FFD93D] border-4 border-black rounded-xl brutal-shadow p-4 sm:p-6 text-center brutal-card reveal reveal-d4">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black">5</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase mt-1.5 tracking-wider"><i className="fas fa-star mr-1"></i>Problem Solver</div>
          </div>
        </div>
      </div>
    </section>
  )
}
