import { Shield, Sparkles, Heart, Award } from 'lucide-react';

export function OurPromise() {
  return (
    <section className="py-20 bg-[#3D2314] text-[#FAF8F5] relative overflow-hidden">
      {/* Decorative Warm Gold Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8B5A2B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Seal Badge */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#5C3A21] border border-[#C5A059]/30 text-[#E8C88B] mb-6 shadow-lg">
          <Award className="w-7 h-7" />
        </div>

        <div className="text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-3">
          The Dileep WoodCraft Guarantee
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8 font-serif leading-tight">
          Our Promise to Every Client
        </h2>

        {/* The Exact User-Specified Quotation */}
        <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#E8DFC8] font-serif italic leading-relaxed max-w-4xl mx-auto mb-10 px-4">
          “At Dileep WoodCraft, we focus on quality craftsmanship, careful attention to detail, and reliable service. 
          From custom furniture to doors, windows, and kitchen cabinets, we aim to deliver beautiful, durable woodwork tailored to each customer’s needs. 
          <span className="block mt-4 text-[#C5A059] font-semibold not-italic">
            Quality Woodwork. Built to Last.”
          </span>
        </blockquote>

        {/* 3 Pillars of Craftsmanship */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#6B4B34] text-left">
          
          <div className="p-5 rounded-2xl bg-[#4A2D1B]/60 border border-[#6B4B34]/60">
            <Shield className="w-5 h-5 text-[#C5A059] mb-2" />
            <div className="text-sm font-bold text-white mb-1">Uncompromising Quality</div>
            <p className="text-xs text-[#D8C7B0] leading-relaxed">
              Seasoned solid teak timber selected for optimal grain alignment, preventing warping and termite degradation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#4A2D1B]/60 border border-[#6B4B34]/60">
            <Sparkles className="w-5 h-5 text-[#C5A059] mb-2" />
            <div className="text-sm font-bold text-white mb-1">Careful Attention to Detail</div>
            <p className="text-xs text-[#D8C7B0] leading-relaxed">
              Every Wi-Fi router shelf, brass locking mechanism, and glass bevel is hand-checked by Dileep before delivery.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#4A2D1B]/60 border border-[#6B4B34]/60">
            <Heart className="w-5 h-5 text-[#C5A059] mb-2" />
            <div className="text-sm font-bold text-white mb-1">Reliable, Honest Service</div>
            <p className="text-xs text-[#D8C7B0] leading-relaxed">
              Transparent timelines, transparent pricing, and direct communication with the artisan who builds your furniture.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
