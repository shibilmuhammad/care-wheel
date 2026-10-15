import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ChooseInsurance } from "@/components/ChooseInsurance";
import { WhyCarewheel } from "@/components/WhyCarewheel";
import { FounderSection } from "@/components/FounderSection";
import { HowItWorks } from "@/components/HowItWorks";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-[#F8FAFC] selection:bg-slate-900 selection:text-white">
      {/* 1. Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section: "Life moves. We're here to protect it." */}
        <Hero />

        {/* 3. Insurance Selection: "What would you like to protect?" */}
        <ChooseInsurance />

        {/* 4. Why Carewheel: "Insurance can be simpler." */}
        <WhyCarewheel />

        {/* 5. Meet the Founder: Rajilal */}
        <FounderSection />

        {/* 6. How It Works: "Three simple steps." */}
        <HowItWorks />

        {/* 6. FAQ Section: 8 Essential Questions */}
        <FaqSection />

        {/* 7. Contact & Conversion: "Not sure where to start? Let's talk." */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Mobile Sticky Action Bar */}
      <MobileBottomBar />
    </div>
  );
}
