import { Hero } from "@/components/home/Hero";
import { BeginnerBanner } from "@/components/home/BeginnerBanner";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ClassesPreview } from "@/components/home/ClassesPreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "Pilates & Wellness in Bhaisepati",
  description:
    "Studio N°8 — reformer Pilates, Cadillac, Wunda Chair & TRX in Lalitpur. Certified instructors, tailored 60-minute sessions. Book via WhatsApp.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BeginnerBanner />
      <ExperienceSection />
      <ClassesPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
