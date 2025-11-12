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
    const cardWidth = isMobile
      ? scrollRef.current.querySelector(".snap-item")?.clientWidth || 0
      : 350;

    const scrollAmount = isMobile ? cardWidth : 350;

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
    <section id="solutions" className="relative py-16 bg-white overflow-hidden">
      <div className="relative mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pl-6 text-left mb-10"
        >
          <div className="flex flex-wrap items-end justify-between gap-4 mb-3">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5">
              <Zap className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-black text-[11px] font-bold">
                Complete Solutions Suite
              </span>
            </div>
          </div>

          <h2 className=" text-2xl sm:text-3xl font-bold text-slate-800">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Your Success
            </span>
            {/* View All Solutions Link */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
          </h2>
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-1 text-slate-400 hover:text-slate- font-medium text-sm transition-colors duration-300"
          >
            View All Solutions
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
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
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black rounded-full p-2 shadow-md hover:scale-110 transition hidden sm:block"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black rounded-full p-2 shadow-md hover:scale-110 transition hidden sm:block"
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
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{
              scrollBehavior: "smooth",
              paddingInline: "",
              marginInlineStart: "3rem",
              marginInlineEnd: "-2rem",
              scrollbarWidth: "none",
            }}
          >
            {solutions.map((s) => (
              <motion.div
                key={s.title}
                className="flex-shrink-0 snap-item snap-center"
                style={{
                  minWidth: "min(85vw, 340px)",
                  // Mobile: center each card, Desktop: keep original margins
                  marginLeft:
                    "clamp(0px, calc((100vw - min(85vw, 340px)) / 2), 5vw)",
                  marginRight:
                    "clamp(0px, calc((100vw - min(85vw, 340px)) / 2), 10vw)",
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
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
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
                className="w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors"
                aria-label={`Go to solution ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14 px-9">
          <div className="bg-[#0a1a2f] rounded-xl p-6 border border-slate-800 shadow-sm">
            <h3 className="text-base font-bold text-white mb-1">
              Need a Custom Solution?
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              We build tailored solutions for unique business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-md text-xs font-semibold hover:scale-105 transition"
              >
                Free Consultation
              </Link>
              <Link
                href="/solutions"
                className="border border-slate-600 text-white px-4 py-2 rounded-md text-xs font-semibold transition hover:bg-slate-800"
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
