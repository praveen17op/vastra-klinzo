import React from 'react';

const LocationSection = () => {
  return (
    <section id="visit-us" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
            Visit us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Drop off your laundry or come say hello at our premium facility in the heart of Thane.
          </p>
        </div>
        
        <div className="w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-border shadow-sm relative bg-muted transition-all duration-300 hover:shadow-md">
          <iframe
            src="https://maps.google.com/maps?q=Klinzo+One+Private+Limited,+Hill+Garden,+Manpada,+Thane+West,+Thane,+Maharashtra,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vastra Klinzo Location Map"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;