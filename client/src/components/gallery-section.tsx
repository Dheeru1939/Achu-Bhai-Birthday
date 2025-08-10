import { useEffect, useRef, useState } from 'react';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Beautiful photos of Achu
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/assets/IMG_20250810_232336_1754848537138.jpg",
      alt: "Achu's Beautiful Smile",
      caption: "That Beautiful Smile"
    },
    {
      id: 2,
      src: "/assets/IMG_20250810_232251_1754848537134.jpg",
      alt: "Achu's Portrait",
      caption: "Natural Beauty"
    },
    {
      id: 3,
      src: "/assets/IMG_20250810_231915_1754848537138.jpg",
      alt: "Achu Reading",
      caption: "Peaceful Moments"
    },
    {
      id: 4,
      src: "/assets/IMG_20250810_232315_1754848537139.jpg",
      alt: "Achu in Traditional Dress",
      caption: "Radiant in Red"
    },
    {
      id: 5,
      src: "/assets/IMG_20250810_232354_1754848537140.jpg",
      alt: "Achu's Sweet Selfie",
      caption: "Pure Joy"
    }
  ];

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
      id="gallery" 
      className="py-20 bg-mint-green"
      data-testid="gallery-section"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="font-poppins font-semibold text-4xl lg:text-5xl text-charcoal mb-4 relative inline-block" data-testid="gallery-title">
            Celebrating You
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-pink to-rose-gold rounded-full"></span>
          </h2>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto mt-6" data-testid="gallery-subtitle">
            A beautiful collection celebrating the amazing person you are. Each photo captures your wonderful spirit.
          </p>
        </div>
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
          data-testid="gallery-grid"
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover-float aspect-square"
              data-testid={`gallery-item-${item.id}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                data-testid={`gallery-image-${item.id}`}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/80 to-rose-gold/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-xl text-center px-4" data-testid={`gallery-caption-${item.id}`}>
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
