"use client";

import { motion } from "framer-motion";
import { Shield, Cloud, BarChart3, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Cloud className="w-6 h-6 text-cyan-500" />,
    title: "Real-Time Data Backup",
    description:
      "Your business data is crucial. We provide secure, real-time cloud backups that ensure your information is always protected and accessible when you need it most.",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    title: "Secure Remote Access",
    description:
      "Access your data safely from anywhere with our Virtual Private Network (VPN). Work securely, seamlessly, and confidently on the go.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
    title: "Real-Time Dashboards",
    description:
      "Stay informed with live, actionable insights. Our dashboards give you full visibility of your operations—anytime, anywhere.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-sky-500" />,
    title: "Customisable Apps",
    description:
      "We design tailored apps for Windows, Android, and iOS that integrate seamlessly into your workflow and scale with your business.",
  },
];

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Introducing{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Contact Online
            </span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            As Contact Computers celebrates 30 years of IT excellence,
            we&apos;re proud to launch a new era of cloud computing—powering
            your business with innovation, reliability, and performance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-700 mb-6">
            Contact us today to discuss your online IT needs and discover how
            Contact Online can elevate your business with cutting-edge cloud
            solutions.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Let’s Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
