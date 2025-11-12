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
    <section className="py-16 bg-gray-50 flex flex-col items-center px-4 sm:px-8">
      <div className="text-center mb-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cloud{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Backup
          </span>
        </motion.h2>
        <p className="text-gray-500 tracking-wider text-xs">
          Keeping Your Business Data Secure, Accessible & Protected From Loss.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            className={`rounded-xl shadow-md bg-gradient-to-b ${plan.color} p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <ul className="space-y-2 text-xs leading-relaxed">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
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
