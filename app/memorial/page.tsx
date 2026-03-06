"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { bravehearts } from "@/data/bravehearts";
import { Search, Flame, Heart, MessageSquare } from "lucide-react";

interface Tribute {
  id: string;
  name: string;
  message: string;
  date: string;
  candles: number;
}

const INITIAL_TRIBUTES: Tribute[] = [
  { id: "1", name: "Rahul S.", message: "Your sacrifice will never be forgotten. Jai Hind!", date: "2024-01-15", candles: 42 },
  { id: "2", name: "Priya M.", message: "Forever in our hearts. Thank you for our freedom.", date: "2024-01-14", candles: 38 },
  { id: "3", name: "Amit K.", message: "Param Vir Chakra winners are eternal. Salute!", date: "2024-01-13", candles: 56 },
  { id: "4", name: "Sneha R.", message: "To the brave hearts who gave everything. 🇮🇳", date: "2024-01-12", candles: 29 },
  { id: "5", name: "Vikram D.", message: "Your courage inspires generations. JAI HIND!", date: "2024-01-11", candles: 45 },
];

export default function MemorialPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegiment, setFilterRegiment] = useState("all");
  const [tributes, setTributes] = useState<Tribute[]>(INITIAL_TRIBUTES);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [newName, setNewName] = useState("");

  const filteredHeroes = bravehearts.filter((hero) => {
    const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hero.regiment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hero.operation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegiment = filterRegiment === "all" || hero.regiment.includes(filterRegiment);
    return matchesSearch && matchesRegiment;
  });

  // Load tributes from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("memorial-tributes");
    if (saved) {
      setTributes(JSON.parse(saved));
    }
    setIsLoaded(true);
  }, []);

  // Save tributes to localStorage whenever they change (only after initial load)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("memorial-tributes", JSON.stringify(tributes));
    }
  }, [tributes, isLoaded]);

  const handleLeaveTribute = () => {
    if (newMessage.trim() && newName.trim()) {
      const tribute: Tribute = {
        id: Date.now().toString(),
        name: newName,
        message: newMessage,
        date: new Date().toISOString().split("T")[0],
        candles: 1,
      };
      setTributes([tribute, ...tributes]);
      setNewMessage("");
      setNewName("");
    }
  };

  const handleLightCandle = (id: string) => {
    setTributes(tributes.map(t => 
      t.id === id ? { ...t, candles: t.candles + 1 } : t
    ));
  };

  const regiments = Array.from(new Set(bravehearts.map(h => h.regiment.split(" ")[0])));

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
              <Flame className="w-6 h-6 text-amber-500" />
              <span className="text-amber-500 text-sm tracking-widest uppercase">
                Digital Memorial
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Memorial Wall</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Light a candle. Leave a message. Join thousands in honoring the brave souls 
              who gave everything for our freedom.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Search & Filter */}
            <div className="lg:col-span-1 space-y-6">
              <div className="glass rounded-3xl p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Search size={18} /> Search Heroes
                </h2>
                <input
                  type="text"
                  placeholder="Search by name, regiment..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-army-green-500 transition-colors"
                />
                
                <select
                  value={filterRegiment}
                  onChange={(e) => setFilterRegiment(e.target.value)}
                  className="w-full mt-4 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-army-green-500 transition-colors"
                >
                  <option value="all">All Regiments</option>
                  {regiments.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Leave a Message */}
              <div className="glass rounded-3xl p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare size={18} /> Leave a Tribute
                </h2>
                <input
                  type="text"
                  placeholder="Your name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4 py-3 mb-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-army-green-500 transition-colors"
                />
                <textarea
                  placeholder="Write your tribute message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-army-green-500 transition-colors resize-none"
                />
                <button
                  onClick={handleLeaveTribute}
                  className="w-full mt-4 px-6 py-3 bg-army-green-600 text-white font-medium rounded-xl hover:bg-army-green-500 transition-colors flex items-center justify-center gap-2"
                >
                  <Flame size={18} /> Light Candle & Leave Message
                </button>
              </div>

              {/* Stats */}
              <div className="glass rounded-3xl p-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-amber-500">{tributes.reduce((acc, t) => acc + t.candles, 0)}</p>
                  <p className="text-white/60 text-sm mt-1">Candles Lit</p>
                </div>
              </div>
            </div>

            {/* Heroes Grid & Tributes */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Tributes */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Heart size={20} className="text-red-500" /> Recent Tributes
                </h2>
                <div className="space-y-4">
                  {tributes.slice(0, 5).map((tribute, index) => (
                    <motion.div
                      key={tribute.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass rounded-2xl p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-medium text-amber-400">{tribute.name}</p>
                          <p className="text-white/70 mt-1">{tribute.message}</p>
                          <p className="text-xs text-white/40 mt-2">{tribute.date}</p>
                        </div>
                        <button
                          onClick={() => handleLightCandle(tribute.id)}
                          className="flex items-center gap-1 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 hover:bg-amber-500/20 transition-colors"
                        >
                          <Flame size={14} className="animate-pulse" />
                          <span className="text-sm">{tribute.candles}</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Heroes Grid */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Honored Heroes</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {filteredHeroes.map((hero, index) => (
                    <motion.div
                      key={hero.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="glass rounded-2xl p-5 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-army-green-600/30 flex items-center justify-center text-lg font-bold text-army-green-500">
                          {hero.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{hero.name}</h3>
                          <p className="text-xs text-white/60">{hero.rank}, {hero.regiment}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                        <span>📍 {hero.hometown}</span>
                        <span>•</span>
                        <span>{hero.operation}, {hero.yearOfDeath}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {hero.medals.slice(0, 2).map((medal, i) => (
                          <span key={i} className="px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 rounded text-xs text-yellow-400">
                            {medal}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
