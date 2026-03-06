"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Braveheart } from "@/data/bravehearts";
import { Star, ChevronRight, Award } from "lucide-react";

interface StoryCardProps {
  hero: Braveheart;
  index: number;
}

export default function StoryCard({ hero, index }: StoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-3xl p-6 hover:bg-white/10 transition-all group cursor-pointer relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-army-green-500/10 rounded-full blur-3xl group-hover:bg-army-green-500/20 transition-all" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div>
          <p className="text-army-green-500 text-xs tracking-widest uppercase mb-1">
            {hero.rank} • {hero.regiment}
          </p>
          <h3 className="text-lg font-semibold group-hover:text-army-green-400 transition-colors">
            {hero.name}
          </h3>
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-medium">{hero.medals.length}</span>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4 relative z-10">
        <div className="flex items-center gap-2 text-sm text-white/60">
          <span>📍 {hero.hometown}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/60">
          <span>🎖️ {hero.operation}, {hero.yearOfDeath}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/60">
          <span>Age: {hero.age} years</span>
        </div>
      </div>

      {/* Story Preview */}
      <p className="text-white/70 text-sm line-clamp-3 mb-4 relative z-10">
        {hero.story}
      </p>

      {/* Quote */}
      {hero.quote && (
        <div className="p-3 bg-army-green-900/20 rounded-xl mb-4 relative z-10">
          <p className="text-xs text-army-green-400 italic">"{hero.quote}"</p>
        </div>
      )}

      {/* Medals */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {hero.medals.map((medal, i) => (
          <span
            key={i}
            className="flex items-center gap-1 px-2 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-xs text-yellow-400"
          >
            <Award size={10} />
            {medal}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={`/stories/${hero.id}`}
        className="flex items-center gap-1 text-army-green-500 text-sm font-medium group-hover:gap-2 transition-all relative z-10"
      >
        Read Full Story <ChevronRight size={14} />
      </Link>
    </motion.div>
  );
}

