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
            Saya <strong style={{ color: 'var(--text)' }}>WannOfficial</strong>, seorang developer dari Aceh. Fokus utama saya adalah pengembangan bot Telegram, backend, dan automation — mengubah pekerjaan repetitif menjadi sistem yang berjalan otomatis. Selain itu, saya juga aktif di jual-beli akun Telegram dan mengelola server untuk bot-bot yang berjalan di production.
          </p>
          <p className="font-bold text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-sec)' }}>
            Saya <strong style={{ color: 'var(--text)' }}>self-taught</strong> — belajar dari dokumentasi, trial & error, dan pengalaman langsung menangani proyek. Berbasis di Aceh, bekerja secara remote. Saya juga seorang <strong style={{ color: 'var(--text)' }}>vibe coding developer</strong> — kode yang lahir dari suasana santai, fokus tinggi, dan segelas kopi.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-[#8A2BE2] text-white border-4 border-black rounded-xl brutal-shadow p-4 sm:p-6 text-center brutal-card reveal reveal-d3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black">15+</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase mt-1.5 tracking-wider"><i className="fas fa-robot mr-1"></i>Bot Dibikin</div>
          </div>
          <div className="bg-[#00D26A] border-4 border-black rounded-xl brutal-shadow p-4 sm:p-6 text-center brutal-card reveal reveal-d3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black">3+</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase mt-1.5 tracking-wider"><i className="fas fa-calendar mr-1"></i>Tahun Ngoding</div>
          </div>
          <div className="bg-[#FF6B6B] text-white border-4 border-black rounded-xl brutal-shadow p-4 sm:p-6 text-center brutal-card reveal reveal-d4">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black">∞</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase mt-1.5 tracking-wider"><i className="fas fa-sync mr-1"></i>Vibecoding</div>
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
