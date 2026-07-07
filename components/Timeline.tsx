"use client";

import { motion } from "framer-motion";
import { wars } from "@/data/wars";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

export default function Timeline() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-army-green-500 via-army-green-700 to-transparent" />

          {/* War Cards */}
          <div className="space-y-12">
            {wars.map((war, index) => (
              <motion.div
                key={war.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"} pl-16 md:pl-0`}>
                  <div className="glass rounded-3xl p-6 hover:bg-white/10 transition-all group">
                    {war.imageUrl && (
                      <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative">
                        <img src={war.imageUrl} alt={war.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-army-green-600/30 rounded-full text-army-green-400 text-sm font-medium">
                        {war.year}
                      </span>
                      {war.casualties && (
                        <span className="text-xs text-white/50">Casualties known</span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-army-green-400 transition-colors">
                      {war.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {war.fullDesc}
                    </p>
                    
                    {/* Key Battles */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {war.keyBattles.slice(0, 3).map((battle, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/5 rounded text-xs text-white/60"
                        >
                          {battle}
                        </span>
                      ))}
                    </div>

                    {/* Outcome */}
                    <div className={`p-3 bg-army-green-900/20 rounded-xl ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                      <p className="text-xs text-army-green-400 uppercase tracking-wider mb-1">Outcome</p>
                      <p className="text-sm text-white/80">{war.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-army-green-500 border-4 border-black z-10" />

                {/* Empty space for the other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16 gap-4"
        >
          <Link
            href="/stories"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-army-green-400 transition-colors"
          >
            Explore Stories <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

