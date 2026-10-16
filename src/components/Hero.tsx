import { Phone, ArrowRight, ShieldCheck, Ruler, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle organic teak grain watermark overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          
          {/* Left Column: Brand, Tagline, Artisan Intro & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8B5A2B] tracking-wider uppercase">
              <span className="w-6 h-px bg-[#C5A059]" />
              <span>Ibbagamuwa, Sri Lanka · Master Carpenter</span>
            </div>

            {/* Business Title & Tagline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3D2314] tracking-tight leading-[1.1] text-balance">
                DILEEP WOODCRAFT
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[#7C5026] leading-snug">
                Expert Carpentry & Custom Woodwork, Crafted with Precision
              </p>
            </div>

            {/* Description & Master Craftsman Dileep Bio */}
            <p className="text-base sm:text-lg text-[#554336] leading-relaxed max-w-2xl">
              Led by <strong className="text-[#3D2314] font-semibold">Dileep (Professional Master Carpenter)</strong>, 
              we transform the finest seasoned Ceylon Teak Wood into bespoke, heirloom-grade furniture. 
              From smart bed frames with built-in Wi-Fi storage to precision window fittings and luxury TV consoles—tailored to your exact dimensions and budget.
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2">
              <div className="flex items-center gap-2 text-xs text-[#4A3B32] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>100% Solid Teak Wood</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#4A3B32] font-medium">
                <Ruler className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Custom Size (6x6.5 / 7x7)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#4A3B32] font-medium">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Budget-Tailored Designs</span>
              </div>
            </div>

            {/* Actions: Primary CTA & Call Now */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#3D2314] hover:bg-[#5C3A21] active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+94767574239"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#3D2314] bg-white hover:bg-[#F6F1EA] active:scale-[0.98] rounded-xl border border-[#D5C7B0] shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#8B5A2B]" />
                <span>Call Now: +94 76 757 4239</span>
              </a>

              <a
                href="https://wa.me/94767574239?text=Hello%20Dileep!%20I%20am%20interested%20in%20custom%20woodwork%20from%20Dileep%20WoodCraft."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-semibold text-[#1F5130] bg-[#E8F5E9] hover:bg-[#D7EED9] rounded-xl border border-[#C8E6C9] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                <span>WhatsApp Dileep</span>
              </a>
            </div>

            {/* Trust Marker */}
            <div className="flex items-center gap-2 text-xs text-[#705E51] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#8B5A2B]" />
              <span>Workshop & Studio: Bangalawaththa, Mudunduwa, Ibbagamuwa</span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Hero Image with Teak Accents (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#D8C7AF] group bg-[#E8DFC8]">
              <img
                src="/src/assets/images/hero_teak_woodcraft_1792142952191.jpg"
                alt="Bespoke solid teak wood bedroom furniture crafted by Master Carpenter Dileep"
                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Warm Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Card Overlay info */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E2D5BE] shadow-md flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#8B5A2B] font-semibold tracking-wide uppercase">
                    Handmade Precision
                  </div>
                  <div className="text-sm font-bold text-[#3D2314]">
                    Solid Teak Woodcraft
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-medium text-[#4A3B32] block">Custom Sizing</span>
                  <span className="text-xs font-semibold text-[#8B5A2B]">6x6.5 ft & 7x7 ft</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Item Metric / Guarantee Strip below the hero split */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#E8DFC8]">
          <div className="p-4 rounded-xl bg-white/70 border border-[#EFE7D8]">
            <div className="text-2xl font-bold text-[#3D2314] font-serif">100%</div>
            <div className="text-xs font-semibold text-[#8B5A2B] uppercase tracking-wider">Custom Built</div>
            <div className="text-xs text-[#6B5A4E] mt-0.5">Every inch crafted to your space</div>
          </div>
          <div className="p-4 rounded-xl bg-white/70 border border-[#EFE7D8]">
            <div className="text-2xl font-bold text-[#3D2314] font-serif">Teak</div>
            <div className="text-xs font-semibold text-[#8B5A2B] uppercase tracking-wider">Ceylon Hardwood</div>
            <div className="text-xs text-[#6B5A4E] mt-0.5">Premium grade seasoned timber</div>
          </div>
          <div className="p-4 rounded-xl bg-white/70 border border-[#EFE7D8]">
            <div className="text-2xl font-bold text-[#3D2314] font-serif">Any Size</div>
            <div className="text-xs font-semibold text-[#8B5A2B] uppercase tracking-wider">Flexible Scale</div>
            <div className="text-xs text-[#6B5A4E] mt-0.5">From compact tables to king suites</div>
          </div>
          <div className="p-4 rounded-xl bg-white/70 border border-[#EFE7D8]">
            <div className="text-2xl font-bold text-[#3D2314] font-serif">Fair Price</div>
            <div className="text-xs font-semibold text-[#8B5A2B] uppercase tracking-wider">Client Friendly</div>
            <div className="text-xs text-[#6B5A4E] mt-0.5">Tailored directly to your budget</div>
          </div>
        </div>

      </div>
    </section>
  );
}
