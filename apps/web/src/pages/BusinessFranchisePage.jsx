import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { TrendingUp, Users, ShieldCheck, Settings, Smartphone, Zap, Headphones as HeadphonesIcon, Megaphone, Truck } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const BusinessFranchisePage = () => {
  const heroBgImage = "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/getfranchise.png";

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

  return (
    <>
      <Helmet>
        <title>Franchise Opportunity - Vastra Klinzo</title>
        <meta
          name="description"
          content="Start your own profitable laundry business with a Vastra Klinzo franchise. Proven model, tech support, and comprehensive training."
        />
        <link rel="preload" as="image" href={heroBgImage} />
      </Helmet>

      <div className="relative min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
            {/* Background Image */}
            <img
              src={heroBgImage}
              alt=""
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="absolute inset-0 z-0 w-full h-full object-cover object-center"
            />
            
            {/* Dark Navy Overlay */}
            <div 
              className="absolute inset-0 z-[1]" 
              style={{ backgroundColor: 'rgba(13, 36, 56, 0.65)' }} 
            />

            <div className="max-w-4xl mx-auto relative z-10">
              <span className="font-pricing text-[var(--business-teal)] text-sm tracking-widest uppercase mb-4 block">
                Franchise Opportunity
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Bring <span className="brand-gradient">Vastra Klinzo</span> to Your City
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Capitalize on the booming laundry and dry cleaning industry. Partner with a brand that combines premium quality with cutting-edge technology.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-[var(--business-light)] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Why the Laundry Industry?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-t-[var(--business-teal)] business-card-hover">
                  <TrendingUp className="w-10 h-10 text-[var(--business-teal)] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">₹15,000+ Crore Industry</h3>
                  <p className="text-gray-600">The Indian laundry market is massive and growing rapidly, driven by urbanization and changing lifestyles.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-t-[var(--business-teal)] business-card-hover">
                  <Users className="w-10 h-10 text-[var(--business-teal)] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Massively Underserved</h3>
                  <p className="text-gray-600">Over 95% of the market is unorganized. Customers are actively seeking professional, reliable, and hygienic alternatives.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-t-[var(--business-teal)] business-card-hover">
                  <ShieldCheck className="w-10 h-10 text-[var(--business-teal)] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Recession-Resilient</h3>
                  <p className="text-gray-600">Clean clothes are a daily necessity, making this a highly stable business model regardless of economic conditions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Vastra Klinzo?</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">We provide everything you need to launch, operate, and scale your business successfully.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Settings className="w-8 h-8 text-[var(--business-teal)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Operations Model</h3>
                    <p className="text-gray-600">Standardized SOPs for cleaning, packaging, and delivery to ensure consistent quality and efficiency.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Smartphone className="w-8 h-8 text-[var(--business-teal)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tech-Enabled Platform</h3>
                    <p className="text-gray-600">Comprehensive POS system, customer app, and driver app to manage your entire business seamlessly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Zap className="w-8 h-8 text-[var(--business-teal)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Dry Cleaning Technology</h3>
                    <p className="text-gray-600">Access to eco-friendly solvents and state-of-art machinery recommendations for premium fabric care.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <HeadphonesIcon className="w-8 h-8 text-[var(--business-teal)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Full Onboarding Support</h3>
                    <p className="text-gray-600">From site selection and store setup to staff training, we guide you through every step of the launch.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Megaphone className="w-8 h-8 text-[var(--business-teal)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Brand & Marketing Backing</h3>
                    <p className="text-gray-600">Benefit from our national brand presence, digital marketing campaigns, and local promotional materials.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Truck className="w-8 h-8 text-[var(--business-teal)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Centralised Supply Chain</h3>
                    <p className="text-gray-600">Reliable access to premium detergents, packaging materials, and consumables at negotiated rates.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="bg-[var(--business-light)] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
              </div>
              
              <div className="relative">
                {/* Connecting Line - Positioned based on the height of the circular numbers (top-8 aligns perfectly with the center of w-16 h-16) */}
                <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-[var(--business-border)] -translate-y-1/2 z-0"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white border-4 border-[var(--business-teal)] rounded-full flex items-center justify-center text-xl font-bold text-[var(--business-navy)] mb-6 shadow-md relative z-10">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Apply</h3>
                    <p className="text-gray-600">Submit your details through our enquiry form below to express your interest.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white border-4 border-[var(--business-teal)] rounded-full flex items-center justify-center text-xl font-bold text-[var(--business-navy)] mb-6 shadow-md relative z-10">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Discussion</h3>
                    <p className="text-gray-600">Our team will connect with you to discuss financials, location, and business model.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white border-4 border-[var(--business-teal)] rounded-full flex items-center justify-center text-xl font-bold text-[var(--business-navy)] mb-6 shadow-md relative z-10">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Launch</h3>
                    <p className="text-gray-600">Sign the agreement, complete the setup and training, and open your doors.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[640px] mx-auto">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-8">
                <div className="w-full">
                  <iframe 
                    data-tally-src="https://tally.so/embed/EkY7eo?alignLeft=1&transparentBackground=1&dynamicHeight=1" 
                    width="100%" 
                    height="400" 
                    title="Franchise Enquiry"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BusinessFranchisePage;