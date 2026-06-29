export default function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-6 sm:gap-8 py-6 sm:py-8 items-center">
      <div className="reveal show relative">
        {/* chicken above title */}
        <div className="chicken-random hidden sm:block">
          <svg width="38" height="34" viewBox="0 0 80 70">
            {/* body */}
            <ellipse cx="35" cy="42" rx="22" ry="16" fill="#FFF3CD" stroke="#000" strokeWidth="2.5" className="chicken-body" />
            {/* wing */}
            <ellipse cx="28" cy="40" rx="12" ry="9" fill="#FFE082" stroke="#000" strokeWidth="2" className="chicken-wing" />
            {/* neck */}
            <ellipse cx="55" cy="35" rx="10" ry="14" fill="#FFF3CD" stroke="#000" strokeWidth="2.5" />
            {/* head */}
            <circle cx="58" cy="22" r="12" fill="#FFF3CD" stroke="#000" strokeWidth="2.5" className="chicken-head" />
            {/* eye */}
            <circle cx="62" cy="20" r="2.5" fill="#000" />
            {/* beak */}
            <polygon points="68,22 76,20 68,25" fill="#FF8C42" stroke="#000" strokeWidth="1.5" />
            {/* comb */}
            <path d="M55,12 Q58,5 61,12 Q64,4 67,12" fill="#FF6B6B" stroke="#000" strokeWidth="1.5" className="chicken-comb" />
            {/* wattle */}
            <ellipse cx="58" cy="28" rx="3" ry="4" fill="#FF6B6B" stroke="#000" strokeWidth="1.2" />
            {/* tail feathers */}
            <path d="M14,38 Q2,30 8,22" fill="none" stroke="#FFE082" strokeWidth="3" strokeLinecap="round" />
            <path d="M16,42 Q0,38 4,30" fill="none" stroke="#FFE082" strokeWidth="3" strokeLinecap="round" />
            {/* legs */}
            <line x1="28" y1="56" x2="26" y2="68" stroke="#FF8C42" strokeWidth="2.5" className="chicken-leg" />
            <line x1="38" y1="56" x2="40" y2="68" stroke="#FF8C42" strokeWidth="2.5" className="chicken-leg2" />
          </svg>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-5">
          <span className="inline-block bg-[#8A2BE2] text-white border-4 border-black rounded-xl px-4 sm:px-5 py-1.5 sm:py-2 font-bold text-[10px] sm:text-xs uppercase brutal-shadow-sm float-loop">
            <i className="fas fa-microchip mr-1.5"></i>Bot Developer
          </span>
          <span className="inline-block bg-[#00D26A] border-4 border-black rounded-xl px-4 sm:px-5 py-1.5 sm:py-2 font-bold text-[10px] sm:text-xs uppercase brutal-shadow-sm float-loop" style={{ animationDelay: '0.3s' }}>
            <i className="fas fa-cake-candles mr-1.5"></i>18yo
          </span>
          <span className="inline-block bg-black text-white border-4 border-black rounded-xl px-4 sm:px-5 py-1.5 sm:py-2 font-bold text-[10px] sm:text-xs uppercase brutal-shadow-sm aceh-wobble">
            <i className="fas fa-map-pin mr-1.5"></i>Aceh
          </span>
          <span className="inline-block bg-[#FF6B6B] text-white border-4 border-black rounded-xl px-4 sm:px-5 py-1.5 sm:py-2 font-bold text-[10px] sm:text-xs uppercase brutal-shadow-sm float-loop" style={{ animationDelay: '0.5s' }}>
            <i className="fas fa-arrow-right-arrow-left mr-1.5"></i>Sell Telegram Acc
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1] tracking-tighter relative">
          <span className="typing-cursor">WannOfficial</span>
        </h1>
        <div className="text-sm sm:text-base lg:text-lg font-bold mt-2 sm:mt-3 text-[#8A2BE2]">
          &lt; Bot Telegram And Automation /&gt;
        </div>
        <p className="text-xs sm:text-sm lg:text-base font-bold mt-3 sm:mt-5 max-w-md leading-relaxed" style={{ color: 'var(--text-sec)' }}>
          Telegram Bot Developer, automating support for my business. Self-taught, WFH - Aceh.
        </p>
        <div className="flex gap-2 sm:gap-3 mt-5 sm:mt-8 flex-wrap">
          <a href="#proyek" className="font-bold text-[10px] sm:text-xs uppercase bg-[#8A2BE2] text-white border-4 border-black rounded-xl px-5 sm:px-7 py-3 sm:py-4 brutal-shadow-sm brutal-btn flex items-center gap-1.5">
            <i className="fas fa-folder-open"></i> View Project
          </a>
          <a href="https://t.me/WannnKW" target="_blank" rel="noopener noreferrer" className="font-bold text-[10px] sm:text-xs uppercase bg-[var(--surface)] border-4 border-black rounded-xl px-5 sm:px-7 py-3 sm:py-4 brutal-shadow-sm brutal-btn flex items-center gap-1.5" style={{ color: 'var(--text)' }}>
            <i className="fab fa-telegram-plane text-[#26A5E4]"></i> Telegram
          </a>
          <a href="https://www.youtube.com/wannoffc" target="_blank" rel="noopener noreferrer" className="font-bold text-[10px] sm:text-xs uppercase bg-[var(--surface)] border-4 border-black rounded-xl px-5 sm:px-7 py-3 sm:py-4 brutal-shadow-sm brutal-btn flex items-center gap-1.5" style={{ color: 'var(--text)' }}>
            <i className="fab fa-youtube text-[#FF0000]"></i> YouTube
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end reveal show reveal-d2 mt-4 lg:mt-0 relative">
        {/* bird above profile */}
        <div className="bird-float hidden sm:block">
          <svg width="36" height="30" viewBox="0 0 70 60">
            {/* body */}
            <ellipse cx="30" cy="35" rx="18" ry="12" fill="#4FC3F7" stroke="#000" strokeWidth="2.5" />
            {/* head */}
            <circle cx="48" cy="28" r="9" fill="#4FC3F7" stroke="#000" strokeWidth="2.5" />
            {/* eye */}
            <circle cx="51" cy="26" r="2.5" fill="#000" />
            {/* beak */}
            <polygon points="56,28 66,26 56,31" fill="#FF8C42" stroke="#000" strokeWidth="1.5" />
            {/* wing back */}
            <ellipse cx="22" cy="32" rx="14" ry="8" fill="#29B6F6" stroke="#000" strokeWidth="2" className="bird-wing2" />
            {/* wing front */}
            <ellipse cx="28" cy="34" rx="12" ry="7" fill="#4FC3F7" stroke="#000" strokeWidth="2" className="bird-wing" />
            {/* tail */}
            <polygon points="12,32 2,22 6,36" fill="#29B6F6" stroke="#000" strokeWidth="2" />
            {/* belly */}
            <ellipse cx="32" cy="38" rx="10" ry="6" fill="#E1F5FE" />
          </svg>
        </div>

        <div className="w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-xl border-4 border-black brutal-shadow bg-[#8A2BE2] relative float-loop overflow-hidden">
          <img
            src="https://files.catbox.moe/ce4tae"
            alt="WannOfficial"
            className="w-full h-full object-cover rounded-[inherit]"
          />
        </div>
      </div>
    </section>
  )
}
