import { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  Navigation,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export function ContactSection({ initialService }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [itemNeeded, setItemNeeded] = useState(initialService || 'Custom Teak Bed Frame (with Wi-Fi Slot)');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setItemNeeded(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Dileep! My name is ${name || 'Customer'}.\n` +
      `Phone: ${phone || 'Not provided'}\n` +
      `Requirement: ${itemNeeded}\n` +
      `Notes: ${details || 'Looking for custom teak woodwork inquiry.'}`
    );
    window.open(`https://wa.me/94767574239?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8B5A2B] tracking-wider uppercase mb-2">
            <span className="w-6 h-px bg-[#C5A059]" />
            <span>Connect with Dileep</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314] tracking-tight">
            Contact & Request a Free Quote
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#614D3F]">
            Reach out directly for custom design consultations, on-site measurements, or workshop visits in Ibbagamuwa.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Business Details & Schedule Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#E5DAC6] shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF4E8] border border-[#E8DEC8] flex items-center justify-center text-[#8B5A2B] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#7A6757]">
                      Direct Telephone & WhatsApp
                    </span>
                    <a
                      href="tel:+94767574239"
                      className="text-xl font-bold text-[#3D2314] hover:text-[#8B5A2B] transition-colors block"
                    >
                      +94 76 757 4239
                    </a>
                    <p className="text-xs text-[#6B5A4E]">
                      Master Carpenter Dileep is directly available for calls and messages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Address & Location Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#E5DAC6] shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF4E8] border border-[#E8DEC8] flex items-center justify-center text-[#8B5A2B] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#7A6757]">
                      Workshop & Carpentry Studio
                    </span>
                    <p className="text-base font-bold text-[#3D2314]">
                      Bangalawaththa, Mudunduwa, Ibbagamuwa
                    </p>
                    <p className="text-xs text-[#6B5A4E]">
                      Kurunegala District, North Western Province, Sri Lanka.
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#E5DAC6] shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF4E8] border border-[#E8DEC8] flex items-center justify-center text-[#8B5A2B] shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#7A6757]">
                      Working Hours
                    </span>
                    <div className="text-sm font-semibold text-[#3D2314]">
                      Monday – Saturday: <span className="text-[#8B5A2B]">8:00 AM – 5:00 PM</span>
                    </div>
                    <div className="text-xs text-[#7A6757]">
                      Sunday: <span className="font-semibold text-rose-700">Closed</span> (Available for urgent inquiries via WhatsApp)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+94767574239"
                className="flex-1 py-3 px-4 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#3D2314] hover:bg-[#5C3A21] rounded-xl shadow-sm transition-colors"
              >
                Call +94 76 757 4239
              </a>
              <a
                href="https://wa.me/94767574239?text=Hello%20Dileep!%20I%20would%20like%20to%20visit%20your%20workshop%20in%20Ibbagamuwa."
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 text-center text-xs font-bold uppercase tracking-wider text-[#1F5130] bg-[#E8F5E9] hover:bg-[#D7EED9] border border-[#C8E6C9] rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Online Inquiry & Workshop Map (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#E5DAC6] shadow-sm space-y-6">
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3D2314] font-serif">
                Send a Custom Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#614D3F] mt-1">
                Tell us about your furniture design, required dimensions, or wood preference. Dileep will respond promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#E8F5E9] border border-[#C8E6C9] text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-[#2E7D32] mx-auto" />
                <div>
                  <h4 className="text-lg font-bold text-[#1B5E20]">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-[#2E7D32] mt-1 max-w-md mx-auto">
                    Thank you, {name}. Master Carpenter Dileep has received your inquiry for <strong>{itemNeeded}</strong> and will call you back at <strong>{phone}</strong> shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#1B5E20] bg-white border border-[#C8E6C9] rounded-lg"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3B32] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyantha Fernando"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C7B0] rounded-xl focus:outline-none focus:border-[#8B5A2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3B32] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+94 7X XXX XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C7B0] rounded-xl focus:outline-none focus:border-[#8B5A2B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3B32] mb-1.5">
                    Woodwork Type / Service
                  </label>
                  <select
                    value={itemNeeded}
                    onChange={(e) => setItemNeeded(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C7B0] rounded-xl focus:outline-none focus:border-[#8B5A2B]"
                  >
                    <option value="Custom Teak Bed Frame (with Wi-Fi Slot)">Custom Teak Bed Frame (with Wi-Fi Slot)</option>
                    <option value="Tempered Glass Top Table / Dining Table">Tempered Glass Top Table / Dining Table</option>
                    <option value="Custom Windows & Antique Brass Locks">Custom Windows & Antique Brass Locks</option>
                    <option value="Modern TV Console / Wall Cupboard">Modern TV Console / Wall Cupboard</option>
                    <option value="Solid Teak Wardrobe">Solid Teak Wardrobe</option>
                    <option value="Custom Kitchen Cabinets">Custom Kitchen Cabinets</option>
                    <option value="Home Renovation / Furniture Repair">Home Renovation / Furniture Repair</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3B32] mb-1.5">
                    Project Notes & Dimensions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide desired dimensions (e.g. 7x7 ft bed, 6-seater dining table, custom window locks) or your preferred budget..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C7B0] rounded-xl focus:outline-none focus:border-[#8B5A2B]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-5 text-xs font-bold uppercase tracking-wider text-white bg-[#3D2314] hover:bg-[#5C3A21] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="py-3 px-5 text-xs font-bold uppercase tracking-wider text-[#1F5130] bg-[#E8F5E9] hover:bg-[#D7EED9] border border-[#C8E6C9] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

              </form>
            )}

            {/* Ibbagamuwa Location Card */}
            <div className="pt-4 border-t border-[#EAE0CF]">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFC8] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-[#8B5A2B] shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-[#3D2314] block">
                      Workshop Location: Ibbagamuwa, Sri Lanka
                    </span>
                    <span className="text-[#6B5A4E]">
                      Bangalawaththa, Mudunduwa · Kurunegala - Dambulla Highway access
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/Ibbagamuwa+Sri+Lanka"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-[#8B5A2B] hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>Open Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
