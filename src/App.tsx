import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSpecialty } from './components/AboutSpecialty';
import { FeaturedHighlights } from './components/FeaturedHighlights';
import { ServicesGrid } from './components/ServicesGrid';
import { OurPromise } from './components/OurPromise';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PhotoGuideModal } from './components/PhotoGuideModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isPhotoGuideOpen, setIsPhotoGuideOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Custom Teak Bed Frame (with Wi-Fi Slot)');

  const scrollToContact = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2117] selection:bg-[#C5A059]/30 selection:text-[#3D2314] relative">
      
      {/* Top Navigation */}
      <Navbar
        onOpenQuote={() => scrollToContact()}
        onOpenPhotoGuide={() => setIsPhotoGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenQuote={() => scrollToContact()} />

        {/* 2. About Us & Our Specialty (Teak Wood & Master Carpenter Dileep) */}
        <AboutSpecialty onOpenQuote={() => scrollToContact()} />

        {/* 3. Special Products & Custom Offerings (Bed frames with router slot, Glass tables, Windows, TV Cabinets) */}
        <FeaturedHighlights
          onSelectProductForQuote={(serviceName) => scrollToContact(serviceName)}
          onOpenPhotoGuide={() => setIsPhotoGuideOpen(true)}
        />

        {/* 4. Full List of Services (7 Comprehensive Woodworking Services) */}
        <ServicesGrid
          onSelectServiceForQuote={(serviceName) => scrollToContact(serviceName)}
        />

        {/* 5. Our Promise */}
        <OurPromise />

        {/* 6. Contact & Free Quote Request Form */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPhotoGuide={() => setIsPhotoGuideOpen(true)}
        onOpenQuote={() => scrollToContact()}
      />

      {/* Interactive Photo Guide Modal */}
      <PhotoGuideModal
        isOpen={isPhotoGuideOpen}
        onClose={() => setIsPhotoGuideOpen(false)}
      />

      {/* Floating Direct WhatsApp Button */}
      <aside aria-label="Direct WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/94767574239?text=Hello%20Dileep!%20I%20am%20interested%20in%20custom%20woodwork%20from%20Dileep%20WoodCraft."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-[#1F5130] hover:bg-[#163E24] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#43A047]/30"
          aria-label="Direct WhatsApp message to Dileep"
        >
          <MessageCircle className="w-5 h-5 text-[#81C784]" />
          <span className="text-xs font-bold tracking-wide hidden sm:inline">
            WhatsApp Dileep
          </span>
        </a>
      </aside>

    </div>
  );
}
