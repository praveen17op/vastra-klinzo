
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--light-sky-bg))]">
      <Helmet>
        <title>Terms & Conditions - Vastra Klinzo</title>
        <meta name="description" content="Terms and Conditions for Klinzo One Private Limited and Vastra Klinzo. Read our policies on services, payments, liability, and more." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <article className="max-w-[760px] mx-auto bg-white rounded-xl border border-border/60 p-8 md:p-12 shadow-sm">
          
          <header className="mb-10">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Klinzo One Private Limited
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-navy))] mb-6">
              Terms & Conditions
            </h1>
            <hr className="border-t border-[hsl(var(--teal))]/30" />
          </header>

          <div className="text-[15px] text-gray-700 leading-[1.75] space-y-8">
            <p>
              Welcome to Vastra Klinzo. These Terms and Conditions govern your use of our website, mobile applications, and laundry/dry-cleaning services operated by Klinzo One Private Limited. By placing an order or using our platforms, you agree to be bound by these terms. Please read them carefully.
            </p>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                1. Introduction
              </h2>
              <p>
                These terms constitute a legally binding agreement between you and Klinzo One Private Limited ("we," "us," or "our"). They apply to all users of the service, including browsers, vendors, customers, and merchants.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                2. Definitions
              </h2>
              <p>
                "Service" refers to the laundry, dry-cleaning, ironing, and related services provided by Vastra Klinzo. "User," "You," and "Your" refer to the individual or entity utilizing our services. "Garment" refers to any item of clothing or fabric provided to us for servicing.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                3. Acceptance of Terms
              </h2>
              <p>
                By scheduling a pickup or using our digital platforms, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                4. Service Scope
              </h2>
              <p>
                We offer professional laundry, dry cleaning, ironing, and shoe cleaning services. We reserve the right to add, modify, or discontinue any specific service at our sole discretion without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                5. Account Registration
              </h2>
              <p>
                To utilize our digital booking services, you may be required to register an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                6. Pricing and Tariffs
              </h2>
              <p>
                Prices are subject to change without prior notice. The prevailing rates at the time of order confirmation will apply. Final billing for weight-based services will be calculated after items are weighed by our staff.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                7. Payment Terms
              </h2>
              <p>
                Payment must be made in full upon delivery or via our online payment gateways prior to delivery. We accept major credit/debit cards, UPI, and cash on delivery where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                8. Pickup and Delivery Logistics
              </h2>
              <p>
                We strive to adhere to selected pickup and delivery windows. However, external factors such as traffic, weather, or operational constraints may cause delays. We do not guarantee exact timing.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                9. Turnaround Times
              </h2>
              <p>
                Standard turnaround times are provided as estimates. Certain garments requiring specialized care may require additional processing time. Express services are subject to availability and additional surcharges.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                10. Minimum Order Value
              </h2>
              <p>
                A minimum order value may apply for free pickup and delivery. Orders below this threshold may incur an additional logistics fee, which will be communicated during the booking process.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                11. Garment Care Policy
              </h2>
              <p>
                We process garments according to standard industry practices. However, we are not responsible for inherent weaknesses, defects in materials, or color bleeding that are not apparent prior to processing.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                12. Damage and Loss Liability
              </h2>
              <p>
                In the rare event of damage or loss caused exclusively by our negligence, our liability is strictly limited to up to 10 times the cleaning charge for that specific item, regardless of the garment's brand, age, or replacement value.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                13. Unclaimed Garments
              </h2>
              <p>
                Garments must be collected or accepted for delivery within 30 days of the scheduled delivery date. After this period, we reserve the right to donate or dispose of unclaimed items without further liability.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                14. Customer Obligations
              </h2>
              <p>
                Customers must ensure all pockets are emptied before pickup. We are not responsible for items left in garments (e.g., jewelry, currency, electronics) or for any damage such items may cause during processing.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                15. Right of Refusal
              </h2>
              <p>
                We reserve the right to refuse service for any garment that poses a health or safety risk, or that we deem unsuitable for our cleaning processes due to severe damage or extreme soiling.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                16. Cancellation Policy
              </h2>
              <p>
                Orders may be canceled without penalty up to 2 hours prior to the scheduled pickup window. Late cancellations or missed pickups may be subject to a nominal convenience fee.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                17. Refund Policy
              </h2>
              <p>
                Refunds are processed solely at the discretion of management. Claims for unsatisfactory cleaning must be reported within 24 hours of delivery. We may opt to re-process the garment free of charge in lieu of a refund.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                18. Promotions and Coupons
              </h2>
              <p>
                Promotional offers, discounts, and coupons hold no cash value and cannot be combined unless explicitly stated. We reserve the right to modify or terminate promotions at any time.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                19. Privacy and Data Protection
              </h2>
              <p>
                Your personal data is handled in accordance with our Privacy Policy. By agreeing to these Terms, you also consent to the collection and use of data as outlined in that policy.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                20. Intellectual Property Rights
              </h2>
              <p>
                All content, logos, branding, and materials on our website and application are the intellectual property of Klinzo One Private Limited and may not be copied, reproduced, or used without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                21. Force Majeure
              </h2>
              <p>
                We shall not be held liable for any failure to perform our obligations where such failure results from any cause beyond our reasonable control, including but not limited to natural disasters, strikes, or governmental actions.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                22. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Klinzo One Private Limited shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our services.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                23. Governing Law and Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Thane, Maharashtra.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                24. Modifications to Terms
              </h2>
              <p>
                We reserve the right to update or modify these Terms and Conditions at any time. Continued use of our services following any changes constitutes acceptance of the revised terms.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
