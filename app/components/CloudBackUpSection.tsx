"use client";

import { motion } from "framer-motion";

const CloudBackupSection = () => {
  const plans = [
    {
      title: "Basic Backup",
      features: [
        "100GB Secure Storage",
        "Automated Daily Backups",
        "Encrypted Storage",
        "Email Support",
      ],
      color: "from-white to-gray-50 text-gray-900",
    },
    {
      title: "Business Backup",
      features: [
        "1TB Secure Storage",
        "Real-time & Scheduled Backups",
        "File Version History",
        "Multi-Device Support",
        "Prioritized Remote Support",
      ],
      color: "from-slate-900 to-slate-800 text-white",
    },
    {
      title: "Enterprise Backup",
      features: [
        "2TB+ Scalable Storage",
        "Cloud + Local Hybrid Backup",
        "Disaster Recovery & Imaging",
        "Ransomware Protection",
        "24/7 Dedicated Support",
      ],
      color: "from-slate-900 to-black text-white",
    },
  ];

  return (
    <section className="py-28 bg-gray-50 flex flex-col items-center px-6 sm:px-12">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cloud{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Backup
          </span>
        </motion.h2>

        <p className="text-gray-600 tracking-wide text-sm sm:text-base leading-relaxed">
          Keeping your business data secure, accessible, and protected from loss
          — with enterprise-grade backup solutions for every scale.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            className={`rounded-2xl shadow-lg bg-gradient-to-b ${plan.color} p-10 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 min-h-[350px]`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.18 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">{plan.title}</h3>

              <ul className="space-y-3 text-sm leading-relaxed">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CloudBackupSection;
