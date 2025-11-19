"use client";
import React from "react";
import { Play, Dumbbell, Trophy, Users, Weight } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#111] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center text-white mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            Why Choose Us
          </h2>
          <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
            Professional coaching, world-class training programs, and a community that pushes you to become your best.
          </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT — VIDEO IMAGE WITH PLAY BUTTON */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576435728678-1d5f4f6cde89"
              className="w-full h-[450px] object-cover rounded-lg"
              alt="Boxing video"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black w-24 h-24 rounded-md flex items-center justify-center shadow-lg">
                <Play className="text-white w-10 h-10" fill="white" />
              </div>
            </button>
          </div>

          {/* RIGHT — 4 REASONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-white">

            {/* 1 — COACHING */}
            <div>
              <Dumbbell className="w-8 h-8 mb-3 text-white" />
              <h3 className="text-2xl font-extrabold uppercase">Coaching</h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Elite trainers helping you grow safely and effectively.
              </p>
            </div>

            {/* 2 — GROUP CLASSES */}
            <div>
              <Users className="w-8 h-8 mb-3 text-white" />
              <h3 className="text-2xl font-extrabold uppercase">Group Classes</h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Fun and high-energy sessions for all levels.
              </p>
            </div>

            {/* 3 — RECREATIONAL */}
            <div>
              <Weight className="w-8 h-8 mb-3 text-white" />
              <h3 className="text-2xl font-extrabold uppercase">Recreational</h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Improve fitness, stamina, and technique at your pace.
              </p>
            </div>

            {/* 4 — COMPETITIVE */}
            <div>
              <Trophy className="w-8 h-8 mb-3 text-white" />
              <h3 className="text-2xl font-extrabold uppercase">Competitive</h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Train like a pro and prepare for real boxing events.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
