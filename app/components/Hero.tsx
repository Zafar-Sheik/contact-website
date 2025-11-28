"use client";

import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const dashboards = [
  {
    title: "Cloud Backup",
    icon: "☁️",
    color: "from-blue-400 to-cyan-400",
    stats: [
      { label: "Backup Status", value: "Active", progress: 75 },
      { label: "Storage Used", value: "320 GB / 500 GB", progress: 64 },
    ],
    activities: [
      "Backup Completed Successfully",
      "Data Synced to Cloud",
      "New Device Connected",
    ],
  },
  {
    title: "AI Security",
    icon: "🛡️",
    color: "from-red-400 to-orange-400",
    stats: [
      { label: "Threats Detected", value: "0", progress: 100 },
      { label: "Protection Level", value: "High", progress: 95 },
    ],
    activities: [
      "Firewall Scan Complete",
      "AI Model Updated",
      "Suspicious IP Blocked",
    ],
  },
  {
    title: "Analytics",
    icon: "📊",
    color: "from-purple-400 to-pink-400",
    stats: [
      { label: "Active Users", value: "1,240", progress: 80 },
      { label: "Conversion Rate", value: "4.3%", progress: 43 },
    ],
    activities: [
      "Traffic Surge Detected",
      "Report Generated",
      "Goal Conversion Updated",
    ],
  },
  {
    title: "Workflow",
    icon: "⚡",
    color: "from-green-400 to-teal-400",
    stats: [
      { label: "Tasks Completed", value: "85%", progress: 85 },
      { label: "Active Projects", value: "6", progress: 60 },
    ],
    activities: [
      "Task Assigned to John",
      "Deadline Extended",
      "Client Feedback Received",
    ],
  },
];

const Hero = () => {
  const [activeDashboard, setActiveDashboard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDashboard((prev) => (prev + 1) % dashboards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <section
      id="hero"
      className="pt-8 min-h-screen bg-white relative overflow-hidden text-black"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* LEFT SIDE TEXT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="pt-0 space-y-4">
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                INTRODUCING
              </h1>

              <h1 className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                CONTACT
              </h1>

              <h1 className="text-2xl md:text-2xl font-bold leading-tight from-blue-500 to-cyan-500">
                Online Solutions
              </h1> */}

              <img src="logo.png" className="max-w-xs sm:max-w-sm md:max-w-md w-full" />

              <p className="text-lg pt-5 text-gray-700 leading-relaxed max-w-lg">
                As Contact Computers celebrates 30 years of IT excellence,
                we&apos;re proud to launch Contact Online Solutions — a new era
                of cloud computing — powering your business with innovation,
                reliability, and performance.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-8">
              <h3 className="text-sm pt-5 text-black tracking-wide">
                Powered By
              </h3>
              <img
                src="/contactCompLogo.jpeg"
                alt="Contact Computers Logo"
                className="h-20 w-auto"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/25"
              >
                Get Started
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>
              </Link>

              <Link
                href="#solutions"
                className="group border border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300 hover:bg-gray-100 hover:scale-105"
              >
                View Solutions
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="relative"
          >
            <div className="relative bg-[#0a1a2f] backdrop-blur-xl rounded-2xl border border-blue-900 shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between p-6 border-b border-blue-900/50">
                <div className="flex items-center gap-3">
                  <div
                    className={`text-2xl bg-gradient-to-r ${dashboards[activeDashboard].color} bg-clip-text text-transparent`}
                  >
                    {dashboards[activeDashboard].icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {dashboards[activeDashboard].title}
                    </h3>
                    <p className="text-blue-200 text-sm">Live monitoring</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs text-blue-200">Active</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDashboard}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: easeOut }}
                    className="space-y-6"
                  >
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {dashboards[activeDashboard].stats.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-blue-900/40 rounded-xl p-4 border border-blue-800/30"
                        >
                          <div className="text-blue-200 text-sm font-medium mb-2">
                            {stat.label}
                          </div>
                          <div className="text-white font-bold text-xl mb-3">
                            {stat.value}
                          </div>
                          <div className="w-full bg-blue-950/50 h-2 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${stat.progress}%` }}
                              transition={{
                                duration: 1,
                                ease: easeInOut,
                                delay: 0.2,
                              }}
                              className={`h-2 rounded-full bg-gradient-to-r ${dashboards[activeDashboard].color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Activity Feed */}
                    <div className="bg-blue-900/40 rounded-xl p-4 border border-blue-800/30">
                      <h4 className="text-white font-semibold text-sm mb-4">
                        Recent Activity
                      </h4>
                      <div className="space-y-3">
                        {dashboards[activeDashboard].activities.map(
                          (activity, index) => (
                            <motion.div
                              key={activity}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: index * 0.1,
                                ease: easeOut,
                              }}
                              className="flex items-center gap-3 text-sm"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${dashboards[activeDashboard].color}`}
                              />
                              <span className="text-blue-100">{activity}</span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/10 rounded-2xl blur-xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400/10 rounded-2xl blur-xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;