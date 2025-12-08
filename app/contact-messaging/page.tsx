"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Send,
  Users,
  BarChart3,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Mail,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import CTAButton from "./components/CTAButton";

const ContactMessagingPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <Send className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Bulk Messaging",
      description:
        "Send thousands of personalized WhatsApp messages simultaneously with our intelligent bulk messaging system.",
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-600",
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Automated Workflows",
      description:
        "Set up automated message sequences for welcome series, reminders, and follow-ups.",
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-600",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Scheduled Campaigns",
      description:
        "Plan your campaigns in advance and schedule messages for optimal delivery times.",
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
    },
  ];

  const faqs = [
    {
      question: "Is WhatsApp Business required?",
      answer:
        "Yes, you need a WhatsApp Business account. We help you through the setup process and number registration.",
    },
    {
      question: "Can I import contacts from other platforms?",
      answer:
        "Absolutely! We support CSV imports and have direct integrations with popular CRM platforms.",
    },
    {
      question: "Can I send different types of media through WhatsApp?",
      answer:
        "Absolutely! Our platform supports all major media types that WhatsApp Business API allows, including images, videos, documents, and voice messages.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-blue-50 py-12 px-4 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-100 text-emerald-800 mb-4 sm:mb-6 text-sm sm:text-base">
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                WhatsApp Business Solution
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Transform Your{" "}
                <span className="block text-emerald-600 mt-1 sm:mt-2">
                  Customer Communication
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                Reach customers instantly on WhatsApp with our personalized bulk
                messaging, automated campaigns, and real-time analytics.
              </p>
            </motion.div>

            {/* Right Content - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative">
              <div className="relative z-10 bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                  <div className="flex items-center mb-3 sm:mb-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                        Groups Dashboard
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Active groups: 3
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-bold text-emerald-600">
                      90%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      Message Delivery Rate
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      name: "Messages Sent",
                      progress: 90,
                      color: "bg-emerald-500",
                    },
                    {
                      name: "Failed To Send",
                      progress: 10,
                      color: "bg-red-500",
                    },
                    {
                      name: "Responses",
                      progress: 65,
                      color: "bg-purple-500",
                    },
                  ].map((campaign, index) => (
                    <div key={index} className="space-y-1 sm:space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="font-medium text-gray-700">
                          {campaign.name}
                        </span>
                        <span className="text-gray-500">
                          {campaign.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${campaign.color} rounded-full transition-all duration-500`}
                          style={{ width: `${campaign.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-emerald-200 rounded-full opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-blue-200 rounded-full opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Powerful Features for{" "}
              <span className="text-emerald-600">Exceptional Results</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Everything you need to run successful messaging campaigns on
              WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full">
                <div
                  className={`rounded-xl sm:rounded-2xl border-2 p-4 sm:p-6 h-full transition-all hover:shadow-lg ${feature.color}`}>
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ${feature.iconColor}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Connect Your Account",
                description: "Link your WhatsApp Business account in minutes",
                icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
              },
              {
                step: "02",
                title: "Import & Segment",
                description: "Upload contacts and create targeted segments",
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
              },
              {
                step: "03",
                title: "Launch & Analyze",
                description:
                  "Send campaigns and track performance in real-time",
                icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg h-full">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-100 mb-3 sm:mb-4">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <div className="text-emerald-600">{step.icon}</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden sm:block absolute top-1/2 right-0 w-4 sm:w-8 h-0.5 bg-emerald-200 transform -translate-y-1/2 translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Mobile Friendly Accordion */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-lg sm:rounded-xl">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 pr-2">
                    {faq.question}
                  </h3>
                  <span className="ml-2 flex-shrink-0">
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    )}
                  </span>
                </button>
                <div
                  className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index
                      ? "max-h-48 sm:max-h-64 pb-4 sm:pb-6"
                      : "max-h-0"
                  }`}>
                  <p className="text-sm sm:text-base text-gray-600 pt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMessagingPage;
