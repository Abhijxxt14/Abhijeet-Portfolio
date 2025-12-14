import { useEffect, useState } from 'react';

type GlitchType = 'static' | 'rgb-split' | 'scanlines' | 'distortion' | 'tear';

export const GlitchEffect = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchType, setGlitchType] = useState<GlitchType>('static');

  useEffect(() => {
    const glitchTypes: GlitchType[] = ['static', 'rgb-split', 'scanlines', 'distortion', 'tear'];
    let currentIndex = 0;

    const triggerGlitch = () => {
      // Cycle through glitch types
      setGlitchType(glitchTypes[currentIndex]);
      currentIndex = (currentIndex + 1) % glitchTypes.length;
      
      setIsGlitching(true);
      
      // Random glitch duration between 300-800ms (longer)
      const duration = Math.random() * 500 + 300;
      
      setTimeout(() => {
        setIsGlitching(false);
      }, duration);
    };

    // Trigger glitch at random intervals (every 3-6 seconds - more frequent)
    const scheduleNextGlitch = () => {
      const delay = Math.random() * 3000 + 3000;
      return setTimeout(triggerGlitch, delay);
    };

    let timeout = scheduleNextGlitch();

    // Reschedule after each glitch
    const interval = setInterval(() => {
      clearTimeout(timeout);
      timeout = scheduleNextGlitch();
    }, 6000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  if (!isGlitching) return null;

  return (
    <>
      {/* Static Noise Overlay */}
      {glitchType === 'static' && (
        <>
          <div className="fixed inset-0 z-50 pointer-events-none glitch-static opacity-70" />
          <div className="fixed inset-0 z-50 pointer-events-none bg-white/10 glitch-flash" />
        </>
      )}
      
      {/* RGB Split Effect */}
      {glitchType === 'rgb-split' && (
        <>
          <div className="fixed inset-0 z-50 pointer-events-none glitch-rgb-intense" />
          <div className="fixed inset-0 z-50 pointer-events-none bg-white/20 glitch-flash-intense" />
        </>
      )}
      
      {/* Scan Lines */}
      {glitchType === 'scanlines' && (
        <>
          <div className="fixed inset-0 z-50 pointer-events-none glitch-scanlines-intense opacity-60" />
          <div className="fixed inset-0 z-50 pointer-events-none bg-primary/20 glitch-flash" />
          <div className="fixed inset-0 z-50 pointer-events-none glitch-horizontal-shift" />
        </>
      )}
      
      {/* Horizontal Distortion Bars */}
      {glitchType === 'distortion' && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full bg-primary/40 glitch-bar-intense"
              style={{
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.15}s`,
              }}
            />
          ))}
          <div className="fixed inset-0 z-50 pointer-events-none bg-black/30 glitch-flash" />
        </div>
      )}
      
      {/* Vertical Tear Effect */}
      {glitchType === 'tear' && (
        <>
          <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            <div 
              className="absolute h-full bg-background glitch-tear-intense border-l-4 border-r-4 border-primary/50"
              style={{
                width: `${Math.random() * 200 + 150}px`,
                left: `${Math.random() * 60 + 10}%`,
              }}
            />
          </div>
          <div className="fixed inset-0 z-50 pointer-events-none bg-white/15 glitch-flash-intense" />
        </>
      )}
    </>
  );
};
