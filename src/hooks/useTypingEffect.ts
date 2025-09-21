import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;

    setDisplayedText('');
    setIsComplete(false);
    
    // Store a reference to the interval for proper cleanup
    let typeInterval: ReturnType<typeof setInterval> | null = null;

    const timer = setTimeout(() => {
      let index = 0;
      typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          if (typeInterval) {
            clearInterval(typeInterval);
            typeInterval = null;
          }
        }
      }, speed);
    }, delay);

    // Proper cleanup function that handles both timers
    return () => {
      clearTimeout(timer);
      if (typeInterval) {
        clearInterval(typeInterval);
        typeInterval = null;
      }
    };
  }, [text, speed, delay]);

  return { displayedText, isComplete };
};