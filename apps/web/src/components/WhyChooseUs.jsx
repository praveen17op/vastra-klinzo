import React, { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: '01',
    title: 'Doorstep Pickup & Delivery',
    description: 'Schedule convenient pickup and delivery times that fit your busy lifestyle.',
    image: 'https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/carousel_pickup.png'
  },
  {
    id: '02',
    title: <>Professional <span className="brand-gradient">Klinzo</span> Process</>,
    description: <>Expert care using advanced techniques and equipment for every <span className="brand-gradient">Vastra</span> type.</>,
    image: 'https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/carousel_service.png'
  },
  {
    id: '03',
    title: 'Affordable Pricing',
    description: 'Transparent rates with no hidden charges, delivering premium quality at fair prices.',
    image: 'https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/carousel_pricing.png'
  },
  {
    id: '04',
    title: 'Fabric-Safe Detergents',
    description: <>Premium cleaning solutions that protect your <span className="brand-gradient">Vastras</span> while removing tough stains.</>,
    image: 'https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/carousel_fabric.png'
  },
  {
    id: '05',
    title: 'Timely Delivery',
    description: 'Reliable service with on-time delivery guaranteed for your peace of mind.',
    image: 'https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/carousel_delivery.png'
  },
  {
    id: '06',
    title: 'Easy Mobile App Booking',
    description: 'Track your laundry in real-time and manage orders effortlessly through our app.',
    image: 'https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/carousel_app.png'
  },
  {
    id: '07',
    title: 'Customer Satisfaction Focused',
    description: 'Dedicated support team ensuring every order meets our high quality standards.',
    image: 'https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/carousel_customersatisfaction.png'
  }
];

const WhyChooseUs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Touch variables for swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const scrollPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const scrollNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const scrollTo = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  // Autoplay logic that resets on manual navigation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, selectedIndex]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') scrollPrev();
    if (e.key === 'ArrowRight') scrollNext();
  }, [scrollPrev, scrollNext]);

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPlaying(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndEvent = () => {
    setIsPlaying(true);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      scrollNext();
    } else if (isRightSwipe) {
      scrollPrev();
    }
  };

  return (
    <section className="w-full bg-muted/50 overflow-hidden flex flex-col">
      {/* Section Header */}
      <div className="pt-[24px] pb-[16px] text-center">
        <h2 className="font-pricing text-[var(--carousel-teal)] text-[15px] tracking-[0.12em] uppercase">
          Why Choose Us
        </h2>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full h-[85vh] min-h-[560px] max-h-[780px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--carousel-teal)] bg-[var(--carousel-navy)]"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEndEvent}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Why Choose Us Carousel"
      >
        {/* Crossfading Images */}
        {slides.map((slide, index) => (
          <img 
            key={`img-${slide.id}`}
            src={slide.image} 
            alt=""
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[600ms] ease-in-out ${
              index === selectedIndex ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
            }`}
            aria-hidden="true"
          />
        ))}

        {/* Static Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,58,83,0.95)_0%,rgba(14,58,83,0.6)_50%,transparent_100%)] md:bg-[linear-gradient(to_right,rgba(14,58,83,0.10)_0%,rgba(14,58,83,0.55)_45%,rgba(14,58,83,0.88)_75%,rgba(14,58,83,0.96)_100%)] z-10 pointer-events-none" />

        {/* Content Area (Absolute positioned on right/bottom) */}
        <div className="absolute bottom-0 w-full px-[24px] py-[32px] md:top-0 md:bottom-0 md:right-0 md:w-[44%] md:px-[56px] md:py-0 flex flex-col justify-end md:justify-center z-20 pointer-events-none">
          <div className="max-w-[400px] w-full pointer-events-auto">
            
            {/* Crossfading Text Container (Fixed height to prevent jumping) */}
            <div className="relative w-full h-[240px] md:h-[260px]">
              {slides.map((slide, index) => (
                <div 
                  key={`text-${slide.id}`}
                  className={`absolute inset-0 flex flex-col transition-opacity duration-[600ms] ease-in-out ${
                    index === selectedIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  aria-hidden={index !== selectedIndex}
                >
                  <h3 className="text-[22px] md:text-[32px] font-bold text-white leading-[1.2] mb-[16px]">
                    {slide.title}
                  </h3>
                  <p className="text-[16px] text-white/75 leading-[1.75] max-w-[360px]">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Static Navigation Controls */}
            <div className="flex items-center gap-4 mt-[16px] md:mt-[32px]">
              <button
                onClick={scrollPrev}
                className="w-[44px] h-[44px] rounded-full border-[1.5px] border-white/25 flex items-center justify-center text-white hover:bg-[var(--carousel-teal)] hover:border-[var(--carousel-teal)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      index === selectedIndex 
                        ? 'w-[24px] h-[6px] bg-[var(--carousel-teal)]' 
                        : 'w-[6px] h-[6px] bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === selectedIndex ? 'true' : 'false'}
                  />
                ))}
              </div>

              <button
                onClick={scrollNext}
                className="w-[44px] h-[44px] rounded-full border-[1.5px] border-white/25 flex items-center justify-center text-white hover:bg-[var(--carousel-teal)] hover:border-[var(--carousel-teal)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;