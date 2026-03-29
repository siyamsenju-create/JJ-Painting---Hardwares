import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import Services from "@/components/home/Services";
import ProductPreview from "@/components/home/ProductPreview";
import FeaturesSection from "@/components/home/FeaturesSection";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import ProjectsGallery from "@/components/home/ProjectsGallery";
import FeaturedBrands from "@/components/products/FeaturedBrands";
import QuoteForm from "@/components/home/QuoteForm";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <Services />
      <ProductPreview />
      <FeaturesSection />
      <BeforeAfterSlider />
      <ProjectsGallery />
      <FeaturedBrands />
      <QuoteForm />
      <ContactSection />
    </div>
  );
}
