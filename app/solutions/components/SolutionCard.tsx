"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Solution = {
  section: string;
  image: string;
  title: string;
  bottomTitle: string;
  subtitle: string;
  catchLine: string;
  description: string;
  extraContent: string;
  colour: string;
};

// Add proper type for motion div props
type MotionDivProps = {
  children: React.ReactNode;
  initial: { opacity: number; x: number };
  animate: { opacity: number; x: number };
  transition: { duration: number };
  className?: string;
};

const SolutionCard = ({
  section,
  image,
  title,
  bottomTitle,
  subtitle,
  catchLine,
  description,
  extraContent,
  colour,
}: Solution) => {
  return (
    <section
      id={section}
      className="pt-20 sm:pt-24 md:pt-25 bg-gray-50 flex items-center justify-center px-3 sm:px-6 py-0"
    >
      <div className="w-full max-w-5xl bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[50vh] md:min-h-[55vh]">
        {/* Left Side - Image */}
        <div className="relative w-full md:w-1/2 h-44 sm:h-56 md:h-auto">
          <Image
            src={image}
            alt={`${title} Promo`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-3 sm:px-4">
            <h1 className="text-lg sm:text-2xl md:text-4xl font-black leading-tight drop-shadow-md">
              {title}
            </h1>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
              {bottomTitle}
            </h2>
          </div>
        </div>

        {/* Right Side - Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-white px-4 sm:px-8 py-6 sm:py-10 flex flex-col justify-center relative"
        >
          {/* Headline */}
          <div className="space-y-3 max-w-md">
            <h1 className="text-base sm:text-s md:text-3xl font-extrabold text-gray-900 leading-snug">
              {subtitle}
              <span className={`text-base sm:text-s block ${colour}`}>
                {catchLine}
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              {description}
            </p>

            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-4">
              {extraContent}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto border border-gray-300 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              Get Quote
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionCard;
