import { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-lg shadow-lg' 
          : 'bg-white/95 backdrop-blur-lg'
      }`}
      data-testid="navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('home')}
            className="font-poppins font-semibold text-xl text-charcoal flex items-center gap-2 hover:text-primary-pink transition-colors duration-300"
            data-testid="nav-brand"
          >
            <i className="fas fa-heart text-red-500"></i>
            For My Best Friend
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="nav-link font-medium text-charcoal hover:text-primary-pink transition-colors duration-300 relative group"
              data-testid="nav-home"
            >
              Home
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-pink transition-all duration-300 group-hover:w-4/5"></span>
            </button>
            <button
              onClick={() => scrollToSection('thank-you')}
              className="nav-link font-medium text-charcoal hover:text-primary-pink transition-colors duration-300 relative group"
              data-testid="nav-thank-you"
            >
              Thank You
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-pink transition-all duration-300 group-hover:w-4/5"></span>
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="nav-link font-medium text-charcoal hover:text-primary-pink transition-colors duration-300 relative group"
              data-testid="nav-gallery"
            >
              Gallery
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-pink transition-all duration-300 group-hover:w-4/5"></span>
            </button>
            <button
              onClick={() => scrollToSection('memories')}
              className="nav-link font-medium text-charcoal hover:text-primary-pink transition-colors duration-300 relative group"
              data-testid="nav-memories"
            >
              Memories
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-pink transition-all duration-300 group-hover:w-4/5"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
