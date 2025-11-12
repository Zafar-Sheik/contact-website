"use client";

import { motion } from "framer-motion";
import {
  Shield,
  BarChart3,
  MessageSquare,
  Cloud,
  Zap,
  Users,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const WhatWeDo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const features = [
    {
      icon: Cloud,
      title: "Real-time Cloud Backup",
      description:
        "Ensure your data is always secure and accessible with reliable cloud solutions.",
      dark: false,
    },
    {
      icon: BarChart3,
      title: "Business Dashboards",
      description:
        "Extract meaningful insights from your accounting or invoicing systems.",
      dark: true,
    },
    {
      icon: MessageSquare,
      title: "Bulk Messaging",
      description:
        "Connect with customers instantly through customized messaging platforms.",
      dark: false,
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Keep your business protected with robust security measures.",
      dark: true,
    },
    {
      icon: Zap,
      title: "Process Streamlining",
      description:
        "Simplify management and enhance productivity with smart tools.",
      dark: false,
    },
    {
      icon: Users,
      title: "Local Support",
      description: "Get personalized, locally supported technology solutions.",
      dark: true,
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile
      ? scrollRef.current.querySelector(".snap-item")?.clientWidth || 0
      : 280;

    const scrollAmount = isMobile ? cardWidth : 280;

    scrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // Detect scroll position to show/hide arrows
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScrollButtons = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    };

    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  return (
    <section
      id="what-we-do"
      className="relative py-12 bg-slate-50 overflow-hidden"
    >
      <div className="relative mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pl-4 text-left mb-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-2.5 py-1">
              <Zap className="w-3 h-3 text-blue-500" />
              <span className="text-black text-[10px] font-bold">
                Our Expertise
              </span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1">
            What We Do
          </h2>

          <p className="text-slate-600 text-xs max-w-2xl">
            Contact Online Solutions offers cost-effective, customised software
            solutions designed specifically for small to medium-sized
            businesses.
          </p>
        </motion.div>

        {/* Scroll Container */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <motion.button
              onClick={() => handleScroll("left")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black rounded-full p-1.5 shadow-md hover:scale-110 transition hidden sm:block"
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <motion.button
              onClick={() => handleScroll("right")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black rounded-full p-1.5 shadow-md hover:scale-110 transition hidden sm:block"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          )}

          {/* Cards Container with Border Left */}
          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory border-l-2 border-slate-200 "
            style={{
              scrollBehavior: "smooth",
              marginInlineEnd: "-1.5rem",
              scrollbarWidth: "none",
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex-shrink-0 snap-item snap-center"
                style={{
                  minWidth: "min(75vw, 280px)",
                  // Mobile: center each card, Desktop: keep minimal margins
                  marginLeft:
                    "clamp(0px, calc((100vw - min(75vw, 280px)) / 2), 2vw)",
                  marginRight:
                    "clamp(0px, calc((100vw - min(75vw, 280px)) / 2), 4vw)",
                }}
              >
                <div
                  className={`group relative h-full rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 ${
                    feature.dark
                      ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white"
                      : "bg-white text-slate-900"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-lg mb-4 ${
                      feature.dark
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <feature.icon className="w-4 h-4" />
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-base font-semibold mb-3 ${
                      feature.dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      feature.dark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {feature.description}
                  </p>

                  {/* Hover effect - Only for dark cards */}
                  {feature.dark && (
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!scrollRef.current) return;
                  const cardWidth =
                    scrollRef.current.querySelector(".snap-item")
                      ?.clientWidth || 0;
                  scrollRef.current.scrollTo({
                    left: cardWidth * index,
                    behavior: "smooth",
                  });
                }}
                className="w-1.5 h-1.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors"
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
