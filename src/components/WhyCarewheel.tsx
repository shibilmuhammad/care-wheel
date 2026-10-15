import React from "react";
import { ArrowUpRight } from "lucide-react";

export function WhyCarewheel() {
  const benefits = [
    {
      number: "01",
      title: "Guidance that puts your needs first",
      description:
        "We take the time to understand your personal and family requirements before discussing policies. You get honest advice tailored to your budget and stage of life.",
      subtext: "No sales pressure, no biased quotas.",
    },
    {
      number: "02",
      title: "Clear explanations of available options",
      description:
        "Insurance documentation can be confusing. We translate complex terms—such as copays, deductibles, and waiting periods—into everyday language so you know exactly what is covered.",
      subtext: "Complete transparency before you commit.",
    },
    {
      number: "03",
      title: "Help with insurance-related questions",
      description:
        "From renewing an existing policy to understanding claim submission steps, an approachable advisor is just a message or call away whenever you need clarity.",
      subtext: "Direct human contact on WhatsApp or phone.",
    },
  ];

  return (
    <section id="why-carewheel" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Editorial Header */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-700">
              The Carewheel Approach
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight">
              Insurance can be simpler.
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Most people find insurance overwhelming because of fine print and aggressive sales calls. We built Carewheel to offer an approachable, pressure-free alternative.
            </p>

            {/* Quick Consultation Callout Box */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900">
                Have a question right now?
              </h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Connect directly with our advisory desk. We are happy to clarify any doubts regarding your current or future coverage.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition"
              >
                <span>Ask an advisor</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Staggered Editorial List */}
          <div className="lg:col-span-7 space-y-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-all hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Subtle Geometric Number */}
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-300 transition-colors group-hover:text-emerald-600 shrink-0">
                    {item.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="mt-3 inline-block rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                      {item.subtext}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
