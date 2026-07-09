import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Building, Home, Utensils, Scissors, Briefcase, Shirt, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const BusinessLaundryPage = () => {
  const heroBgImage = "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/businesslaundry.png";

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

  const features = [
    "Scheduled Pickup & Delivery",
    "Dedicated Account Manager",
    "Volume-based custom pricing",
    "Real-time order tracking",
    "Flexible service cycles",
    "All services included with express delivery",
    "Consistent top quality standards",
    "Scalable to your business needs"
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Laundry Services - Vastra Klinzo</title>
        <meta
          name="description"
          content="Professional, high-volume laundry solutions for hotels, restaurants, salons, and corporate offices. Get a custom plan today."
        />
        <link rel="preload" as="image" href={heroBgImage} />
      </Helmet>

      <div className="relative min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${heroBgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            
            {/* Dark Navy Overlay */}
            <div 
              className="absolute inset-0 z-[1]" 
              style={{ backgroundColor: 'rgba(13, 36, 56, 0.65)' }} 
            />

            <div className="max-w-4xl mx-auto relative z-10">
              <span className="font-pricing text-[var(--business-teal)] text-sm tracking-widest uppercase mb-4 block">
                Business Laundry
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Professional Laundry for <span className="brand-gradient">Your Business</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Focus on your core business while we handle your laundry operations with unmatched reliability, quality, and speed.
              </p>
            </div>
          </section>

          {/* Segments Section */}
          <section className="bg-[var(--business-light)] py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">Built for Every Business</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm business-card-hover flex items-start gap-4">
                  <div className="bg-[var(--business-light)] p-3 rounded-lg text-[var(--business-sky)]">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Hotels & Service Apartments</h3>
                    <p className="text-sm text-gray-600">Pristine linens, towels, and guest laundry services.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm business-card-hover flex items-start gap-4">
                  <div className="bg-[var(--business-light)] p-3 rounded-lg text-[var(--business-sky)]">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Airbnb & Short-Stay Hosts</h3>
                    <p className="text-sm text-gray-600">Quick turnaround between guest check-ins.</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm business-card-hover flex items-start gap-4">
                  <div className="bg-[var(--business-light)] p-3 rounded-lg text-[var(--business-sky)]">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Restaurants & Cafes</h3>
                    <p className="text-sm text-gray-600">Spotless tablecloths, napkins, and chef uniforms.</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm business-card-hover flex items-start gap-4">
                  <div className="bg-[var(--business-light)] p-3 rounded-lg text-[var(--business-sky)]">
                    <Scissors className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Salons & Spas</h3>
                    <p className="text-sm text-gray-600">Hygienic, soft towels and robes for your clients.</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm business-card-hover flex items-start gap-4">
                  <div className="bg-[var(--business-light)] p-3 rounded-lg text-[var(--business-sky)]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Offices & Corporates</h3>
                    <p className="text-sm text-gray-600">Employee perks and executive dry cleaning.</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm business-card-hover flex items-start gap-4">
                  <div className="bg-[var(--business-light)] p-3 rounded-lg text-[var(--business-sky)]">
                    <Shirt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Uniform-Heavy Businesses</h3>
                    <p className="text-sm text-gray-600">Keep your staff looking sharp and professional.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">What's Included</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[var(--business-teal)] flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="bg-[var(--business-light)] py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[640px] mx-auto">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-8">
                <div className="w-full">
                  <iframe 
                    data-tally-src="https://tally.so/embed/QKyly8?alignLeft=1&transparentBackground=1&dynamicHeight=1" 
                    width="100%" 
                    height="500" 
                    title="Business Laundry Enquiry"
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

export default BusinessLaundryPage;