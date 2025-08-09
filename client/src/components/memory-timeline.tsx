import { useEffect, useRef, useState } from 'react';

interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: string;
}

export function MemoryTimeline() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // CUSTOMIZATION POINT: Add your actual memories and dates here
  const memories: Memory[] = [
    {
      id: 1,
      date: "[Add Date Here]",
      title: "How We First Met",
      description: "[Add your story about how you first met here. This could be at school, work, through mutual friends, or any other special circumstance that brought you together.]",
      icon: "fas fa-users"
    },
    {
      id: 2,
      date: "[Add Date Here]",
      title: "That Hilarious Moment",
      description: "[Add a funny memory here. Maybe it was an embarrassing moment you shared, a joke that became an inside reference, or a silly adventure you went on together.]",
      icon: "fas fa-laugh"
    },
    {
      id: 3,
      date: "[Add Date Here]",
      title: "When I Realized You Were Special",
      description: "[Share the moment when you realized this person was going to be an important part of your life. Maybe they helped you through a tough time, or you had a deep conversation that changed everything.]",
      icon: "fas fa-heart"
    },
    {
      id: 4,
      date: "[Add Date Here]",
      title: "Our Adventure Together",
      description: "[Describe a trip, adventure, or special outing you took together. This could be a vacation, a spontaneous road trip, or even just exploring your local city.]",
      icon: "fas fa-plane"
    },
    {
      id: 5,
      date: "[Add Date Here]",
      title: "Recent Amazing Memory",
      description: "[Add a recent memory that shows how your friendship continues to grow and create new special moments together.]",
      icon: "fas fa-star"
    },
    {
      id: 6,
      date: "Present Day",
      title: "Our Friendship Today",
      description: "[Write about what your friendship means to you now and your hopes for the future. This is a great place to add more personal, heartfelt sentiments.]",
      icon: "fas fa-infinity"
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
      id="memories" 
      className="py-20 bg-gradient-to-br from-soft-peach to-primary-lavender"
      data-testid="memory-section"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="font-poppins font-semibold text-4xl lg:text-5xl text-charcoal mb-4 relative inline-block" data-testid="memory-title">
            Our Memory Timeline
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-pink to-rose-gold rounded-full"></span>
          </h2>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto mt-6" data-testid="memory-subtitle">
            A journey through all the special moments that have made our friendship so incredible.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-pink rounded-full hidden lg:block" data-testid="timeline-line"></div>
          <div className="absolute left-5 w-1 h-full bg-primary-pink rounded-full lg:hidden" data-testid="timeline-line-mobile"></div>
          
          <div className="space-y-12">
            {memories.map((memory, index) => (
              <div
                key={memory.id}
                className={`relative ${isVisible ? 'fade-in visible' : 'fade-in'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                data-testid={`timeline-item-${memory.id}`}
              >
                {/* Timeline icon */}
                <div className="absolute left-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center text-white text-xl shadow-lg z-10" data-testid={`timeline-icon-${memory.id}`}>
                  <i className={memory.icon}></i>
                </div>
                
                {/* Content */}
                <div className={`ml-20 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-16' : 'lg:pr-16'}`}>
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl transition-all duration-300 hover-float" data-testid={`memory-content-${memory.id}`}>
                    <div className="text-primary-pink font-semibold text-sm mb-2" data-testid={`memory-date-${memory.id}`}>
                      {memory.date}
                    </div>
                    <h3 className="font-poppins font-semibold text-xl lg:text-2xl text-charcoal mb-4" data-testid={`memory-title-${memory.id}`}>
                      {memory.title}
                    </h3>
                    <p className="text-soft-gray leading-relaxed" data-testid={`memory-description-${memory.id}`}>
                      {memory.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
