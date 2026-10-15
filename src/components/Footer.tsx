import React from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/config/siteConfig";
import { Logo } from "./Logo";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5">
            <Logo light showTagline={true} />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-md">
              Carewheel provides straightforward, trustworthy advisory services for health and vehicle insurance, empowering families to make clear and confident protection decisions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp Advisory</span>
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#protect" className="transition hover:text-white">
                  What We Protect
                </a>
              </li>
              <li>
                <a href="#health-insurance" className="transition hover:text-white">
                  Health Insurance
                </a>
              </li>
              <li>
                <a href="#vehicle-insurance" className="transition hover:text-white">
                  Vehicle Insurance
                </a>
              </li>
              <li>
                <a href="#why-carewheel" className="transition hover:text-white">
                  Why Carewheel
                </a>
              </li>
              <li>
                <a href="#founder" className="transition hover:text-white">
                  Meet the Founder
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="transition hover:text-white">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faqs" className="transition hover:text-white">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Contact an Advisor
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Information
            </h4>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  {siteConfig.addressLine}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-xs text-slate-300 transition hover:text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs text-slate-300 transition hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 border border-slate-800 p-4 text-xs text-slate-400">
              <p className="font-semibold text-white">Founded by {siteConfig.founder.name}</p>
              <p className="mt-1 text-[11px] leading-relaxed">
                Independent insurance advisory based in Thulattumnada, Kakkuni (Kerala), providing clear guidance on health and vehicle policies.
              </p>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimers & Transparency Note */}
        <div className="mt-12 border-t border-slate-800/80 pt-8 text-[11px] text-slate-400 leading-relaxed">
          <p className="mb-2 font-semibold text-slate-300">
            Regulatory Disclosure & Disclaimer:
          </p>
          <p>
            Carewheel ({siteConfig.domain}) is an independent insurance advisory and consultation support facilitator. Carewheel does not underwrite or issue insurance policies directly. All insurance products, policy terms, waiting periods, network hospitals, deductibles, and claim settlements are governed solely by the respective licensed insurance companies authorized by the Insurance Regulatory and Development Authority of India (IRDAI).
          </p>
          <p className="mt-2">
            Insurance is a subject matter of solicitation. Please read the specific policy terms, conditions, and exclusions carefully before completing any purchase.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="mt-8 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Carewheel ({siteConfig.domain}). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <Link href="#contact" className="hover:text-slate-300 transition">
              Terms &amp; Conditions
            </Link>
            <Link href="#top" className="hover:text-slate-300 transition">
              Back to Top ↑
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
