import Image from "next/image";
import Link from "next/link";
import { studio } from "@/lib/data";

type Props = {
  variant?: "header" | "footer";
  /** Header over dark hero — subtle cream backing so the logo reads */
  onHero?: boolean;
};

export function StudioLogo({ variant = "header", onHero = false }: Props) {
  if (variant === "footer") {
    return (
      <Link
        href="/"
        className="group inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2"
      >
        <Image
          src={studio.logoImage}
          alt={studio.fullName}
          width={906}
          height={906}
          className="h-auto w-36 transition-opacity group-hover:opacity-90 md:w-40"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        onHero
          ? "rounded-md bg-cream/92 px-2 py-1 shadow-sm backdrop-blur-sm focus-visible:ring-cream/40 focus-visible:ring-offset-transparent"
          : "focus-visible:ring-charcoal/20"
      }`}
    >
      <Image
        src={studio.logoImage}
        alt={studio.fullName}
        width={906}
        height={906}
        priority
        className="h-9 w-auto object-contain transition-opacity group-hover:opacity-90 sm:h-10"
      />
    </Link>
  );
}
