"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Star,
  Quote,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Users,
  Shield,
  Award,
} from "lucide-react";

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "Operations Director",
      company: "RetailPro SA",
      content:
        "The Bulk Messaging System transformed our communication and cut costs by 30%. The support team is incredibly responsive.",
      results: [
        { metric: "40%", label: "Engagement" },
        { metric: "5x", label: "Speed" },
        { metric: "30%", label: "Cost ↓" },
      ],
      rating: 5,
    },
    {
      id: 2,
      name: "James Mulder",
      position: "IT Manager",
      company: "LogiChain",
      content:
        "Their Logistics System reduced delivery times by 35% and improved tracking. A game-changer for our team.",
      results: [
        { metric: "35%", label: "Faster Delivery" },
        { metric: "24/7", label: "Tracking" },
        { metric: "50%", label: "Fewer Errors" },
      ],
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Patel",
      position: "Store Owner",
      company: "Urban Fashion",
      content:
        "The POS system is incredibly intuitive. Inventory is effortless, and we’ve seen steady growth.",
      results: [
        { metric: "25%", label: "Sales ↑" },
        { metric: "100%", label: "Accuracy" },
        { metric: "2h", label: "Saved/Day" },
      ],
      rating: 5,
    },
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction", icon: Users },
    { value: "40%", label: "Efficiency Gain", icon: TrendingUp },
    { value: "24/7", label: "Support", icon: Shield },
    { value: "50+", label: "Projects", icon: Award },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveTestimonial((p) => (p === testimonials.length - 1 ? 0 : p + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section
      id="testimonials"
      className="relative py-12 bg-white overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-100 rounded-full px-4 py-1.5 mb-3">
            <TrendingUp className="w-4 h-4 text-cyan-500" />
            <span className="text-gray-700 text-xs font-medium">
              Real Results
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Success Stories
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Real impact from businesses using our solutions every day.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 text-center"
              >
                <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-lg font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonial */}
        <div
          className="relative bg-white border border-gray-200 shadow-md rounded-2xl p-6 max-w-3xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="text-cyan-500 mb-4">
            <Quote className="w-6 h-6" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                “{testimonials[activeTestimonial].content}”
              </p>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {testimonials[activeTestimonial].results.map((r, i) => (
                  <div
                    key={r.label}
                    className="text-center p-2 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <div className="text-base font-bold text-gray-900 mb-0.5">
                      {r.metric}
                    </div>
                    <div className="text-cyan-600 text-[10px] font-medium">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {testimonials[activeTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonials[activeTestimonial].position}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-5 border-t border-gray-100 pt-4">
            <div className="flex gap-1">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === activeTestimonial
                      ? "bg-cyan-500 scale-125"
                      : "bg-gray-300 hover:bg-cyan-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setActiveTestimonial((p) =>
                    p === 0 ? testimonials.length - 1 : p - 1
                  )
                }
                className="p-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:border-cyan-400 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-gray-500" />
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial((p) =>
                    p === testimonials.length - 1 ? 0 : p + 1
                  )
                }
                className="p-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:border-cyan-400 transition"
              >
                <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
