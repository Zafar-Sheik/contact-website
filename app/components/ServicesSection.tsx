"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Cloud,
  Shield,
  Network,
  BarChart3,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import SolutionCard from "./SolutionCard";

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const services = [
    {
      title: "Cloud Backup",
      tagline:
        "Automated, secure cloud storage with real-time synchronization and easy recovery.",
      description:
        "Never lose critical business data with our automated cloud backup solutions. Automatic daily backups, version history, and one-click restoration ensure your data is always protected and accessible from anywhere.",
      icon: Cloud,
      dark: false,
    },
    {
      title: "Cyber Security",
      tagline:
        "Comprehensive protection against digital threats and data breaches.",
      description:
        "Enterprise-grade security featuring real-time threat detection, firewall protection, and security monitoring. Regular vulnerability assessments and employee training to keep your business safe from cyber attacks.",
      icon: Shield,
      dark: true,
    },
    {
      title: "VPN Services",
      tagline: "Secure remote access and encrypted connections for your team.",
      description:
        "Encryption for secure remote work and data transmission. Fast speeds and seamless connectivity ensuring your team can work safely from anywhere in the world.",
      icon: Network,
      dark: false,
    },
    {
      title: "Business Dashboards",
      tagline: "Real-time insights and analytics for informed decision-making.",
      description:
        "Customizable dashboards that integrate with your existing systems. Track KPIs, monitor performance metrics, and gain valuable business intelligence through intuitive visualizations and automated reporting.",
      icon: BarChart3,
      dark: true,
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile
      ? scrollRef.current.querySelector(".snap-item")?.clientWidth || 0
      : 320;

    const scrollAmount = isMobile ? cardWidth : 320;

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
    <section id="services" className="relative py-16 bg-white overflow-hidden">
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
                Enterprise Solutions
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
            Secure & Scalable{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Business Solutions
            </span>
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mb-3">
            Comprehensive technology services designed to protect your data,
            secure your operations, and provide valuable insights for business
            growth.
          </p>
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-1 text-slate-400 hover:text-slate-600 font-medium text-sm transition-colors duration-300"
          >
            Explore All Services
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
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{
              scrollBehavior: "smooth",
              paddingInline: "",
              marginInlineStart: "2rem",
              marginInlineEnd: "-1.5rem",
              scrollbarWidth: "none",
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="flex-shrink-0 snap-item snap-center"
                style={{
                  minWidth: "min(80vw, 320px)",
                  marginLeft:
                    "clamp(0px, calc((100vw - min(80vw, 320px)) / 2), 3vw)",
                  marginRight:
                    "clamp(0px, calc((100vw - min(80vw, 320px)) / 2), 6vw)",
                }}
              >
                <div
                  className={`group relative h-full rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 ${
                    service.dark
                      ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white"
                      : "bg-white text-slate-900"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      service.dark
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      service.dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm font-medium mb-3 ${
                      service.dark ? "text-blue-200" : "text-blue-600"
                    }`}
                  >
                    {service.tagline}
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${
                      service.dark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Hover effect - Only for dark cards */}
                  {service.dark && (
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            {services.map((_, index) => (
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
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
