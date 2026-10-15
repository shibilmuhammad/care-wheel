import React from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/config/siteConfig";
import { ArrowRight, CheckCircle2, MessageCircle, Heart, Car } from "lucide-react";

export function ChooseInsurance() {
  return (
    <section id="protect" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-700">
            Tailored Coverage
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What would you like to protect?
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Compare options with clarity. We guide you through policy features so you pick the coverage that actually fits your life.
          </p>
        </div>

        {/* Coordinated, Matching Sculptural Service Panels */}
        <div className="mt-14 space-y-10">
          
          {/* Panel 1: Health Insurance (Matching 3D Sculptural Art) */}
          <div
            id="health-insurance"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 transition-all duration-300 hover:border-slate-300 hover:shadow-lg"
          >
            <div className="grid grid-cols-1 items-center lg:grid-cols-12">
              
              {/* Image Side: Matching Sculptural Artwork */}
              <div className="relative aspect-[4/3] w-full lg:col-span-6 lg:h-full lg:min-h-[420px] overflow-hidden bg-[#EDEAE3]">
                <Image
                  src="/images/health-sculpture.jpg"
                  alt="Carewheel Health Protection Sculpture — Sculpted hand cradling an emerald crystal heart and family silhouette encircled by a glowing halo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 rounded-xl bg-white/95 px-3 py-1.5 backdrop-blur-md shadow-xs border border-slate-200/80">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Heart className="h-3.5 w-3.5 text-emerald-600 fill-emerald-600" />
                    Family &amp; Health Protection
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 sm:p-10 lg:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    Comprehensive Health Protection
                  </span>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Health Insurance
                  </h3>
                  <p className="mt-3 text-base text-slate-600 leading-relaxed">
                    Explore health insurance options for you and your family. Guard against unexpected hospital expenses with policies that offer genuine peace of mind.
                  </p>

                  {/* Curated Key Pillars */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-sm font-semibold text-slate-900">Cashless Hospital Networks:</strong>
                        <span className="text-sm text-slate-600 ml-1">
                          Direct admission and billing assistance across leading hospital networks.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-sm font-semibold text-slate-900">Waiting Periods Clarified:</strong>
                        <span className="text-sm text-slate-600 ml-1">
                          Clear upfront explanation of pre-existing condition timelines and exclusions.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-sm font-semibold text-slate-900">Family &amp; Senior Citizen Cover:</strong>
                        <span className="text-sm text-slate-600 ml-1">
                          Flexible floater plans that accommodate children and elderly parents.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panel Action Row */}
                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3">
                  <a
                    href={getWhatsAppUrl("health")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xs transition hover:bg-slate-800"
                  >
                    <span>Explore Health Cover</span>
                    <ArrowRight className="h-4 w-4 text-emerald-400" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                    <span>Enquire Online</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* Panel 2: Vehicle Insurance (Matching 3D Sculptural Art) */}
          <div
            id="vehicle-insurance"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 transition-all duration-300 hover:border-slate-300 hover:shadow-lg"
          >
            <div className="grid grid-cols-1 items-center lg:grid-cols-12">
              
              {/* Content Side (Inverted on Desktop for Editorial Rhythm) */}
              <div className="p-8 sm:p-10 lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    Motor &amp; Two-Wheeler Cover
                  </span>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Vehicle Insurance
                  </h3>
                  <p className="mt-3 text-base text-slate-600 leading-relaxed">
                    Find suitable insurance options for your car or bike. Stay road-legal and financially protected against accidents, theft, and third-party liabilities.
                  </p>

                  {/* Curated Key Pillars */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-sm font-semibold text-slate-900">Comprehensive &amp; Third-Party:</strong>
                        <span className="text-sm text-slate-600 ml-1">
                          Protect against own vehicle damages, natural calamities, or statutory liabilities.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-sm font-semibold text-slate-900">Quick Renewal Assistance:</strong>
                        <span className="text-sm text-slate-600 ml-1">
                          Never let your policy lapse with prompt renewal support and NCB protection.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-sm font-semibold text-slate-900">Claims Guidance:</strong>
                        <span className="text-sm text-slate-600 ml-1">
                          Step-by-step paperwork guidance when you need to file an accidental claim.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panel Action Row */}
                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3">
                  <a
                    href={getWhatsAppUrl("vehicle")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xs transition hover:bg-slate-800"
                  >
                    <span>Explore Vehicle Cover</span>
                    <ArrowRight className="h-4 w-4 text-emerald-400" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                    <span>Enquire Online</span>
                  </a>
                </div>

              </div>

              {/* Image Side: Matching Sculptural Artwork */}
              <div className="relative aspect-[4/3] w-full lg:col-span-6 lg:h-full lg:min-h-[420px] overflow-hidden bg-[#EDEAE3] order-1 lg:order-2">
                <Image
                  src="/images/vehicle-sculpture.jpg"
                  alt="Carewheel Vehicle Protection Sculpture — Sculpted hand gently supporting a sleek vehicle sculpture encircled by an emerald halo ring"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 rounded-xl bg-white/95 px-3 py-1.5 backdrop-blur-md shadow-xs border border-slate-200/80">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Car className="h-3.5 w-3.5 text-emerald-600" />
                    Journey &amp; Vehicle Protection
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
