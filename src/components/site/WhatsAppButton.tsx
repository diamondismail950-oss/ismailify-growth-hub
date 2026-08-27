import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/site-content";

export function WhatsAppButton() {
  const href = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ISMAILIFY on WhatsApp"
      className="glass-panel fixed right-5 bottom-5 z-40 inline-flex items-center gap-2 rounded-full px-4 py-3 text-xs font-semibold tracking-[0.14em] text-foreground uppercase shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:text-gold sm:px-5"
    >
      <MessageCircle className="h-5 w-5 text-gold" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
