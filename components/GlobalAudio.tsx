"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

export default function GlobalAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = 0.3;

    // Try to play automatically
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (err) {
        console.log("Autoplay blocked, waiting for user interaction");
      }
    };

    // Robust interaction handler
    const handleInteraction = async () => {
      if (audio.paused) {
        try {
          await audio.play();
        } catch (err) {
          console.log("Play failed on interaction:", err);
        }
      }
    };

    // Update state based on actual audio events
    const onPlay = () => {
      setIsPlaying(true);
      cleanupListeners();
    };
    const onPause = () => setIsPlaying(false);

    const cleanupListeners = () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    // Custom event listeners for other components to control audio
    const handlePauseBg = () => {
      if (audio && !audio.paused) {
        audio.pause();
      }
    };

    const handleResumeBg = () => {
      if (audio && audio.paused) {
        audio.play().catch(() => {});
      }
    };

    // Add listeners for any user interaction
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    window.addEventListener('pause-bg-music', handlePauseBg);
    window.addEventListener('resume-bg-music', handleResumeBg);
    
    playAudio();

    return () => {
      cleanupListeners();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      window.removeEventListener('pause-bg-music', handlePauseBg);
      window.removeEventListener('resume-bg-music', handleResumeBg);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <audio
        ref={audioRef}
        src="/Sandese_Aate_Hai.mp3"
        loop
        preload="auto"
        onError={(e) => console.error("Audio load error:", e)}
      />
      
      <div className="glass rounded-full p-2 flex items-center gap-2 border border-white/10 bg-black/50 backdrop-blur-md">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-army-green-600 hover:bg-army-green-500 flex items-center justify-center transition-colors shadow-lg shadow-army-green-900/20"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? (
            <Pause size={18} className="text-white" />
          ) : (
            <Play size={18} className="text-white ml-1" />
          )}
        </button>
        
        <div className="flex flex-col px-2 hidden md:flex">
          <span className="text-xs font-medium text-white">Sandese Aate Hai</span>
          <span className="text-[10px] text-white/60">Tribute Audio</span>
        </div>

        <button
          onClick={toggleMute}
          className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX size={16} className="text-white/70" />
          ) : (
            <Volume2 size={16} className="text-white/70" />
          )}
        </button>
      </div>
    </motion.div>
  );
}