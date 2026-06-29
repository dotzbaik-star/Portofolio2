'use client'
import { useState } from 'react'

const methods = [
  { label: 'GOPAY', bg: '#00D26A', textWhite: false },
  { label: 'OVO', bg: '#8A2BE2', textWhite: true },
  { label: 'DANA', bg: '#FF6B6B', textWhite: true },
  { label: 'QRIS', bg: '#FFD93D', textWhite: false },
  { label: 'Saweria', bg: 'var(--surface)', textWhite: false },
]

export default function Donation() {
  const [showQris, setShowQris] = useState(false)

  return (
    <section className="py-12 sm:py-16">
      <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-6 sm:p-10 lg:p-14 text-center reveal">
        <i className="fas fa-mug-hot text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4" style={{ color: 'var(--text)' }}></i>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter">
          Dukung <span className="bg-[#FFD93D] px-2 sm:px-3 border-4 border-black brutal-shadow-sm inline-block">Karya</span>
        </h2>
        <p className="font-bold text-[11px] sm:text-xs max-w-md mx-auto mt-3 sm:mt-4 mb-6 sm:mb-8" style={{ color: 'var(--text-sec)' }}>
          Dukungan Anda sangat berarti untuk pengembangan bot dan layanan yang saya kelola.
        </p>
        <button
          onClick={() => setShowQris(true)}
          className="inline-block font-bold text-[10px] sm:text-xs uppercase bg-[#8A2BE2] text-white border-4 border-black rounded-xl px-6 sm:px-8 py-3 sm:py-4 brutal-shadow-sm brutal-btn mb-6 sm:mb-8 flex items-center gap-1.5 mx-auto w-fit cursor-pointer"
        >
          <i className="fas fa-heart"></i> Donasi
        </button>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {methods.map((m, i) => (
            <span
              key={i}
              className="border-4 border-black rounded-xl px-3 sm:px-5 py-2 sm:py-3 font-bold text-[9px] sm:text-[10px] uppercase brutal-card flex items-center gap-1"
              style={{ background: m.bg, color: m.textWhite ? '#fff' : m.label === 'Saweria' ? 'var(--text)' : '#000', borderColor: '#000' }}
            >
              <i className="fas fa-credit-card"></i>{m.label}
            </span>
          ))}
        </div>
      </div>

      {showQris && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.6)' }}
          onClick={() => setShowQris(false)}
        >
          <div
            className="bg-[var(--surface)] border-4 border-black rounded-xl brutal-shadow p-6 sm:p-10 max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQris(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-black text-white border-4 border-black rounded-xl flex items-center justify-center font-bold text-lg brutal-shadow-sm hover:scale-110 transition-transform"
            >
              <i className="fas fa-times"></i>
            </button>
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tighter mb-4 text-center" style={{ color: 'var(--text)' }}>
              QRIS
            </h3>
            <img
              src="https://files.catbox.moe/vm9kwk"
              alt="QRIS"
              className="w-full rounded-xl border-4 border-black"
            />
            <p className="text-[10px] sm:text-xs font-bold mt-4 text-center" style={{ color: 'var(--text-sec)' }}>
              Scan QR di atas untuk donasi
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
