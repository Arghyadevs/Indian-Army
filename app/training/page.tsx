"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Target, MapPin, ChevronRight, Award, Heart } from "lucide-react";
import Link from "next/link";

interface EntryPath {
  name: string;
  fullName: string;
  eligibility: string;
  ageLimit: string;
  description: string;
  stages: string[];
  famousAlumni: string[];
  icon: string;
}

const entryPaths: EntryPath[] = [
  {
    name: "NDA",
    fullName: "National Defence Academy",
    eligibility: "10+2 passed",
    ageLimit: "16.5 - 19.5 years",
    description: "The world's first tri-service academy where cadets undergo rigorous military training before joining their respective service academies.",
    stages: ["Written Exam", "SSB Interview", "Medical Examination", "Merit List", "Training"],
    famousAlumni: ["Abdul Hamid", "Vikram Batra", "Arun Khetarpal"],
    icon: "🎓"
  },
  {
    name: "CDS",
    fullName: "Combined Defence Services",
    eligibility: "Graduate",
    ageLimit: "19 - 25 years (varies)",
    description: "Entry for graduates into IMA, OTA, INA, and AFA. Candidates undergo rigorous selection and training at respective academies.",
    stages: ["Written Exam", "SSB Interview", "Medical Examination", "Merit List", "Training at Academy"],
    famousAlumni: ["Manoj Kumar Pandey", "Grenadier Abdul Hamid"],
    icon: "⭐"
  },
  {
    name: "TES",
    fullName: "Technical Entry Scheme",
    eligibility: "10+2 with PCM",
    ageLimit: "16.5 - 19.5 years",
    description: "Entry for technically qualified candidates who join engineering courses at military colleges.",
    stages: ["Shortlisting", "SSB Interview", "Medical Examination", "Engineering Training", "Commission"],
    famousAlumni: ["Various Army Engineers"],
    icon: "🔧"
  },
  {
    name: "NCC",
    fullName: "National Cadet Corps Special Entry",
    eligibility: "NCC 'C' Certificate with A/B Grade",
    ageLimit: "19 - 25 years",
    description: "Direct entry for NCC cadets with excellent records and leadership qualities.",
    stages: ["NCC 'C' Certificate", "Shortlisting", "SSB Interview", "Medical", "Training"],
    famousAlumni: ["Many decorated officers"],
    icon: "🏅"
  },
  {
    name: "JAG",
    fullName: "Judge Advocate General Branch",
    eligibility: "Law Graduate",
    ageLimit: "21 - 27 years",
    description: "Entry for law graduates into the Indian Army's legal division.",
    stages: ["Application", "SSB Interview", "Medical", "Commission"],
    famousAlumni: ["Legal Officers of Indian Army"],
    icon: "⚖️"
  },
  {
    name: "AFCAT",
    fullName: "Air Force Common Admission Test",
    eligibility: "Graduate with required subjects",
    ageLimit: "20 - 24 years",
    description: "Entry into Indian Air Force for flying, ground duty, and technical branches.",
    stages: ["Online Exam", "SSB Interview", "Medical", "Training at AFA"],
    famousAlumni: ["Air Force Warriors"],
    icon: "✈️"
  }
];

export default function TrainingPage() {
  const [selectedPath, setSelectedPath] = useState(entryPaths[0]);

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
              <GraduationCap className="w-6 h-6 text-army-green-500" />
              <span className="text-army-green-500 text-sm tracking-widest uppercase">
                Path to Commission
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the Indian Army</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Multiple pathways exist to join the Indian Army. Each route has its own requirements 
              and leads to a distinguished career defending the nation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Entry Paths Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass rounded-3xl p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Entry Schemes</h2>
                <div className="space-y-3">
                  {entryPaths.map((path) => (
                    <button
                      key={path.name}
                      onClick={() => setSelectedPath(path)}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        selectedPath.name === path.name
                          ? "bg-army-green-600/30 border border-army-green-500"
                          : "bg-white/5 hover:bg-white/10 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{path.icon}</span>
                        <div>
                          <p className="font-medium">{path.name}</p>
                          <p className="text-xs text-white/60">{path.fullName}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Path Details */}
            <div className="lg:col-span-2">
              <motion.div
                key={selectedPath.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-army-green-600/30 flex items-center justify-center text-4xl">
                    {selectedPath.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedPath.name}</h2>
                    <p className="text-army-green-400">{selectedPath.fullName}</p>
                  </div>
                </div>

                <p className="text-white/70 text-lg mb-6">
                  {selectedPath.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-5 bg-white/5 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-amber-500" />
                      <span className="text-amber-400 font-medium">Eligibility</span>
                    </div>
                    <p className="text-white/80">{selectedPath.eligibility}</p>
                  </div>

                  <div className="p-5 bg-white/5 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-amber-500" />
                      <span className="text-amber-400 font-medium">Age Limit</span>
                    </div>
                    <p className="text-white/80">{selectedPath.ageLimit}</p>
                  </div>
                </div>

                {/* Selection Stages */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ChevronRight className="text-army-green-500" size={20} />
                    Selection Process
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPath.stages.map((stage, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-army-green-900/30 border border-army-green-500/30 rounded-full text-sm"
                      >
                        {stage}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Famous Alumni */}
                <div className="p-5 bg-amber-900/10 rounded-2xl border border-amber-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span className="text-amber-400 font-medium">Notable Alumni</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedPath.famousAlumni.map((alumni, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-sm"
                      >
                        {alumni}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Training Academies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <h3 className="text-xl font-semibold mb-4">Training Academies</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="glass rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-army-green-600/20 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-army-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold">National Defence Academy</h4>
                        <p className="text-xs text-white/60">Pune, Maharashtra</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">
                      Tri-service academy providing foundational military training to cadets.
                    </p>
                  </div>

                  <div className="glass rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-army-green-600/20 flex items-center justify-center">
                        <Target className="w-6 h-6 text-army-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Indian Military Academy</h4>
                        <p className="text-xs text-white/60">Dehradun, Uttarakhand</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">
                      Premier training institution for officers of the Indian Army.
                    </p>
                  </div>

                  <div className="glass rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-army-green-600/20 flex items-center justify-center">
                        <Award className="w-6 h-6 text-army-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Officers Training Academy</h4>
                        <p className="text-xs text-white/60">Chennai, Tamil Nadu</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">
                      Trains short-service commission officers for the Indian Army.
                    </p>
                  </div>

                  <div className="glass rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Military School</h4>
                        <p className="text-xs text-white/60">Various Locations</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">
                      Prepares students from Class 6-12 for a career in armed forces.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12 gap-4"
          >
            <Link
              href="/regiments"
              className="flex items-center gap-2 px-6 py-3 bg-army-green-600 text-white font-medium rounded-full hover:bg-army-green-500 transition-colors"
            >
              View Regiments <ChevronRight size={18} />
            </Link>
            <Link
              href="/salute"
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Pay Your Salute
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

