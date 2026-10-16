import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FeaturedHighlightsProps {
  onSelectProductForQuote: (productType: string) => void;
  onOpenPhotoGuide: () => void;
}

interface ProductItem {
  id: string;
  categoryKey: string;
  title: string;
  subtitle: string;
  categoryLabel: string;
  image: string;
  badge: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  quoteType: string;
}

const SPECIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'bed-frames',
    categoryKey: 'beds',
    title: 'Custom Teak Bed Frames',
    subtitle: 'With Smart Wi-Fi Router Storage & TV Integration',
    categoryLabel: 'Custom Bed Frame Design',
    image: '/src/assets/images/bed_router_shelf_1792142952380.jpg',
    badge: 'Flagship Innovation',
    description: 'A signature creation by Dileep: Handcrafted solid teak bed frames featuring a custom-machined headboard shelf specially contoured to house your home Wi-Fi router, phone chargers, and bedside accessories without messy hanging cords. Fully customizable in sizes and TV viewing angles.',
    highlights: [
      'Built-in recessed Wi-Fi router slot with discrete cable management channel',
      'Flexible dimensions: Standard 6x6.5 ft, King 7x7 ft, Queen, or any custom metric',
      'Reinforced solid teak support beams to eliminate creaking and sagging',
      'Optional matching under-bed hydraulic storage or pull-out drawers'
    ],
    specs: [
      { label: 'Wood Material', value: '100% Solid Seasoned Ceylon Teak' },
      { label: 'Popular Sizes', value: '6x6.5 ft | 7x7 ft | Custom fit' },
      { label: 'Smart Feature', value: 'Integrated Router & Cable Bay' },
      { label: 'Finish', value: 'Silky Satin Polyurethane / Teak Oil' }
    ],
    quoteType: 'Custom Teak Bed Frame (with Wi-Fi Slot)'
  },
  {
    id: 'glass-tables',
    categoryKey: 'tables',
    title: 'Glass Top & Small Tables',
    subtitle: 'Center Tables, Dining Tables & Bedside Companions',
    categoryLabel: 'Tempered Glass & Teak',
    image: '/src/assets/images/glass_top_teak_table_1792142952512.jpg',
    badge: 'Artisan Glass & Timber',
    description: 'Combining the warmth of sculpted teak wood with the pristine transparency of heavy tempered beveled glass. Shows off the organic grain pattern of the wood underneath while giving your living or dining room an airy, modern, high-end feel.',
    highlights: [
      'Heavy duty 8mm to 12mm tempered safety glass with beveled polished edges',
      'Artisanal joinery visible through the glass tabletop',
      'Dining tables (4, 6, 8, 10 seaters) and intimate round/rectangular center coffee tables',
      'Custom bedside nightstands matching master bed wood grains'
    ],
    specs: [
      { label: 'Base Wood', value: 'Prime Golden Teak Heartwood' },
      { label: 'Glass Option', value: '8mm - 12mm Toughened Clear/Tinted' },
      { label: 'Edge Finish', value: 'Diamond Polished Bevel' },
      { label: 'Varieties', value: 'Center, Dining, Coffee & Bedside' }
    ],
    quoteType: 'Tempered Glass Top Table / Dining Table'
  },
  {
    id: 'custom-windows',
    categoryKey: 'windows',
    title: 'Custom Windows & Bespoke Fittings',
    subtitle: 'Tailored Mullions, Precision Frames & Custom Locks',
    categoryLabel: 'Architectural Window Joinery',
    image: '/src/assets/images/custom_window_locks_1792142979872.jpg',
    badge: 'Architectural Joinery',
    description: 'Precision-measured and hand-installed teak window casements built to endure Sri Lanka monsoon rain, direct tropical sun, and temperature swings. Features custom-fitted antique brass locks, stay bars, and multi-point mechanisms crafted specifically to client preferences.',
    highlights: [
      'Custom locking mechanisms: Solid brass drop-bolts, lever handles & security latches',
      'Precision mortise-and-tenon weather-sealed window frames',
      'Custom sill depths, architraves, and louvers for natural air circulation',
      'Exact site measurement and on-location fitting in Ibbagamuwa and surrounding areas'
    ],
    specs: [
      { label: 'Frame Timber', value: 'Dense Teak Wood (Grade A)' },
      { label: 'Hardware', value: 'Custom Brass Latches & Hinges' },
      { label: 'Weathering', value: 'Exterior Moisture & UV Barrier' },
      { label: 'Styles', value: 'French Casement, Sliding, Louvered' }
    ],
    quoteType: 'Custom Windows & Antique Brass Locks'
  },
  {
    id: 'tv-cabinets',
    categoryKey: 'cabinets',
    title: 'Modern TV Units & Wall Cabinets',
    subtitle: 'Living Room Consoles, Kitchen Cupboards & Wardrobes',
    categoryLabel: 'Custom Cabinetry & Storage',
    image: '/src/assets/images/modern_tv_cabinet_1792142981124.jpg',
    badge: 'Modern Minimalism',
    description: 'Clean architectural lines meet the timeless warmth of teak. Designed for contemporary homes, these media consoles feature slatted wooden accents, concealed media equipment bays, cable pass-throughs, and matching kitchen cupboards and wardrobes.',
    highlights: [
      'Slatted acoustic-friendly teak doors that allow remote control IR signals through',
      'Concealed cable cavities to hide TV, gaming consoles, and soundbars',
      'Modular interior shelves tailored to your storage needs',
      'Soft-close concealed German-spec hinges and smooth drawer runners'
    ],
    specs: [
      { label: 'Structure', value: 'Solid Teak Frame & Slatted Panels' },
      { label: 'Mounting', value: 'Floating Wall-Hung or Sturdy Legs' },
      { label: 'Cable Plan', value: 'Internal Wire Conduits & Cutouts' },
      { label: 'Hardware', value: 'Hydraulic Soft-Close Dampeners' }
    ],
    quoteType: 'Modern TV Console / Wall Cupboard'
  }
];

export function FeaturedHighlights({ onSelectProductForQuote, onOpenPhotoGuide }: FeaturedHighlightsProps) {
  const [activeTab, setActiveTab] = useState(SPECIAL_PRODUCTS[0].id);
  const activeProduct = SPECIAL_PRODUCTS.find(p => p.id === activeTab) || SPECIAL_PRODUCTS[0];

  return (
    <section id="specialties" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B5A2B] tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>Signature Woodwork Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314] tracking-tight">
            Special Products & Custom Offerings
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#614D3F]">
            Every home is unique. Discover Dileep's four signature custom woodworking specialties, built to order with precision.
          </p>
        </div>

        {/* Tab Selection Bar (4 main categories) */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {SPECIAL_PRODUCTS.map((prod) => {
            const isSelected = prod.id === activeTab;
            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => setActiveTab(prod.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#3D2314] text-white shadow-md'
                    : 'bg-[#F2ECE1] text-[#554336] hover:bg-[#E7DECF] hover:text-[#3D2314]'
                }`}
              >
                <span>{prod.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Showcase Detail Card */}
        <div className="bg-white rounded-3xl border border-[#E5DAC6] shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Column (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#DECDB3] bg-[#EAE2D2] aspect-[4/3] group">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-[#3D2314]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#6B4B34] shadow">
                  {activeProduct.badge}
                </div>

                {/* Category Label Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-[#3D2314] text-xs font-medium px-3 py-1 rounded-md border border-[#D5C5AC]">
                  {activeProduct.categoryLabel}
                </div>
              </div>

              {/* Photo Checklist Trigger */}
              <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#E8DFC8] flex items-center justify-between text-xs">
                <span className="text-[#6B5A4E]">
                  📸 Have a reference photo or want to photograph your space?
                </span>
                <button
                  type="button"
                  onClick={onOpenPhotoGuide}
                  className="text-[#8B5A2B] font-semibold hover:underline flex items-center gap-1 cursor-pointer shrink-0 ml-2"
                >
                  <span>View Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Narrative & Specification Column (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8B5A2B] block">
                  {activeProduct.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#3D2314] mt-1 font-serif">
                  {activeProduct.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#524135] leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Bulleted Highlights */}
              <div className="space-y-2.5 pt-1">
                <h4 className="text-xs uppercase font-bold text-[#3D2314] tracking-wider">
                  Key Craftsmanship Details:
                </h4>
                {activeProduct.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4E3E32]">
                    <span className="w-5 h-5 rounded-full bg-[#F3ECDF] text-[#8B5A2B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[11px]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Spec Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#EAE0CF]">
                {activeProduct.specs.map((spec, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EBE3D4]">
                    <span className="text-[11px] uppercase tracking-wider text-[#7A6757] block">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#3D2314] truncate block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => onSelectProductForQuote(activeProduct.quoteType)}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#3D2314] hover:bg-[#5C3A21] rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request a Quote for this Design</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/94767574239?text=Hello%20Dileep!%20I%20am%20interested%20in%20custom%20ordering:%20${encodeURIComponent(activeProduct.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#3D2314] bg-[#F2ECE1] hover:bg-[#E6DDCF] rounded-xl border border-[#D5C5AC] transition-colors"
                >
                  WhatsApp Direct Inquiry
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Cards Mini Grid for quick visual overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {SPECIAL_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              onClick={() => setActiveTab(prod.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                activeTab === prod.id
                  ? 'bg-white border-[#8B5A2B] ring-2 ring-[#8B5A2B]/20 shadow-md'
                  : 'bg-white/80 border-[#E5DAC6] hover:border-[#C5A059] hover:bg-white'
              }`}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-[#EFE9DF]">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-sm font-bold text-[#3D2314] font-serif">{prod.title}</h4>
              <p className="text-xs text-[#7A6757] line-clamp-2 mt-1">{prod.subtitle}</p>
              <span className="inline-block mt-2 text-[11px] font-semibold text-[#8B5A2B]">
                Explore Details →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
