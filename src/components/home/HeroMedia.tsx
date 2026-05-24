"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const POSTER = "/images/group-reformer.png";
const VIDEO = "/videos/hero.mp4";

export function HeroMedia() {
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);
  const showVideo = reduceMotion === false;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <>
      <Image
        src={POSTER}
        alt="Reformer Pilates class at Studio N°8, Lalitpur"
        fill
        priority
        quality={90}
        className={`object-cover object-[50%_38%] lg:object-[55%_42%] ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
        sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 960px"
        aria-hidden={showVideo}
      />
      {showVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover object-[50%_38%] lg:object-[55%_42%]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={POSTER}
          aria-hidden
        >
          <source src={VIDEO} type="video/mp4" />
        </video>
      )}
    </>
  );
}
