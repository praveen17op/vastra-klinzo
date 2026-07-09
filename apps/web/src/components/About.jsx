import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            Vastra Klinzo brings professional laundry care right to your doorstep with{' '}
            <span className="font-semibold gradient-text">premium detergents</span> and{' '}
            <span className="font-semibold gradient-text">modern equipment</span>. We combine expert cleaning techniques with the convenience of pickup and delivery, ensuring your clothes receive{' '}
            <span className="font-semibold gradient-text">consistent quality care</span> every time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;