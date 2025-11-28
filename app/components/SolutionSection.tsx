"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import SolutionCard from "./SolutionCard";

const SolutionSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const solutions = [
    {
      title: "Contact Messaging",
      tagline: "Send customised bulk messages easily.",
      image: "/solutions-images/messaging.png",
      dark: false,
    },
    {
      title: "Logistics",
      tagline: "Real-time tracking and route optimization.",
      image: "/solutions-images/logistics.png",
      dark: true,
    },
    {
      title: "Point of Sale",
      tagline: "Complete retail and inventory solution.",
      image: "/solutions-images/POS.png",
      dark: true,
    },
    {
      title: "Accommodation Management",
      tagline: "Smart booking and property management.",
      image: "/solutions-images/AccManagement.png",
      dark: false,
    },
    {
      title: "Workflow Automation",
      tagline: "Automate your business processes.",
      image: "/solutions-images/workflow.png",
      dark: true,
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const isMobile = window.innerWidth < 768;
    const cardWidth =
      scrollRef.current.querySelector(".snap-item")?.clientWidth || 0;

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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <section id="solutions" className="relative py-24 bg-white overflow-hidden">
      <div className="relative mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left mb-14"
        >
          <div className="inline-flex items-center gap-3 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="text-black text-sm font-bold tracking-wide">
              Complete Solutions Suite
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-3">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Your Success
            </span>
          </h2>

          <Link
            href="/solutions"
            className="group inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 font-medium text-lg transition-colors duration-300"
          >
            View All Solutions
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Scroll Container */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <motion.button
              onClick={() => handleScroll("left")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black rounded-full p-4 shadow-xl hover:scale-110 transition hidden sm:flex"
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <motion.button
              onClick={() => handleScroll("right")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black rounded-full p-4 shadow-xl hover:scale-110 transition hidden sm:flex"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          )}

          {/* Cards */}
          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-2 sm:px-4"
            style={{
              scrollbarWidth: "none",
            }}
          >
            {solutions.map((s) => (
              <motion.div
                key={s.title}
                className="flex-shrink-0 snap-item snap-center"
                style={{
                  minWidth: "min(90vw, 380px)",
                }}
              >
                <SolutionCard
                  title={s.title}
                  tagline={s.tagline}
                  image={s.image}
                  dark={s.dark}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8 sm:hidden">
            {solutions.map((_, index) => (
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
                className="w-3 h-3 rounded-full bg-slate-400 hover:bg-slate-500 transition"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 px-6">
          <div className="bg-[#0a1a2f] rounded-2xl p-10 border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Need a Custom Solution?
            </h3>
            <p className="text-sm text-slate-300 mb-6 max-w-lg mx-auto">
              We build tailored solutions for unique business challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:scale-105 transition"
              >
                Free Consultation
              </Link>

              <Link
                href="/solutions"
                className="border border-slate-600 text-white px-6 py-3 rounded-md text-sm font-semibold transition hover:bg-slate-800"
              >
                View All Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;