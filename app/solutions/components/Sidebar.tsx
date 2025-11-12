"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

type SidebarProps = {
  items: string[];
  selected: string;
  onSelect: (name: string) => void;
};

const Sidebar = ({ items, selected, onSelect }: SidebarProps) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Floating Arrow Toggle Button with "View Solutions" */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        initial={false}
        animate={{ x: open ? 256 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className="fixed z-50 left-0 top-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-200 rounded-r-2xl p-2 hover:bg-gray-100 transition-all duration-300 group flex items-center"
      >
        {/* Arrow Icon */}
        {open ? (
          <ChevronLeft size={22} className="text-gray-700" />
        ) : (
          <ChevronRight size={22} className="text-gray-700" />
        )}
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background dim (mobile only) */}
            {isMobile && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black z-40"
              />
            )}

            <motion.aside
              key="sidebar"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 140, damping: 20 }}
              className="fixed left-0 z-50 md:z-40
                h-[calc(100vh)] w-64 p-6
                bg-white border-r border-gray-200 shadow-lg
                flex flex-col overflow-y-auto"
            >
              <div className="w-30 pl-2 py-2">
                <img
                  className=""
                  src="/logo.png"
                  alt="Contact Online Solutions"
                />
              </div>

              <nav className="flex flex-col gap-2 pt-5">
                {items.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      onSelect(item);
                      // Scroll to the section smoothly
                      const section = document.getElementById(
                        item.toLowerCase().replace(/\s+/g, "")
                      );
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                      if (isMobile) setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                      selected === item
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                        : "text-gray-700 transition-all duration-300 hover:scale-101 hover:shadow-lg hover:shadow-blue-300/25"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
