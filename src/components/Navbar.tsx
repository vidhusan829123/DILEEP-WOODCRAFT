import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenPhotoGuide: () => void;
}

export function Navbar({ onOpenQuote, onOpenPhotoGuide }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFC8]' 
          : 'bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-[#EFE7D8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <a 
          href="#" 
          className="text-xl sm:text-2xl font-bold tracking-wider text-[#3D2314] uppercase whitespace-nowrap shrink-0 hover:text-[#8B5A2B] transition-colors"
          style={{ fontFamily: 'var(--font-cinzel, serif)' }}
        >
          DILEEP WOODCRAFT
        </a>

        {/* Zone 2: Concise single-line nav links without price calculator */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A3B32]">
          <a href="#about" className="hover:text-[#8B5A2B] transition-colors whitespace-nowrap shrink-0">
            About & Teak
          </a>
          <a href="#specialties" className="hover:text-[#8B5A2B] transition-colors whitespace-nowrap shrink-0">
            Special Offerings
          </a>
          <a href="#services" className="hover:text-[#8B5A2B] transition-colors whitespace-nowrap shrink-0">
            All Services
          </a>
          <button 
            type="button"
            onClick={onOpenPhotoGuide}
            className="hover:text-[#8B5A2B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Photo Guide
          </button>
          <a href="#contact" className="hover:text-[#8B5A2B] transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: Exactly 1 Primary Action */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#3D2314] hover:bg-[#5C3A21] rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Get a Free Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#3D2314] hover:text-[#8B5A2B] rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8DFC8] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#3D2314] hover:text-[#8B5A2B]"
          >
            About & Teak Specialty
          </a>
          <a
            href="#specialties"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#3D2314] hover:text-[#8B5A2B]"
          >
            Special Offerings
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#3D2314] hover:text-[#8B5A2B]"
          >
            All Services
          </a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPhotoGuide();
            }}
            className="w-full text-left py-2 text-base font-medium text-[#8B5A2B] flex items-center justify-between cursor-pointer"
          >
            <span>Photo Checklist Guide</span>
            <span className="text-xs bg-[#EFE6D8] px-2 py-0.5 rounded text-[#5C3A21]">Checklist</span>
          </button>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#3D2314] hover:text-[#8B5A2B]"
          >
            Contact & Location
          </a>
          <div className="pt-3 border-t border-[#E8DFC8] flex flex-col gap-2.5">
            <a
              href="tel:+94767574239"
              className="w-full py-2.5 text-center text-sm font-semibold text-[#3D2314] bg-[#F0EBE1] rounded-lg border border-[#D5C7B0]"
            >
              Call +94 76 757 4239
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#3D2314] hover:bg-[#5C3A21] rounded-lg cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
