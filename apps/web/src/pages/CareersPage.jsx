import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const CareersPage = () => {
  useEffect(() => {
    // Load Tally embed script on mount
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById('careers-form');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers - Vastra Klinzo</title>
        <meta
          name="description"
          content="Join Vastra Klinzo and help us build the operating system for how India cleans, cares for, and takes pride in its clothes."
        />
      </Helmet>

      <div className="relative min-h-screen flex flex-col font-sans">
        <Header />
        
        <main className="flex-grow">
          {/* HERO SECTION */}
          <section 
            className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20"
            style={{
              backgroundImage: 'url(https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/careers.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dot Grid Texture Overlay */}
            <div 
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />
            
            {/* Radial Teal Glow */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none z-0"
              style={{ background: 'radial-gradient(circle, #14C8A4 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
              <span className="font-pricing text-[#14C8A4] text-[11px] tracking-[0.14em] uppercase mb-6 block">
                JOIN US
              </span>
              <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl mb-6" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                We're early. We're ambitious. We're just getting started.
              </h1>
              <p className="text-lg md:text-xl mb-10 max-w-[600px] mx-auto" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
                <span className='brand-gradient'>Vastra Klinzo</span> is still small enough that one good hire changes how things get done. We're looking for people who'd rather build something than just work at something.
              </p>
              <button 
                onClick={scrollToForm}
                className="rounded-full px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-200 hover:text-[#14C8A4] hover:border-[#14C8A4]"
                style={{ border: '1.5px solid rgba(255,255,255,0.30)' }}
              >
                See how you can contribute ↓
              </button>
            </div>
          </section>

          {/* THE VISION SECTION */}
          <section className="bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <span className="font-pricing text-[#6B7280] text-[11px] tracking-[0.14em] uppercase mb-4 block">
                WHERE WE'RE HEADED
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E3A53] mb-10" style={{ letterSpacing: '-0.02em' }}>
                Built to scale, not stay small.
              </h2>
              
              <div className="max-w-[680px] mx-auto space-y-6 text-lg text-[#374151]" style={{ lineHeight: 1.8 }}>
                <p>
                  Vastra Klinzo started with a simple idea — professional laundry care shouldn't come with hidden charges, damaged clothes, or unreliable pickup times. Most businesses in this space stay small and local by default. We don't think that has to be the ceiling.
                </p>
                <p>
                  We're building the systems, processes, and team to grow properly — city by city — and we're early enough that the people who join now will have a real hand in shaping how that's done.
                </p>
              </div>
            </div>
          </section>

          {/* WHY JOIN US SECTION */}
          <section className="bg-[#F4F7F9] py-20 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="font-pricing text-[#6B7280] text-[11px] tracking-[0.14em] uppercase mb-4 block">
                  WHY NOW
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E3A53] max-w-2xl mx-auto" style={{ letterSpacing: '-0.02em' }}>
                  The best time to join a company is before everyone else does.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-[16px] p-[36px_32px] shadow-sm hover:shadow-md transition-all duration-250 hover:-translate-y-1 border-t-4 border-t-[#14C8A4]">
                  <h3 className="text-[18px] font-bold text-[#0E3A53] mb-3">Build, don't maintain</h3>
                  <p className="text-[15px] text-[#4B5563]" style={{ lineHeight: 1.75 }}>
                    We're early. That means the systems, the culture, the way we treat customers and franchise partners — a lot of it is still being written. You won't be one voice in a crowd; you'll be one of the voices shaping it.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-[16px] p-[36px_32px] shadow-sm hover:shadow-md transition-all duration-250 hover:-translate-y-1 border-t-4 border-t-[#14C8A4]">
                  <h3 className="text-[18px] font-bold text-[#0E3A53] mb-3">Ownership over hierarchy</h3>
                  <p className="text-[15px] text-[#4B5563]" style={{ lineHeight: 1.75 }}>
                    We care more about what you can do than what your title says. If you see a problem, we want you to be the kind of person who fixes it — not the kind who waits for permission.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-[16px] p-[36px_32px] shadow-sm hover:shadow-md transition-all duration-250 hover:-translate-y-1 border-t-4 border-t-[#14C8A4]">
                  <h3 className="text-[18px] font-bold text-[#0E3A53] mb-3">A mission with real-world impact</h3>
                  <p className="text-[15px] text-[#4B5563]" style={{ lineHeight: 1.75 }}>
                    This isn't an app nobody needs. It's a service that saves people time, helps small businesses run smoother, and builds livelihoods across every city we enter — from franchise owners to delivery partners to our own team.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WHAT WE'RE LOOKING FOR SECTION */}
          <section className="bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-pricing text-[#6B7280] text-[11px] tracking-[0.14em] uppercase mb-4 block">
                NO FIXED ROLES, YET
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E3A53] mb-8" style={{ letterSpacing: '-0.02em' }}>
                We're not hiring for a title. We're hiring for a mindset.
              </h2>
              
              <div className="max-w-[620px] mx-auto">
                <p className="text-lg text-[#374151] mb-6" style={{ lineHeight: 1.8 }}>
                  We haven't finalized every role we'll need as we scale — and honestly, that's intentional. Instead of asking you to fit into a box we've already drawn, we'd rather understand how you think, what you're good at, and where you believe you could genuinely move the needle for us.
                </p>
                <p className="text-[15px] text-[#6B7280]">
                  If that sounds like the kind of place you want to grow with, tell us below.
                </p>
              </div>
            </div>
          </section>

          {/* THE FORM SECTION */}
          <section id="careers-form" className="bg-[#F4F7F9] py-20 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[680px] mx-auto">
              <div className="text-center mb-10">
                <span className="font-pricing text-[#6B7280] text-[11px] tracking-[0.14em] uppercase mb-4 block">
                  APPLY
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E3A53]" style={{ letterSpacing: '-0.02em' }}>
                  Tell us how you'd contribute.
                </h2>
              </div>

              <div className="bg-white rounded-[20px] p-8 md:p-12" style={{ boxShadow: '0 4px 32px -8px rgba(14,58,83,0.10)', border: '1px solid rgba(14,58,83,0.07)' }}>
                <iframe 
                  data-tally-src="https://tally.so/embed/PdyJQQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  width="100%" 
                  height="400" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0" 
                  title="Careers Form"
                  style={{ border: 0 }}
                ></iframe>
              </div>

              <div className="text-center mt-8 space-y-2">
                <p className="text-[14px] text-[#6B7280] italic">
                  We read every single response ourselves.
                </p>
                <p className="text-[13px] text-[#9CA3AF]">
                  We typically review applications within 2 weeks. If there's a fit, we'll reach out directly.
                </p>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default CareersPage;