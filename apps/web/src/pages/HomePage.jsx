import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { MessageSquare } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import About from '@/components/About.jsx';
import WhyChooseUs from '@/components/WhyChooseUs.jsx';
import Services from '@/components/Services.jsx';
import HowItWorks from '@/components/HowItWorks.jsx';
import Testimonials from '@/components/Testimonials.jsx';
import DownloadApp from '@/components/DownloadApp.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceModal from '@/components/ServiceModal.jsx';
import { services } from '@/data/servicesData.js';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle URL params on mount and changes
  useEffect(() => {
    const serviceSlug = searchParams.get('service');
    if (serviceSlug) {
      const service = services.find(s => s.slug === serviceSlug);
      if (service) {
        setSelectedService(service);
        setIsModalOpen(true);
      }
    } else {
      setIsModalOpen(false);
    }
  }, [searchParams]);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    setSearchParams({ service: service.slug }, { replace: true });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchParams({}, { replace: true });
    setTimeout(() => setSelectedService(null), 300); // Wait for animation
  };

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Vastra Klinzo - Professional Laundry & Dry Cleaning in Thane</title>
        <meta
          name="description"
          content="Premium laundry and dry cleaning services with doorstep pickup and delivery in Thane. Expert care, affordable pricing, and on-time delivery guaranteed."
        />
      </Helmet>

      <div className="relative">
        <Header />
        <main>
          <Hero />
          <About />
          <WhyChooseUs />
          <Services onSelectService={handleOpenModal} />
          <HowItWorks />
          <Testimonials />
          <DownloadApp />
        </main>
        <Footer />

        <ServiceModal 
          service={selectedService} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919702025755?text=Hi%2C%20I%27d%20like%20to%20book%20a%20laundry%20service%20pickup"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-primary shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-200 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="h-7 w-7 text-white" />
        </a>
      </div>
    </>
  );
};

export default HomePage;