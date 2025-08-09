import { useEffect } from 'react';

export function FloatingHearts() {
  useEffect(() => {
    function createFloatingHeart() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '💖';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
      heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
      
      const container = document.getElementById('floating-hearts');
      if (container) {
        container.appendChild(heart);
        
        setTimeout(() => {
          if (heart.parentNode) {
            heart.remove();
          }
        }, 6000);
      }
    }

    const interval = setInterval(createFloatingHeart, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      id="floating-hearts" 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]"
      data-testid="floating-hearts-container"
    />
  );
}
