"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Still image for reduced-motion only — not used as video poster (avoids group-photo flash). */
const STILL_IMAGE = "/images/group-reformer.png";
const VIDEO = "/videos/hero.mp4";

export function HeroMedia() {
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (reduceMotion === null) {
    return <div className="absolute inset-0 bg-cream" aria-hidden />;
  }

  if (reduceMotion) {
    return (
      <Image
        src={STILL_IMAGE}
        alt="Reformer Pilates class at Studio N°8, Lalitpur"
        fill
        priority
        quality={90}
        className="object-cover object-[50%_38%] lg:object-[55%_42%]"
        sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 960px"
      />
    );
  }

  return (
    <>
      <div className="absolute inset-0 bg-cream" aria-hidden />
      <video
        className={`absolute inset-0 h-full w-full object-cover object-[50%_38%] transition-opacity duration-500 lg:object-[55%_42%] ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        onLoadedData={() => setVideoReady(true)}
      >
        <source src={VIDEO} type="video/mp4" />
      </video>
    </>
  );
}
