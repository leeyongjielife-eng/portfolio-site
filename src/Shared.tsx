import { ReactNode, useState, useRef } from 'react';
import { motion } from 'motion/react';

export function SlideWrapper({ children, isActive, isPrev, isNext }: { children: ReactNode, isActive: boolean, isPrev: boolean, isNext: boolean }) {
  return (
    <motion.section
      className={`absolute inset-0 w-[1920px] h-[1080px] overflow-hidden slide-bg border-y-[16px] border-ink text-text-main font-sans ${isActive ? 'active' : ''}`}
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.98,
        y: isActive ? 0 : (isPrev ? -20 : 20),
        zIndex: isActive ? 1 : 0,
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: isActive ? 'auto' : 'none' }}
    >
      {children}
    </motion.section>
  );
}

export function Rule() {
  return <div className="absolute left-[84px] right-[84px] top-[88px] h-[2px] bg-ink" />;
}

export function Chrome({ left, right, className = "reveal" }: { left: string; right: string; className?: string }) {
  return (
    <div className={`absolute left-[84px] right-[84px] top-[108px] flex justify-between text-ink font-mono text-[23px] tracking-normal z-10 ${className}`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

export function Ticker({ left, right }: { left: string; right: string }) {
  return (
    <div className="absolute left-[84px] right-[84px] bottom-[48px] flex justify-between font-mono text-ink text-[21px] z-10">
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

export function SectionTitle({ mono, title, className = "", titleClassName = "text-[64px]" }: { mono: string; title: string, className?: string, titleClassName?: string }) {
  return (
    <div className={`absolute left-[84px] top-[190px] w-[1120px] z-[5] ${className}`}>
      <span className="font-mono text-ink text-[24px] mb-[16px] block reveal">{mono}</span>
      <h2 className={`text-ink font-serif leading-[1.1] font-bold tracking-normal reveal delay-1 ${titleClassName}`} dangerouslySetInnerHTML={{__html: title}}></h2>
    </div>
  );
}

export function ResultCard({ label, number, caption, quote, className = "" }: { label: string, number: string | ReactNode, caption: string, quote?: string, className?: string }) {
  return (
    <aside className={`absolute right-[96px] top-[204px] w-[466px] min-h-[620px] bg-paper-2 border-2 border-ink shadow-[22px_22px_0_rgba(31,43,224,0.16)] p-[42px] z-10 transition-all duration-400 ease-out-expo hover:-translate-y-2 hover:shadow-[28px_28px_0_rgba(31,43,224,0.22)] ${className}`}>
      <div className="text-ink font-mono text-[22px] mb-[42px] tracking-normal">{label}</div>
      <div className="text-text-main font-serif text-[138px] font-bold leading-[0.82] tracking-normal">{number}</div>
      <div className="mt-[26px] font-cn text-[31px] leading-[1.35] font-black text-[#1b1b17]">{caption}</div>
      {quote && (
        <>
          <div className="h-[2px] bg-ink opacity-35 my-[36px]" />
          <div className="font-cn text-[#48463d] text-[27px] leading-[1.5] font-medium">{quote}</div>
        </>
      )}
    </aside>
  );
}

export function InfoCard({ mono, title, children, className = "", onClick }: { mono?: string, title: string, children: ReactNode, className?: string, onClick?: () => void }) {
  return (
    <div onClick={onClick} className={`bg-[rgba(255,250,240,0.72)] border-[1.5px] border-line p-[28px] min-h-[140px] transition-all duration-400 ease-out-expo hover:-translate-y-2 hover:border-ink hover:shadow-[28px_28px_0_rgba(31,43,224,0.22)] flex flex-col ${onClick ? 'cursor-pointer' : ''} ${className}`}>
      {mono && <span className="font-mono text-ink text-[21px] mb-[16px] block">{mono}</span>}
      <h3 className={`text-ink font-cn font-black leading-[1.18] mb-[12px] ${mono ? 'text-[32px]' : 'text-[28px]'}`}>{title}</h3>
      <div className="text-[#36352f] font-cn text-[22px] leading-[1.43] font-medium flex-grow">{children}</div>
    </div>
  );
}

export function VideoWindow({ title, note, videoSrc, className = "" }: { title?: string, note?: string, videoSrc?: string, className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className={`video-window-bg border-2 border-ink shadow-[16px_16px_0_rgba(31,43,224,0.13)] min-h-[220px] p-[20px] relative overflow-hidden transition-shadow duration-400 ease-out-expo hover:shadow-[24px_24px_0_rgba(31,43,224,0.2)] flex flex-col ${className}`}>
      <div className="flex gap-2 mb-3 shrink-0">
        <i className="w-3 h-3 rounded-full bg-ink/20" />
        <i className="w-3 h-3 rounded-full bg-ink/20" />
        <i className="w-3 h-3 rounded-full bg-ink/20" />
      </div>
      {title && <div className="font-mono text-ink text-sm mb-2 shrink-0">{title}</div>}
      {note && <div className="font-cn text-text-main text-base mb-3 shrink-0">{note}</div>}
      {videoSrc ? (
        <div className="relative w-full flex-grow flex flex-col bg-ink/5 border border-ink/20 overflow-hidden cursor-pointer" onClick={togglePlay}>
          <video 
            ref={videoRef}
            src={videoSrc} 
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            className="w-full h-full object-cover outline-none" 
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity">
              <div className="w-[60px] h-[60px] bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                <svg className="w-8 h-8 text-ink ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full flex-grow bg-ink/5 border border-ink/20 flex items-center justify-center font-mono text-ink/60 min-h-[60px]">
          [ Video Player Placeholder ]
        </div>
      )}
    </div>
  );
}
