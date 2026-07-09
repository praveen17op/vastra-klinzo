import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const WhatsappIcon = ({
  size = 10,
  color = '#FFFFFF',
  strokeWidth = 0.1,
  background = 'transparent',
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push('scaleX(-1)');
  if (flipVertical) transforms.push('scaleY(-1)');

  const viewBoxSize = 29 + (padding * 2);
  const viewBoxOffset = -padding;
  const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity,
        transform: transforms.join(' ') || undefined,
        filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
        backgroundColor: background !== 'transparent' ? background : undefined
      }}
    >
      <path fill="currentColor" fillRule="evenodd" d="M24.504 7.504A11.88 11.88 0 0 0 16.05 4C9.465 4 4.1 9.36 4.1 15.945a11.9 11.9 0 0 0 1.594 5.973L4 28.109l6.336-1.664a11.96 11.96 0 0 0 5.71 1.457h.005c6.586 0 11.945-5.359 11.949-11.949c0-3.191-1.242-6.191-3.496-8.45zM16.05 25.883h-.004a9.93 9.93 0 0 1-5.055-1.383l-.363-.215l-3.762.985l1.004-3.665l-.234-.375a9.9 9.9 0 0 1-1.52-5.285c0-5.472 4.457-9.925 9.938-9.925a9.86 9.86 0 0 1 7.02 2.91a9.88 9.88 0 0 1 2.905 7.023c0 5.477-4.457 9.93-9.93 9.93zm5.445-7.438c-.297-.148-1.766-.87-2.039-.968c-.273-.102-.473-.149-.672.148c-.2.3-.77.973-.945 1.172c-.172.195-.348.223-.645.074c-.3-.148-1.261-.465-2.402-1.484c-.887-.79-1.488-1.77-1.66-2.067c-.176-.3-.02-.46.129-.61c.136-.132.3-.347.449-.523c.148-.171.2-.296.3-.496c.098-.199.048-.375-.027-.523c-.074-.148-.671-1.621-.921-2.219c-.243-.582-.489-.5-.672-.511c-.172-.008-.371-.008-.57-.008c-.2 0-.524.074-.798.375c-.273.297-1.043 1.02-1.043 2.488c0 1.469 1.07 2.89 1.22 3.09c.148.195 2.105 3.21 5.1 4.504a17 17 0 0 0 1.7.629c.715.226 1.367.195 1.883.12c.574-.085 1.765-.722 2.015-1.421c.247-.695.247-1.293.172-1.418c-.074-.125-.273-.2-.574-.352" />
    </svg>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-[var(--footer-bg)] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto pt-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-8 pb-[64px]">
          
          {/* Column 1 — Brand */}
          <div className="flex flex-col lg:max-w-[220px]">
            <div className="flex items-center gap-[10px]">
              <img 
                src="https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/favicon.png" 
                alt="Vastra Klinzo Logo" 
                className="w-[48px] h-[48px] object-contain"
              />
              <div className="text-[20px] tracking-[0.05em] leading-none">
                <span className="font-bold text-white">Vastra</span>
                <span className="font-bold text-[var(--footer-accent)] ml-1">Klinzo</span>
              </div>
            </div>
            <div className="flex items-center gap-[12px] mt-[16px]">
              <a 
                href="https://wa.me/919702025755" 
                className="footer-social-btn group" 
                aria-label="Chat on WhatsApp" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <WhatsappIcon size={20} className="text-white group-hover:text-[var(--footer-accent)] transition-colors duration-200" />
              </a>
              <a 
                href="https://www.instagram.com/vastraklinzo_laundry" 
                className="footer-social-btn group" 
                aria-label="Follow on Instagram" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram size={20} className="text-white group-hover:text-[var(--footer-accent)] transition-colors duration-200" />
              </a>
              <a 
                href="https://www.linkedin.com/company/vastra-klinzo/" 
                className="footer-social-btn group" 
                aria-label="Follow on LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="text-white group-hover:text-[var(--footer-accent)] transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Column 2 — Contact Info */}
          <div className="flex flex-col lg:max-w-[220px] mt-[24px] md:mt-0">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="flex flex-col gap-[10px]">
              <a href="mailto:support@vastraklinzo.com" className="flex items-center gap-[10px] footer-link group">
                <Mail size={16} className="text-[var(--footer-accent)] flex-shrink-0" />
                <span>support@vastraklinzo.com</span>
              </a>
              <a href="tel:+919702025755" className="flex items-center gap-[10px] footer-link group">
                <Phone size={16} className="text-[var(--footer-accent)] flex-shrink-0" />
                <span>+91 97020 25755</span>
              </a>
              <div className="flex items-start gap-[10px] text-[14px] text-[var(--footer-text-70)] leading-[1.6]">
                <MapPin size={16} className="text-[var(--footer-accent)] flex-shrink-0 mt-[2px]" />
                <p>
                  Klinzo One Private Limited<br />
                  Hill Garden, Manpada, Thane West<br />
                  Thane, Maharashtra 400610
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div className="flex flex-col lg:max-w-[220px] mt-[24px] lg:mt-0">
            <h4 className="footer-heading">For Business</h4>
            <div className="flex flex-col gap-[10px]">
              <Link to="/business/laundry" className="flex items-center footer-link group">
                <span className="text-[var(--footer-accent)] text-[12px] mr-[6px] font-bold">›</span>
                Laundry for Business
              </Link>
              <Link to="/business/franchise" className="flex items-center footer-link group">
                <span className="text-[var(--footer-accent)] text-[12px] mr-[6px] font-bold">›</span>
                Get Franchise
              </Link>
            </div>
          </div>

          {/* Column 4 — Careers */}
          <div className="flex flex-col lg:max-w-[220px] mt-[24px] lg:mt-0">
            <h4 className="footer-heading">Careers</h4>
            <div className="flex flex-col">
              <Link to="/careers" className="footer-link">
                Join Our Team
              </Link>
              <p className="text-[12px] text-[var(--footer-text-40)] italic mt-[12px]">
                We're growing. Come build with us.
              </p>
            </div>
          </div>

          {/* Column 5 — Hours */}
          <div className="flex flex-col lg:max-w-[220px] mt-[24px] lg:mt-0 mb-[24px] lg:mb-0">
            <h4 className="footer-heading">Hours</h4>
            
            <div className="flex flex-col mb-[16px]">
              <span className="text-[12px] text-[var(--footer-text-45)] uppercase tracking-[0.06em] mb-[4px]">
                Business Hours
              </span>
              <span className="text-[14px] text-white font-medium">Open Daily</span>
              <span className="text-[14px] text-[var(--footer-text-70)]">8:00 AM – 9:00 PM</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[12px] text-[var(--footer-text-45)] uppercase tracking-[0.06em] mb-[4px]">
                Customer Support
              </span>
              <span className="text-[14px] text-white font-medium">Mon – Sat</span>
              <span className="text-[14px] text-[var(--footer-text-70)]">9:00 AM – 7:00 PM</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--footer-border-10)]">
        <div className="max-w-[1200px] mx-auto px-[32px] py-[20px] flex flex-col md:flex-row items-center justify-between gap-[12px]">
          <p className="text-[13px] text-[var(--footer-text-45)] text-center md:text-left">
            © 2026 Vastra Klinzo. All Rights Reserved.
          </p>
          <div className="flex items-center justify-center gap-[8px] text-[13px] text-[var(--footer-text-45)]">
            <Link to="/privacy-policy" className="hover:text-white transition-colors duration-150">
              Privacy Policy
            </Link>
            <span className="mx-[4px]">·</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors duration-150">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;