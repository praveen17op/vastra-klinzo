import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/data/servicesData.js';

const Services = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
            Our services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cleaning solutions for all your laundry needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                onClick={() => onSelectService(service)}
                className="h-full hover:-translate-y-1 transition-all duration-200 hover:shadow-lg flex flex-col cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-18 h-18 rounded-xl bg-primary/5 flex items-center justify-center p-3 group-hover:bg-primary/10 transition-colors">
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.summary}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;