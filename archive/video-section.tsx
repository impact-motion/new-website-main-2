"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Meet the Team Behind Your Success
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            Get to know us! We're passionate about helping B2B companies grow through strategic lead generation.
          </p>
        </div>

        <div className="relative group">
          {/* Video container with modern styling */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-video">
            <video
              className="w-full h-full object-cover"
              controls={isPlaying}
              poster="/professional-business-women-team.jpg"
              onClick={() => setIsPlaying(true)}
            >
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play button overlay */}
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300"
              >
                <div className="relative">
                  {/* Pulsing ring effect */}
                  <div className="absolute inset-0 bg-pink-500/30 rounded-full animate-ping" />

                  {/* Play button */}
                  <div className="relative bg-gradient-to-br from-pink-500 to-purple-600 rounded-full p-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-12 h-12 text-white fill-white ml-1" />
                  </div>
                </div>
              </button>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-20" />
        </div>

        {/* Optional: Add a caption or CTA below */}
        <div className="text-center mt-8">
          <p className="text-slate-600 text-sm">
            Replace <code className="bg-slate-100 px-2 py-1 rounded text-pink-600">/your-video.mp4</code> with your
            actual video file path
          </p>
        </div>
      </div>
    </section>
  )
}
