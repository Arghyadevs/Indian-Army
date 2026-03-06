"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  Shield, 
  Crosshair, 
  Plane, 
  Trophy, 
  Medal, 
  Target, 
  ChevronRight,
  Star,
  Zap,
  Flame
} from "lucide-react";
import Link from "next/link";

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  category: string;
  stats?: string;
}

const galleryItems: GalleryItem[] = [
  // Vehicles
  { 
    id: 1, 
    title: "Arjun MBT", 
    subtitle: "Main Battle Tank", 
    description: "India's indigenous main battle tank developed by DRDO. Features a 120mm rifled gun and composite armor protection.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Arjun_MBT_at_RDC_2015_%28cropped%29.jpg/640px-Arjun_MBT_at_RDC_2015_%28cropped%29.jpg", 
    category: "vehicles", 
    stats: "60 tons | 65 km/h | 120mm gun" 
  },
  { 
    id: 2, 
    title: "T-90 Bhishma", 
    subtitle: "Main Battle Tank", 
    description: "Russian-origin main battle tank equipped with Kontakt-5 explosive reactive armor and thermal imaging sights.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/T-90MS_%28cropped%29.jpg/640px-T-90MS_%28cropped%29.jpg", 
    category: "vehicles", 
    stats: "46 tons | 65 km/h | 125mm gun" 
  },
  { 
    id: 3, 
    title: "K9 Vajra", 
    subtitle: "Self-Propelled Howitzer", 
    description: "155mm/52-caliber self-propelled artillery developed jointly with South Korea. Features automatic ammunition handling system.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/K9_Vajra_at_RDC_2018_%28cropped%29.jpg/640px-K9_Vajra_at_RDC_2018_%28cropped%29.jpg", 
    category: "vehicles", 
    stats: "47 tons | 38 km/h | 40km range" 
  },
  { 
    id: 4, 
    title: "BMP-2 Sarath", 
    subtitle: "Infantry Fighting Vehicle", 
    description: "Soviet-origin infantry fighting vehicle used by Indian Army infantry units. Equipped with 30mm autocannon.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/BMP-2_at_RDC_2015_%28cropped%29.jpg/640px-BMP-2_at_RDC_2015_%28cropped%29.jpg", 
    category: "vehicles", 
    stats: "14.3 tons | 65 km/h | 30mm gun" 
  },
  { 
    id: 5, 
    title: "Pinaka MBRL", 
    subtitle: "Multi-Barrel Rocket Launcher", 
    description: "Indigenously developed 214mm multi-barrel rocket launcher system for the Indian Army.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pinaka_M-215_Rocket_System.jpg/640px-Pinaka_M-215_Rocket_System.jpg", 
    category: "vehicles", 
    stats: "40km range | 12 rockets | 45 sec reload" 
  },
  { 
    id: 6, 
    title: "T-72 Ajeya", 
    subtitle: "Main Battle Tank", 
    description: "Soviet-origin main battle tank that forms the backbone of Indian Army's armored corps.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/T-72M1.jpg/640px-T-72M1.jpg", 
    category: "vehicles", 
    stats: "41 tons | 60 km/h | 125mm gun" 
  },
  
  // Aircraft
  { 
    id: 7, 
    title: "Dassault Rafale", 
    subtitle: "Multirole Fighter", 
    description: "French 4.5 generation twin-engine multirole fighter. Equipped with Meteor missiles and advanced avionics.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Dassault_Rafale_M_%28R%C3%A9seau_C%C3%A9ph%C3%A9e%29.jpg/640px-Dassault_Rafale_M_%28R%C3%A9seau_C%C3%A9ph%C3%A9e%29.jpg", 
    category: "aircraft", 
    stats: "Mach 2 | 3,700 km range | 14 hardpoints" 
  },
  { 
    id: 8, 
    title: "MiG-29UPG", 
    subtitle: "Fighter Aircraft", 
    description: "Upgraded MiG-29 with modern avionics, glass cockpit, and improved weapons capability.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mikoyan_MiG-29_at_RDC_2015_%28cropped%29.jpg/640px-Mikoyan_MiG-29_at_RDC_2015_%28cropped%29.jpg", 
    category: "aircraft", 
    stats: "Mach 2.3 | 1,400 km range" 
  },
  { 
    id: 9, 
    title: "Su-30MKI", 
    subtitle: "Heavy Fighter", 
    description: "Russian-origin air superiority fighter with thrust vectoring capability. Backbone of IAF.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sukhoi_Su-30MKI_at_RDC_2015_%28cropped%29.jpg/640px-Sukhoi_Su-30MKI_at_RDC_2015_%28cropped%29.jpg", 
    category: "aircraft", 
    stats: "Mach 2 | 5,500 km range | 12 hardpoints" 
  },
  { 
    id: 10, 
    title: "C-130J Super Hercules", 
    subtitle: "Transport Aircraft", 
    description: "American tactical airlifter used for special operations and humanitarian missions.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Lockheed_C-130J_Super_Hercules.jpg/640px-Lockheed_C-130J_Super_Hercules.jpg", 
    category: "aircraft", 
    stats: "20,000 kg payload | 3,300 km range" 
  },
  { 
    id: 11, 
    title: "C-17 Globemaster III", 
    subtitle: "Strategic Transport", 
    description: "American heavy-lift strategic air transport aircraft for large cargo and troops.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Boeing_C-17_Globemaster_III_at_RDC_2015_%28cropped%29.jpg/640px-Boeing_C-17_Globemaster_III_at_RDC_2015_%28cropped%29.jpg", 
    category: "aircraft", 
    stats: "77,000 kg payload | 4,482 km range" 
  },
  { 
    id: 12, 
    title: "CH-47 Chinook", 
    subtitle: "Heavy-Lift Helicopter", 
    description: "American twin-engine heavy-lift helicopter for cargo and troop transport.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Boeing_CH-47_Chinook_at_RDC_2015.jpg/640px-Boeing_CH-47_Chinook_at_RDC_2015.jpg", 
    category: "aircraft", 
    stats: "12 tons payload | 850 km range" 
  },
  
  // Weapons
  { 
    id: 13, 
    title: "BrahMos Missile", 
    subtitle: "Supersonic Cruise Missile", 
    description: "World's fastest supersonic cruise missile developed jointly with Russia. Capable of sea, land, and submarine launch.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/BrahMos_%28cropped%29.jpg/640px-BrahMos_%28cropped%29.jpg", 
    category: "weapons", 
    stats: "Mach 2.8 | 300km range | 200-300 kg warhead" 
  },
  { 
    id: 14, 
    title: "Akash Missile", 
    subtitle: "Surface-to-Air Missile", 
    description: "Indigenously developed medium-range surface-to-air missile system with active radar homing guidance.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Akash_missile_%28cropped%29.jpg/640px-Akash_missile_%28cropped%29.jpg", 
    category: "weapons", 
    stats: "30km range | 18km altitude | 55kg warhead" 
  },
  { 
    id: 15, 
    title: "Prithvi Missile", 
    subtitle: "Surface-to-Surface Ballistic Missile", 
    description: "Indigenously developed tactical ballistic missile. Part of India's strategic deterrent.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Prithvi_II.jpg/640px-Prithvi_II.jpg", 
    category: "weapons", 
    stats: "350km range | 500-1000 kg warhead" 
  },
  { 
    id: 16, 
    title: "INSAS Rifle", 
    subtitle: "Assault Rifle", 
    description: "Indian Small Arms System - the standard assault rifle of Indian Armed Forces.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/INSAS_rifle.jpg/640px-INSAS_rifle.jpg", 
    category: "weapons", 
    stats: "5.56x45mm | 400m effective range | 30-round mag" 
  },
  { 
    id: 17, 
    title: "SIG Sauer MCX", 
    subtitle: "Assault Rifle", 
    description: "Modern modular assault rifle adopted by Indian special forces. Features short-stroke gas piston.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/SIG_Sauer_MCX_%28cropped%29.jpg/640px-SIG_Sauer_MCX_%28cropped%29.jpg", 
    category: "weapons", 
    stats: "7.62x39mm | 600m effective range | Modular design" 
  },
  { 
    id: 18, 
    title: "Carl Gustaf M4", 
    subtitle: "Recoilless Rifle", 
    description: "Swedish 84mm multi-role portable anti-armor weapon used by Indian Army.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Carl_Gustaf_M4_%28cropped%29.jpg/640px-Carl_Gustaf_M4_%28cropped%29.jpg", 
    category: "weapons", 
    stats: "84mm | 500m range | Multi-munition capable" 
  },
  
  // Medals
  { 
    id: 19, 
    title: "Param Vir Chakra", 
    subtitle: "Highest Military Honor", 
    description: "India's highest military decoration awarded for wartime gallantry. Established in 1950.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Param_Vir_Chakra_%28PVC%29.jpg/640px-Param_Vir_Chakra_%28PVC%29.jpg", 
    category: "medals", 
    stats: "3 recipients in 1971 war" 
  },
  { 
    id: 20, 
    title: "Ashoka Chakra", 
    subtitle: "Peacetime Gallantry", 
    description: "Highest peacetime military award in India for acts of exceptional courage.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Ashoka_Chakra.jpg/640px-Ashoka_Chakra.jpg", 
    category: "medals", 
    stats: "Established 1952 | Multiple recipients" 
  },
  { 
    id: 21, 
    title: "Maha Vir Chakra", 
    subtitle: "War Gallantry Award", 
    description: "India's second highest military decoration for wartime gallantry after PVC.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Maha_Vir_Chakra_%28MVC%29.jpg/640px-Maha_Vir_Chakra_%28MVC%29.jpg", 
    category: "medals", 
    stats: "Multiple recipients | Bronze medallion" 
  },
  { 
    id: 22, 
    title: "Vir Chakra", 
    subtitle: "Gallantry Award", 
    description: "Third highest war gallantry award in India. Awarded for acts of bravery.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vir_Chakra_%28VR%29.jpg/640px-Vir_Chakra_%28VR%29.jpg", 
    category: "medals", 
    stats: "Multiple recipients | Bronze medal" 
  },
  { 
    id: 23, 
    title: "Vishisht Seva Medal", 
    subtitle: "Distinguished Service", 
    description: "Award for distinguished service of a high order by junior commissioned officers.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Vishisht_Seva_Medal_%28VSM%29.jpg/640px-Vishisht_Seva_Medal_%28VSM%29.jpg", 
    category: "medals", 
    stats: "Multiple recipients | Silver medallion" 
  },
  { 
    id: 24, 
    title: "Sena Medal", 
    subtitle: "Bravery Award", 
    description: "Award for individual acts of bravery for junior commissioned officers and other ranks.", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Sena_Medal_%28SM%29.jpg/640px-Sena_Medal_%28SM%29.jpg", 
    category: "medals", 
    stats: "Multiple recipients | Bronze medal" 
  },
];

const categories = [
  { id: "all", label: "All", icon: Shield },
  { id: "vehicles", label: "Vehicles", icon: Crosshair },
  { id: "aircraft", label: "Aircraft", icon: Plane },
  { id: "weapons", label: "Weapons", icon: Target },
  { id: "medals", label: "Medals", icon: Trophy },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getBackgroundGradient = (category: string) => {
    switch (category) {
      case "vehicles": return "from-amber-900/30 to-orange-900/30 border-amber-500/30";
      case "aircraft": return "from-blue-900/30 to-cyan-900/30 border-blue-500/30";
      case "weapons": return "from-red-900/30 to-rose-900/30 border-red-500/30";
      case "medals": return "from-yellow-900/30 to-amber-900/30 border-yellow-500/30";
      default: return "from-army-green-900/30 to-emerald-900/30 border-army-green-500/30";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "vehicles": return "bg-amber-500/20 text-amber-400";
      case "aircraft": return "bg-blue-500/20 text-blue-400";
      case "weapons": return "bg-red-500/20 text-red-400";
      case "medals": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-army-green-500/20 text-army-green-400";
    }
  };

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
                Visual Gallery
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Indian Army Arsenal</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Explore the visual gallery of India's military might - from battle tanks and fighter 
              aircraft to the prestigious medals that honor our brave soldiers.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-amber-600 text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                <cat.icon size={18} />
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                onClick={() => setSelectedItem(item)}
                className={`glass rounded-3xl p-4 cursor-pointer group hover:bg-white/10 transition-all border ${getBackgroundGradient(item.category)}`}
              >
                {/* Image Container */}
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-white/5">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium capitalize ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-amber-400 mb-2">{item.subtitle}</p>
                  <p className="text-white/60 text-sm line-clamp-2 mb-3">{item.description}</p>
                  
                  {item.stats && (
                    <div className="flex items-center gap-2">
                      <Zap size={12} className="text-amber-500" />
                      <span className="text-xs text-white/50">{item.stats}</span>
                    </div>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-white/50">Click for details</span>
                  <ChevronRight size={16} className="text-amber-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 glass rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Indian Army By Numbers</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-b from-amber-900/20 to-transparent rounded-2xl">
                <Medal className="w-12 h-12 mx-auto mb-3 text-amber-500" />
                <p className="text-4xl font-bold text-amber-500">4,000+</p>
                <p className="text-white/60 text-sm mt-1">Main Battle Tanks</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-blue-900/20 to-transparent rounded-2xl">
                <Plane className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                <p className="text-4xl font-bold text-blue-500">2,000+</p>
                <p className="text-white/60 text-sm mt-1">Combat Aircraft</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-red-900/20 to-transparent rounded-2xl">
                <Target className="w-12 h-12 mx-auto mb-3 text-red-500" />
                <p className="text-4xl font-bold text-red-500">10,000+</p>
                <p className="text-white/60 text-sm mt-1">Artillery Pieces</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-yellow-900/20 to-transparent rounded-2xl">
                <Star className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
                <p className="text-4xl font-bold text-yellow-500">1.2M+</p>
                <p className="text-white/60 text-sm mt-1">Active Personnel</p>
              </div>
            </div>
          </motion.div>

          {/* Famous Operations Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Famous Operations Gallery</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="glass rounded-2xl p-6 text-center border-l-4 border-amber-500">
                <p className="text-4xl mb-3">🏔️</p>
                <h3 className="font-bold">Operation Vijay</h3>
                <p className="text-xs text-white/60 mt-1">Kargil War 1999</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center border-l-4 border-blue-500">
                <p className="text-4xl mb-3">✈️</p>
                <h3 className="font-bold">Surgical Strikes</h3>
                <p className="text-xs text-white/60 mt-1">2016</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center border-l-4 border-green-500">
                <p className="text-4xl mb-3">💥</p>
                <h3 className="font-bold">Balakot Airstrike</h3>
                <p className="text-xs text-white/60 mt-1">2019</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center border-l-4 border-red-500">
                <p className="text-4xl mb-3">🎖️</p>
                <h3 className="font-bold">Operation Parakram</h3>
                <p className="text-xs text-white/60 mt-1">2001-02</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center mt-12 gap-4"
          >
            <Link
              href="/equipment"
              className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-500 transition-colors"
            >
              View Equipment <ChevronRight size={18} />
            </Link>
            <Link
              href="/regiments"
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              View Regiments
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`glass rounded-3xl p-8 max-w-lg w-full border ${getBackgroundGradient(selectedItem.category)}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-white/5">
                  <Image
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-amber-400 mb-4">{selectedItem.subtitle}</p>
                <p className="text-white/70 mb-4">{selectedItem.description}</p>
                
                {selectedItem.stats && (
                  <div className="p-4 bg-white/5 rounded-2xl mb-4">
                    <p className="text-sm text-white/60">
                      <span className="text-amber-500">Specifications:</span> {selectedItem.stats}
                    </p>
                  </div>
                )}

                <span className={`inline-block px-3 py-1 rounded-full text-xs capitalize ${getCategoryColor(selectedItem.category)}`}>
                  {selectedItem.category}
                </span>
                
                <button
                  onClick={() => setSelectedItem(null)}
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
