import React, { useState } from 'react';
import { Video, Play, Pause, Volume2, VolumeX, ShieldAlert } from 'lucide-react';

interface VideoSectionProps {
  isDarkMode: boolean;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ isDarkMode }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const togglePlay = () => {
    const video = document.getElementById('penguin-bg-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = document.getElementById('penguin-bg-video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="video-section" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-slate-950' : 'bg-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Video className="w-3.5 h-3.5" />
            <span>Interactive Video Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            See Penguin IT Security in Action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Watch how our 24/7 Security Operations Center mitigates threats and isolates infected endpoints in real-time.
          </p>
        </div>

        {/* Video Container Frame */}
        <div className="relative rounded-3xl border border-cyan-500/40 bg-slate-900 shadow-2xl overflow-hidden max-w-5xl mx-auto group">
          
          {/* HTML5 Video Element */}
          <video
            id="penguin-bg-video"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-[400px] sm:h-[500px] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            poster="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
          >
            {/* Free Royalty Free Sample Data Tech Video Stream */}
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video streaming.
          </video>

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none"></div>

          {/* Video Control Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 z-20">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-3 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <div className="hidden sm:block">
                <div className="text-xs font-bold text-white font-display">Penguin_IT_SOC_LiveFeed.mp4</div>
                <div className="text-[10px] font-mono text-cyan-400">Stream Status: Live 1080p 60fps</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono text-slate-300 font-semibold">SOC Monitoring Active</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
