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
      className="relative py-12 bg-slate-900 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-3">
            <MessageCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-200 text-xs font-medium">
              Let&apos;s Start Your Project
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Transform?
            </span>
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Get a free consultation and discover the perfect solution for your
            business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-3">Get In Touch</h3>
            <p className="text-slate-300 text-sm mb-4">
              Reach out for support or consultations.
            </p>
            <div className="space-y-3">
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
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <div className="w-8 h-8 rounded-md bg-cyan-600 flex items-center justify-center text-white">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">{item.label}:</span>{" "}
                  {item.value}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 space-y-4"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-2" />
                <h3 className="text-white font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-300 text-sm">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-sm text-white"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-sm text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-sm text-white"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-sm text-white"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Project Details *"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-sm text-white w-full"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold py-2 rounded-lg hover:scale-105 transition"
                >
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
