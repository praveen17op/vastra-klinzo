import React from 'react';
import { motion } from 'framer-motion';

const DownloadApp = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden bg-primary/5 border border-primary/10 p-8 sm:p-12 md:p-16 text-center"
        >
          {/* Subtle background decoration elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground" style={{ letterSpacing: '-0.02em' }}>
              Download <span className="brand-gradient">Vastra Klinzo</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the ultimate laundry convenience. Schedule pickups, track your orders in real-time, and manage your preferences directly from your smartphone.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="https://apps.apple.com/in/app/vastra-klinzo/id6766206324"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Download Vastra Klinzo on Apple App Store"
              >
                <img
                  src="https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/appstore.png"
                  alt="Download on the App Store"
                  className="h-16 w-auto object-contain"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.vastraklinzo&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Get Vastra Klinzo on Google Play"
              >
                <img
                  src="https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/googleplay.png"
                  alt="Get it on Google Play"
                  className="h-16 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadApp;