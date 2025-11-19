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

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const services = [
    {
      title: "Cloud Backup",
      tagline:
        "Automated, secure cloud storage with real-time synchronization.",
      description:
        "Daily automated backups, version history, encrypted storage, and instant restoration ensure your data is always protected and accessible.",
      icon: Cloud,
      dark: false,
    },
    {
      title: "Cyber Security",
      tagline:
        "Protection against digital threats, breaches, and cyber attacks.",
      description:
        "Advanced threat detection, firewalls, security audits, and full monitoring to keep your business and customers safe.",
      icon: Shield,
      dark: true,
    },
    {
      title: "VPN Services",
      tagline: "Secure remote access for your entire team.",
      description:
        "End-to-end encrypted tunnels, high-speed routing, multi-device support, and seamless connectivity for remote employees.",
      icon: Network,
      dark: false,
    },
    {
      title: "Business Dashboards",
      tagline: "Real-time analytics and AI-driven insights.",
      description:
        "Beautiful dashboards that track KPIs, performance, and trends. Get clear insights to drive smarter business decisions.",
      icon: BarChart3,
      dark: true,
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const cardWidth = 280; // What We Do card width
    scrollRef.current.scrollBy({
      left: direction === "right" ? cardWidth + 24 : -(cardWidth + 24),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    };

    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      <div className="relative mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-14"
        >
          <div className="inline-flex items-center gap-3 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-black text-xs font-semibold tracking-wide">
              Enterprise Solutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-3">
            Secure & Scalable{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Business Solutions
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mb-4">
            Protect your data. Secure your operations. Transform your business
            with professional-grade technology services.
          </p>

          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-base font-medium transition-all"
          >
            Explore All Services
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Cards Scroll */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <motion.button
              onClick={() => handleScroll("left")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black rounded-full p-3 shadow-md hover:scale-110 transition hidden sm:block"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black rounded-full p-3 shadow-md hover:scale-110 transition hidden sm:block"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          )}

          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{
              scrollBehavior: "smooth",
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="flex-shrink-0 snap-center"
                style={{
                  width: "280px", // FIXED WIDTH — same as What We Do cards
                }}
              >
                <div
                  className={`group relative h-full rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border ${
                    service.dark
                      ? "bg-slate-900 border-slate-700 text-white"
                      : "bg-white border-slate-200 text-slate-900"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 ${
                      service.dark
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>

                  {/* Tagline */}
                  <p
                    className={`text-base font-medium mb-3 ${
                      service.dark ? "text-blue-200" : "text-blue-600"
                    }`}
                  >
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed ${
                      service.dark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Hover Light Effect */}
                  {service.dark && (
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-8 sm:hidden">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!scrollRef.current) return;
                  const cardWidth = 280;
                  scrollRef.current.scrollTo({
                    left: cardWidth * index,
                    behavior: "smooth",
                  });
                }}
                className="w-3 h-3 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
