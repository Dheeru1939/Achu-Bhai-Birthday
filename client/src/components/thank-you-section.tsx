import { useEffect, useRef, useState } from 'react';

export function ThankYouSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // CUSTOMIZATION POINT: Update this message as needed
  const birthdayMessage = "Happy Birthday, Achu! 🎉\n\nI'm not great at saying or expressing things, but you truly are one of the most amazing people I've ever met — with the purest soul, the warmest heart, and a smile that can make anyone's day better. Never, ever change yourself for anyone. You're just a vibe, bhai — even with that little short temper 😏 — and that's what makes you you.\n\nI know I annoy you a lot (sorry… not sorry 😜), but honestly, I wouldn't have it any other way. I'm really lucky to have you in my life, and I hope I get to keep annoying you for a lifetime — whether you enjoy it or not.\n\nWishing you all the happiness, success, and adventures you've ever dreamed of. May every day feel as special as today, and may you live long enough to get endlessly irritated by me. Oh, and yes… don't forget my protein powder gift 😂\n\nHappy, happy, happy birthday, Achuuuuuuuuuu! ❤️";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="birthday-message" 
      className="py-20 bg-golden-yellow relative"
      data-testid="birthday-message-section"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div 
              className={`bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border-4 border-primary-pink relative overflow-hidden transition-all duration-700 hover-scale ${
                isVisible ? 'fade-in visible' : 'fade-in'
              }`}
              data-testid="birthday-message-card"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-pink via-rose-gold to-primary-lavender"></div>
              
              <div className="text-center mb-6">
                <i className="fas fa-heart text-5xl text-primary-pink" data-testid="heart-icon"></i>
              </div>
              
              <div className="text-xl lg:text-2xl leading-relaxed text-charcoal text-center font-medium whitespace-pre-line" data-testid="birthday-message">
                {birthdayMessage}
              </div>
              
              <div className="flex justify-center mt-8 gap-4">
                <i className="fas fa-star text-2xl text-golden-yellow" data-testid="star-icon-1"></i>
                <i className="fas fa-heart text-2xl text-primary-pink" data-testid="heart-icon-2"></i>
                <i className="fas fa-star text-2xl text-golden-yellow" data-testid="star-icon-2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
