'use client';

import HeroSection from '@/sections/HeroSection';
import CategoriesSection from '@/sections/CategoriesSection';
import FeaturedVenuesSection from '@/sections/FeaturedVenuesSection';
import VendorsSection from '@/sections/VendorsSection';
import HowItWorksSection from '@/sections/Howitworkssection';
import TestimonialsSection from '@/sections/Testimonialssection';
import DestinationsSection from '@/sections/DestinationsSection';
import Footer from '@/sections/Footer';
import CTASection from '@/sections/CtaSection';

export default function Home() {
  
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <FeaturedVenuesSection />
      <VendorsSection />
      <HowItWorksSection/>
      <TestimonialsSection/>
      <DestinationsSection/>
      <CTASection/>
      <Footer />
    </div>
  );
}