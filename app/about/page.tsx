"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Users,
  Target,
  Award,
  Shield,
  Zap,
  Globe,
  Clock,
  TrendingUp,
  HeartHandshake,
  Laptop,
  Server,
} from "lucide-react";

const AboutPage = () => {
  const [activeTimeline, setActiveTimeline] = useState(2024);

  const stats = [
    { number: "30+", label: "Years Experience", icon: Clock },
    { number: "500+", label: "Clients Served", icon: Users },
    { number: "99.9%", label: "Uptime Record", icon: Server },
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description:
        "Consistent performance and dependable service you can count on 24/7.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Staying ahead with cutting-edge technology and forward-thinking solutions.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HeartHandshake,
      title: "Partnership",
      description:
        "Building long-term relationships based on trust and mutual success.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Globe,
      title: "Excellence",
      description:
        "Committed to delivering exceptional quality in everything we do.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const timeline = [
    {
      year: 2024,
      title: "Humble Beginnings",
      description:
        "Contact Online Solutions founded as a software company with a vision for technological innovation.",
      milestone: "First office opened",
    },
    {
      year: 2025,
      title: "Contact Messaging Launched",
      description:
        "Pioneered cloud-based AI bulk messaging solution for businesses.",
      milestone: "Launched Contact Messaging",
    },
    {
      year: 2026,
      title: "Future Ready",
      description:
        "Lead with next-generation solutions and national service delivery.",
      milestone: "Plans to expand into nation-wide markets",
    },
  ];

  const team = [
    {
      name: "Imran",
      role: "Chief Executive Officer",
      expertise: "Sales & Management",
      experience: "35+ years in enterprise solutions",
      avatar: "👨‍💼",
    },
    {
      name: "Nico",
      role: "Software Engineer",
      expertise: "Backend Developer & Architect",
      experience: "20+ years in digital solutions",
      avatar: "👨‍💻",
    },
    {
      name: "Aadil",
      role: "Specialist Technician",
      expertise: "IT Infrastructure",
      experience: "5+ years in Information Technology",
      avatar: "👨‍🔧",
    },
    {
      name: "Zafar",
      role: "Frontend Developer",
      expertise: "Web Development & UX",
      experience: "5+ years in UI/UX Design",
      avatar: "👨‍🎨",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20 text-sm md:text-base">
              <Award className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium">Trusted Since 1994</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building The Future,
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                Together With You
              </span>
            </h1>

            <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              At Contact Online Solutions, we specialise in delivering
              cost-effective, customised software solutions designed to meet the
              unique needs of small to medium-sized businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-12"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center group flex flex-col items-center p-4"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-2 md:mb-3">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium text-sm md:text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="space-y-4 md:space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 md:px-4 md:py-2 rounded-full text-sm">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                <span className="font-medium">Our Journey</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                From Local Startup to Technology Leader
              </h2>

              <div className="space-y-3 md:space-y-4">
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  With decades of industry experience through our parent
                  company, Contact Computers, we understand the challenges faced
                  by growing businesses — from data protection to communication
                  and performance tracking.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  That’s why our solutions are built to be{" "}
                  <span className="font-bold">
                    practical, reliable, and scalable.
                  </span>
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Today, we combine decades of experience with cutting-edge
                  technology to provide businesses with the tools they need to
                  thrive in a digital world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-xl font-semibold text-center hover:scale-105 transition-transform duration-300 text-sm md:text-base"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/solutions"
                  className="border border-slate-300 text-slate-700 px-6 py-3 md:px-8 md:py-3 rounded-xl font-semibold text-center hover:bg-white transition-colors duration-300 text-sm md:text-base"
                >
                  Our Solutions
                </Link>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="space-y-6 md:space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex gap-4 md:gap-6 group cursor-pointer ${
                      activeTimeline === item.year
                        ? "opacity-100"
                        : "opacity-60 hover:opacity-80"
                    } transition-opacity duration-300`}
                    onClick={() => setActiveTimeline(item.year)}
                  >
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-4 ${
                          activeTimeline === item.year
                            ? "bg-blue-500 border-blue-500"
                            : "bg-white border-slate-300 group-hover:border-blue-300"
                        } transition-all duration-300`}
                      />
                      {index < timeline.length - 1 && (
                        <div className="flex-1 w-0.5 bg-slate-200 mt-2" />
                      )}
                    </div>

                    <div className="flex-1 pb-6 md:pb-8">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <div className="text-xl md:text-2xl font-bold text-blue-600">
                          {item.year}
                        </div>
                        <div className="text-xs md:text-sm bg-blue-100 text-blue-700 px-2 py-1 md:px-3 md:py-1 rounded-full font-medium w-fit">
                          {item.milestone}
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4">
              Our Values
            </h2>
            <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              The principles that guide every solution we build and every
              relationship we nurture.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="text-center group bg-slate-50 rounded-2xl p-6 md:p-8 hover:bg-white transition-colors duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${value.color} rounded-3xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}
                  >
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 md:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4">
              The Team
            </h2>
            <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Meet the experts driving innovation and delivering exceptional
              solutions for our clients.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-semibold text-sm md:text-base mb-2 md:mb-3">
                  {member.role}
                </div>
                <div className="text-xs md:text-sm text-slate-600 mb-2 font-medium">
                  {member.expertise}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {member.experience}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto">
              Join other successful businesses that trust Contact Computers with
              their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-6">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg text-sm md:text-base"
              >
                Get Started Today
              </Link>
              <Link
                href="/solutions"
                className="border border-blue-400 text-blue-100 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-blue-800/20 transition-colors duration-300 text-sm md:text-base"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
