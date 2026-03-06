"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { bravehearts } from "@/data/bravehearts";
import { Volume2, VolumeX, Heart, Mail } from "lucide-react";

export default function LastLetterPage() {
  const [selectedHero, setSelectedHero] = useState(bravehearts[0]);
  const [showLetter, setShowLetter] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  const letterRef = useRef<HTMLDivElement>(null);

  const hero = selectedHero;

  useEffect(() => {
    setShowLetter(false);
    setTypedText("");
    setShowReveal(false);
    setIsPlaying(false);
    window.speechSynthesis?.cancel();
    window.dispatchEvent(new Event('resume-bg-music'));

    const timer = setTimeout(() => {
      setShowLetter(true);
      startTyping();
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.speechSynthesis?.cancel();
      window.dispatchEvent(new Event('resume-bg-music'));
    };
  }, [hero]);

  const startTyping = () => {
    if (!hero.letter) {
      setShowReveal(true);
      return;
    }

    // Stop any existing speech and pause bg music
    window.speechSynthesis?.cancel();

    let index = 0;
    setIsPlaying(true);

    // Start narration
    if ('speechSynthesis' in window) {
      window.dispatchEvent(new Event('pause-bg-music'));
      const utterance = new SpeechSynthesisUtterance(hero.letter);
      utterance.rate = 0.85; // Slower for emotional impact
      utterance.pitch = 0.9;
      utterance.onend = () => {
        window.dispatchEvent(new Event('resume-bg-music'));
      };
      window.speechSynthesis.speak(utterance);
    }
    
    const interval = setInterval(() => {
      if (index < hero.letter!.length) {
        setTypedText(hero.letter!.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsPlaying(false);
        setTimeout(() => setShowReveal(true), 1500);
      }
    }, 80);

    return () => clearInterval(interval);
  };

  const handleHeroSelect = (newHero: typeof bravehearts[0]) => {
    setSelectedHero(newHero);
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="min-h-screen pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-army-green-500" />
              <span className="text-army-green-500 text-sm tracking-widest uppercase">
                Emotional Centerpiece
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The Last Letter</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Words written in the shadows of duty, never meant to be read aloud. 
              These are the final messages from heroes to their loved ones.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Hero Selection Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass rounded-3xl p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Choose a Hero</h2>
                <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                  {bravehearts.filter(h => h.letter).map((h) => (
                    <button
                      key={h.id}
                      onClick={() => handleHeroSelect(h)}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        hero.id === h.id
                          ? "bg-army-green-600/30 border border-army-green-500"
                          : "bg-white/5 hover:bg-white/10 border border-transparent"
                      }`}
                    >
                      <p className="font-medium">{h.name}</p>
                      <p className="text-xs text-white/60">{h.rank} • {h.operation}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Letter Display */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
              >
                {/* Paper Texture Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-950/10 to-transparent pointer-events-none" />

                {/* Hero Info Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                  <div className="w-16 h-16 rounded-full bg-army-green-600/30 flex items-center justify-center text-2xl font-bold text-army-green-500">
                    {hero.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{hero.name}</h2>
                    <p className="text-white/60">
                      {hero.rank}, {hero.regiment} • {hero.yearOfDeath}
                    </p>
                  </div>
                </div>

                {/* Letter Content */}
                <div className="relative min-h-[300px]">
                  {showLetter && hero.letter ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="prose prose-invert max-w-none"
                      >
                        <p className="text-lg md:text-xl leading-relaxed font-serif italic text-amber-100/90">
                          {typedText}
                          <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-2 h-6 bg-amber-400 ml-1 align-middle"
                          />
                        </p>
                      </motion.div>

                      {/* Audio Toggle */}
                      <button
                        onClick={startTyping}
                        className="absolute bottom-0 right-0 flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                      >
                        {isPlaying ? (
                          <>
                            <Volume2 size={16} /> Playing...
                          </>
                        ) : (
                          <>
                            <Volume2 size={16} /> Replay
                          </>
                        )}
                      </button>
                    </>
                  ) : !hero.letter ? (
                    <div className="text-center py-12">
                      <p className="text-white/60 mb-4">No letter available for this hero.</p>
                      <p className="text-sm text-white/40 italic">
                        "Their deeds speak louder than words ever could."
                      </p>
                    </div>
                  ) : null}
                </div>

                {/* Hero Reveal */}
                <AnimatePresence>
                  {showReveal && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-8 p-6 bg-gradient-to-r from-army-green-900/50 to-transparent rounded-2xl border border-army-green-500/30"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <Heart className="w-6 h-6 text-red-500 animate-pulse" />
                        <span className="text-army-green-400 uppercase tracking-widest text-sm">
                          In Memory Of
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{hero.name}</h3>
                      <p className="text-white/70 mb-2">
                        <span className="text-army-green-500">Operation:</span> {hero.operation}
                      </p>
                      <p className="text-white/60 text-sm">
                        Born in {hero.hometown}, martyred at age {hero.age}. His final words and 
                        sacrifice will never be forgotten.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {hero.medals.map((medal, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-xs text-yellow-400"
                          >
                            {medal}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Disclaimer */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/40 text-center italic">
                    * This letter is an inspired narrative created to honor the memory of {hero.name}. 
                    It is not an actual letter written by the hero, but represents the emotions 
                    and sentiments of soldiers who serve our nation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
