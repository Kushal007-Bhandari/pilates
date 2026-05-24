import { studio } from "@/lib/data";
import type { ScheduleSlot } from "@/lib/data";

export function buildBookingWhatsAppUrl(
  slot: ScheduleSlot | null,
  details?: {
    name?: string;
    phone?: string;
    notes?: string;
    planName?: string;
    classInterest?: string;
  }
): string {
  const lines = [
    `Hi ${studio.name}, I'd like to book a class.`,
    "",
    slot
      ? `Session: ${slot.className}\nDay: ${slot.day}\nTime: ${slot.time}`
      : details?.planName
        ? `Membership interest: ${details.planName}`
        : details?.classInterest
          ? `Class interest: ${details.classInterest}`
          : "I'd like to enquire about class availability.",
    details?.name ? `Name: ${details.name}` : "",
    details?.phone ? `Phone: ${details.phone}` : "",
    details?.notes ? `Notes: ${details.notes}` : "",
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `${studio.whatsapp}?text=${text}`;
}

export function openExternalBooking(slot: ScheduleSlot | null) {
  if (studio.bookingFormUrl) {
    const url = new URL(studio.bookingFormUrl);
    if (slot) {
      url.searchParams.set("entry.class", `${slot.day} ${slot.time} — ${slot.className}`);
    }
    window.open(url.toString(), "_blank", "noopener,noreferrer");
    return true;
  }
  return false;
}
