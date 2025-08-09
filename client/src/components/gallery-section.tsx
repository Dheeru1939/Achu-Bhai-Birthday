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

  // CUSTOMIZATION POINT: Replace these with your actual photos
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Coffee Shop Adventures",
      caption: "Coffee Shop Adventures"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Mountain Adventures",
      caption: "Mountain Adventures"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Beach Sunsets",
      caption: "Beach Sunsets"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Cooking Disasters",
      caption: "Cooking Disasters"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "Concert Nights",
      caption: "Concert Nights"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      alt: "More Memories",
      caption: "More Memories"
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
            Our Photo Gallery
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-pink to-rose-gold rounded-full"></span>
          </h2>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto mt-6" data-testid="gallery-subtitle">
            A collection of all our favorite moments together. Each photo tells a story of our incredible friendship.
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
