import AdSection from "@/components/Ui/HomePage/AdSection/AdSection";
import BrandSection from "@/components/Ui/HomePage/BrandSection/BrandSection";
import CategorySection from "@/components/Ui/HomePage/CategorySection/Category";
import FAQSection from "@/components/Ui/HomePage/FAQSection/FAQSection";
import FeaturedPets from "@/components/Ui/HomePage/FeaturedPet/FeaturedPets";
import HeroSection from "@/components/Ui/HomePage/HeroSection/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediMart | Home Page",
  description:
    "MediMart is a medical store that provides all types of medicines.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <AdSection />
      <FAQSection />
    </>
  );
}
