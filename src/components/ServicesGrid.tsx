import { 
  Armchair, 
  DoorClosed, 
  Archive, 
  UtensilsCrossed, 
  Sparkles, 
  Hammer, 
  Wrench, 
  Clock, 
  Check, 
  ArrowRight 
} from 'lucide-react';

interface ServicesGridProps {
  onSelectServiceForQuote: (serviceKey: string) => void;
}

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  icon: typeof Armchair;
  description: string;
  scope: string[];
  timeline: string;
  quoteKey: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'furniture-design',
    number: '01',
    title: 'Custom Furniture Design & Manufacturing',
    icon: Armchair,
    description: 'Bespoke creation of solid wood beds, sofas, study tables, bookshelves, and unique architectural statements built to your exact specifications.',
    scope: ['Solid teak bed frames (6x6.5, 7x7)', 'Integrated router/cable bays', 'Dining & coffee tables with glass or wood tops', 'Ergonomic study desks'],
    timeline: '10 - 18 Days',
    quoteKey: 'Custom Furniture Design & Manufacturing'
  },
  {
    id: 'doors-windows',
    number: '02',
    title: 'Door & Window Installation & Custom Fitting',
    icon: DoorClosed,
    description: 'End-to-end crafting, precision jamb rebate framing, and on-site fitting of exterior and interior teak doors, casement windows, and custom locking mechanisms.',
    scope: ['Main entrance carved doors', 'Sash and French casement windows', 'Solid brass antique latches & security bolts', 'Weather-sealed thresholds'],
    timeline: '7 - 14 Days',
    quoteKey: 'Custom Windows & Antique Brass Locks'
  },
  {
    id: 'wardrobes-cupboards',
    number: '03',
    title: 'Wooden Wardrobes & Cupboards',
    icon: Archive,
    description: 'Maximized bedroom storage crafted from solid teak panels with customized internal drawers, hanging rods, trouser pullouts, and mirrored doors.',
    scope: ['2-door to 6-door custom wardrobes', 'Under-bed storage chests & almirahs', 'Concealed safe compartments', 'Smooth roller guides & soft-close doors'],
    timeline: '14 - 21 Days',
    quoteKey: 'Solid Teak Wardrobe'
  },
  {
    id: 'kitchen-cabinets',
    number: '04',
    title: 'Kitchen Cabinets & Custom Kitchen Furniture',
    icon: UtensilsCrossed,
    description: 'Heavy-duty, moisture-sealed teak kitchen pantry units, overhead cupboards, cutlery dividers, and island breakfast counters built to withstand daily cooking.',
    scope: ['Waterproof seasoned teak carcass', 'Granite or solid wood countertop prep', 'Pull-out pantry wire baskets', 'Chimney & sink cutouts'],
    timeline: '18 - 25 Days',
    quoteKey: 'Custom Kitchen Cabinets'
  },
  {
    id: 'interior-woodwork',
    number: '05',
    title: 'Interior Woodwork & Premium Teak Finishing',
    icon: Sparkles,
    description: 'Elevate your home with teak ceiling paneling, decorative wall louvers, stair railings, architraves, and multi-stage polyurethane lacquer finishes.',
    scope: ['Teak ceiling rafters & paneling', 'Artisan stair treads and balustrades', 'Hand-rubbed oil & high-gloss finishes', 'Timber accent feature walls'],
    timeline: 'Custom by Project',
    quoteKey: 'Custom Furniture Design & Manufacturing'
  },
  {
    id: 'home-renovation',
    number: '06',
    title: 'Home Renovation & Carpentry Services',
    icon: Hammer,
    description: 'Full carpentry upgrades for existing houses in Ibbagamuwa and Kurunegala district. Replacing warped fixtures, retrofitting modern cabinetry, and expanding storage.',
    scope: ['Doorframe realignment', 'Full room woodwork overhauls', 'Custom partition walls & screens', 'Balcony woodwork & eaves'],
    timeline: 'Flexible Schedule',
    quoteKey: 'Home Renovation / Furniture Repair'
  },
  {
    id: 'furniture-repair',
    number: '07',
    title: 'Repair & Maintenance of Wooden Furniture',
    icon: Wrench,
    description: 'Breathing new life into vintage or damaged family furniture. Re-gluing loose tenon joints, sanding away scratches, and re-polishing with lustrous varnish.',
    scope: ['Antique furniture restoration', 'Re-polishing & scratch elimination', 'Hinges, locks, and runner replacement', 'Structural reinforcement'],
    timeline: '3 - 7 Days',
    quoteKey: 'Home Renovation / Furniture Repair'
  }
];

export function ServicesGrid({ onSelectServiceForQuote }: ServicesGridProps) {
  return (
    <section id="services" className="py-20 bg-[#F4EFE6] border-y border-[#E5DAC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8B5A2B] tracking-wider uppercase mb-2">
            <span className="w-6 h-px bg-[#C5A059]" />
            <span>Comprehensive Carpentry Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314] tracking-tight">
            Our Full Range of Woodworking Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#614D3F]">
            From initial design consultation and timber selection to hand-carving and flawless installation.
          </p>
        </div>

        {/* Services Grid (7 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;

            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-[#E2D5BF] shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#8B5A2B] tracking-widest font-mono">
                      {srv.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#E8DFC8] flex items-center justify-center text-[#8B5A2B]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#3D2314] mb-2 font-serif">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E4C3E] leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  {/* Scope bullets */}
                  <div className="space-y-1.5 pt-3 border-t border-[#F0E8D9] mb-4">
                    {srv.scope.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#524135]">
                        <Check className="w-3.5 h-3.5 text-[#8B5A2B] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Timeline and Quote trigger */}
                <div className="pt-4 border-t border-[#F0E8D9] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[#735F50]">
                    <Clock className="w-3.5 h-3.5 text-[#8B5A2B]" />
                    <span>Est: {srv.timeline}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForQuote(srv.quoteKey)}
                    className="font-semibold text-[#8B5A2B] hover:text-[#3D2314] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
