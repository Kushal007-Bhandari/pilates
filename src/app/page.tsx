import { Hero } from "@/components/home/Hero";
import { HomeLandingFooter } from "@/components/home/HomeLandingFooter";

export const metadata = {
  title: "Pilates & Wellness in Pulchowk",
  description:
    "Align Pilates & Wellness Studio — Pilates, spa, yoga & barre at A-Fit Studios, One Sky Building, Lalitpur. Book via WhatsApp.",
};

export default function HomePage() {
  return (
    <div data-home-page className="min-h-[100svh]">
      <Hero />
      <HomeLandingFooter />
    </div>
  );
}
