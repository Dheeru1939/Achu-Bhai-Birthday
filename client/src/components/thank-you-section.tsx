import { useEffect, useRef, useState } from 'react';

export function ThankYouSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // CUSTOMIZATION POINT: Update this message as needed
  const birthdayMessage = "Happy Birthday to the most amazing person I know! You're really special to me, and I'm so grateful to have you in my life. Your kindness, laughter, and incredible spirit make every day brighter. I hope this new year brings you all the happiness, success, and adventures you deserve. Thank you for being such an incredible friend — I hope I get to keep annoying you for many more years to come! And yes, don't forget to buy me that protein powder 😂 Have the most wonderful birthday!";

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
              
              <p className="text-xl lg:text-2xl leading-relaxed text-charcoal text-center font-medium" data-testid="birthday-message">
                {birthdayMessage}
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
