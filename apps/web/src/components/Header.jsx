
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const whatsappUrl = "https://wa.me/919702025755?text=Hi%2C%20I%27d%20like%20to%20book%20a%20laundry%20service%20pickup";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/#home', isHash: true },
    { label: 'Services', href: '/#services', isHash: true },
    { label: 'Pricing', href: '/pricing', isHash: false },
    { label: 'Business', href: '/business', isHash: false },
    { label: 'Careers', href: '/careers', isHash: false },
    { label: 'Contact', href: '#footer', isFooter: true },
  ];

  const handleNavClick = (e, link) => {
    setIsOpen(false);
    
    if (link.isFooter) {
      e.preventDefault();
      const element = document.getElementById('footer');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      return;
    }

    if (link.isHash) {
      e.preventDefault();
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const id = link.href.split('#')[1];
          const element = document.getElementById(id);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 150);
      } else {
        const id = link.href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={(e) => handleNavClick(e, { href: '/#home', isHash: true })} className="flex-shrink-0">
            <img
              src="https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/headerlogo.png"
              alt="Vastra Klinzo Logo"
              className="h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 bg-white/80 px-6 py-2.5 rounded-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-border/40 backdrop-blur-sm">
            {navLinks.map((link) => (
              (link.isHash || link.isFooter) ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-sm font-medium text-foreground/80 hover:text-[hsl(var(--sky-blue))] transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname.startsWith(link.href) && link.href !== '/' ? 'text-[hsl(var(--sky-blue))]' : 'text-foreground/80 hover:text-[hsl(var(--sky-blue))]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              className="btn-gradient-brand px-6"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="bg-white/50 backdrop-blur-sm rounded-full h-10 w-10">
                <Menu className="h-5 w-5 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[hsl(var(--light-sky-bg))]">
              <nav className="flex flex-col space-y-6 mt-12">
                {navLinks.map((link) => (
                  (link.isHash || link.isFooter) ? (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-xl font-semibold text-foreground hover:text-[hsl(var(--teal))] transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl font-semibold transition-colors duration-200 ${
                        location.pathname.startsWith(link.href) && link.href !== '/' ? 'text-[hsl(var(--teal))]' : 'text-foreground hover:text-[hsl(var(--teal))]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
                <div className="pt-8 border-t border-border/60">
                  <Button
                    className="btn-gradient-brand w-full py-6 text-lg"
                    onClick={() => window.open(whatsappUrl, '_blank')}
                  >
                    Book Now
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
