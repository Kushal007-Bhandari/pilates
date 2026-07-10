"use client";

import Image from "next/image";
import { studio } from "@/lib/data";

type Props = {
  variant?: "default" | "cinematic";
};

export function HeroMedia({ variant = "default" }: Props) {
  const cinematic = variant === "cinematic";
  const src = studio.heroImage ?? "/images/hero-home.jpg";

  if (cinematic) {
    return (
      <div className="absolute inset-0 bg-[#2a1818]" aria-hidden>
        <Image
          src={src}
          alt="Pilates at Align Pilates & Wellness Studio, Lalitpur"
          fill
          priority
          quality={90}
          className="object-cover object-[55%_center]"
          sizes="100vw"
        />
      </div>
    );
  }

  const objectClass = "object-cover object-[50%_38%] lg:object-[55%_42%]";
  const sizes = "(max-width: 1024px) 100vw, 960px";

  return (
    <>
      <div className="absolute inset-0 bg-cream" aria-hidden />
      <Image
        src={src}
        alt="Reformer Pilates at Align Pilates & Wellness Studio, Lalitpur"
        fill
        priority
        quality={90}
        className={objectClass}
        sizes={sizes}
      />
    </>
  );
}
