import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Sparkles, Check } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { pricingData, services } from '@/data/servicesData.js';

// Map services to categories for the tabs
const categories = services
  .filter(s => s.isLive && s.pricingCategory)
  .map(s => ({
    id: s.pricingCategory,
    label: s.pricingCategory,
    icon: s.image,
    slug: s.slug
  }));

const tiers = [
  { id: "Normal", label: "Normal" },
  { id: "Express", label: "Express" },
  { id: "Premium", label: "✦ Premium" }
];

const tierDescriptions = {
  Normal: "Standard turnaround at our best everyday price. Pickup & delivery included.",
  Express: "Priority processing, faster turnaround. Perfect when you need something ready sooner.",
  Premium: "Expert white-glove treatment for delicate, designer & wedding wear. Only tier for Lehengas & Bridal wear."
};

const bgImages = [
  "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/pricing_carousel_steamiron.png",
  "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/pricing_carousel_washfold.png",
  "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/pricing_carousel_dryclean.png",
  "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/pricing_carousel_shoe.png",
  "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/pricing_carousel_weddingwear.png",
  "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/pricing_carousel_household.png"
];

const PricingPage = () => {
  const location = useLocation();
  const [activeTier, setActiveTier] = useState('Normal');
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [bgIndex, setBgIndex] = useState(0);

  // Handle hero background rotation & preloading
  useEffect(() => {
    // Preload images to prevent flicker
    bgImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    const timer = setInterval(() => {
      setBgIndex(prev => (prev + 1) % bgImages.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  // Handle hash scrolling and category selection
  useEffect(() => {
    if (location.hash) {
      const slug = location.hash.replace('#pricing-', '');
      const category = categories.find(c => c.slug === slug);
      if (category) {
        setActiveCategory(category.id);
        // Scroll to the section with offset for header
        setTimeout(() => {
          const element = document.getElementById(`pricing-${slug}`);
          if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location.hash]);

  const currentItems = pricingData[activeCategory] || [];
  const isWashing = activeCategory === 'Washing';
  const isWeddingWear = activeCategory === 'Wedding Wear Steam Iron';
  
  // Calculate availability stats for the chip
  const totalItems = currentItems.length;
  const availableItems = currentItems.filter(item => item[activeTier.toLowerCase()] !== null).length;

  return (
    <>
      <Helmet>
        <title>Pricing & Plans | Vastra Klinzo</title>
        <meta name="description" content="Transparent pricing for Vastra Klinzo laundry, dry cleaning, and premium care. Pick your service level — no hidden charges, ever." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-[hsl(var(--light-sky-bg))]">
        <Header />
        
        <main className="flex-grow pt-24 pb-20">
          {/* HERO STRIP */}
          <section className="text-white py-16 md:py-24 relative overflow-hidden bg-[hsl(var(--dark-navy))]">
            {/* Carousel Backgrounds */}
            {bgImages.map((src, index) => (
              <div
                key={src}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: index === bgIndex ? 1 : 0,
                  zIndex: 0
                }}
              />
            ))}
            
            {/* Dark Navy Overlay */}
            <div 
              className="absolute inset-0 z-[1]" 
              style={{ backgroundColor: 'rgba(13, 36, 56, 0.65)' }} 
            />

            {/* Subtle glow effect */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-[2]"></div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="font-pricing text-[hsl(var(--teal))] text-sm md:text-base font-medium tracking-widest uppercase mb-4">
                  TRANSPARENT PRICING
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Clean clothes. <span className="text-[hsl(var(--teal))]">Clear prices.</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Pick your service level, explore prices by category — no hidden charges, ever.
                </p>

                {/* TIER SWITCHER */}
                <div className="inline-flex items-center p-1.5 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-md">
                  {tiers.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setActiveTier(tier.id)}
                      className={`relative px-5 md:px-8 py-3 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 ${
                        activeTier === tier.id ? 'text-[hsl(var(--dark-navy))]' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {activeTier === tier.id && (
                        <motion.div
                          layoutId="activeTier"
                          className="absolute inset-0 bg-white rounded-full shadow-sm"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">{tier.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tier Description */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeTier}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm md:text-base text-white/80 h-12 max-w-xl mx-auto font-medium"
                  >
                    {tierDescriptions[activeTier]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            </div>
          </section>

          {/* PRICING BODY */}
          <section className="py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* CATEGORY TABS */}
              <div className="mb-6 relative">
                <div className="flex overflow-x-auto flex-nowrap gap-2 justify-start pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        window.history.replaceState(null, '', `#pricing-${cat.slug}`);
                      }}
                      className={`relative px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-colors duration-200 flex items-center gap-2 flex-shrink-0 ${
                        activeCategory === cat.id 
                          ? 'text-white' 
                          : 'bg-white text-muted-foreground border border-border hover:border-[hsl(var(--sky-blue))] hover:text-foreground'
                      }`}
                    >
                      {activeCategory === cat.id && (
                        <motion.div
                          layoutId="activeCategory"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(var(--teal))] to-[hsl(var(--sky-blue))] shadow-sm"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        <img 
                          src={cat.icon} 
                          alt={cat.label} 
                          className="w-[28px] h-[28px] object-contain flex-shrink-0" 
                        />
                        <span className="truncate">{cat.label}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* AVAILABILITY CHIP */}
              <motion.div 
                key={`${activeCategory}-${activeTier}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-border shadow-sm text-sm font-medium text-muted-foreground">
                  {availableItems > 0 ? (
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[hsl(var(--teal))]" />
                      <span className="text-foreground">{availableItems} of {totalItems} items</span> available on {activeTier} tier
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      No items available on {activeTier} tier for this category
                    </span>
                  )}
                </div>
              </motion.div>

              {/* TABLE CONTAINER */}
              <div 
                id={`pricing-${categories.find(c => c.id === activeCategory)?.slug}`}
                className="bg-white rounded-2xl border border-border/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] overflow-hidden scroll-mt-24"
              >
                
                {/* Wedding Wear Nudge Card (if not Premium) */}
                {isWeddingWear && activeTier !== 'Premium' ? (
                  <div className="p-10 md:p-16 text-center bg-amber-50/30">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-6 shadow-inner">
                      <Sparkles className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Premium tier only</h3>
                    <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed text-lg">
                      Wedding Wear requires our specialized white-glove Premium care. These delicate garments are not available on Normal or Express tiers to ensure their safety and longevity.
                    </p>
                    <Button 
                      onClick={() => setActiveTier('Premium')} 
                      className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-6 text-lg font-medium shadow-md transition-transform active:scale-95"
                    >
                      View Premium Prices
                    </Button>
                  </div>
                ) : activeTier === 'Premium' && availableItems === 0 ? (
                  /* Premium Not Available Nudge Card */
                  <div className="p-10 md:p-16 text-center bg-slate-50/50">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-600 mb-6 shadow-inner text-3xl">
                      🧺
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Not available on Premium</h3>
                    <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed text-lg">
                      This category is offered under Normal and Express service only. Switch to one of those tiers to see pricing.
                    </p>
                    <Button 
                      onClick={() => setActiveTier('Normal')} 
                      className="bg-[hsl(var(--teal))] hover:bg-[hsl(var(--teal))]/90 text-white rounded-full px-8 py-6 text-lg font-medium shadow-md transition-transform active:scale-95"
                    >
                      View Normal Prices
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Washing Info Banner */}
                    {isWashing && (
                      <div className="mx-4 sm:mx-6 mt-6 mb-2 p-4 bg-[hsl(var(--teal))]/10 border-l-4 border-[hsl(var(--teal))] rounded-r-lg text-[hsl(var(--dark-navy))] text-sm md:text-base flex items-start gap-3">
                        <span className="text-lg leading-none mt-0.5">💡</span>
                        <p className="leading-relaxed">
                          <span className="font-semibold">Not sure how heavy your clothes are?</span> No worries — just enter any weight (e.g. 1 kg) when booking. Our pickup staff will weigh your clothes right in front of you at the door and update the order on the spot before they leave.
                        </p>
                      </div>
                    )}

                    {/* NEW GRID LAYOUT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 sm:p-6 bg-transparent">
                      {currentItems.map((item, idx) => {
                        const price = item[activeTier.toLowerCase()];
                        const isPremiumOnly = item.normal === null && item.express === null;

                        return (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.02 }}
                            key={item.item + idx} 
                            className="flex items-center p-[14px] px-[16px] rounded-[12px] border border-border bg-white hover:bg-[hsl(var(--light-sky-bg))] transition-colors gap-3 cursor-default"
                          >
                            {/* Icon Wrapper */}
                            {item.icon ? (
                              <div className="flex-shrink-0 bg-[#EAF9F5] rounded-[12px] p-[8px]">
                                <img 
                                  src={item.icon} 
                                  alt={item.item} 
                                  className="w-[64px] h-[64px] object-contain block"
                                />
                              </div>
                            ) : (
                              <div className="flex-shrink-0 bg-[#EAF9F5] rounded-[12px] w-[80px] h-[80px]" />
                            )}

                            {/* Text Stack */}
                            <div className="flex flex-col justify-center flex-grow py-1">
                              {/* Line 1: Item Name */}
                              <div className="text-[14px] font-medium text-foreground leading-[1.35]">
                                {item.item}
                              </div>
                              
                              {/* Line 2: Price or Fallback */}
                              {price === null ? (
                                activeTier !== 'Premium' && isPremiumOnly ? (
                                  <Badge className="mt-[3px] w-fit bg-amber-100 text-amber-800 hover:bg-amber-100 border-0 shadow-none font-medium text-xs px-2 py-0.5">
                                    ✦ Premium only
                                  </Badge>
                                ) : (
                                  <span className="mt-[3px] text-muted-foreground font-medium">—</span>
                                )
                              ) : (
                                <div className="mt-[3px] font-pricing text-[18px] font-semibold text-[hsl(var(--dark-navy))] leading-none">
                                  ₹{price}
                                  {isWashing && <span className="text-sm text-muted-foreground font-sans ml-1 tracking-normal font-medium">/kg</span>}
                                </div>
                              )}

                              {/* Line 3: Conditional Badge */}
                              {activeTier === 'Premium' && isPremiumOnly && price !== null && (
                                <Badge variant="outline" className="mt-[4px] w-fit border-amber-200 text-amber-700 bg-amber-50 font-normal text-[10px] sm:text-xs px-1.5 py-0 shadow-none align-middle tracking-tight">
                                  <Sparkles className="w-3 h-3 mr-1 inline" /> Premium exclusive
                                </Badge>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </>
                )}
                
                {/* Footer Note */}
                <div className="bg-muted/30 px-6 py-4 border-t border-border/80 text-sm text-muted-foreground text-center sm:text-left">
                  All prices in ₹ per piece unless stated. Taxes inclusive.
                </div>
              </div>

            </div>
          </section>
        </main>
        
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919702025755?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full btn-gradient-brand flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </a>
      </div>
    </>
  );
};

export default PricingPage;