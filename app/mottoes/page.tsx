"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote, Shield, Heart, Zap, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Motto {
  text: string;
  meaning: string;
  origin: string;
  usage: string;
  category: string;
}

const mottos: Motto[] = [
  {
    text: "Service Before Self",
    meaning: "The welfare, honor, and happiness of the nation comes before one's own personal interests.",
    origin: "Indian Army Motto",
    usage: "Used in all official communications and training",
    category: "General"
  },
  {
    text: "Jai Hind",
    meaning: "Victory to India - A slogan of patriotism and unity.",
    origin: "Popular Slogan (1940s)",
    usage: "Greetings, celebrations, patriotic events",
    category: "Greeting"
  },
  {
    text: "Bharat Mata Ki Jai",
    meaning: "Victory to Mother India - A rallying cry for the nation.",
    origin: "Freedom Struggle Era",
    usage: "Battle cry, patriotic occasions",
    category: "Battle Cry"
  },
  {
    text: "Vijayee Vishv",
    meaning: "Victory is mine - A confident declaration of triumph.",
    origin: "Ancient Indian Tradition",
    usage: "Before battles and operations",
    category: "Battle Cry"
  },
  {
    text: "Namaste Swayam",
    meaning: "I bow to you - A respectful greeting between soldiers.",
    origin: "Traditional Indian Culture",
    usage: "Formal greetings between officers",
    category: "Greeting"
  },
  {
    text: "Shatru Vijay",
    meaning: "Defeat the enemy - A command to achieve victory.",
    origin: "Sanskrit Military Tradition",
    usage: "Battle commands",
    category: "Command"
  },
  {
    text: "Dharmo Rakshati Rakshitah",
    meaning: "Those who protect righteousness are protected.",
    origin: "Maratha Light Infantry",
    usage: "Regimental motto",
    category: "Regimental"
  },
  {
    text: "For Valour",
    meaning: "Courage in the face of adversity - the highest virtue.",
    origin: "Jat Regiment",
    usage: "Regimental motto",
    category: "Regimental"
  },
  {
    text: "Nischay Kar Apni Ijmma Karo",
    meaning: "Make a resolve and fulfill it with determination.",
    origin: "Sikh Regiment",
    usage: "Regimental motto",
    category: "Regimental"
  },
  {
    text: "Better to Die than to be a Coward",
    meaning: "Courage above all - death is preferable to dishonor.",
    origin: "Gorkha Rifles",
    usage: "Regimental motto",
    category: "Regimental"
  },
  {
    text: "The Forward",
    meaning: "Always move forward - never retreat.",
    origin: "Rajput Regiment",
    usage: "Regimental motto",
    category: "Regimental"
  },
  {
    text: "Anything Anywhere",
    meaning: "Ready for any mission, anywhere in the world.",
    origin: "Assam Regiment",
    usage: "Regimental motto",
    category: "Regimental"
  }
];

const categories = ["All", "General", "Battle Cry", "Greeting", "Command", "Regimental"];

export default function MottoesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMotto, setSelectedMotto] = useState<Motto | null>(null);

  const filteredMottos = selectedCategory === "All" 
    ? mottos 
    : mottos.filter(m => m.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Quote className="w-6 h-6 text-amber-500" />
              <span className="text-amber-500 text-sm tracking-widest uppercase">
                Words of Honor
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Army Mottos & Slogans</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              The Indian Army lives by powerful words that embody courage, duty, and patriotism. 
              These mottos inspire soldiers and connect them to centuries of martial tradition.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-amber-600 text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Mottos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMottos.map((motto, index) => (
              <motion.div
                key={motto.text}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedMotto(motto)}
                className="glass rounded-3xl p-6 hover:bg-white/10 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500/30 transition-colors">
                    <Star className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                      "{motto.text}"
                    </h3>
                    <p className="text-white/60 text-sm mb-3 line-clamp-2">
                      {motto.meaning}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-army-green-900/30 border border-army-green-500/30 rounded-full text-xs">
                        {motto.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special Slogans Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Special Army Slogans</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass rounded-3xl p-8 text-center border-l-4 border-amber-500">
                <Quote className="w-10 h-10 mx-auto mb-4 text-amber-500" />
                <p className="text-2xl font-serif italic text-amber-100/80 mb-4">
                  "The enemy is before us, the flag is behind us."
                </p>
                <p className="text-white/60 text-sm">— Traditional Battle Cry</p>
              </div>

              <div className="glass rounded-3xl p-8 text-center border-l-4 border-army-green-500">
                <Shield className="w-10 h-10 mx-auto mb-4 text-army-green-500" />
                <p className="text-2xl font-serif italic text-amber-100/80 mb-4">
                  "We do not know the art of retreat."
                </p>
                <p className="text-white/60 text-sm">— Indian Army Ethos</p>
              </div>

              <div className="glass rounded-3xl p-8 text-center border-l-4 border-red-500">
                <Heart className="w-10 h-10 mx-auto mb-4 text-red-500" />
                <p className="text-2xl font-serif italic text-amber-100/80 mb-4">
                  "Freedom is not free, it is bought with blood."
                </p>
                <p className="text-white/60 text-sm">— National Memorial</p>
              </div>
            </div>
          </motion.div>

          {/* Famous Quotes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Words of Leaders</h2>
            <div className="glass rounded-3xl p-8">
              <div className="space-y-6">
                <div className="p-4 bg-white/5 rounded-2xl">
                  <p className="text-lg text-white/80 mb-2 italic">
                    "The security of the nation is the sole objective of the Indian Army."
                  </p>
                  <p className="text-xs text-army-green-500">— Army Doctrine</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl">
                  <p className="text-lg text-white/80 mb-2 italic">
                    "Every soldier is a guardian of the nation's honor."
                  </p>
                  <p className="text-xs text-army-green-500">— Military Tradition</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl">
                  <p className="text-lg text-white/80 mb-2 italic">
                    "In war, there are no unwounded soldiers."
                  </p>
                  <p className="text-xs text-army-green-500">— Field Marshal</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-12 gap-4"
          >
            <Link
              href="/training"
              className="flex items-center gap-2 px-6 py-3 bg-army-green-600 text-white font-medium rounded-full hover:bg-army-green-500 transition-colors"
            >
              Join the Army <ChevronRight size={18} />
            </Link>
            <Link
              href="/stories"
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Valor Stories
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {selectedMotto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMotto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-3xl p-8 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">"{selectedMotto.text}"</h3>
                <p className="text-white/70 mb-4">{selectedMotto.meaning}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="text-army-green-500">Origin:</span> {selectedMotto.origin}</p>
                  <p><span className="text-army-green-500">Usage:</span> {selectedMotto.usage}</p>
                  <p><span className="px-2 py-1 bg-army-green-900/30 border border-army-green-500/30 rounded-full text-xs mt-2 inline-block">
                    {selectedMotto.category}
                  </span></p>
                </div>
                <button
                  onClick={() => setSelectedMotto(null)}
                  className="mt-6 px-6 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

