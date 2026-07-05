import { useEffect, useState, useRef } from 'react';
import { Slides } from './Slides';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const wheelLocked = useRef(false);
  
  const totalSlides = 10;

  useEffect(() => {
    const handleResize = () => {
      const factor = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      const x = (window.innerWidth - 1920 * factor) / 2;
      const y = (window.innerHeight - 1080 * factor) / 2;
      setScale(factor);
      setTranslate({ x, y });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => setCurrentSlide(p => Math.min(p + 1, totalSlides - 1));
  const prev = () => setCurrentSlide(p => Math.max(p - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        next();
      }
      if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        prev();
      }
      if (e.key === 'Home') setCurrentSlide(0);
      if (e.key === 'End') setCurrentSlide(totalSlides - 1);
    };
    
    const handleWheel = (e: WheelEvent) => {
      if (wheelLocked.current || Math.abs(e.deltaY) < 40) return;
      wheelLocked.current = true;
      e.deltaY > 0 ? next() : prev();
      setTimeout(() => { wheelLocked.current = false; }, 600);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel, { passive: true });
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-stage-bg">
      <main 
        className="absolute left-0 top-0 w-[1920px] h-[1080px] overflow-hidden origin-top-left bg-slide-bg"
        style={{ transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})` }}
      >
        <Slides currentSlide={currentSlide} onNavigate={setCurrentSlide} />
      </main>
      
      {/* Dots navigation */}
      <nav className="fixed left-1/2 bottom-[22px] -translate-x-1/2 flex items-center gap-4 z-50 px-6 py-3 bg-[#f0ebde73] backdrop-blur-md rounded-full border border-line">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ease-out-expo ${
              currentSlide === i 
                ? 'bg-ink scale-175 opacity-100 shadow-[0_0_10px_rgba(31,43,224,0.2)]' 
                : 'bg-ink opacity-30 hover:opacity-60'
            }`}
          />
        ))}
      </nav>
    </div>
  );
}
