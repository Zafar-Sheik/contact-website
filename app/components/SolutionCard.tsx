//components/ServiceCard.tsx
"use client";

import Image from "next/image";

type ServiceCardProps = {
  title: string;
  tagline: string;

  image: string;
  dark?: boolean;
};

export default function SolutionCard({
  title,
  tagline,

  image,
  dark = false,
}: ServiceCardProps) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 min-w-[220px] sm:min-w-[260px] md:min-w-[300px] h-[380px] ${
        dark
          ? "bg-[#0a1a2f] text-white border-gray-700 hover:border-gray-500"
          : "bg-white text-gray-900 border-gray-200 hover:border-gray-300"
      } hover:shadow-lg`}
    >
      {/* Top Section — Text (1/4 height) */}
      <div className="flex flex-col justify-center flex-[0.25] px-5 sm:px-6 py-4 sm:py-5 z-10 relative bg-opacity-80 backdrop-blur-sm">
        <h2 className="text-base sm:text-lg font-semibold mb-1 leading-snug">
          {title}
        </h2>
        <p
          className={`text-xs sm:text-sm font-medium leading-snug ${
            dark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {tagline}
        </p>
      </div>

      {/* Bottom Section — Image (3/4 height) */}
      <div className="relative flex-[0.75] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
      </div>
    </div>
  );
}
