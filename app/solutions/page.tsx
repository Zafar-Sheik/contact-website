"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import SolutionCard from "./components/SolutionCard";

// ###########################################
//  SOLUTIONS OBJECT (TYPED AUTOMATICALLY)
// ###########################################

const solutions = {
  "Contact Messaging": {
    id: "contact-messaging",
    title: "Contact",
    bottomTitle: "Messaging",
    subtitle: "Enhance Your Customer",
    catchLine: "Engagement",
    description:
      "Reach your customers instantly and efficiently with our bulk messaging platform for Whatsapp. Send personalized campaigns and automate your outreach.",
    extraContent:
      "With powerful targeting options and analytics, you can monitor engagement rates and optimize your communication strategy in real-time.",
    colour: "text-emerald-600",
    image: "/solutions-images/messaging.png",
  },
  "Logistics Management": {
    id: "logistics-management",
    title: "Logistics",
    bottomTitle: "Management",
    subtitle: "Manage Your Logistics",
    catchLine: "With Ease",
    description:
      "Simplify your logistics operations with route optimization, and performance insights.",
    extraContent:
      "Monitor your fleet and assign deliveries. Reduce fuel costs and improve delivery reliability effortlessly.",
    colour: "text-purple-600",
    image: "/solutions-images/logistics.png",
  },
  "Point of Sale": {
    id: "point-of-sale",
    title: "Point of",
    bottomTitle: "Sale",
    subtitle: "Manage Your Inventory",
    catchLine: "And Sales",
    description:
      "Modern POS software for seamless sales tracking, stock management, and customer billing.",
    extraContent:
      "Easily integrate with accounting systems, manage discounts, and analyze store performance — all in one dashboard.",
    colour: "text-amber-700",
    image: "/solutions-images/POS.png",
  },
  "Accommodation Management": {
    id: "accommodation-management",
    title: "Accommodation",
    bottomTitle: "Management",
    subtitle: "Manage Your Guests",
    catchLine: "And Bookings",
    description:
      "Optimize guest management from booking to checkout with our all-in-one system.",
    extraContent:
      "Track reservations, room availability, and billing — ensuring a smooth experience for both staff and guests.",
    colour: "text-orange-700",
    image: "/solutions-images/AccManagement.png",
  },
  "Workflow Management": {
    id: "workflow-management",
    title: "Workflow",
    bottomTitle: "Management",
    subtitle: "Manage Your",
    catchLine: "Business Processes",
    description:
      "Simplify and automate repetitive workflows across departments.",
    extraContent:
      "Visualize your processes, assign tasks, set deadlines, and track progress — increasing productivity and reducing human error.",
    colour: "text-indigo-600",
    image: "/solutions-images/workflow.png",
  },
  "Cloud Backup": {
    id: "cloud-backup",
    title: "Cloud",
    bottomTitle: "Backup",
    subtitle: "Secure Your",
    catchLine: "Data",
    description:
      "Protect your data with reliable and encrypted cloud storage solutions.",
    extraContent:
      "Automatic backups, scalable storage, and disaster recovery ensure your business never loses valuable information.",
    colour: "text-cyan-600",
    image: "/solutions-images/cloud-backup.png",
  },
  "Cyber Security": {
    id: "cyber-security",
    title: "Cyber",
    bottomTitle: "Security",
    subtitle: "Protect Your",
    catchLine: "Business",
    description:
      "Defend against cyber threats with proactive security monitoring and protection.",
    extraContent:
      "Our solutions include firewall management, endpoint protection, and continuous threat detection for full peace of mind.",
    colour: "text-red-600",
    image: "/solutions-images/cyber-security.png",
  },
  "VPN Services": {
    id: "vpn-services",
    title: "VPN",
    bottomTitle: "Services",
    subtitle: "Secure Your",
    catchLine: "Internet Connection",
    description:
      "Ensure online privacy and data security with our enterprise-grade VPN.",
    extraContent:
      "Protect employees working remotely, encrypt internet traffic, and maintain consistent connectivity across global offices.",
    colour: "text-blue-600",
    image: "/solutions-images/vpn.png",
  },
  Dashboards: {
    id: "dashboards",
    title: "Business",
    bottomTitle: "Dashboards",
    subtitle: "Visualize Your",
    catchLine: "Data",
    description:
      "Make faster, smarter decisions with real-time visibility into your key business metrics.",
    extraContent:
      "Transform your data into insights with dashboards integrated directly with your accounting or invoicing systems.",
    colour: "text-green-600",
    image: "/solutions-images/dashboard.png",
  },
} as const;

// 🔥 Creates strong union type of ALL solution keys
export type SolutionKey = keyof typeof solutions;

// ###########################################
//  PAGE COMPONENT (FULLY TYPED)
// ###########################################

const Page = () => {
  const [selected, setSelected] = useState<SolutionKey>("Contact Messaging");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const current = solutions[selected];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar
        items={Object.keys(solutions) as SolutionKey[]}
        selected={selected}
        onSelect={setSelected}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <main
        className={`flex-1 p-2 sm:p-6 md:p-10 lg:p-12 overflow-y-auto transition-all duration-300 ${
          sidebarOpen ? "md:ml-64" : ""
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
            <SolutionCard {...current} section={current.id} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Page;