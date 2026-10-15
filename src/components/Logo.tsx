import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  light?: boolean;
}

export function Logo({ className = "", showTagline = false, light = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-95 ${className}`}
      aria-label="Carewheel - Home"
    >
      {/* Precision Geometric Symbol: Shield + Motion Wheel Hybrid */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          aria-hidden="true"
        >
          {/* Subtle Outer Protective Crest (Shield) */}
          <path
            d="M18 4L28 8.5V17.5C28 23.5 23.8 29.2 18 31.5C12.2 29.2 8 23.5 8 17.5V8.5L18 4Z"
            stroke="#059669"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Continuous Journey Arc (Wheel Motif) */}
          <circle
            cx="18"
            cy="17.5"
            r="5.5"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeDasharray="18 5"
            strokeLinecap="round"
          />
          {/* Central Anchor Point */}
          <circle cx="18" cy="17.5" r="1.75" fill="#10B981" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight leading-none">
          <span
            className={`text-xl font-bold tracking-tight ${
              light ? "text-white" : "text-slate-900"
            }`}
          >
            Care<span className="text-emerald-600">wheel</span>
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[11px] font-medium tracking-wide ${
              light ? "text-slate-400" : "text-slate-500"
            } mt-0.5`}
          >
            Protection for every part of your life
          </span>
        )}
      </div>
    </Link>
  );
}
