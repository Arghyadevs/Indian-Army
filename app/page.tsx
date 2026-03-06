"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroIntro from "@/components/HeroIntro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import StoryCard from "@/components/StoryCard";
import { bravehearts } from "@/data/bravehearts";
import { wars } from "@/data/wars";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [heroOfTheDay, setHeroOfTheDay] = useState(bravehearts[0]);

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
    setHeroOfTheDay(bravehearts[dayOfYear % bravehearts.length]);
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {showIntro ? (
        <HeroIntro onEnter={() => setShowIntro(false)} />
      ) : (
        <>
          {/* Hero Section After Intro */}
          <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-white">Remember Their</span>
                  <br />
                  <span className="text-army-green-500">Courage</span>
                </h1>
                <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
                  The Indian Army has protected our nation through seven decades of conflict, 
                  sacrifice, and unwavering dedication. This memorial stands as a testament 
                  to their bravery.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              >
                <div className="glass rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-bold text-army-green-500">76+</p>
                  <p className="text-white/60 text-sm mt-1">Years of Service</p>
                </div>
                <div className="glass rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-bold text-army-green-500">5</p>
                  <p className="text-white/60 text-sm mt-1">Major Wars</p>
                </div>
                <div className="glass rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-bold text-army-green-500">25+</p>
                  <p className="text-white/60 text-sm mt-1">Param Vir Chakras</p>
                </div>
                <div className="glass rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-bold text-army-green-500">1.2M+</p>
                  <p className="text-white/60 text-sm mt-1">Active Personnel</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Hero of the Day */}
          <section className="py-10 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden border border-amber-500/30"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-amber-500">
                      <Calendar size={20} />
                      <span className="text-sm font-bold tracking-widest uppercase">Hero of the Day</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{heroOfTheDay.name}</h2>
                    <p className="text-xl text-white/70 mb-6">{heroOfTheDay.rank}, {heroOfTheDay.regiment}</p>
                    <p className="text-white/60 leading-relaxed mb-8 line-clamp-3">
                      {heroOfTheDay.story}
                    </p>
                    <Link 
                      href={`/stories/${heroOfTheDay.id}`}
                      className="inline-flex items-center gap-2 text-amber-500 font-semibold hover:gap-3 transition-all"
                    >
                      Read Full Story <ArrowRight size={20} />
                    </Link>
                  </div>
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/30 flex items-center justify-center shrink-0">
                    <span className="text-6xl md:text-8xl font-bold text-amber-500/50">{heroOfTheDay.name.charAt(0)}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Timeline Preview */}
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Timeline of Courage</h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Seven decades of defending the nation through conflicts that shaped India's destiny.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wars.slice(0, 6).map((war, index) => (
                  <motion.div
                    key={war.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass rounded-3xl p-6 hover:bg-white/10 transition-all group cursor-pointer"
                  >
                    <p className="text-army-green-500 text-sm tracking-widest mb-2">{war.year}</p>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-army-green-400 transition-colors">
                      {war.title}
                    </h3>
                    <p className="text-white/60 text-sm">{war.shortDesc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Stories Preview */}
          <section className="py-20 px-6 bg-gradient-to-b from-black to-army-green-950/20">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories of Valor</h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Individual acts of extraordinary courage that turned the tide of battle.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bravehearts.slice(0, 6).map((hero, index) => (
                  <StoryCard key={hero.id} hero={hero} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass rounded-3xl p-12 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-army-green-900/20 to-transparent" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Pay Your Tributes</h2>
                  <p className="text-white/60 mb-8 max-w-xl mx-auto">
                    Join thousands of others in honoring the brave souls who gave everything 
                    for our freedom. Light a candle. Leave a message. Salute their sacrifice.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/memorial"
                      className="px-8 py-4 bg-army-green-600 text-white font-semibold rounded-full hover:bg-army-green-500 transition-colors"
                    >
                      Memorial Wall
                    </a>
                    <a
                      href="/salute"
                      className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                    >
                      Salute Now
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Quick Navigation Cards */}
          <section className="py-10 px-6 pb-20">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the Indian Army</h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Discover the rich history, structure, and stories that make the Indian Army one of the world's finest military forces.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/ranks" className="glass rounded-3xl p-6 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center text-2xl">🏅</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-amber-400 transition-colors">Army Ranks</h3>
                      <p className="text-sm text-white/60">Complete hierarchy</p>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm">Explore the rank structure from Field Marshal to Sepoy, with insignia and descriptions.</p>
                </Link>

                <Link href="/women" className="glass rounded-3xl p-6 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl">👩‍✈️</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">Women in Army</h3>
                      <p className="text-sm text-white/60">Pioneering women</p>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm">Stories of women who broke barriers and made history in the Indian Army.</p>
                </Link>

                <Link href="/operations" className="glass rounded-3xl p-6 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl">🎯</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">Military Operations</h3>
                      <p className="text-sm text-white/60">Historic missions</p>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm">From Kargil to surgical strikes, explore India's military operations.</p>
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}
