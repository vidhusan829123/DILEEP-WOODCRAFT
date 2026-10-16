import { useState } from 'react';
import { 
  Camera, 
  X, 
  CheckSquare, 
  Square, 
  UploadCloud, 
  Sparkles, 
  Image as ImageIcon,
  ExternalLink
} from 'lucide-react';

interface PhotoGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface GuideCategory {
  id: string;
  categoryTag: string;
  tamilTitle: string;
  englishTitle: string;
  items: {
    tamil: string;
    english: string;
    tip: string;
  }[];
  sampleImg?: string;
}

const CHECKLIST_DATA: GuideCategory[] = [
  {
    id: 'beds',
    categoryTag: 'Bed Frames',
    tamilTitle: 'கட்டில் டிசைன்கள்',
    englishTitle: 'Bed Frames & Router Bays',
    sampleImg: '/src/assets/images/bed_router_shelf_1792142952380.jpg',
    items: [
      {
        tamil: 'ரவுட்டர் / வைஃபை வைக்கும் வசதியுடன் கூடிய கட்டிலின் கிளோஸ்-அப் (Close-up) படம்.',
        english: 'Close-up shot of headboard showing the integrated router shelf & cable conduit in sharp focus.',
        tip: 'Capture at a 45-degree angle under soft ambient light to highlight the clean wood joinery.'
      },
      {
        tamil: '6x6.5 அல்லது 7x7 அளவுள்ள முழு கட்டில் தோற்றம்.',
        english: 'Full wide shot of the assembled 6x6.5 or 7x7 bed inside a clean room.',
        tip: 'Stand back 8-10 feet with the camera held at waist height to capture the full architectural presence.'
      }
    ]
  },
  {
    id: 'tables',
    categoryTag: 'Tables',
    tamilTitle: 'கண்ணாடி மேசை & சிறிய மேசைகள்',
    englishTitle: 'Glass & Small Tables',
    sampleImg: '/src/assets/images/glass_top_teak_table_1792142952512.jpg',
    items: [
      {
        tamil: 'தேக்கு மர ஃபிரேமில் கண்ணாடி பதித்த சென்டர் டேபிள் (Glass Top Table).',
        english: 'Top-down & 3/4 angle shot showing the transparent glass highlighting the teak wood grain beneath.',
        tip: 'Wipe the glass clean before shooting to eliminate reflections and dust.'
      },
      {
        tamil: 'சின்னஞ்சிறிய டீ டேபிள் / பெட்சைடு டேபிள் (Coffee & Bedside Tables).',
        english: 'Sleek compact bedside nightstand or coffee table placed next to seating.',
        tip: 'Place a simple ceramic cup or magazine on top for natural scale.'
      }
    ]
  },
  {
    id: 'windows',
    categoryTag: 'Windows & Fittings',
    tamilTitle: 'ஜன்னல் & பூட்டுகள்',
    englishTitle: 'Windows & Lock Designs',
    sampleImg: '/src/assets/images/custom_window_locks_1792142979872.jpg',
    items: [
      {
        tamil: 'கஸ்டமைஸ் செய்யப்பட்ட மர ஜன்னல்கள் மற்றும் அதன் பிரத்யேக பூட்டு அமைப்புகளின் தெளிவான படங்கள்.',
        english: 'Clear macro photos of the antique solid brass lock mechanism and custom wooden mullions.',
        tip: 'Photograph during morning daylight with the window cracked open slightly to show locking action.'
      }
    ]
  },
  {
    id: 'cabinets',
    categoryTag: 'Storage',
    tamilTitle: 'டிவி கேபினெட் & சமையலறை கபோர்டுகள்',
    englishTitle: 'TV Cabinets & Kitchen Storage',
    sampleImg: '/src/assets/images/modern_tv_cabinet_1792142981124.jpg',
    items: [
      {
        tamil: 'ஹாலில் வைக்கும் நவீன டிவி கேபினெட் மற்றும் சமையலறை கபோர்டுகள் (Kitchen Cabinets).',
        english: 'Full frontal shot of wall-mounted TV console with slatted doors and kitchen cupboards.',
        tip: 'Turn on any warm concealed LED accent lighting to highlight the rich honey teak tone.'
      }
    ]
  },
  {
    id: 'workshop',
    categoryTag: 'Craftsmanship',
    tamilTitle: 'வேலை செய்யும் பகுதி',
    englishTitle: 'Master Carpenter Dileep at Work',
    sampleImg: '/src/assets/images/dileep_craftsman_workshop_1792142981542.jpg',
    items: [
      {
        tamil: 'தச்சர் திலீப் மரங்களைச் செதுக்கும் அல்லது ஃபினிஷிங்/வார்னிஷ் செய்யும் நேரடிப் புகைப்படம் (Trust & Quality-ஐ அதிகரிக்கும்).',
        english: 'Action shot of Dileep planing timber, chiseling joints, or applying satin finish on the workbench.',
        tip: 'Authentic workshop shavings and traditional hand tools build immense trust and credibility!'
      }
    ]
  }
];

export function PhotoGuideModal({ isOpen, onClose }: PhotoGuideModalProps) {
  const [lang, setLang] = useState<'english' | 'tamil'>('english');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [uploadedPreviews, setUploadedPreviews] = useState<string[]>([]);

  if (!isOpen) return null;

  const toggleCheck = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setUploadedPreviews(prev => [...prev, reader.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div className="bg-[#FAF8F5] rounded-3xl border border-[#D5C7B0] shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="p-6 border-b border-[#E8DFC8] bg-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4E8] border border-[#E8DEC8] flex items-center justify-center text-[#8B5A2B]">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#3D2314] font-serif">
                {lang === 'tamil' ? 'புகைப்படங்களுக்கான வழிகாட்டி (Photo Checklist Guide)' : 'Woodcraft Photo Checklist Guide (வழிகாட்டி)'}
              </h3>
              <p className="text-xs text-[#7A6757]">
                {lang === 'tamil'
                  ? 'போனில் எடுத்து பதிவேற்ற வேண்டிய முக்கிய படங்கள் (Checklist for Dileep & Clients)'
                  : 'Key photos to capture with smartphone and share with Dileep'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex bg-[#F0EBE1] p-1 rounded-lg border border-[#D5C7B0] text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang('english')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  lang === 'english' ? 'bg-[#3D2314] text-white shadow-xs' : 'text-[#5C4A3C]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang('tamil')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  lang === 'tamil' ? 'bg-[#3D2314] text-white shadow-xs' : 'text-[#5C4A3C]'
                }`}
              >
                தமிழ்
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#7A6757] hover:text-[#3D2314] hover:bg-[#F2ECE1] rounded-lg transition-colors cursor-pointer"
              aria-label="Close photo guide"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Introductory Tip Banner */}
          <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#E2D5BF] flex items-start gap-3 text-xs sm:text-sm text-[#524135]">
            <Sparkles className="w-5 h-5 text-[#8B5A2B] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#3D2314] block">
                {lang === 'tamil' ? 'திலீப் மற்றும் வாடிக்கையாளர்களுக்கான புகைப்படக் குறிப்பு:' : 'Craftsman Photography & Lighting Tips:'}
              </strong>
              {lang === 'tamil'
                ? 'உங்கள் ஸ்மார்ட்போனில் காலை 8:00 - 10:00 மணி இயற்கை வெளிச்சத்தில் படங்கள் எடுப்பது தேக்கு மரத்தின் உண்மையான தங்க நிற தானிய அமைப்பை (Golden Grain) மிக அழகாகக் காட்டும். ஃபிளாஷ் (Flash) போடுவதைத் தவிர்க்கவும்.'
                : 'Taking photos under morning natural daylight (8:00 AM - 10:00 AM) reveals the rich golden honey grain of Ceylon teak without harsh glare. Avoid artificial camera flash for natural wood finishes.'}
            </div>
          </div>

          {/* Checklist Categories */}
          <div className="space-y-6">
            {CHECKLIST_DATA.map((cat, catIdx) => (
              <div key={cat.id} className="bg-white p-5 rounded-2xl border border-[#E5DAC6] shadow-xs">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#F0E8D9]">
                  <h4 className="text-base font-bold text-[#3D2314] font-serif flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FAF4E8] text-[#8B5A2B] flex items-center justify-center text-xs font-mono font-bold">
                      {catIdx + 1}
                    </span>
                    <span>{cat.englishTitle}</span>
                    <span className="text-xs font-normal text-[#8B5A2B]">({cat.tamilTitle})</span>
                  </h4>
                  {cat.sampleImg && (
                    <span className="text-[11px] text-[#8B5A2B] font-semibold bg-[#FAF4E8] px-2.5 py-1 rounded-md border border-[#E8DEC8] self-start sm:self-auto">
                      Sample Verified
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  
                  {/* Items list (8 cols) */}
                  <div className="md:col-span-8 space-y-3">
                    {cat.items.map((item, itemIdx) => {
                      const itemKey = `${cat.id}-${itemIdx}`;
                      const isChecked = !!checkedItems[itemKey];

                      return (
                        <div
                          key={itemKey}
                          onClick={() => toggleCheck(itemKey)}
                          className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#EBE2D4] cursor-pointer hover:bg-[#F5EDE0] transition-colors"
                        >
                          <button
                            type="button"
                            className="mt-0.5 text-[#8B5A2B] focus:outline-none shrink-0"
                            aria-label="Toggle completed checkbox"
                          >
                            {isChecked ? (
                              <CheckSquare className="w-5 h-5 text-[#2E7D32]" />
                            ) : (
                              <Square className="w-5 h-5 text-[#8B5A2B]" />
                            )}
                          </button>

                          <div className="text-xs sm:text-sm">
                            <div className={`font-medium ${isChecked ? 'line-through text-[#8A796C]' : 'text-[#3D2314]'}`}>
                              {lang === 'tamil' ? item.tamil : item.english}
                            </div>
                            {lang !== 'tamil' && (
                              <div className="text-[11px] text-[#8B5A2B] mt-0.5">
                                {item.tamil}
                              </div>
                            )}
                            <div className="text-[11px] text-[#7A6757] mt-1 italic">
                              💡 {item.tip}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Thumbnail Reference (4 cols) */}
                  {cat.sampleImg && (
                    <div className="md:col-span-4">
                      <div className="rounded-xl overflow-hidden border border-[#D8C7AF] aspect-[4/3] bg-[#EFE8DC]">
                        <img
                          src={cat.sampleImg}
                          alt={cat.englishTitle}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  )}

                </div>

              </div>
            ))}
          </div>

          {/* Client / Dileep Interactive Photo Upload Previewer */}
          <div className="bg-[#FAF4E8] p-5 sm:p-6 rounded-2xl border border-[#D5C7B0] space-y-4">
            <div className="flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-[#8B5A2B]" />
              <h4 className="text-sm font-bold text-[#3D2314]">
                {lang === 'tamil' ? 'உங்கள் போன் புகைப்படங்களைப் பதிவேற்றி சோதிக்கவும்:' : 'Test Upload Reference Photos From Your Phone:'}
              </h4>
            </div>

            <p className="text-xs text-[#6B5A4E]">
              {lang === 'tamil'
                ? 'உங்கள் அறையின் அளவு அல்லது நீங்கள் விரும்பும் கட்டில்/மேசை மாதிரியை இங்கே தேர்வு செய்து முன்னோட்டம் பார்க்கலாம்.'
                : 'Select reference photos of your bedroom, room dimensions, or inspiration to preview how they look before sharing with Dileep.'}
            </p>

            <label className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#3D2314] hover:bg-[#5C3A21] rounded-xl cursor-pointer shadow-sm transition-colors">
              <ImageIcon className="w-4 h-4" />
              <span>{lang === 'tamil' ? 'புகைப்படத்தைத் தேர்ந்தெடு' : 'Select Photos to Preview'}</span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            {uploadedPreviews.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                {uploadedPreviews.map((src, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden border border-[#C5A059] aspect-square shadow-sm">
                    <img src={src} alt={`Uploaded reference ${i + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 text-[10px]">
                      ✓
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#E8DFC8] bg-white flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#7A6757]">
            {Object.keys(checkedItems).filter(k => checkedItems[k]).length} of 7 shots checked
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/94767574239?text=Hello%20Dileep!%20I%20have%20my%20furniture%20reference%20photos%20ready%20to%20send."
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#1F5130] hover:bg-[#163E24] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Send Photos to WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#3D2314] bg-[#F2ECE1] hover:bg-[#E6DECf] rounded-lg transition-colors cursor-pointer"
            >
              Close Guide
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
