import { useState } from 'react';

export function HeroSection() {
  // CUSTOMIZATION POINT: Update these values with your friend's information
  const [friendName] = useState("Best Friend's Name");
  const [welcomeMessage] = useState("This little corner of the internet is dedicated entirely to you and all the amazing memories we've shared together.");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-br from-primary-lavender via-soft-blue to-primary-pink flex items-center relative overflow-hidden"
      data-testid="hero-section"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-poppins font-bold text-4xl lg:text-5xl xl:text-6xl text-charcoal leading-tight animate-fadeInUp">
              Welcome to Your Special Place,{' '}
              <span className="text-primary-pink font-bold underline decoration-rose-gold" data-testid="friend-name">
                {friendName}
              </span>!
            </h1>
            <p className="text-xl lg:text-2xl text-soft-gray opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }} data-testid="welcome-message">
              {welcomeMessage}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <button
                onClick={() => scrollToSection('thank-you')}
                className="px-8 py-4 bg-primary-pink text-white font-semibold text-lg rounded-full hover:bg-rose-gold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                data-testid="button-read-message"
              >
                <i className="fas fa-heart"></i>
                Read My Message
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="px-8 py-4 bg-transparent border-2 border-charcoal text-charcoal font-semibold text-lg rounded-full hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                data-testid="button-view-gallery"
              >
                <i className="fas fa-images"></i>
                View Gallery
              </button>
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Photo of best friends together"
              className="w-full max-w-md mx-auto lg:mx-0 rounded-3xl shadow-2xl transition-transform duration-300 hover-float animate-fadeInRight"
              data-testid="hero-image"
            />
            {/* CUSTOMIZATION POINT: Replace the src above with a photo of you and your friend */}
          </div>
        </div>
      </div>
    </section>
  );
}
