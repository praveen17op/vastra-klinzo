import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Package } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Calendar,
      title: 'Schedule Pickup',
      description: 'Choose your preferred date and time; our agent collects your clothes from your doorstep'
    },
    {
      number: 2,
      icon: Sparkles,
      title: <>We <span className="brand-gradient">Klinzo</span> It</>,
      description: 'Track your laundry in real-time as our professionals wash, dry, iron, and pack it with care'
    },
    {
      number: 3,
      icon: Package,
      title: 'Delivered Fresh',
      description: 'Receive your perfectly cleaned items at your preferred time; pay securely via the app'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to fresh, clean laundry delivered to your door
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" style={{ top: '4rem' }} />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Number Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;