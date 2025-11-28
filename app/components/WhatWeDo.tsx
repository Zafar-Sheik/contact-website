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
        "Extract insights and analytics from your accounting or invoicing systems.",
      dark: true,
    },
    {
      icon: MessageSquare,
      title: "Bulk Messaging",
      description:
        "Connect with customers instantly through automated messaging platforms.",
      dark: false,
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Keep your business protected with modern, robust security measures.",
      dark: true,
    },
    {
      icon: Zap,
      title: "Process Streamlining",
      description:
        "Simplify daily management and enhance productivity using smart tools.",
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
      : 260;

    scrollRef.current.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

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
      className="relative py-16 bg-slate-50 overflow-hidden"
    >
      <div className="relative mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pl-4 text-left mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-blue-100 rounded-full px-3 py-1 mb-4">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-black text-xs font-extrabold uppercase tracking-wide">
              Our Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            What We Do
          </h2>

          <p className="text-slate-700 text-sm sm:text-base max-w-xl font-medium leading-relaxed">
            Contact Online Solutions offers cost-effective, customised software
            solutions tailored specifically for small to medium-sized
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
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black rounded-full p-2 shadow-lg hover:scale-110 transition sm:block hidden"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <motion.button
              onClick={() => handleScroll("right")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black rounded-full p-2 shadow-lg hover:scale-110 transition sm:block hidden"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          )}

          {/* Cards */}
          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 border-l-2 border-slate-300 pl-2 py-4
            [&::-webkit-scrollbar]:hidden scrollbar-hide"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                className="snap-item flex-shrink-0"
                style={{
                  minWidth: "240px", // narrower
                  maxWidth: "240px",
                }}
              >
                <div
                  className={`group relative h-[340px] rounded-xl p-7 flex flex-col justify-start shadow-md hover:shadow-xl transition-all duration-300 border-2 ${
                    feature.dark
                      ? "bg-slate-900 border-slate-700 text-white"
                      : "bg-white border-slate-200 text-slate-900"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${
                      feature.dark
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <feature.icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-extrabold mb-3 leading-tight ${
                      feature.dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed font-medium ${
                      feature.dark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {feature.description}
                  </p>

                  {/* Hover glow for dark cards */}
                  {feature.dark && (
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
