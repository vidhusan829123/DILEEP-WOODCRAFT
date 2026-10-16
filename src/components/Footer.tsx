import { ArrowUp, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPhotoGuide: () => void;
  onOpenQuote: () => void;
}

export function Footer({ onOpenPhotoGuide, onOpenQuote }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24150B] text-[#E8DFC8] border-t border-[#4A2D1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3E2516]">
          
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span 
              className="text-2xl font-bold tracking-wider text-white uppercase block"
              style={{ fontFamily: 'var(--font-cinzel, serif)' }}
            >
              DILEEP WOODCRAFT
            </span>
            <p className="text-xs sm:text-sm text-[#C4B39F] leading-relaxed max-w-sm">
              Handcrafted custom Ceylon Teak Wood furniture, smart bed frames, precision window fittings, and modern cabinetry built with precision by Master Carpenter Dileep in Ibbagamuwa.
            </p>
            <div className="text-xs text-[#968370] pt-2">
              Quality Woodwork. Built to Last.
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#C4B39F]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About & Teak Specialty
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">
                  Special Offerings (Bed Frames, Tables)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Full Range of Services
                </a>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={onOpenQuote}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Request a Free Quote
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={onOpenPhotoGuide}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Photo Checklist Guide
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Workshop Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Workshop Snapshot (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Workshop & Studio
            </div>
            
            <div className="space-y-2 text-xs text-[#C4B39F]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Bangalawaththa, Mudunduwa, Ibbagamuwa, Sri Lanka</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:+94767574239" className="hover:text-white transition-colors">
                  +94 76 757 4239
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#A69380]">
                Monday – Saturday: 8:00 AM – 5:00 PM <br />
                Sunday: Closed
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#968370]">
          <div>
            © {new Date().getFullYear()} DILEEP WOODCRAFT. Master Carpenter Dileep. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#331C0E] hover:bg-[#452714] text-[#E8DFC8] border border-[#4D2E18] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
