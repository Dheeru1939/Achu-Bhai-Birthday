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

  // CUSTOMIZATION POINT: Replace these with actual photos of your friend
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Beautiful Smile",
      caption: "That Beautiful Smile"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Candid Moment",
      caption: "Natural Beauty"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Happy Moment",
      caption: "Pure Joy"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Thoughtful Moment",
      caption: "Peaceful Vibes"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Radiant Energy",
      caption: "Shining Bright"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Elegant Portrait",
      caption: "Simply Amazing"
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
