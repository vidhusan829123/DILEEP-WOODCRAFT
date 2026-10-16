import { CheckCircle2, Award, HeartHandshake, Sparkles, Hammer } from 'lucide-react';

interface AboutSpecialtyProps {
  onOpenQuote: () => void;
}

export function AboutSpecialty({ onOpenQuote }: AboutSpecialtyProps) {
  return (
    <section id="about" className="py-20 bg-[#F4EFE6] border-y border-[#E5DAC6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8B5A2B] tracking-wider uppercase mb-2">
            <Hammer className="w-4 h-4 text-[#C5A059]" />
            <span>Master Artisan & Timber Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314] tracking-tight">
            About Dileep & Our Teak Wood Specialty
          </h2>
          <p className="mt-3 text-lg text-[#614D3F]">
            Handcrafting high-durability timber with personal dedication in Ibbagamuwa.
          </p>
        </div>

        {/* 2-Column Split: Story & Teak Science */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Workshop Photo & Craftsmanship Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D5C4AA] group bg-[#E0D4BE]">
              <img
                src="/src/assets/images/dileep_craftsman_workshop_1792142981542.jpg"
                alt="Master Carpenter Dileep hand-polishing solid teak wood in his workshop"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-widest text-[#E8C88B] font-semibold block mb-1">
                  At The Workbench
                </span>
                <p className="text-sm font-medium text-[#FAF8F5]">
                  "Every piece of teak has its own grain rhythm. My duty is to carve it so it lasts for generations."
                </p>
                <p className="text-xs text-[#D8C7B0] mt-1 font-serif italic">
                  — Dileep, Master Carpenter
                </p>
              </div>
            </div>

            {/* Floating Experience Chip */}
            <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-[#D8C8AF] hidden sm:block">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#8B5A2B]" />
                <div>
                  <div className="text-xs font-bold text-[#3D2314]">True Woodcraft</div>
                  <div className="text-[11px] text-[#7A6657]">100% Solid Seasoned Teak</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Core Philosophy & Teak Specialty */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#E0D4BD] shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B5A2B] bg-[#F7F2E9] px-3 py-1 rounded-md border border-[#E4D7C1]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>The King of Woods: Ceylon Teak</span>
              </div>

              <h3 className="text-2xl font-bold text-[#3D2314] font-serif">
                Why Dileep Specializes in High-Quality Teak
              </h3>

              <p className="text-sm sm:text-base text-[#524135] leading-relaxed">
                Dileep's primary material of choice is premium <strong className="text-[#3D2314]">Solid Teak Wood</strong>. 
                Renowned worldwide for its dense grain, natural protective oils, and unmatched weather resilience, teak does not warp, crack, or succumb to termites—making it ideal for Sri Lanka's tropical climate.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5A2B] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#4A392C]">
                    <strong className="block text-[#3D2314]">Ultimate Durability:</strong>
                    Resistant to moisture, wood borers, and temperature fluctuations.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5A2B] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#4A392C]">
                    <strong className="block text-[#3D2314]">Luxury Golden Luster:</strong>
                    Teak's natural golden-brown sheen deepens and beautifies over the decades.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5A2B] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#4A392C]">
                    <strong className="block text-[#3D2314]">Silky Smooth Finishing:</strong>
                    Hand-planed, fine-sanded, and sealed with satin coats.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5A2B] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#4A392C]">
                    <strong className="block text-[#3D2314]">Structural Integrity:</strong>
                    Solid mortise-and-tenon joints, never flimsy staples or paperboards.
                  </div>
                </div>
              </div>
            </div>

            {/* The Up-and-Coming Artisan Promise: Tailored to Every Budget */}
            <div className="p-6 rounded-2xl bg-[#EBE3D3] border border-[#D5C5AC] space-y-3">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#8B5A2B]" />
                <h4 className="text-base font-bold text-[#3D2314]">
                  Bespoke Craftsmanship Tailored to Every Budget
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-[#5C4A3C] leading-relaxed">
                As an up-and-coming expert artisan, Dileep is committed to making authentic custom woodwork accessible. 
                Whether you need a full luxury teak master suite or an affordable custom dining table, 
                he works directly with you to select the right timber cut, sizing, and joinery details that fit your exact budget without sacrificing structural quality.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#3D2314] hover:bg-[#5C3A21] rounded-lg transition-colors cursor-pointer"
                >
                  Consult Your Project With Dileep
                </button>
                <span className="text-xs text-[#7A6657]">
                  Direct craftsman consultation · No middleman markups
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
