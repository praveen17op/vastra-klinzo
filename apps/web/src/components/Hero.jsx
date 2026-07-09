import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const HERO_IMAGES = [
  "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/home_hero_shirts.png",
  "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/home_hero_steamiron.png",
  "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/home_hero_suit.png",
  "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/home_hero_wash.png",
  "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/home_hero_shoe.png"
];

const Hero = () => {
  const whatsappUrl = "https://wa.me/919702025755?text=Hi%2C%20I%27d%20like%20to%20book%20a%20laundry%20service%20pickup";
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    
    return () => clearInterval(timer);
  });

  return (
    <section 
      id="home" 
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background Images Carousel & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Laundry service background ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
              index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
            style={{ objectPosition: 'center right' }}
          />
        ))}
        {/* Gradient overlay to blend image with the background and ensure text readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/40 to-background/5 lg:to-background/10 pointer-events-none" />
        {/* Extra darkening for mobile to ensure text contrast */}
        <div className="absolute inset-0 z-[1] bg-background/40 lg:hidden pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Professional Laundry & Dry Cleaning at Your Doorstep
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-prose font-medium">
              Fast Pickup • Expert Cleaning • Premium Care • On-Time Delivery
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="btn-gradient-brand px-8 py-6 text-base" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;