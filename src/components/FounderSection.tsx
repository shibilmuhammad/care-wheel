import React from "react";
import Image from "next/image";
import { siteConfig, getWhatsAppUrl } from "@/config/siteConfig";
import { MessageCircle, Phone, Mail, MapPin, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";

export function FounderSection() {
  const commitments = [
    {
      title: "Honest & Unbiased Comparisons",
      desc: "No sales quotas or aggressive pitches. We evaluate multiple IRDAI-approved insurance providers to recommend policies that truly fit your family's needs and budget.",
    },
    {
      title: "Direct Human Assistance",
      desc: "Skip corporate call centres and automated chatbots. You connect directly with me and our advisory desk whenever you need policy clarity or claims assistance.",
    },
    {
      title: "Rooted in Our Kerala Community",
      desc: "Based locally at Thulattumnada, Kakkuni. We understand local hospital networks, regional requirements, and provide approachable, transparent service.",
    },
  ];

  return (
    <section id="founder" className="relative py-20 md:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-slate-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Overline & Heading */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200/60">
            <HeartHandshake className="h-3.5 w-3.5 text-emerald-700" />
            <span>Personal Advisory</span>
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
            Meet the founder behind Carewheel.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Insurance is too important to be left to automated call centres or aggressive sales scripts. Meet the advisor who puts your interests first.
          </p>
        </div>

        {/* Main Grid: Founder Profile & Editorial Content */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Photo Card */}
          <div className="lg:col-span-5">
            <div className="group relative rounded-3xl bg-gradient-to-b from-slate-100 to-slate-200/70 p-2 sm:p-3 shadow-xl border border-slate-200/80">
              {/* Photo Container */}
              <div className="relative aspect-[4/5] max-h-[520px] w-full overflow-hidden rounded-2xl bg-slate-900">
                <Image
                  src={siteConfig.founder.image}
                  alt={`${siteConfig.founder.name} — Founder of Carewheel`}
                  fill
                  priority
                  className="object-cover object-[center_20%] transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />

                {/* Badge on photo bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-slate-950 shadow-md">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Founder & Advisor</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                    {siteConfig.founder.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5 text-xs text-slate-200 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Thulattumnada, Kakkuni (Kerala)</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Bar below photo */}
              <div className="mt-3 grid grid-cols-2 gap-2 p-1">
                <a
                  href={getWhatsAppUrl("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 px-3 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 px-3 text-xs font-semibold text-slate-800 shadow-2xs transition hover:bg-slate-50"
                >
                  <Phone className="h-3.5 w-3.5 text-slate-600" />
                  <span>Call Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Vision, Story & Commitments */}
          <div className="lg:col-span-7">
            {/* Quote Block */}
            <div className="relative pl-6 border-l-3 border-emerald-600">
              <p className="text-xl sm:text-2xl font-semibold text-slate-900 leading-snug tracking-tight">
                &ldquo;When people buy health or vehicle insurance, they aren&apos;t just buying paper—they are securing peace of mind for unexpected moments. My mission is to ensure you know exactly what you are protected for, with zero pressure and zero confusion.&rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-700">
                — {siteConfig.founder.name}, <span className="font-normal text-slate-500">Founder of Carewheel</span>
              </p>
            </div>

            {/* Founder Story Paragraphs */}
            <div className="mt-6 space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                Too many families and vehicle owners in Kerala end up with insurance policies they don&apos;t fully understand—only to face surprises when filing a claim. Confusing clauses, undisclosed copay terms, and aggressive sales calls make the entire experience stressful.
              </p>
              <p>
                At Carewheel, we operate on a completely transparent model: we take the time to listen to your specific situation, review the best options across authorized providers, and explain everything in simple, everyday language.
              </p>
            </div>

            {/* 3 Core Commitments */}
            <div className="mt-8 space-y-4 pt-6 border-t border-slate-200">
              {commitments.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Details Card */}
            <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200/90 p-5 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Direct Office & Contact
                </span>
                <p className="text-xs sm:text-sm font-medium text-slate-900">
                  {siteConfig.addressLine}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-3 w-3 text-emerald-600" />
                    <span>{siteConfig.phoneDisplay}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-3 w-3 text-emerald-600" />
                    <span>{siteConfig.email}</span>
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition"
              >
                <span>Request Consultation</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
