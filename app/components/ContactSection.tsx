"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          service: "",
        });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-12 md:py-28 bg-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-4 md:mb-6">
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
            <span className="text-slate-200 text-xs md:text-sm font-medium">
              Let&apos;s Start Your Project
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 md:mb-4 px-4">
            Ready to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Transform?
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            Get a free consultation and discover the perfect solution for your
            business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-slate-800/50 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-slate-700/50 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Get In Touch
            </h3>
            <p className="text-slate-300 text-sm md:text-base mb-4 md:mb-6">
              Reach out for support, consultations, or project planning.
            </p>

            <div className="space-y-4 md:space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "+27 82 570 8786" },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@contactonlinesolutions.co.za",
                },
                { icon: MapPin, label: "Office", value: "Durban, SA" },
                { icon: Clock, label: "Support", value: "24/7 Available" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 md:gap-4 text-sm md:text-base text-slate-300 flex-wrap">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-cyan-600 flex items-center justify-center text-white shadow-md flex-shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-semibold whitespace-nowrap">
                        {item.label}:
                      </span>
                      <span className="truncate">{item.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/50 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-slate-700/50 shadow-xl space-y-4 md:space-y-6">
            {isSubmitted ? (
              <div className="text-center py-8 md:py-12">
                <CheckCircle className="w-12 h-12 md:w-14 md:h-14 text-green-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-300 text-sm md:text-base">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-sm md:text-base text-white w-full"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-sm md:text-base text-white w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-sm md:text-base text-white w-full"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-sm md:text-base text-white w-full"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Project Details *"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-sm md:text-base text-white w-full resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm md:text-base font-semibold py-3 rounded-lg hover:scale-[1.03] transition-transform shadow-md active:scale-95">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
