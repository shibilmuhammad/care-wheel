"use client";

import React from "react";
import { siteConfig, getWhatsAppUrl } from "@/config/siteConfig";
import { Phone, MessageCircle } from "lucide-react";

export function MobileBottomBar() {
  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-2 border-t border-slate-200/90 bg-white/95 px-3 py-2.5 backdrop-blur-md sm:hidden shadow-lg"
    >
      {/* Click to Call */}
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-semibold text-slate-800 shadow-xs active:bg-slate-100"
        aria-label="Call Carewheel advisor directly"
      >
        <Phone className="h-4 w-4 text-slate-700" />
        <span>Call Advisor</span>
      </a>

      {/* WhatsApp Message */}
      <a
        href={getWhatsAppUrl("general")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-xs font-semibold text-white shadow-md active:bg-slate-800"
        aria-label="Chat with Carewheel on WhatsApp"
      >
        <MessageCircle className="h-4 w-4 text-emerald-400" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
