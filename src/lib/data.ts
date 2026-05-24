export const studio = {
  name: "Studio N°8",
  tagline: "Pilates & Wellness",
  fullName: "Studio N°8 — Pilates & Wellness",
  metaDescription:
    "Studio N°8 in Bhaisepati, Lalitpur — reformer Pilates with Cadillac, Wunda Chair, TRX & more. Certified instructors, tailored 60-minute sessions.",
  email: "studion8wellness@gmail.com",
  phone: "+977 9700061310",
  phoneTel: "+9779700061310",
  whatsapp: "https://wa.me/9779700061310",
  instagram: "https://www.instagram.com/studion8pilates",
  address: "Bhaisepati, Awas Gate",
  addressLine2: "Lalitpur, Nepal",
  hours: "Sun–Fri · Group 6–11am & 4–7pm · Private 11am–4pm",
  mapsUrl:
    "https://maps.google.com/?q=Studio+N8+Bhaisepati+Awas+Gate+Lalitpur+Nepal",
  /** Paste your Google Form booking URL here when ready */
  bookingFormUrl: "",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/trainers", label: "Trainers" },
  { href: "/memberships", label: "Memberships" },
  { href: "/schedule", label: "Schedule" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Stories" },
  { href: "/contact", label: "Contact" },
];

export const classes = [
  {
    id: "group",
    title: "Group Session",
    duration: "60 min",
    level: "All levels",
    description:
      "A full-body Pilates workout using the Reformer, Cadillac, Wunda Chair, Spine Corrector, Ladder Barrel, and TRX — rotated thoughtfully throughout the week. Led by certified instructors.",
    image: "/images/group-reformer.png",
  },
  {
    id: "private",
    title: "Personal Session",
    duration: "60 min",
    level: "Personalized",
    description:
      "One-on-one attention reserved daily from 11am–4pm. Programs are tailored to your strength, stamina, fitness level, and any specific physical concerns.",
    image: "/images/cadillac-suspended.png",
  },
  {
    id: "reformer",
    title: "Reformer Focus",
    duration: "60 min",
    level: "All levels",
    description:
      "Overall reformer work, tower, plank, and cardio/jump variations — central to our weekly unlimited membership rotation.",
    image: "/images/reformer-strap.png",
  },
  {
    id: "equipment",
    title: "Equipment Circuit",
    duration: "60 min",
    level: "All levels",
    description:
      "Wunda Chair, Spine Corrector, TRX straps, and more — integrated into our 12-session and unlimited monthly programs.",
    image: "/images/wunda-chairs.png",
  },
];

export const instructorNames = ["Shalu", "Samuyal", "Rohan"] as const;

export const trainers = [
  {
    id: "shalu",
    name: "Shalu",
    role: "Certified Pilates Instructor",
    bio: "Guides group and reformer sessions with calm precision — programs tailored to your strength, stamina, and goals.",
    specialties: ["Reformer", "Core", "All levels"],
  },
  {
    id: "samuyal",
    name: "Samuyal",
    role: "Certified Pilates Instructor",
    bio: "Specializes in equipment circuits — Cadillac, tower, Wunda Chair, and TRX integrated into thoughtful weekly progressions.",
    specialties: ["Equipment", "Cadillac", "Mobility"],
  },
  {
    id: "rohan",
    name: "Rohan",
    role: "Certified Pilates Instructor",
    bio: "Leads personal sessions and supports beginners with patient, one-on-one attention throughout the private hour block.",
    specialties: ["Private sessions", "Beginners", "Posture"],
  },
];

export const memberships = [
  {
    id: "twelve",
    name: "12 Sessions Monthly",
    price: "Contact us",
    period: "per month",
    description:
      "Sunday–Friday group schedule with a rotating three-day focus across reformer and equipment.",
    features: [
      "Day 1 — Overall exercises on Reformer",
      "Day 2 — Straps in hand on Reformer",
      "Day 3 — Wunda Chair / Spine Corrector / TRX",
      "Programs refined monthly to match your progress",
      "Tailored to strength, stamina & fitness level",
    ],
    highlighted: true,
  },
  {
    id: "unlimited",
    name: "Unlimited Monthly",
    price: "Contact us",
    period: "per month",
    description:
      "Sunday–Friday with a dedicated equipment focus each day of the week.",
    features: [
      "Sun — Reformer",
      "Mon — Wunda Chair / TRX",
      "Tue — Spine Corrector",
      "Wed — Tower on Reformer",
      "Thu — Plank on Reformer",
      "Fri — Cardio / Jump on Reformer",
    ],
    highlighted: false,
  },
  {
    id: "private",
    name: "Personal Sessions",
    price: "Contact us",
    period: "by appointment",
    description:
      "Private sessions available daily 11am–4pm, outside of group class hours.",
    features: [
      "60-minute one-on-one sessions",
      "Tailored to your body & concerns",
      "Flexible scheduling within studio hours",
      "Ideal for focused progress & rehab support",
    ],
    highlighted: false,
  },
];

export type ScheduleSlot = {
  id: string;
  day: string;
  time: string;
  className: string;
  instructor: string;
  spots: number;
  classId: string;
};

const OPEN_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
] as const;

const dailyFocus: Record<
  (typeof OPEN_DAYS)[number],
  { className: string; classId: string }
> = {
  Sunday: { className: "Reformer", classId: "reformer" },
  Monday: { className: "Wunda Chair / TRX", classId: "equipment" },
  Tuesday: { className: "Spine Corrector", classId: "equipment" },
  Wednesday: { className: "Tower on Reformer", classId: "reformer" },
  Thursday: { className: "Plank on Reformer", classId: "reformer" },
  Friday: { className: "Cardio / Jump on Reformer", classId: "reformer" },
};

const GROUP_MORNING = "6:00 AM – 11:00 AM";
const GROUP_EVENING = "4:00 PM – 7:00 PM";
const PRIVATE_WINDOW = "11:00 AM – 4:00 PM";

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function buildSchedule(): ScheduleSlot[] {
  const slots: ScheduleSlot[] = [];

  for (const day of OPEN_DAYS) {
    const focus = dailyFocus[day];

    slots.push(
      {
        id: `${slug(day)}-group-morning`,
        day,
        time: GROUP_MORNING,
        className: `Group sessions · ${focus.className}`,
        instructor: "Shalu, Samuyal & Rohan",
        spots: 8,
        classId: focus.classId,
      },
      {
        id: `${slug(day)}-group-evening`,
        day,
        time: GROUP_EVENING,
        className: `Group sessions · ${focus.className}`,
        instructor: "Shalu, Samuyal & Rohan",
        spots: 8,
        classId: focus.classId,
      },
      {
        id: `${slug(day)}-private`,
        day,
        time: PRIVATE_WINDOW,
        className: "Personal Session",
        instructor: "By appointment",
        spots: 1,
        classId: "private",
      }
    );
  }

  return slots;
}

export const schedule = buildSchedule();

export const testimonials = [
  {
    id: "1",
    quote:
      "Every session feels thoughtfully planned — the equipment rotation keeps things fresh and challenging in the best way.",
    name: "Member",
    detail: "Studio N°8 community",
  },
  {
    id: "2",
    quote:
      "A calm, beautiful space in Lalitpur. The instructors meet you where you are — beginners and experienced movers alike.",
    name: "Member",
    detail: "Group sessions",
  },
  {
    id: "3",
    quote:
      "Follow us on Instagram @studion8pilates for stories, schedules, and updates from the studio.",
    name: "Studio N°8",
    detail: "@studion8pilates",
  },
];

export const galleryImages = [
  { id: "1", src: "/images/studio-skylight.png", alt: "Studio N°8 — light-filled reformer studio with skylight" },
  { id: "2", src: "/images/studio-curved-wall.png", alt: "Studio interior with N°8 branding and curved wall" },
  { id: "3", src: "/images/group-reformer.png", alt: "Group reformer class with magic circles" },
  { id: "4", src: "/images/reformer-strap.png", alt: "Reformer session at Studio N°8" },
  { id: "5", src: "/images/cadillac-suspended.png", alt: "Cadillac tower work" },
  { id: "6", src: "/images/cadillac-inverted.png", alt: "Advanced Cadillac inversion" },
  { id: "7", src: "/images/barrel-duo-stretch.png", alt: "Ladder barrel stretch with N°8 equipment" },
  { id: "8", src: "/images/wunda-chairs.png", alt: "Wunda chairs by the studio windows" },
  { id: "9", src: "/images/equipment-branded.png", alt: "N°8 branded Pilates apparatus" },
  { id: "10", src: "/images/ladder-barrel-brand.png", alt: "Ladder barrel with Studio N°8 logo" },
  { id: "11", src: "/images/reformer-closeup.png", alt: "Reformer upholstery and wood frame detail" },
  { id: "12", src: "/images/studio-props.png", alt: "Organized props and reformer in the studio" },
  { id: "13", src: "/images/duo-mat-work.png", alt: "Partner mat work in the studio" },
  { id: "14", src: "/images/lifestyle-wellness.png", alt: "Wellness moment on the reformer at Studio N°8" },
];

export const days = [...OPEN_DAYS];

export const faqs = [
  {
    id: "beginners",
    question: "I'm new to Pilates — is that okay?",
    answer:
      "Absolutely. Beginners are welcome in group sessions. Instructors tailor exercises to your level. For extra guidance, book a personal session (11am–4pm, Sun–Fri).",
  },
  {
    id: "wear",
    question: "What should I wear?",
    answer:
      "Comfortable fitted clothing that lets you move freely. Grip socks are recommended on the reformer. Avoid loose zippers or jewellery that could catch on equipment.",
  },
  {
    id: "arrive",
    question: "When should I arrive?",
    answer:
      "Please arrive 10 minutes before your session so you can settle in. Late arrivals may need to join the next available slot for safety.",
  },
  {
    id: "parking",
    question: "Parking & directions",
    answer:
      "We're at Bhaisepati, Awas Gate, Lalitpur. Message us on WhatsApp if you need directions — we'll help you find the studio.",
  },
  {
    id: "pricing",
    question: "How do memberships work?",
    answer:
      "We offer 12-session monthly, unlimited monthly, and personal sessions. Pricing is confirmed directly with the studio — contact us on WhatsApp or Instagram @studion8pilates.",
  },
  {
    id: "saturday",
    question: "Are you open on Saturday?",
    answer: "The studio is closed on Saturdays. Group and private sessions run Sunday through Friday.",
  },
];

export const policies = {
  cancellation:
    "Please cancel or reschedule at least 12 hours in advance via WhatsApp so we can offer your spot to someone else.",
  noShow:
    "Repeated late cancellations or no-shows may affect future bookings — we keep policies fair for the whole community.",
};

export const studioStory = {
  intro:
    "Studio N°8 is a Pilates & Wellness space in Bhaisepati, Lalitpur — built around precision equipment, certified instruction, and programs that evolve with you.",
  philosophy:
    "Exercises are thoughtfully tailored to each individual's strength, stamina, fitness level, and any specific physical concerns. Programs are refined and elevated monthly to align with your evolving progress — ensuring a dynamic, results-driven Pilates experience.",
  equipment:
    "Our sessions feature the Reformer, Cadillac, Wunda Chair, Spine Corrector, Ladder Barrel, and TRX bands, incorporated throughout the week.",
};
