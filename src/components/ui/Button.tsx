import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-cream hover:bg-espresso shadow-sm hover:shadow-md",
  secondary:
    "bg-sand text-charcoal hover:bg-stone/40",
  ghost: "bg-transparent text-charcoal hover:bg-sand/60",
  outline:
    "border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-white/50",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  ...props
}: Props) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/25 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
