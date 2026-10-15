import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28">
      {/* Background Architectural Canvas & Subtle Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft emerald radial aura aligned behind the artwork */}
        <div className="absolute top-1/4 right-[10%] h-[550px] w-[550px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute top-12 left-10 h-[400px] w-[400px] rounded-full bg-slate-300/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Bold Editorial Typography & Narrative */}
          <div className="relative z-10 flex flex-col lg:col-span-6 xl:col-span-6">
            
            {/* Minimal Brand Concept Eyebrow */}
            <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-emerald-900/10 bg-emerald-50/70 px-4 py-1.5 shadow-xs backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-900">
                The Hand That Protects Every Journey
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.12]">
              Life moves. <br />
              <span className="text-slate-900">We&apos;re here to </span>
              <span className="relative inline-block text-emerald-700">
                protect it.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-emerald-500/35"
                  viewBox="0 0 240 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5C65 3.5 175 3.5 237 8.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-lg text-slate-600 sm:text-xl font-normal leading-relaxed max-w-xl">
              Simple guidance for{" "}
              <span className="font-semibold text-red-600">health and vehicle</span>{" "}
              insurance, so you can make confident decisions for what matters most.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#protect"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
              >
                <span>Find Your Cover</span>
                <ArrowRight className="h-4 w-4 text-emerald-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-xs transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>Talk to an Advisor</span>
                <ArrowUpRight className="h-4 w-4 text-slate-500" />
              </a>
            </div>

            {/* Core Values Strip (Visible on Desktop) */}
            <div className="mt-10 border-t border-slate-200/80 pt-6 hidden lg:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                The Carewheel Promise
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-medium text-slate-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  Gently supporting your decisions
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  Zero pressure, honest comparisons
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  Health &amp; all-vehicle coverage in one place
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Integrated Artwork with Concentric Circular Motif */}
          <div className="relative flex items-center justify-center lg:col-span-6 xl:col-span-6">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none lg:-mr-10 xl:-mr-16">
              
              {/* Subtle Concentric Circular Vector Motifs (The Continuity Orbit) */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
                <svg
                  className="h-[120%] w-[120%] text-slate-200/60 transition-transform duration-700"
                  viewBox="0 0 600 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Outer Orbit */}
                  <circle
                    cx="300"
                    cy="275"
                    r="260"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeDasharray="4 6"
                  />
                  {/* Subtle Accent Halo Ring */}
                  <circle
                    cx="300"
                    cy="275"
                    r="215"
                    stroke="#059669"
                    strokeWidth="1.5"
                    strokeOpacity="0.25"
                  />
                  {/* Inner Ring */}
                  <circle
                    cx="300"
                    cy="275"
                    r="165"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              {/* Main Artwork: Seamlessly Blended Hand-and-Wheel */}
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] lg:scale-105 xl:scale-110">
                <Image
                  src="/images/hero-hand-wheel-transparent.webp"
                  alt="The Hand That Protects Every Journey — Sculptural human hand gently supporting a car wheel encircled by a luminous emerald ring"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                  className="object-contain object-center drop-shadow-[0_20px_35px_rgba(15,23,42,0.06)]"
                />
              </div>

              {/* Mobile Core Values Strip (Visible below artwork on mobile) */}
              <div className="mt-8 border-t border-slate-200/80 pt-5 lg:hidden">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  The Carewheel Promise
                </p>
                <div className="mt-2.5 flex flex-col gap-2 text-xs font-medium text-slate-700">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    Gently supporting your decisions
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    Zero pressure, honest comparisons
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    Health &amp; all-vehicle coverage in one place
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
