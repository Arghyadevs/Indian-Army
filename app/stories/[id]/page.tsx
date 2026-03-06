"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBraveheartById, bravehearts } from "@/data/bravehearts";
import { ArrowLeft, Star, Award, MapPin, Calendar, User, ChevronRight, ChevronLeft, Share2, Check, Volume2, Square } from "lucide-react";

export default function StoryDetailPage() {
  const params = useParams();
  const hero = getBraveheartById(params.id as string);
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!hero) {
    return (
      <main className="min-h-screen bg-black">
        <Navbar />
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
          <h1 className="text-3xl font-bold text-white mb-4">Hero Not Found</h1>
          <Link href="/stories" className="text-army-green-500 hover:underline">
            Back to Stories
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const currentIndex = bravehearts.findIndex(h => h.id === hero.id);
  const prevHero = currentIndex > 0 ? bravehearts[currentIndex - 1] : null;
  const nextHero = currentIndex < bravehearts.length - 1 ? bravehearts[currentIndex + 1] : null;

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
      window.dispatchEvent(new Event('resume-bg-music'));
    };
  }, []);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: `Story of ${hero.name}`,
        text: `Read the story of ${hero.name}, a braveheart of the Indian Army.`,
        url: url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      window.dispatchEvent(new Event('resume-bg-music'));
    } else {
      window.dispatchEvent(new Event('pause-bg-music'));
      const utterance = new SpeechSynthesisUtterance(hero.story);
      utterance.rate = 0.9;
      utterance.onend = () => {
        setIsSpeaking(false);
        window.dispatchEvent(new Event('resume-bg-music'));
      };
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="min-h-screen pt-20 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} /> Back to Stories
          </Link>

          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 mb-8 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-army-green-500/10 rounded-full blur-3xl" />

            {/* Share Button */}
            <button 
              onClick={handleShare}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20 group"
              title="Share Story"
            >
              {copied ? <Check size={20} className="text-green-400" /> : <Share2 size={20} className="text-white/70 group-hover:text-white" />}
            </button>

            {/* Audio Button */}
            <button 
              onClick={handleSpeak}
              className="absolute top-6 right-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20 group"
              title={isSpeaking ? "Stop Narration" : "Listen to Story"}
            >
              {isSpeaking ? <Square size={20} className="text-red-400 fill-current" /> : <Volume2 size={20} className="text-white/70 group-hover:text-white" />}
            </button>

            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-32 h-32 rounded-full bg-army-green-600/30 flex items-center justify-center text-5xl font-bold text-army-green-500 shrink-0">
                {hero.name.charAt(0)}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{hero.name}</h1>
                <p className="text-xl text-white/70 mb-4">
                  {hero.rank}, {hero.regiment}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {hero.medals.map((medal, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-sm text-yellow-400"
                    >
                      <Award size={14} />
                      {medal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-4 mb-8"
          >
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <MapPin className="w-8 h-8 text-army-green-500 shrink-0" />
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Hometown</p>
                <p className="font-medium">{hero.hometown}</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <Calendar className="w-8 h-8 text-army-green-500 shrink-0" />
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Year of Sacrifice</p>
                <p className="font-medium">{hero.yearOfDeath}</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <User className="w-8 h-8 text-army-green-500 shrink-0" />
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Age</p>
                <p className="font-medium">{hero.age} years old</p>
              </div>
            </div>
          </motion.div>

          {/* Operation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass rounded-3xl p-8 mb-8"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Star className="text-amber-500" size={20} />
              Operation: {hero.operation}
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              {hero.story}
            </p>
          </motion.div>

          {/* Quote */}
          {hero.quote && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass rounded-3xl p-8 mb-8 border-l-4 border-amber-500"
            >
              <p className="text-2xl font-serif italic text-amber-100/90 mb-4">
                "{hero.quote}"
              </p>
              <p className="text-white/60">— {hero.name}, final words</p>
            </motion.div>
          )}

          {/* Letter */}
          {hero.letter && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass rounded-3xl p-8 mb-8"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">✉️</span>
                The Last Letter
              </h2>
              <div className="p-6 bg-amber-950/20 rounded-xl border border-amber-500/20">
                <p className="font-serif italic text-lg text-amber-100/80 leading-relaxed">
                  {hero.letter}
                </p>
              </div>
              <p className="text-xs text-white/40 mt-4 text-center italic">
                * This letter is an inspired narrative created to honor the memory of {hero.name}.
              </p>
            </motion.div>
          )}

          {/* Next/Prev Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex items-center justify-between mb-12 pt-8 border-t border-white/10"
          >
            {prevHero ? (
              <Link href={`/stories/${prevHero.id}`} className="flex items-center gap-2 text-white/60 hover:text-army-green-500 transition-colors group">
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wider">Previous Hero</p>
                  <p className="font-medium text-white group-hover:text-army-green-500">{prevHero.name}</p>
                </div>
              </Link>
            ) : <div />}
            
            {nextHero && (
              <Link href={`/stories/${nextHero.id}`} className="flex items-center gap-2 text-white/60 hover:text-army-green-500 transition-colors text-right group">
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider">Next Hero</p>
                  <p className="font-medium text-white group-hover:text-army-green-500">{nextHero.name}</p>
                </div>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/last-letter"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-army-green-600 text-white font-medium rounded-full hover:bg-army-green-500 transition-colors"
            >
              Read More Letters <ChevronRight size={18} />
            </Link>
            <Link
              href="/memorial"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Leave a Tribute
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
