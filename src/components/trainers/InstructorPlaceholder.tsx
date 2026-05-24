type InstructorPlaceholderProps = {
  name: string;
  specialties: string[];
  className?: string;
};

function initialsFrom(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.trim().slice(0, 2).toUpperCase();
}

export function InstructorPlaceholder({
  name,
  specialties,
  className = "",
}: InstructorPlaceholderProps) {
  const initials = initialsFrom(name);
  const specialtyLine = specialties.slice(0, 3).join(" · ");

  return (
    <div
      className={`relative flex h-full min-h-[280px] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-sand/50 to-sand/80 p-8 text-center ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-[0.35]">
        <svg
          className="h-full w-full"
          viewBox="0 0 400 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="200" cy="420" r="180" fill="#E8DFD4" />
          <path
            d="M200 95c-28 0-50 22-50 50s22 50 50 50 50-22 50-50-22-50-50-50z"
            fill="#C4B5A5"
            fillOpacity="0.4"
          />
          <path
            d="M130 200c-8 52 14 108 70 130v75h-35c-12 0-22 10-22 22v18h154v-18c0-12-10-22-22-22h-35v-75c56-22 78-78 70-130"
            stroke="#8B9A84"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
          <path
            d="M155 318c20-18 70-18 90 0"
            stroke="#2C2825"
            strokeWidth="1.25"
            strokeLinecap="round"
            opacity="0.12"
          />
          <ellipse
            cx="200"
            cy="455"
            rx="120"
            ry="28"
            fill="#8B9A84"
            fillOpacity="0.12"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-stone/40 bg-cream/90 shadow-sm backdrop-blur-sm">
          <span className="font-serif text-2xl tracking-wide text-charcoal/80">
            {initials}
          </span>
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.2em] text-stone">
          {specialtyLine}
        </p>
        <p className="mt-6 font-serif text-lg text-charcoal/50">
          Photo coming soon
        </p>
      </div>
    </div>
  );
}
