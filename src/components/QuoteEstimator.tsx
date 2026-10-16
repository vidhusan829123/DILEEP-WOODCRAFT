import { useState, useId } from 'react';
import { 
  Calculator, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Ruler, 
  Layers, 
  Clock, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { calculateFurnitureQuote, FurnitureCategory, QuoteRequest } from '../utils/pricing.ts';

interface QuoteEstimatorProps {
  initialCategory?: FurnitureCategory;
}

export function QuoteEstimator({ initialCategory = 'bed_frame' }: QuoteEstimatorProps) {
  const [furnitureType, setFurnitureType] = useState<FurnitureCategory>(initialCategory);
  const [sizePreset, setSizePreset] = useState<'standard_6x6_5' | 'king_7x7' | 'compact_coffee' | 'dining_6seater' | 'custom'>('standard_6x6_5');
  const [customLength, setCustomLength] = useState<number>(6.5);
  const [customWidth, setCustomWidth] = useState<number>(6);
  const [woodGrade, setWoodGrade] = useState<'premium_teak' | 'seasoned_teak' | 'hybrid_budget_teak'>('premium_teak');
  const [finishType, setFinishType] = useState<'natural_satin' | 'gloss_lacquer' | 'matte_oil' | 'antique_honey'>('natural_satin');
  
  // Custom add-ons
  const [includeRouterSlot, setIncludeRouterSlot] = useState<boolean>(true);
  const [includeGlassTop, setIncludeGlassTop] = useState<boolean>(true);
  const [includeBrassLocks, setIncludeBrassLocks] = useState<boolean>(true);
  const [includeLighting, setIncludeLighting] = useState<boolean>(false);

  // Form contact info
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const req: QuoteRequest = {
    furnitureType,
    sizePreset,
    customDimensions: sizePreset === 'custom' ? { lengthFt: customLength, widthFt: customWidth } : undefined,
    woodGrade,
    finishType,
    includeRouterSlot,
    includeGlassTop,
    includeCustomBrassLocks: includeBrassLocks,
    includeIntegratedLighting: includeLighting,
  };

  const quote = calculateFurnitureQuote(req);

  const formattedMin = new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR', maximumFractionDigits: 0 }).format(quote.estimatedMinLKR);
  const formattedMax = new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR', maximumFractionDigits: 0 }).format(quote.estimatedMaxLKR);

  const handleDirectFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setFormSubmitted(true);
  };

  return (
    <section id="estimate" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B5A2B] tracking-wider uppercase mb-2">
            <Calculator className="w-4 h-4 text-[#C5A059]" />
            <span>Interactive Custom Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314] tracking-tight">
            Estimate Your Custom Furniture Price
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#614D3F]">
            Configure your dream woodwork, choose timber grade and dimensions, and get an instant estimate tailored to your budget.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="bg-white rounded-3xl border border-[#E5DAC6] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Form Controls (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-7 border-b lg:border-b-0 lg:border-r border-[#EAE0CF]">
            
            {/* Step 1: Furniture Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2314] mb-3">
                1. Select Furniture Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'bed_frame', label: 'Custom Bed Frame' },
                  { id: 'glass_table', label: 'Glass / Coffee Table' },
                  { id: 'custom_window', label: 'Windows & Fittings' },
                  { id: 'tv_cabinet', label: 'Modern TV Console' },
                  { id: 'wardrobe', label: 'Wardrobe & Almirah' },
                  { id: 'kitchen_cupboard', label: 'Kitchen Cupboards' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setFurnitureType(cat.id as FurnitureCategory);
                      if (cat.id === 'bed_frame') setSizePreset('standard_6x6_5');
                      if (cat.id === 'glass_table') setSizePreset('compact_coffee');
                    }}
                    className={`p-3 text-xs font-medium rounded-xl border text-left transition-all cursor-pointer ${
                      furnitureType === cat.id
                        ? 'bg-[#3D2314] text-white border-[#3D2314] shadow-sm'
                        : 'bg-[#FAF8F5] text-[#4A3B32] border-[#E8DFC8] hover:bg-[#F4ECE1]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions & Sizing */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2314] mb-3">
                2. Dimensions & Sizing
              </label>

              {furnitureType === 'bed_frame' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSizePreset('standard_6x6_5')}
                      className={`p-3 text-xs rounded-xl border text-center transition-all cursor-pointer ${
                        sizePreset === 'standard_6x6_5'
                          ? 'bg-[#8B5A2B] text-white border-[#8B5A2B] font-semibold'
                          : 'bg-[#FAF8F5] text-[#4A3B32] border-[#E8DFC8]'
                      }`}
                    >
                      Standard (6 x 6.5 ft)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSizePreset('king_7x7')}
                      className={`p-3 text-xs rounded-xl border text-center transition-all cursor-pointer ${
                        sizePreset === 'king_7x7'
                          ? 'bg-[#8B5A2B] text-white border-[#8B5A2B] font-semibold'
                          : 'bg-[#FAF8F5] text-[#4A3B32] border-[#E8DFC8]'
                      }`}
                    >
                      King Size (7 x 7 ft)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSizePreset('custom')}
                      className={`p-3 text-xs rounded-xl border text-center transition-all cursor-pointer ${
                        sizePreset === 'custom'
                          ? 'bg-[#8B5A2B] text-white border-[#8B5A2B] font-semibold'
                          : 'bg-[#FAF8F5] text-[#4A3B32] border-[#E8DFC8]'
                      }`}
                    >
                      Custom Dimensions
                    </button>
                  </div>

                  {sizePreset === 'custom' && (
                    <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8]">
                      <div>
                        <label className="text-xs text-[#6B5A4E] block mb-1">Length (Feet)</label>
                        <input
                          type="number"
                          min="4"
                          max="10"
                          step="0.5"
                          value={customLength}
                          onChange={(e) => setCustomLength(parseFloat(e.target.value) || 6)}
                          className="w-full px-3 py-2 text-sm bg-white border border-[#D5C7B0] rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-[#6B5A4E] block mb-1">Width (Feet)</label>
                        <input
                          type="number"
                          min="3"
                          max="10"
                          step="0.5"
                          value={customWidth}
                          onChange={(e) => setCustomWidth(parseFloat(e.target.value) || 6)}
                          className="w-full px-3 py-2 text-sm bg-white border border-[#D5C7B0] rounded-lg"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {furnitureType === 'glass_table' && (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSizePreset('compact_coffee')}
                    className={`p-3 text-xs rounded-xl border text-center transition-all cursor-pointer ${
                      sizePreset === 'compact_coffee'
                        ? 'bg-[#8B5A2B] text-white border-[#8B5A2B] font-semibold'
                        : 'bg-[#FAF8F5] text-[#4A3B32] border-[#E8DFC8]'
                    }`}
                  >
                    Center / Coffee Table (3.5 x 2 ft)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSizePreset('dining_6seater')}
                    className={`p-3 text-xs rounded-xl border text-center transition-all cursor-pointer ${
                      sizePreset === 'dining_6seater'
                        ? 'bg-[#8B5A2B] text-white border-[#8B5A2B] font-semibold'
                        : 'bg-[#FAF8F5] text-[#4A3B32] border-[#E8DFC8]'
                    }`}
                  >
                    6-Seater Dining Table (6 x 3.5 ft)
                  </button>
                </div>
              )}

              {furnitureType !== 'bed_frame' && furnitureType !== 'glass_table' && (
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8] text-xs text-[#5C4A3C]">
                  Dileep provides complimentary on-site measurement at your home in Ibbagamuwa and surrounding regions to ensure millimeters-precise fit.
                </div>
              )}
            </div>

            {/* Step 3: Teak Timber Grade & Budget Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2314] mb-3">
                3. Wood Selection & Budget Alignment
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  {
                    id: 'premium_teak',
                    title: 'Grade A Teak',
                    desc: 'Heartwood (தேக்கு மரம்)',
                    tag: 'Most Durable'
                  },
                  {
                    id: 'seasoned_teak',
                    title: 'Kiln Seasoned Teak',
                    desc: 'Standard Ceylon Teak',
                    tag: 'Popular'
                  },
                  {
                    id: 'hybrid_budget_teak',
                    title: 'Budget Optimized',
                    desc: 'Teak & Hardwood Blend',
                    tag: 'Cost Friendly'
                  }
                ].map((wood) => (
                  <button
                    key={wood.id}
                    type="button"
                    onClick={() => setWoodGrade(wood.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      woodGrade === wood.id
                        ? 'bg-[#3D2314] text-white border-[#3D2314] shadow-sm'
                        : 'bg-[#FAF8F5] text-[#4A3B32] border-[#E8DFC8] hover:bg-[#F4ECE1]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{wood.title}</span>
                    </div>
                    <div className={`text-[11px] mt-1 ${woodGrade === wood.id ? 'text-[#D8C7B0]' : 'text-[#7A6757]'}`}>
                      {wood.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Special Add-ons & Smart Features */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2314] mb-3">
                4. Custom Features & Upgrades
              </label>

              <div className="space-y-2.5">
                {furnitureType === 'bed_frame' && (
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8] cursor-pointer hover:bg-[#F5EDE1]">
                    <input
                      type="checkbox"
                      checked={includeRouterSlot}
                      onChange={(e) => setIncludeRouterSlot(e.target.checked)}
                      className="w-4 h-4 text-[#8B5A2B] rounded focus:ring-0"
                    />
                    <div className="text-xs">
                      <span className="font-semibold text-[#3D2314] block">
                        Built-in Wi-Fi Router Storage Slot + Cable Channels
                      </span>
                      <span className="text-[#7A6757]">
                        Signature Dileep design to eliminate visible router cables
                      </span>
                    </div>
                  </label>
                )}

                {furnitureType === 'glass_table' && (
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8] cursor-pointer hover:bg-[#F5EDE1]">
                    <input
                      type="checkbox"
                      checked={includeGlassTop}
                      onChange={(e) => setIncludeGlassTop(e.target.checked)}
                      className="w-4 h-4 text-[#8B5A2B] rounded focus:ring-0"
                    />
                    <div className="text-xs">
                      <span className="font-semibold text-[#3D2314] block">
                        Heavy 10mm Tempered Glass Top (Beveled Edge)
                      </span>
                      <span className="text-[#7A6757]">
                        Scratch-resistant tempered safety glass
                      </span>
                    </div>
                  </label>
                )}

                {furnitureType === 'custom_window' && (
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8] cursor-pointer hover:bg-[#F5EDE1]">
                    <input
                      type="checkbox"
                      checked={includeBrassLocks}
                      onChange={(e) => setIncludeBrassLocks(e.target.checked)}
                      className="w-4 h-4 text-[#8B5A2B] rounded focus:ring-0"
                    />
                    <div className="text-xs">
                      <span className="font-semibold text-[#3D2314] block">
                        Custom Antique Solid Brass Locking Mechanisms
                      </span>
                      <span className="text-[#7A6757]">
                        Hand-fitted drop bolts and vintage latches
                      </span>
                    </div>
                  </label>
                )}

                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8] cursor-pointer hover:bg-[#F5EDE1]">
                  <input
                    type="checkbox"
                    checked={includeLighting}
                    onChange={(e) => setIncludeLighting(e.target.checked)}
                    className="w-4 h-4 text-[#8B5A2B] rounded focus:ring-0"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-[#3D2314] block">
                      Integrated Warm LED Backlighting Channel
                    </span>
                    <span className="text-[#7A6757]">
                      Recessed groove for concealed warm LED strip illumination
                    </span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Live Estimate & Instant Inquiry Dispatch (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#FAF8F5] flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              <div className="pb-4 border-b border-[#E5DAC6]">
                <span className="text-xs uppercase tracking-wider text-[#8B5A2B] font-semibold block">
                  Calculated Estimate
                </span>
                <div className="text-3xl sm:text-4xl font-bold text-[#3D2314] font-serif mt-1">
                  {formattedMin} - {formattedMax}
                </div>
                <div className="text-xs text-[#7A6757] mt-1">
                  *Indicative workshop estimate based on selected dimensions & timber grade.
                </div>
              </div>

              {/* Wood & Timeline Summary */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#EBE1D0]">
                  <span className="text-[#7A6757]">Selected Timber:</span>
                  <span className="font-semibold text-[#3D2314]">{quote.woodGradeLabel}</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#EBE1D0]">
                  <span className="text-[#7A6757]">Crafting Turnaround:</span>
                  <span className="font-semibold text-[#8B5A2B]">{quote.turnaroundDays}</span>
                </div>
              </div>

              {/* Features Included List */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3D2314] block">
                  Configuration Summary:
                </span>
                <div className="space-y-1.5">
                  {quote.featuresSummary.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#524135]">
                      <span className="text-[#8B5A2B] font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Quick Dispatch */}
              <div className="pt-2">
                <a
                  href={quote.whatsAppMessage}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 text-sm font-semibold text-white bg-[#1F5130] hover:bg-[#163E24] active:scale-[0.98] rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Estimate to Dileep on WhatsApp</span>
                </a>
                <span className="text-[11px] text-[#7A6757] block text-center mt-1.5">
                  Direct mobile chat with Dileep (+94 76 757 4239)
                </span>
              </div>

            </div>

            {/* Quick Callback / On-site Visit Form */}
            <div className="pt-4 border-t border-[#E5DAC6]">
              {formSubmitted ? (
                <div className="p-4 rounded-xl bg-[#E8F5E9] border border-[#C8E6C9] text-center space-y-1">
                  <CheckCircle className="w-6 h-6 text-[#2E7D32] mx-auto" />
                  <div className="text-xs font-bold text-[#1B5E20]">Thank You, {clientName}!</div>
                  <div className="text-xs text-[#2E7D32]">
                    Dileep will call you shortly at {clientPhone} to discuss measurements and finalize your woodwork quote.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDirectFormSubmit} className="space-y-3">
                  <div className="text-xs font-bold text-[#3D2314] uppercase tracking-wider">
                    Or Request a Call / Workshop Visit:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="px-3 py-2 text-xs bg-white border border-[#D5C7B0] rounded-lg"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone (+94 ...)"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="px-3 py-2 text-xs bg-white border border-[#D5C7B0] rounded-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 px-3 text-xs font-semibold text-[#3D2314] bg-[#F0EBE1] hover:bg-[#E4DAC7] border border-[#D5C7B0] rounded-lg transition-colors cursor-pointer"
                  >
                    Request Free Workshop Measurement Call
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
