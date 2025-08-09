import { useEffect, useRef, useState } from 'react';

export function ThankYouSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // CUSTOMIZATION POINT: Update this message as needed
  const thankYouMessage = "You're really special to me. Thank you for being in my life. I hope I keep annoying you forever. May you succeed in life — and don't forget to buy me protein powder 😂";

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
      id="thank-you" 
      className="py-20 bg-golden-yellow relative"
      data-testid="thank-you-section"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div 
              className={`bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border-4 border-primary-pink relative overflow-hidden transition-all duration-700 hover-scale ${
                isVisible ? 'fade-in visible' : 'fade-in'
              }`}
              data-testid="thank-you-card"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-pink via-rose-gold to-primary-lavender"></div>
              
              <div className="text-center mb-6">
                <i className="fas fa-heart text-5xl text-primary-pink" data-testid="heart-icon"></i>
              </div>
              
              <p className="text-xl lg:text-2xl leading-relaxed text-charcoal text-center font-medium" data-testid="thank-you-message">
                {thankYouMessage}
              </p>
              
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
