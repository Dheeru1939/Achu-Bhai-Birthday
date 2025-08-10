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

  // Personal memories with Achu
  const memories: Memory[] = [
    {
      id: 1,
      date: "The Beginning",
      title: "How We First Met",
      description: "I still remember how I annoyed you and irritated you for your Hindi slang and still your Hindi is in South Indian accent. But I still remember the Sharbat pyaar thoda zyada he hogya tha aap ki taraf ki aaj bhi hazam nahi hota itna sweet aur pyaara sharbat hayee 😂😂",
      icon: "fas fa-users"
    },
    {
      id: 2,
      date: "Movie Time",
      title: "Our Movie Debates",
      description: "Tu movie dekhna jaldi aaya kr aur thoda apna movie ka taste sudhar yeh Stree 2 ka sab uper uth kuch aacha dekh! Your movie choices always lead to our hilarious arguments.",
      icon: "fas fa-film"
    },
    {
      id: 3,
      date: "Always",
      title: "Your Special Voice",
      description: "Kuch bhi bol lo teri kach kach aur 'Dheeraj Pata hai aaj kya huva' ka bina jeevan suna toh ho jata hai bhai. Teri awaz mai he 1 sukoon aur maza hai ree, 1 energy hai. I don't know how to express it but hai bhai 😅😅",
      icon: "fas fa-microphone"
    },
    {
      id: 4,
      date: "Every Day",
      title: "Our Sweet Kalesh",
      description: "Tujha gussa dila ne ka maza he kuch hai reeee..... tu meri baato ka itna bura maat mana kr ree na samajh soch kr janee dena ka itna nahi sochna bhai chill maar (Take a deep breath: Inhale, hold for 5 seconds, and then exhale remains constant) 😂😂",
      icon: "fas fa-fire"
    },
    {
      id: 5,
      date: "Forever",
      title: "My Promise",
      description: "I'll keep on annoying you whole life Achuuuu Babaeeeee 😁😁😁😁 Whether you like it or not, you're stuck with me and all my annoying habits for life!",
      icon: "fas fa-heart"
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
