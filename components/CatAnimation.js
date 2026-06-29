export default function CatAnimation() {
  return (
    <>
      {/* cat */}
      <div className="cat-runner" aria-hidden="true">
        <svg width="50" height="40" viewBox="0 0 100 80" className="cat-body">
          <ellipse cx="50" cy="45" rx="28" ry="18" fill="#FFB347" stroke="#000" strokeWidth="3" />
          <circle cx="82" cy="32" r="16" fill="#FFB347" stroke="#000" strokeWidth="3" />
          <polygon points="72,18 68,2 80,14" fill="#FFB347" stroke="#000" strokeWidth="3" className="cat-ear" />
          <polygon points="88,14 96,2 92,18" fill="#FFB347" stroke="#000" strokeWidth="3" className="cat-ear" style={{ animationDelay: '0.3s' }} />
          <polygon points="74,17 71,8 79,15" fill="#FF8C42" />
          <polygon points="87,15 93,7 90,17" fill="#FF8C42" />
          <circle cx="86" cy="30" r="3" fill="#000" />
          <circle cx="76" cy="30" r="3" fill="#000" />
          <polygon points="81,34 83,34 82,36" fill="#FF6B6B" />
          <path d="M80,36 Q82,39 84,36" fill="none" stroke="#000" strokeWidth="1.5" />
          <line x1="68" y1="32" x2="58" y2="30" stroke="#000" strokeWidth="1.2" />
          <line x1="68" y1="35" x2="58" y2="36" stroke="#000" strokeWidth="1.2" />
          <line x1="90" y1="32" x2="100" y2="30" stroke="#000" strokeWidth="1.2" />
          <line x1="90" y1="35" x2="100" y2="36" stroke="#000" strokeWidth="1.2" />
          <path d="M22,40 Q5,25 15,10" fill="none" stroke="#FFB347" strokeWidth="5" strokeLinecap="round" className="cat-tail" />
          <path d="M22,40 Q5,25 15,10" fill="none" stroke="#000" strokeWidth="7" strokeLinecap="round" opacity="0.15" className="cat-tail" />
          <rect x="40" y="58" width="6" height="18" rx="3" fill="#FFB347" stroke="#000" strokeWidth="2" className="cat-leg" />
          <rect x="52" y="58" width="6" height="18" rx="3" fill="#FFB347" stroke="#000" strokeWidth="2" className="cat-leg2" />
          <rect x="28" y="56" width="6" height="16" rx="3" fill="#FFB347" stroke="#000" strokeWidth="2" className="cat-leg2" style={{ animationDelay: '0.15s' }} />
          <rect x="38" y="56" width="6" height="16" rx="3" fill="#FFB347" stroke="#000" strokeWidth="2" className="cat-leg" style={{ animationDelay: '0.15s' }} />
          <path d="M40,38 Q50,32 60,38" fill="none" stroke="#E6952C" strokeWidth="2" opacity="0.5" />
          <path d="M38,44 Q50,38 62,44" fill="none" stroke="#E6952C" strokeWidth="2" opacity="0.5" />
        </svg>
      </div>

      {/* duck walking across middle */}
      <div className="duck-runner hidden sm:block" aria-hidden="true">
        <svg width="36" height="28" viewBox="0 0 80 60">
          <ellipse cx="32" cy="36" rx="22" ry="14" fill="#FFD54F" stroke="#000" strokeWidth="2.5" className="duck-body" />
          <ellipse cx="26" cy="34" rx="12" ry="8" fill="#FFCA28" stroke="#000" strokeWidth="2" className="duck-wing" />
          <ellipse cx="52" cy="30" rx="9" ry="12" fill="#FFD54F" stroke="#000" strokeWidth="2.5" />
          <circle cx="55" cy="20" r="10" fill="#FFD54F" stroke="#000" strokeWidth="2.5" className="duck-head" />
          <circle cx="58" cy="18" r="2" fill="#000" />
          <ellipse cx="54" cy="26" rx="3" ry="2" fill="#FF6B6B" stroke="#000" strokeWidth="1" />
          <path d="M64,20 Q72,19 74,21 Q72,23 64,22Z" fill="#FF8C42" stroke="#000" strokeWidth="1.5" />
          <line x1="22" y1="48" x2="20" y2="58" stroke="#FF8C42" strokeWidth="2.5" className="duck-leg" />
          <line x1="34" y1="48" x2="36" y2="58" stroke="#FF8C42" strokeWidth="2.5" className="duck-leg2" />
          <path d="M12,32 Q4,26 8,20" fill="none" stroke="#FFCA28" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    </>
  )
}
