import { studio } from "@/lib/data";
import { siteUrl } from "@/lib/site";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: studio.fullName,
    description: studio.metaDescription,
    url: siteUrl,
    image: `${siteUrl}/images/og.png`,
    telephone: studio.phone.replace(/\s/g, ""),
    email: studio.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: studio.address,
      addressLocality: "Lalitpur",
      addressRegion: "Bagmati",
      addressCountry: "NP",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "06:00",
        closes: "19:00",
      },
    ],
    sameAs: [studio.instagram],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
