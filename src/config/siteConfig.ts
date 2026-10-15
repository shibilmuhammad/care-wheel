export interface SiteConfig {
  brandName: string;
  domain: string;
  tagline: string;
  headline: string;
  supportingCopy: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string; // digits only with country code e.g. 919744734153
  email: string;
  location: string;
  addressLine: string;
  operatingHours: string;
  founder: {
    name: string;
    role: string;
    image: string;
    location: string;
    bio: string;
  };
  messages: {
    health: string;
    vehicle: string;
    general: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "Carewheel",
  domain: "carewheel.in",
  tagline: "Protection for every part of your life.",
  headline: "Life moves. We're here to protect it.",
  supportingCopy:
    "Simple guidance for health and vehicle insurance, so you can make confident decisions for what matters most.",
  phoneDisplay: "+91 97447 34153",
  phoneRaw: "+919744734153",
  whatsappNumber: "919744734153",
  email: "health@carewheel.in",
  location: "Thulattumnada, Kakkuni 673507, Kerala",
  addressLine: "Carewheel, Thulattumnada, Kakkuni, Kerala 673507",
  operatingHours: "Monday – Saturday, 9:00 AM – 7:00 PM IST",
  founder: {
    name: "Rajilal",
    role: "Founder & Insurance Advisor",
    image: "/images/rajilal-founder.webp",
    location: "Thulattumnada, Kakkuni 673507, Kerala",
    bio: "Dedicated to providing honest, transparent, and pressure-free health and vehicle insurance advice to individuals and families across Kerala.",
  },
  messages: {
    health: "Hello Carewheel, I would like to know about health insurance options.",
    vehicle: "Hello Carewheel, I would like to know about vehicle insurance.",
    general: "Hello Carewheel, I would like to know more about your insurance services.",
  },
};

/**
 * Builds a universal WhatsApp click-to-chat URL with a prefilled English message.
 */
export function getWhatsAppUrl(
  type: "health" | "vehicle" | "general" | "custom" = "general",
  customMessage?: string
): string {
  let text = siteConfig.messages.general;

  if (type === "health") {
    text = siteConfig.messages.health;
  } else if (type === "vehicle") {
    text = siteConfig.messages.vehicle;
  } else if (type === "custom" && customMessage) {
    text = customMessage;
  }

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
