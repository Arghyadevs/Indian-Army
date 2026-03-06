"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import { bravehearts } from "@/data/bravehearts";
import { Award, Star, Search } from "lucide-react";

export default function StoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegiment, setSelectedRegiment] = useState("All");

  const regiments = ["All", ...Array.from(new Set(bravehearts.map(h => h.regiment)))];

  const filteredHeroes = bravehearts.filter(hero => {
    const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hero.operation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegiment = selectedRegiment === "All" || hero.regiment === selectedRegiment;
    return matchesSearch && matchesRegiment;
  });

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 px-6 overflow-hidden">
        <div className="absolute inset-0 army-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-army-green-950/30 via-transparent to-black" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-6 h-6 text-yellow-500" />
            <span className="text-yellow-500 text-sm tracking-widest uppercase">
              Acts of Valor
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stories of Valor</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Individual acts of extraordinary courage that turned the tide of battle. 
            These are the stories of soldiers who became legends.
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-500">{bravehearts.length}</p>
              <p className="text-xs text-white/60 uppercase tracking-wider">Heroes</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-500">
                {bravehearts.filter(h => h.medals.some(m => m.includes("Param Vir Chakra"))).length}
              </p>
              <p className="text-xs text-white/60 uppercase tracking-wider">PVC Awarded</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-500">
                {bravehearts.reduce((acc, h) => acc + h.medals.length, 0)}
              </p>
              <p className="text-xs text-white/60 uppercase tracking-wider">Total Medals</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stories Grid */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="text"
                  placeholder="Search heroes, operations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-army-green-500 transition-colors"
                />
              </div>
              <p className="text-white/40 text-sm">Showing {filteredHeroes.length} heroes</p>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {regiments.map(regiment => (
                <button
                  key={regiment}
                  onClick={() => setSelectedRegiment(regiment)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all border ${
                    selectedRegiment === regiment
                      ? "bg-army-green-600 border-army-green-500 text-white"
                      : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {regiment}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHeroes.map((hero, index) => (
              <StoryCard key={hero.id} hero={hero} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
