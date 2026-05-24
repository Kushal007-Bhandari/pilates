import { studio } from "@/lib/data";

export function buildContactWhatsAppUrl(details: {
  name: string;
  email: string;
  message: string;
}): string {
  const text = encodeURIComponent(
    [
      `Hi ${studio.name},`,
      "",
      `Name: ${details.name}`,
      `Email: ${details.email}`,
      "",
      details.message,
    ].join("\n")
  );
  return `${studio.whatsapp}?text=${text}`;
}

export function buildContactMailtoUrl(details: {
  name: string;
  email: string;
  message: string;
}): string {
  const subject = encodeURIComponent(`Enquiry from ${details.name}`);
  const body = encodeURIComponent(
    `${details.message}\n\n— ${details.name}\n${details.email}`
  );
  return `mailto:${studio.email}?subject=${subject}&body=${body}`;
}
