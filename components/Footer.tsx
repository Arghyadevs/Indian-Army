"use client";

import Link from "next/link";
import { Flame, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-army-green-500" />
              <span className="text-lg font-semibold">OPERATION: TRIBUTE</span>
            </Link>
            <p className="text-white/60 text-sm max-w-md">
              A non-official digital memorial created to honor the brave soldiers 
              of India. This project is a tribute to their courage, sacrifice, 
              and legacy.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-white/40">
              <span>Not affiliated with Government of India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/timeline" className="hover:text-white transition-colors">Timeline of Courage</Link></li>
              <li><Link href="/commands" className="hover:text-white transition-colors">Commands & Map</Link></li>
              <li><Link href="/regiments" className="hover:text-white transition-colors">Army Regiments</Link></li>
              <li><Link href="/ranks" className="hover:text-white transition-colors">Army Ranks</Link></li>
              <li><Link href="/women" className="hover:text-white transition-colors">Women in Army</Link></li>
              <li><Link href="/operations" className="hover:text-white transition-colors">Operations</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Visual Gallery</Link></li>
              <li><Link href="/equipment" className="hover:text-white transition-colors">Equipment</Link></li>
              <li><Link href="/stories" className="hover:text-white transition-colors">Stories of Valor</Link></li>
              <li><Link href="/mottoes" className="hover:text-white transition-colors">Mottoes & Slogans</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/last-letter" className="hover:text-white transition-colors">The Last Letter</Link></li>
              <li><Link href="/memorial" className="hover:text-white transition-colors">Memorial Wall</Link></li>
              <li><Link href="/training" className="hover:text-white transition-colors">Join the Army</Link></li>
              <li><Link href="/salute" className="hover:text-white transition-colors">Salute Ceremony</Link></li>
              <li><a href="https://www.indianarmy.nic.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Official Website</a></li>
              <li><a href="https://www.augcf.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Army Welfare Fund</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Operation: Tribute. Made with <Heart className="inline w-3 h-3 text-red-500 mx-1" /> for the Indian Army.
          </p>
          <p className="text-xs text-white/40">
            JAI HIND 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}

