
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--light-sky-bg))]">
      <Helmet>
        <title>Privacy Policy - Vastra Klinzo</title>
        <meta name="description" content="Privacy Policy for Klinzo One Private Limited and Vastra Klinzo. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <article className="max-w-[760px] mx-auto bg-white rounded-xl border border-border/60 p-8 md:p-12 shadow-sm">
          
          <header className="mb-10">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Klinzo One Private Limited
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-navy))] mb-6">
              Privacy Policy
            </h1>
            <hr className="border-t border-[hsl(var(--teal))]/30" />
          </header>

          <div className="text-[15px] text-gray-700 leading-[1.75] space-y-8">
            <p>
              At Klinzo One Private Limited, we are committed to protecting the privacy and personal information of our users. This Privacy Policy outlines how we collect, use, process, and safeguard your data when you visit our website or use our laundry and dry-cleaning services operating under the brand name Vastra Klinzo.
            </p>
            <p>
              By accessing our website or utilizing our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this privacy policy, please discontinue use of our services immediately.
            </p>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                We collect personal information that you voluntarily provide to us when you register on our platform, express an interest in obtaining information about us or our services, or otherwise contact us. The personal information we collect may include:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[hsl(var(--teal))]">
                <li><strong>Contact Data:</strong> Name, phone number, email address, and delivery/pickup addresses.</li>
                <li><strong>Order Information:</strong> Details regarding your laundry preferences, special fabric care instructions, order history, and frequency of service.</li>
                <li><strong>Payment Information:</strong> Transaction details when you make purchases. (Note: We use secure third-party payment processors; we do not store full credit card numbers).</li>
                <li><strong>Device & Usage Data:</strong> IP address, browser type, operating system, and website usage statistics automatically collected when you browse our site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">
                We use the collected data for various professional and operational purposes, primarily to fulfill our contract with you and ensure high-quality service:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[hsl(var(--teal))]">
                <li>To facilitate pickup, cleaning, and delivery of your garments.</li>
                <li>To communicate with you regarding order statuses, delays, or service updates.</li>
                <li>To process payments and generate invoices.</li>
                <li>To improve, personalize, and expand our platform and services.</li>
                <li>To send administrative information, promotional offers, and newsletters (which you can opt out of at any time).</li>
                <li>To address customer support inquiries and resolve disputes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                3. Data Sharing and Disclosure
              </h2>
              <p className="mb-3">
                We value your privacy and do not sell your personal data to third parties. We may share your information only in the following necessary circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[hsl(var(--teal))]">
                <li><strong>Service Providers:</strong> We may share data with third-party vendors who perform services on our behalf, such as delivery logistics partners, payment processors, and SMS/email communication gateways.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the business assets.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                4. Cookies and Tracking Technologies
              </h2>
              <p>
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Cookies help us understand how you interact with our website, remember your preferences, and improve your overall experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our service may not function optimally.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                5. Third-Party Services
              </h2>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by Klinzo One Private Limited. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party sites that you visit.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                6. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. Despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. We cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                7. Data Retention
              </h2>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                8. Your Rights and Choices
              </h2>
              <p className="mb-3">
                Depending on your location and applicable data protection laws, you may have specific rights regarding your personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[hsl(var(--teal))]">
                <li>The right to access, update, or delete the information we have on you.</li>
                <li>The right to rectification if that information is inaccurate or incomplete.</li>
                <li>The right to object to or restrict the processing of your personal data.</li>
                <li>The right to withdraw consent at any time where we relied on your consent to process your personal information.</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us using the details provided in Section 12.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                9. Children's Privacy
              </h2>
              <p>
                Our services are not intended for use by children under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you become aware that a child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we will take steps to remove that information from our servers.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                10. International Data Transfers
              </h2>
              <p>
                Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] font-semibold text-[hsl(var(--dark-navy))] border-l-[3px] border-[hsl(var(--teal))] pl-4 mb-4">
                12. Contact Us & Grievance Officer
              </h2>
              <p className="mb-3">
                If you have questions, concerns, or grievances regarding this Privacy Policy or our data practices, please contact our Grievance Officer:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[hsl(var(--teal))]">
                <li><strong>Company:</strong> Klinzo One Private Limited (operating as Vastra Klinzo)</li>
                <li><strong>Email:</strong> support@vastraklinzo.com</li>
                <li><strong>Address:</strong> Klinzo One Private Limited, Hill Garden, Manpada, Thane West, Maharashtra, India 400610</li>
              </ul>
            </section>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
