
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pricingData } from '@/data/servicesData.js';
import { Button } from '@/components/ui/button';

const ServiceModal = ({ service, isOpen, onClose }) => {
  const [activeTier, setActiveTier] = useState('Normal');
  const scrollRef = useRef(null);

  const items = service?.isLive && service.pricingCategory ? pricingData[service.pricingCategory] : [];
  
  // Check if this is the washing service
  const isWashingService = service?.id === 'washing';

  // Calculate which tiers are actually available for this specific service
  const availableTiers = {
    Normal: items.some(i => i.normal !== null),
    Express: items.some(i => i.express !== null),
    Premium: items.some(i => i.premium !== null),
  };

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Set default active tier when modal opens based on priority (Normal -> Express -> Premium)
  useEffect(() => {
    if (isOpen && service?.isLive) {
      if (availableTiers.Normal) setActiveTier('Normal');
      else if (availableTiers.Express) setActiveTier('Express');
      else if (availableTiers.Premium) setActiveTier('Premium');
    }
  }, [isOpen, service]);

  // Reset scroll position of pricing list when tier changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [activeTier]);

  if (!service) return null;

  // Derive per-tier content (fallback to default service values if tier-specific not provided)
  const currentTurnaround = service.turnaroundByTier?.[activeTier] || service.turnaround;
  const currentWhatIncluded = service.whatIncludedByTier?.[activeTier] || service.whatIncluded;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[var(--modal-overlay)] backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center pointer-events-none px-0 md:px-4 pb-0 md:pb-4 pt-12 md:pt-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ y: '100%', opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full md:max-w-2xl bg-[hsl(var(--modal-bg))] border border-[hsl(var(--modal-border))] shadow-[var(--modal-shadow)] rounded-t-2xl md:rounded-2xl overflow-hidden flex flex-col max-h-[90vh] pointer-events-auto"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-[hsl(var(--modal-bg))] border-b border-border px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary overflow-hidden p-1.5">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h2 id="modal-title" className="text-xl font-bold text-foreground">
                    {service.name}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-grow p-4 md:p-6 space-y-8">
                
                {/* Photos Carousel */}
                {service.photos && service.photos.length > 0 && (
                  <div className="flex overflow-x-auto gap-3 pb-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {service.photos.map((photo, idx) => (
                      <img
                        key={idx}
                        src={photo}
                        alt={`${service.name} example ${idx + 1}`}
                        loading="lazy"
                        className="w-64 h-40 object-cover rounded-xl snap-center flex-shrink-0 border border-border"
                      />
                    ))}
                  </div>
                )}

                {/* Summary */}
                <div>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    {service.summary}
                  </p>

                  {/* Dynamic Controls (Tier & Turnaround) */}
                  {service.isLive ? (
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {/* Tier Switcher */}
                      <div className="inline-flex p-1 bg-muted rounded-lg w-full sm:w-auto">
                        {['Normal', 'Express', 'Premium'].map(tier => {
                          const isAvailable = availableTiers[tier];
                          return (
                            <button
                              key={tier}
                              disabled={!isAvailable}
                              title={!isAvailable ? `${tier} isn't available for this service.` : ''}
                              onClick={() => setActiveTier(tier)}
                              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex-1 sm:flex-none ${
                                activeTier === tier 
                                  ? 'bg-background text-foreground shadow-sm' 
                                  : 'text-muted-foreground hover:text-foreground'
                              } ${
                                !isAvailable 
                                  ? 'opacity-40 cursor-not-allowed hover:text-muted-foreground' 
                                  : ''
                              }`}
                            >
                              {tier}
                            </button>
                          );
                        })}
                      </div>

                      {/* Turnaround Badge */}
                      {currentTurnaround && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                          <Clock className="w-4 h-4" />
                          Turnaround: {currentTurnaround}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Fallback Turnaround for Coming Soon */
                    service.turnaround && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                        <Clock className="w-4 h-4" />
                        Turnaround: {service.turnaround}
                      </div>
                    )
                  )}
                </div>

                {/* What's Included */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {currentWhatIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing / Coming Soon */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Pricing Preview
                  </h3>
                  
                  {!service.isLive ? (
                    <div className="bg-muted/50 rounded-xl p-6 text-center border border-border">
                      <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                        <Clock className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">Coming Soon</h4>
                      <p className="text-sm text-muted-foreground">
                        We are currently perfecting our {service.name.toLowerCase()} process. Check back soon!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Vertically Scrollable Pricing Grid */}
                      <div 
                        ref={scrollRef} 
                        className="max-h-[320px] overflow-y-auto grid grid-cols-1 min-[360px]:grid-cols-2 gap-2 pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
                      >
                        {items.filter(i => i[activeTier.toLowerCase()] !== null).map((item, idx) => {
                          const price = item[activeTier.toLowerCase()];
                          return (
                            <div key={idx} className="flex items-center p-3 rounded-xl border border-border bg-background hover:bg-muted/50 transition-colors gap-3">
                              {/* Item Icon */}
                              <div className="flex-shrink-0 bg-[#EAF9F5] rounded-lg p-2">
                                {item.icon ? (
                                  <img 
                                    src={item.icon} 
                                    alt={item.item} 
                                    className="w-10 h-10 object-contain block"
                                  />
                                ) : (
                                  <div className="w-10 h-10" />
                                )}
                              </div>
                              
                              {/* Text and Price Stack */}
                              <div className="flex flex-col flex-grow justify-center py-1">
                                <div className="text-sm font-medium text-foreground leading-snug">
                                  {item.item}
                                </div>
                                <div className="mt-1 font-pricing text-base font-semibold text-[hsl(var(--dark-navy))] leading-none">
                                  ₹{price}{isWashingService ? '/kg' : ''}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Weight Estimation Note - Washing Service Only */}
                      {isWashingService && (
                        <div className="mx-4 sm:mx-6 mt-6 mb-2 p-4 bg-[hsl(var(--teal))]/10 border-l-4 border-[hsl(var(--teal))] rounded-r-lg text-[hsl(var(--dark-navy))] text-sm md:text-base flex items-start gap-3">
                          <span className="text-lg leading-none mt-0.5">💡</span>
                            <p className="leading-relaxed">
                            <span className="font-semibold">Not sure how heavy your clothes are?</span> No worries — just enter any weight (e.g. 1 kg) when booking. Our pickup staff will weigh your clothes right in front of you at the door and update the order on the spot before they leave.
                            </p>
                        </div>
                      )}

                      <Link 
                        to={`/pricing#pricing-${service.slug}`}
                        onClick={onClose}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline mt-2"
                      >
                        View full pricing <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer CTA */}
              {service.isLive && (
                <div className="p-4 border-t border-border bg-[hsl(var(--modal-bg))]">
                  <a
                    href={`https://wa.me/919702025755?text=Hi%2C%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(service.name)}%20service`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full btn-gradient-brand py-6 text-lg rounded-xl">
                      Book This Service
                    </Button>
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
