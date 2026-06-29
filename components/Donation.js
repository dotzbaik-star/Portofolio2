const methods = [
  { label: 'GOPAY', bg: '#00D26A', textWhite: false },
  { label: 'OVO', bg: '#8A2BE2', textWhite: true },
  { label: 'DANA', bg: '#FF6B6B', textWhite: true },
  { label: 'QRIS', bg: '#FFD93D', textWhite: false },
  { label: 'Saweria', bg: 'var(--surface)', textWhite: false },
]

export default function Donation() {
  return (
    <section className="py-12 sm:py-16">
      <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-6 sm:p-10 lg:p-14 text-center reveal">
        <i className="fas fa-mug-hot text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4" style={{ color: 'var(--text)' }}></i>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter">
          Traktir <span className="bg-[#FFD93D] px-2 sm:px-3 border-4 border-black brutal-shadow-sm inline-block">Kopi</span>
        </h2>
        <p className="font-bold text-[11px] sm:text-xs max-w-md mx-auto mt-3 sm:mt-4 mb-6 sm:mb-8" style={{ color: 'var(--text-sec)' }}>
          Bot-bot yang jalan juga perlu kopi biar nggak lemot. Kalau kamu merasa terbantu, traktir kopi yuk!
        </p>
        <a
          href="https://files.catbox.moe/h0so64"
          target="_blank" rel="noopener noreferrer"
          className="inline-block font-bold text-[10px] sm:text-xs uppercase bg-[#8A2BE2] text-white border-4 border-black rounded-xl px-6 sm:px-8 py-3 sm:py-4 brutal-shadow-sm brutal-btn mb-6 sm:mb-8 flex items-center gap-1.5 mx-auto w-fit"
        >
          <i className="fas fa-heart"></i> Traktir Kopi
        </a>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {methods.map((m, i) => (
            <span
              key={i}
              className={`border-4 border-black rounded-xl px-3 sm:px-5 py-2 sm:py-3 font-bold text-[9px] sm:text-[10px] uppercase brutal-card flex items-center gap-1`}
              style={{ background: m.bg, color: m.textWhite ? '#fff' : m.label === 'Saweria' ? 'var(--text)' : '#000', borderColor: '#000' }}
            >
              <i className="fas fa-credit-card"></i>{m.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
