import { useEffect } from 'react';
import { FloatingHearts } from '@/components/floating-hearts';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ThankYouSection } from '@/components/thank-you-section';
import { GallerySection } from '@/components/gallery-section';
import { MemoryTimeline } from '@/components/memory-timeline';

export default function Home() {
  useEffect(() => {
    // Add confetti effect on page load
    const createConfetti = () => {
      const confettiContainer = document.createElement('div');
      confettiContainer.className = 'fixed top-0 left-0 w-full h-full pointer-events-none z-[1]';
      document.body.appendChild(confettiContainer);

      for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.animationDelay = Math.random() * 3 + 's';
        confettiPiece.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confettiContainer.appendChild(confettiPiece);
      }

      // Remove confetti after animation
      setTimeout(() => {
        confettiContainer.remove();
      }, 5000);
    };

    // Trigger confetti after a short delay
    const timer = setTimeout(createConfetti, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen" data-testid="home-page">
      <FloatingHearts />
      <Navigation />
      <HeroSection />
      <ThankYouSection />
      <GallerySection />
      <MemoryTimeline />
    </div>
  );
}
