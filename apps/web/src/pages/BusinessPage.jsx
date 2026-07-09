import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Store, Building2, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const BusinessPage = () => {
  const heroBgImage = "https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/business.png";

  return (
    <>
      <Helmet>
        <title>Business Solutions - Vastra Klinzo</title>
        <meta
          name="description"
          content="Grow with Vastra Klinzo. Explore our franchise opportunities or get a custom professional laundry plan for your business."
        />
        <link rel="preload" as="image" href={heroBgImage} />
      </Helmet>

      <div className="relative min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
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

            <div className="max-w-3xl mx-auto relative z-10">
              <span className="font-pricing text-[var(--business-teal)] text-sm tracking-widest uppercase mb-4 block">
                For Businesses
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Grow with <span className="brand-gradient">Vastra Klinzo</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Whether you're looking to start your own laundry business or need reliable commercial laundry services, we have the perfect solution for you.
              </p>
            </div>
          </section>

          {/* Cards Section */}
          <section className="px-4 sm:px-6 lg:px-8 -mt-20 pb-24 relative z-20">
            <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Franchise Card */}
              <div className="bg-blue-50 rounded-[16px] p-10 shadow-2xl border-l-4 border-l-[var(--business-teal)] business-card-hover flex flex-col h-full">
                <div className="w-14 h-14 rounded-full bg-[var(--business-light)] flex items-center justify-center mb-6">
                  <Store className="w-7 h-7 text-[var(--business-teal)]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Franchise</h2>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  Join the fastest-growing laundry network. Get access to our proven operational model, advanced technology, and comprehensive brand support to build a profitable business.
                </p>
                <Link 
                  to="/business/franchise"
                  className="inline-flex items-center text-[var(--business-teal)] font-semibold hover:text-[var(--business-navy)] transition-colors group"
                >
                  Explore Franchise 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Business Laundry Card */}
              <div className="bg-white rounded-[16px] p-10 shadow-2xl border-l-4 border-l-[var(--business-sky)] business-card-hover flex flex-col h-full">
                <div className="w-14 h-14 rounded-full bg-[var(--business-light)] flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-[var(--business-sky)]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Laundry for Business</h2>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  Reliable, high-volume laundry solutions tailored for hotels, restaurants, salons, and corporate offices. Enjoy dedicated support and custom pricing plans.
                </p>
                <Link 
                  to="/business/laundry"
                  className="inline-flex items-center text-[var(--business-sky)] font-semibold hover:text-[var(--business-navy)] transition-colors group"
                >
                  Get a Custom Plan 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BusinessPage;