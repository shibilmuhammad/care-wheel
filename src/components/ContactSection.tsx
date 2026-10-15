"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig, getWhatsAppUrl } from "@/config/siteConfig";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    insuranceType: "Health",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = "Please enter your full name";
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Assemble structured enquiry message
    const messageLines = [
      `*New Insurance Enquiry via Carewheel.in*`,
      `👤 *Name:* ${formData.name.trim()}`,
      `📞 *Phone:* ${formData.phone.trim()}`,
      `🛡️ *Cover Needed:* ${formData.insuranceType}`,
    ];

    if (formData.message.trim()) {
      messageLines.push(`💬 *Note:* ${formData.message.trim()}`);
    }

    const formattedMessage = messageLines.join("\n");
    const waUrl = getWhatsAppUrl("custom", formattedMessage);

    setSubmittedUrl(waUrl);

    // Open WhatsApp in a new tab/window
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-700">
            Get in Touch
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Not sure where to start? Let&apos;s talk.
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Have a question about a health plan or looking to renew your vehicle insurance? Our advisors are ready to assist you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Actions */}
          <div className="flex flex-col justify-between rounded-3xl bg-slate-900 p-8 sm:p-10 text-white lg:col-span-5 shadow-lg">
            <div>
              {/* Founder Profile Badge */}
              <div className="flex items-center gap-3.5 pb-6 border-b border-slate-800">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-emerald-500/60 shrink-0 bg-slate-800">
                  <Image
                    src={siteConfig.founder.image}
                    alt={`${siteConfig.founder.name} — Founder of Carewheel`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{siteConfig.founder.name}</span>
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" title="Online for inquiries" />
                  </h4>
                  <p className="text-xs text-emerald-400 font-medium">Founder & Insurance Advisor</p>
                  <p className="text-[11px] text-slate-400">Thulattumnada, Kakkuni 673507</p>
                </div>
              </div>

              <div className="mt-6">
                <span className="inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-emerald-400">
                  Direct Human Support
                </span>

                <h3 className="mt-3 text-2xl font-bold sm:text-3xl text-white">
                  Connect with an advisor today
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Skip the call centres and automated chatbots. Talk directly to Rajilal or our local team who will listen and guide you properly.
                </p>
              </div>

              {/* Direct Action Cards */}
              <div className="mt-8 space-y-4">
                {/* WhatsApp Action */}
                <a
                  href={getWhatsAppUrl("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl bg-slate-800/80 p-4 border border-slate-700/60 transition hover:bg-slate-800 hover:border-slate-600"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-bold">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                        WhatsApp Chat
                      </span>
                      <span className="text-sm font-bold text-white">
                        {siteConfig.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-white transition" />
                </a>

                {/* Phone Call Action */}
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="group flex items-center justify-between rounded-2xl bg-slate-800/80 p-4 border border-slate-700/60 transition hover:bg-slate-800 hover:border-slate-600"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-slate-900 font-bold">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                        Call Advisory Desk
                      </span>
                      <span className="text-sm font-bold text-white">
                        {siteConfig.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-white transition" />
                </a>
              </div>

              {/* Meta details */}
              <div className="mt-8 pt-6 border-t border-slate-800 space-y-2.5 text-xs text-slate-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.addressLine}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{siteConfig.operatingHours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-[11px] text-slate-400">
              🛡️ Zero spam promise. We only respond to your specific enquiries.
            </div>
          </div>

          {/* Right Column: Short Enquiry Form */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 sm:p-10 lg:col-span-7">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Request an enquiry
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Fill in your details below and we will connect with you via WhatsApp or phone with suitable policy options.
            </p>

            {/* Clear On-Screen Confirmation */}
            {submittedUrl && (
              <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-emerald-900">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">
                      Enquiry prepared successfully!
                    </h4>
                    <p className="mt-1 text-xs text-emerald-800 leading-relaxed">
                      WhatsApp has been launched to connect directly with a Carewheel advisor. If the chat window did not open automatically, click below to proceed:
                    </p>
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-slate-800"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Open WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  placeholder="e.g. Anand Menon"
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                    errors.name ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                  }`}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-sm font-semibold text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    placeholder="9876543210"
                    maxLength={14}
                    className={`w-full rounded-xl border bg-white pl-13 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                      errors.phone ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                    }`}
                    aria-invalid={!!errors.phone}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Insurance Type */}
              <div>
                <label
                  htmlFor="insuranceType"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Insurance Type
                </label>
                <select
                  id="insuranceType"
                  value={formData.insuranceType}
                  onChange={(e) =>
                    setFormData({ ...formData, insuranceType: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="Health">Health Insurance (Individual / Family)</option>
                  <option value="All Vehicles">Vehicle Insurance (Any Vehicle)</option>
                  <option value="Car">Private Car Insurance</option>
                  <option value="Two-Wheeler">Two-Wheeler (Scooter / Bike)</option>
                  <option value="Commercial Vehicle">Commercial Vehicle (Taxi, Auto, Pickup, Truck, Bus)</option>
                  <option value="Electric Vehicle">Electric Vehicle (EV)</option>
                  <option value="Other">Other Insurance Enquiry</option>
                </select>
              </div>

              {/* Optional Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Optional Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us any specific requirements or questions you have..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950"
              >
                <Send className="h-4 w-4 text-emerald-400" />
                <span>Submit &amp; Connect via WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-slate-500 pt-1">
                Your personal details are kept strictly private and used solely to respond to your enquiry.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
