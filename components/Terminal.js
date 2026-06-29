export default function Terminal() {
  return (
    <div className="border-4 border-brutal rounded-xl brutal-shadow bg-[var(--surface)] overflow-hidden my-6 sm:my-8 reveal">
      <div className="flex items-center gap-1.5 sm:gap-2 border-b-4 border-brutal px-4 sm:px-5 py-2.5 sm:py-3" style={{ background: 'var(--muted)' }}>
        <span className="w-3 h-3 rounded-full border-2 border-black bg-[#FF6B6B]"></span>
        <span className="w-3 h-3 rounded-full border-2 border-black bg-[#FFD93D]"></span>
        <span className="w-3 h-3 rounded-full border-2 border-black bg-[#00D26A]"></span>
        <span className="font-bold text-[9px] sm:text-[10px] uppercase ml-1.5 tracking-wider" style={{ color: 'var(--text-sec)' }}>terminal — wann.sh</span>
      </div>
      <div className="px-4 sm:px-6 py-4 sm:py-5 font-bold text-xs sm:text-sm leading-loose" style={{ color: 'var(--text)' }}>
        <span className="text-[#8A2BE2]">$</span> <span>whoami</span><br />
        <span className="text-[#00D26A]">⟹ WannOfficial — Focus on Automation</span><br />
        <span className="text-[#8A2BE2]">$</span> <span>cat ~/daily-driver.txt</span><br />
        <span className="text-[#00D26A]">⟹ Python · JavaScript · Redis · MongoDB · Kopi</span><br />
        <span className="text-[#8A2BE2]">$</span> <span>echo $PRINSIP</span><br />
        <span className="text-[#00D26A]">⟹ &ldquo;Kalau bisa diotomasi, kenapa harus manual?&rdquo;</span><br />
        <span className="text-[#8A2BE2]">$</span> <span className="animate-pulse inline-block">_</span>
      </div>
    </div>
  )
}
