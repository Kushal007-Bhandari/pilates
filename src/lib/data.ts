export const studio = {
  name: "Align",
  logoLead: "Align",
  logoMark: "Pilates",
  tagline: "Pilates • Spa • Wellness",
  fullName: "Align Pilates & Wellness Studio",
  parentBrand: "A-Fit Studios",
  instagramHandle: "align.byafitstudios",
  metaDescription:
    "Align Pilates & Wellness Studio at A-Fit Studios, One Sky Building — Pilates, spa, yoga, barre & sound healing in Pulchowk, Lalitpur.",
  shortDescription:
    "Align your body, mind & soul — Pilates, spa, and wellness at A-Fit Studios, One Sky Building, Lalitpur.",
  email: "align@byafitstudios.com",
  phone: "+977 9705339977",
  phoneTel: "+9779705339977",
  whatsapp: "https://wa.me/9779705339977",
  instagram: "https://www.instagram.com/align.byafitstudios",
  address: "A-Fit Studios, One Sky Building",
  addressLine2: "Pulchowk, Lalitpur, Nepal",
  hours: "Mon–Sun · Classes & appointments — message us for today's schedule",
  mapsUrl:
    "https://maps.google.com/?q=A-Fit+Studios+One+Sky+Building+Pulchowk+Lalitpur+Nepal",
  /** Paste your Google Form booking URL here when ready */
  bookingFormUrl: "",
  /** Homepage manifesto (727-style full-bleed hero) */
  homeManifestoLead: "Align",
  homeManifesto:
    "Align your body, mind & soul — mindful Pilates, spa rituals, and wellness sessions built for balance, strength, and calm.",
  homeLocationLabel: "One Sky Building · Lalitpur",
  heroImage: "/images/hero-home.jpg",
  /** Full logo — footers & large placements */
  logoImage: "/images/align-logo.jpg",
  /** Icon mark only — header & favicon source */
  logoMarkImage: "/images/align-logo-mark.png",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/trainers", label: "Trainers" },
  { href: "/memberships", label: "Memberships" },
  { href: "/schedule", label: "Schedule" },
  { href: "/testimonials", label: "Stories" },
  { href: "/contact", label: "Contact" },
];

/** Minimal text-only nav on homepage hero (727-style) */
export const homeNavLinks = [
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/memberships", label: "Memberships" },
  { href: "/book", label: "Book a Class" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

export const classes = [
  {
    id: "group",
    title: "Pilates",
    duration: "60 min",
    level: "All levels",
    description:
      "Core fundamentals on the reformer and apparatus — mindful movement, stability, and balanced strength. Where strength meets intention.",
    image: "/images/group-reformer.png",
  },
  {
    id: "private",
    title: "Personal Session",
    duration: "60 min",
    level: "Personalized",
    description:
      "One-on-one Pilates tailored to your body, goals, and experience — ideal for focused progress or beginners who want extra guidance.",
    image: "/images/cadillac-suspended.png",
  },
  {
    id: "yoga",
    title: "Yoga",
    duration: "60 min",
    level: "All levels",
    description:
      "Gentle flow, breathwork, and mindful movement to build strength, improve flexibility, and release tension.",
    image: "/images/duo-mat-work.png",
  },
  {
    id: "barre",
    title: "Barre",
    duration: "50 min",
    level: "All levels",
    description:
      "Sculpt-focused barre with precision, control, and grace — small movements that build long, strong lines and confident posture.",
    image: "/images/lifestyle-wellness.png",
  },
  {
    id: "sound",
    title: "Sound Healing",
    duration: "60 min",
    level: "All welcome",
    description:
      "Therapeutic sound vibrations with singing bowls and gentle tones — deep rest for the nervous system, mind, and body.",
    image: "/images/studio-skylight.png",
  },
  {
    id: "wellness",
    title: "Wellness & Spa",
    duration: "By session",
    level: "Personalized",
    description:
      "Therapeutic bodywork, myofascial release, breathwork, and meditation — intentional care to ease tension and restore balance.",
    image: "/images/studio-curved-wall.png",
  },
];

export const instructorNames = ["Anjali", "Maya", "Sara"] as const;

export const trainers = [
  {
    id: "anjali",
    name: "Anjali",
    role: "Lead Pilates Instructor",
    bio: "Guides reformer and group Pilates with calm precision — programs tailored to strength, alignment, and mindful progress.",
    specialties: ["Reformer", "Core", "All levels"],
  },
  {
    id: "maya",
    name: "Maya",
    role: "Yoga & Breathwork Coach",
    bio: "Leads yoga flow and breath-led sessions that balance mobility, stillness, and nervous-system calm.",
    specialties: ["Yoga", "Breathwork", "Flexibility"],
  },
  {
    id: "sara",
    name: "Sara",
    role: "Wellness & Bodywork Specialist",
    bio: "Supports sound healing, barre, and spa wellness sessions — focused on recovery, release, and whole-body care.",
    specialties: ["Sound healing", "Barre", "Bodywork"],
  },
];

export type MembershipPlan = {
  id: string;
  name: string;
  price: string;
  period?: string;
  description?: string;
  highlighted?: boolean;
};

/** Group class packages (Normal Package) */
export const groupPackages: MembershipPlan[] = [
  { id: "group-4", name: "4 classes", price: "Rs 8,000" },
  { id: "group-8", name: "8 classes", price: "Rs 11,500" },
  { id: "group-10", name: "10 classes", price: "Rs 12,500" },
  { id: "group-12", name: "12 classes", price: "Rs 13,500", highlighted: true },
  { id: "group-16", name: "16 classes", price: "Rs 16,000" },
  { id: "group-20", name: "20 classes", price: "Rs 18,000" },
];

/** Private session packages */
export const privatePackages: MembershipPlan[] = [
  { id: "private-5", name: "5 classes", price: "Rs 11,500" },
  { id: "private-10", name: "10 classes", price: "Rs 22,000" },
  {
    id: "private-dropin",
    name: "Drop-in session",
    price: "Rs 3,000",
    period: "single session",
  },
];

/** Trial & drop-in options */
export const pricingExtras = [
  {
    id: "trial",
    name: "Trial",
    price: "Rs 1,000",
    note: "Valid one time only",
  },
  {
    id: "group-dropin",
    name: "Group class drop-in",
    price: "Rs 1,500",
    note: "Single group class",
  },
] as const;

/** Flat list for booking flow lookups */
export const memberships: MembershipPlan[] = [
  ...groupPackages,
  ...privatePackages,
  ...pricingExtras.map(({ id, name, price, note }) => ({
    id,
    name,
    price,
    period: note,
  })),
];

export type ScheduleSlot = {
  id: string;
  day: string;
  time: string;
  className: string;
  instructor: string;
  instructors: string[];
  spots: number;
  classId: string;
  activityType: "group" | "private";
  location: string;
};

const OPEN_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
] as const;

export { OPEN_DAYS };

const dailyFocus: Record<
  (typeof OPEN_DAYS)[number],
  { className: string; classId: string }
> = {
  Sunday: { className: "Pilates · Reformer", classId: "reformer" },
  Monday: { className: "Yoga Flow", classId: "yoga" },
  Tuesday: { className: "Barre", classId: "barre" },
  Wednesday: { className: "Pilates · Equipment", classId: "equipment" },
  Thursday: { className: "Sound Healing", classId: "sound" },
  Friday: { className: "Wellness & Bodywork", classId: "wellness" },
};

const GROUP_MORNING = "6:00 AM – 11:00 AM";
const GROUP_EVENING = "4:00 PM – 7:00 PM";
const PRIVATE_WINDOW = "11:00 AM – 4:00 PM";

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function buildSchedule(): ScheduleSlot[] {
  const slots: ScheduleSlot[] = [];
  const location = `${studio.address}, ${studio.addressLine2}`;

  for (const day of OPEN_DAYS) {
    const focus = dailyFocus[day];

    slots.push(
      {
        id: `${slug(day)}-group-morning`,
        day,
        time: GROUP_MORNING,
        className: `Group sessions · ${focus.className}`,
        instructor: "Anjali, Maya & Sara",
        instructors: [...instructorNames],
        spots: 8,
        classId: focus.classId,
        activityType: "group",
        location,
      },
      {
        id: `${slug(day)}-group-evening`,
        day,
        time: GROUP_EVENING,
        className: `Group sessions · ${focus.className}`,
        instructor: "Anjali, Maya & Sara",
        instructors: [...instructorNames],
        spots: 8,
        classId: focus.classId,
        activityType: "group",
        location,
      },
      {
        id: `${slug(day)}-private`,
        day,
        time: PRIVATE_WINDOW,
        className: "Personal Session",
        instructor: "By appointment",
        instructors: [...instructorNames],
        spots: 1,
        classId: "private",
        activityType: "private",
        location,
      }
    );
  }

  return slots;
}

export const scheduleActivities = [
  { value: "all", label: "All group activities" },
  { value: "group", label: "Group sessions" },
  { value: "private", label: "Personal sessions" },
  { value: "reformer", label: "Pilates" },
  { value: "yoga", label: "Yoga" },
  { value: "barre", label: "Barre" },
  { value: "sound", label: "Sound healing" },
  { value: "wellness", label: "Wellness & spa" },
] as const;

export const scheduleInstructors = [
  { value: "all", label: "All instructors" },
  ...instructorNames.map((name) => ({ value: name.toLowerCase(), label: name })),
] as const;

export const schedule = buildSchedule();

export const testimonials = [
  {
    id: "1",
    quote:
      "A beautiful wellness space at One Sky — Pilates and spa sessions that leave you aligned, calm, and stronger.",
    name: "Member",
    detail: "Align community",
  },
  {
    id: "2",
    quote:
      "The mix of Pilates, yoga, and sound healing keeps every week feeling fresh. Instructors meet you where you are.",
    name: "Member",
    detail: "Group sessions",
  },
  {
    id: "3",
    quote:
      "Follow us on Instagram @align.byafitstudios for schedules, wellness tips, and studio updates.",
    name: "Align",
    detail: "@align.byafitstudios",
  },
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
      "We're inside A-Fit Studios at One Sky Building, Pulchowk, Lalitpur. Message us on WhatsApp or Instagram if you need directions.",
  },
  {
    id: "pricing",
    question: "How do memberships work?",
    answer:
      "Group packages start at Rs 8,000 for 4 classes. Private packages start at Rs 11,500 for 5 sessions. Trial is Rs 1,000 (one time). See full pricing on our Memberships page or message us on WhatsApp.",
  },
  {
    id: "saturday",
    question: "How do I see today's schedule?",
    answer: "Contact us on WhatsApp or Instagram for the latest class times — schedules may vary by day.",
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
    "Align Pilates & Wellness Studio is a calm wellness center inside A-Fit Studios at One Sky Building, Pulchowk — built around Pilates, spa, and mindful movement.",
  philosophy:
    "Align your body, mind & soul. Our sessions combine Pilates, yoga, barre, sound healing, and therapeutic wellness — tailored to how you feel today and where you want to grow.",
  equipment:
    "Pilates reformer and apparatus sessions sit alongside yoga, barre, sound healing, and spa wellness — all under one roof at A-Fit Studios.",
};
