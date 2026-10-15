"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const faqs: FaqItem[] = [
    {
      question: "What is Carewheel?",
      answer:
        "Carewheel is an independent insurance advisory and consultation service. We assist individuals and families in understanding, comparing, and selecting suitable health and vehicle insurance options from authorized insurance providers without confusing jargon.",
    },
    {
      question: "What types of insurance can I enquire about?",
      answer:
        "You can enquire about individual and family health insurance plans, as well as vehicle insurance for cars, two-wheelers (scooters and motorbikes), and commercial vehicles. We provide guidance on both fresh policies and renewals.",
    },
    {
      question: "How do I choose the right health insurance?",
      answer:
        "The ideal health insurance depends on your family's age, medical history, budget, and local hospital network preference. We help you evaluate essential factors such as room rent limits, cashless hospital availability, pre-existing condition waiting periods, and restore benefits so you pick a plan that fits your real-world needs.",
    },
    {
      question: "What is the difference between comprehensive and third-party vehicle insurance?",
      answer:
        "Third-party insurance is legally mandated in India and covers financial liabilities for injury, death, or property damage caused to another person by your vehicle. Comprehensive insurance covers both third-party liabilities and damage to your own vehicle resulting from accidents, fire, theft, or natural disasters.",
    },
    {
      question: "What information do I need for an insurance enquiry?",
      answer:
        "For health insurance, having approximate ages of family members and any known pre-existing conditions is helpful. For vehicle insurance, details such as vehicle make, registration year, and previous policy expiry date are useful. Even if you don't have all details handy, our advisors will guide you through what is needed.",
    },
    {
      question: "Can I enquire about insurance for my family?",
      answer:
        "Yes, absolutely. We regularly help customers evaluate family floater health plans, individual covers for dependent elderly parents, and policies tailored to young children.",
    },
    {
      question: "How can I contact Carewheel?",
      answer:
        `You can reach us directly via WhatsApp, call our advisory desk at ${siteConfig.phoneDisplay}, email us at ${siteConfig.email}, or submit the short enquiry form on this website. Our office is located at ${siteConfig.addressLine}. Our founder Rajilal and the team operate Monday to Saturday from 9:00 AM to 7:00 PM IST.`,
    },
    {
      question: "Does Carewheel issue insurance policies directly?",
      answer:
        "No. Carewheel is an independent advisory and facilitation service, not an underwriting insurance company. All insurance policies are issued, underwritten, and claims settled directly by authorized, IRDAI-licensed insurance companies in India. We assist you in reviewing options, understanding policy conditions, and completing paperwork smoothly.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-700">
            Frequently Asked Questions
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Got questions? We have answers.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear, honest answers about our advisory services, insurance choices, and how we work with you.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="mt-12 space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all ${
                  isOpen
                    ? "border-slate-300 bg-white shadow-sm"
                    : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-slate-100 text-slate-900"
                        : "bg-slate-50 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-6 pt-0 sm:px-6"
                  >
                    <div className="border-t border-slate-100 pt-4 text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helpful Note */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center text-xs text-slate-500">
          <p>
            Please note: Policy coverage, premiums, waiting periods, cashlessness limits, and eligibility depend strictly on the respective insurance company&apos;s filed terms and IRDAI regulations.
          </p>
        </div>

      </div>
    </section>
  );
}
