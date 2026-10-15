import React from "react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell us what you need",
      description: "Share whether you need health protection for your family, or coverage for any type of vehicle (private or commercial).",
    },
    {
      number: "02",
      title: "Understand your available options",
      description: "We walk you through suitable choices, premiums, hospital networks, and terms in plain language.",
    },
    {
      number: "03",
      title: "Choose a policy that suits your needs",
      description: "Pick your cover with full confidence, knowing the exact waiting periods and conditions beforehand.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-700">
            A Straightforward Process
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Three simple steps.
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            No endless paperwork or confusing loops. Here is how we help you find the right insurance.
          </p>
        </div>

        {/* Clean Sequence: Horizontal on Desktop, Vertical on Mobile */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 transition-all hover:bg-white hover:border-slate-300 hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-emerald-700 uppercase">
                    Step {item.number}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70">
                <span className="text-[11px] font-medium text-slate-400">
                  Step {index + 1} of 3
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
